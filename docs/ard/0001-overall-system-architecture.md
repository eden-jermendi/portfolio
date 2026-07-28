# ARD-0001: Overall System Architecture

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines the macro-architectural structure, rendering philosophy, directory organization, and boundary semantics governing the entire software portfolio application.

## 2. Responsibilities
* Establish a server-first rendering platform capable of producing zero-runtime static content output where possible.
* Define clear separation of concerns between core application shells, global design tokens, typed static project data schemas, and UI markup.
* Govern repository directory restructuring, mandating the decommissioning of obsolete legacy infrastructures (`client/` and `api/`).

## 3. Constraints
* **Objective Engineering Constraints**:
  * Root rendering structure must conform strictly to Next.js App Router conventions (`src/app/`).
  * Server Components represent the unconditional default boundary; `"use client"` is banned at the architectural layout and page structure level.
  * System must function without requiring connection to external dynamic backend server databases at runtime during content page requests.
* **Subjective Design Preferences**:
  * Preserve clean directory hierarchy with minimal nesting; keep configuration files at workspace root and code confined inside `src/`.

## 4. Interfaces
* **Client-Server Boundary**: Serialized primitive read-only data interfaces passing over Server to Client component intersections.
* **Navigation Interface**: Native Next.js Link prefetch mechanics and semantic HTML5 anchor references for intra-document skipping and deep link targeting.

## 5. Dependencies
* Current Node.js runtime compatibility environment (`>= v20.x`).
* Next.js App Router platform (`^16.x`).
* TypeScript static compiler (`^6.x`).

## 6. Architecture Decisions
* Adopting static and server-rendered generation in lieu of Vite SPA client bundles (See `adr/0001-nextjs-app-router.md`).
* Decoupling case study content representation from components by isolating content models inside explicit data modules (See `adr/0005-content-source.md`).

## 7. Risks
* Mixing legacy Vite React structural mental models with App Router server conventions can induce hydration errors and inflated client JavaScript bundles.
* Over-specifying runtime abstractions for simple static text presentation can degrade maintainability and increase bundle size.

## 8. Future Evolution
* Integration of lightweight server-side Route Handlers (`src/app/api/*`) strictly for technical demonstrations (e.g., live OSINT diagnostic queries or custom HTTP request header inspection utilities).

## 9. References
* `docs/CONSTITUTION.md`
* `docs/rfc/0001-portfolio-rewrite.md`
* `docs/adr/0001-nextjs-app-router.md`
