# Milestone 4: Project Case Study Data Model and Static Routing (Phase 3)

**Status**: Pending Sign-Off  
**Date**: 28-07-2026  

## 1. Objective
Implement the rigid TypeScript data model (`EngineeringCaseStudy`) defined in `ADR-0006`, populate exhaustive technical case studies for selected software systems, and construct statically generated App Router dynamic routing endpoints (`/projects/[slug]`) to provide deep engineering verification.

## 2. Deliverables
* Strict typed data module (`src/content/projects.ts`) implementing immutable schema fields for architecture summaries, database modeling, security/OSINT considerations, performance profiles, and concrete technology categorizations.
* Expanded engineering case studies for primary validated projects: *Coursework Tracker*, *Weather Oracle*, and *Delete My Instagram Comments*, removing superficial summary text and marketing language.
* Dedicated App Router case study template route (`src/app/projects/[slug]/page.tsx`) utilizing `generateStaticParams` to produce zero-runtime static HTML pages at compile time.
* Clean editorial project listing index integrated into root landing architecture (`src/app/page.tsx`), linking directly to individualized case study URLs via `next/link`.

## 3. Dependencies
* Formal review approval and sign-off of `milestone-3-integrated-background-and-contact.md`.

## 4. Risks
* Generating deeply technical architectural and application security descriptions for earlier bootcamp-era projects requires rigorous honesty to avoid exaggerating system complexity or engineering responsibilities.
* Misconfiguring `generateStaticParams` return object mapping can trigger unexpected dynamic server runtime fallback rendering instead of precomputed static build exports.

## 5. Acceptance Criteria
* Terminal compilation output (`npm run build`) explicitly reports static generation (`●`) for all individual project slug routes without runtime database dependencies.
* Strict TypeScript verification (`npm run typecheck`) terminates with zero errors across complex nested `EngineeringCaseStudy` schemas and page routing properties.
* Verified absence of generic marketing tags ("Community Platform", "Local Sharing") in favor of concrete systems infrastructure vocabulary across all published case studies.

## 6. Estimated Review Required
* **Review Level**: Principal Systems Architect & Engineering Manager Review.
* **Estimated Review Burden**: 60 minutes for rigorous peer review of case study technical accuracy, routing parameter static compilation logs, and schema adherence.

---
*No implementation may begin until this milestone has been explicitly approved.*
