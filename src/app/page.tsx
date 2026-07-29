import { getSiteConfig, getAllProjects } from '@/lib/content-parser';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { ProjectPreview } from '@/components/project/ProjectPreview';
import { EditorialLink } from '@/components/ui/EditorialLink';
import styles from './page.module.css';

export default async function Home() {
  const { title, description } = getSiteConfig();
  const nameplate = title.split('|')[0].trim();
  const titleRole = title.split('|')[1]?.trim() || '';

  const allProjects = getAllProjects();
  // Filter for featured projects as requested by the user
  const featuredProjects = allProjects.filter(p => p.featured === true).slice(0, 4);

  // Selected Writing is mocked to empty for now, per the "Empty States" specification,
  // which dictates the section MUST gracefully collapse/hide.
  const featuredWriting: any[] = [];

  return (
    <Container size="standard">
      <Section aria-label="Introduction" className={styles.introSection}>
        <div className={styles.hero}>
          <Heading level={1}>{nameplate}</Heading>
          <div style={{ marginTop: 'var(--space-4)', maxWidth: '65ch' }}>
            <BodyText variant="primary">
              {description}
            </BodyText>
          </div>
        </div>
        <div className={styles.philosophy}>
          <BodyText variant="primary">
            I approach software as a long-term system, untangling complexity through maintainable architecture, thoughtful trade-offs, and steady, incremental progress.          </BodyText>
        </div>
      </Section>

      <Section aria-labelledby="systems-work-heading">
        <div className={styles.systemsWork}>
          <div className={styles.sectionHeader}>
            <Heading level={2} id="systems-work-heading">Selected Systems Work</Heading>
            <EditorialLink href="/projects">View all work →</EditorialLink>
          </div>

          {featuredProjects.length > 0 ? (
            <div className={styles.projectList}>
              {featuredProjects.map(project => (
                <ProjectPreview key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className={styles.emptyState}>Case studies are currently being archived.</p>
          )}
        </div>
      </Section>

      {featuredWriting.length > 0 && (
        <Section aria-labelledby="writing-heading">
          <div className={styles.sectionHeader}>
            <Heading level={2} id="writing-heading">Selected Writing</Heading>
            <EditorialLink href="/writing">View all writing →</EditorialLink>
          </div>
          {/* Writing Previews would render here when content is added */}
        </Section>
      )}
    </Container>
  );
}
