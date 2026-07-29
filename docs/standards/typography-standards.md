# Typography Standards

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Establish strict parameters for typeface selection, self-hosted asset delivery, typographic weight variations, line-height geometry, and semantic tag mapping to guarantee immaculate document legibility, editorial authority, and zero layout shifting.

## 2. Objective Engineering Constraints
* **Self-Hosted Delivery & Zero CLS Guarantee**:
  * Typefaces must be loaded, compressed, and subsetted natively via the Next.js `next/font` optimization pipeline within `src/app/layout.tsx`. Linking to external third-party stylesheet font servers (e.g., Google Fonts HTML `<link>` tags) or running runtime typeface fetch scripts is strictly barred.
  * Ensure automatic declaration of fallback font matching metrics (`size-adjust`) to guarantee that First Contentful Paint (FCP) font hydration generates an exact `0.00` Cumulative Layout Shift (CLS).
* **Strict Dual-Font Scheme**:
  * The codebase is restricted to exactly two canonical font families: one primary sans-serif face for biographical and structural prose, and one monospace face reserved strictly for technical specifications, data structures, code blocks, and system metadata.
  * Introducing tertiary font families, decorative handwritten script fonts, or excessive static weight files (> 3 font weight cuts per family if not leveraging variable fonts) is prohibited to preserve initial HTML/CSS bandwidth limits (< 50 KB).
* **Semantic Header & Scale Rigor**:
  * Headings (`<h1>` through `<h6>`) must map to exact scalable mathematical type increments defined via root CSS custom property tokens (`--font-size-h1` through `--font-size-body`).
  * Line height (leading) ratios must maintain strict readability mathematics: tight line-heights (`1.1` to `1.25`) for large display headlines, and generous line-heights (`1.6` to `1.8`) for narrative paragraphs and technical reading copy.

## 3. Subjective Design Preferences & Editorial Elegance
* **Typeface Selection Rationale**:
  * Primary Prose Font: `Manrope` (or equivalent high-legibility geometric sans font) selected for its sharp letter forms, neutral authoritative cadence, and clean structural reading performance across high-resolution screens.
  * Technical Monospace Font: `IBM Plex Mono` selected for its precise industrial design aesthetic, unmistakable character disambiguation (`0` vs `O`, `1` vs `l` vs `I`), and immediate association with rigorous engineering tooling.
* **Typographic Restraint**:
  * Avoid gratuitous font weight mixing or rainbow text coloring within single sentences. Utilize bold weights (`font-weight: 600` or `700`) sparingly to highlight core architectural achievements, security protocols, or systems metrics within paragraph bodies.
  * Maintain clean left-aligned text alignment across editorial reading columns; avoid justified text blocks that create unreadable spacing rivers.

## 4. Acceptance Criteria
* Zero Cumulative Layout Shift (`CLS === 0.00`) confirmed during typography loading in Chrome DevTools Lighthouse audit tools.
* Verified absence of third-party network requests targeting external font delivery domains during production page compilation and loading.
