import React from 'react';
import styles from './Divider.module.css';

interface DividerProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export function Divider({ className = '', 'aria-hidden': ariaHidden = true }: DividerProps) {
  return (
    <hr 
      className={`${styles.divider} ${className}`.trim()} 
      aria-hidden={ariaHidden}
    />
  );
}
