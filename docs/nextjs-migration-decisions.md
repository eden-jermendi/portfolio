# Next.js Migration Decision Record

This document records the architectural decisions approved for the portfolio migration from Vite/React to Next.js App Router.

## Approved Decisions

### 1. Migration Structure
*   **Decision**: The new Next.js application will be established at the repository root (`portfolio/src/app`).
*   **Legacy Retainment**: The `client/` (legacy Vite SPA) and `api/` (legacy Express API) directories are retained in place and remain fully runnable.
*   **Branching Workflow**: All development will happen on `next/` prefixed branches (e.g. `next/feat/*`, `next/fix/*`), which will be merged into `next-main`. The cutover/merge to the primary production branch will only occur once verification is complete and approved.

### 2. Styling Direction
*   **Decision**: Styled-components will **not** be used in the new Next.js application.
*   **Approved System**: Visual parity will be preserved using:
    *   Global CSS for resets.
    *   CSS Custom Properties for design tokens and theme values.
    *   CSS Modules or targeted CSS classes for component-level styles.
    *   A localized client component for theme state handling.
*   **Registry**: No styled-components registry will be created or used for the Next.js app.

### 3. About Modal
*   **Decision**: The initial migration of the About Modal will preserve the existing custom focus trap, focus restoration, Escape-key handling, and visual styles.
*   **Deferred Refactor**: Converting the modal to a native HTML5 `<dialog>` element is deferred to a later optimization pass after behavioral parity is verified.

### 4. Dynamic Project Routes
*   **Decision**: Dynamic routing will be supported via `/projects/[slug]` to host detailed project case studies.
*   **Phasing**: Data modeling, static generation, metadata, and not-found templates are deferred to Phase 3. No empty placeholder slug pages will be created in this step.

### 5. Express API
*   **Decision**: The Express server will be retained temporarily. In a later phase, the `/api/health` endpoint will be migrated to a Next.js Route Handler for testing and parity comparison.
*   **API Removal**: The Express API will only be removed after Route Handler parity is verified and owner approval is granted.

---

## Deferred Work Reference

| Deferred Item | Intended Migration Phase |
| :--- | :--- |
| Theme/Global CSS Migration | Phase 2 (Static Portfolio) |
| Layout and Static Components | Phase 2 (Static Portfolio) |
| Dynamic Route & Slug Params | Phase 3 (Project Routes) |
| Case Study Content | Phase 3 (Project Routes) |
| Interactive UI Primitives & Captcha | Phase 4 (Interactivity) |
| Modal Behavior (Legacy Focus Trap) | Phase 4 (Interactivity) |
| Route Handler (`/api/health`) | Phase 4 (Interactivity) |
| Metadata, Sitemap, OG & Robots | Phase 5 (Native Improvements) |
| Production Build/Vercel Switch | Phase 6 (Verification & Cutover) |
| Legacy Directory Cleanup | Phase 6 (Verification & Cutover) |
