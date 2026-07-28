# Milestone 3: Integrated Background and Direct Contact Links (Phase 2 / Phase 4)

**Status**: Pending Sign-Off  
**Date**: 28-07-2026  

## 1. Objective
Decommission legacy client SPA patterns by removing the interactive "About Me" modal overlay (`AboutModal.tsx`) and complex third-party CAPTCHA web form (`Contact.tsx`), replacing them with an integrated static engineering background section and secure, direct semantic contact hyperlinks on the root page.

## 2. Deliverables
* Integrated static biographical Background section rendered directly on the root landing page (`src/app/page.tsx`), providing indexable, linkable engineering narrative copy without modal dialog obfuscation.
* Minimalist Direct Contact list component presenting high-contrast semantic hyperlinks for professional communication: pre-formatted `mailto:` Email link, verified GitHub profile anchor, and LinkedIn network connection.
* Complete removal of external third-party form handling script installations (`@hcaptcha/react-hcaptcha` and Web3Forms ingestion parameters) from Next.js bundle dependencies and source codes.
* Enforcement of strict security hyperlinking syntax (`rel="noopener noreferrer"`, `target="_blank"`) across all external engineering social profile links.

## 3. Dependencies
* Formal review approval and sign-off of `milestone-2-editorial-shell-and-navigation.md`.

## 4. Risks
* Eliminating interactive CAPTCHA validation and substituting explicit `mailto:` coordinates may slightly increase direct email address harvesting exposure; mitigated by presenting clean semantic markup over complex third-party data tracking scripts.
* Copy migration from legacy modal text must avoid conversational filler and marketing tropes, requiring careful editorial condensation into professional systems nomenclature.

## 5. Acceptance Criteria
* Zero reliance on `"use client"` directives for rendering biographical narratives or professional contact communication mechanisms.
* Successful removal of CAPTCHA libraries from project package definitions confirmed via build analysis and lockfile inspection.
* Seamless keyboard navigation and screen-reader accessibility verification confirming zero modal focus trapping complications or hidden document fragments.

## 6. Estimated Review Required
* **Review Level**: Technical Writer & Security Lead Review.
* **Estimated Review Burden**: 20 to 30 minutes to audit pruned copy tone, confirm external link security headers, and verify clean server build compilation.

---
*No implementation may begin until this milestone has been explicitly approved.*
