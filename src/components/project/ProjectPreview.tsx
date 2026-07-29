import React from 'react';
import { Heading } from '../typography/Heading';
import { BodyText } from '../typography/BodyText';
import { MetadataList, MetadataItem } from '../ui/MetadataList';
import { EditorialLink } from '../ui/EditorialLink';
import styles from './ProjectPreview.module.css';

interface ProjectPreviewData {
  title: string;
  abstract: string;
  date: string;
  role?: string;
  stack: string[];
  slug: string;
  demoUrl?: string;
}

interface ProjectPreviewProps {
  project: ProjectPreviewData;
  className?: string;
}

export function ProjectPreview({ project, className = '' }: ProjectPreviewProps) {
  const metadataItems: MetadataItem[] = [
    { label: 'Date', value: project.date },
    ...(project.role ? [{ label: 'Role', value: project.role }] : []),
    { label: 'Stack', value: project.stack.join(', ') },
  ];

  return (
    <article className={`${styles.preview} ${className}`.trim()}>
      <div className={styles.header}>
        <Heading level={3}>{project.title}</Heading>
      </div>
      <div className={styles.metadata}>
        <MetadataList items={metadataItems} />
      </div>
      <div className={styles.abstract}>
        <BodyText variant="secondary">
          {project.abstract}
        </BodyText>
      </div>
      <div className={styles.footer}>
        {project.demoUrl && (
          <EditorialLink href={project.demoUrl} isExternal>
            Live demo
          </EditorialLink>
        )}
        <EditorialLink href={`/projects/${project.slug}`}>
          Read case study →
        </EditorialLink>
      </div>
    </article>
  );
}
