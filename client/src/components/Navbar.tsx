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
  padding-block: 1rem; /* Reduced from 20px */
  font-family: "Fira Code", monospace;
`;

const LogoLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.textPrimary};
  transition: color var(--ease);

  svg {
    height: 2.5rem; /* ~40px */
    display: block;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem; /* ~30px */
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color var(--ease);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.25rem;
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
  padding: 0.5rem 1rem; /* ~8px 16px */
  border-radius: 999px;
  cursor: pointer;
  line-height: 1;
  transition: transform var(--ease), background-color var(--ease), color var(--ease), border-color var(--ease);

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
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>EJ.</span>
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
