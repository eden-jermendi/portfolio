# 0004: Information Architecture Review and Critique

**Effective Date**: 28-07-2026  
**Status**: Critical Architectural Analysis & IA Replacement Proposal  

## 1. Executive Summary & IA Critique
A rigorous engineering evaluation of the existing legacy portfolio repository reveals severe Information Architecture (IA) design flaws typical of entry-level single-page applications (SPAs). Rather than structuring information according to predictable, indexable document hierarchies, the legacy SPA fragments technical content across disconnected UX mechanics:

1. **The Modal Trap (`AboutModal.tsx`)**: In the legacy client, clicking "About Me" triggers a floating JavaScript modal overlay. This breaks native browser capabilities: biographical narratives cannot be bookmarked via unique URLs, search engine indexing robots cannot scrape modal states, browser back-button presses accidentally dismiss the entire application view rather than navigating history, and focus trap management frequently breaks under assistive screen-reader navigation.
2. **Superficial Card Summaries**: Project listings render as generic display cards that provide a brief marketing description and force visiting engineering evaluators to leave the site entirely via outgoing raw GitHub repository hyperlinks to gauge structural competence.
3. **Third-Party Script Obstacles**: Outreach communication requires passing through an complex CAPTCHA verification web form script (`Contact.tsx`), which introduces unnecessary client JavaScript network overhead, privacy tracking risks, and conversion friction for visiting engineering hiring leads.

To communicate systems maturity in Backend Engineering, Application Security, OSINT, and Architectural Design, we must redesign our IA into a clean, predictable, statically indexable file-system hierarchy.

## 2. Proposed Architectural Route Hierarchy
We propose replacing the reactive SPA pattern with a streamlined Next.js App Router routing matrix that exposes every technical case study and biographical background statement as first-class, SEO-indexed, URL-accessible documents.

```
Domain Canonical Root ( e.g., https://eden-portfolio.vercel.app )
│
├── / (Root Landing & Overview Architecture)
│   ├── [Skip-to-Content Anchor] -> #main-content (A11y Initial Focus Target)
│   ├── [Site Header / Navigation] -> Jump links (#work, #background, #contact)
│   ├── [Section: Hero Introduction] -> Concise Systems, Security & Backend Positioning
│   ├── [Section: Engineering Case Studies Index] (#work) -> Summarized project listings
│   ├── [Section: Integrated Background Narrative] (#background) -> Direct editorial biography
│   └── [Section: Direct Secure Contact Coordinates] (#contact) -> Mailto, GitHub & LinkedIn links
│
├── /projects/[slug] (Dedicated Static Technical Case Study Routes)
│   ├── /projects/coursework-tracker (Typed Case Study Document)
│   ├── /projects/weather-oracle (Typed Case Study Document)
│   └── /projects/delete-my-instagram-comments (Typed Case Study Document)
│
├── /sitemap.xml (Automated App Router XML Index Generation)
└── /robots.txt (Automated Search Engine Crawler Governance)
```

## 3. Detailed Structural Improvements & Justification

| Architectural Component | Legacy IA Behavior | Proposed IA Replacement | Technical & Engineering Justification |
| :--- | :--- | :--- | :--- |
| **Biographical Background ("About")** | Rendered inside an interactive floating JavaScript modal dialog (`<AboutModal />`). | Integrated as a static editorial section (`#background`) directly on the root landing page route. | Eliminates `"use client"` state tracking, enables direct URL deep-linking and bookmarking, guarantees flawless keyboard sequencing without fragile modal focus traps, and ensures optimal Search Engine Indexing. |
| **Project Presentation** | Flat marketing visual summary cards with direct exit links to raw external GitHub code repos. | Two-tiered presentation: streamlined listing summaries on root (`#work`) linking directly to dedicated static case study routes (`/projects/[slug]`). | Allows senior architecture reviewers to evaluate deep technical data schemas, security threat modeling, and performance profiles directly inside a readable editorial environment before executing outbound repository inspections. |
| **Outreach & Communication** | Interactive client web form requiring third-party `@hcaptcha/react-hcaptcha` scripts and remote POST APIs. | High-contrast Direct Contact section (`#contact`) exposing explicit semantic `mailto:`, GitHub, and LinkedIn anchors with strict security headers (`rel="noopener noreferrer"`). | Strips unnecessary client script bundles and CAPTCHA dependencies, removes user tracking vulnerabilities, and emulates direct professional communication protocols utilized by seasoned engineers. |
| **Internal Page Navigation** | Reactive JS state switches and onClick handler event wrappers. | Native semantic HTML5 anchor targets (`<a href="#work">`) paired with zero-runtime CSS smooth scrolling and clear heading landmarks. | Zero JavaScript execution required for page traversal; ensures perfect assistive technology screen-reader jump capability and instant viewport orientation. |

## 4. Acceptance Criteria for Future IA Execution
* Complete architectural deletion of floating modal dialog components (`AboutModal`) during Phase 2 layout foundation.
* Confirmation via dynamic static build parameters (`generateStaticParams`) that every configured project slug generates an independent, canonical static HTML file output in production compilation bundles.
