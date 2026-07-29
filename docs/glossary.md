# Terminology Glossary

**Effective Date**: 28-07-2026  
**Status**: Mandatory Terminology Reference Standard  

## 1. Purpose
This document establishes shared, unequivocal definitions for technical terms, architectural concepts, component classifications, and design methodologies used throughout the project documentation and codebase. Maintaining consistent vocabulary prevents ambiguity across design, implementation, and review cycles.

---

## 2. Terms and Definitions

### Architectural & Governance Terms

* **RFC (Request for Comments)**: A formal document proposing a structural change, technical direction, or design philosophy. An RFC details problem context, user requirements, trade-offs, and proposed implementation scope prior to decision-making.
* **ARD (Architecture Reference Document)**: A structural blueprint defining overall system boundaries, module responsibilities, constraints, interfaces, and dependencies. ARDs describe system architecture objectively without containing promotional justifications.
* **ADR (Architecture Decision Record)**: An immutable historical document capturing a specific architectural decision, its context, consequences, evaluated alternatives, and uncertainty status (following the Michael Nygard format).
* **Information Architecture (IA)**: The structural organization, route hierarchy, labeling, and navigational paths of content within the application, ensuring indexability, deep-linking, and predictable user orientation.
* **Engineering Taste**: The professional discipline of choosing simple, defensible, and high-performance technical solutions. It emphasizes restraint, appropriate abstraction, deletion over preservation, and the elimination of superficial visual or code complexity (e.g., AI-generated tropes or decorative marketing gimmicks).

---

## 3. Technical & Component Terms

* **RSC (React Server Component)**: A component that executes exclusively on the server at build or request time, outputting zero JavaScript to the client bundle. RSC is the default execution boundary across this repository.
* **Primitive Component**: The lowest-level, highly reusable structural UI unit (e.g., `Typography`, `Anchor`, `SkipLink`). Primitives do not manage domain-specific state or business logic.
* **Composite Component**: A mid-level structural UI unit assembled from multiple primitives to fulfill a distinct layout function (e.g., `SiteHeader`, `TechStackList`, `ProjectIndexCard`).
* **Progressive Enhancement**: A software design strategy that guarantees core content and semantic navigation are fully accessible using baseline HTML/CSS without requiring JavaScript execution, while layer-enhancing interactivity where client capabilities exist.
* **Zero-Runtime CSS**: A styling architecture where design tokens and styles are evaluated statically by the browser CSS engine (e.g., via native CSS Custom Properties or CSS Modules) without relying on runtime JavaScript style calculation or injection libraries (such as `styled-components`).
* **Design Token**: A named, centralized CSS Custom Property storing atomic visual design decisions (colors, typography scales, spacing units, transition durations, radius limits) to enforce consistency without hardcoding inline values.
* **Editorial Layout**: A content-first design methodology prioritizing typographic hierarchy, high-contrast readability, generous whitespace rhythm, and zero visual noise, drawing inspiration from technical journals rather than promotional marketing websites.
* **Core Web Vitals (CWV)**: Quantitative performance metrics defined by Google (including Largest Contentful Paint [LCP], Cumulative Layout Shift [CLS], and Interaction to Next Paint [INP]) used to measure real-world user experience and loading performance.
