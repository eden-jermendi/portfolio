import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --ease: 240ms cubic-bezier(.2, .6, .2, 1);
    --font-sans: "Manrope", "Segoe UI", sans-serif;
    --font-mono: "IBM Plex Mono", "SFMono-Regular", monospace;
    color-scheme: dark;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: var(--font-sans);
    background:
      radial-gradient(circle at top, ${({ theme }) => theme.accent.glow} 0%, transparent 35%),
      linear-gradient(180deg, ${({ theme }) => theme.surface.canvas} 0%, ${({ theme }) => theme.surface.canvas} 100%);
    color: ${({ theme }) => theme.text.primary};
    transition: background-color var(--ease), color var(--ease), background var(--ease);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent.primary};
    outline-offset: 3px;
  }

  .skip-link {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1001;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.accent.primary};
    color: ${({ theme }) => theme.text.inverse};
    transform: translateY(-150%);
    transition: transform var(--ease);
  }

  .skip-link:focus {
    transform: translateY(0);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--ease), border-color var(--ease), background-color var(--ease);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  ::selection {
    background: ${({ theme }) => theme.accent.secondary};
    color: ${({ theme }) => theme.text.inverse};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
