import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <p>
          Made with <span className="emoji">♥️</span> by Eden Jermendi · © {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://github.com/eden-jermendi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
