# Coding Standards

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Establish non-negotiable syntactic rules, strict type enforcement limits, structuring formatting conventions, and defensive programming habits across the entire repository to guarantee codebase clarity, security, and long-term maintainability.

## 2. Objective Engineering Constraints
* **TypeScript Strictness**:
  * Explicitly forbid `any` types across all variables, interfaces, and function return declarations. When handling indeterminate external JSON data, type explicitly as `unknown` and apply runtime validation narrowing before property access.
  * Prohibit TypeScript compiler suppression comments (`@ts-ignore`, `@ts-expect-error`, `eslint-disable`) unless accompanied by an explicit multi-line comment detailing the unavoidable third-party library defect necessitating the bypass.
  * Interface declarations representing component contracts or data schemas must use read-only properties (`readonly title: string`) by default to prevent unintended functional mutation of static data models.
* **Server-First Boundary Compliance**:
  * The `"use client"` directive is explicitly barred from routing root layouts (`layout.tsx`), primary navigation shells, typography primitives, and static editorial content containers.
  * When a component demands `"use client"` due to localized interactive requirements (e.g., clipboard copy execution or keyboard focus traps), isolate the client behavior into the smallest viable sub-component leaf.
* **Security & Defensive Hygiene**:
  * Every anchor element targeting external network domains (`http://`, `https://`) must specify explicit attributes: `rel="noopener noreferrer"` and `target="_blank"` (when opening new tabs).
  * Never invent or hardcode confidential backend secrets, API endpoints, or private environmental keys into source code repositories; reference isolated host environment parameters exclusively (`process.env.*`).
  * Remove commented-out dead code implementations, speculative prototype files, and unused library imports prior to staging commit submissions.

## 3. Subjective Design Preferences & Structural Naming
* **File and Component Naming**:
  * Use PascalCase for React component filenames (`CaseStudyCard.tsx`, `SiteHeader.tsx`).
  * Use camelCase or kebab-case for utility modules and typed schema files (`projectSchema.ts`, `format-date.ts`).
* **Formatting Rhythm**:
  * Maintain consistent vertical code spacing: group third-party library imports at the absolute top of the file, local workspace schema/component imports beneath, type definitions third, functional execution logic fourth, and default module exports at the base.
  * Avoid deeply nested ternary expression cascades; break complex conditional evaluation logic into clear, named descriptive helper variables or dedicated boolean evaluation functions.

## 4. Acceptance Criteria
* Zero reported diagnostic errors or syntax warnings upon running `npm run typecheck` (`tsc --noEmit`) and `npm run lint`.
* Complete adherence to defensive link practices and immutable type declarations confirmed during structural PR review evaluation.
