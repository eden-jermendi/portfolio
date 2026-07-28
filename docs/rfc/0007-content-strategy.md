# RFC-0007: Content Strategy

**Status**: Draft  
**Author**: Technical Writer / Systems Engineer  
**Created Date**: 28-07-2026  

## 1. Purpose
Define the editorial tone, narrative architecture, documentation structure, and content pruning guidelines to ensure the portfolio communicates rigorous engineering capability, security awareness, and analytical depth without marketing fluff.

## 2. Context
Industry feedback repeatedly highlights that technical recruitment leads and senior engineers disregard portfolios filled with buzzwords, exaggerated marketing prose ("crafting digital experiences"), fake testimonials, and trivial project blurbs. To position the repository owner effectively for roles in Backend Engineering, Application Security, OSINT, and Systems Architecture, the prose must transition to concise, evidence-backed technical case studies.

## 3. Goals
* Deconstruct conversational filler and marketing copy into precise, factual engineering statements.
* Transform project displays from superficial summary cards into structured, verifiable technical engineering case studies.
* Decommit complex interactive contact form descriptions in favor of straightforward, frictionless professional communication links.

## 4. Non-Goals
* Inventing imaginary usage statistics, fictional user metrics, or exaggerated professional titles.
* Writing lengthy autobiographical essays or explaining elementary programming concepts (e.g., explaining what REST APIs or React states are).

## 5. Requirements

### Objective Engineering Constraints
* **Evidence Obligation**: Every highlighted project must explicitly state its concrete technology stack, architectural data models, operational trade-offs, and verifiable code repositories.
* **Semantic Structure**: All text content must map cleanly to accessible HTML headings (`<h1>`, `<h2>`, `<h3>`), paragraphs (`<p>`), lists (`<ul>`, `<ol>`), and code snippets (`<code>`).
* **Concise Length Bounds**: Project introductory abstracts must not exceed 2 paragraphs; technical breakdowns must utilize tabular bulleted metrics for scannable efficiency.

### Subjective Design Preferences
* Tone: Direct, concise, analytical, mature, and forward-to-the-point.
* Vocabulary: Employ precise systems and software engineering terminology (e.g., latency, state reconciliation, threat modeling, sanitization, complexity limits). Avoid empty adjectives and speculative startup buzzwords.

## 6. Trade-offs
* **Technical Rigor vs. Casual Approachability**: Focusing heavily on backend architecture, database schemas, and application security trade-offs may seem overly dense to non-technical general recruiters. However, it establishes immediate rapport and high trust with technical engineering hiring managers and principal systems leads.

## 7. Open Questions
1. For *Coursework Tracker*, *Weather Oracle*, and *Delete My Instagram Comments*, what explicit security sanitization or performance optimization details should be surfaced in the primary case study abstracts?
2. How should open-source contributions or cybersecurity learning path milestones (e.g., pentesting labs, OSINT analyses) be categorized within the projects and background narratives?

## 8. Acceptance Criteria
* Removal of existing conversational introductory tropes from site content data structures.
* Complete deployment of typed content schemas (`src/content/*.ts` or MDX structures) enforcing mandatory architecture and trade-off fields for every listed engineering project.
* Verification that zero marketing buzzwords or AI-template copy structures exist within public portfolio routes.

## 9. Future Work
* Implementation of the engineering project case study routing structure in Milestone 4.
* Periodic editorial review of biographical text to match evolving career milestones.

## 10. References
* `docs/CONSTITUTION.md`
* `docs/ard/0005-content-model.md`
* `docs/standards/documentation-standards.md`
