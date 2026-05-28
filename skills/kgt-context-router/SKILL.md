---
name: kgt-context-router
description: Choose the smallest necessary Korea Grand Tour context set for a task. Use when starting KGT work, deciding which project files to read, avoiding full-handoff rereads, routing a task to the right focused context files, or preparing a compact handoff for another KGT skill or agent.
---

# KGT Context Router

One job: choose what to read, not do the task.

## Load Order

1. `00_START_HERE/AGENTS.md`
2. `00_START_HERE/00_START_HERE/KGT_CONTEXT_STRATEGY.md`
3. `00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md`

## Procedure

1. Identify the task domain: participants, route, website, sponsor, marketing/copy, social/visual/video, legal/safety, assets, or GitHub.
2. Select the smallest focused context files.
3. Add `.agents/KGT_QUALITY_GATE.md` for high-risk or multi-stage work.
4. Read the full handoff only when the smaller files conflict or are insufficient.

## Output

```text
Read these files:
Skip for now:
Full handoff needed: yes/no + reason
```

Privacy: do not load participant-private files unless the task requires private participant operations.

Social, Instagram, Reels, Stories, YouTube thumbnails, and visual/video production route to `kgt-visual-deliverable-producer`.
