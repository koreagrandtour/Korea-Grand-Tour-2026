# KGT Agent Handoff Contract

Use this when one agent/skill passes work to another.

## Minimal Handoff

```text
Task:
Latest user instruction:
Source of truth:
Files touched:
Decisions made:
Open questions:
Risks:
Next action:
```

## Rules

- Do not pass full chat history unless needed.
- Do not pass raw tool output when a 1-line result is enough.
- Do not pass private participant details unless the receiving task truly needs them.
- Receiver must check source of truth before acting on inherited facts.
- If inherited facts conflict with newest user instruction, newest user instruction wins.

## Cross-Agent Check

Producer says:

```text
Self-check: OK/Fix/Blocked - evidence
```

Receiver says:

```text
Cross-check: OK/Fix/Blocked - evidence
```
