# Documentation Standards

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Establish strict guidelines for technical writing tone, structural formatting, markdown grammar, and evidence-based copywriting to ensure every piece of project documentation and public case study reflects institutional engineering discipline, security rigor, and concise expression.

## 2. Objective Engineering Constraints
* **Evidence Obligation & Truth in Advertising**:
  * Every engineering project case study displayed within `/projects` or documented in `docs/` must contain verifiable references: explicit Git repository hyperlinks, accurate architectural database/state representations, and authentic technology stack identifications.
  * Inventing artificial usage statistics, exaggerated concurrent user counts, unverified high-availability claims, or fake testimonials is strictly illegal under project governance rules.
* **Markdown Architectural Syntax**:
  * All documentation files must format using GitHub Flavored Markdown (GFM).
  * Hyperlink declarations referencing source files or symbol definitions must utilize proper clickable file scheme paths (e.g., `[filename](file:///path/to/file)`) or line range targeting (`[ClassName](file:///path/to/file#L10-L20)`) to guarantee effortless peer inspection.
  * Headings within documentation files must follow sequential numbering (`## 1. Section`, `### 1.1 Sub-section`) and maintain strict heading level progression without omitting intermediate levels.
* **Date and Formatting Regularity**:
  * All dates entered into documentation records, changelogs, and RFC/ADR frontmatter must adhere strictly to the format: `DD-MM-YYYY` (e.g., `28-07-2026`).

## 3. Subjective Design Preferences & Anti-AI Copy Rules
* **Concise, Authoritative Tone**:
  * Write with direct, forward engineering clarity. Eliminate conversational introductory chatter ("Let's dive into...", "Here is a quick overview..."), subjective self-praise, and motivational concluding remarks.
  * Use precise systems architecture and security nomenclature (e.g., payload sanitization, state reconciliation, latency bounds, Content Security Policy, rate-limiting, edge delivery).
* **Absolute Ban on AI & Marketing Buzzwords**:
  * Automatically identify and delete repetitive marketing tropes and generative AI portfolio stereotypes from all public narratives and docs. Specifically forbidden phrases include:
    * *"Crafting digital experiences"*
    * *"Building the future"*
    * *"Passionate about innovation"*
    * *"Unleashing synergy"*
    * *"Pixel-perfect wizardry"*
    * Empty adjectives lacking technical metrics (e.g., "blazing-fast", "next-gen", "ultra-powerful", "seamless revolutionary UI"). Replace descriptive adjectives with quantified performance proof (e.g., replace "blazing-fast" with "LCP measured at 420ms via Vercel edge deployment").

## 4. Acceptance Criteria
* Zero occurrences of forbidden marketing or generative AI buzzwords detected during code and copywriting audits.
* Flawless syntactic compliance with `DD-MM-YYYY` date formatting and clickable file link structures across `docs/` archives.
