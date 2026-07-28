# RFC-0002: Design Philosophy

**Status**: Draft  
**Author**: Staff Product Designer / Design Systems Engineer  
**Created Date**: 28-07-2026  

## 1. Purpose
Define the visual identity, chromatic scales, typographic rules, and structural aesthetics governing the user interface to ensure the site communicates engineering precision, maturity, and restraint.

## 2. Context
Current industry design trends favor saturated "AI aesthetics" characterized by neon gradients, glowing card borders, blurred glassmorphic overlays, and playful decorative illustrations. While popular in SaaS landing pages, these patterns introduce visual noise and dilute the authoritative precision expected of a systems, application security, and backend engineer. A radical aesthetic realingment is necessary.

## 3. Goals
* Establish a restrained monochromatic dark-mode color system centered on deep neutral charcoal, sharp whites, and subtle grey borders.
* Enforce editorial typography combining high-legibility geometric sans fonts for narratives with technical monospace typography for architecture specs.
* Eliminate visual decoration in favor of structural whitespace, clear baseline grids, and predictable typographic hierarchy.

## 4. Non-Goals
* Creating an expansive multi-theme switcher or complex theme customization widgets.
* Building graphic illustrations, 3D Canvas visualizers, or interactive generative particles.

## 5. Requirements

### Objective Engineering Constraints
* All text-to-background combinations must verify at least 4.5:1 contrast (WCAG AA), aiming for 7:1 (WCAG AAA) for primary reading sections.
* Design token bindings must compile to pure CSS custom properties without JavaScript runtime theme evaluation.
* Focus indicators must remain non-color dependent, applying a minimum `2px` solid contrasting perimeter.

### Subjective Design Preferences
* Background canvas: `#0a0a0c` to `#111114` (true neutral dark charcoal).
* Container boundaries: Delineated via whitespace or ultra-subtle borders (`1px solid rgba(255, 255, 255, 0.1)`) rather than shaded drop-shadows or glow halos.
* Motion profiles: Sharp, functional, and reminiscent of native system utilities (Linear/Raycast aesthetic).

## 6. Trade-offs
* **High Contrast Minimalism vs. Visual Flash**: Forfeiting vibrant color accents and glowing gradients risks looking stark to non-technical users, but significantly reinforces professional credibility among technical engineering leaders and system architects.

## 7. Open Questions
1. Should secondary informational links utilize an underlined typography style by default, or rely on distinct tonal intensity with underline transitions reserved for hover/focus states?
2. Which specific variable font family should be self-hosted via `next/font` for primary editorial reading (`Manrope`, `Inter`, or `Outfit`)?

## 8. Acceptance Criteria
* Documented CSS custom property tokens integrated into `src/app/globals.css`.
* Complete eradication of legacy drop shadows (`--shadow-hero`, `--shadow-card`) and blurred backdrop overlays from styling stylesheets.
* Verification of WCAG AA contrast compliance across simulated display devices and contrast debuggers.

## 9. Future Work
* Integration of design standards into automated CSS linting regulations.
* Construction of reusable typographic primitives in Milestone 2.

## 10. References
* `docs/CONSTITUTION.md`
* `docs/standards/design-standards.md`
* `docs/ard/0003-design-system.md`
