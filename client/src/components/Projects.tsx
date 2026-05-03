import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Coursework Tracker',
    description: 'Full-stack application for managing academic progress, featuring database integration and external API synchronization.',
    githubUrl: 'https://github.com/eden-jermendi/coursework-tracker',
    liveUrl: 'https://coursework-tracker.onrender.com/',
    imagePath: '/images/projects/coursework-tracker-img.png'
  },
  {
    title: 'Weather Oracle',
    description: 'Whimsical weather utility leveraging external APIs and LLM integration to deliver personalized, AI-driven weather insights.',
    githubUrl: 'https://github.com/eden-jermendi/weather-oracle',
    liveUrl: 'https://weather-oracle-2sgu.onrender.com/',
    imagePath: '/images/projects/weather-oracle-img.png'
  },
  {
    title: 'Maramataka Calendar',
    description: 'Interactive digital calendar based on the traditional Māori lunar Maramataka (Work in Progress).',
    githubUrl: 'https://github.com/eden-jermendi/maramataka-calendar',
    imagePath: '/images/projects/maramataka-calendar-img.jpg'
  },
  {
    title: 'Delete My Instagram Comments',
    description: 'Automated JavaScript utility for bulk comment management via browser developer tools.',
    githubUrl: 'https://github.com/eden-jermendi/delete-my-instagram-comments',
    imagePath: '/images/projects/delete-my-insta-comments-img.jpg'
  }
];

const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.bgAccent};
  padding: 5rem 0; /* Updated from 80px */
  transition: background-color var(--ease);
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
`;

const ProjectList = styled.ul<{ $activeIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${({ $activeIndex }) => $activeIndex * 100}%);
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem; /* ~20px */
  margin-top: 2rem; /* ~30px */
`;

const ControlButton = styled.button`
  background: ${({ theme }) => theme.btnBg};
  border: 2px solid ${({ theme }) => theme.btnBorder};
  color: ${({ theme }) => theme.btnText};
  padding: 0.75rem 1.25rem; /* ~12px 20px */
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Fira Code", monospace;
  transition: all 0.2s;
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.linkHover};
    border-color: ${({ theme }) => theme.linkHover};
    color: white;
  }
`;

const ProjectCounter = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textPrimary};
  min-width: 4rem; /* ~60px */
  text-align: center;
`;

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <ProjectsSection id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          My Projects
        </h2>
        
        <CarouselContainer 
          role="region" 
          aria-roledescription="carousel" 
          aria-label="Projects Showcase"
        >
          <ProjectList $activeIndex={activeIndex}>
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                isActive={index === activeIndex} 
              />
            ))}
          </ProjectList>

          <Controls>
            <ControlButton 
              onClick={prevProject} 
              aria-label="Previous Project"
            >
              &larr; Prev
            </ControlButton>
            
            <ProjectCounter aria-live="polite">
              {activeIndex + 1} / {projectsData.length}
            </ProjectCounter>

            <ControlButton 
              onClick={nextProject} 
              aria-label="Next Project"
            >
              Next &rarr;
            </ControlButton>
          </Controls>
        </CarouselContainer>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
