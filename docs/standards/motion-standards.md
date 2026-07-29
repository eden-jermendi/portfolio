# Motion Standards and Evaluation Criteria

**Effective Date**: 28-07-2026  
**Status**: Mandatory Living Engineering Standard  

## 1. Purpose and Architectural Philosophy
Interactive motion serves a strict functional objective in software systems: orienting the user during interface state transformations, confirming input execution, and reinforcing semantic layout relationships. Rather than dogmatically banning third-party animation libraries or enforcing rigid styling ideologies, this standard establishes objective engineering evaluation criteria for selecting motion approaches based on documented trade-offs.

## 2. Evidence-Driven Motion Selection Criteria
Whenever interactive animation or layout transition behavior is proposed for the portfolio, the contributing engineer must justify the chosen technology (e.g., native CSS transitions, CSS View Transitions API, lightweight DOM utilities, or JavaScript animation runtimes) against the following objective evaluation rubric:

| Evaluation Criterion | Engineering Target & Evaluation Requirement | Trade-Off Review Protocol |
| :--- | :--- | :--- |
| **1. Architectural Complexity** | Does the motion technique maintain declarative simplicity, or does it inject imperative lifecycle hooks, DOM ref mutations, and reactive state machine complexity? | Reject solutions that require massive wrapper scaffolding for localized visual transformations. |
| **2. Bundle Size Impact** | How many kilobytes (gzipped) does the motion library or animation module add to initial client JavaScript execution payloads? | Any library exceeding `5 KB` gzipped must demonstrate function efficiency unavailable via native CSS. |
| **3. Maintainability** | Is the animation logic self-documenting and isolated within centralized tokens, or is it scattered across component logic files? | Prefer styles that leverage shared custom CSS variables over hardcoded JavaScript physics strings. |
| **4. Accessibility (a11y)** | Does the solution natively support operating system accessibility preferences (`prefers-reduced-motion: reduce`) with automated zero-duration fallbacks? | Any technique failing to drop animation duration to zero under reduced-motion settings is immediately rejected. |
| **5. Browser Support** | Can the motion execute reliably across target desktop and mobile browsers, or does it rely on experimental APIs requiring heavy polyfills? | Ensure functional degradation: if advanced motion APIs fail, the UI must transition immediately without layout breaking. |
| **6. Developer Experience** | Does authoring the motion require mastering proprietary syntax, or does it conform to standard CSS and browser web standards? | Favor approaches that minimize onboarding friction and reduce compiler tooling complexity. |

## 3. Objective Technical Execution Parameters
* **GPU Hardware Compositing Exclusivity**:
  * Programmatic animations and transition effects must target GPU-accelerated composite properties exclusively: `transform`, `opacity`, `outline-offset`, `border-color`, and `background-color`.
  * Animating CPU-bound document layout calculation properties (`width`, `height`, `top`, `bottom`, `left`, `right`, `margin`, `padding`) is prohibited due to main-thread rendering reflow penalties and potential framerate dropping.
* **Duration Threshold Boundaries**:
  * State transformations and micro-interactions (focus indicator appearance, hover shifts, interactive button state feedback): target timing between `80ms and 150ms`.
  * Macro interface or document section transitions: target maximum timing ceiling of `240ms`.
  * Decorative perpetual looping animations, floating idle background shapes, and simulated typing animation engines are explicitly discouraged to conserve host CPU/GPU compute power.
* **Universal Reduced-Motion System Override**:
  * All global stylesheet resets or module definitions must incorporate the mandatory OS accessibility override rule:
    ```css
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
    ```

## 4. Acceptance Criteria
* Formal evaluation of any introduced motion tool against the six selection criteria during structural design peer reviews.
* Zero occurrences of CPU-bound layout property transitions across production compiled stylesheets.
* Verified zero-duration transition execution under simulated `@media (prefers-reduced-motion: reduce)` tests in Chrome DevTools.
