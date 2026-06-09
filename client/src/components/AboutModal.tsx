import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { siteContent } from '../content/siteContent'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(8, 5, 14, 0.72);
  backdrop-filter: blur(18px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
`

const ModalContent = styled.article`
  background:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.surface.overlay} 0%,
      ${({ theme }) => theme.surface.elevated} 100%
    );
  color: ${({ theme }) => theme.text.primary};
  max-width: 760px;
  width: 100%;
  max-height: min(82vh, 52rem);
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.border.soft};
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow.hero};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ScrollArea = styled.div`
  overflow-y: auto;
  padding: 1.5rem 1.5rem 1.75rem;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.border.strong};
  border-radius: 999px;
  background: ${({ theme }) => theme.surface.elevated};
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
  z-index: 10;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`

const Header = styled.div`
  display: grid;
  gap: 0.85rem;
  padding: 1.5rem 1.5rem 0;
`

const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text.muted};
  font: 600 0.78rem/1 var(--font-mono);
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
`

const Copy = styled.div`
  display: grid;
  gap: 1rem;

  p {
    margin: 0;
    color: ${({ theme }) => theme.text.secondary};
    line-height: 1.8;
  }
`

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    previousActiveElementRef.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return
      }

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      )
      const focusableElements = Array.from(focusable).filter(
        (element) => !element.hasAttribute('disabled'),
      )

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previousActiveElementRef.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <Overlay
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="about-title"
      aria-describedby="about-description"
    >
      <ModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <CloseButton ref={closeButtonRef} onClick={onClose} aria-label="Close modal">
          ×
        </CloseButton>
        <Header>
          <Eyebrow>Background</Eyebrow>
          <Title id="about-title">{siteContent.about.title}</Title>
        </Header>
        <ScrollArea>
          <Copy id="about-description">
            {siteContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Copy>
        </ScrollArea>
      </ModalContent>
    </Overlay>
  )
}

export default AboutModal
