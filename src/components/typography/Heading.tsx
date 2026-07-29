import React from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Heading({ level, children, id, className = '' }: HeadingProps) {
  const Tag = `h${level}` as React.ElementType;
  return (
    <Tag id={id} className={`${styles.heading} ${styles[`h${level}`]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
