import React from 'react';
import styled from 'styled-components';

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  imagePath: string;
  isActive: boolean;
}

const CardItem = styled.li<{ $isActive: boolean }>`
  min-width: 100%;
  padding: 0.75rem; /* Updated from 10px */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* ~15px */
`;

const ImageContainer = styled.a`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bgTile};
  transition: transform 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &:hover, &:focus-visible {
    border-color: ${({ theme }) => theme.linkHover};
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const TitleOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem; /* ~20px */
  background: radial-gradient(ellipse, ${({ theme }) => theme.projectOverlayCenter} 0%, ${({ theme }) => theme.projectOverlayEdge} 90%);
  backdrop-filter: blur(3px);
  color: ${({ theme }) => theme.projectOverlayText};
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;

  ${ImageContainer}:hover & {
    opacity: 0;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem; /* ~20px */
  background: radial-gradient(ellipse, ${({ theme }) => theme.projectHoverCenter} 0%, ${({ theme }) => theme.projectHoverEdge} 90%);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.projectOverlayText};
  text-align: center;
  pointer-events: none;
  z-index: 2;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
`;

const ProjectInfo = styled.div`
  text-align: center;
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 1rem; /* ~15px */
  justify-content: center;
  align-items: center;
`;

const GitHubButton = styled.a`
  font-family: "Fira Code", monospace;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textAccent};
  text-decoration: none;
  padding: 0.4rem 0.75rem; /* ~6px 12px */
  border: 1px solid ${({ theme }) => theme.textAccent};
  border-radius: 6px;
  transition: all 0.2s;
  cursor: pointer;
  background: none;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &:hover, &:focus-visible {
    background: ${({ theme }) => theme.textAccent};
    color: ${({ theme }) => theme.bgMain};
  }
`;

const AboutButton = styled.button`
  font-family: "Fira Code", monospace;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.tileInk};
  text-decoration: none;
  padding: 0.4rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.tileInk};
  border-radius: 6px;
  background: transparent;
  transition: all 0.2s;
  cursor: pointer;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  /* Improved contrast for light mode */
  ${({ theme }) => theme.bgMain === '#faf5ff' && `
    color: #5a5f6b; /* Darker than tileInk (#7a7f88) but still muted */
    border-color: #5a5f6b;
  `}

  &:hover, &:focus-visible {
    background: ${({ theme }) => theme.tileInk};
    color: ${({ theme }) => theme.bgMain};
    
    ${({ theme }) => theme.bgMain === '#faf5ff' && `
      background: #5a5f6b;
    `}
  }

  @media (min-width: 769px) {
    display: none; /* Hide on desktop where hover works */
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  liveUrl, 
  githubUrl, 
  imagePath, 
  isActive 
}) => {
  const [showMobileAbout, setShowMobileAbout] = React.useState(false);
  const mainLink = liveUrl || githubUrl;

  return (
    <CardItem $isActive={isActive} aria-hidden={!isActive}>
      <CardWrapper>
        <ImageContainer 
          href={mainLink} 
          target="_blank" 
          rel="noopener noreferrer"
          tabIndex={isActive ? 0 : -1}
          aria-label={`View ${title} ${liveUrl ? 'Live' : 'on GitHub'}`}
        >
          <ProjectImage 
            src={imagePath} 
            alt={`Screenshot of ${title}`} 
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/600x400/151024/bfa8ff?text=${encodeURIComponent(title)}`;
            }}
          />
          <TitleOverlay>{title}</TitleOverlay>
          <HoverOverlay style={showMobileAbout ? { opacity: 1, pointerEvents: 'auto' } : {}}>
            <Description>{description}</Description>
          </HoverOverlay>
        </ImageContainer>

        <ProjectInfo>
          <LinkGroup>
            <AboutButton 
              type="button"
              onClick={() => setShowMobileAbout(!showMobileAbout)}
              tabIndex={isActive ? 0 : -1}
            >
              {showMobileAbout ? 'Close' : 'About'}
            </AboutButton>
            <GitHubButton 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              tabIndex={isActive ? 0 : -1}
            >
              View Code
            </GitHubButton>
          </LinkGroup>
        </ProjectInfo>
      </CardWrapper>
    </CardItem>
  );
};

export default ProjectCard;
