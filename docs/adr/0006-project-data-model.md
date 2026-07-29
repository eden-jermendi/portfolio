# ADR-0006: Project Case Study Data Model

**Status**: Accepted  
**Date**: 28-07-2026  

## 1. Status
Accepted

## 2. Context
The legacy repository represented projects using a trivial data structure in `client/src/content/projects.ts`, capturing only rudimentary fields: `title`, `summary`, `description`, `imagePath`, `githubUrl`, and an unstructured string array for `stack`. This model degraded the user experience by rendering generic marketing summary cards ([ProjectCard.tsx](file:///Users/eden/Documents/Documents/code/personal-projects/portfolio%20folder/portfolio/client/src/components/ProjectCard.tsx)) that forced visiting senior engineers and technical hiring leads to click out to raw external GitHub repositories to evaluate actual code quality and systems engineering competence. To prove technical depth in Backend Engineering, Application Security, OSINT, Accessibility, and Systems Architecture, our internal data representation must enforce thorough technical documentation directly within the portfolio route hierarchy.

## 3. Decision
We adopt a rigorous, mandatory TypeScript interface (`EngineeringCaseStudySchema`) governing all project listings and individual case study routes (`/projects/[slug]`). To be included in the public portfolio, every project record must explicitly satisfy the following structural contract:

```typescript
export interface EngineeringCaseStudy {
  readonly title: string;
  readonly slug: string;
  readonly summary: string;
  readonly repositoryUrl: string;
  readonly liveUrl?: string;
  readonly status: 'Verified Deployment' | 'Active Development' | 'Archival / Utility';
  readonly architecture: {
    readonly overview: string;
    readonly dataModelOrSchema?: string;
    readonly keyTechnicalDecisions: ReadonlyArray<string>;
  };
  readonly securityAndOSINTConsiderations?: ReadonlyArray<string>;
  readonly performanceAndAccessibility: {
    readonly wcagLevel: 'WCAG 2.2 AA' | 'WCAG 2.2 AAA' | 'N/A (CLI / Backend Only)';
    readonly performanceNotes: ReadonlyArray<string>;
  };
  readonly stack: ReadonlyArray<{
    readonly category: 'Backend' | 'Frontend' | 'Security / OSINT' | 'Infrastructure & Ops';
    readonly technology: string;
  }>;
}
```

## 4. Consequences
* **Positive Engineering Consequences**:
  * Forces rigorous architectural reflection and concrete engineering storytelling: weak projects lacking substantive technical decisions or security thinking are naturally disqualified or improved before publishing.
  * Enables dynamic generation of deeply linked, readable technical case study routes (`/projects/[slug]`) directly within Next.js App Router static parameters.
  * Standardizes technology categorization, preventing vague tags ("Local Sharing", "Community Platform") in favor of concrete infrastructure software terminology.
* **Negative Trade-offs and Limitations**:
  * Demands substantial analytical engineering documentation effort to populate required fields for existing projects (e.g., *Coursework Tracker*, *Weather Oracle*, *Delete My Instagram Comments*) during Milestone 4 execution.
  * Precludes adding quick "two-sentence prototype hack" entries without conducting a thorough architectural write-up.
* **Compliance Obligations**:
  * Build scripts and code reviews must verify that `src/content/projects.ts` complies strictly with this interface without optional type overrides or casting bypasses.

## 5. Alternatives Considered
* **Retaining Flat Legacy Card Summary Schema**: Continue utilizing simple title, image, and description string attributes without structured engineering breakdowns. *Reason for Rejection*: Actively reinforces entry-level bootcamp marketing impressions and completely fails to provide technical evidence of backend, security, or systems competence.
* **Adopting Unstructured Freeform Markdown Files**: Create raw markdown files without schema enforcement or required frontmatter properties. *Reason for Rejection*: Invites architectural inconsistency and formatting drift across case study pages; lacks compile-time validation of essential engineering metrics (such as security considerations and WCAG levels).
