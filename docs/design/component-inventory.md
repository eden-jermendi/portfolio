# Component Inventory Specification

**Status**: Foundational Design Specification  
**Version**: 1.0  

## Purpose
This document catalogs every reusable interface primitive and composite component authorized for the portfolio. It is not a UI component library (like Storybook); it is an architectural specification determining *what* components exist, *why* they exist, and their rigorous engineering constraints. 

Adhering to the principle of "Deletion before addition," this inventory contains only components that solve real architectural problems. 

---

## 1. Editorial Content Components

### Heading
* **Purpose**: Establish structural document hierarchy and scanability.
* **Responsibilities**: Map semantically to `<h1>` through `<h6>`.
* **When to use**: To title pages, sections, and structural content blocks.
* **When NOT to use**: To make text visually larger or bolder without structural meaning.
* **Required content**: Text string.
* **Optional content**: Anchor link for deep-linking (e.g., `#section-id`).
* **Accessibility**: Must follow strict sequential order (no skipping levels).
* **Responsive behaviour**: Fluid typography scaling across breakpoints.
* **Expected variants**: `h1` (Hero), `h2` (Section), `h3` (Subsection).
* **Dependencies**: Typography design tokens.
* **Composition rules**: Must precede the content block it describes.

### Lead Paragraph
* **Purpose**: Provide a concise executive summary immediately following a primary heading.
* **Responsibilities**: Establish context and hook the reader before deep technical immersion.
* **When to use**: Directly below `<h1>` or major case study `<h2>`.
* **When NOT to use**: General body copy.
* **Required content**: Text string (1-3 sentences).
* **Accessibility**: Inherits standard text contrast rules.
* **Responsive behaviour**: Maintains optimal reading measure (max 65-75 characters).
* **Expected variants**: Default.
* **Dependencies**: Typography tokens (slightly larger/different weight than body).

### Body Text
* **Purpose**: Primary vehicle for narrative technical content.
* **Responsibilities**: Deliver highly readable, fatigue-free prose.
* **When to use**: All general paragraph text.
* **When NOT to use**: Tabular data, metadata, or code.
* **Required content**: Text string.
* **Accessibility**: WCAG AA contrast (4.5:1 minimum). Line height > 1.5.
* **Responsive behaviour**: Strict maximum width (measure) to prevent eye strain.
* **Expected variants**: Default, muted.
* **Dependencies**: Typography tokens.

### Inline Code
* **Purpose**: Semantically mark commands, variables, or file paths within a sentence.
* **Responsibilities**: Provide visual distinction for code references.
* **When to use**: Inside Body Text or Headings.
* **When NOT to use**: Multi-line script examples (use Code Block).
* **Required content**: Text string.
* **Accessibility**: Use `<code>` tag. Must maintain contrast against inline background.
* **Expected variants**: Default (Monospace font, subtle background tint).
* **Dependencies**: Monospace font tokens, surface tokens.

### Code Block
* **Purpose**: Display multi-line code execution, configuration files, or terminal output.
* **Responsibilities**: Preserve whitespace, provide syntax structure.
* **When to use**: Demonstrating architecture, scripts, or configurations.
* **Required content**: Code string, language identifier.
* **Optional content**: File name, copy button.
* **Accessibility**: `<pre><code>` structure. Scrollable if horizontal overflow occurs (no truncating).
* **Responsive behaviour**: Horizontal scroll with visible indicator on mobile.
* **Expected variants**: Terminal (no syntax coloring), Syntax (language specific).
* **Dependencies**: Monospace font tokens, surface tokens, `CopyButton` primitive.

### Figure & Figure Caption
* **Purpose**: Group an image/diagram with its explanatory text.
* **Responsibilities**: Provide semantic relation between media and description.
* **When to use**: For architectural diagrams, screenshots, or data charts.
* **Required content**: Image/Media component.
* **Optional content**: Text caption.
* **Accessibility**: Use `<figure>` and `<figcaption>`. Media requires `alt` text unless strictly decorative.
* **Responsive behaviour**: Scales proportionally. Max-width 100%.

---

## 2. Navigation Components

### Skip Link
* **Purpose**: Allow keyboard users to bypass repetitive navigation.
* **Responsibilities**: Remain hidden until focused, then become highly visible and actionable.
* **When to use**: At the absolute top of the DOM.
* **Required content**: Text (e.g., "Skip to main content"), anchor target.
* **Accessibility**: Essential for WCAG compliance. Must receive initial focus.
* **Expected variants**: Single default variant.
* **Dependencies**: Focus ring tokens, z-index elevation.

### Primary Navigation (Site Header)
* **Purpose**: Global orientation and top-level routing.
* **Responsibilities**: Provide consistent access to major sections.
* **When to use**: Once per page, at the top.
* **Required content**: Branding/Nameplate, section links.
* **Accessibility**: `<nav>` landmark.
* **Responsive behaviour**: May collapse to a simpler row, but avoids complex JavaScript off-canvas menus in favor of semantic jump links.

### Breadcrumb
* **Purpose**: Indicate current hierarchical position and provide upward navigation.
* **Responsibilities**: Map the route depth (e.g., `Home / Projects / System Rewrite`).
* **When to use**: Deep case study pages.
* **When NOT to use**: Root landing page.
* **Accessibility**: `aria-label="breadcrumb"`, current page marked with `aria-current="page"`.

---

## 3. Layout Components

### Container
* **Purpose**: Bound content to a maximum readable width and provide horizontal gutters.
* **Responsibilities**: Center content on large screens, pad content on small screens.
* **When to use**: Wrapping all major page sections.
* **Required content**: Child nodes.
* **Expected variants**: Standard (text measure), Wide (diagrams/tables).

### Section
* **Purpose**: Demarcate distinct thematic blocks of content.
* **Responsibilities**: Provide consistent vertical rhythm and semantic boundaries.
* **When to use**: Grouping related features, projects, or narratives.
* **Required content**: Child nodes, Section Heading.
* **Accessibility**: `<section>` tag with an `aria-labelledby` linking to its heading.
* **Dependencies**: Spacing tokens (large vertical padding).

### Divider
* **Purpose**: Visual separation of distinct content blocks when whitespace alone is insufficient.
* **When to use**: Between loosely related lists or terminal output segments.
* **When NOT to use**: As decorative embellishment or between tightly coupled elements.
* **Accessibility**: `<hr>` tag. If purely visual, `aria-hidden="true"`.
* **Expected variants**: Subtle hairline border.

---

## 4. Metadata & Data Components

### Metadata List (Key-Value)
* **Purpose**: Display structured data (e.g., Role, Date, Stack).
* **Responsibilities**: Align labels and values cleanly.
* **When to use**: Project headers, technical summaries.
* **Accessibility**: `<dl>`, `<dt>`, `<dd>` structure.
* **Responsive behaviour**: Stack vertically on mobile, align horizontally on desktop.

### Tag
* **Purpose**: Categorize content or indicate status.
* **Responsibilities**: Provide at-a-glance taxonomy (e.g., "React", "Proposed").
* **When to use**: Listing technologies or ADR statuses.
* **When NOT to use**: As an interactive button (unless it explicitly acts as a filter).
* **Responsive behaviour**: Wrap inline.
* **Dependencies**: Border tokens, subtle surface tokens.

### Table
* **Purpose**: Present high-density, multi-dimensional data.
* **Responsibilities**: Maintain column alignment and header association.
* **When to use**: Evaluation matrices, performance budgets.
* **Accessibility**: `<table>`, `<th>`, `scope` attributes.
* **Responsive behaviour**: Horizontal scroll wrapper (`overflow-x: auto`).

---

## 5. Interactive Components

### Button
* **Purpose**: Trigger an action or state change.
* **Responsibilities**: Provide clear affordance, hover states, and focus states.
* **When to use**: Form submissions, copying to clipboard.
* **When NOT to use**: For navigation (use `External Link` or `Anchor` instead).
* **Accessibility**: `<button>` element. High contrast focus ring.
* **Expected variants**: Primary (Accent), Secondary (Outline), Ghost (Text only).
* **Dependencies**: Color tokens, interaction motion tokens.

### External Link
* **Purpose**: Navigate to an external resource.
* **Responsibilities**: Visually indicate departure from the site (e.g., via an icon).
* **Accessibility**: Native `<a>` with `target="_blank"` and `rel="noopener noreferrer"`. `aria-label` appending "opens in a new tab".

---

## 6. Project Components

### Project Preview Card
* **Purpose**: Summarize a case study on the index page.
* **Responsibilities**: Present title, brief abstract, metadata, and link to full study.
* **When to use**: `/` root page project list.
* **Composition rules**: Must contain a Heading, Lead Paragraph, and Metadata List. Entire surface should NOT be a clickable `div` trap; use a semantic anchor wrapping the title or a distinct "Read Case Study" link.

### Architecture Diagram Container
* **Purpose**: House complex SVG or Mermaid diagrams.
* **Responsibilities**: Handle overflow, dark/light mode asset switching, and providing caption context.
* **When to use**: Deep technical case studies.
* **Composition rules**: Uses `Figure` and `Container (Wide)`.

---
*End of Inventory*
