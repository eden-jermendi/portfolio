# Content Architecture

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Define the strict unidirectional flow of content from static data sources through the application to the final rendered HTML. This establishes clear ownership boundaries between the data and the presentation layers.

---

## The Content Flow Pipeline

`Source` → `Transformation` → `Rendering` → `Presentation`

### 1. Source (Data Ownership)
* **Location**: Local filesystem (`src/content/`).
* **Format**: Projects and Articles exist as Markdown/MDX files. Global configuration (navigation, site metadata) exists as strict JSON or TypeScript constant objects.
* **Ownership**: The Content Layer is the single source of truth. The database is the filesystem.

### 2. Transformation (Parsing & Validation)
* **Location**: `src/lib/content-parser.ts`
* **Action**: Content is ingested at build time. Frontmatter is parsed, validated against the Content Model specification, and typed.
* **Ownership**: The Data Layer owns validation. If a Markdown file violates the schema (e.g., missing a required `title`), the parser throws an explicit build error.

### 3. Rendering (Route Composition)
* **Location**: `src/app/` (e.g., `page.tsx`)
* **Action**: The Route Handler queries the Transformation layer for the data block, extracting the serializable strings, dates, and arrays.
* **Ownership**: The Server Component owns the orchestration, passing data down as explicit React props.

### 4. Presentation (UI Mapping)
* **Location**: `src/components/`
* **Action**: Atomic and Composite components receive raw strings and render them into semantic HTML (e.g., transforming the string `"React"` into a `<MetadataList><Tag>React</Tag></MetadataList>`).
* **Ownership**: The UI layer owns zero content. It merely dresses the provided data according to the Editorial Rhythm.

---

## Specific Entity Lifecycles

### Projects & Writing
* Authored entirely in MDX. Sourced at build time to generate static `/projects/[slug]` routes.

### Global Configuration & Navigation
* Authored in a central configuration constant (e.g., `src/content/site-config.ts`). Ensures the Site Header and Footer components consume identical, synchronized data.
