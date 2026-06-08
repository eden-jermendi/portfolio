import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  onAboutClick: () => void
}

const Shell = styled.div`
  position: relative;
  isolation: isolate;

  &::before,
  &::after {
    content: '';
    position: fixed;
    inset: auto;
    border-radius: 999px;
    pointer-events: none;
    filter: blur(70px);
    opacity: 0.5;
    z-index: -1;
  }

  &::before {
    top: 5rem;
    left: -6rem;
    width: 18rem;
    height: 18rem;
    background: ${({ theme }) => theme.accent.glow};
  }

  &::after {
    right: -4rem;
    bottom: 10rem;
    width: 20rem;
    height: 20rem;
    background: ${({ theme }) => theme.accent.glow};
  }
`

const Main = styled.main`
  position: relative;
`

const Layout: React.FC<LayoutProps> = ({ children, onAboutClick }) => {
  return (
    <Shell>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar onAboutClick={onAboutClick} />
      <Main id="main-content">{children}</Main>
      <Footer />
    </Shell>
  )
}

export default Layout
