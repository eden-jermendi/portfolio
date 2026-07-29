# RFC-0008: Review Process

**Status**: Draft  
**Author**: Engineering Manager  
**Created Date**: 28-07-2026  

## 1. Purpose
Establish the code review framework, peer assessment criteria, and structural PR audit requirements necessary to enforce engineering quality, architectural conformity, and adherence to the project constitution.

## 2. Context
To maintain long-term repository integrity and treat this portfolio as a production engineering codebase, changes must not bypass formal verification. A deliberate review process prevents architecture erosion, style drift, unnecessary dependency additions, and accessibility regressions.

## 3. Goals
* Create a rigorous, objective code review evaluation scorecard derived directly from `docs/CONSTITUTION.md`.
* Ensure that architectural decisions are captured in ADRs prior to implementing destructive or foundational codebase alterations.
* Guarantee that code diffs remain bounded, focused, and directly attributable to an approved roadmap milestone.

## 4. Non-Goals
* Engaging in nitpicking over formatting that can be handled automatically via linting and tooling.
* Introducing multi-tier corporate review approval chains for single-engineer implementation workflows; focus on disciplined technical checklist verification.

## 5. Requirements

### Objective Engineering Constraints
Reviewers must verify that every PR complies with the following strict check conditions before merging:
* **Scope Drift**: Does the diff introduce unapproved redesigns, speculative UI animations, or architectural additions outside the governing Milestone objective? If yes, reject immediately.
* **Server-First Boundary**: Is `"use client"` introduced? If yes, reviewer must verify that browser DOM state or event listener requirements make server rendering impossible.
* **Type Assertions**: Confirm zero occurrences of `any`, `unknown` casting without type validation, or `@ts-ignore` assertions in the diff.
* **Testing & Build Logs**: Confirm inclusion of successful local compilation logs (`npm run build`, `npm run typecheck`, `npm run lint`) within the review artifact.
* **Accessibility Checklist**: Verify inclusion of semantic markup and validation of visible focus styles and contrast metrics.

### Subjective Design Preferences
* Ensure editorial spacing rhythm, typography token adherence, and avoidance of decorative visual cruft align with design guidelines.

## 6. Trade-offs
* **Formal Review Rigor vs. Immediate Execution**: Requiring structured review documentation and build verification for every milestone phase slows execution turnover. However, this discipline eliminates regression bugs and reinforces the engineering portfolio's core thesis of professional maturity.

## 7. Open Questions
1. Should pull request description templates (`.github/PULL_REQUEST_TEMPLATE.md`) be introduced into the repository root to automatically generate the mandatory review verification checklist?
2. What protocol should govern emergency hotfixes (e.g., correcting a broken professional email link) versus standard structural roadmap milestones?

## 8. Acceptance Criteria
* Unreserved implementation of review verification scorecards during execution of Roadmap Milestones 1 through 6.
* Full traceability between PR description artifacts and governing RFC/ADR reference numbering.

## 9. Future Work
* Codification of specific review checkpoints within `docs/standards/review-standards.md`.

## 10. References
* `docs/CONSTITUTION.md`
* `docs/CONTRIBUTING.md`
* `docs/standards/review-standards.md`
