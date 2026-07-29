# Testing Strategy

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Define the quality assurance philosophy and the testing layers required to guarantee the portfolio remains robust, accessible, and performant.

---

## 1. Automated Testing (CI/CD)

### Build Validation
* **TypeScript Strict Mode**: Zero tolerance for `any` or implicit type errors. `tsc --noEmit` must pass.
* **Content Validation**: The build fails if local markdown violates the Zod schema defined in the Content Architecture. Bad data breaks the build, not the UI.
* **Linting**: Strict ESLint adherence, specifically utilizing `eslint-plugin-jsx-a11y` to catch semantic markup failures statically.

### Performance & Lighthouse Testing
* The CI pipeline MUST run Lighthouse audits on the static output.
* **Thresholds**: We demand perfect (100) scores in Performance, Accessibility, Best Practices, and SEO. Given the SSG rendering strategy and lack of heavy JS, anything less is an architectural failure.

---

## 2. Manual Testing (Review Gates)

### Keyboard Traversal
* A developer MUST physically disconnect their mouse and traverse the full user journey (Homepage → Projects Index → Project Detail) using only the `Tab`, `Shift+Tab`, `Space`, and `Enter` keys before any major feature merge.

### Visual Regression & Responsive Checking
* Testing MUST occur on physical mobile devices (or accurate simulators), not just browser dev-tool resizing. We must verify that wide Architecture Diagrams do not overflow the viewport ungracefully on narrow screens.

### Screen Reader Verification
* Crucial structural changes (like building the Skip Link or the Table of Contents) MUST be verified using VoiceOver (macOS) or NVDA (Windows) to ensure semantic landmarks are correctly announced.

---

## Validation per Milestone
* **Foundation Milestones**: Test type-checking, CSS token parsing.
* **Component Milestones**: Test a11y focus states and contrast.
* **Assembly Milestones**: Test routing performance, layout shift, and Lighthouse scores.
