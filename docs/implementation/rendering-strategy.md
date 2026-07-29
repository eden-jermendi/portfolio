# Rendering Strategy

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Document the architectural rendering philosophy for the portfolio. The goal is maximum reliability, minimum latency, and zero unnecessary client-side compute overhead.

---

## Rendering Paradigm: Static Site Generation (SSG)

The portfolio will be built entirely as a statically generated application.
* **Why**: Technical journals and engineering portfolios contain highly cacheable, universally accessible content. There is absolutely no requirement for per-request database querying or user-specific session rendering.

### Build-Time Execution
* During `next build`, the Next.js compilation process will traverse the `src/content/` directory.
* Every Project and Article will be parsed, and their respective HTML files will be baked into the final build artifact (`.next/server/app/`).

### Revalidation Philosophy
* **Manual Revalidation**: Content updates occur via Git commits. The application does not rely on Incremental Static Regeneration (ISR) or time-based revalidation, as content mutation is bound to code deployment.

---

## Client-Side Philosophy: Zero Hydration by Default

### Hydration Cost
Hydration is the process of attaching event listeners to server-rendered HTML. It is computationally expensive and delays Time to Interactive (TTI).

### Mitigation Strategy
* By strictly isolating interactive elements (e.g., Theme Toggles, Copy to Clipboard buttons) as the *only* Client Components, the vast majority of the portfolio (thousands of words, tables, images, and layout nodes) will bypass React hydration entirely.
* The browser receives pure, static HTML that parses and paints instantly.

---

## Performance Philosophy

1. **Pre-fetching**: Next.js `<Link>` components will inherently pre-fetch statically generated routes when they enter the viewport, making navigation feel instantaneous.
2. **Layout Shift (CLS)**: Because no data is fetched on the client, and all layout components (`Container`, `Section`) are statically rendered with explicit constraints, the layout shift metric will mathematically remain at `0.0`.
3. **Font Optimization**: Fonts will be embedded via `next/font` at build time to prevent Flash of Unstyled Text (FOUT) and eliminate secondary network requests for typography assets.
