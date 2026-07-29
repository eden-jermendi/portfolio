# ARD-0002: Information Architecture

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines the structural routing hierarchy, navigational semantics, internal deep-link boundaries, and URL design governing how engineering content, professional background, and project case studies are accessed.

## 2. Responsibilities
* Maintain clear, SEO-friendly, deterministic URL routes corresponding directly to logical document hierarchies.
* Eliminate JavaScript-dependent navigational modal constructs that trap biographical or technical narrative content off-link.
* Ensure immediate discovery of professional contact parameters, engineering repositories, and technical proof-points within minimal click depths (<= 1 click from root).

## 3. Constraints
* **Objective Engineering Constraints**:
  * Every distinct engineering project case study must occupy an indexable, canonically stable URL route (`/projects/[slug]`).
  * Intra-page navigational shortcuts must implement standard `#` target identifiers linked to accessible semantic landmark IDs (`#projects`, `#background`, `#contact`, `#main-content`).
  * Modal overlays for fundamental page sections (e.g., About Me) are strictly prohibited due to URL state obfuscation and focus management fragility.
* **Subjective Design Preferences**:
  * Emphasize a flattened root presentation (`/`) containing high-level engineering abstracts, avoiding fragmented micro-pages that force unnecessary context switching.

## 4. Interfaces
* **Top Navigation Bar**: Static anchor references jumping directly to primary sectional IDs or dedicated case study overview routes.
* **Skip-Link Primitive**: Hidden-until-focused anchor element deployed as the primary child of the root layout, linking directly to `#main-content`.

## 5. Dependencies
* Next.js App Router file-system directory router (`src/app/page.tsx`, `src/app/projects/[slug]/page.tsx`).
* Native browser HTML5 history and URL hash navigation APIs.

## 6. Architecture Decisions
* Replacing reactive state-based modal rendering (`<AboutModal />`) with an integrated Background root section and dedicated static case study page routes (See `rfc/0001-portfolio-rewrite.md`).
* Selecting clear semantic anchor link structures over custom client-side router transitions.

## 7. Risks
* Deeply nested dynamic route structures can complicate breadcrumb navigation and orientation on small screen sizes.
* Failing to sync intra-page scroll behavior with header offset sizing can result in targeted section headings becoming occluded beneath sticky navigation headers.

## 8. Future Evolution
* Expansion into domain-specific knowledge directories (e.g., `/notes` or `/security-labs`) as backend and OSINT engineering portfolio research expands.

## 9. References
* `docs/CONSTITUTION.md`
* `docs/rfc/0007-content-strategy.md`
* `docs/adr/0001-nextjs-app-router.md`
