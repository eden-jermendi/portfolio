'use client';

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      type="button" 
      className={`${styles.button} ${styles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
