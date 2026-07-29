# Migration Plan

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Outline the safe, non-disruptive migration path from the legacy dual-application repository (Vite frontend + Express API) to the unified Next.js App Router architecture.

---

## 1. Current State vs. Target State
* **Current State**: The repository houses a legacy `/client` (Vite) and `/api` (Express) structure. A skeleton Next.js setup exists in the root `/src/app`.
* **Target State**: The root `/src/app` handles 100% of the routing and rendering statically. The `/client` and `/api` directories are entirely removed.

---

## 2. Migration Phases

### Phase A: Parallel Construction
* The Next.js application will be constructed entirely in parallel within `src/app`.
* The legacy application in `/client` will not be modified or deleted during this phase. 
* `npm run dev` handles the Next.js environment, while `npm run dev:legacy` maintains the Vite environment.

### Phase B: Safe Routing & Shadowing
* Once the Next.js application reaches feature parity (Milestone 5/6), we will configure Vercel's Edge routing to serve the Next.js build.
* *Note*: The portfolio is currently a monolithic replacement, so a staggered route-by-route migration (e.g., migrating just `/projects` while leaving `/` on Vite) introduces unnecessary complexity. The cutover will be a hard swap.

### Phase C: Decommissioning
* Upon successful production verification of the Next.js build, a dedicated PR will explicitly delete the `/client` and `/api` directories, prune `package.json` of legacy dependencies, and remove legacy scripts.

---

## 3. Rollback Strategy
* If the Next.js deployment exhibits critical failures in production, rollback is instant. We revert the `vercel.json` deployment target commit, immediately restoring the legacy Vite application which remains untouched in git history.

---

## 4. Technical Risks & Success Criteria
* **Risk**: SEO loss due to URL changes.
* **Mitigation**: The Migration PR MUST include explicit 301 redirects in `next.config.mjs` for any legacy URLs that change schema (e.g., if `/legacy-project-path` becomes `/projects/new-path`).
* **Success Criteria**: The Next.js app deploys successfully, all legacy URLs resolve or redirect correctly, and Lighthouse scores improve or remain constant.
