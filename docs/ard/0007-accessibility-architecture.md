# ARD-0007: Accessibility Architecture

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines mandatory WCAG conformance targets, semantic document structure rules, keyboard navigation mechanics, visible focus constraints, and diagnostic validation workflows across the software portfolio.

## 2. Responsibilities
* Ensure unconditional compliance with Web Content Accessibility Guidelines (WCAG) 2.2 AA standards across all public routes, targeting AAA contrast benchmarks for core technical reading material.
* Maintain predictable, unbroken keyboard navigation sequencing without reliance on JavaScript modal focus trapping or aria-hidden obfuscation.
* Ensure clear semantic presentation for assistive technologies (screen readers, text-to-speech engines) through strict native HTML5 landmark tagging.

## 3. Constraints
* **Objective Engineering Constraints**:
  * Document outlines must maintain strict hierarchical heading order (`<h1>` followed sequentially by `<h2>`, `<h3>`; skipping levels is forbidden).
  * Exactly one primary `<h1>` element must exist per canonical page route.
  * Every clickable primitive (buttons, anchors, inputs) must display a non-color-reliant focus indicator outline (minimum `2px` solid contrasting border with outline offset) when activated via keyboard navigation.
  * Minimum color contrast ratios:
    * Body and paragraph reading text: `>= 4.5:1` against adjacent canvas (Target: `>= 7:1`).
    * Large headings and interactive button boundaries: `>= 3:1`.
  * Interactive controls must use native elements (`<button>` for actions, `<a>` for navigational URLs); attaching click handlers to static `<div>` or `<span>` elements is strictly prohibited.
  * A working skip-to-content anchor (`<a href="#main-content">`) must present as the initial tabbable focus target in the document body.

## 4. Interfaces
* **Assistive Tech Landmarks**: Strict structural HTML tags (`<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, `<footer>`).
* **ARIA Fallback Attributes**: Explicit labeling specifications (`aria-label`, `aria-labelledby`, `aria-describedby`) utilized exclusively when visual labels cannot be displayed directly within UI layouts.

## 5. Dependencies
* Native Browser Accessibility Tree parsing algorithms.
* W3C HTML5 semantic parsing specification.

## 6. Architecture Decisions
* Preferring native semantic HTML structures over custom ARIA interaction widget constructs (See `rfc/0004-engineering-principles.md`).
* Removing floating modal dialogs to eliminate fragile focus trapping and aria-hidden layout fragmentation (See `adr/0001-nextjs-app-router.md`).

## 7. Risks
* Introducing custom interactive React client widgets without full keyboard event mapping (`onKeyDown` Enter/Spacebar equivalence) instantly breaks keyboard usability.
* Visual regressions during CSS design token adjustments can easily push text foreground contrasts beneath the mandatory 4.5:1 AA ratio threshold.

## 8. Future Evolution
* Automated CI pull-request gating utilizing headless accessibility scanning engines (e.g., `pa11y` or `axe-core`) to reject non-compliant structural commits before merge.

## 9. References
* `docs/CONSTITUTION.md`
* `docs/rfc/0006-definition-of-done.md`
* `docs/standards/accessibility-standards.md`
