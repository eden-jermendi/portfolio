import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  className?: string;
}

export function Section({ children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, className = '' }: SectionProps) {
  return (
    <section 
      aria-label={ariaLabel} 
      aria-labelledby={ariaLabelledby} 
      className={`${styles.section} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
