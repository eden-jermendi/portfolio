import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { siteContent } from '../content/siteContent'
import {
  Button,
  Card,
  Container,
  Eyebrow,
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './ui'
import { useTheme } from './theme-context'

const ContactGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  display: grid;
  gap: 1.5rem;
`

const Notes = styled.div`
  display: grid;
  gap: 1rem;
  color: ${({ theme }) => theme.text.secondary};
`

const LinkList = styled.ul`
  display: grid;
  gap: 0.9rem;
`

const ContactLink = styled.a`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
  border: 1px solid ${({ theme }) => theme.border.soft};
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.surface.overlay};
  color: ${({ theme }) => theme.text.primary};
  font: 500 0.9rem/1.4 var(--font-mono);

  span:last-child {
    color: ${({ theme }) => theme.text.muted};
  }

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`

const FormCard = styled(Card)`
  padding: clamp(1.2rem, 4vw, 2rem);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

const Label = styled.label`
  color: ${({ theme }) => theme.text.muted};
  font: 500 0.82rem/1.3 var(--font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const Input = styled.input`
  background: ${({ theme }) => theme.surface.canvas};
  border: 1px solid ${({ theme }) => theme.border.soft};
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  font-family: inherit;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.accent.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accent.glow};
  }
`

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
  resize: vertical;
`

const ResultMessage = styled.p<{ $isSuccess: boolean }>`
  margin: 0;
  color: ${({ $isSuccess, theme }) =>
    $isSuccess ? theme.accent.primary : '#ff9ca8'};
  font: 500 0.92rem/1.6 var(--font-mono);
`

const FormHeading = styled.h3`
  margin: 0 0 1.25rem;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.35rem;
  letter-spacing: -0.03em;
`

const CaptchaWrap = styled.div`
  min-height: 78px;
  display: flex;
  justify-content: center;
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 0.25rem;
  border: 0;
  color: ${({ theme }) => theme.text.inverse};
`

const Contact: React.FC = () => {
  const { theme } = useTheme()
  const { contact } = siteContent
  const [result, setResult] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!captchaToken) {
      setStatus('error')
      setResult('Please complete the captcha.')
      return
    }

    setStatus('submitting')
    setResult('Sending...')

    const formData = new FormData(event.currentTarget)
    formData.set('access_key', contact.form.accessKey)
    formData.set('h-captcha-response', captchaToken)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setResult('Message sent successfully!')
        ;(event.target as HTMLFormElement).reset()
        setCaptchaToken(null)
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha()
        }
      } else {
        setStatus('error')
        console.error('Web3Forms Error:', data)
        setResult(
          data.message || 'Could not validate captcha. Please try again.',
        )
      }
    } catch (error) {
      console.error('Form error:', error)
      setStatus('error')
      setResult('Connection error. Please try again later.')
    }
  }

  return (
    <Section id="contact" aria-labelledby="contact-title">
      <ContactGrid>
        <ContactInfo>
          <SectionHeader>
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <SectionTitle id="contact-title">{contact.title}</SectionTitle>
            <SectionDescription>{contact.intro}</SectionDescription>
          </SectionHeader>

          <Notes>
            <p>
              I am especially interested in junior developer roles, meaningful
              collaboration, and projects that value clear thinking over noise.
            </p>
          </Notes>

          <LinkList aria-label="Quick contact methods">
            {contact.quickLinks.map((link) => (
              <li key={link.href}>
                <ContactLink
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <span>{link.label}</span>
                  <span>{link.href.startsWith('mailto:') ? 'Direct' : 'Open'}</span>
                </ContactLink>
              </li>
            ))}
          </LinkList>
        </ContactInfo>

        <FormCard>
          <FormHeading>{contact.form.heading}</FormHeading>
          <Form onSubmit={onSubmit} aria-busy={status === 'submitting'}>
            <InputGroup>
              <Label htmlFor="name">{contact.form.fields.nameLabel}</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder={contact.form.fields.namePlaceholder}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">{contact.form.fields.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder={contact.form.fields.emailPlaceholder}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="message">{contact.form.fields.messageLabel}</Label>
              <TextArea
                id="message"
                name="message"
                placeholder={contact.form.fields.messagePlaceholder}
                required
              />
            </InputGroup>

            <CaptchaWrap>
              <HCaptcha
                ref={captchaRef}
                sitekey={contact.form.hCaptchaSiteKey}
                theme={theme === 'dark' ? 'dark' : 'light'}
                onVerify={onCaptchaChange}
                onExpire={() => setCaptchaToken(null)}
                reCaptchaCompat={false}
              />
            </CaptchaWrap>

            <SubmitButton type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </SubmitButton>

            {result && (
              <ResultMessage
                $isSuccess={status === 'success'}
                aria-live="polite"
                role="status"
              >
                {result}
              </ResultMessage>
            )}
          </Form>
        </FormCard>
      </ContactGrid>
    </Section>
  )
}

export default Contact
