import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Technical Documentation',
    description: 'Technical documentation page project',
    link: 'https://eden-jermendi.github.io/technical-doc/',
    tileClass: 'tile-docs'
  },
  {
    title: 'Product Landing',
    description: 'Product landing page project',
    link: 'https://eden-jermendi.github.io/product-landing-page/',
    tileClass: 'tile-landing'
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Interactive game project',
    link: 'https://eden-jermendi.github.io/paper-scissors-rock/',
    tileClass: 'tile-rps'
  },
  {
    title: 'Calculator',
    description: 'Made using Vanilla JS, HTML and CSS',
    link: 'https://eden-jermendi.github.io/calculator/',
    tileClass: 'tile-calc'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
