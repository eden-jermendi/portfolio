# 0003: Design Tokens Discussion Draft

**Effective Date**: 28-07-2026  
**Status**: Discussion Drafts (Pre-Implementation Prototyping Specifications)  

## 1. Architectural Token Philosophy
This document drafts our initial zero-runtime CSS custom property tokens for Concept 2 ("Architectural & Systems Journal"). These tokens represent our atomic styling vocabulary. Once validated through Phase 1 prototyping and peer discussion, they will be embedded strictly inside `src/app/globals.css`, entirely replacing runtime styling macros (`styled-components`). Hardcoded hex strings, magic timing values, and arbitrary pixel measurements are barred outside this token declaration matrix.

## 2. Monochromatic Chromatic Palette (Dark Mode Canvas)
Our color system applies strict chromatic restraint: deep neutral charcoal canvases paired with high-contrast foreground typography, utilizing a single vibrant accent tone exclusively for interactive keyboard focus and actionable state feedback.

```css
:root {
  /* Surface Canvas Elevation Level Tokens */
  --surface-base:      #0a0a0c;  /* Primary background reading canvas */
  --surface-elevated:  #121215;  /* Subtle section differentiation / hover state surface */
  --surface-interactive: #1a1a1f; /* Active button and control interface background */

  /* Structural Border & Divider Tokens */
  --border-subtle:     rgba(255, 255, 255, 0.08); /* Minimal typographic separating lines */
  --border-interactive: rgba(255, 255, 255, 0.24); /* Button perimeters and focused fields */
  --border-high-contrast: rgba(255, 255, 255, 0.50); /* Active interactive boundaries */

  /* Typographic Foreground Tokens (Targeting >= 7:1 WCAG AAA Contrast) */
  --text-primary:      #f4f4f5;  /* Core narrative body prose & headers (Contrast: ~16:1) */
  --text-secondary:    #a1a1aa;  /* Technical specifications & metadata (Contrast: ~8:1)  */
  --text-muted:        #71717a;  /* Timestamp qualifiers & footnote indicators (~4.6:1)   */
  --text-inverse:      #0a0a0c;  /* Button text foreground over filled accent controls   */

  /* Single Actionable Interactive Accent Token */
  --accent-primary:    #38bdf8;  /* High-visibility electric cyan for functional state signals */
  --accent-focus-ring: rgba(56, 189, 248, 0.85); /* Visible WCAG keyboard navigation border */
}
```

## 3. Typographic Scale and Modular Leading Ratios
Typography utilizes a strict geometric sizing mathematical scale based on a `1.25` root modular ratio, ensuring logical visual distinction across document headlines while maintaining readable paragraph leading.

```css
:root {
  /* Self-Hosted Font Family Declarations (via Next/Font) */
  --font-sans: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typographic Hierarchy Scale (16px Root Baseline) */
  --font-size-hero:    clamp(2.25rem, 4vw, 3.25rem); /* Hero architecture header (36px - 52px) */
  --font-size-h1:      clamp(1.75rem, 3vw, 2.50rem); /* Primary page title (28px - 40px) */
  --font-size-h2:      clamp(1.375rem, 2.5vw, 1.75rem); /* Major section heading (22px - 28px) */
  --font-size-h3:      clamp(1.125rem, 2vw, 1.25rem);  /* Case study section breakout (18px - 20px) */
  --font-size-body:    1.00rem;                       /* Standard narrative reading prose (16px) */
  --font-size-caption: 0.875rem;                      /* Structural technical metadata (14px) */
  --font-size-mono:    0.8125rem;                     /* Code snippets and terminal coordinates (13px) */

  /* Modular Line-Height (Leading) Specifications */
  --leading-tight:     1.15; /* Hero and H1 display headlines (prevents wrapping box drift) */
  --leading-snappy:    1.35; /* H2 and H3 structural sectional subtitles */
  --leading-prose:     1.70; /* Body prose narratives (optimizes optical eye tracking) */
}
```

## 4. Spatial Rhythm and Sectional Whitespace Grid
In strict adherence to Concept 2 (*Editorial Minimalist Canvas*), we omit graphical bounding cards and separate functional thoughts through systematic vertical space multiples on an `8px` baseline arithmetic progression.

```css
:root {
  /* Atomic Spacing Rhythm Multiples */
  --space-1: 0.25rem;  /*  4px - Tight inline icon offsets */
  --space-2: 0.50rem;  /*  8px - Metadata button internal padding */
  --space-3: 0.75rem;  /* 12px - Form input vertical spacing */
  --space-4: 1.00rem;  /* 16px - Standard paragraph vertical separation */
  --space-6: 1.50rem;  /* 24px - Section subtitle separation */
  --space-8: 2.00rem;  /* 32px - Component group boundary offset */
  --space-12: 3.00rem; /* 48px - Minor sectional divider spacing */
  --space-16: 4.00rem; /* 64px - Major architectural block separation */
  --space-24: 6.00rem; /* 96px - Hero and root navigation vertical whitespace */
}
```

## 5. Radius, Elevation, and Shadow Philosophy
* **Shadow Philosophy (Complete Eradication)**: In conventional web application design, elaborate multi-layered drop shadows (`box-shadow`) are deployed to simulate physical card elevation. In a high-contrast dark-mode engineering canvas, tinted drop shadows consume GPU composite rasterization processing while providing negligible optical separation against deep black backgrounds. **Decision Draft**: Drop shadows are entirely eradicated from our styling vocabulary.
* **Elevation via Tonal Shift & Borders**: Surface elevation is expressed strictly through subtle surface background tonal adjustments (`--surface-elevated`) or precise hairline borders (`--border-subtle`).

```css
:root {
  /* Minimal Corner Radius Geometry Scale */
  --radius-none: 0px;    /* Crisp structural layout boundaries & code terminals */
  --radius-sm:   2px;    /* Inline technical metadata tags & shortcut keys */
  --radius-md:   4px;    /* Interactive action buttons and form input boxes */
  --radius-lg:   6px;    /* Structural dropdown dialog wrappers (if required) */
  
  /* Banishment of Shadow Declaration */
  --shadow-none: none;
}
```

## 6. Motion and Timing Execution Tokens
Transition physics emulate crisp operating system responsiveness. Animated mutations are restricted strictly to GPU composited properties (`transform`, `opacity`, `outline-offset`, `border-color`, `background-color`) and are programmatically nullified under accessibility overrides.

```css
:root {
  /* Functional Duration Boundaries */
  --duration-instant: 75ms;   /* Micro-interaction state activation (button press) */
  --duration-fast:    120ms;  /* Visible hover focus outline presentation */
  --duration-normal:  200ms;  /* Structural state visibility shifts & simple transitions */

  /* Deterministic OS-Style Easing Curves */
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1); /* Quick initial snap with smooth terminal deceleration */
  --ease-linear: linear;                        /* Consistent progressive stepping transitions */
}

/* Mandatory Reduced-Motion Universal Override Binding */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-instant: 0.01ms;
    --duration-fast:    0.01ms;
    --duration-normal:  0.01ms;
  }
}
```

## 7. Responsive Breakpoints and Grid Container Boundaries
To preserve reading measure integrity across device resolutions, layout wrappers utilize strict responsive container widths with mandatory horizontal viewport gutter margins.

```css
/* Canonical Responsive Breakpoint Thresholds */
/* Small Mobile Vp:  320px  - Base single-column stacking */
/* Tablet Canvas:    768px  - Multi-column data table formatting & header horizontal expansions */
/* Desktop Reader:   1024px - Primary editorial narrative maximum bounding container */
/* Large Monitor:    1440px - Expansive structural whitespace margin balancing */

:root {
  /* Container Measure Ceilings */
  --container-max-measure: 768px;  /* Editorial prose container ceiling (preserves 68 char line limit) */
  --container-max-width:   1120px; /* Structural root layout boundary ceiling */
  --container-gutter:      clamp(1.25rem, 5vw, 3rem); /* Horizontal safety margins */
}
```
