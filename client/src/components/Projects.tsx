import React from 'react'
import styled from 'styled-components'
import { projects } from '../content/projects'
import { siteContent } from '../content/siteContent'
import ProjectCard from './ProjectCard'
import {
  Container,
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './ui'

const ProjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Projects: React.FC = () => {
  const { projects: section } = siteContent

  return (
    <Section id="projects" aria-labelledby="projects-title" $surface="muted">
      <Container>
        <SectionHeader>
          <Eyebrow>{section.eyebrow}</Eyebrow>
          <SectionTitle id="projects-title">{section.title}</SectionTitle>
          <SectionDescription>{section.intro}</SectionDescription>
        </SectionHeader>

        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  )
}

export default Projects
