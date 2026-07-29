# Accessibility Architecture

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Treat accessibility as a foundational system architecture, rather than an afterthought compliance checklist applied to individual pages.

---

## Global Responsibilities
* **`<html>` lang attribute**: The root layout MUST enforce `<html lang="en">` (or the appropriate localized string).
* **Skip Links**: The `RootLayout` MUST inject a `<a href="#main" class="skip-link">Skip to main content</a>` as the absolute first node in the DOM tree, visually hidden until focused.

## Landmarks & Routing
* Every page MUST enforce semantic landmarks: `<header>`, `<main id="main">`, and `<footer>`.
* **Focus Management**: Client-side routing in React (Next.js `<Link>`) can break screen reader focus. We MUST ensure that route transitions logically reset focus (typically handled inherently by the Next.js App Router, but requires vigilant testing on complex navigations).

## Heading Hierarchy
* The system enforces strict heading hierarchy. A page MUST only have one `<h1>`. 
* Component compositions (e.g., `ProjectPreview`) MUST accept a dynamic heading level prop or enforce an `<h3>` to ensure they integrate safely into a parent's `<h2>` section. Skipping heading levels (e.g., H2 to H4) is structurally invalid.

## Component Responsibilities
* **Links**: MUST differentiate themselves from surrounding text without relying solely on color (e.g., an underline). Focus states MUST utilize high-contrast outlines (`2px` solid, minimum `2px` offset).
* **Buttons**: Interactive elements that do not route to a new URL MUST use `<button type="button">`. They MUST support space/enter key activation natively.
* **Images / Figures**: The Content Parser MUST enforce that every Markdown image block includes a valid `alt` string.

## Forms & Inputs
* Though rare in this portfolio (potentially used on a Contact form), all `<input>` elements MUST have an associated `<label>`. Placeholder text MUST NOT replace labels.

## Testing Philosophy
* Accessibility is validated continuously in CI via `axe-core` and verified manually via keyboard-only traversal prior to any merge into `main`.
