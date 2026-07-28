# Design Standards

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Establish enforceable parameters for color token values, visual boundary representation, spacing grid mechanics, and surface minimalism to ensure the UI embodies authoritative engineering maturity, zero-runtime efficiency, and absolute rejection of promotional AI template aesthetics.

## 2. Objective Engineering Constraints
* **Zero-Runtime Styling Infrastructure**:
  * All structural colors, spacing ratios, shadow values, and border parameters must be declared as root CSS custom properties (`--surface-*`, `--text-*`, `--border-*`, `--spacing-*`) within `src/app/globals.css`.
  * Inline hardcoded hexadecimal color string values, random pixel dimensions, and runtime CSS-in-JS macro styling bindings (`styled-components`) are banned from component markup files.
* **Visual Noise & Decorative Banishment**:
  * Radial gradient halos, saturated mesh backgrounds, decorative floating shapes, animated particle animations, and tinted drop shadows (such as legacy `--shadow-hero: 0 32px 110px rgba(...)`) are strictly prohibited from stylesheets.
  * Glassmorphism properties (`backdrop-filter: blur(...)`) and translucent overlays that dilute background legibility or tax browser rendering composite pipelines must be completely eradicated.
* **Strict Monochromatic Palette Enforcement**:
  * Primary application background canvas must maintain deep neutral darkness (`#0a0a0c` to `#121214`), avoiding saturated purple, blue, or green ambient undertones.
  * Surface differentiation must rely exclusively on slight tonal elevation lightness adjustments (`#17171a`) or hairline neutral borders (`1px solid rgba(255, 255, 255, 0.08)` to `0.14`).
  * A single focused functional accent color tone (`--accent-primary`) is permitted strictly to signify active interactive states, high-contrast visible keyboard focus perimeters, or important architectural system links.

## 3. Subjective Design Preferences & Editorial Layout
* **Whitespace & Vertical Rhythm Strategy**:
  * Utilize deliberate vertical negative space (`2rem`, `4rem`, `6rem` vertical spacing intervals) to delineate structural architectural sections rather than boxing content within redundant visual cards or heavy graphical frames.
  * Design presentation must feel closer to high-end engineering utility tools, editorial print journals, and professional operating systems (e.g., Linear, Raycast, Apple developer documentations) than commercial SaaS promotional landing pages.
* **Content Form Factor & Container Limits**:
  * Confine editorial reading lines to disciplined typographic measures (maximum `65 to 75 characters` per paragraph line length) to guarantee effortless optical eye tracking across multi-paragraph case studies.
  * Avoid oversized decorative hero sections or glowing author portrait wrappers; present professional credentials through immaculate high-contrast typographic layouts.

## 4. Acceptance Criteria
* Verification that stylesheets execute zero blurred overlays or tinted gradient halos.
* Code review confirmation proving 100% adherence to established CSS custom property design tokens without ad-hoc style declarations.
