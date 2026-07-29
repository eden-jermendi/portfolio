# Styling Architecture

**Status**: Architectural Specification  
**Version**: 1.0  

## Purpose
Define how the Visual Language specification is engineered into code. This document enforces the zero-runtime CSS philosophy, ensuring that styles remain robust, predictable, and fully independent of JavaScript execution.

---

## Zero-Runtime Philosophy
* Tailwind, Styled Components, and runtime CSS-in-JS are strictly prohibited.
* All styling is authored via standard CSS (or CSS Modules) leveraging native CSS Custom Properties (Variables).
* **Why**: Native CSS scales flawlessly, ships instantly without JavaScript overhead, and completely decouples presentation from the component rendering lifecycle.

---

## Token Layering Architecture

The CSS variables MUST follow a strict three-layer hierarchy:

### 1. Primitive Tokens
* **Definition**: Raw, hardcoded values.
* **Format**: `--color-blue-500: #0F172A;` or `--spacing-4: 16px;`
* **Usage**: Primitive tokens MUST NEVER be applied directly to a component or semantic class. They exist solely to construct semantic tokens.

### 2. Semantic Tokens
* **Definition**: Intent-based variables that consume primitive tokens.
* **Format**: `--surface-muted: var(--color-slate-100);` or `--space-lg: var(--spacing-6);`
* **Usage**: This is the primary layer consumed by components. When Dark Mode is implemented, only this layer is mutated.

### 3. Component Tokens
* **Definition**: Scoped variables strictly bound to a specific component block.
* **Format**: `--btn-bg: var(--accent-primary);`
* **Usage**: Used to insulate complex components from global cascade collisions.

---

## Global Styles vs Component Styles
* **Global (`globals.css`)**: Defines the CSS reset, the token variables (in `:root`), and base typographic HTML selectors (`body`, `a`, `h1`).
* **Component (`*.module.css`)**: UI components MUST use CSS Modules. This enforces localized scoping and prevents unintended regressions.

---

## Theme Strategy & Dark Mode
* Theme toggling is handled strictly via CSS classes appended to the `<html>` or `<body>` tag (e.g., `<html class="theme-dark">`).
* The `.theme-dark` class simply redefines the Semantic Tokens, pointing them to a different set of Primitive Tokens. No component logic is aware of the current theme.

---

## Motion Strategy
* Motion is governed by global transition variables (e.g., `--duration-fast`).
* **Reduced Motion**: The global stylesheet MUST include a `@media (prefers-reduced-motion: reduce)` media query that globally overrides all transition durations to `0ms`.
