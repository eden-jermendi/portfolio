# 0005: Atomic Component Inventory & Rendering Taxonomy

**Effective Date**: 28-07-2026  
**Status**: Discussion Drafts (Pre-Implementation Component Taxonomy)  

## 1. Purpose and Methodology
To uphold Server-First architectural principles (`CONSTITUTION.md`), we must categorize and map every structural UI component required by Concept 2 (*Editorial Minimalist Canvas*) prior to implementing React markup code. This inventory classifies components into five atomic structural layers—**Primitive**, **Layout**, **Composite**, **Feature**, and **Page**—and dictates explicit client versus server rendering execution boundaries. 

By default, every component must render entirely as a React Server Component (RSC). The `"use client"` directive is restricted strictly to leaf primitives demonstrating an unavoidable operational need for browser DOM APIs, window event listening, or interactive focus mechanics.

## 2. Component Inventory Taxonomy Matrix

| Component Identifier | Atomic Classification | Proposed Location (`src/components/`) | Default Execution Boundary | Justified Client Interactivity Requirements / Rationale |
| :--- | :--- | :--- | :--- | :--- |
| `SkipLink` | **Primitive** | `primitives/SkipLink.tsx` | **Server Component** | Static CSS focus-visible unmasking anchor target linking directly to `#main-content`. Requires zero client JS state. |
| `Typography` | **Primitive** | `primitives/Typography.tsx` | **Server Component** | Semantic heading and body text wrappers mapping directly to root design tokens (`--font-*`, `--leading-*`). |
| `Anchor` | **Primitive** | `primitives/Anchor.tsx` | **Server Component** | Defensive hyperlinking primitive automatically enforcing `rel="noopener noreferrer"` and visible keyboard outline focus styles. |
| `ThemeTokenReset` | **Primitive** | `primitives/ThemeTokenReset.tsx` | **Server Component** | Zero-runtime CSS custom property variable definition injection inside root global stylesheet structures. |
| `Container` | **Layout** | `layout/Container.tsx` | **Server Component** | Responsive horizontal bounding box utilizing `--container-max-width` and mandatory gutter padding metrics. |
| `ProseMeasure` | **Layout** | `layout/ProseMeasure.tsx` | **Server Component** | Specialized editorial narrative bounding wrapper restricting line measure strictly to `--container-max-measure` (68 chars). |
| `Section` | **Layout** | `layout/Section.tsx` | **Server Component** | Semantic HTML5 Section landmark wrapper applying systematic vertical spacing rhythm multiples (`--space-16` / `--space-24`). |
| `SiteHeader` | **Composite** | `composite/SiteHeader.tsx` | **Server Component** | Root navigation bar displaying professional nameplate branding and static jump anchor navigation links (`#work`, `#background`). |
| `SiteFooter` | **Composite** | `composite/SiteFooter.tsx` | **Server Component** | Root terminal footer exhibiting static metadata, compilation verification notes, and defensible external Git links. |
| `TechStackList` | **Composite** | `composite/TechStackList.tsx` | **Server Component** | Tabular monospaced specification grid enumerating Backend, Application Security, OSINT, and Infrastructure technology stacks. |
| `ProjectIndexCard` | **Composite** | `composite/ProjectIndexCard.tsx` | **Server Component** | Minimalist editorial project summary block rendered on the root index, utilizing `next/link` to route directly to `/projects/[slug]`. |
| `CopyCoordinateButton` | **Primitive / Client Leaf** | `primitives/CopyButton.tsx` | **Client Component (`"use client"`)** | **Justified Exception**: Requires browser Clipboard Web API execution (`navigator.clipboard.writeText`) to allow instantaneous one-click copying of professional email coordinates or PGP public security keys, accompanied by a brief transient state acknowledgment tag (< 150ms). |
| `HeroIntroduction` | **Feature** | `features/HeroIntroduction.tsx` | **Server Component** | Above-the-fold authoritative positioning layout uniting concise systems engineering copy with direct project discovery actions. |
| `BackgroundSection` | **Feature** | `features/BackgroundSection.tsx` | **Server Component** | Integrated root biographical narrative section replacing legacy modal dialog structures with indexable semantic prose. |
| `DirectContactSection` | **Feature** | `features/DirectContactSection.tsx` | **Server Component** | High-contrast outreach feature displaying secure direct email, verified GitHub repository, and LinkedIn network anchors. |
| `CaseStudyPresentation`| **Feature** | `features/CaseStudyPresentation.tsx` | **Server Component** | Exhaustive technical project document viewer displaying schema breakdowns, security considerations, and WCAG AA benchmarks. |
| `RootLayout` | **Page Shell** | `app/layout.tsx` | **Server Component** | Root HTML document layout housing self-hosted variable font definitions (`next/font`), skip link initial nodes, header, and footer. |
| `RootLandingPage` | **Page Route** | `app/page.tsx` | **Server Component** | Canonical root view uniting Hero, Project Index, Integrated Background, and Direct Contact feature components into a single zero-runtime stream. |
| `ProjectCaseStudyPage` | **Page Route** | `app/projects/[slug]/page.tsx` | **Server Component** | Statically generated dynamic slug route (`generateStaticParams`) rendering deep engineering case studies without database runtime queries. |

## 3. Summary of Server to Client Ratio
* **Total Cataloged Architectural Components**: 19 discrete structural units.
* **React Server Components (RSC)**: 18 components (94.7% of rendering architecture).
* **Client Runtime Components (`"use client"`)**: 1 justified micro-interactive primitive (`CopyCoordinateButton`, representing 5.3% of architectural catalog).

This strict component boundary mapping guarantees that primary document navigation and layout rendering execute with **zero JavaScript bundle parsing overhead**, preserving optimal Core Web Vitals (LCP < 800ms) and fulfilling our institutional engineering performance commitments.
