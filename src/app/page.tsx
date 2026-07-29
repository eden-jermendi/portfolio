import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { EditorialLink } from '@/components/ui/EditorialLink';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Divider } from '@/components/layout/Divider';
import { Button } from '@/components/ui/Button';
import { MetadataList } from '@/components/ui/MetadataList';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { ProjectPreview } from '@/components/project/ProjectPreview';
import { getAllProjects, getSiteConfig } from '@/lib/content-parser';
import { MDXRenderer } from '@/components/mdx/MDXRenderer';
import styles from './page.module.css';

export default async function Home() {
  const parsedProjects = getAllProjects();
  const siteConfig = getSiteConfig();

  // Acceptance Criteria: Output server-rendered strings to the terminal
  console.log('--- CONTENT PIPELINE INGESTION SUCCESS ---');
  console.log('Site Config:', JSON.stringify(siteConfig, null, 2));
  console.log('Parsed Projects:', JSON.stringify(parsedProjects, null, 2));

  const sampleCode = `function calculateRhythm(base: number, ratio: number): number {
  return base * ratio;
}

// 16px * 1.5 = 24px grid baseline
console.log(calculateRhythm(16, 1.5));`;

  return (
    <Container size="standard">
      <Section aria-label="Review Page Header">
        <div className={styles.pageHeader}>
          <Heading level={1}>Phase 4: Content Pipeline Review (Complete)</Heading>
        </div>
        <BodyText variant="primary">
          This phase completes the Content Pipeline by establishing Global Site Configuration JSON ingestion and compiling raw MDX bodies directly into renderable server-side React nodes.
        </BodyText>
      </Section>

      <Section aria-labelledby="pipeline-config">
        <Heading level={2} id="pipeline-config">Global Configuration Ingest</Heading>
        <div className={styles.blockSpacing}>
          <BodyText variant="secondary">
            Read from <code>site-config.json</code> and validated via Zod.
          </BodyText>
          <CodeBlock language="json" code={JSON.stringify(siteConfig, null, 2)} />
        </div>
      </Section>

      <Section aria-labelledby="pipeline-mdx">
        <Heading level={2} id="pipeline-mdx">MDX Rendering</Heading>
        <div className={styles.blockSpacing}>
          <BodyText variant="secondary">
            The abstract preview metadata (from frontmatter):
          </BodyText>
        </div>
        <div className={styles.blockSpacing}>
          <ProjectPreview project={parsedProjects[0]} />
        </div>
        <div className={styles.blockSpacing}>
          <BodyText variant="secondary">
            The deeply nested MDX body converted to HTML primitives via <code>next-mdx-remote</code>:
          </BodyText>
        </div>
        <div className={`${styles.blockSpacing} ${styles.mdxCanvas}`}>
          <MDXRenderer source={parsedProjects[0].body} />
        </div>
      </Section>

      <Section aria-labelledby="typography-heading">
        <Heading level={2} id="typography-heading">Typography</Heading>
        <div className={`${styles.sectionSpacing} ${styles.flexColumn}`}>
          <div>
            <Heading level={1}>Heading 1 (Hero)</Heading>
            <Heading level={2}>Heading 2 (Section)</Heading>
            <Heading level={3}>Heading 3 (Subsection)</Heading>
          </div>
          <BodyText variant="primary">
            Primary BodyText: The standard narrative reading prose utilizing the maximum reading measure.
          </BodyText>
          <BodyText variant="secondary">
            Secondary BodyText: Used for technical specifications and subtext.
          </BodyText>
          <BodyText variant="muted">
            Muted BodyText: Reserved for the lowest priority information.
          </BodyText>
        </div>
      </Section>

      <Section aria-labelledby="layout-heading">
        <Heading level={2} id="layout-heading">Layout Primitives</Heading>
        <div className={styles.blockSpacing}>
          <BodyText variant="secondary">
            The page itself is wrapped in <code>&lt;Container size="standard"&gt;</code> and <code>&lt;Section&gt;</code> components.
            Below is a <code>&lt;Divider&gt;</code> component used for visual separation of loosely related blocks.
          </BodyText>
        </div>
        <Divider />
        <BodyText variant="muted">
          Content below the hairline divider.
        </BodyText>
      </Section>

      <Section aria-labelledby="ui-heading">
        <Heading level={2} id="ui-heading">UI Primitives</Heading>
        
        <div className={styles.sectionSpacing}>
          <Heading level={3}>Buttons</Heading>
          <div className={`${styles.blockSpacing} ${styles.flexRowWrap}`}>
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="primary" disabled>Disabled State</Button>
          </div>
        </div>

        <div className={styles.largeSpacing}>
          <Heading level={3}>Editorial Links</Heading>
          <div className={`${styles.blockSpacing} ${styles.linkGroup}`}>
            <EditorialLink href="/#">Internal Link Example</EditorialLink>
            <EditorialLink href="https://github.com/eden-jermendi" isExternal>External Link Example</EditorialLink>
          </div>
        </div>

        <div className={styles.largeSpacing}>
          <Heading level={3}>Metadata List</Heading>
          <div className={styles.blockSpacing}>
            <MetadataList items={[
              { label: 'Date', value: '2026' },
              { label: 'Role', value: 'Staff Engineer' },
              { label: 'Stack', value: 'TypeScript, Node.js' }
            ]} />
          </div>
        </div>

        <div className={styles.largeSpacing}>
          <Heading level={3}>Code Block</Heading>
          <CodeBlock code={sampleCode} language="typescript" />
        </div>
      </Section>

    </Container>
  );
}
