# Institutional Review Framework & Templates

**Effective Date**: 28-07-2026  
**Status**: Mandatory Quality Gating Protocol  

## 1. Purpose
This directory houses standardized evaluation templates utilized during formal technical reviews, architectural phase transitions, and milestone sign-offs. These templates guarantee that peer evaluations remain objective, evidence-based, thorough, and free from informal oversight.

## 2. Mandatory Review Rules
* Every completed milestone or major technical PR must submit completed review reports across the applicable domain specializations prior to merger.
* No architectural task may progress to active implementation code execution without achieving explicit `Approval Status: Approved` across the mandatory domain reviews.
* Reviewers must avoid subjective conversational impressions; every identified weakness or required change must cite an explicit rule from `docs/standards/`, `docs/ard/`, or `docs/CONSTITUTION.md`.
* All dates must adhere strictly to the format: `DD-MM-YYYY`.

## 3. Review Template Directory
* `architecture-review.md`: Evaluates systemic layout boundaries, client/server execution segregation, module dependencies, and structural scalability.
* `design-review.md`: Evaluates adherence to minimalist design restraint, zero-runtime styling execution, typographical hierarchy, and visual noise elimination.
* `accessibility-review.md`: Audits WCAG 2.2 AA/AAA compliance, semantic HTML5 structure, keyboard navigation flow, focus indicators, and reduced motion capabilities.
* `performance-review.md`: Measures real-world Core Web Vitals, JavaScript execution bundles, network asset compression, and structural runtime efficiency.
* `engineering-review.md`: Validates TypeScript strictness, syntax hygiene, dead code eradication, compilation integrity, and defensive programming standards.
* `content-review.md`: Audits technical copywriting for accuracy, evidence attribution, terminology discipline, and removal of AI or marketing buzzwords.
