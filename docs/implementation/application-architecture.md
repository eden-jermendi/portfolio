# Application Architecture

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Define the high-level structural constraints of the Next.js application to enforce separation of concerns, routing predictability, and the absolute minimization of client-side execution overhead.

---

## Application Layers

1. **Routing Layer (`app/`)**
   * Responsible *only* for URL parameter extraction, triggering data fetches, and composing page layouts. It does not contain complex UI logic.
2. **Composition Layer (`components/layout/` & `components/project/`)**
   * Responsible for arranging atomic primitives according to the Editorial Composition Rules.
3. **Atomic UI Layer (`components/ui/` & `components/typography/`)**
   * Responsible for pure, stateless semantic HTML rendering.
4. **Data Layer (`lib/` & `content/`)**
   * Responsible for File System operations, parsing, and type validation. It holds zero knowledge of React.

---

## Separation of Concerns
* **Configuration**: Root-level files (`next.config.mjs`, `tsconfig.json`) govern the compilation. They must remain distinct from application logic.
* **Data Flow**: Unidirectional. Data is sourced in the Server Component route (`page.tsx`), passed down as strongly-typed serializable props, and rendered blindly by the atomic UI layer.

---

## Server vs Client Responsibilities

### Server Components (Default)
* **Everything is a Server Component by default.** 
* Layouts, typography, containers, navigations, footers, metadata lists, and markdown bodies execute exclusively on the server at build time.

### Client Components (Exception)
* Permitted *only* where browser APIs or mutable state are strictly required.
* Examples: A theme toggle button (requires `localStorage`), a modal dialogue (requires focus trapping), or a reduced-motion toggle.
* **Rule**: The `"use client"` directive must be pushed to the absolute deepest leaf node of the component tree.

---

## Rendering Philosophy
The application acts as a static document generator. Next.js is configured for aggressive Static Site Generation (SSG). The server generates HTML files at build time; the runtime simply serves them.

## Error Handling Philosophy
* Build-time errors (TypeScript, MDX parsing failures) will explicitly break the deployment pipeline. We do not swallow parsing errors.
* Runtime boundaries (`error.tsx`) act as graceful fail-safes for unexpected client exceptions, providing standard technical feedback rather than marketing apologies.
