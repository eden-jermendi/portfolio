import React, { useEffect } from 'react';
import styled from 'styled-components';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  padding: 20px;
`;

const ModalContent = styled.article`
  background: ${({ theme }) => theme.bgMain};
  color: ${({ theme }) => theme.textPrimary};
  max-width: 700px;
  width: 100%;
  max-height: 70vh; /* Reduced from 80vh */
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.linkHover};
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h2 {
    color: ${({ theme }) => theme.linkHover};
    margin-bottom: 24px;
    font-size: 2rem;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  padding: 0 40px 40px 40px; 
  margin: 60px 25px 20px 25px; /* Added 25px horizontal margins to pull scrollbar inward */
  height: 100%;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.linkHover};
    border-radius: 10px;
    border: 4px solid ${({ theme }) => theme.bgMain};
    background-clip: content-box;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  line-height: 1;
  transition: color 0.2s;
  z-index: 10;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay $isOpen={isOpen} onClick={onClose} aria-modal="true" role="dialog" aria-labelledby="about-title">
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal">×</CloseButton>
        <ScrollArea>
          <h2 id="about-title">About Me</h2>
          
          <p>
            Kia ora! I’m Eden Jermendi, a soon-to-be graduate of Dev Academy Aotearoa’s Certificate in Applied Software Development. I came into bootcamp with a strong self-taught foundation built through platforms like The Odin Project and freeCodeCamp, and I’m now sharpening those skills through collaborative projects, modern full-stack development, and real-world problem solving at Dev Academy.
          </p>

          <p>
            Recently I’ve been building projects like Coursework Tracker, a productivity-focused full-stack app, and Weather Oracle, an API-driven project that deepened my backend and integration skills. I enjoy full-stack development overall, but I’m especially drawn to backend-leaning work ~ building systems with Node.js, Express, databases, APIs, and the logic that powers smooth user experiences.
          </p>

          <p>
            As I move into the tech industry in 2026, I’m interested in open-source contribution, cloud technologies, and growing toward cybersecurity ~~ especially pentesting. My goal is to build tools and experiences that are technically sharp, creative, and genuinely accessible.
          </p>

          <p>
            Outside of code, I’m passionate about music production, gaming, and learning through cultural history and spirituality from a critical, anti-colonial lens. I bring that same curiosity, determination, and passion into development ~ always wanting to understand how things work, how they can be improved, and what can be built next.
          </p>
        </ScrollArea>
      </ModalContent>
    </Overlay>
  );
};

export default AboutModal;
