import React from 'react'
import styled from 'styled-components'
import AboutModal from './AboutModal'

const Hero = styled.section`
  display: grid;
  place-items: center;
  gap: 14px;
  text-align: center;
  background: ${({ theme }) => theme.bgMain};
  padding: 88px var(--gutter) 72px;
  min-height: 90vh;
  transition: background-color var(--ease);
`

const HeroInner = styled.div`
  max-width: none;
  padding-inline: 0;
  display: grid;
  place-items: center;
  gap: 14px;
  text-align: center;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.linkHover};
  font-size: clamp(2.6rem, 5vw, 3.4rem);
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.2px;
  padding-top: 50px;
  transition: color var(--ease);
`

const Subtitle = styled.p`
  color: ${({ theme }) => theme.textAccent};
  font-size: clamp(1.05rem, 2.1vw, 1.25rem);
  margin: 0;
  max-width: 56ch;
  opacity: 0.95;
  transition: color var(--ease);
`

const AvatarButton = styled.button`
  display: inline-block;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
`

const AvatarWrap = styled.div`
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  width: clamp(160px, 22vw, 240px);
  aspect-ratio: 1/1;
  border-radius: 42%; /* Between circle (50%) and squircle (30%) */
  background: none;
  transition: transform 0.25s ease;

  /* Stronger Diffused Back-glow */
  &::before {
    content: '';
    position: absolute;
    inset: -20px;
    border-radius: 42%;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.ringStart} 0%,
      rgba(167, 116, 255, 0.25) 40%,
      transparent 70%
    );
    filter: blur(15px);
    z-index: 0;
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const AvatarImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 42%;
  background: ${({ theme }) => theme.avatarBg};
  object-fit: cover;
  object-position: center;
  /* Subtly soften the transition between image and glow */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); 
  transition:
    transform 0.25s var(--ease),
    filter 0.25s var(--ease);

  ${AvatarWrap}:hover & {
    filter: grayscale(0.15) brightness(0.9);
    transform: scale(1.015);
  }
`;

const OverlayText = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 42%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.4px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.25s var(--ease);
  pointer-events: none;
  z-index: 2;

  ${AvatarWrap}:hover & {
    opacity: 1;
  }
`;

const HeroSection: React.FC<{ onAboutClick: () => void }> = ({
  onAboutClick,
}) => {
  return (
    <Hero id="welcome-section">
      <HeroInner>
        <AvatarButton onClick={onAboutClick} aria-label="Open About Me modal">
          <AvatarWrap>
            <AvatarImage
              src="/images/Eden Jermendi Headshot.png"
              alt="Eden Jermendi"
            />
            <OverlayText aria-hidden="true">About Me</OverlayText>
          </AvatarWrap>
        </AvatarButton>

        <Title>Eden Jermendi's Portfolio</Title>
        <Subtitle>Welcome! Let's see if we vibe...</Subtitle>
      </HeroInner>
    </Hero>
  )
}

export default HeroSection
