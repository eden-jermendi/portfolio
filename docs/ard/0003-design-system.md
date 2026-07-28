# ARD-0003: Design System

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines the typographic foundations, chromatic tokens, spatial rhythm specifications, and architectural constraints governing visual rendering across the engineering portfolio interface.

## 2. Responsibilities
* Enforce a consistent, highly readable, monochromatic dark-mode visual interface free of visual noise, unnecessary gradients, and AI-template conventions.
* Provide an immutable set of structural design tokens (color, spacing, typography, borders, shadows) accessible to stylesheets without runtime script execution.
* Maintain rigorous visual hierarchy that clearly delineates primary engineering narratives, tabular technical metrics, and interactive user controls.

## 3. Constraints
* **Objective Engineering Constraints**:
  * Design tokens must be implemented as zero-runtime CSS custom properties within `src/app/globals.css` to prevent runtime stylesheet serialization penalties.
  * Contrast ratio across all primary text elements must verify >= 4.5:1 (WCAG AA), targeting >= 7:1 (WCAG AAA).
  * Focus states must deploy a visible non-color relying indicator (minimum `2px` solid line with `3px` offset).
* **Subjective Design Preferences**:
  * Visual aesthetic: True neutral dark charcoal background (`#0a0a0c` to `#121214`), restrained neutral whites, thin translucent borders (`1px solid rgba(255, 255, 255, 0.1)`), and zero decorative ambient halos or neon glows.
  * Typography: Primary geometric sans-serif paired strictly with monospace variable font faces for technical metadata and structural code displays.

## 4. Interfaces
* **CSS Custom Property Matrix**: Root-level declarative tokens (`--surface-*`, `--text-*`, `--border-*`, `--font-*`, `--spacing-*`, `--ease`).
* **Typographic Utilities**: Canonical CSS class definitions or native tag mappings governing baseline line-height ratios and font weight scaling.

## 5. Dependencies
* Next.js built-in self-hosting typography system (`next/font/google` or `next/font/local`).
* Native browser CSS variable cascading engines.

## 6. Architecture Decisions
* Banning runtime `styled-components` in favor of zero-runtime CSS architecture (See `adr/0002-css-architecture.md`).
* Establishing single-theme high-contrast dark-mode representation as the primary canonical presentation (See `rfc/0002-design-philosophy.md`).

## 7. Risks
* Inconsistent token usage across individual components can cause visual drift, eroding the appearance of intentional engineering discipline.
* Failure to optimize variable font subsets via `next/font` can induce network transmission overhead and Layout Shift regressions.

## 8. Future Evolution
* Formalization of enforceable linters (`stylelint` token checking) to reject arbitrary color hex codes or hardcoded pixel dimensions within component styles.

## 9. References
* `docs/CONSTITUTION.md`
* `docs/rfc/0002-design-philosophy.md`
* `docs/standards/design-standards.md`
