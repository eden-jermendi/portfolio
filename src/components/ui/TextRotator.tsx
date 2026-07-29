'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TextRotatorProps {
  phrases: string[];
  interval?: number;
}

export function TextRotator({ phrases, interval = 3000 }: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <motion.span layout transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }} style={{ display: 'inline-flex', position: 'relative', whiteSpace: 'nowrap' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Snappy editorial easing
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
