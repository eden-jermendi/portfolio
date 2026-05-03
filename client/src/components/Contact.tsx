import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background: ${({ theme }) => theme.bgAccent};
  padding-block: 60px;
  transition: background-color var(--ease);
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactText = styled.div`
  flex: 1;
  max-width: 500px;

  h2 {
    color: ${({ theme }) => theme.linkHover};
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  p {
    color: ${({ theme }) => theme.textAccent};
    font-size: 1.2rem;
    margin: 0;
  }
`;

const ContactList = styled.address`
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.btnText};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 12px 20px;
  border: 2px solid ${({ theme }) => theme.btnBorder};
  border-radius: 8px;
  background: ${({ theme }) => theme.btnBg};
  transition: transform 0.3s, background-color 0.3s, color 0.3s, border-color 0.3s;
  display: block;
  min-width: 140px;
  text-align: center;

  &:hover, &:focus-visible {
    background: ${({ theme }) => theme.linkHover};
    color: white;
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.linkHover};
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact" aria-labelledby="contact-title">
      <ContactContainer className="site-width">
        <ContactText>
          <h2 id="contact-title">Want to work with me?</h2>
          <p>Let's connect and see if we vibe...</p>
        </ContactText>

        <ContactList>
          <ul aria-label="Contact links">
            <li>
              <ContactLink
                target="_blank"
                rel="noopener noreferrer"
                id="profile-link"
                href="https://github.com/eden-jermendi"
                aria-label="Visit Eden's GitHub profile"
              >
                GitHub
              </ContactLink>
            </li>
            <li style={{ marginTop: '20px' }}>
              <ContactLink
                href="mailto:ejermendi@gmail.com?subject=Let's%20work%20together!"
                aria-label="Send an email to Eden"
              >
                Email me
              </ContactLink>
            </li>
            <li style={{ marginTop: '20px' }}>
              <ContactLink 
                href="tel:+642102291894" 
                aria-label="Call Eden at +64 21 022 918 94"
              >
                Call me
              </ContactLink>
            </li>
          </ul>
        </ContactList>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
