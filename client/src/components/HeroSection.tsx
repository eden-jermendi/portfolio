import React from 'react'
import styled from 'styled-components'
import { siteContent } from '../content/siteContent'
import { Button, ButtonLink, Container } from './ui'

const Hero = styled.section`
  padding: clamp(4.5rem, 8vw, 7rem) 0 4rem;
`

const HeroInner = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 360px);
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Copy = styled.div`
  display: grid;
  gap: 1.35rem;
`

const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text.muted};
  font: 600 0.82rem/1 var(--font-mono);
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const Title = styled.h1`
  max-width: 10ch;
  color: ${({ theme }) => theme.text.primary};
  font-size: clamp(3.4rem, 10vw, 6.8rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
`

const Intro = styled.p`
  max-width: 38rem;
  margin: 0;
  color: ${({ theme }) => theme.text.secondary};
  font-size: clamp(1.05rem, 2.2vw, 1.22rem);
  line-height: 1.8;
`

const Secondary = styled.p`
  max-width: 34rem;
  margin: 0;
  color: ${({ theme }) => theme.text.muted};
  font-size: 0.98rem;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  padding-top: 0.5rem;
`

const PortraitButton = styled.button`
  position: relative;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  text-align: left;
`

const PortraitWrap = styled.div`
  position: relative;
  padding: 1.1rem;
  border-radius: 2rem;
  background:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.surface.overlay} 0%,
      ${({ theme }) => theme.surface.elevated} 100%
    );
  border: 1px solid ${({ theme }) => theme.border.soft};
  box-shadow: ${({ theme }) => theme.shadow.hero};

  &::before {
    content: '';
    position: absolute;
    inset: 1.5rem;
    border-radius: 1.5rem;
    background: ${({ theme }) => theme.accent.glow};
    filter: blur(42px);
    z-index: 0;
  }
`

const PortraitImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 1.4rem;
  border: 1px solid ${({ theme }) => theme.border.soft};
`

const PortraitCaption = styled.div`
  position: absolute;
  left: 1.85rem;
  right: 1.85rem;
  bottom: 1.85rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0.85rem 1rem;
  border-radius: 1rem;
  background: rgba(18, 12, 29, 0.72);
  color: #f5efff;
  font: 500 0.84rem/1.4 var(--font-mono);
`

const HeroSection: React.FC<{ onAboutClick: () => void }> = ({ onAboutClick }) => {
  const { hero } = siteContent

  return (
    <Hero id="welcome-section">
      <HeroInner>
        <Copy>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Title>{hero.title}</Title>
          <Intro>{hero.intro}</Intro>
          <Secondary>{hero.secondary}</Secondary>

          <Actions>
            <ButtonLink href={hero.ctas.primaryHref}>
              {hero.ctas.primaryLabel}
            </ButtonLink>
            <Button type="button" $variant="ghost" onClick={onAboutClick}>
              {hero.ctas.secondaryLabel}
            </Button>
          </Actions>
        </Copy>

        <PortraitButton type="button" onClick={onAboutClick}>
          <PortraitWrap>
            <PortraitImage
              src="/images/Eden Jermendi Headshot.png"
              alt={hero.portraitAlt}
              fetchPriority="high"
            />
            <PortraitCaption>
              <span>About me</span>
              <span>Open profile</span>
            </PortraitCaption>
          </PortraitWrap>
        </PortraitButton>
      </HeroInner>
    </Hero>
  )
}

export default HeroSection
