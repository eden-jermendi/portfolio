# RFC-0003: Component Philosophy

**Status**: Draft  
**Author**: Staff Frontend Engineer  
**Created Date**: 28-07-2026  

## 1. Purpose
Define the compositional methodology, architectural boundaries, and coding patterns governing UI component engineering within the Next.js App Router ecosystem.

## 2. Context
In React single-page applications, components often expand into unmanaged assemblies of state, inline event logic, and styled wrappers. In Next.js App Router, combining client state indiscriminately across foundational components degrades rendering performance, increases JavaScript bundles, and complicates server hydration. We must implement strict architectural discipline distinguishing server static markup from localized client interaction.

## 3. Goals
* Enforce React Server Components (RSC) as the unconditional default for layout, typography, navigation headers, and case study documentation.
* Minimize client execution footprints by isolating interactive DOM dependencies into tiny, dedicated client leaves (`"use client"`).
* Define uniform component component structures utilizing strict TypeScript interfaces without redundant visual wrapper abstractions.

## 4. Non-Goals
* Incorporating expansive external UI component libraries (e.g., Material UI, Chakra UI, Ant-Design) that add heavy runtime dependencies and preset component styling.
* Building complex abstraction layers or generic polymorphic rendering wrappers without established reuse cases.

## 5. Requirements

### Objective Engineering Constraints
* Components must export named TypeScript interfaces representing serializable prop boundaries when transitioning from server to client modules.
* The `"use client"` directive is prohibited in layout roots, page shells, typographic headers, and project listing feeds.
* All interactive HTML primitives (`<button>`, `<a>`, `<input>`) must include accessible labeling (`aria-label` or explicit text contents).
* Zero runtime CSS-in-JS usage within components; styles must reference static classes or local modular style definitions.

### Subjective Design Preferences
* Prefer descriptive, unambiguous component file basenames (`ProjectIndex.tsx`, `CaseStudyHeader.tsx`, `TechnicalStack.tsx`).
* Maintain clean vertical file organization: local constants/types at top, functional component declaration in middle, explicit export at base.

## 6. Trade-offs
* **Atomic Decomposition vs. Cohesive Page Files**: Creating dozens of atomic UI micro-components increases file system navigation complexity. We favor proportional composition—grouping closely coupled presentation markup directly within purposeful structural sections rather than creating disconnected micro-components for single HTML tags.

## 7. Open Questions
1. Should component styling rely strictly on global utility tokens within standard CSS classes, or implement explicit CSS Modules (`[name].module.css`) for complex structural containers?
2. How should we handle complex interactive code blocks or terminal simulations if added later—as dedicated client sub-bundles or statically rendered syntax HTML?

## 8. Acceptance Criteria
* Zero unjustified uses of `"use client"` across the Next.js workspace source codebase.
* All created React components compile with strict type checking and zero props defaulting to `any`.
* Component architectures pass clean server-side rendering verification during `next build`.

## 9. Future Work
* Implementation of core architectural layout components in Milestone 2.
* Automated bundle size monitoring to verify client module payload limits.

## 10. References
* `docs/CONSTITUTION.md`
* `docs/ard/0004-frontend-architecture.md`
* `docs/standards/coding-standards.md`
