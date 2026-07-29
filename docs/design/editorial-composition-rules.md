# Editorial Composition Rules

**Status**: Approved Foundation  
**Purpose**: Define how information is logically composed into reusable patterns.  

## Philosophy
These are not rigid page templates or React components; they are narrative composition rules. They define the required flow of information to ensure that engineering competence is communicated logically, consistently, and without marketing fluff.

---

## 1. The Standard Article Composition
**Use Case**: Technical blog posts, RFCs, and architecture journals.

1. **Title (H1)**: Clear, unambiguous statement of the topic.
2. **Metadata Row**: Date, Reading Time, Tags. Establishes context and timeliness.
3. **Lead Paragraph**: The executive summary. Why does this article exist?
4. **Thin Divider**: Macro separation from the header.
5. **Body**: The narrative content, structured by H2s and H3s.
6. **Figure / Code**: Injected where evidence is required. Always followed by a Caption.
7. **References / Footnotes**: Citations and external proof.
8. **Further Reading**: Logical next steps.

*Why*: This mirrors academic and technical publishing. The reader gets immediate context (Title, Meta, Lead) before committing to the deep technical body.

## 2. The Case Study (Project) Composition
**Use Case**: Deep dives into past engineering projects.

1. **Project Introduction (H1 + Lead)**: What was built and why.
2. **Project Metadata (Sidebar or Row)**: Role, Tech Stack, Duration, Live Links.
3. **Problem Statement (H2)**: The business or technical failure that necessitated the work.
4. **Constraints (H3)**: Budget, legacy systems, timeline, or compliance rules.
5. **Architecture / Implementation (H2)**: How it was built. Heavy use of Wide Containers for diagrams and Code Blocks.
6. **Trade-offs (H3)**: What was sacrificed to meet the constraints.
7. **Outcome (H2)**: Measurable, verifiable results (e.g., "Reduced latency by 40ms").
8. **Lessons Learned (H3)**: Retrospective engineering insight.

*Why*: Engineering is about making informed decisions under constraints. A marketing portfolio only shows the "Outcome." A Senior Engineering portfolio focuses on the "Problem," the "Constraints," and the "Trade-offs." This composition forces the author to prove their competence.

## 3. The Index Composition
**Use Case**: The Projects list, the Writing list.

1. **Section Heading (H2)**: e.g., "Selected Systems Work".
2. **List of Previews**: Iterated Project Preview Components.
   - *Preview Anatomy*: Title -> Meta -> Brief Abstract.
3. **Pagination**: If the list exceeds cognitive limits (e.g., > 10 items).

*Why*: Index pages must prioritize scannability. High information density allows the user to quickly triage which case study they want to read.

## 4. The Figure Composition
**Use Case**: Presenting visual evidence anywhere in a narrative.

1. **Media**: Diagram, Screenshot, or Table (optionally breaking the measure into a Wide Container).
2. **Caption**: Descriptive text bound tightly to the media.
3. **Citation (Optional)**: External source link if the diagram is not original.

*Why*: A diagram without a caption is an assumption. Captions ground visual information in the narrative.
