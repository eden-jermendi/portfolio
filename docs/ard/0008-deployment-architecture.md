# ARD-0008: Deployment Architecture

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines continuous integration hosting platforms, compilation build steps, environment configuration governance, domain routing, and staging verification pipelines for production releases.

## 2. Responsibilities
* Provide an immutable, deterministic, zero-downtime automated deployment infrastructure utilizing modern global edge distribution networks.
* Ensure code compilation, typechecking, and linting execute automatically inside cloud build containers prior to releasing new build artifacts to public domains.
* Govern security practices regarding environment variables, production deployment configuration files, and HTTP response security headers.

## 3. Constraints
* **Objective Engineering Constraints**:
  * Production builds must execute entirely via standard npm script pipelines (`npm run build`) without relying on complex custom local bash copying procedures or manual multi-dir scripting.
  * Secret API keys, credentials, or private routing endpoints must never be hardcoded into versioned source code files or Git commits; utilize secured host environment variables exclusively.
  * Application must run cleanly on edge network infrastructures (e.g., Vercel / Netlify / Cloudflare Pages) without demanding persistent monolithic server computing instances.
  * Every commit pushed to working feature branches must generate an immutable, unique preview staging URL for manual device and design review.

## 4. Interfaces
* **CI/CD Build Execution Pipeline**: Automated runner trigger observing target branches on remote GitHub repository events.
* **Platform Routing Configuration**: Declarative host configurations (`vercel.json`, `next.config.ts`, or native platform metadata) governing HTTP redirects, caching rules, and security headers.

## 5. Dependencies
* Git remote repository hosting infrastructure (GitHub).
* Edge platform hosting provider (Vercel Core Platform).
* Next.js App Router optimized build compile engine (`next build`).

## 6. Architecture Decisions
* Hosting production deployment on Vercel edge infrastructure optimized for native Next.js Server Components and static asset delivery (See `adr/0008-deployment-platform.md`).
* Decommissioning custom legacy multi-folder build automation commands (`build:legacy`) in favor of canonical root Next.js compilation scripts (See `rfc/0001-portfolio-rewrite.md`).

## 7. Risks
* Divergence between local development environments (`npm run dev`) and cloud Node.js build runtime versions can cause unpredictable compilation build failures.
* Improperly cached static routing paths or stale metadata tags can cause display inconsistencies during deployment cutovers.

## 8. Future Evolution
* Configuration of advanced HTTP Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and X-Content-Type-Options response headers directly within `next.config.ts` during Phase 5 optimizations.

## 9. References
* `docs/CONSTITUTION.md`
* `docs/adr/0008-deployment-platform.md`
* `docs/rfc/0009-implementation-roadmap.md`
