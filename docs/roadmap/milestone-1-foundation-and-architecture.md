# Milestone 1: Foundation and Architecture Setup (Phase 1)

**Status**: Pending Sign-Off  
**Date**: 28-07-2026  

## 1. Objective
Initialize the production Next.js App Router application foundation under `src/app/`, purge obsolete root legacy artifacts, implement immutable monochromatic dark-mode design tokens in zero-runtime CSS variables, configure strict TypeScript checking, and deploy self-hosted variable typography (`next/font`).

## 2. Deliverables
* Decontamination of repository root: definitive resolution of uncommitted git changes on branch `theme-foundation`, deletion of standalone HTML/CSS files (`about.html`, `index.html`, `styles.css`), and resolution of the legacy Express server stub in `api/`.
* Next.js App Router skeleton (`src/app/layout.tsx` and `src/app/page.tsx`) running exclusively as zero-runtime Server Components.
* Root styling compilation module (`src/app/globals.css`) embedding strictly checked CSS custom properties for dark mode palettes, typographic scales, spacing rhythm intervals, and reduced-motion reset overrides.
* Configured `next/font` local optimization loader binding variable weights for primary editorial prose (`Manrope`) and technical code displays (`IBM Plex Mono`) with zero layout shift parameters (`size-adjust`).

## 3. Dependencies
* Formal review approval and sign-off of `milestone-0-audit-and-governance.md`.

## 4. Risks
* Existing uncommitted changes in branch `theme-foundation` may cause merge conflicts or git history clutter if not systematically committed or cleaned before initialization.
* Incorrect variable font weight subset configurations in `next/font` can trigger unintended layout shift regressions during CSS variable cascading.

## 5. Acceptance Criteria
* Zero diagnostic warnings or syntax errors upon running `npm run typecheck`, `npm run lint`, and `npm run build`.
* Chrome DevTools performance auditing confirms zero network calls targeting external font domains (e.g., Google Fonts servers) during initial document rendering.
* Confirmed absence of runtime CSS-in-JS libraries (`styled-components`) within Next.js root compilation trees.

## 6. Estimated Review Required
* **Review Level**: Technical Lead & Compiler Verification Review.
* **Estimated Review Burden**: 30 minutes to inspect terminal compilation transcripts, git working tree state, design token definitions in `globals.css`, and font loading behavior.

---
*No implementation may begin until this milestone has been explicitly approved.*
