import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  size?: 'standard' | 'wide';
  children: React.ReactNode;
  className?: string;
}

export function Container({ size = 'standard', children, className = '' }: ContainerProps) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`.trim()}>
      {children}
    </div>
  );
}
