# Testing and Verification Standards

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Define explicit diagnostic command sequences, static code verification procedures, manual accessibility inspection protocols, and pre-merge quality gates to ensure zero software regressions enter production deployment channels.

## 2. Objective Engineering Constraints
* **Mandatory Terminal Verification Gate (Zero Error Tolerance)**:
  * Prior to staging any git commits or submitting a pull request, developers must run and pass the following continuous compilation pipeline:
    1. `npm run typecheck` (Executes `tsc --noEmit` under strict TypeScript rules): Must terminate with exactly `0 errors, 0 warnings`.
    2. `npm run lint` (Executes Next.js ESLint and accessibility rules): Must terminate without syntax failures or unhandled structural warnings.
    3. `npm run build` (Executes App Router production bundling and static page generation): Must compile every route cleanly without generating hydration mismatch exceptions or bundle budget warnings.
* **Chrome DevTools Accessibility Audit Protocols**:
  * For every modified interface section or newly generated case study route (`/projects/[slug]`), developers must execute automated accessibility audits (`a11y-debugging` via Chrome DevTools MCP or Lighthouse A11y scans). Any flagged contrast violation or missing accessible ARIA/label name must be resolved before sign-off.
  * Perform manual keyboard navigation testing: navigate from the initial skip link through the footer using strictly the `Tab`, `Shift+Tab`, `Enter`, and `Spacebar` keys. Focus traps or disappearing outline styles result in immediate QA rejection.
* **Reduced Motion Simulation Verification**:
  * Enable operating system rendering emulation for `@media (prefers-reduced-motion: reduce)` within browser Developer Tools. Verify visually and programmatically that animated transition durations drop instantly to zero.

## 3. Subjective Design Preferences & Proportional Rigor
* **Definitional Proportionality**:
  * Avoid creating complex mock DOM snapshot testing scripts or flaky UI automated browser integration suites for simple text document pages. Dedicate QA inspection time entirely to static type rigor, Core Web Vitals optimization, and real-world keyboard usability.
  * During peer reviews, explicitly document the browser versions, hardware display densities, and viewports (`320px` mobile, `768px` tablet, `1440px` desktop) utilized during manual inspection runs.

## 4. Acceptance Criteria
* Inclusion of successful terminal execution transcripts (`typecheck`, `lint`, `build`) inside pull request authorization records.
* Unanimity across peer reviewers that accessibility focus indicator checks and reduced motion overrides perform flawlessly across verified staging deployment preview URLs.
