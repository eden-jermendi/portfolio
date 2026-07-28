# ADR-0004: Self-Hosted Typography Strategy

**Status**: Accepted  
**Date**: 28-07-2026  

## 1. Status
Accepted

## 2. Context
Typography is the paramount vehicle for communicating engineering judgement, technical precision, and structural hierarchy in a minimal, dark-mode first design system. However, traditional external font delivery mechanisms (such as linking directly to remote stylesheet CDNs or importing runtime dynamic font scripts) introduce critical engineering vulnerabilities: unpredictable external network lookup latencies, third-party user privacy leakage, text rendering flashes (FOUT/FOIT), and devastating Cumulative Layout Shift (CLS) regressions when replacement fonts load after initial page rendering. To meet our strict zero layout shift budget (CLS < 0.01) and enforce secure, self-contained deployment builds, typographic assets must load deterministically from domain-local static infrastructure.

## 3. Decision
We adopt the native `next/font` asset optimization architecture as the exclusive mechanism for loading, variable subsetting, and self-hosting variable font files. We select a geometric sans-serif family (`Manrope`) as the canonical editorial font for biographical narratives and layout structures, paired strictly with a variable monospace typeface (`IBM Plex Mono`) for technical architectural metadata, data schemas, code snippets, and execution coordinates. All external third-party font network connections or style sheet imports are banned.

## 4. Consequences
* **Positive Engineering Consequences**:
  * Zero Cumulative Layout Shift (CLS) guaranteed via automated Next.js CSS fallback override sizing calculations (`size-adjust`) during initial rendering.
  * Exceptional asset performance and user privacy protection: variable font cuts are compressed, self-hosted, and served from identical origin domain edges without external DNS resolutions or third-party tracking connections.
  * Reduction of network payload through strict variable-weight font utilization rather than pulling multiple separate static weight files.
* **Negative Trade-offs and Limitations**:
  * Restricts typography selection strictly to Google font registries supported by `next/font/google` or local variable font files packaged directly within repository source folders.
  * Changing core typography definitions requires triggering automated application rebuilds and CI deployments rather than editing external dynamic style links.
* **Compliance Obligations**:
  * All font declarations must pass through `src/app/layout.tsx` variable bindings and apply cleanly via CSS custom property tokens (`--font-sans`, `--font-mono`) within global stylesheet resets.

## 5. Alternatives Considered
* **External CDN Style Linking (e.g., Google Fonts HTML `<link>` injection)**: Insert classic font network links inside page document header meta tags. *Reason for Rejection*: Unacceptable rendering latencies, external network dependency risks, privacy exposure, and inevitable layout shifting during stylesheet hydration.
* **Manual Local Font Asset Bundling**: Copy raw `.woff2` font binaries into `/public/fonts` and write manual `@font-face` stylesheet rules without layout shift override calculations. *Reason for Rejection*: Forfeits Next.js automated fallback font size normalization metrics, leaving the site vulnerable to layout shifts during network loading delays.
