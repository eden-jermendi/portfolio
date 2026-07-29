'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useFractalSystem } from '../providers/FractalSystemProvider';

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_dpr; // Device Pixel Ratio
  uniform float u_complexity;
  uniform float u_warp;
  uniform float u_subdivision;
  uniform float u_opacity;
  
  // 2D Random Hash
  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  // 2D Gradient Noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                   dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
               mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                   dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / min(u_resolution.x, u_resolution.y);
    
    // Base coordinate projection
    vec2 pos = st * (1.2 + u_complexity * 2.0); // Enlarged base noise scale
    
    // Ambient motion sway
    vec2 warpOffset = vec2(noise(pos + u_time * 0.0001), noise(pos + vec2(5.2, 1.3) - u_time * 0.0001));
    pos += warpOffset * u_warp;
    
    float n = noise(pos) * 0.5 + 0.5;
    
    // Base lines reduced by ~40%
    float lines = 1.0 + u_complexity * 7.0;
    float n_scaled = n * lines;
    
    float lineThickness = 0.40; // Soft gradient
    
    // Primary Contours (100% relative opacity)
    float v1 = fract(n_scaled);
    float lineMask1 = smoothstep(lineThickness, 0.5, abs(v1 - 0.5));
    
    // Secondary Contours (50% relative opacity, 2x frequency, fades in with subdivision)
    float v2 = fract(n_scaled * 2.0);
    float lineMask2 = smoothstep(lineThickness, 0.5, abs(v2 - 0.5)) * 0.5 * u_subdivision;
    
    // Tertiary Contours (20% relative opacity, 4x frequency, fades in slower)
    float v3 = fract(n_scaled * 4.0);
    float lineMask3 = smoothstep(lineThickness, 0.5, abs(v3 - 0.5)) * 0.2 * (u_subdivision * u_subdivision);
    
    // Combine tonal hierarchy
    float lineMask = max(lineMask1, max(lineMask2, lineMask3));
    
    // Smooth attenuation beneath the main content column.
    // u_resolution is physical pixels. u_dpr converts it back to logical layout pixels.
    // We calculate horizontal distance from the center of the screen in logical pixels.
    float logicalXDist = abs(gl_FragCoord.x - u_resolution.x * 0.5) / u_dpr;
    
    // The main container is ~768px wide (max 384px from center).
    // We fade the lines starting inside the column (0px to 380px),
    // and naturally restore them in the margins (380px to 600px).
    float columnFade = smoothstep(200.0, 600.0, logicalXDist);
    
    // We never erase them completely. They lose visual prominence (fade to ~15% strength)
    // behind the text, and return to 1.0 strength outside the column.
    float baseAttenuation = mix(0.15, 1.0, columnFade);
    lineMask *= baseAttenuation;

    // WebGL with alpha: true requires premultiplied alpha output
    float alpha = lineMask * u_opacity;
    gl_FragColor = vec4(vec3(1.0) * alpha, alpha);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function LiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { state } = useFractalSystem();
  
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, depth: false });
    if (!gl) return;

    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 
       1, -1, 
      -1,  1,
      -1,  1, 
       1, -1, 
       1,  1
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uComp = gl.getUniformLocation(program, 'u_complexity');
    const uWarp = gl.getUniformLocation(program, 'u_warp');
    const uSub = gl.getUniformLocation(program, 'u_subdivision');
    const uOp = gl.getUniformLocation(program, 'u_opacity');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uDpr = gl.getUniformLocation(program, 'u_dpr');

    let animationFrameId: number;
    let isLooping = false;

    let currentComplexity = stateRef.current.complexity;
    let currentWarp = stateRef.current.warp;
    let currentSubdivision = stateRef.current.subdivision;
    let currentOpacity = stateRef.current.opacity;

    const updateRectsAndDraw = () => {
      // Draw
      gl.uniform1f(uComp, currentComplexity);
      gl.uniform1f(uWarp, currentWarp);
      gl.uniform1f(uSub, currentSubdivision);
      gl.uniform1f(uOp, currentOpacity);
      gl.uniform1f(uTime, performance.now());
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uDpr, window.devicePixelRatio);
      
      if (prefersReducedMotion) {
        updateRectsAndDraw();
      } else {
        startLoop();
      }
    };
    
    let scrollTimeout: NodeJS.Timeout;
    const onScroll = () => {
      if (prefersReducedMotion) return;
      startLoop();
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Evaluate stability logic removed to keep ambient motion alive
      }, 100);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });

    const render = () => {
      if (!isLooping) return;

      // Interpolate towards target at a much slower, gradual pace (0.015)
      const target = stateRef.current;
      currentComplexity += (target.complexity - currentComplexity) * 0.015;
      currentWarp += (target.warp - currentWarp) * 0.015;
      currentSubdivision += (target.subdivision - currentSubdivision) * 0.015;
      currentOpacity += (target.opacity - currentOpacity) * 0.015;

      updateRectsAndDraw();

      // The loop now runs permanently for ambient motion, unless reduced motion is active
      animationFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!isLooping) {
        isLooping = true;
        render();
      }
    };

    resize();
    if (!prefersReducedMotion) startLoop();

    // Re-trigger loop whenever global state changes
    const interval = setInterval(() => {
      startLoop(); 
    }, 200);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
      clearTimeout(scrollTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
