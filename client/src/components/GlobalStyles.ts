import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --ease: 240ms cubic-bezier(.2, .6, .2, 1);
    --content-max: 1200px;
    --gutter: clamp(16px, 4vw, 40px);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, sans-serif;
    background-color: ${({ theme }) => theme.bgMain};
    color: ${({ theme }) => theme.textPrimary};
    transition: background-color var(--ease), color var(--ease);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Accessibility: Visible Focus States */
  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.linkHover};
    outline-offset: 2px;
  }

  /* Skip Link (for keyboard users) */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: ${({ theme }) => theme.textAccent};
    color: white;
    padding: 8px;
    z-index: 1001;
    transition: top 0.3s;
  }

  .skip-link:focus {
    top: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--ease);
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

  .site-width {
    max-width: var(--content-max);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }
`;
