import React, { useState } from 'react';
import styled from 'styled-components';
import AboutModal from './AboutModal';

const Hero = styled.section`
  display: grid;
  place-items: center;
  gap: 14px;
  text-align: center;
  background: ${({ theme }) => theme.bgMain};
  padding: 88px var(--gutter) 72px;
  min-height: 90vh;
  transition: background-color var(--ease);
`;

const HeroInner = styled.div`
  max-width: none;
  padding-inline: 0;
  display: grid;
  place-items: center;
  gap: 14px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.linkHover};
  font-size: clamp(2.6rem, 5vw, 3.4rem);
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.2px;
  padding-top: 50px;
  transition: color var(--ease);
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.textAccent};
  font-size: clamp(1.05rem, 2.1vw, 1.25rem);
  margin: 0;
  max-width: 56ch;
  opacity: 0.95;
  transition: color var(--ease);
`;

const AvatarButton = styled.button`
  display: inline-block;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
`;

const AvatarWrap = styled.div`
  --ring-thickness: 14px;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  place-items: center;
  width: clamp(160px, 22vw, 240px);
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: none;
  box-shadow: 0 12px 28px rgba(138, 43, 226, 0.12), 0 0 0 1px rgba(138, 43, 226, 0.18);
  transition: transform 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(140deg, ${({ theme }) => theme.ringStart} 0%, #d9c3ff 45%, ${({ theme }) => theme.ringEnd} 100%);
    -webkit-mask: radial-gradient(circle closest-side, transparent calc(100% - var(--ring-thickness)), #000 calc(100% - var(--ring-thickness)));
    mask: radial-gradient(circle closest-side, transparent calc(100% - var(--ring-thickness)), #000 calc(100% - var(--ring-thickness)));
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(167, 116, 255, 0.18), transparent 65%);
    filter: blur(10px);
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const AvatarImagePlaceholder = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.avatarBg};
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textAccent};
  transition: transform 0.25s var(--ease), filter 0.25s var(--ease);

  ${AvatarWrap}:hover & {
    filter: grayscale(0.15) brightness(0.9);
    transform: scale(1.015);
  }
`;

const OverlayText = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 50%;
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

const HeroSection: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <Hero id="welcome-section">
      <HeroInner>
        <AvatarButton onClick={() => setIsAboutOpen(true)} aria-label="Open About Me modal">
          <AvatarWrap>
            <AvatarImagePlaceholder aria-hidden="true">
              EJ
            </AvatarImagePlaceholder>
            <OverlayText aria-hidden="true">About Me</OverlayText>
          </AvatarWrap>
        </AvatarButton>

        <Title>Eden Jermendi's Portfolio</Title>
        <Subtitle>Welcome! Let's see if we vibe...</Subtitle>
      </HeroInner>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </Hero>
  );
};

export default HeroSection;
