import React from 'react'
import styled from 'styled-components'
import { siteContent } from '../content/siteContent'
import { Container } from './ui'

const FooterWrapper = styled.footer`
  padding: 1.25rem 0 2rem;
`

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.border.soft};

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
`

const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text.muted};
  font: 500 0.82rem/1.6 var(--font-mono);
`

const FooterLinks = styled.ul`
  display: flex;
  gap: 0.9rem;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.text.secondary};
  font: 500 0.82rem/1.4 var(--font-mono);
  white-space: nowrap;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.text.primary};
  }
`

const Footer: React.FC = () => {
  const { footer } = siteContent

  return (
    <FooterWrapper id="footer">
      <FooterContainer>
        <FooterText>
          {footer.label} · © {new Date().getFullYear()}
        </FooterText>

        <FooterLinks>
          {footer.links.map((link) => (
            <li key={link.href}>
              <StyledLink
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {link.label}
              </StyledLink>
            </li>
          ))}
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
