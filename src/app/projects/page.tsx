import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { getAllProjects } from '@/lib/content-parser';
import { ProjectPreview } from '@/components/project/ProjectPreview';
import { InteractionScene } from '@/components/ui/InteractionScene';

import { PageStaggerWrapper } from '@/components/ui/PageStaggerWrapper';

export default function ProjectsIndex() {
  const allProjects = getAllProjects();

  // Group projects by Year to establish semantic editorial chapters
  const projectsByYear = allProjects.reduce((acc, project) => {
    // Some dates are just "2025", some are "2026-07-29". We extract the year safely.
    const year = project.date.split('-')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {} as Record<string, typeof allProjects>);

  const sortedYears = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <Container size="standard">
      <InteractionScene 
        targetState={{ complexity: 0.1, warp: 0.1, subdivision: 0.0, opacity: 0.05, bgColor: 'var(--surface-base)' }}
      >
        <Section aria-label="Projects Header">
          <div style={{ paddingTop: 'var(--space-12)', marginBottom: 'var(--space-8)' }}>
            <Heading level={1}>All Projects</Heading>
            <div style={{ marginTop: 'var(--space-4)' }}>
              <BodyText variant="primary">
                A complete archive of professional work, technical case studies, and learning projects.
              </BodyText>
            </div>
          </div>
        </Section>
      </InteractionScene>
      
      <PageStaggerWrapper>
        {sortedYears.map((year, index) => {
          // Mathematically derive topology from the semantic depth of the archive (deeper in time = deeper structure)
          const complexity = Math.min(0.8, 0.2 + (index * 0.2));
          const subdivision = Math.min(0.8, 0.0 + (index * 0.3));
          const warp = Math.min(0.4, 0.1 + (index * 0.1));

          return (
            <InteractionScene 
              key={year}
              targetState={{ complexity, warp, subdivision, opacity: 0.06, bgColor: 'var(--surface-base)' }}
            >
              <Section aria-label={`Projects from ${year}`}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
                  {projectsByYear[year].map(project => (
                    <ProjectPreview key={project.slug} project={project} source="projects" />
                  ))}
                </div>
              </Section>
            </InteractionScene>
          );
        })}
      </PageStaggerWrapper>
    </Container>
  );
}
