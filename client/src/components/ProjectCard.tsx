import React from 'react'
import styled from 'styled-components'
import type { Project } from '../content/projects'
import { ButtonLink, Card } from './ui'

const CardItem = styled.li`
  height: 100%;
`

const CardShell = styled(Card)`
  display: grid;
  height: 100%;
`

const PreviewLink = styled.a`
  display: block;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.surface.overlay} 0%,
      ${({ theme }) => theme.surface.elevated} 100%
    );
  border-bottom: 1px solid ${({ theme }) => theme.border.soft};
`

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PreviewFallback = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  color: ${({ theme }) => theme.text.secondary};
  font: 600 1rem/1.5 var(--font-mono);
`

const Body = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.4rem;
`

const HeadingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: -0.03em;
`

const Status = styled.span`
  padding: 0.35rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.border.strong};
  border-radius: 999px;
  color: ${({ theme }) => theme.text.muted};
  font: 500 0.72rem/1 var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const Summary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.accent.primary};
  font: 500 0.88rem/1.5 var(--font-mono);
`

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text.secondary};
`

const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const StackItem = styled.li`
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface.subtle};
  color: ${({ theme }) => theme.text.muted};
  font: 500 0.72rem/1 var(--font-mono);
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.2rem;
`

const ProjectCard: React.FC<Project> = ({
  title,
  summary,
  description,
  imagePath,
  imageAlt,
  githubUrl,
  liveUrl,
  status,
  stack,
}) => {
  const [imageFailed, setImageFailed] = React.useState(false)
  const previewHref = liveUrl ?? githubUrl

  return (
    <CardItem>
      <CardShell>
        <PreviewLink
          href={previewHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}${liveUrl ? ' live project' : ' on GitHub'}`}
        >
          {imageFailed ? (
            <PreviewFallback>{title}</PreviewFallback>
          ) : (
            <PreviewImage
              src={imagePath}
              alt={imageAlt}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          )}
        </PreviewLink>

        <Body>
          <HeadingRow>
            <Title>{title}</Title>
            {status ? <Status>{status}</Status> : null}
          </HeadingRow>

          <Summary>{summary}</Summary>
          <Description>{description}</Description>

          <StackList aria-label={`${title} technology stack`}>
            {stack.map((item) => (
              <StackItem key={item}>{item}</StackItem>
            ))}
          </StackList>

          <Actions>
            {liveUrl ? (
              <ButtonLink href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live project
              </ButtonLink>
            ) : null}
            <ButtonLink
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              $variant="ghost"
            >
              View code
            </ButtonLink>
          </Actions>
        </Body>
      </CardShell>
    </CardItem>
  )
}

export default ProjectCard
