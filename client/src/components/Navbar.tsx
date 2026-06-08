import React from 'react'
import styled from 'styled-components'
import { siteContent } from '../content/siteContent'
import { Container } from './ui'
import { useTheme } from './theme-context'

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0 0;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.border.soft};
  border-radius: 999px;
  background: ${({ theme }) => theme.surface.overlay};
  backdrop-filter: blur(20px);
  box-shadow: ${({ theme }) => theme.shadow.card};

  @media (max-width: 820px) {
    flex-wrap: wrap;
    border-radius: 28px;
  }
`

const Brand = styled.a`
  color: ${({ theme }) => theme.text.primary};
  font: 700 1rem/1 var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex: 1 1 18rem;
`

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.4rem;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.text.secondary};
  font: 500 0.88rem/1 var(--font-mono);

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.surface.elevated};
  }
`

const AboutButton = styled.button`
  min-height: 2.4rem;
  padding: 0.6rem 0.9rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.text.secondary};
  font: 500 0.88rem/1 var(--font-mono);
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.surface.elevated};
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border.strong};
  color: ${({ theme }) => theme.text.primary};
  font: 500 0.88rem/1 var(--font-mono);

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`

const ThemeButton = styled.button`
  min-width: 2.5rem;
  min-height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.border.strong};
  border-radius: 999px;
  background: ${({ theme }) => theme.surface.elevated};
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`

const Navbar: React.FC<{ onAboutClick: () => void }> = ({ onAboutClick }) => {
  const { theme, toggleTheme } = useTheme()
  const { navigation } = siteContent

  return (
    <HeaderWrapper>
      <Container>
        <Nav id="navbar" aria-label="Primary">
          <Brand href="/" aria-label="Eden Jermendi home">
            {navigation.brand}
          </Brand>

          <NavList>
            <li>
              <AboutButton type="button" onClick={onAboutClick}>
                {navigation.aboutLabel}
              </AboutButton>
            </li>
            {navigation.links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </NavList>

          <Controls>
            <ResumeLink
              href={navigation.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {navigation.resumeLabel}
            </ResumeLink>
            <ThemeButton
              id="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              title="Toggle theme"
            >
              <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            </ThemeButton>
          </Controls>
        </Nav>
      </Container>
    </HeaderWrapper>
  )
}

export default Navbar
