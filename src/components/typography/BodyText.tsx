import React from 'react';
import styles from './BodyText.module.css';

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'muted';
}

export function BodyText({ children, className = '', variant = 'primary' }: BodyTextProps) {
  return (
    <p className={`${styles.bodyText} ${styles[variant]} ${className}`.trim()}>
      {children}
    </p>
  );
}
