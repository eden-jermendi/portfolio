# Implementation Roadmap Architecture

**Effective Date**: 28-07-2026  
**Status**: Active Execution Schedule  

## 1. Purpose
This directory contains the sequential, dependency-locked implementation roadmap milestones governing the transition of this repository from an entry-level SPA client architecture into a production-grade, server-first Next.js App Router engineering portfolio.

## 2. Mandatory Execution Rule (Zero Implementation Without Sign-Off)
No implementation coding, file generation, layout redesign, or legacy pruning may commence on any milestone until:
1. The preceding milestone's deliverables have achieved 100% verification against `RFC-0006 Definition of Done`.
2. The repository owner has conducted formal architectural evaluation and granted explicit sign-off to advance.

Skipping milestones, combining multiple operational phases into single diffs, or initiating speculative implementation tasks out-of-sequence is strictly forbidden under project governance.

## 3. Milestone Summary and Chronological Progression

| Milestone ID | Phase Alignment | Core Operational Objective | Prerequisite Dependencies | Current Status |
| :--- | :--- | :--- | :--- | :--- |
| `milestone-0` | Phase 0 & 0.5 | Repository audit & complete documentation governance system setup | None (Initialization) | **Active Evaluation** |
| `milestone-1` | Phase 1 | Workspace decontamination & Next.js App Router structural foundation | Approval of `milestone-0` | Pending Sign-Off |
| `milestone-2` | Phase 2 | Minimalist editorial root layout, accessible shell, and navigation | Approval of `milestone-1` | Pending Sign-Off |
| `milestone-3` | Phase 2 & Phase 4 | Deconstruct modal SPA & CAPTCHA form; build direct static background & secure contact links | Approval of `milestone-2` | Pending Sign-Off |
| `milestone-4` | Phase 3 | TypeScript case study schema enforcement & static generated `/projects/[slug]` routes | Approval of `milestone-3` | Pending Sign-Off |
| `milestone-5` | Phase 5 | Native Next.js image optimization, route metadata, Open Graph, sitemap & robots | Approval of `milestone-4` | Pending Sign-Off |
| `milestone-6` | Phase 6 | Final accessibility audit (WCAG AA/AAA), legacy codebase purge, and Vercel production cutover | Approval of `milestone-5` | Pending Sign-Off |

## 4. How to Reference Milestones
When generating branches or preparing commit summaries, engineering contributors must cite the active milestone identifier directly:
* Branch syntax: `feat/milestone-1-foundation` or `arch/milestone-4-case-study-schema`.
* Pull Request header: `Closes docs/roadmap/milestone-X-*.md`.
