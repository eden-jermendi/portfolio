# ADR-0005: Static Typed Content Source Strategy

**Status**: Accepted  
**Date**: 28-07-2026  

## 1. Status
Accepted

## 2. Context
In many modern web application projects, engineering teams incorporate relational databases, Headless Content Management Systems (e.g., Contentful, Strapi, Sanity), or complex backend database API queries to serve foundational biographical copy and project portfolio lists. For a professional engineering portfolio, introducing external runtime database servers or dynamic API fetching to render static technical case studies represents severe over-engineering. It introduces external operational infrastructure dependencies, runtime security attack surfaces, unpredictable network fetching latencies, complex API key credential management, and unnecessary hosting costs. A robust systems portfolio requires immutable, deterministic, zero-dependency build execution.

## 3. Decision
We adopt strict version-controlled TypeScript static data modules (`src/content/*.ts`) and typed local file system structures as the sole authoritative source of truth for all biographical background prose, professional contact coordinates, project listings, and architectural engineering case studies. We mandate compile-time static route generation (`generateStaticParams`) across App Router pages. Runtime database queries and third-party remote CMS network calls are banned from standard content rendering pathways.

## 4. Consequences
* **Positive Engineering Consequences**:
  * Absolute rendering reliability and zero operational downtime risk: pages compile directly into static HTML bundles during CI builds without external API dependency gating.
  * Complete type safety and compile-time data integrity: TypeScript compiler verification (`tsc --noEmit`) instantly catches missing project case study fields, broken image path references, or schema violations before code merges.
  * Zero runtime security exposure or environment secret management burdens: no API keys, remote read/write tokens, or database authentication strings exist within production rendering logic.
* **Negative Trade-offs and Limitations**:
  * Content modifications (such as updating an email link or adding a new project case study) necessitate submitting a formal git commit and executing an automated continuous deployment build pipeline rather than editing fields inside a web GUI browser dashboard.
  * Not appropriate if content updates require daily non-developer editing workflows (an irrelevant limitation for a personal developer portfolio repository).
* **Compliance Obligations**:
  * Any pull request attempting to integrate external ORMs (Prisma, Drizzle), database clients (PostgreSQL, Supabase), or remote CMS Fetch SDKs strictly for static portfolio content rendering must be rejected.

## 5. Alternatives Considered
* **Adopting a Headless Remote Content Management System (CMS)**: Connect Next.js App Router to Contentful or Sanity via REST/GraphQL build fetch APIs. *Reason for Rejection*: Unwarranted architectural complexity, introduces external third-party uptime dependencies, inflates build compilation duration, and violates our core engineering principle of "deletion over unnecessary complexity".
* **Deploying an Embedded Relational SQLite / Postgres Backend Database**: Run a real-time database query within server rendering components to pull case study rows. *Reason for Rejection*: Introduces unnecessary database execution latency, complicates edge network deployment footprints, and adds maintenance burden without providing measurable benefits over compiled TypeScript static schemas.
