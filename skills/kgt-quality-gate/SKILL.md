---
name: kgt-quality-gate
description: Low-token Korea Grand Tour quality gate for self-checking, cross-checking, handoffs, and improvement scans. Use for important KGT outputs, public/social/website/sponsor/participant/legal/GitHub work, multi-stage tasks, and before handing work from one KGT skill or agent to another.
---

# KGT Quality Gate

Use this as a small gate, not a long review. This single skill covers both the old `kgt-cross-checker` and `kgt-skill-improver` roles.

## Load Order

1. Read `.agents/KGT_QUALITY_GATE.md`.
2. Read `.agents/CROSS_CHECK_RULES.md` only for public, private, legal/safety, GitHub, sponsor, website, or high-risk work.
3. Read `.agents/KGT_IMPROVEMENT_PROTOCOL.md` after non-trivial work.
4. Use `.agents/KGT_WORKFLOW_STATUS_TEMPLATE.md` only for multi-step workflows.

## Workflow

1. Identify risk level 0-4.
2. Load the smallest source of truth needed.
3. Self-check the deliverable.
4. Cross-check only the risky parts.
5. Fix clear issues and re-check the affected part.
6. Run the improvement scan.

## Output Contract

For low-risk work, keep the note internal or one line:

```text
Check: OK - source/file
```

For high-risk work, include:

```text
Cross-check: OK/Fix/Blocked - evidence
Remaining risk/open question:
Improvement scan: none/logged/proposed/applied
```

## Rules

- Do not paste long source text.
- Do not reread the full handoff unless a compact context file is insufficient.
- Newest user instruction wins over older docs.
- Stop before exposing private participant data, unrevealed route details, unclear sponsor claims, legal/safety uncertainty, live publishing, external sends, or risky GitHub changes.
