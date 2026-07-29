# Animation Architecture

**Status**: Draft (Pending Review)
**Phase**: Pre-Phase 6
**Dependency**: Requires `0007-content-migration-plan.md` to be completed first.

## Objective
Implement constrained, highly deliberate, and tasteful live animations that showcase an engineering personality. The motion design must elevate the user experience without resorting to generic templates, excessive flashiness, or heavy JavaScript bundles that compromise our zero-runtime ethos. 1-2 dependencies and/or animation librararies/component libraries can be installed for this step only if necessary. If at all possible, try to achieve the same effect using only built in Next.js libraries and CSS, or by installing dependencies that strictly enforce all of the principles and constraints below.

## Philosophy & Constraints
- **Performance**: Animations must be hardware-accelerated (`transform`, `opacity`).
- **Accessibility**: All motion must respect the `prefers-reduced-motion` media query, instantly degrading to static states.
- **Semantic Tone**: The aesthetic should communicate "Full-stack Developer transitioning into Systems Engineering"—monochromatic, structural, and precise.

---

## Phase 1: Typographic Choreography (Load Sequence)

The initial load of the Homepage will feature a staggered, directional entrance for the typography to guide the user's eye.

### 1. Nameplate & Subtitle (H1 & Role)
- **Animation**: Fade in while sliding horizontally from the right.
- **CSS Properties**: `opacity: 0; transform: translateX(20px);` transitioning to `opacity: 1; transform: translateX(0);`.
- **Timing**: `duration: 600ms`, `easing: cubic-bezier(0.16, 1, 0.3, 1)` (snappy OS-level ease).
- **Execution**: Pure CSS `@keyframes` triggered on initial mount.

### 2. Executive Summary (The "Wee Blurb")
- **Animation**: Fade in with a slight vertical or horizontal drift.
- **Timing**: Delayed by `~300ms` relative to the Nameplate, allowing the identity to anchor before the narrative appears.
- **Execution**: Pure CSS `@keyframes` with `animation-delay`.

---

## Phase 2: Live Background Engineering Canvas

To communicate a focus on backend, infrastructure, and systems, we will implement a subtle, live-animated background element behind the hero section.

### Concept: The "Data Flow" Grid
Instead of generic floating particles, we will implement a lightweight, monochromatic simulation of system nodes or data flow.
- **Visuals**: Black-and-white, low opacity (`opacity: 0.05` to `0.1`), sharp geometric lines or a subtle ASCII grid that slowly shifts.
- **Tone**: Academic, precise, infrastructural. 

### Technical Implementation
- **Element**: A single `<canvas>` element positioned absolutely behind the Hero section (`z-index: -1`).
- **Logic**: A tiny, bespoke JavaScript loop (under 2KB) utilizing `requestAnimationFrame`.
- **Performance Guardrails**:
  1. **Intersection Observer**: The canvas loop will *immediately pause* when the user scrolls the hero section out of view to save CPU/Battery.
  2. **Reduced Motion**: The canvas will not render or will render a static frame if `prefers-reduced-motion: reduce` is detected.

## Execution Sequence
1. Complete content migration so DOM sizes are final.
2. Author the CSS keyframes in `page.module.css` for the typographic load sequence.
3. Build the `<LiveBackground />` client component (`"use client"`), wrapping the canvas logic in strict performance guardrails.
4. Inject the background into the Hero section and fine-tune opacities for perfect readability contrast.
