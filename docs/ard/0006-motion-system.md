# ARD-0006: Motion System

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines programmatic rules, duration parameters, easing curves, hardware acceleration targets, and absolute accessibility override requirements governing all transition and animation behavior across the application.

## 2. Responsibilities
* Restrict interactive animation strictly to functional user orientation, focus ring transitions, state feedback, and layout stabilization.
* Guarantee that motion dynamics emulate professional operating systems and developer utilities (e.g., Apple macOS, Raycast, Linear) rather than promotional marketing landing pages.
* Enforce hardware-accelerated rendering transformations to prevent main-thread layout thrashing and animation jank.
* Guarantee zero-duration transitions under operating system reduced-motion configurations.

## 3. Constraints
* **Objective Engineering Constraints**:
  * Transitions must restrict animated properties exclusively to hardware-accelerated composite attributes (`transform`, `opacity`, `outline-offset`, `background-color`). Never animate layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`).
  * Maximum animation duration limit: `< 250ms` for component state changes; `< 150ms` for interactive hover/focus states.
  * Global mandatory media query inclusion: `@media (prefers-reduced-motion: reduce)` must reset all transition durations and animation iterations to zero or instantaneous values.
  * Heavy runtime JavaScript animation physics engines (e.g., Framer Motion, GSAP, Anime.js) are prohibited from the foundational frontend bundle architecture.
* **Subjective Design Preferences**:
  * Transition physics: Snappy, deterministic easing curves (`cubic-bezier(0.16, 1, 0.3, 1)` or linear stepping). No spring bounce oscillations or floating idle loops.

## 4. Interfaces
* **CSS Easing Tokens**: Canonical variable definitions for timing (`--ease-fast`, `--ease-normal`, `--duration-inst`, `--duration-standard`).
* **Motion Override Rule**: Universal root selector override within global styling declarations.

## 5. Dependencies
* Native Browser CSS3 Transition and Animation execution pipelines.
* Operating system media querying (`prefers-reduced-motion`).

## 6. Architecture Decisions
* Using pure zero-runtime CSS animations over JavaScript animation execution engines (See `adr/0003-animation-strategy.md`).
* Prohibiting speculative decorative animations to enforce authoritative engineering restraint (See `rfc/0002-design-philosophy.md`).

## 7. Risks
* Unmonitored introduction of transition properties on wildcard selectors (`transition: all 0.2s`) can trigger massive layout repaints and severely erode interaction framerates on lower-end devices.
* Omission of `prefers-reduced-motion` compliance on new visual components violates WCAG compliance guidelines and user accessibility rights.

## 8. Future Evolution
* Utilization of native browser View Transitions API (CSS-only) for instantaneous, accessible cross-document view switches once baseline cross-browser support becomes universally standard without JS polyfills.

## 9. References
* `docs/CONSTITUTION.md`
* `docs/rfc/0002-design-philosophy.md`
* `docs/adr/0003-animation-strategy.md`
* `docs/standards/motion-standards.md`
