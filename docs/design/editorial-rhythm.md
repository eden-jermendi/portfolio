# Editorial Rhythm

**Status**: Approved Foundation  
**Purpose**: Define the mathematical rhythm of the publication.  

## Philosophy
Typography defines our type system; Spacing defines our spacing tokens. Editorial Rhythm is the architectural bridge that dictates how these two systems combine. In a technical publication devoid of heavy borders and shadows, vertical rhythm is the primary mechanism for establishing hierarchy, communicating grouping, and minimizing cognitive load.

We document relationships rather than isolated pixel values. The goal is uninterrupted reading flow.

---

## 1. Heading Cadence
**Rule**: Headings must always sit closer to the content they introduce than the content they follow.
**Why**: This principle (proximity) visually binds the title to its subsequent section, clearly signaling a transition.
* **H1 (Page Title) to Lead/Body**: Standard paragraph spacing. The H1 acts as the root of the document tree.
* **Preceding H2 (Section)**: Generous whitespace (e.g., `space-3xl`). It must feel like taking a deep breath before a new topic.
* **Following H2 (Section) to Body**: Tight whitespace (e.g., `space-md`). Binds the heading to the first paragraph.
* **Preceding H3 (Subsection)**: Moderate whitespace (e.g., `space-xl`). Distinct, but clearly a child of the current H2.
* **Following H3 to Body**: Very tight whitespace (e.g., `space-sm`).

## 2. Paragraph Rhythm
**Rule**: Continuous prose paragraphs are separated by a consistent, baseline-aligned rhythm (typically equal to 1 `line-height` of the body text).
**Why**: Predictable vertical spacing prevents eye fatigue and maintains a steady reading velocity. No paragraph should feel orphaned.

## 3. Metadata Rhythm
**Rule**: Metadata is tightly clustered, acting as a unified data block.
**Why**: Metadata (dates, tags, roles) presents discrete facts. Tighter vertical rhythm (`space-xs` or `space-sm`) prevents it from being read as prose and groups it into a scannable block. 
* **Spacing from Heading**: Tight.
* **Spacing to subsequent Body**: Moderate (e.g., `space-lg` or `space-xl`), to clearly demarcate where data ends and narrative begins.

## 4. Section Rhythm
**Rule**: Distinct semantic sections (`<section>`) must be separated by macro-whitespace.
**Why**: Macro-whitespace (e.g., `space-4xl` or `space-5xl`) acts as a structural chapter break. It provides a visual resting point, signaling a complete change in context or thematic shift in the case study.

## 5. Figure and Caption Rhythm
**Rule**: A caption must be inextricably bound to its parent media, separated from surrounding text.
**Why**: Prevents ambiguity about which text describes which diagram.
* **Media to Caption**: Extremely tight (`space-xs`).
* **Caption to following prose**: Generous (`space-xl` or `space-2xl`).

## 6. List Spacing
**Rule**: Intra-item spacing (between bullet points) must be smaller than inter-block spacing (between the list and the surrounding paragraphs).
**Why**: Lists must read as a single grouped entity. If list items are spaced too far apart, the list loses cohesion.

## 7. Code Block and Table Spacing
**Rule**: High-density data blocks (Code, Tables) require significant isolation from prose.
**Why**: Code and tabular data demand a different cognitive parsing mode than standard reading. Surrounding them with generous vertical whitespace (`space-2xl`) acts as a "context switch" buffer for the reader's brain.

## 8. Quote and Footnote Spacing
**Rule**: Blockquotes inherit standard paragraph rhythm but may utilize left-indentation or borders. Footnotes are detached from the primary rhythm, pushed to the absolute bottom of the container with condensed vertical spacing.
**Why**: Quotes are part of the narrative flow. Footnotes are tangential references and must not interrupt the primary reading measure.
