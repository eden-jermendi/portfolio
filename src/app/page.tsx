import { getSiteConfig, getAllProjects } from '@/lib/content-parser';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { ProjectPreview } from '@/components/project/ProjectPreview';
import { EditorialLink } from '@/components/ui/EditorialLink';
import { HeroChoreography } from '@/components/ui/HeroChoreography';
import { PageStaggerWrapper } from '@/components/ui/PageStaggerWrapper';
import { InteractionScene } from '@/components/ui/InteractionScene';
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
      <InteractionScene targetState={{ complexity: 0.0, warp: 0.0, subdivision: 0.0, opacity: 0.05, bgColor: 'var(--surface-base)' }}>
        <Section aria-label="Introduction" className={styles.introSection}>
          <HeroChoreography nameplate={nameplate} />
        </Section>
      </InteractionScene>
      <PageStaggerWrapper>
        <InteractionScene targetState={{ complexity: 0.3, warp: 0.1, subdivision: 0.4, opacity: 0.03, bgColor: 'var(--surface-base)' }}>
          <div className={styles.philosophy} style={{ marginBottom: 'var(--space-12)' }}>
            <BodyText variant="primary">
              I approach software as a long-term system, untangling complexity through maintainable architecture, thoughtful trade-offs, and steady, incremental progress.
            </BodyText>
          </div>
        </InteractionScene>
        <InteractionScene targetState={{ complexity: 0.8, warp: 0.4, subdivision: 0.8, opacity: 0.08, bgColor: 'var(--surface-base)' }}>
          <Section aria-labelledby="systems-work-heading">
            <div className={styles.systemsWork}>
              <div className={styles.sectionHeader}>
                <Heading level={2} id="systems-work-heading">Featured Work</Heading>
                <EditorialLink href="/projects">View all work →</EditorialLink>
              </div>

              {featuredProjects.length > 0 ? (
                <div className={styles.projectList}>
                  {featuredProjects.map(project => (
                    <ProjectPreview key={project.slug} project={project} source="home" />
                  ))}
                </div>
              ) : (
                <p className={styles.emptyState}>Case studies are currently being archived.</p>
              )}
            </div>
          </Section>
        </InteractionScene>
      </PageStaggerWrapper>


    </Container>
  );
}
