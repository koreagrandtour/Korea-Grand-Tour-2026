# KGT Plugin / Skill Update Rules

Purpose: improve skills/plugins safely and with low token cost.

## Safe To Update Directly

Allowed when clearly low-risk:

- typo fixes
- shorter wording with same meaning
- adding missing trigger/non-trigger examples
- adding a known privacy warning
- adding a source-of-truth file link
- adding a compact checklist item already approved elsewhere

## Propose First

Ask/propose before:

- changing what a skill is allowed to do
- adding live publishing/email/write behavior
- changing privacy or GitHub rules
- changing sponsor/legal/safety policy
- adding dependencies or external services
- creating a new plugin

## Required For Every Skill

- short purpose
- trigger examples
- non-trigger examples
- context files to read first
- privacy rules
- self-check
- cross-check
- improvement scan
- failure/blocker behavior

## Validation

After edits:

1. inspect changed files
2. run available validation when practical
3. check `@` discoverability for plugins when relevant
4. commit only safe, intended files
