'use client';

import { motion } from 'framer-motion';
import styles from './StackSymbols.module.css';

export function StackSymbols() {
  const stack = [
    'JS', 'TS', 'React', 'Next.js', 'Express', 
    'Git', 'GitHub', 'Tailwind', 'Vercel', 'Supabase', 'Figma'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      aria-label="Technologies used"
    >
      {stack.map((tech) => (
        <motion.span key={tech} variants={itemVariants} className={styles.badge}>
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
}
