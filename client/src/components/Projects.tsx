import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Technical Documentation',
    description: 'Technical documentation page project',
    link: 'https://eden-jermendi.github.io/technical-doc/',
  },
  {
    title: 'Product Landing',
    description: 'Product landing page project',
    link: 'https://eden-jermendi.github.io/product-landing-page/',
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Interactive game project',
    link: 'https://eden-jermendi.github.io/paper-scissors-rock/',
  },
  {
    title: 'Calculator',
    description: 'Made using Vanilla JS, HTML and CSS',
    link: 'https://eden-jermendi.github.io/calculator/',
  }
];

const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.bgAccent};
  padding: 80px 0;
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
  gap: 20px;
  margin-top: 30px;
`;

const ControlButton = styled.button`
  background: ${({ theme }) => theme.btnBg};
  border: 2px solid ${({ theme }) => theme.btnBorder};
  color: ${({ theme }) => theme.btnText};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.linkHover};
    color: white;
  }
`;

const ProjectCounter = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textPrimary};
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
        <h2 id="projects-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
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
