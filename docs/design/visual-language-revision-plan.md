# Visual Language Revision Plan

**Status**: Planning Document  
**Version**: 1.1 (Final Review Pass)  

## Executive Summary
This document provides a comprehensive revision plan to reconcile the existing Figma Visual Language drafts with the portfolio’s newly established engineering-first design philosophy. The current drafts demonstrate a strong foundational minimalist aesthetic, but they require structural realignment to enforce our core principles: distinguishing between available variants and common usage, documenting design judgement over UI encouragement, and establishing strict token architecture and editorial composition rules.

## Overall Assessment
The existing Figma drafts are highly restrained and visually clean. Moving forward, the design system must shift entirely from a "UI Kit" mindset to a "Technical Publication" mindset, where every component exists solely to serve high-density, low-cognitive-load engineering content.

## Global Recommendations
1. **Establish a Three-Layer Rhythm Architecture**: Rather than merging typography and spacing, we will maintain them as distinct token systems (Typography defines the type system, Spacing defines reusable tokens) and introduce a third layer, "Editorial Rhythm", which defines how they combine to create consistent reading flow.
2. **Document Design Judgement**: Distinguish between what is "available" and what is "preferred." Components that solve legitimate hierarchy problems (e.g., Secondary buttons, Minimal Bordered Cards) remain available but are classified as rare or secondary compared to default whitespace and link paradigms.
3. **Elevate Accessibility to Architectural Status**: The current accessibility draft reads like a compliance checklist (contrast, touch targets). It must be expanded into a structural philosophy covering screen reader flow, landmark navigation, and cognitive accessibility.

---

## Review by Visual Language Page

### 00 — Design Principles (New Recommendation)
* **Current Strengths**: N/A (New Page)
* **Required Changes**: Must become the philosophical foundation of the entire design system.
* **Recommended Additions**: Document core principles conceptually rather than visually: Typography before colour, Hierarchy before decoration, Whitespace before surfaces, Borders before shadows, Content before components, Evidence before claims, Engineering before marketing, Accessibility before aesthetics, Deletion before addition, Consistency before novelty, Design systems before pages.
* **Implementation Impact**: High. Sets the standard for every subsequent decision.
* **Priority**: Critical

### 01 — Typography
* **Current Strengths**: Establishes a disciplined dual-font system (Sans for prose, Mono for technical elements). Acknowledges reading width (measure) and line-height constraints.
* **Required Changes**: Clarify that Typography defines the raw type system and token scales. The arbitrary line-heights ("Tight", "Comfortable", "Relaxed") must be replaced with strict modular multipliers tied to the baseline grid. 
* **Recommended Additions**: Define specific heading scale mapping to the structural `h1-h6` semantic hierarchy.
* **Potential Simplifications**: Remove arbitrary marketing display sizes.
* **Implementation Impact**: High. Dictates the foundational font metrics.
* **Priority**: Critical

### 02 — Spacing Scale
* **Current Strengths**: Utilizes a logical 8-point baseline grid system (`space-xs` through `space-5xl`).
* **Required Changes**: Clarify that Spacing defines reusable spacing tokens, which will later be consumed by Editorial Rhythm.
* **Recommended Additions**: None directly, defer to Editorial Rhythm for context.
* **Potential Simplifications**: Condense the 10-step scale if intermediate values cause inconsistent application. 
* **Implementation Impact**: High.
* **Priority**: Critical

### 03 — Colour Tokens
* **Current Strengths**: Excellent adherence to "Semantic colours only" and a restrained, almost monochromatic palette with a single accent.
* **Required Changes**: Ensure contrast pairings target WCAG AAA for text where possible, not just AA.
* **Implementation Impact**: Medium. CSS variable mapping.
* **Priority**: High

### 04 — Border & Radius
* **Current Strengths**: Successfully applies "Borders before shadows."
* **Required Changes**: The 12px radius ("Focus states, emphasis") contradicts our structural, technical journal aesthetic. It leans too far into modern app UI.
* **Recommended Additions**: Define strict usage rules for when a border is permitted.
* **Potential Simplifications**: Reduce radius scale to a maximum of `6px` or `4px` to maintain a sharp, industrial feel. 
* **Implementation Impact**: Low. Simple token adjustment.
* **Priority**: Medium

### 05 — Buttons
* **Current Strengths**: Clear state definitions (Normal, Hover, Focus, Disabled).
* **Required Changes**: Document the design philosophy distinguishing between "available variants" and "common usage." Expected usage should be: Link → default, Primary → important actions, Secondary → rare supporting actions.
* **Recommended Additions**: Explicitly note that Secondary buttons remain available because they solve legitimate hierarchy problems, even if used infrequently.
* **Potential Simplifications**: Remove the "Ghost" variant unless a future requirement explicitly justifies its existence.
* **Implementation Impact**: Medium.
* **Priority**: High

### 06 — Links
* **Current Strengths**: Underline-based styles ensure color independence for accessibility. Excellent focus state offset.
* **Required Changes**: None to the visual design.
* **Implementation Impact**: Low.
* **Priority**: Medium

### 07 — Dividers
* **Current Strengths**: Acknowledges that whitespace is a valid separation method.
* **Required Changes**: Simplify the page to establish a clear hierarchy of separation methods.
* **Recommended Additions**: Define the hierarchy: Preferred → Whitespace only, Secondary → Thin Divider. Everything else requires explicit justification.
* **Potential Simplifications**: Inset dividers and bordered sections should not be default recommendations.
* **Implementation Impact**: Medium. Simplifies layout composition rules.
* **Priority**: High

### 08 — Cards
* **Current Strengths**: Directly states "Cards are containers, not decoration."
* **Required Changes**: Reposition the page to document design judgement rather than to encourage cards. Emphasize that cards should only exist when they improve comprehension.
* **Recommended Additions**: Establish strict tiering: Preferred → No Card, Rare → Minimal Bordered Card, Avoid → Dense Card, Decorative containers, Marketing card layouts.
* **Potential Simplifications**: Remove "Dense Card".
* **Implementation Impact**: High. Prevents the portfolio from looking like a SaaS landing page.
* **Priority**: Critical

### 09 — Code Blocks
* **Current Strengths**: Clean presentation of syntax coloring and filenames.
* **Required Changes**: The "Dark - Terminal" variant explicitly violates our instruction to "Avoid terminal aesthetics."
* **Potential Simplifications**: Delete "Dark - Terminal". Rely entirely on "Light - Editorial" or "Bordered - Default".
* **Implementation Impact**: Medium.
* **Priority**: High

### 10 — Tables
* **Current Strengths**: "No zebra striping — rely on alignment and spacing."
* **Priority**: Medium

### 11 — Architecture Diagram Style
* **Current Strengths**: Monochrome line style is highly readable and professional.
* **Priority**: Medium

### 12 — Project Metadata
* **Current Strengths**: Differentiates between Inline and Stacked formats.
* **Priority**: Medium

### 13 — Motion Guidelines
* **Current Strengths**: Defines exact duration tokens and a snappy easing curve.
* **Required Changes**: Must explicitly prohibit decorative motion. Motion exists only to communicate state, causality, and continuity.
* **Priority**: High

### 14 — Accessibility
* **Current Strengths**: Covers baseline compliance (Contrast, Focus Indicators, Touch Targets).
* **Required Changes**: Must be reframed as a foundational design principle rather than a compliance checklist.
* **Recommended Additions**: MUST be expanded to include: skip links, landmarks, heading hierarchy, keyboard flow, screen reader considerations, and reduced motion philosophy.
* **Implementation Impact**: Critical.
* **Priority**: Critical

---

## Updated Visual Language Roadmap

Based on this review, the Figma design system requires the addition of several foundational specification documents before implementation begins.

### Recommended New Pages
1. **00 — Design Principles**: The conceptual foundation page documenting our core tenets (e.g., Typography before colour, Hierarchy before decoration).
2. **Editorial Rhythm**: The bridge between Typography and Spacing. It will document how typography and spacing combine to create consistent reading flow (heading cadence, paragraph rhythm, metadata rhythm, etc.).
3. **Design Token Architecture**: Documents token layering (Primitive Tokens → Semantic Tokens → Component Tokens) and explains why components must consume semantic tokens rather than primitive values directly.
4. **Naming Conventions**: Defines token naming constraints (e.g., `space-md`, `surface-muted`, `text-secondary`, `border-default`), explicitly avoiding implementation-specific or colour-specific naming.
5. **Editorial Composition Rules**: Describes how content should be composed (e.g., Heading → Lead → Metadata → Divider → Body → Figure → Caption → Next Section). Clarifies that these are composition rules rather than rigid page templates.
6. **Composite Components**: Defines the exact spacing, borders, and typography mapping for complex composites.

---

## Final Approval Summary

### What changed during review
This final review pass refined the design system's governance approach. Instead of aggressively deleting elements like Secondary buttons, Cards, and Dividers, we repositioned them to distinguish between "available variants" and "common usage." We established a clear hierarchy of preference (e.g., Whitespace preferred over Dividers; No Card preferred over Minimal Card) and introduced foundational pages (Design Principles, Token Architecture, Naming Conventions, Editorial Rhythm, and Composition Rules) to codify exactly how typography and spacing interact.

### Why these changes improve long-term maintainability
By defining architectural intent rather than just a visual kit, we ensure the system remains resilient as content scales. Preserving rare variants (like Secondary buttons) prevents developers from hacking primary buttons when legitimate hierarchy problems arise. Enforcing Semantic Tokens and Naming Conventions guarantees that future theme adjustments (like dark/light mode tuning) won't break hardcoded implementation files.

### Why the design system is now ready to move into the next planning milestone
With the Component Inventory, Content Model, and Visual Language Revision Plan finalized, the theoretical foundation of the portfolio is completely sound. The strict separation of content entities, component responsibilities, and visual design judgements ensures that when we finally translate Figma into React code, we will be building a predictable, high-performance technical journal rather than an unstructured marketing site. We are now ready to advance.
