# Governance and Documentation Architecture

**Effective Date**: 28-07-2026  
**Status**: Active / Enforce  

## 1. Purpose
This directory contains the immutable engineering documentation and decision-making framework governing this software portfolio. It establishes architectural requirements, technical standards, and institutional reasoning to ensure long-term maintainability, rigorous security practices, and systemic consistency. 

Every technical, architectural, and visual decision must derive from documented engineering rationale rather than ad-hoc developer preference or conversational defaults.

## 2. Document Hierarchy and Relationships
Documentation operates under a strict precedence hierarchy. When guidelines appear to conflict, higher-level documents override lower-level specifications:

1. **CONSTITUTION (`CONSTITUTION.md`)**: The foundational source of truth. Defines non-negotiable architectural principles, ethical boundaries, accessibility floors, and definition of engineering taste.
2. **Architecture Reference Documents (`ard/`)**: Structural engineering blueprints. Specify core framework responsibilities, system interfaces, security boundaries, and runtime behaviors.
3. **Request for Comments (`rfc/`)**: Exploratory and structural proposals for systemic changes, major refactoring, or new engineering deliverables.
4. **Architecture Decision Records (`adr/`)**: Historical records of immutable technical choices, trade-off evaluations, and architectural trade-offs using Michael Nygard's format.
5. **Engineering Standards (`standards/`)**: Living, enforceable, metric-based technical requirements governing code formatting, WCAG verification, performance thresholds, and git workflows.
6. **Implementation Roadmap (`roadmap/`)**: Sequential, dependency-tracked execution milestones required for staging, verification, and production cutover.

```
+-------------------------------------------------------------+
|                     CONSTITUTION.md                         |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|              ARD (Architecture Reference Docs)               |
+-------------------------------------------------------------+
               |                               |
               v                               v
+------------------------------+   +--------------------------+
|  RFC (Proposals & Scopes)    |   |  ADR (Decision History)  |
+------------------------------+   +--------------------------+
               |                               |
               +---------------+---------------+
                               |
                               v
+-------------------------------------------------------------+
|            STANDARDS (Enforceable Requirements)             |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|         ROADMAP (Phased Implementation Milestones)          |
+-------------------------------------------------------------+
```

## 3. Workflow and Document Lifecycle
No architectural change, structural refactor, or dependency addition may occur without completing the documentation lifecycle:

1. **Proposal**: Submit an RFC (`rfc/`) outlining Context, Goals, Non-Goals, Objective Engineering Constraints, Subjective Design Preferences, and Trade-offs.
2. **Evaluation & Discussion**: Technical architecture, UX, security, and accessibility impacts are critiqued against `CONSTITUTION.md` and active ARDs.
3. **Formal Decision**: Upon accepting an RFC option, generate an Architecture Decision Record (`adr/`) documenting the context, decision, consequences, and rejected alternatives.
4. **Specification & Standardization**: Update relevant ARD schemas or enforceable standard limits in `standards/` before beginning implementation.
5. **Execution**: Staged execution via an approved milestone in `roadmap/`.

## 4. Naming and Numbering Conventions
* **File Syntax**: All documents must use lowercase ASCII characters, digits, hyphens, and the `.md` extension (`kebab-case.md`).
* **Numbering Scheme**: Numbered documents (`rfc/`, `ard/`, `adr/`, `roadmap/`) must utilize a four-digit zero-padded index (`0000` through `9999`) followed by a hyphen and descriptive title.
  * Example: `rfc/0001-portfolio-rewrite.md`
  * Example: `adr/0004-typography.md`
* **Immutability**: Once an ADR is accepted and published, its historical context and decision are immutable. If superseded, a new ADR must be generated referencing the original document ID.

## 5. Review Workflow
Documentation pull requests and technical proposals must be verified against:
1. **Engineering Rigor**: Are objective constraints clearly decoupled from subjective preferences?
2. **Concise Language**: Are paragraphs free of filler, speculative hype, marketing tropes, and non-technical abstractions?
3. **Traceability**: Does the document properly cite dependencies, prior ADRs, and active standards?
