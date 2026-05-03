import React from 'react';
import styled from 'styled-components';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  isActive: boolean;
}

const CardItem = styled.li<{ $isActive: boolean }>`
  min-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity 0.3s ease;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.3)};
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
`;

const ProjectLink = styled.a`
  display: block;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 16 / 9;
  border: 3px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.bgTile};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 1rem;
  
  &:hover, &:focus-visible {
    border-color: ${({ theme }) => theme.linkHover};
    color: ${({ theme }) => theme.linkHover};
    transform: translateY(-2px);
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textAccent};
  font-size: 1rem;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, isActive }) => {
  return (
    <CardItem $isActive={isActive} aria-hidden={!isActive}>
      <ProjectLink
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isActive ? 0 : -1}
      >
        {title}
      </ProjectLink>
      <ProjectDescription>{description}</ProjectDescription>
    </CardItem>
  );
};

export default ProjectCard;
