# KGT Improvement Protocol

Purpose: improve the operating system after real work without bloating prompts or changing behavior recklessly.

## After Every Non-Trivial Task

Ask:

1. Did we repeat context reading?
2. Did a checklist miss a risk?
3. Did a file/folder name slow us down?
4. Did a skill/plugin need clearer triggers?
5. Did a tool output need a shorter readback?
6. Did privacy/GitHub safety need a stronger rule?

## Improvement Levels

| Level | Action |
|---|---|
| 0 | no change |
| 1 | update context/checklist directly if low-risk |
| 2 | log improvement only |
| 3 | propose skill/plugin change |
| 4 | ask Francois before behavior/integration/privacy changes |

## Log Format

Append to `.agents/IMPROVEMENT_LOG.md`:

```text
Date:
Task:
Issue:
Improvement:
Level:
Applied/proposed:
```

## Token Discipline

- Prefer short checklists over long prose.
- Prefer links/file names over pasted content.
- Prefer delta summaries over full rewrites.
- Put reusable rules in stable files, not repeated final answers.
- Keep daily context files short enough to read often.
