# RFC-0005: Performance Budget

**Status**: Draft  
**Author**: Principal Frontend Architect  
**Created Date**: 28-07-2026  

## 1. Purpose
Establish hard quantitative thresholds for network bandwidth consumption, asset size limits, main-thread execution execution, and Core Web Vitals (CWV) benchmarks to ensure instantaneous page rendering and respect for end-user hardware resources.

## 2. Context
Modern web portfolios often fall victim to bloat through unoptimized hero media, massive JavaScript styling runtime bundles, and heavy fonts. As a developer emphasizing systems engineering, performance must be treated as a non-negotiable architectural constraint. Every millisecond of delay and every extra kilobyte of JavaScript must be justified.

## 3. Goals
* Guarantee Near-Instantaneous First Contentful Paint (FCP) and Largest Contentful Paint (LCP) across both broadband and constrained mobile 4G network profiles.
* Achieve absolute Layout Stability (Cumulative Layout Shift < 0.01) via static dimension reservation and self-hosted variable font loading (`next/font`).
* Confine overall client-side JavaScript execution payload to ultra-lean thresholds by leveraging zero-runtime styles and Server Components.

## 4. Non-Goals
* Implementing aggressive third-party caching service architectures (e.g., complex edge worker CDN rewrites) that add deployment orchestration overhead for simple static pages.
* Micro-optimizing nanosecond JavaScript algorithms that do not sit on critical UI rendering or network fetching paths.

## 5. Requirements

### Objective Engineering Constraints
* **Core Web Vitals Thresholds (Mobile & Desktop)**:
  * Largest Contentful Paint (LCP): `< 1.2 seconds` (Target `< 800ms`).
  * Cumulative Layout Shift (CLS): `0.00` (Max allowable: `0.01`).
  * Interaction to Next Paint (INP): `< 80ms`.
* **Asset & Bundle Budgets**:
  * Initial HTML/CSS transfer size per static route: `< 50 KB` compressed.
  * Total client JavaScript bundle execution payload: `< 75 KB` gzipped.
  * Image assets: Must utilize modern formats (`WebP` / `AVIF`), enforce lazy loading on non-hero graphics, and explicitly state `width` and `height` coordinates via `next/image`.

### Subjective Design Preferences
* Prefer pure CSS animations and transformations over JavaScript animation calculation libraries (e.g., avoid Framer Motion or GSAP unless executing complex interactive visualizations).
* Use single variable-weight font files rather than loading separate typographic font cuts for each font weight.

## 6. Trade-offs
* **Static Server Rendering vs. Client Hydration Flexibility**: By forcing zero-runtime styling and minimal client component boundaries to achieve a `<75KB` JavaScript budget, we forfeit dynamic client-side widget capabilities and runtime CSS manipulation. This tradeoff is overwhelmingly favorable for a read-heavy professional portfolio.

## 7. Open Questions
1. Should production CI automated builds incorporate Lighthouse CI or bundle-analyzer checking to abort pull requests that breach the 75 KB JavaScript payload boundary?
2. What optimization parameters should be applied to project architecture diagrams and hero headshots to guarantee instant image parsing?

## 8. Acceptance Criteria
* Verified production build output logs demonstrating JavaScript bundle payloads beneath target limitations.
* ZERO reported layout shift occurrences during device emulation verification tests in Chrome DevTools.
* Successful rendering optimization verified across Lighthouse mobile auditing profiles (Targeting 100/100 performance index).

## 9. Future Work
* Integration of automated bundle tracking scripts into `package.json` build operations in Milestone 5.
* Evaluation of network caching profiles on Vercel deployment targets.

## 10. References
* `docs/CONSTITUTION.md`
* `docs/standards/performance-standards.md`
* `docs/ard/0004-frontend-architecture.md`
