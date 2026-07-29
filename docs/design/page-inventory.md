# Page Inventory

**Status**: Approved Foundation  
**Purpose**: A complete inventory of every intended page/route in the application.  

---

## 1. Core Pages

### Home (`/`)
* **Purpose**: The root node. A concise executive summary of who you are and immediate access to the strongest work.
* **Primary Audience**: Hiring managers and peers seeking a 10-second overview.
* **Required Content**: Lead introduction, highly curated subset of Project Previews, recent Writing Previews.
* **Relationships**: Routes to `/projects`, `/writing`, and `/about`.

### Projects Index (`/projects`)
* **Purpose**: A comprehensive archive of all technical case studies.
* **Required Content**: H1, list of all Project Preview components.
* **Optional Content**: Filtering/Tagging by Technology.

### Project Detail (`/projects/[slug]`)
* **Purpose**: The deep architectural narrative of a specific engagement.
* **Primary Audience**: Senior engineers evaluating technical depth and decision-making.
* **Required Content**: Follows the "Case Study Composition" (Problem, Constraints, Architecture, Trade-offs).
* **Dependencies**: Content Model (Project Entity).

### Writing Index (`/writing`)
* **Purpose**: Archive of all technical articles, RFCs, and essays.
* **Required Content**: Chronological list of Article Previews.
* **Optional Content**: RSS Feed link prominently displayed.

### Article (`/writing/[slug]`)
* **Purpose**: Long-form technical prose.
* **Required Content**: Follows the "Standard Article Composition".
* **Dependencies**: Content Model (Article Entity).

### About (`/about`)
* **Purpose**: Detailed professional history, philosophy, and resume equivalent.
* **Required Content**: Narrative background, Experience list (Roles/Companies), Education.
* **Relationships**: Highly cross-linked to `/projects`.

---

## 2. Utility Pages

### Uses (`/uses`)
* **Purpose**: A transparent look at the local development environment, hardware, and tools. 
* **Why**: Signals technical culture to peers.
* **Required Content**: Lists of software, hardware, and configuration files.

### Contact (`/contact`)
* **Purpose**: Secure routing for recruitment.
* **Required Content**: Email, LinkedIn, GitHub, PGP Public Key.

### 404 Not Found (`/404`)
* **Purpose**: Graceful failure state.
* **Required Content**: Clear error message, jump links back to Home and Projects.

---

## 3. Machine Pages

### RSS Feed (`/feed.xml`)
* **Purpose**: Syndication for the Writing section. Essential for the technical blogging ecosystem.

### Sitemap (`/sitemap.xml`)
* **Purpose**: Search engine routing.

### Robots (`/robots.txt`)
* **Purpose**: Crawler governance.
