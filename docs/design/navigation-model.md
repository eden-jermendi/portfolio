# Navigation Model

**Status**: Approved Foundation  
**Purpose**: Define the navigation architecture, hierarchy, and relationships.  

## Philosophy
Navigation must be deterministic, structural, and instantly comprehensible. We do not use "mystery meat" navigation (e.g., hidden hamburger menus on desktop) or hijack scroll behaviors. The navigation model represents the graph of the portfolio.

---

## 1. Global Navigation Hierarchy

### Primary Navigation (Site Header)
* **Purpose**: Provide access to the root indices of the application.
* **Scope**: Globally persistent across every page.
* **Nodes**: 
  * `Index (Home / Nameplate)`
  * `Projects (Work / Systems)`
  * `Writing (Articles / RFCs)`
  * `About (Profile)`
* **Rules**: Must remain extraordinarily lean. No drop-downs.

### Secondary Navigation (Contextual)
* **Purpose**: Sub-routing within a specific primary silo.
* **Scope**: Persists only within the active section.
* **Nodes (Example - Writing)**: `All`, `Architecture`, `Frontend`, `Management`.
* **Rules**: Implemented as horizontal inline links or a sticky sidebar table of contents, depending on layout constraints.

### Footer Navigation
* **Purpose**: Utility routing and outbound egress.
* **Scope**: Globally persistent at the bottom of the document tree.
* **Nodes**: `Uses (Setup)`, `Contact (PGP / Mail)`, `RSS`, `GitHub`, `LinkedIn`.
* **Rules**: Separates outbound/utility concerns from the primary content discovery journey.

---

## 2. In-Page Navigation

### Table of Contents (TOC)
* **Purpose**: Contextual wayfinding within long-form technical articles or case studies.
* **Behavior**: Links directly to `id` attributes on `<h2/h3>` tags. May stick to the viewport on desktop.
* **Why**: High-density engineering documents require skimming. A TOC provides an immediate mental model of the article's structure.

### Back Links / Upward Navigation
* **Purpose**: Return the user to the parent index without relying on the browser back button.
* **Nodes**: e.g., `← Back to all projects`.
* **Placement**: Top of the document, above the H1, or at the absolute bottom of the article.

### Breadcrumbs
* **Purpose**: Indicate current hierarchical depth.
* **Usage**: Extremely rare in a flat portfolio structure. Only required if projects are deeply nested (e.g., `Projects / E-Commerce Platform / API Migration`).

### Pagination
* **Purpose**: Move laterally between sibling entities or index pages.
* **Nodes**: `Older Articles / Newer Articles` or `Next Project`.
* **Placement**: Bottom of an index or case study.

---

## 3. Cross-linking Philosophy
* **Inline Linking**: Technical writing must heavily cross-reference. Mentioning a technology or a past project in prose should directly link to its corresponding entity/page if it exists. 
* **Outbound Linking**: External links must clearly indicate egress (via an icon or contextual wording) to maintain the user's spatial awareness of what is "inside" the portfolio vs "outside".
