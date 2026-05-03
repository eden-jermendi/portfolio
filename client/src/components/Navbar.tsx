import React from 'react';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="site-width">
        <nav id="navbar" aria-label="Primary">
          <a href="/" className="logo" aria-label="Eden Jermendi logo">
            LOGO
          </a>

          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button
            id="theme-toggle"
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
