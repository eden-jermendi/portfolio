import React from 'react';
import Link from 'next/link';
import styles from './EditorialLink.module.css';

interface EditorialLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}

export function EditorialLink({ href, children, isExternal = false, className = '' }: EditorialLinkProps) {
  const combinedClassName = `${styles.link} ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className={styles.externalIcon} aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
