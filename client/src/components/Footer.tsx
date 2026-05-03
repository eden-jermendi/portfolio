import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.bgFooter};
  border-top: 2px solid ${({ theme }) => theme.linkHover};
  color: ${({ theme }) => theme.textPrimary};
  font-family: "Fira Code", monospace;
  padding-block: 1rem; /* Reduced from 1.5rem for a slimmer look */
  transition: background-color var(--ease), color var(--ease), border-color var(--ease);

  @media (max-width: 480px) {
    padding-block: 0.75rem;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: row; /* Ensure it stays in one line */
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  flex-shrink: 0;
  
  .emoji {
    color: #e25555;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 0.75rem;
    flex-direction: row; /* Forced single line */
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  font-size: 0.9rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, color 0.3s;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }

  &:hover, &:focus-visible {
    border-bottom: 1px solid ${({ theme }) => theme.linkHover};
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper id="footer">
      <div className="site-width">
        <FooterContainer>
          <FooterText>
            Made with <span className="emoji">♥️</span> by Eden Jermendi · © {new Date().getFullYear()}
          </FooterText>
          
          <FooterLinks>
            <StyledLink 
              href="https://github.com/eden-jermendi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </StyledLink>
            <StyledLink href="#contact" aria-label="Scroll to Contact section">
              Contact
            </StyledLink>
          </FooterLinks>
        </FooterContainer>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
