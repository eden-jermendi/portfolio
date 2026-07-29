# ARD-0005: Content Model

**Status**: Active Blueprint  
**Date**: 28-07-2026  

## 1. Scope
Defines the schema structures, data storage format, validation requirements, and static parsing mechanisms governing projects, technical case studies, biographical backgrounds, and professional outreach credentials.

## 2. Responsibilities
* Isolate all editorial narratives and engineering specs into strictly typed static data sources decoupled from presentation JSX.
* Establish mandatory technical architecture data fields for projects, preventing trivial summaries or vague marketing descriptions from entering the UI.
* Provide clean, type-safe data access functions for build-time static page generation (`generateStaticParams`).

## 3. Constraints
* **Objective Engineering Constraints**:
  * Project case studies must implement a rigid TypeScript interface or validated frontmatter schema containing explicit fields for: `title`, `slug`, `summary`, `architecture`, `securityConsiderations`, `performanceProfile`, `stack`, `repositoryUrl`, and optional `liveUrl`.
  * External relational database runtime calls or remote Content Management System (CMS) HTTP queries are strictly forbidden during standard page execution.
  * Content must parse deterministically at compilation time (`npm run build`) without requiring external environment runtime keys.
* **Subjective Design Preferences**:
  * Copy formatting must maintain concise, authoritative engineering terminology; filler adjectives and hype phrases are banned by schema instruction.

## 4. Interfaces
* **Project Data Interface (`CaseStudySchema`)**: Strongly typed TypeScript record defining structural attributes for individual project case studies.
* **Static Routing Loader Interface**: Async build-time extraction interface serving slugs to Next.js routing generation engines (`generateStaticParams`).

## 5. Dependencies
* TypeScript Static Type System (`^6.x`).
* Native Node.js file system reading utilities or local ES module compilation.

## 6. Architecture Decisions
* Adopting TypeScript modules (`src/content/*.ts`) or filesystem MDX documents as the single source of truth over runtime databases (See `adr/0005-content-source.md`).
* Enforcing structured engineering case study schemas to supersede superficial legacy project cards (See `rfc/0007-content-strategy.md`).

## 7. Risks
* Unsupported or loosely typed data interfaces can lead to rendering `undefined` attributes or runtime formatting failures during deep case study rendering.
* Allowing unchecked prose lengths within project summary fields can degrade layout uniformity and typographic vertical rhythm across project indexes.

## 8. Future Evolution
* Transitioning from pure TypeScript data structures to native MDX files with automated frontmatter schema compilation (via toolchains like BaseHub or Velite) as case studies expand in typographic depth and complexity.

## 9. References
* `docs/CONSTITUTION.md`
* `docs/rfc/0007-content-strategy.md`
* `docs/adr/0005-content-source.md`
* `docs/adr/0006-project-data-model.md`
