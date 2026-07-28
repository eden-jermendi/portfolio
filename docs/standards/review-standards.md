# Review Standards and Scorecards

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Provide an objective, standardized evaluation checklist and scoring protocol to guide engineering peer reviews, prevent unapproved architectural scope creep, and ensure every merged pull request strictly adheres to the project constitution.

## 2. Objective Engineering Review Scorecard
Reviewers are instructed to evaluate pull request submissions against the following mandatory verification matrix. Failing any single objective check condition mandates immediate rejection and remediation:

| Review Category | Mandatory Check Criterion | Rejection Trigger / Failure Condition | Verified (Yes/No) |
| :--- | :--- | :--- | :--- |
| **1. Architecture & Scope** | Does work belong strictly to the active approved Roadmap Milestone? | Diff introduces out-of-scope UI experiments, unapproved refactors, or feature creep. | `[ ]` |
| **2. Server Boundaries** | Are Server Components preserved as default without unnecessary `"use client"`? | `"use client"` is injected into layouts, pages, or typographic wrappers without browser DOM justification. | `[ ]` |
| **3. Type Rigor** | Are all interfaces strictly typed under TypeScript without type suppression? | Presence of `any`, untyped `unknown` casts, or `@ts-ignore` / `@ts-expect-error` comments. | `[ ]` |
| **4. Zero-Runtime CSS** | Do stylesheets execute cleanly via CSS Custom Properties / Modules? | Diff imports runtime CSS-in-JS packages (`styled-components`) or hardcodes random HEX color tokens in components. | `[ ]` |
| **5. Accessibility (WCAG)** | Are semantic landmarks present and interactive controls displaying visible focus? | Headings skip numerical sequence (`h1`->`h3`); interactive outlines suppressed (`outline: none`); contrast < 4.5:1. | `[ ]` |
| **6. Reduced Motion** | Do animations completely reset under `@media (prefers-reduced-motion: reduce)`? | Missing reduced-motion override rules on newly added CSS transitions or animations. | `[ ]` |
| **7. Performance Budget** | Is JavaScript bundle size under budget and images optimized? | Total JS bundle execution payload > 75 KB gzipped; images lack explicit width/height parameters. | `[ ]` |
| **8. Content & Copy Truth** | Is editorial copy concise, evidence-based, and free of AI tropes? | Presence of AI marketing buzzwords ("crafting digital experiences"), exaggerated metrics, or conversational filler. | `[ ]` |
| **9. Build Integrity** | Do compilation and analysis pipelines terminate cleanly without warnings? | Missing terminal validation logs proving `typecheck`, `lint`, and `build` success. | `[ ]` |

## 3. Subjective Design Review & Taste Assessment
In addition to technical verification, reviewers must exercise principled engineering judgement regarding general interface design taste:
* **Visual Quietness**: Does the UI communicate quiet confidence, precision, and maturity? Reject interfaces that feel visually cluttered or noisy.
* **Vertical Rhythm & Whitespace**: Ensure section spacing follows clean tabular line multiples rather than decorative graphical card containers.

## 4. Acceptance Criteria
* Formal integration and citation of this verification scorecard across all milestone PR approval reviews.
* Zero pull requests merged into `main` without documented compliance across all nine objective checklist gates.
