# ARD-0004: Frontend Architecture

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines structural component composition, client-server rendering execution boundaries, styling abstraction integration, and static application bundling requirements for the frontend user interface.

## 2. Responsibilities
* Enforce server-side HTML rendering as the absolute architectural baseline to guarantee rapid First Contentful Paint (FCP) and robust Search Engine Optimization (SEO).
* Regulate client component inclusion (`"use client"`), limiting client runtime execution strictly to targeted interactive primitives requiring DOM APIs or browser event listeners.
* Coordinate image asset sizing, lazy loading behavior, and typographic rendering integrity to eliminate Cumulative Layout Shift (CLS).

## 3. Constraints
* **Objective Engineering Constraints**:
  * Root Layouts (`layout.tsx`), structural landing sections (`page.tsx`), and case study presentation modules must execute as React Server Components (RSC).
  * Client bundle payload execution budget is capped at strictly `< 75 KB` gzipped per page route.
  * No external third-party ui component libraries or runtime CSS-in-JS registries may be introduced into the rendering tree.
  * Image transformations must pass through `next/image` with explicit width/height dimensions or strictly scoped fill aspect-ratio wrappers.
* **Subjective Design Preferences**:
  * Prefer straightforward atomic layout sections (`<Section>`, `<Container>`, `<Header>`, `<MetricGrid>`) over deeply abstract polymorphic rendering wrappers.

## 4. Interfaces
* **Props Serialization Contract**: Strict TypeScript interfaces forbidding functions, prototype class instances, or circular JSON objects across Server-to-Client component boundaries.
* **HTML Component Primitive Bindings**: Strict semantic element wrapping (`<article>`, `<section>`, `<nav>`, `<header>`, `<main>`, `<footer>`).

## 5. Dependencies
* Next.js App Router Core (`^16.x`).
* React and React DOM Server Component architectures (`^19.x`).
* Native Browser DOM API primitives.

## 6. Architecture Decisions
* Adopting Server Components as the universal default boundary (See `adr/0001-nextjs-app-router.md`).
* Removing external reactive form validation and CAPTCHA modules in favor of native link actions and server route logic (See `rfc/0004-engineering-principles.md`).

## 7. Risks
* Accidental placement of `"use client"` at the root layout or top-level component hierarchy transforms the entire application back into a thick SPA bundle, nullifying Server Router advantages.
* Misconfigured image dimensions or missing width/height descriptors on dynamic media can induce severe layout shifts and visual stuttering during page load.

## 8. Future Evolution
* Integration of lightweight streaming component boundaries (`Suspense`) should future dynamic backend route monitoring features be added to the portfolio.

## 9. References
* `docs/CONSTITUTION.md`
* `docs/rfc/0003-component-philosophy.md`
* `docs/adr/0001-nextjs-app-router.md`
* `docs/standards/performance-standards.md`
