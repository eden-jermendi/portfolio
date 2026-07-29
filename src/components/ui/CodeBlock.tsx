import React from 'react';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className = '' }: CodeBlockProps) {
  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      {language && (
        <div className={styles.header}>
          <span className={styles.language}>{language}</span>
        </div>
      )}
      <pre className={styles.pre}>
        <code className={styles.code}>{code}</code>
      </pre>
    </div>
  );
}
