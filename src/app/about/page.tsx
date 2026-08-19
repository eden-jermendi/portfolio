import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import Image from 'next/image';
import headshot from './Eden Jermendi Headshot.png';
import styles from './page.module.css';

import { InteractionScene } from '@/components/ui/InteractionScene';

export default function AboutPage() {
  return (
    <InteractionScene
      targetState={{ complexity: 0.1, warp: 0.05, subdivision: 0.0, opacity: 0.04, bgColor: 'var(--surface-base)' }}
    >
      <Container size="standard">
        <Section aria-label="About Header">
          <div className={styles.headerWrapper}>
            <Heading level={1}>About Profile</Heading>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={headshot}
              alt="Eden Jermendi"
              className={styles.headshot}
              priority
            />
          </div>

          <div className={styles.contentWrapper}>
            <BodyText variant="primary">
              Kia ora! I am Eden Jermendi, a backend leaning, systems oriented developer with a strong foundation built through self directed learning and Dev Academy Aotearoa.
            </BodyText>
            <BodyText variant="primary">
              As a high functioning autistic developer, my neurodivergence actively shapes my engineering practice. It gives me an intense, curiosity driven focus, a deep orientation toward fine details, and unyielding expectations for the quality of the systems I build.
            </BodyText>
            <BodyText variant="primary">
              While I enjoy working across the stack, my core interest lies in backend systems, infrastructure, and the logic that makes products reliable ~ Node.js, Express, databases, and APIs. As I enter the tech industry, I am focused on open source contribution, cloud architectures, and expanding into cybersecurity through microcredentials and self taught learning alongside C, Python, and Bash, with the eventual goal of learning Java and Go.
            </BodyText>
            <BodyText variant="primary">
              Outside of engineering, I produce music and study cultural history from a critical lens. That same curiosity drives how I approach software: I seek to understand the underlying systems, question defaults/assumptions, and build with deliberate intent.
            </BodyText>
            <BodyText variant="primary">
              I am actively seeking part time and contract based backend leaning roles, but I remain highly adaptable. I am open to taking on a wide range of engineering challenges; from migrating legacy services and updating outdated software, to building reliable web applications and personal storefronts.
            </BodyText>
          </div>
        </Section>
      </Container>
    </InteractionScene>
  );
}
