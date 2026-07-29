# Homepage Architecture

**Status**: Planning Document  
**Version**: 1.0  

## Executive Summary
The Homepage serves as the root node of the portfolio's information architecture. Its primary purpose is to definitively answer one question: *"Why should this visitor continue exploring this portfolio?"* 

It achieves this by rejecting the tropes of startup landing pages and personal marketing sites. Instead, the Homepage acts as the front matter of a technical journal—calm, information-dense, and highly readable. Success is achieved when a visitor can parse the engineer's identity, technical philosophy, and competence within twenty seconds, without relying on decorative visuals or aggressive calls to action.

---

## Audience
The Homepage must serve multiple technical constituencies with varying time constraints:
* **Hiring Managers / Recruiters**: Seeking immediate confirmation of seniority, tech stack, and professional capability. They want to know *what* I build.
* **Engineering Managers / Technical Leads**: Evaluating architecture decisions, constraints, and system design. They want to know *how* I think and *why* my approach is different.
* **Fellow Developers / Open Source Contributors**: Looking for reusable knowledge, RFCs, and technical deep-dives. They want to read the code and the writing.

---

## Success Criteria
The architecture is successful if, within approximately twenty seconds, the visitor understands:
1. **Identity**: Who I am and my exact engineering discipline.
2. **Competence**: What I specialize in (proven via immediate, high-signal evidence).
3. **Routing**: Where to go next to read the deep technical case studies.
*(Crucially, this must be achieved without forcing the user to read every paragraph).*

---

## Information Hierarchy
The Homepage is structured as a linear, editorial document flowing from context to evidence.

1. **Nameplate & Introduction**
   * *Purpose*: Ground the reader immediately.
   * *Why it exists*: Answers "Who am I?" and "What do I build?"
   * *Reusable components*: Heading (H1), Lead Paragraph.
   * *Transition*: Tight vertical rhythm directly into the Philosophy.

2. **Professional Philosophy**
   * *Purpose*: Establish engineering differentiation.
   * *Why it exists*: Proves that I think deeply about systems, trade-offs, and maintainability (e.g., "Engineering before marketing").
   * *Reusable components*: Body Text.
   * *Transition*: Macro-whitespace (chapter break) into the evidence sections.

3. **Selected Systems Work**
   * *Purpose*: Provide undeniable proof of competence.
   * *Why it exists*: Translates the philosophy into shipped code.
   * *Reusable components*: Section Heading (H2), Project Preview Card.
   * *Transition*: Concludes with an inline link ("Read all case studies →") leading into macro-whitespace.

4. **Selected Writing / RFCs**
   * *Purpose*: Demonstrate technical communication and leadership.
   * *Why it exists*: Shows ability to document, argue, and synthesize complex systems.
   * *Reusable components*: Section Heading (H2), Metadata List, Body Text.
   * *Transition*: Flows naturally into the Footer.

---

## Section Specifications

### Nameplate & Introduction
* **Purpose**: Core identity.
* **Required content**: Name, precise engineering title, 1-2 sentence executive summary.
* **Components used**: `Heading (H1)`, `Lead Paragraph`.
* **Editorial composition**: Standard Header composition.
* **Responsive behaviour**: Fluid typography scaling to prevent awkward wrapping on mobile.

### Professional Philosophy
* **Purpose**: Establish constraints and mindset.
* **Required content**: 2-3 sentences max detailing approach to software (e.g., stability, documentation, deletion).
* **Components used**: `Body Text`.
* **Editorial composition**: Flows immediately after the Lead Paragraph as standard prose.
* **Dependencies**: Content Model (Site Configuration).

### Selected Systems Work
* **Purpose**: Showcase the 2-3 most architecturally significant projects.
* **Required content**: Section title, Project Previews (Title, Abstract, Tech Metadata).
* **Optional content**: Link to full `/projects` index.
* **Components used**: `Heading (H2)`, `Project Preview Card`, `Link`.
* **Accessibility**: Each preview must be semantically distinct (not a giant clickable div).

### Selected Writing
* **Purpose**: Highlight architectural writing.
* **Required content**: Section title, 2-3 recent/pinned articles (Title, Date, Topic).
* **Optional content**: Link to full `/writing` index.
* **Components used**: `Heading (H2)`, `Metadata List` (or minimalist preview).

---

## Navigation Behaviour
Navigation is entirely editorial and contextual.
* **Primary Navigation**: The Site Header provides global escape hatches (`Projects`, `Writing`, `About`) but remains visually quiet.
* **Internal Navigation**: There are no giant "Call to Action" buttons. Next steps are presented as semantic inline links (e.g., `View architecture case study →`) at the end of content blocks.
* **Cross-linking**: Mentioning a specific technology or methodology in the Philosophy section should logically cross-link to a relevant project or article.

---

## Content Strategy
* **Immediate (Above the fold)**: Name, title, philosophy, and the title of the strongest case study.
* **Deferred**: Exhaustive lists of every project ever built, full resume history, and education. These belong on `/projects` or `/about`.
* **Never**: Arbitrary skill progress bars (e.g., "JavaScript: 90%"), marketing jargon, headshots without context, or "Hello World" loader animations. Every word must justify its existence.

---

## Component Usage
The Homepage maps strictly to the approved Component Inventory. 
**No new components are required.** 
We will rely exclusively on:
* `Heading`
* `Lead Paragraph`
* `Body Text`
* `Project Preview Card`
* `Metadata List`
* `Link` (Inline and External)

*Justification*: By reusing the exact same components that render deep technical articles, the Homepage establishes the "Technical Journal" aesthetic immediately.

---

## Editorial Rhythm
The Homepage adheres strictly to the `docs/design/editorial-rhythm.md` specification:
* **Typography & Whitespace**: Macro-whitespace (e.g., `space-4xl`) is used to separate the Introduction, Systems Work, and Writing sections, acting as distinct chapters.
* **Composition**: Within the "Systems Work" section, the rhythm is tightened to group the Project Previews densely, allowing the hiring manager to scan the tech stack metadata rapidly.

---

## Accessibility Review
* **Heading Hierarchy**: The page contains exactly one `<h1>`. All subsequent sections ("Systems Work", "Writing") are `<h2>`. Project/Article titles within those sections are `<h3>`.
* **Landmarks**: The main content is wrapped in `<main>`, preceded by `<header>` and followed by `<footer>`.
* **Keyboard Flow**: A `Skip to main content` link is the first focusable element. The tab order flows logically through the inline links and project titles. Focus rings (`2px` outline) are strictly enforced.
* **Reduced Motion**: The Homepage requires zero decorative motion. Layout shifts and entry animations are prohibited.

---

## Risks
1. **Information Overload in Introduction**: Without visual decoration, there is a temptation to write too much text to "fill the space."
   * *Mitigation*: Strictly enforce a character limit on the Lead Paragraph and Philosophy sections.
2. **Lack of Visual Hierarchy**: Relying entirely on whitespace and typography risks the page looking like a plain text document.
   * *Mitigation*: Flawless execution of the *Editorial Rhythm* (specifically the contrast in scale between H1 and Body, and macro vs micro whitespace).

---

## Open Questions
1. Should the "Professional Philosophy" section be visually delineated (e.g., slightly indented or utilizing the `Muted` body text variant), or should it remain indistinguishable from the Lead Paragraph's formatting?
2. How many projects exactly constitute "Selected Systems Work"? (Assumption: 2 is ideal for high density, 3 is the absolute maximum).

---

## Architecture Validation
* [x] Every section has a clear purpose.
* [x] Every component already exists in the Component Inventory.
* [x] No section duplicates another.
* [x] The Homepage answers its core question ("Why explore further?").
* [x] Every call to action has a destination (`/projects`, `/writing`).
* [x] The Homepage scales (we only show a fixed number of 'Selected' items, routing the rest to index pages).
* [x] The design remains faithful to the Design Principles (Engineering before marketing, Whitespace before surfaces).
