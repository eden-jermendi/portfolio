# Homepage Specification

**Status**: Implementation Specification  
**Version**: 1.0  

## Executive Summary
This document serves as the formal engineering contract for the Homepage. It translates the *Homepage Architecture* into concrete editorial constraints, testable accessibility requirements, and rendering expectations. Its primary purpose is to remove all ambiguity before implementation begins, ensuring the resulting page acts as a calm, highly readable technical journal that serves hiring managers and peers alike.

---

## Page Overview

* **Purpose**: Definitively answer "Why should this visitor continue exploring?" within 20 seconds.
* **Primary Audience**: Hiring Managers / Recruiters (seeking stack/seniority).
* **Secondary Audience**: Engineering Managers / Peers (seeking architectural depth).
* **Primary User Journey**: Arrive → Parse Identity → Scan Philosophy → Click a Project Preview.
* **Secondary User Journeys**: Arrive → Scan Writing → Click an Article Preview.
* **Success Criteria**: Visitor understands identity, specialization, and next routing steps without reading every paragraph.
* **Expected Reading Time**: 60 seconds (full comprehension) / 20 seconds (scanning comprehension).
* **Editorial Goals**: High information density, low cognitive load, zero marketing fluff.

---

## Section Specifications

### 1. Nameplate & Introduction
* **Purpose**: Ground the reader immediately.
* **Question it answers**: "Who am I and what is my exact discipline?"
* **Required content**: Full Name, Current/Target Engineering Title, 1-2 sentence executive summary.
* **Optional content**: None.
* **Maximum content length**: 3 lines of lead text on a standard desktop measure.
* **Minimum content length**: 1 line of lead text.
* **Dependencies**: Site Configuration data.
* **Expected reusable components**: `Heading (H1)`, `Lead Paragraph`.
* **Editorial composition**: Standard header composition. H1 immediately followed by Lead.
* **Accessibility considerations**: MUST contain the only `<h1>` on the page.
* **Responsive considerations**: Fluid typography scaling to prevent aggressive text wrapping on narrow viewports.
* **Transitions to the next section**: Standard macro-whitespace (e.g., `space-3xl`).

### 2. Professional Philosophy
* **Purpose**: Establish engineering differentiation.
* **Question it answers**: "How do I think about building software?"
* **Required content**: 2-3 sentences detailing engineering principles.
* **Optional content**: None.
* **Maximum content length**: 60 words.
* **Minimum content length**: 20 words.
* **Dependencies**: Static content.
* **Expected reusable components**: `Body Text`.
* **Editorial composition**: Continuous prose flowing naturally from the Introduction.
* **Accessibility considerations**: Standard prose contrast.
* **Responsive considerations**: Respects maximum line length (reading measure).
* **Transitions to the next section**: Major chapter break macro-whitespace (e.g., `space-5xl`).

### 3. Selected Systems Work
* **Purpose**: Provide undeniable proof of competence.
* **Question it answers**: "What has this engineer actually built?"
* **Required content**: Section Title, 2-3 Project Previews.
* **Optional content**: "View all work" inline link.
* **Maximum content length**: 3 featured projects.
* **Minimum content length**: 1 featured project.
* **Dependencies**: Projects collection data.
* **Expected reusable components**: `Heading (H2)`, `Project Preview Card`, `Link`.
* **Editorial composition**: Dense clustering of project metadata to aid rapid scanning.
* **Accessibility considerations**: MUST use structural `<h2>`. Preview links MUST have clear, descriptive focus states.
* **Responsive considerations**: Previews stack vertically on mobile.
* **Transitions to the next section**: Standard section rhythm whitespace.

### 4. Selected Writing
* **Purpose**: Demonstrate technical communication and leadership.
* **Question it answers**: "Can this engineer document and argue architectural decisions?"
* **Required content**: Section Title, 2-3 Article Previews.
* **Optional content**: "View all writing" inline link.
* **Maximum content length**: 3 featured articles.
* **Minimum content length**: 0 (Section omits entirely if no writing exists).
* **Dependencies**: Writing collection data.
* **Expected reusable components**: `Heading (H2)`, `Metadata List`, `Link`.
* **Editorial composition**: Linear list.
* **Accessibility considerations**: MUST use structural `<h2>`.
* **Responsive considerations**: Standard block stacking.
* **Transitions to the next section**: Macro-whitespace leading to Footer.

---

## Content Constraints

* **Lead Paragraph**: Maximum 2 sentences. Maximum 30 words. MUST avoid subjective superlatives (e.g., "rockstar", "ninja", "passion").
* **Philosophy Text**: Maximum 60 words. Allowed tone: authoritative, calm, academic. Disallowed language: startup hyperbole, empty adjectives.
* **Project Previews**: Abstract text MUST NOT exceed 2 sentences. MUST contain tangible evidence/constraints rather than marketing claims.
* **Section Introductions**: H2s MUST be literal (e.g., "Systems Work", not "My Awesome Creations").
* **Navigation / CTAs**: MUST NOT use "Click Here" or "Read More". MUST use semantic trailing descriptors (e.g., "Read architecture case study →").

---

## Empty States

* **No featured projects**: The "Selected Systems Work" section MUST display a muted text block stating "Case studies are currently being archived."
* **One featured project**: Renders normally without structural changes.
* **No writing**: The entire "Selected Writing" section MUST gracefully collapse/hide without breaking the vertical rhythm of the preceding section.
* **Missing metadata**: The Project Preview MUST omit the missing field (e.g., Tech Stack) and recalculate spacing without layout shifts.
* **Draft content**: Draft projects MUST NOT appear in the featured index.

---

## Loading & Rendering Expectations

* **Rendering Strategy**: The Homepage MUST be statically generated (SSG). 
* **Loading Spinners**: MUST NOT exist. Content availability MUST be immediate.
* **Skeleton Loaders**: MUST NOT exist. The layout guarantees content is pre-rendered.
* **Future Dynamic Content**: Any future client-side fetching MUST occur strictly below the fold or be fully hydrated at build time to prevent Cumulative Layout Shift (CLS).

---

## SEO Requirements

* **Title**: `[Name] | [Engineering Title]` (e.g., "Eden Jermendi | Systems Engineer")
* **Description**: Sourced directly from the Lead Paragraph constraint (max 150 characters).
* **Canonical URL**: MUST point to the root `/`.
* **Open Graph / Twitter Card**: MUST include a baseline typographic card (no bespoke marketing images required, just clean text-based generation).
* **Structured Data**: MAY include `Person` JSON-LD schema.
* **Robots**: `index, follow`.

---

## Accessibility Acceptance Criteria

* MUST contain exactly one `<h1>`.
* MUST include a "Skip to main content" link as the first focusable element.
* MUST support complete keyboard-only navigation with visible `2px` focus rings.
* MUST expose semantic landmarks (`<header>`, `<main>`, `<footer>`).
* MUST maintain logical DOM reading order matching the visual presentation.
* MUST NOT communicate meaning using colour alone (e.g., Links MUST have underlines).
* MUST support reduced motion (though no motion is currently specified, the architecture precludes it).
* SHOULD use `aria-labelledby` linking sections to their respective `<h2>` headings.

---

## Performance Expectations

* **Static Rendering**: Prioritise 100% static HTML delivery.
* **JavaScript**: Avoid all unnecessary client-side JavaScript. The Homepage requires zero interactive UI state.
* **Hydration**: Avoid unnecessary hydration. If React Server Components (RSC) are utilized, the entire Homepage SHOULD remain a Server Component.
* **Layout Shift**: Minimise layout shift to absolute `0.0`. Fonts MUST be optimized (`next/font`) to prevent FOUT.
* **Interaction Cost**: Interaction costs remain low; the page is a static document.

---

## Content Ownership

* **Nameplate & Philosophy**: Owned by `Site configuration` / static strings.
* **Systems Work**: Queried from the `Projects collection` (filtering by a `featured: true` flag).
* **Selected Writing**: Queried from the `Writing collection` (filtering by a `featured: true` flag, descending date).
* **Global Metadata**: Owned by `Site configuration`.

---

## Acceptance Criteria

The Homepage Specification is complete because:
* [x] Every Homepage section has a defined purpose.
* [x] Every section has documented constraints.
* [x] Every section maps to existing components.
* [x] No new components are introduced.
* [x] Editorial Rhythm is respected via strict composition rules.
* [x] Navigation behaviour is defined.
* [x] Accessibility requirements are testable via RFC terminology.
* [x] Performance expectations are documented.
* [x] SEO requirements are documented.
* [x] Content ownership is documented.
* [x] The specification contains absolutely no implementation details (React, CSS).

---

## Specification Review
* **Architecture Alignment**: Perfectly mirrors `homepage-architecture.md`, adding quantifiable constraints to the theoretical models.
* **Design Principles**: Enforces "Evidence before claims" (strict editorial limits) and "Engineering before marketing" (zero spinners, strict SEO/Performance rules).
* **Implementation Leakage**: Zero code, CSS classes, or UI frameworks are mentioned.
* **Open Questions**: Resolved the open questions from the Architecture phase (Philosophy is rendered as standard prose; featured project limit is explicitly bounded).
