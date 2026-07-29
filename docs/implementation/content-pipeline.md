# Content Pipeline

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Document the exact pipeline mechanism that translates raw, file-based content (MDX/JSON) into consumable, validated data structures for the routing layer.

---

## The Pipeline Lifecycle

### 1. Authoring
* All deep content (Projects, Articles) is authored as `.mdx` files in `src/content/`.
* The Frontmatter (YAML block at the top of the file) acts as the metadata schema defined by the Content Model.

### 2. Validation & Compilation
* Next.js does not natively validate custom markdown schema structures. 
* We will implement a strict parser (e.g., utilizing `gray-matter` for parsing and `zod` for type validation).
* **Failure State**: If an authored MDX file lacks a required field (e.g., missing a `date`), the parser throws a fatal error, halting the build. Bad content cannot reach production.

### 3. Metadata Generation
* The parsed Frontmatter is exposed to Next.js `generateMetadata()` APIs.
* This dynamically generates `<title>`, `<meta name="description">`, and Open Graph tags for every static route during the SSG build phase.

### 4. Navigation Generation
* The global Site Configuration JSON feeds directly into the `<SiteHeader>` and `<Footer>` components.
* Project lists (e.g., the Homepage "Selected Systems Work") are dynamically composed by querying the parser for all Project files, sorting by date, and filtering by a `featured: true` flag.

### 5. Extensibility (RSS & Sitemap)
* **RSS/Atom Feed**: During the build script execution, the parser iterates over all valid Articles and outputs an XML file to the `public/` directory.
* **Sitemap**: Similarly, a script iterates over all known route slugs and generates a standard `sitemap.xml` mapping.
