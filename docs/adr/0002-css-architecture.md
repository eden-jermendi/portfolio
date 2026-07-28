# ADR-0002: Zero-Runtime CSS Architecture

**Status**: Proposed  
**Date**: 28-07-2026  

## 1. Status
Proposed

## 2. Context
The legacy frontend application (`client/`) relied on runtime `styled-components` (`^6.4.1`) for component styling. While runtime CSS-in-JS libraries offer developer ergonomic benefits in pure client Single Page Applications, they introduce distinct structural challenges within a server-first Next.js App Router environment: they inject client styling engines into JavaScript bundle payloads, necessitate specialized client rendering style registries during Server-Side Rendering (SSR), and add serialization parsing overhead during First Contentful Paint (FCP). 

However, architectural discipline requires that we evaluate styling trade-offs objectively rather than dogmatically. We must determine whether native CSS Custom Properties, modular CSS scoping (`*.module.css`), or alternative compiled zero-runtime utility toolchains provide the optimum balance of maintainability, typographic precision, developer ergonomics, and bundle efficiency for our dark-mode portfolio design foundations.

## 3. Decision (Proposed)
We propose adopting a zero-runtime styling architecture driven by native CSS Custom Properties (design tokens declared in `src/app/globals.css`) paired with standardized CSS Modules (`*.module.css`) for localized component scoping. Under this proposal, we avoid installing runtime CSS-in-JS libraries or bloated utility frameworks unless empirical build profiling proves that native styling mechanics fail to accommodate necessary responsive design complexity.

## 4. Consequences
* **Positive Engineering Consequences**:
  * Absolute zero-runtime JavaScript overhead for styling parsing and calculations, directly preserving our `< 60 KB` target client bundle budget.
  * Native compatibility with Next.js React Server Components and streaming document rendering without requiring customized browser style registry wrapping layers.
  * Deterministic layout stability and zero CSS parsing latency, as styles are evaluated directly by browser rendering pipelines prior to script hydration.
* **Negative Trade-offs and Limitations**:
  * Forfeits the ability to interpolate complex dynamic JavaScript logic or state objects directly into CSS template literals at runtime.
  * Demands diligent discipline in organizing class selectors and stylesheet scoping rules to avoid specificity collisions or orphaned style declarations over time.
  * Requires explicit manual management of responsive media query breakpoints without programmatic theme abstraction APIs.

## 5. Alternatives Considered
* **Retaining `styled-components` with Next.js Client Style Registry Provider**: Retain current runtime CSS-in-JS syntax and wrap the App Router root layout in a `"use client"` style registry provider. *Reason for Current Deferral*: Incurs avoidable FCP parsing overhead and bundle weight penalties without delivering required structural benefits for static editorial reading routes.
* **Adopting Utility-First Frameworks (Tailwind CSS)**: Utilize utility class compilers to assemble page layouts. *Reason for Current Deferral*: Adds compiler configuration dependencies and class-list density to semantic HTML layouts; our editorial dark-mode aesthetic requires precise, centralized design custom property tokens with minimal DOM class noise.
* **Adopting Static Build CSS-in-JS (Vanilla Extract / Linaria)**: Execute CSS-in-JS styling at build compile time. *Reason for Current Deferral*: Introduces advanced bundler configuration overhead and compiler abstraction that is disproportionate to the minimal scale of a personal software engineering portfolio.

## 6. Open Uncertainty & Verification Plan
This architectural decision remains `Proposed` pending Phase 1 Design Foundation exercises. Final sign-off will occur after evaluating the draft Design Token matrix against responsive vertical spacing and typographical hierarchy requirements during initial layout prototyping.
