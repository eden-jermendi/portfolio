import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import Image from 'next/image';
import headshot from './Eden Jermendi Headshot.png';

import { InteractionScene } from '@/components/ui/InteractionScene';

export default function AboutPage() {
  return (
    <InteractionScene 
      targetState={{ complexity: 0.1, warp: 0.05, subdivision: 0.0, opacity: 0.04, bgColor: 'var(--surface-base)' }}
    >
      <Container size="standard">
        <Section aria-label="About Header">
          <div style={{ paddingTop: 'var(--space-12)' }}>
            <Heading level={1}>About Profile</Heading>
          </div>

          <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
            <Image
              src={headshot}
              alt="Eden Jermendi"
              style={{
                width: '100%',
                height: '321px',
                maxWidth: '300px',
                aspectRatio: '1/1',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)'
              }}
              priority
            />
          </div>

          <div style={{ maxWidth: '65ch', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <BodyText variant="primary">
              Kia ora! I am Eden Jermendi, a full-stack developer with a strong foundation built through self-directed learning and Dev Academy Aotearoa.
            </BodyText>
            <BodyText variant="primary">
              As a high-functioning autistic developer, my neurodivergence actively shapes my engineering practice. It gives me an intense, curiosity-driven focus, a deep orientation toward fine details, and unyielding expectations for the quality of the systems I build.
            </BodyText>
            <BodyText variant="primary">
              While I enjoy working across the stack, my core interests lie in backend development, systems engineering, and architectural design. I am continuously honing these skills through rigorous personal projects, self-development, and a desire to deeply understand how and more importantly why infrastructure works the way it does.
            </BodyText>
            <BodyText variant="primary">
              I am actively seeking part-time and contract based backend leaning roles, but I remain highly adaptable. I am open to taking on a wide range of engineering challenges — from migrating legacy services and updating outdated software, to building reliable web applications and personal storefronts.
            </BodyText>
          </div>
        </Section>
      </Container>
    </InteractionScene>
  );
}
