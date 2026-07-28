# Git and GitHub Standards

**Effective Date**: 28-07-2026  
**Status**: Mandatory Enforceable Living Standard  

## 1. Purpose
Establish strictly regulated version-control protocols, commit messaging grammar, branch management rules, and repository hygiene practices to preserve clean Git history, protect trunk stability, and guarantee traceabilty across milestones.

## 2. Objective Engineering Constraints
* **Branch Mechanics & Production Trunk Protection**:
  * The `main` branch represents the canonical, deployable production release trunk. Direct commits to `main` are restricted exclusively to administrative documentation updates or emergency hotfix operations approved by the repository owner.
  * All engineering implementation work must originate on short-lived feature, architecture, or bugfix branches derived from clean `main` HEAD states (`feat/*`, `fix/*`, `arch/*`, `docs/*`, `refactor/*`).
  * Deleting branches, amending public commit histories, executing hard resets (`git reset --hard`), or force-pushing (`git push --force`) against remote upstream server repositories without explicit owner authorization is forbidden.
* **Commit Messaging Architecture (Conventional Commits)**:
  * Commit messages must conform strictly to standard structure: `<type>(<scope>): <short imperative summary>`.
  * Mandatory allowable commit types: `feat`, `fix`, `docs`, `arch`, `refactor`, `test`, `chore`.
  * Grammar rules: Write commit summaries in imperative present tense (e.g., `feat(projects): add Coursework Tracker static case study schema`; not "added" or "adds"). Confine title summary line lengths to a strict maximum of `72 characters`.
* **Repository Hygiene & Untracked Cruft Cleanliness**:
  * Prior to executing commit additions, verify working directory cleanliness via `git status`.
  * Never stage or commit operating system junk files (`.DS_Store`, `Thumbs.db`), editor temporary caches (`.vscode/`, `.idea/`), build output artifacts (`.next/`, `dist/`, `out/`, `node_modules/`), or unencrypted environmental secret files (`.env`, `.env.local`). Ensure `.gitignore` rules strictly neutralize these exclusions.

## 3. Subjective Design Preferences & Linear History
* **Commit Granularity**:
  * Group commits by functional boundaries. Do not mash styling design token adjustments, routing restructuring, and project schema copy edits into a single massive unreadable git commit. Each commit should tell a clean, singular technical story.
* **Linear Trunk Fusion**:
  * When merging completed feature branches into `main`, favor squash-merging or fast-forward linear reconciliation to maintain a concise, sequential production branch changelog free of tangled multi-branch merge nodes.

## 4. Acceptance Criteria
* Verified compliance with Conventional Commit syntax across all branch history inspection logs (`git log`).
* Zero pollution of remote Git repositories with untracked build artifacts, system files, or sensitive environmental secrets.
