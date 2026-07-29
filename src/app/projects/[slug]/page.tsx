import { getProjectBySlug, getAllProjects } from '@/lib/content-parser';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { InteractionScene } from '@/components/ui/InteractionScene';
import { ProjectNavigation } from '@/components/project/ProjectNavigation';

// Pre-render all project routes at build time
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  let project;
  try {
    project = getProjectBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  // Determine if there is actual content beyond just the frontmatter
  const isContentEmpty = !project.body || project.body.trim().length === 0;

  return (
    <InteractionScene 
      targetState={{ complexity: 0.1, warp: 0.05, subdivision: 0.0, opacity: 0.04, bgColor: 'var(--surface-base)' }}
    >
      <Container size="standard">
        <div style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-8)' }}>
          <ProjectNavigation />
          
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <Heading level={1}>{project.title}</Heading>
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--space-12)', marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
            {project.date && (
              <div>
                <div style={{ fontSize: 'var(--font-size-caption)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)' }}>Year</div>
                <div style={{ color: 'var(--text-secondary)' }}>{project.date.split('-')[0]}</div>
              </div>
            )}
            {project.role && (
              <div>
                <div style={{ fontSize: 'var(--font-size-caption)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)' }}>Role</div>
                <div style={{ color: 'var(--text-secondary)' }}>{project.role}</div>
              </div>
            )}
            {project.stack && project.stack.length > 0 && (
              <div>
                <div style={{ fontSize: 'var(--font-size-caption)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)' }}>Stack</div>
                <div style={{ color: 'var(--text-secondary)' }}>{project.stack.join(', ')}</div>
              </div>
            )}
          </div>
          
          <div style={{ maxWidth: '65ch', marginBottom: 'var(--space-12)' }}>
            <BodyText variant="primary">{project.abstract}</BodyText>
            {project.demoUrl && (
              <div style={{ marginTop: 'var(--space-6)' }}>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 500 }}
                >
                  View live demo ↗
                </a>
              </div>
            )}
          </div>
        </div>

        <Section aria-label="Case Study Content">
          <div style={{ paddingBottom: 'var(--space-24)' }}>
            {isContentEmpty ? (
              <div style={{ 
                padding: 'var(--space-12) 0', 
              color: 'var(--text-muted)', 
              fontFamily: 'var(--font-sans)',
              borderTop: '1px solid var(--border-subtle)',
              fontStyle: 'italic',
              fontSize: 'var(--font-size-body)'
            }}>
              Case study is currently being written. Check back soon.
            </div>
          ) : (
            <div style={{
              color: 'var(--text-secondary)',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: 'var(--space-12)',
              whiteSpace: 'pre-wrap'
            }}>
              {/* Renders the raw markdown body text for now until an MDX compiler is integrated */}
              {project.body}
            </div>
          )}
          </div>
        </Section>
      </Container>
    </InteractionScene>
  );
}
