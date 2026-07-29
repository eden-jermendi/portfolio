# RFC-0000: Project Charter

**Status**: Draft  
**Author**: Engineering Leadership  
**Created Date**: 28-07-2026  

## 1. Purpose
Establish formal executive authorization, operational context, governance structures, and core architectural outcomes for rebuilding the professional engineering portfolio repository.

## 2. Context
The existing repository consists of an orphaned FreeCodeCamp root layout, an outdated client-side SPA built with Vite/React, and an inactive Express server stub. This existing structure projects full-stack bootcamp paradigms rather than systems-level maturity. As the repository owner transitions into Backend Engineering, Application Security, OSINT, Accessibility, and Systems Development, an architectural and aesthetic reset is imperative.

## 3. Goals
* Formalize project governance via immutable documentation in `docs/`.
* Reconstruct the portfolio utilizing Next.js App Router as a server-first, low-runtime system.
* Implement static project case studies demonstrating engineering rigor, security modeling, and infrastructure decisions.
* Achieve complete WCAG 2.2 AA compliance with targeted AAA typographic contrast.

## 4. Non-Goals
* Constructing complex custom content management systems (CMS) or reactive relational database engines solely to serve static case study copy.
* Implementing decorative front-end UI showcases, floating interactive modals, or third-party CAPTCHA API forms.
* Expanding the application scope into experimental consumer web application domain features.

## 5. Requirements

### Objective Engineering Constraints
* Build target: Next.js App Router static/hybrid rendering architecture.
* Bundle economy: Zero CSS-in-JS runtime styling overhead; complete elimination of unnecessary client-side React wrappers.
* Type safety: Strict TypeScript configuration with zero diagnostic exemptions.
* Semantic markup: Pure HTML5 sectioning elements without extraneous wrapping div containers.

### Subjective Design Preferences
* Aesthetic profile: Monochromatic dark-mode first canvas (`#0a0a0c` to `#121214`), sharp contrast typography, zero gradient glows or artificial shadows.
* Typography pairing: High-legibility modern sans-serif headings matched with strict monospace code/metadata representations.

## 6. Trade-offs
* **Static Configuration vs. CMS Dynamic Updating**: Choosing static typescript/MDX file compilation eliminates dynamic administrative updating without redeployment, but buys infinite scaling, deterministic build validation, and zero runtime security exposure.
* **Server-First Navigation vs. Client-Side Transitions**: Sacrifices smooth SPA cross-fade page animations in favor of robust, fast native browser document rendering and impeccable deep-link integrity.

## 7. Open Questions
1. Should project case studies reside as strictly structured TypeScript modules (`src/content/*.ts`) or natively parsed MDX documents within App Router file routes?
2. Does the site require a companion dark/light manual toggle via local storage, or should it rely strictly on dark-mode as the canonical system representation?

## 8. Acceptance Criteria
* Approval and merging of `docs/CONSTITUTION.md` and initial RFCs/ARDs.
* Consensus on the phased execution milestones defined in `docs/roadmap/`.

## 9. Future Work
* Execution of Phase 1 foundation setup (Milestone 1).
* Decommissioning legacy files located in `client/` and `api/`.

## 10. References
* `docs/CONSTITUTION.md`
* `docs/CONTRIBUTING.md`
