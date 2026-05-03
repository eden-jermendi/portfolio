import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.bgFooter};
  border-top: 2px solid ${({ theme }) => theme.linkHover};
  color: ${({ theme }) => theme.textPrimary};
  font-family: "Fira Code", monospace;
  padding-block: 40px;
  text-align: center;
  transition: background-color var(--ease), color var(--ease), border-color var(--ease);
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  
  .emoji {
    color: #e25555; /* A vibrant red for the heart */
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: none;
  font-size: 0.9rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, color 0.3s;

  &:hover, &:focus-visible {
    border-bottom: 1px solid ${({ theme }) => theme.linkHover};
    color: ${({ theme }) => theme.linkHover};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper id="footer">
      <FooterContainer className="site-width">
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
    </FooterWrapper>
  );
};

export default Footer;
