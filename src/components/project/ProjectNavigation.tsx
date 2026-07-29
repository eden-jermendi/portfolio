'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function ProjectNavigation() {
  const [source, setSource] = useState<'home' | 'projects' | null>(null);

  useEffect(() => {
    if (window.location.hash === '#from-home') setSource('home');
    if (window.location.hash === '#from-projects') setSource('projects');
  }, []);

  const projectsLink = (
    <Link href="/projects" key="projects-link" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
      ← Back to all projects
    </Link>
  );

  const homeLink = (
    <Link href="/" key="home-link" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
      ← Back to homepage
    </Link>
  );

  // Default to projects first, unless explicitly from home
  const isFromHome = source === 'home';

  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
      {isFromHome ? homeLink : projectsLink}
      {isFromHome ? projectsLink : homeLink}
    </div>
  );
}
