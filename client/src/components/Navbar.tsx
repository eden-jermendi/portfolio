import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeProvider';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.bgMain};
  border-bottom: 2px solid ${({ theme }) => theme.linkHover};
  transition: background-color var(--ease), border-color var(--ease);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-block: 0.75rem; /* Reduced from 1rem for a slimmer profile */
  font-family: "Fira Code", monospace;

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding-block: 0.5rem;
  }
`;

const LogoLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.textPrimary};
  transition: color var(--ease);
  flex-shrink: 0;

  span {
    font-weight: bold;
    font-size: 1.2rem;
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem; /* Reduced from 2rem */
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem; /* Maintain horizontal flow even on mobile */
  }

  @media (max-width: 480px) {
    gap: 0.75rem; /* Tighter spacing for very small screens */
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  font-size: 0.95rem; /* Slightly smaller for better fit */
  position: relative;
  transition: color var(--ease);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.2rem;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.linkHover};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after,
  &:focus-visible::after {
    width: 100%;
  }

  &[aria-current="page"]::after {
    width: 100%;
  }
`;

const ThemeButton = styled.button`
  appearance: none;
  border: 2px solid ${({ theme }) => theme.btnBorder};
  background: ${({ theme }) => theme.btnBg};
  color: ${({ theme }) => theme.btnText};
  padding: 0.4rem 0.8rem; /* Slimmer padding */
  border-radius: 999px;
  cursor: pointer;
  line-height: 1;
  transition: transform var(--ease), background-color var(--ease), color var(--ease), border-color var(--ease);
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Navbar: React.FC<{ onAboutClick: () => void }> = ({ onAboutClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderWrapper>
      <div className="site-width">
        <Nav id="navbar" aria-label="Primary">
          <LogoLink href="/" aria-label="Eden Jermendi logo">
            <span>EJ.</span>
          </LogoLink>

          <NavList>
            <NavItem>
              <NavLink 
                as="button" 
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  onAboutClick();
                }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavList>

          <ThemeButton
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title="Toggle theme"
          >
            <span aria-hidden="true">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </ThemeButton>
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Navbar;
