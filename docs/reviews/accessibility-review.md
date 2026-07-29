# Accessibility Review Template

## Review Metadata
* **Review Date**: DD-MM-YYYY
* **Reviewer**: [Name / Technical Role]
* **Target Milestone / Branch**: [e.g., `milestone-2` / `feat/skip-link-nav`]
* **Approval Status**: `[Approved | Rejected | Revision Required]`

---

## 1. Summary
[Provide an evidence-based diagnostic evaluation of WCAG 2.2 AA and targeted AAA compliance, detailing assistive technology navigation behavior, visible focus indicators, and heading hierarchy verification.]

## 2. Strengths
* **Keyboard Navigation**: [Document verified logical Tab sequence, skip-link effectiveness, and unobstructed visible focus indicators.]
* **Semantic HTML5 Outline**: [Document strict landmark integration (`<main>`, `<nav>`, `<article>`) and sequential heading numbers.]

## 3. Weaknesses
* [Identify low-contrast text boundaries, suppressed focus styles (`outline: none`), interactive divs lacking keyboard event mappings, or missing reduced-motion overrides.]

## 4. Risks
* [Document potential screen-reader parsing ambiguities, focus trapping within complex responsive menu structures, or contrast degradation under bright ambient viewing environments.]

## 5. Recommendations
* [Recommend native HTML structural substitutions, contrast adjustments, or descriptive ARIA labeling improvements.]

## 6. Required Changes
* [ ] **Mandatory Blocking Item 1**: [Explicit accessibility remediation required before sign-off.]
* [ ] **Mandatory Blocking Item 2**: [Explicit accessibility remediation required before sign-off.]
