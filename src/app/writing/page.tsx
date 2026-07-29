import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';

export default function WritingIndex() {
  return (
    <Container size="standard">
      <Section aria-label="Writing Header">
        <div style={{ paddingTop: 'var(--space-12)' }}>
          <Heading level={1}>Selected Writing</Heading>
        </div>
        <div style={{ marginTop: 'var(--space-4)' }}>
          <BodyText variant="primary">
            Technical articles, architectural deep dives, and engineering Request For Comments (RFCs).
          </BodyText>
        </div>
      </Section>
    </Container>
  );
}
