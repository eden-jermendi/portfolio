# Implementation Roadmap

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Define the chronological engineering roadmap from the current dual-application repository (Vite + Express) to a unified, statically generated Next.js production portfolio. Every phase builds strictly upon the approved architectural foundations.

---

## Phases & Sequencing

### Phase 1: CSS Architecture & Global Shell
* **Scope**: Implement zero-runtime CSS tokens (`globals.css`), establish the Next.js `RootLayout`, and configure typographic baselines.
* **Dependencies**: Styling Architecture, Editorial Rhythm.
* **Acceptance Criteria**: `npm run dev` yields a blank page with correct font family, baseline CSS variables, and HTML5 shell (`<html lang="en">`).

### Phase 2: Atomic Primitives
* **Scope**: Implement stateless, server-first UI primitives (Headings, Body Text, Links).
* **Dependencies**: Component Architecture, Phase 1.
* **Acceptance Criteria**: Components render strictly from semantic HTML, mapping to Figma token definitions without client-side interactivity.

### Phase 3: Content Pipeline & Parsing
* **Scope**: Establish the local MDX/JSON ingest mechanism. Build the parser that converts raw content entities into renderable React nodes.
* **Dependencies**: Content Architecture, Content Pipeline.
* **Acceptance Criteria**: The application successfully reads local `.mdx` or `.json` files and outputs server-rendered strings to the terminal.

### Phase 4: Structural Layout & Navigation
* **Scope**: Implement the `Container`, `Section`, and `Primary Navigation` components. 
* **Dependencies**: Application Architecture, Accessibility Architecture.
* **Acceptance Criteria**: The "Skip to content" link works, keyboard navigation flows logically, and the layout adheres to the maximum reading measure.

### Phase 5: Homepage & Index Assembly
* **Scope**: Compose the primitives and content pipeline into the root `/` route and `/projects` index.
* **Dependencies**: Homepage Specification, Phase 3, Phase 4.
* **Acceptance Criteria**: Homepage matches the exact specifications of the `homepage-specification.md` document with static data.

### Phase 6: Deep Case Studies
* **Scope**: Implement the dynamic `[slug]` route for project details, including wide architecture diagrams and dense metadata tables.
* **Dependencies**: Editorial Composition Rules.
* **Acceptance Criteria**: Long-form editorial content renders perfectly across all viewport constraints.

### Phase 7: Migration & Cutover
* **Scope**: Decommission the legacy Vite build and update Vercel routing to expose the Next.js application.
* **Dependencies**: Migration Plan.
* **Acceptance Criteria**: Legacy `/client` is safely archived, production serves Next.js SSG output.

---

## Review Gates
Between every phase, the following gates MUST be cleared:
1. **Architecture Review**: Verify zero client state was introduced unless strictly required.
2. **Accessibility Review**: Verify axe-core violations are zero.
3. **Performance Review**: Verify the layout shift is zero.
