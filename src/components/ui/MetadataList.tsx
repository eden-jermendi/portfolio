import React from 'react';
import styles from './MetadataList.module.css';

export interface MetadataItem {
  label: string;
  value: React.ReactNode;
}

interface MetadataListProps {
  items: MetadataItem[];
  className?: string;
}

export function MetadataList({ items, className = '' }: MetadataListProps) {
  if (!items || items.length === 0) return null;
  
  return (
    <dl className={`${styles.list} ${className}`.trim()} aria-label="Metadata">
      {items.map((item, i) => (
        <div key={i} className={styles.itemGroup}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
