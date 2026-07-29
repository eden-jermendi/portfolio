# Performance Review Template

## Review Metadata
* **Review Date**: DD-MM-YYYY
* **Reviewer**: [Name / Technical Role]
* **Target Milestone / Branch**: [e.g., `milestone-5` / `feat/image-optimization`]
* **Approval Status**: `[Approved | Rejected | Revision Required]`

---

## 1. Summary
[Provide a rigorous analysis of empirical profiling metrics, including compiled bundle sizes, Core Web Vitals diagnostic logs, font loading stability, and static file compilation behavior.]

## 2. Strengths
* **Zero Layout Shift (CLS)**: [Document empirical verification of zero Cumulative Layout Shift during asset decoding and font hydration.]
* **Lightweight Bundle Execution**: [Document JavaScript client bundle measurements comfortably beneath established empirical targets.]

## 3. Weaknesses
* [Identify unmonitored script dependencies, oversized raw bitmap image assets, CSS layout property animations causing CPU reflow thrashing, or redundant styling payloads.]

## 4. Risks
* [Document network latency degradation on cellular 3G/4G connections, elevated memory retention during long reading sessions, or Vercel edge function timeouts.]

## 5. Recommendations
* [Propose specific asset optimization strategies, code-splitting boundary adjustments, or CSS custom property optimizations to streamline page rendering.]

## 6. Required Changes
* [ ] **Mandatory Blocking Item 1**: [Explicit performance optimization required before approval.]
* [ ] **Mandatory Blocking Item 2**: [Explicit performance optimization required before approval.]
