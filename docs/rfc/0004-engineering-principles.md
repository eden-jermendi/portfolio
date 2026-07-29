# RFC-0004: Engineering Principles

**Status**: Draft  
**Author**: Principal Software Engineer  
**Created Date**: 28-07-2026  

## 1. Purpose
Define the core software engineering rules, structural validation metrics, and defensive development habits that ensure long-term codebase maintainability, application security, and systems execution predictability.

## 2. Context
As an engineer targeting backend infrastructure, application security, OSINT, and accessibility, the codebase itself serves as the premier engineering deliverable. A visually attractive interface built atop sloppy typescript types, unverified external form submissions, or undocumented side-effects sends a contradictory career signal. Engineering principles must be institutionalized into enforceable continuous integration gates and workflow rules.

## 3. Goals
* Guarantee absolute compile-time safety and reproducible build predictability through strict TypeScript constraints and static verification.
* Institutionalize application security best practices: robust data boundaries, safe external hyperlinking, input validation, and secure Content Security Policies (CSP).
* Maintain disciplined source code hygiene by forbidding dead code, unneeded dependencies, and speculative complexity ("YAGNI").

## 4. Non-Goals
* Incorporating complex enterprise architecture abstractions (such as heavy Dependency Injection containers or elaborate Event Sourcing pipelines) that do not match a static-dominant web architecture.

## 5. Requirements

### Objective Engineering Constraints
* **TypeScript Integrity**: `tsconfig.json` must enforce `"strict": true`, `"noImplicitAny": true`, and `"noUncheckedIndexedAccess": true`.
* **External Link Safety**: Any external anchor element targeting a third-party domain must enforce `rel="noopener noreferrer"` and appropriate target attributes.
* **No Third-Party Form Vulnerabilities**: Deprecate vulnerable client-side CAPTCHA bindings and public unverified form forwarding APIs in favor of deterministic, secure communication mechanisms.
* **Deterministic Build State**: Execution of `npm run build` must succeed deterministically without network calls to unpredictable third-party APIs during static page generation.

### Subjective Design Preferences
* Write explicit, self-documenting identifier naming without abbreviated cryptic acronyms.
* Keep functional logic short, modular, and cleanly decoupled from data representations.

## 6. Trade-offs
* **Strict Type Safety vs. Development Velocity**: Enforcing `"noUncheckedIndexedAccess": true` and forbidding `any` requires explicitly guarding array lookups and typing API structures. This slightly slows initial coding velocity, but entirely prevents runtime `undefined` casting crashes in production.

## 7. Open Questions
1. Should we incorporate an automated vulnerability scanner (e.g., `npm audit` gating or Snyk integration) into the standard CI pull request approval workflow?
2. Do we require custom Content Security Policy (CSP) HTTP headers configured within `vercel.json` or Next.js metadata configurations during Milestone 5?

## 8. Acceptance Criteria
* Verification that `npm run typecheck` succeeds with zero errors across the entire codebase.
* Complete removal of external third-party form ingestion scripts from dependencies.
* Documentation of active security headers and defensive coding standards in active standard files.

## 9. Future Work
* Implementation of stricter ESLint safety plugins (e.g., security and accessibility linters) in Milestone 1.
* Periodic audit of lockfile dependency trees to maintain zero known high-severity vulnerabilities.

## 10. References
* `docs/CONSTITUTION.md`
* `docs/standards/coding-standards.md`
* `docs/ard/0001-overall-system-architecture.md`
