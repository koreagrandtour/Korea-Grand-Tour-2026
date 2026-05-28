# KGT Skill Creator Prompts

Use these compact prompts when creating or improving skills with `$skill-creator`.

## New Skill Prompt

```text
Create a compact KGT skill named <skill>. One job only. Use the KGT Skill Creation Standard. Keep SKILL.md short, reference existing .agents rules, add scripts only if they reduce repeated work, validate, mirror globally, and update SKILL_CREATION_STATUS.md.
```

## Update Skill Prompt

```text
Improve <skill> only where needed for trigger clarity, privacy, low-token routing, output contract, quality gate use, or failure prevention. Do not expand prose unless it prevents a real mistake.
```

## Eval Prompt Pattern

```text
Use $<skill> to handle: <real KGT task>. Return the expected output and name any blocker or open question.
```
