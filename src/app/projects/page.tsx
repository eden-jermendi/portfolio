import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { getAllProjects } from '@/lib/content-parser';
import { ProjectPreview } from '@/components/project/ProjectPreview';

export default function ProjectsIndex() {
  const allProjects = getAllProjects();

  return (
    <Container size="standard">
      <Section aria-label="Projects Header">
        <div style={{ paddingTop: 'var(--space-12)', marginBottom: 'var(--space-8)' }}>
          <Heading level={1}>All Systems Work</Heading>
          <div style={{ marginTop: 'var(--space-4)' }}>
            <BodyText variant="primary">
              A comprehensive archive of system architectures, case studies, and engineering projects.
            </BodyText>
          </div>
        </div>
      </Section>
      
      <Section aria-label="Projects Archive">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
          {allProjects.map(project => (
            <ProjectPreview key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
