# Accessibility Standards (WCAG 2.2 AA/AAA)

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Establish quantitative, measurable verification thresholds for Web Content Accessibility Guidelines (WCAG) 2.2 AA and targeted AAA compliance, guaranteeing an uncompromisingly inclusive user experience across all devices and assistive screen reader technologies.

## 2. Objective Engineering Constraints
* **Typographic & UI Color Contrast**:
  * Body prose, narrative paragraphs, and functional metadata text must achieve a minimum contrast ratio of `>= 4.5:1` against adjacent background canvas tones (WCAG AA). Target ratio for primary technical narratives: `>= 7:1` (WCAG AAA).
  * Large typographic headings (`>= 24px` normal weight or `>= 18.5px` bold weight), interactive button perimeters, and graphical icon boundaries must verify minimum contrast ratio of `>= 3:1` against adjacent surfaces.
  * Automated contrast testing via Chrome DevTools or accessibility linters must report zero contrast deficiency flags across dark mode palettes.
* **Keyboard Navigation & Visible Focus Mastery**:
  * Every interactive UI element (`<button>`, `<a>`, `<input>`, `<textarea>`, `[tabindex="0"]`) must present a visible, prominent, non-color-reliant focus indicator outline when focused via keyboard navigation (`Tab`, `Shift+Tab`).
  * Minimum focus indicator specification: `2px solid var(--accent-primary)` with a clear visual offset (`outline-offset: 3px`). Suppressing outlines (`outline: none`, `outline: 0`) without applying an equivalent or superior visible replacement outline is strictly prohibited.
  * Keyboard focus traversal must move logically from top to bottom, left to right, matching natural reading document hierarchy without encountering arbitrary traps or hidden DOM dead-ends.
* **Semantic Document Outlines & Landmarks**:
  * Each canonical page route must implement exactly one primary `<h1>` heading element defining the overarching page topic.
  * Headings (`<h1>` through `<h6>`) must descend strictly in sequential numerical hierarchy; skipping intermediate heading levels (e.g., jumping directly from an `<h2>` section title to an `<h4>` card subtitle) is forbidden.
  * Layout structures must employ accurate native HTML5 landmark elements: navigation controls in `<nav>`, introductory branding in `<header>`, primary content inside `<main id="main-content">`, standalone case studies in `<article>`, and supplemental groupings in `<section>`.
* **Skip-to-Content Link Mechanics**:
  * A functional skip link element (`<a href="#main-content" class="skip-link">Skip to main content</a>`) must exist as the primary interactive child element of the document root body. It must remain visually occluded off-screen during casual scrolling and reveal immediately at high contrast in the upper viewing viewport upon receiving keyboard Tab focus.

## 3. Subjective Design Preferences
* Prefer native HTML interactivity over complex ARIA widget retrofitting; simple well-labeled anchor elements and semantic buttons inherently communicate intent without requiring dense ARIA role metadata.
* Keep alternative text descriptions (`alt="..."`) concise, factual, and informative; never prepend descriptive redundancy such as "Image of..." or "Picture showing...".

## 4. Acceptance Criteria
* Zero accessibility violation reports upon running Chrome DevTools MCP Accessibility diagnostics (`a11y-debugging`) and W3C structural validation engines.
* Proven seamless keyboard-only navigation verification across root landing structures and detailed `/projects/[slug]` case study views.
