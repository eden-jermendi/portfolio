# ADR-0007: Privacy-Preserving Telemetry Strategy

**Status**: Proposed  
**Date**: 28-07-2026  

## 1. Status
Proposed

## 2. Context
Understanding visitor engagement, traffic distribution, and structural page usage is a legitimate operational requirement for engineering system managers. However, traditional third-party web analytics tracking platforms (such as Google Analytics, Hotjar, or advertising remarketing pixels) introduce significant architectural, performance, and privacy frictions: they deploy intrusive tracking scripts into client execution trees, harvest end-user behavioral metadata, trigger disruptive GDPR cookie consent overlay prompts, consume bandwidth, and introduce unpredictable third-party script initialization latency during initial page loading.

An engineer transitioning into Application Security, OSINT, and Backend Systems Architecture must demonstrate rigorous commitment to end-user privacy boundaries and network hygiene. At the same time, we must evaluate whether completely omitting traffic observation leaves system administration blind to server performance trends and geographic reach.

## 3. Decision (Proposed)
We propose adopting an absolute zero-cookie, zero-client-script telemetry policy for public portfolio routes. Under this proposal, no third-party tracking scripts, user session replay SDKs, or browser cookie analytics will be injected into application markup. Where basic traffic measurement is required by the repository owner, we propose implementing server-side edge access logging or zero-cookie edge analytics (such as Vercel Edge Web Analytics or server request parsing) that analyzes HTTP header metadata at the routing infrastructure layer without transmitting scripts or setting cookies on client browsers.

## 4. Consequences
* **Positive Engineering Consequences**:
  * Zero client bundle parsing overhead or network bandwidth consumption associated with telemetry gathering, preserving immaculate First Contentful Paint (FCP) Core Web Vitals.
  * Complete elimination of GDPR cookie consent dialogs, overlay banners, and intrusive legal opt-in workflows, maintaining a clean editorial UI experience.
  * Superior alignment with application security ethics: zero third-party tracking connections or browser profiling occur during visit executions.
* **Negative Trade-offs and Limitations**:
  * Inability to record detailed user interaction heatmaps, precise DOM click tracking, or individualized session navigation replay paths.
  * Restricts telemetry resolution to anonymized edge routing counts, generic geographic region metrics, and simple user-agent classification tables.

## 5. Alternatives Considered
* **Integrating GA4 with Interactive Consent Management Overlay**: Deploy Google Analytics scripts alongside an explicit GDPR consent acceptance modal dialog. *Reason for Current Deferral*: Violates minimalist UX goals, introduces heavy client script payloads, and contradicts systems privacy discipline.
* **Self-Hosting Dedicated Tracking Backend Services (Matomo / Plausible Sub-Server)**: Host an independent tracking collector server running alongside the portfolio. *Reason for Current Deferral*: Introduces unnecessary compute maintenance overhead and system complexity without providing proportional technical value to visiting recruitment leads or systems architects.
* **Total Omnipresent Abnegation (Zero Logs Anywhere)**: Refuse even server-side HTTP routing counters. *Reason for Current Deferral*: Denies repository administration essential diagnostic insight into routing volume, uptime verification, and potential automated probing patterns.

## 6. Open Uncertainty & Verification Plan
This decision remains `Proposed` pending verification of Vercel edge deployment operational constraints and zero-cookie logging parameter configurations during Phase 5 (Native Optimizations & SEO) evaluation.
