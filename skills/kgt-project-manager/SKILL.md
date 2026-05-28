---
name: kgt-project-manager
description: Maintain Korea Grand Tour operating state, priorities, open questions, decision log, milestones, and next actions. Use when updating KGT_CURRENT_STATE.md, open_questions.md, decision_log.md, approval_register.md, milestone status, task priorities, or concise project handoffs.
---

# KGT Project Manager

One job: keep KGT decisions and priorities current.

## Load Order

1. `00_START_HERE/AGENTS.md`
2. `00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md`
3. `00_START_HERE/00_START_HERE/open_questions.md`
4. `00_START_HERE/decision_log.md`
5. task-specific context file if needed

## Procedure

1. Separate confirmed facts, recommendations, and `OPEN QUESTION`.
2. Keep 2025 actuals separate from 2026 projections.
3. Update only the smallest necessary project-management file.
4. Run `kgt-quality-gate` for public, private, safety/legal, sponsor, or GitHub-impacting updates.

## May Write

- `00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md`
- `00_START_HERE/00_START_HERE/open_questions.md`
- `00_START_HERE/decision_log.md`
- `00_START_HERE/approval_register.md`
- `.agents/IMPROVEMENT_LOG.md`

Output: changed facts, open questions, next actions, and any blocker.
