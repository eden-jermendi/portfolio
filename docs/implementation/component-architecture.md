# Component Architecture

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Map the approved design primitives (Component Inventory) into strict React implementation responsibilities. Every component is an isolated contract with explicitly defined inputs and outputs.

---

## General Rules
* **No Inline Styles**: Components MUST consume CSS variables for theming and layout mapping.
* **Server First**: Components MUST NOT specify `"use client"` unless documented below.
* **Strict Typing**: All prop inputs MUST be typed via TypeScript interfaces matching the Content Model.

---

## Component Specifications

### Heading (`<Heading>`)
* **Purpose**: Render structural semantic titles.
* **Inputs**: `level` (1-6), `children` (ReactNode), `id` (Optional String for anchor links).
* **Outputs**: `<h[level]>` HTML element.
* **State**: Stateless. Server Component.
* **Accessibility**: MUST render the correct level to preserve DOM hierarchy.

### Link (`<EditorialLink>`)
* **Purpose**: Handle all internal and external routing.
* **Inputs**: `href` (String), `children` (ReactNode), `isExternal` (Boolean).
* **Outputs**: Next.js `<Link>` or standard `<a>`.
* **State**: Stateless. Server Component.
* **Composition**: If `isExternal` is true, automatically appends `target="_blank"`, `rel="noopener noreferrer"`, and an outbound icon.

### Button (`<Button>`)
* **Purpose**: Trigger actions.
* **Inputs**: `variant` ('primary' | 'secondary'), `onClick` (Function), `disabled` (Boolean).
* **Outputs**: `<button>` HTML element.
* **State**: Interactive. **Client Component**.
* **Accessibility**: MUST render focus rings. MUST handle `aria-disabled`.

### Project Preview (`<ProjectPreview>`)
* **Purpose**: Summarize a case study on index pages.
* **Inputs**: `project` (ProjectEntity subset: title, abstract, date, stack).
* **Outputs**: Semantic `<article>` wrapping the preview data.
* **Composition**: Consumes `<Heading level={3}>` and `<MetadataList>`.
* **Server/Client**: Server Component.

### Container (`<Container>`)
* **Purpose**: Enforce the reading measure constraint.
* **Inputs**: `size` ('standard' | 'wide'), `children` (ReactNode).
* **Outputs**: `<div>` with `max-width` CSS constraints.
* **Server/Client**: Server Component.

### Section (`<Section>`)
* **Purpose**: Manage macro-whitespace between thematic blocks.
* **Inputs**: `children` (ReactNode), `aria-label` or `aria-labelledby`.
* **Outputs**: `<section>` HTML element with macro padding.
* **Server/Client**: Server Component.

### Code Block (`<CodeBlock>`)
* **Purpose**: Render syntax-colored preformatted text.
* **Inputs**: `code` (String), `language` (String).
* **Outputs**: `<pre><code>` wrapper.
* **Composition**: MAY include a nested `<CopyButton>` (which forces a Client Boundary for the button, while the `CodeBlock` itself remains a Server Component).
