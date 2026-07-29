# ADR-0009: Verification and Testing Strategy

**Status**: Proposed  
**Date**: 28-07-2026  

## 1. Status
Proposed

## 2. Context
Quality assurance in enterprise software organizations relies on multi-layered testing strategies: static syntax linters, compile-time type validation, localized unit test harnesses, mocking integration layers, and automated end-to-end browser regression toolchains (such as Jest, Vitest, Playwright, or Cypress). While exhaustive test coverage is critical for complex distributed enterprise systems and state-heavy reactive dashboards, engineering restraint requires tailoring verification rigor to the structural nature of the specific repository under construction.

A static-dominant engineering portfolio executing zero-runtime CSS design tokens and immutable server rendering exhibits distinct software error profiles compared to interactive state machines. Installing heavy browser end-to-end regression frameworks solely to check static document hyperlinks can add hundreds of megabytes of binary dependencies, inflate CI build durations, and generate maintenance friction without catching meaningful engineering defects that static typechecking, syntax linters, and systematic accessibility diagnostic tools already illuminate. We must determine the simplest, most defensible quality assurance model for this codebase.

## 3. Decision (Proposed)
We propose establishing a disciplined Static & Structural Verification architecture as our primary quality gating mechanism for early migration milestones (Phase 1 through Phase 5). Under this proposal, repository quality is validated through three sequential automated gates executed prior to every merge:
1. **Strict Compile-Time Verification**: Executing `npm run typecheck` (`tsc --noEmit`) under absolute strict TypeScript rules to guarantee data schema compliance and interface immutability.
2. **Static Code & Structural Analysis**: Executing `npm run lint` via strict ESLint rules targeting syntax hygiene, server component boundary adherence, and semantic HTML structure.
3. **Empirical Accessibility & Performance Diagnostics**: Systematically executing Chrome DevTools MCP scans (`a11y-debugging`), verifying keyboard navigation sequences, checking contrast ratios (>= 4.5:1), and validating reduced-motion CSS resets.

We propose deferring the integration of heavy test runners (e.g., Vitest, Playwright) until future evolution milestones (Phase 6+) when interactive backend Application Security utilities, OSINT diagnostic tools, or real-time API request inspectors are added to the application schema.

## 4. Consequences
* **Positive Engineering Consequences**:
  * Maintains an ultra-lean workspace dependency footprint, avoiding bloated local environment binaries and complex mock server setups.
  * Rapid continuous integration feedback: syntax, typecheck, and accessibility compile logs complete within seconds during local development and CI PR validation.
  * Direct alignment with `engineering-taste.md` principles: test effort focuses entirely on verifiable structural type integrity, WCAG compliance, and real-world browser rendering performance.
* **Negative Trade-offs and Limitations**:
  * Absence of automated UI browser snapshot scripts means subtle optical stylesheet alignment shifts or broken external Hyperlink URLs must be detected during manual staging link inspections.
  * Lacks automated regression verification for dynamic interactive routing behaviors should complex client state components be introduced later.

## 5. Alternatives Considered
* **Immediate Mandatory Integration of Playwright E2E Suites**: Require end-to-end browser automation scripts to test homepage rendering and link clicking for Milestone 1. *Reason for Current Deferral*: Disproportionate engineering complexity and installation dependency overhead for simple static read-only document browsing.
* **Adopting Snapshot Testing via React Testing Library & Jest**: Generate and compare rendered static HTML strings for Server Components. *Reason for Current Deferral*: Snapshot testing on editorial text-heavy portfolios creates frequent noisy false-positive failures during routine prose edits without proving actual architectural reliability.

## 6. Open Uncertainty & Verification Plan
This testing architecture remains `Proposed`. As we prepare our Phase 1 Design Foundation and component inventory, we will continuously evaluate whether static checking and automated accessibility scanning provide adequate quality coverage, or whether lightweight unit testing harnesses are needed for schema parsing routines.
