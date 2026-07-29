# Milestone 6: Formal Verification, Legacy Decontamination, and Cutover (Phase 6)

**Status**: Pending Sign-Off  
**Date**: 28-07-2026  

## 1. Objective
Execute rigorous end-to-end verification against all active engineering standards, perform comprehensive WCAG 2.2 AA/AAA accessibility auditing, conduct final comparative analysis against the original legacy portfolio, permanently prune out obsolete source folders (`client/`), and execute formal Vercel production deployment domain cutover.

## 2. Deliverables
* Comprehensive multi-viewport Chrome DevTools Accessibility and Core Web Vitals audit log proving >= 4.5:1 text contrast, flawless keyboard sequencing, `< 75 KB` JavaScript bundle size, and `< 1.2s` LCP timing metrics.
* Complete archival and permanent filesystem decontamination of obsolete legacy folders: final removal of `client/` (Vite SPA) and remaining FreeCodeCamp root remnants after comparative sign-off.
* Final reconciliation of deployment host parameters in `vercel.json` and `next.config.ts`, ensuring clean production domain targeting and defensive HTTP header rules.
* Production cutover execution report confirming zero downtime release to Vercel edge deployment architecture.

## 3. Dependencies
* Formal review approval and sign-off of `milestone-5-native-optimizations-and-seo.md`.

## 4. Risks
* Prematurely pruning the legacy `client/` workspace before conducting comprehensive feature comparison could result in accidental loss of historically referenceable project metadata.
* DNS routing or Vercel edge build caching anomalies during deployment cutover can cause temporary broken routing 404s if caching headers are mismanaged.

## 5. Acceptance Criteria
* Absolute satisfaction of every check condition in `RFC-0006 Definition of Done` and `docs/standards/review-standards.md`.
* Zero occurrences of legacy Vite, runtime `styled-components`, or external third-party CAPTCHA package imports remaining across repository source trees or lockfiles.
* Flawless production build compilation (`npm run build`) resulting in clean edge deployment verified on live canonical domain endpoints.

## 6. Estimated Review Required
* **Review Level**: Principal Engineering Leadership & Repository Owner Cutover Approval.
* **Estimated Review Burden**: 60 to 90 minutes for exhaustive live staging link auditing, complete architectural checklist scoring, legacy comparison sign-off, and production domain routing authorization.

---
*No implementation may begin until this milestone has been explicitly approved.*
