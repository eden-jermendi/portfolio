import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: min(1120px, calc(100vw - 2rem));
  margin-inline: auto;
`

export const Section = styled.section<{ $surface?: 'default' | 'muted' }>`
  position: relative;
  padding: clamp(4.5rem, 8vw, 7rem) 0;

  ${({ $surface, theme }) =>
    $surface === 'muted' &&
    css`
      background: ${theme.surface.subtle};
      border-block: 1px solid ${theme.border.soft};
    `}
`

export const SectionHeader = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 44rem;
  margin-bottom: clamp(2rem, 4vw, 3rem);
`

export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text.muted};
  font: 600 0.82rem/1 var(--font-mono);
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text.primary};
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
`

export const SectionDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.05rem;
  line-height: 1.75;
`

export const Card = styled.article`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border.soft};
  border-radius: 28px;
  background:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.surface.overlay} 0%,
      ${({ theme }) => theme.surface.elevated} 100%
    );
  box-shadow: ${({ theme }) => theme.shadow.card};
`

const buttonStyles = css<{ $variant?: 'primary' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.875rem;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.border.strong : theme.accent.primary};
  background:
    ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.surface.elevated : theme.accent.primary};
  color:
    ${({ theme, $variant }) =>
      $variant === 'ghost' ? theme.text.primary : theme.text.inverse};
  font: 600 0.92rem/1.1 var(--font-mono);
  letter-spacing: 0.01em;
  text-decoration: none;
  transition:
    transform var(--ease),
    background-color var(--ease),
    border-color var(--ease),
    color var(--ease),
    box-shadow var(--ease);

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(14, 10, 24, 0.3);
  }
`

export const ButtonLink = styled.a<{ $variant?: 'primary' | 'ghost' }>`
  ${buttonStyles}
`

export const Button = styled.button<{ $variant?: 'primary' | 'ghost' }>`
  ${buttonStyles}
  cursor: pointer;
`

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
