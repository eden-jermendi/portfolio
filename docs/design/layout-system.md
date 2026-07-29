# Layout System

**Status**: Approved Foundation  
**Purpose**: Define the structural layout primitives and whitespace philosophy.  

## Philosophy
The layout system exists strictly to bound content into optimal reading dimensions. We do not use layout for decoration. The system is fluid, prioritizing character measure over rigid grid columns, ensuring the technical journal aesthetic is preserved on all devices.

---

## 1. Container Philosophy
**Rule**: Content is always bounded by a centered container with fluid horizontal gutters.
**Why**: Bounding content prevents line lengths from extending infinitely on large monitors, which destroys reading comprehension. The container acts as the physical "page" of our journal.

## 2. Reading Width (Maximum Line Length)
**Rule**: Standard prose (Body Text, Lead Paragraphs) must be strictly constrained to a maximum measure of roughly **65-75 characters** (approx. `600px` - `680px`).
**Why**: The human eye struggles to track from the end of a long line back to the beginning of the next. Enforcing a strict typographic measure is the single most important layout decision for an editorial publication.

## 3. Wide Content (Breaking the Measure)
**Rule**: Complex data structures (Architecture Diagrams, Tables, wide Code Blocks) are permitted to break the standard reading measure, expanding to a "Wide" container limit (e.g., `900px` - `1000px`).
**Why**: Forcing a massive database schema diagram or a 10-column table into a 65-character column renders it illegible. The layout must intelligently expand to accommodate high-density information without compromising the surrounding prose.

## 4. Full Bleed Content
**Rule**: Full bleed (edge-to-edge on large screens) is strictly prohibited.
**Why**: Full bleed breaks the technical journal metaphor, leaning into immersive marketing/agency aesthetics. It removes the structural boundaries required for focused engineering reading.

## 5. Grid Philosophy and Column Rules
**Rule**: We prioritize a single-column editorial flow for primary content. Multi-column grids are reserved *only* for index pages (e.g., a grid of project cards) or distinct metadata sidebars.
**Why**: Multi-column layouts in deep technical writing force the eye to jump laterally, disrupting the linear narrative of a case study. 

## 6. Margins and Gutters
**Rule**: Gutters (the space between grid columns or the edge of the viewport) must never collapse to zero. A minimum safe margin (e.g., `space-md` or `space-lg`) is perpetually maintained on mobile devices.
**Why**: Text touching the edge of the glass creates claustrophobia and violates the "Whitespace before surfaces" principle.

## 7. Responsive Behaviour
**Rule**: Layouts scale fluidly until they hit their maximum container bounds, at which point they center. We do not arbitrarily shuffle layout blocks across 5 different breakpoints.
**Why**: A rigid, predictable layout behaves identically across a tablet and a desktop, only scaling down when physical screen constraints demand it (mobile).

## 8. Alignment Rules
**Rule**: All text and structural components are **Left-Aligned (Ragged Right)** by default. Center alignment is strictly limited to isolated UI elements (e.g., pagination). Justified text is prohibited.
**Why**: Left-alignment provides a consistent anchor for the eye. Justified text creates irregular "rivers of whitespace" that damage readability, especially for dyslexic readers.

## 9. Whitespace Philosophy
**Rule**: Whitespace is an active structural element, not "empty" space waiting to be filled.
**Why**: In the absence of heavy borders, backgrounds, and drop shadows, whitespace is the *only* tool we have to communicate grouping, separation, and hierarchy. If a layout feels empty, we do not add a decorative component; we adjust the layout constraints.
