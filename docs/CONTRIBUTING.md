# Contributing Standards and Governance

**Effective Date**: 28-07-2026  
**Status**: Enforceable Work Workflow  

## 1. Branch Strategy
This repository operates under strict branch discipline:
* `main`: The stable, production-ready trunk. All code merged into `main` must pass automated builds, linting, and type verification. Direct commits to `main` are restricted to administrative documentation or emergency hotfixes approved by the repository owner.
* `feat/*`, `fix/*`, `docs/*`, `arch/*`, `refactor/*`: Short-lived working branches derived directly from `main`. Branches must focus on exactly one approved bounded task or RFC milestone.

## 2. Commit Conventions
Commit messages must comply with strict Conventional Commit specifications to ensure traceable Git history and clean release changelogs:
* Syntax: `<type>(<scope>): <concise Imperative description>`
* **Types**:
  * `feat`: New structural capability, static route, or verified case study.
  * `fix`: Bug resolution, accessibility remediation, or broken link correction.
  * `docs`: Additions or adjustments restricted exclusively to `docs/` or code comments.
  * `arch`: Structural framework restructuring, design token migrations, or compiler configuration changes.
  * `refactor`: Code transformation without modifying observable user-facing behavior.
  * `test`: Addition or update of validation test harnesses or linting scripts.
  * `chore`: Dependency upgrades or toolchain maintenance without source changes.
* **Rules**: Maximum 72 characters per line. Do not commit temporary editor configs, OS junk files (`.DS_Store`), generated `.next/` or `dist/` folders, or `.env` secrets.

## 3. Pull Request (PR) and Review Expectations
Every pull request must represent a self-contained, reviewable unit directly tied to an accepted RFC or Roadmap Milestone:
* **Description Requirement**: Must reference the governing document ID (e.g., `Ref: rfc/0001`, `Closes roadmap/milestone-2`), state changed files, justify any client/server boundaries introduced, and list exact local verification commands executed.
* **Review Expectation**: Code reviewers are mandated to evaluate submissions against `docs/CONSTITUTION.md`. Any PR introducing runtime styling overhead, untyped assertions (`any`), decorative visual fluff, or regression in accessibility must be rejected.

## 4. Documentation Requirements
Code enhancements and structural refactoring cannot merge without synchronous documentation updates:
* Changes to system routing or rendering boundaries require updating `docs/ard/`.
* Technology selection adjustments require submitting a formal ADR in `docs/adr/`.
* Technical case studies must accurately reflect verified database schemas, security protocols, or algorithms without inflated claims.

## 5. Definition of Done (DoD)
A task is recognized as complete only when all of the following conditions are satisfied:
1. **Scope Compliance**: Exactly meets approved functional requirements without scope creep or speculative abstraction.
2. **Type Security**: Commands `npm run typecheck` (or equivalent `tsc --noEmit`) and `npm run lint` report zero warnings or errors.
3. **Server-First Assurance**: All React App Router components execute on the server by default unless localized DOM state is rigorously justified via comments.
4. **Accessibility Check**: Semantic headings (`h1` through `h6`) follow strict hierarchical incrementation; interactive elements maintain a visible focus outline; contrast achieves >= 4.5:1 ratio against dark canvases.
5. **Reduced Motion Check**: Verifiable execution under `@media (prefers-reduced-motion: reduce)` confirming complete transition duration truncation.
6. **Documentation Synchronization**: Appropriate ARDs, ADRs, or README walkthrough artifacts accurately mirror the new code state.

## 6. Testing Expectations
* Maintain automated TypeScript build validation and strict ESLint compliance.
* Manual accessibility and responsiveness testing must occur across mobile (`320px`), tablet (`768px`), and desktop (`1280px+`) viewports prior to review submissions.
* Inspect browser developer console logs during rendering testing to confirm zero hydration warnings, DOM nesting exceptions, or network resource failures.

## 7. Approval Workflow
1. Developer submits PR accompanied by verification logs and documentation links.
2. Automated continuous integration scripts execute type, lint, and production build checks (`npm run build`).
3. Repository owner reviews diff against objective architectural standards and subjective design limits.
4. Upon explicit owner sign-off, the PR is squash-merged into `main`, maintaining linear commit hygiene.
