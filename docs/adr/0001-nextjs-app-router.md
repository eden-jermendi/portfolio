# ADR-0001: Next.js App Router Architecture

**Status**: Accepted  
**Date**: 28-07-2026  

## 1. Status
Accepted

## 2. Context
The legacy portfolio existed as a client-side React single-page application (SPA) built with Vite, bundled alongside an inactive standalone Express server stub in `api/index.ts` and leftover root HTML files from earlier educational bootcamp projects. While this SPA structure is common in entry-level web development, it suffers from intrinsic engineering limitations: JavaScript bundle dependence for initial content rendering, minimal native document semantics, URL routing obfuscation via floating modal dialogs (`AboutModal.tsx`), and fragmented build pipelines. To represent an engineer transitioning into Backend Engineering, Application Security, OSINT, and Systems Architecture, the portfolio requires an architecture that defaults to high-performance static rendering, reliable zero-JavaScript progressive enhancement, and robust server-side structural discipline.

## 3. Decision
We adopt the Next.js App Router (`src/app/`) as the sole canonical frontend and server execution architecture for the entire portfolio codebase. We mandate React Server Components (RSC) as the default execution boundary across all structural layouts, page roots, and project case study displays. All legacy structures—specifically `client/`, `api/`, and root FreeCodeCamp HTML artifacts—will be completely decommissioned and removed upon verification of the new platform.

## 4. Consequences
* **Positive Engineering Consequences**:
  * Near-zero client JavaScript execution footprint for primary content pages, guaranteeing exceptional First Contentful Paint (FCP) and Largest Contentful Paint (LCP) Core Web Vitals.
  * Flawless deep-linking and indexing capabilities for dedicated static case study routes (`/projects/[slug]`), replacing unindexable client modal overlays.
  * Clean unified developer tooling and compilation pipelines executed entirely via standard `next dev` and `next build` scripts.
  * Complete elimination of the orphaned Express server architecture, removing maintenance overhead and unnecessary network listening exposure.
* **Negative Trade-offs and Limitations**:
  * Forfeits stateful client-side page cross-fade transitions and complex SPA UI routing tricks in favor of native browser document rendering and simple CSS View Transitions.
  * Demands strict architectural separation between server rendered modules and interactive client components (`"use client"`), forcing rigorous developer discipline during UI component design.
* **Compliance Obligations**:
  * PR reviews must reject any attempt to introduce `"use client"` at layout or page levels without documented browser DOM or event interface justifications.

## 5. Alternatives Considered
* **Retaining and Refactoring Vite + React SPA**: Retain existing `client/` folder and polish styling tokens in-place. *Reason for Rejection*: Fails to solve client-heavy JavaScript initial parsing burdens, lacks native file-system SEO routing without adding third-party router runtime libraries (e.g., React Router), and does not demonstrate modern server-first engineering competence.
* **Adopting Astro or Hugo Static Site Generators**: Migrate to a dedicated non-React static site engine. *Reason for Rejection*: While technically performant for purely static text, dropping Next.js forfeits seamless transition into server-side TypeScript API Route Handlers required for future interactive cybersecurity, OSINT, and systems backend demonstration features.
