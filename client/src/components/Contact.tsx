import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeProvider';

const ContactSection = styled.section`
  background: ${({ theme }) => theme.contactBg};
  padding-block: 4rem;
  transition: background-color var(--ease);
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  max-width: 500px;

  h2 {
    color: ${({ theme }) => theme.linkHover};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.textAccent};
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.btnText};
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.btnBorder};
  border-radius: 8px;
  background: ${({ theme }) => theme.btnBg};
  transition: transform 0.3s, background-color 0.3s, color 0.3s, border-color 0.3s;
  text-align: center;
  flex: 1;
  min-width: 140px;

  &:hover, &:focus-visible {
    background: ${({ theme }) => theme.linkHover};
    color: white;
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.linkHover};
  }
`;

/* --- Form Components --- */

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.bgTile};
  padding: 2.5rem;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.btnBorder};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: border-color var(--ease), background-color var(--ease);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-family: "Fira Code", monospace;
  color: ${({ theme }) => theme.textPrimary};
  opacity: 0.8;
`;

const Input = styled.input`
  background: ${({ theme }) => theme.bgMain};
  border: 2px solid ${({ theme }) => theme.btnBorder};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.linkHover};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.linkHover}33;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.linkHover};
  color: white;
  border: 2px solid ${({ theme }) => theme.linkHover};
  border-radius: 8px;
  padding: 0.85rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s, filter 0.3s;
  margin-top: 0.5rem;

  &:hover, &:focus-visible {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ResultMessage = styled.p<{ $isSuccess: boolean }>`
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ $isSuccess, theme }) => ($isSuccess ? '#4caf50' : theme.textAccent)};
  margin-top: 1rem;
`;

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const captchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In React, the hCaptcha script might run before the component is rendered.
    // We check periodically if hcaptcha is ready and render it if the container is empty.
    const interval = setInterval(() => {
      if ((window as any).hcaptcha && captchaRef.current && captchaRef.current.innerHTML === "") {
        (window as any).hcaptcha.render(captchaRef.current, {
          sitekey: "50b2fe65-b00b-4b9e-b44b-447f53504810", // Web3Forms Standard Sitekey
          theme: theme === 'dark' ? 'dark' : 'light',
          hostname: "edenjermendi.com" // Explicitly set hostname to avoid localhost detection issues
        });
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [theme]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    
    // Client-side hCaptcha validation
    const hCaptchaResponse = formData.get("h-captcha-response");
    if (!hCaptchaResponse) {
      setStatus("error");
      setResult("Please complete the captcha.");
      return;
    }

    setStatus("submitting");
    setResult("Sending...");

    formData.append("access_key", "2985cf06-1f54-4773-8756-3f9f2c1cb692");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
        if ((window as any).hcaptcha) {
          (window as any).hcaptcha.reset();
        }
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
      setResult("Connection error. Please try again later.");
    }
  };

  return (
    <ContactSection id="contact" aria-labelledby="contact-title">
      <ContactContainer className="site-width">
        <ContactInfo>
          <h2 id="contact-title">Want to work with me?</h2>
          <p>Let's connect and see if we vibe...</p>
          
          <ActionButtons aria-label="Quick contact methods">
            <ContactLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/eden-jermendi"
              aria-label="Visit Eden's GitHub profile"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="mailto:ejermendi@gmail.com?subject=Let's%20work%20together!"
              aria-label="Send an email to Eden"
            >
              Email me
            </ContactLink>
            <ContactLink 
              href="tel:+642102291894" 
              aria-label="Call Eden at +64 21 022 918 94"
            >
              Call me
            </ContactLink>
          </ActionButtons>
        </ContactInfo>

        <FormWrapper>
          <Form onSubmit={onSubmit}>
            <InputGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                type="text" 
                name="name" 
                placeholder="Your name"
                required 
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                type="email" 
                name="email" 
                placeholder="yourname@example.com"
                required 
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea 
                id="message"
                name="message" 
                placeholder="What's on your mind?"
                required 
              />
            </InputGroup>

            {/* hCaptcha Integration Container */}
            <div 
              ref={captchaRef}
              className="h-captcha" 
              data-captcha="true"
              style={{ marginBottom: '1rem', minHeight: '78px' }}
            ></div>

            <SubmitButton type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </SubmitButton>
            
            {result && (
              <ResultMessage $isSuccess={status === "success"}>
                {result}
              </ResultMessage>
            )}
          </Form>
        </FormWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
