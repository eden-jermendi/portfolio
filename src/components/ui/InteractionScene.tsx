'use client';

import { ReactNode, useEffect, useRef, useId } from 'react';
import { useFractalSystem, FractalState } from '../providers/FractalSystemProvider';

export function InteractionScene({ 
  children, 
  targetState,
  className 
}: { 
  children: ReactNode; 
  targetState: Partial<FractalState>;
  className?: string;
}) {
  const { registerChapter, unregisterChapter } = useFractalSystem();
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (ref.current) {
      registerChapter(id, ref, targetState);
    }
    return () => {
      unregisterChapter(id);
    };
  }, [id, registerChapter, unregisterChapter, targetState]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
