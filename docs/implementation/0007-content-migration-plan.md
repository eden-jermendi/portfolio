# Content Migration Plan

**Status**: Draft (Pending Review)
**Phase**: Pre-Phase 6
**Dependency**: Must be completed before `0008-animation-architecture.md`.

## Objective
Migrate all legacy projects, biographical data, and contextual writing from the existing Vite SPA (`https://edenjermendi.com/`) into the new Next.js App Router content pipeline. This ensures our DOM is populated with real production data before we begin choreographing layout animations.

## Scope of Migration

### 1. Projects Archive (`/src/content/projects/`)
- Extract all case studies, project cards, and portfolio items from the live legacy site.
- Translate the legacy data into our strict `ProjectFrontmatter` Zod schema:
  - `title`, `abstract`, `date`, `stack`
  - `role` (Optional)
  - `featured` (Set to `true` for the top 3 projects to populate the Homepage).
- Generate `.mdx` files for each project.

### 2. About Profile (`/src/app/about/page.tsx`)
- Extract the existing biographical text and professional narrative.
- Scaffold the `About` page layout using our `Container`, `Section`, `Heading`, and `BodyText` primitives.
- **Profile Picture Placeholder**: Implement a strictly sized, semantic placeholder (`<div role="img" aria-label="Profile Picture Placeholder">`) within the layout, ensuring no layout shift (CLS) occurs when the final image is dropped in.

### 3. Writing / Articles (`/src/content/writing/`)
- If the legacy site contains blog posts or technical writing, migrate them to `.mdx`.
- If no writing exists, we will leave the directory empty and allow the Homepage empty-state logic to gracefully hide the section.

## Execution Strategy
1. **Extraction**: Utilize a headless browser subagent (since the legacy site is a Client-Side Rendered Vite app) to scrape the DOM, OR pull directly from the legacy source repository if accessible.
2. **Translation**: Map the scraped data into markdown/MDX files.
3. **Scaffolding**: Scaffold the `Project` page layout using our `Container`, `Section`, `Heading`, and `BodyText` primitives.
4. **Migration**: Reduce the totality of what is written into a simple, professional but me-sounding About section, subtitle below name on home page, etc. Ensure whatever is going into this portfolio from previous one is concise and well-written and approved by me before moving on.
5. **Verification**: Run `npm run typecheck` and `npm run build` to ensure the new content perfectly passes our rigorous Zod schemas and successfully generates static pages.

## Transition to Animation
Once the real content is merged into the DOM, the layout structures will be locked in. We will then proceed to implement the animation orchestration defined in `0008-animation-architecture.md`.
