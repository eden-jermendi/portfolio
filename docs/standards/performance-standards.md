# Performance Standards and Empirical Budgets

**Effective Date**: 28-07-2026  
**Status**: Mandatory Living Engineering Standard (Evidence-Driven Governance)  

## 1. Purpose and Evidential Philosophy
In accordance with `CONSTITUTION.md`, performance budgets are not arbitrary guesses or ideologically fixed numbers. They are living, empirical engineering limits established through measurement, diagnostic profiling, and reproducible testing. Budgets must evolve through documented evidence rather than opinion, ensuring application speed scales efficiently with user compute resources and network bandwidth.

## 2. Evidence-Driven Performance Budgets
Every architectural phase and implementation milestone must verify compliance against the following performance matrix. Adjustments to target ceilings require formal documentation in `docs/evidence/` demonstrating legitimate architectural trade-offs.

| Performance Domain / Metric | Current Baseline (Legacy SPA) | Empirical Target Budget | Measurement Method | Verification Tooling | Mandatory Review Cadence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | ~1.6s (estimated under client bundle parse) | **`< 800ms`** (Max Ceiling: `< 1.2s`) | Simulated 4G cellular throttling on mobile viewport (`360x640`) | Chrome DevTools Lighthouse / Web Vitals Trace | Every Milestone PR sign-off |
| **Cumulative Layout Shift (CLS)** | ~0.02 (font swap & image hydration jumps) | **`0.00`** (Zero tolerance for layout shift) | Rendering frame layout stability monitoring | Chrome DevTools Performance Trace & Layout Audits | Every Milestone PR sign-off |
| **Interaction to Next Paint (INP)** | ~110ms (client state reconciliation) | **`< 60ms`** (Max Ceiling: `< 80ms`) | Input event latency tracking during keyboard Tab & link activation | Chrome DevTools Performance CPU 4x Throttle | Phase Transitions & Major Features |
| **Initial JS Execution Bundle** | ~140 KB gzipped (Vite React client tree) | **`< 60 KB`** gzipped per page route (Ceiling: `< 75 KB`) | Production bundle compilation payload reading | `npm run build` static analysis & Next bundle analyzer | Automated on every Git Commit |
| **Initial HTML/CSS Transfer** | ~45 KB (dynamic client stylesheet injected) | **`< 35 KB`** gzipped compressed | HTTP network payload sizing via document load | Chrome DevTools Network Inspector (Disable Cache) | Milestone Architectural Review |

## 3. Engineering Guidelines for Budget Compliance
* **Server-First Boundary Enforcement**: RetAIN structural layout components within React Server Component (RSC) execution boundaries to exclude JSX component code from the browser JavaScript bundle.
* **Image Optimization Geometry**: Every static bitmap or diagram must load via native image optimization utilities (`next/image`) declaring explicit aspect-ratio geometry (`width`, `height` or CSS containment) to eliminate layout shift calculations.
* **Network Protocol Efficiency**: Third-party external analytical network calls, unbundled remote stylesheets, and unnecessary CDN runtime font lookups are strictly prohibited during initial page document parsing.

## 4. Remediation Protocol for Budget Exceedance
If an implementation branch causes any single metric to breach its empirical target budget:
1. The developer must generate a diagnostic compilation log and store it under `docs/evidence/bundles/`.
2. The pull request is automatically blocked from merge until either:
   * Optimization refactoring brings the performance metric back beneath the budget ceiling; or
   * A formal architectural review justifies an evidenced-based adjustment to the target budget via a logged RFC/ADR decision cycle.
