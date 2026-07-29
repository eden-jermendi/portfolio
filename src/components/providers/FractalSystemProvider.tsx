'use client';
import { createContext, useContext, useState, ReactNode, useEffect, useRef, useCallback } from 'react';

export type FractalState = {
  complexity: number;   // Frequency / Density of the field
  warp: number;         // Amount of domain warping / distortion
  subdivision: number;  // Multiplicative layering
  opacity: number;      // Global alpha
  bgColor: string;
};

const defaultState: FractalState = {
  complexity: 0.0,
  warp: 0.0,
  subdivision: 0.0,
  opacity: 0.0,
  bgColor: 'var(--surface-base)',
};

type ChapterRegistration = {
  id: string;
  ref: { current: HTMLElement | null };
  targetState: Partial<FractalState>;
};

type FractalContextType = {
  state: FractalState;
  setFractalState: (partial: Partial<FractalState>) => void;
  registerChapter: (id: string, ref: { current: HTMLElement | null }, targetState: Partial<FractalState>) => void;
  unregisterChapter: (id: string) => void;
};

const FractalContext = createContext<FractalContextType | undefined>(undefined);

export function FractalSystemProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FractalState>(defaultState);
  
  const chaptersRef = useRef<Map<string, ChapterRegistration>>(new Map());
  const activeChapterIdRef = useRef<string | null>(null);

  const setFractalState = (partial: Partial<FractalState>) => {
    setState(prev => ({ ...prev, ...partial }));
  };

  const registerChapter = useCallback((id: string, ref: { current: HTMLElement | null }, targetState: Partial<FractalState>) => {
    chaptersRef.current.set(id, { id, ref, targetState });
  }, []);

  const unregisterChapter = useCallback((id: string) => {
    chaptersRef.current.delete(id);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          evaluateActiveChapter();
          ticking = false;
        });
        ticking = true;
      }
    };

    const evaluateActiveChapter = () => {
      const chapters = Array.from(chaptersRef.current.values());
      if (chapters.length === 0) return;

      const viewportHeight = window.innerHeight;
      // 38% trigger line
      const thresholdY = viewportHeight * 0.38;
      
      let bestChapter: ChapterRegistration | null = null;
      let minDistance = Infinity;

      for (const chapter of chapters) {
        if (!chapter.ref.current) continue;
        const rect = chapter.ref.current.getBoundingClientRect();
        
        // Chapter crosses the threshold
        if (rect.top <= thresholdY && rect.bottom >= thresholdY) {
          bestChapter = chapter;
          break;
        }
      }

      // Fallback: nearest chapter top to threshold
      if (!bestChapter) {
        for (const chapter of chapters) {
          if (!chapter.ref.current) continue;
          const rect = chapter.ref.current.getBoundingClientRect();
          const distance = Math.abs(rect.top - thresholdY);
          if (distance < minDistance) {
            minDistance = distance;
            bestChapter = chapter;
          }
        }
      }

      if (bestChapter && bestChapter.id !== activeChapterIdRef.current) {
        // Hysteresis deadzone: 5% of viewport
        const currentChapter = activeChapterIdRef.current ? chaptersRef.current.get(activeChapterIdRef.current) : null;
        if (currentChapter && currentChapter.ref.current) {
           const currentRect = currentChapter.ref.current.getBoundingClientRect();
           const hysteresisMargin = viewportHeight * 0.05;
           
           // If the boundary between current and new chapter is within the deadzone around the threshold, DO NOT switch yet.
           // E.g. we are scrolling down, the bottom of current crosses above the threshold, but is still within 5% above it.
           // Actually, rect.bottom is the bottom of the current chapter.
           // If it's just above the line (rect.bottom < thresholdY), it might rapidly oscillate if we scroll back up.
           if (Math.abs(currentRect.bottom - thresholdY) < hysteresisMargin || Math.abs(currentRect.top - thresholdY) < hysteresisMargin) {
              return; 
           }
        }
        
        activeChapterIdRef.current = bestChapter.id;
        setFractalState(bestChapter.targetState);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    // Initial evaluation after a brief delay to allow layout
    setTimeout(evaluateActiveChapter, 50);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <FractalContext.Provider value={{ state, setFractalState, registerChapter, unregisterChapter }}>
      <div 
        suppressHydrationWarning
        style={{ 
          backgroundColor: state.bgColor, 
          transition: 'background-color 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </div>
    </FractalContext.Provider>
  );
}

export function useFractalSystem() {
  const context = useContext(FractalContext);
  if (!context) throw new Error('useFractalSystem must be used within FractalSystemProvider');
  return context;
}
