import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tileClass: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, tileClass }) => {
  return (
    <div className="project-card">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={`project-tile ${tileClass}`}
        aria-label={`${title} project`}
      >
        <span className="tile-label">{title}</span>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
