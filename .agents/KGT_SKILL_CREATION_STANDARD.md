# KGT Skill Creation Standard

Use for every Korea Grand Tour skill. Keep skills compact and task-shaped.

## Required Shape

- One job only.
- Trigger-focused YAML description.
- `SKILL.md` contains only: purpose, load order, procedure, privacy rule, output contract, quality rule.
- Repeated rules live in `.agents/`, not copied into every skill.
- Trigger examples, non-triggers, failure modes, and eval prompts are tracked in `.agents/SKILL_CREATION_STATUS.md`.

## Context Rule

Read the smallest set:

1. `00_START_HERE/AGENTS.md`
2. `00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md`
3. relevant focused context file
4. full handoff only when smaller files are insufficient

## Quality Rule

Use `kgt-quality-gate` for important, public, private, legal/safety, GitHub, sponsor, website, or multi-stage work.

## Install Rule

Every completed skill must exist in:

- `skills/<skill-name>/`
- `/Users/Francois/.codex/skills/<skill-name>/`

Validate with `$skill-creator` and mirror after updates.
