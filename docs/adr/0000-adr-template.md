# ADR-0000: Architectural Decision Record Template (Michael Nygard Format)

**Status**: Active / Standard  
**Date**: 28-07-2026  

## 1. Status
*Options: Proposed | Accepted | Rejected | Deprecated | Superseded by ADR-XXXX*

State the current operational status of the architectural decision. Once accepted and published to stable branches, the content of this decision record becomes historical and immutable. If subsequent engineering requirements necessitate a structural reversal or replacement, generate a new numbered ADR file and mark this status as `Superseded by ADR-XXXX`.

## 2. Context
Describe the specific engineering problem, architectural friction point, security vulnerability, or organizational challenge forcing a architectural decision. Document the surrounding operational forces, technical limitations, bandwidth concerns, compatibility requirements, and system boundaries at play. Distinguish clearly between objective technical constraints and subjective preferences.

## 3. Decision
State the explicit engineering decision being adopted to resolve the problem outlined in the Context section. Write directly, concisely, and unequivocally using definitive architectural command language (e.g., "We will adopt...", "We will remove...", "We enforce..."). Avoid uncertain phrasing or speculative future promises.

## 4. Consequences
Detail the complete spectrum of structural results triggered by implementing this decision:
* **Positive Engineering Consequences**: Quantified performance gains, reduced bundle weight, enhanced WCAG compliance, type security improvements, or simplified maintainability.
* **Negative Trade-offs and Limitations**: Increased compilation times, stricter development authoring rules, lost SPA cross-fade animation capabilities, or learning curve adjustments.
* **Compliance Obligations**: Specific standards, verification rules, or continuous integration linting checks required to safeguard this decision against erosion.

## 5. Alternatives Considered
Summarize the alternative frameworks, patterns, or tools evaluated during proposal evaluation and explain explicitly why each was rejected:
* **Alternative 1 (e.g., Option Name)**: Brief summary of capability. *Reason for Rejection*: Concrete technical justification (e.g., excessive client bundle overhead, runtime styling performance penalty, incompatible licensing, or violation of `CONSTITUTION.md` rules).
* **Alternative 2 (e.g., Option Name)**: Brief summary of capability. *Reason for Rejection*: Concrete technical justification.
