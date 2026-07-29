# Content Model Specification

**Status**: Foundational Data Architecture  
**Version**: 1.0  

## Purpose
This document treats the portfolio not as a collection of visual pages, but as a rigid, structured graph of data entities. It defines the Information Architecture (IA) by identifying every content entity, its purpose, required schema fields, and relational mapping. Designing the content model before layout ensures that components have reliable data to consume and that engineering evidence takes precedence over marketing claims.

---

## 1. Global Entities

### Site Configuration
* **Purpose**: Define global portfolio metadata, SEO constraints, and environment constants.
* **Description**: Singleton entity representing the application state.
* **Relationships**: Consumed by `RootLayout`, `SiteHeader`, and `Footer`.
* **Required fields**:
  * `title` (String): e.g., "Eden Jermendi | Systems Engineer"
  * `description` (String): SEO meta description.
  * `baseUrl` (URL): Canonical deployment domain.
  * `author` (String): Name.
* **Optional fields**:
  * `socialLinks` (Array of SocialLink)
  * `analyticsEnabled` (Boolean)

### Navigation Menu
* **Purpose**: Structure the primary jump links and external coordinates.
* **Description**: A fixed list of destinations.
* **Required fields**:
  * `label` (String)
  * `href` (String or URL)
  * `isExternal` (Boolean)

---

## 2. Core Content Entities

### Project (Case Study)
* **Purpose**: Detail a comprehensive engineering achievement.
* **Description**: The primary vehicle for demonstrating technical depth, architecture decisions, and code quality.
* **Relationships**: Contains `Technology`, `Diagram`, `Timeline Event`, `External Link`.
* **Required fields**:
  * `id` / `slug` (String): Unique route identifier.
  * `title` (String): Clear, non-marketing project name.
  * `abstract` (String): 1-2 sentence executive summary.
  * `role` (String): Exact technical responsibility.
  * `date` (String / Date): Completion or active timeframe.
  * `technologies` (Array of Technology references)
  * `body` (Markdown/MDX): The deep architectural narrative.
* **Optional fields**:
  * `repositoryUrl` (URL): Direct link to source code.
  * `liveUrl` (URL): Direct link to deployed artifact.
  * `performanceMetrics` (Object): Measured CWV or build times.
* **Validation rules**: `title` must be < 60 characters. `body` must contain at least one architecture section.

### Experience (Role / Position)
* **Purpose**: Document professional history and impact.
* **Description**: Structured chronological resume data.
* **Relationships**: Contains `Technology`.
* **Required fields**:
  * `company` (String)
  * `title` (String)
  * `startDate` (Date)
  * `endDate` (Date or "Present")
  * `responsibilities` (Array of Strings): Concrete, measurable engineering impact.
* **Validation rules**: Responsibilities must focus on verifiable systems work, not generic marketing verbs.

### Technology (Tool / Language / Infrastructure)
* **Purpose**: Standardize the vocabulary of the tech stack.
* **Description**: Allows consistent tagging across projects and experiences.
* **Required fields**:
  * `name` (String): e.g., "Next.js", "TypeScript", "AWS"
  * `category` (String): "Frontend", "Backend", "Infrastructure", "Security"
* **Optional fields**:
  * `version` (String): e.g., "15.0"

---

## 3. Atomic Data Entities

### External Link / Citation
* **Purpose**: Provide verifiable proof of claims.
* **Description**: Points to repositories, PRs, RFCs, or deployed applications.
* **Required fields**:
  * `label` (String)
  * `url` (URL)
* **Validation rules**: Must be a valid HTTPS URI.

### Contact Method
* **Purpose**: Secure routing for recruitment and professional networking.
* **Description**: E.g., PGP Key, Mailto, LinkedIn.
* **Required fields**:
  * `platform` (String)
  * `value` (String / URL)
  * `isSecure` (Boolean)

### Diagram / Figure
* **Purpose**: Visual abstraction of system architecture.
* **Required fields**:
  * `src` (String / Path)
  * `altText` (String): Strict accessibility requirement.
  * `caption` (String): Technical context.
* **Validation rules**: `altText` cannot be empty.

---

## 4. Potential Future Expansion

* **RFC / ADR Record**: If the portfolio evolves into a living journal, architectural decision records could become first-class content entities with fields for `status`, `proposedDate`, and `tradeOffs`.
* **Performance Budget Log**: An entity to track Lighthouse scores and bundle sizes across time to prove continuous optimization.

---
*End of Content Model*
