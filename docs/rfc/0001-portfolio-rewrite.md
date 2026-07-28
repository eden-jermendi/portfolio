# RFC-0001: Portfolio Rewrite

**Status**: Draft  
**Author**: Software Architect  
**Created Date**: 28-07-2026  

## 1. Purpose
Specify the migration framework and structural transformation from the existing legacy Vite React single-page application (`client/`) to a modern Next.js App Router architecture (`src/app/`).

## 2. Context
The legacy application bundles client-side React state for simple section navigation and presents biographical content via an overlay dialog (`AboutModal.tsx`). Furthermore, an orphaned Express backend (`api/index.ts`) persists in the repository root. Re-engineering this codebase around Next.js App Router will align the structure with modern server-side rendering, better document semantics, and rigorous engineering taste.

## 3. Goals
* Establish Next.js App Router under `src/app/` as the singular production execution platform.
* Deconstruct single-page modal dialog patterns into distinct, linkable editorial structures and static project routing endpoints (`/projects/[slug]`).
* Prune obsolete root legacy files (`index.html`, `about.html`, `styles.css`) and decommission the inactive Express server stub in `api/`.

## 4. Non-Goals
* Writing custom API server replacements in Next.js Route Handlers unless executing verified technical demonstrations (e.g., live OSINT diagnostic utilities or HTTP security header inspections).
* Replicating existing neon-purple color schemes, glassmorphism overlays, or interactive form captchas.

## 5. Requirements

### Objective Engineering Constraints
* Routing must utilize native file-system routing conventions under `src/app/`.
* Internal linking must utilize `next/link` to guarantee prefetching and semantic anchor compatibility.
* Zero runtime CSS styling overhead; remove runtime `styled-components` in favor of App Router-optimized zero-runtime styling (CSS Modules or CSS custom properties in `globals.css`).
* Production output must pass clean compilation via `npm run build` without hydration mismatches.

### Subjective Design Preferences
* Editorial layout structuring emphasizing vertical baseline rhythm over boxed interface components.
* Direct presentation of background accomplishments without artificial SPA interactions.

## 6. Trade-offs
* **Rewriting vs. Refactoring In-Place**: Rebuilding the foundation inside `src/app/` from clean tokens requires rebuilding visual components from scratch, but guarantees avoiding technical debt, obsolete bundle dependencies, and SPA architecture contamination.

## 7. Open Questions
1. Should the legacy `client/` and `api/` directories be permanently deleted immediately in Milestone 1, or archived locally until final verification (Phase 6)?
2. What specific Vercel configuration adjustments are necessary once the build pipeline transitions from a custom build script to standard `next build`?

## 8. Acceptance Criteria
* Functional Next.js App Router application compiling cleanly under `npm run dev` and `npm run build`.
* Complete removal of interactive modal patterns in favor of direct document navigation.
* Validation of TypeScript strictness (`tsc --noEmit`) across all newly introduced files.

## 9. Future Work
* Construction of detailed engineering case studies in Phase 3.
* Performance validation against target Core Web Vitals (LCP, CLS).

## 10. References
* `docs/CONSTITUTION.md`
* `docs/ard/0001-overall-system-architecture.md`
