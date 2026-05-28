# KGT Quality Gate

Purpose: keep Korea Grand Tour work accurate, private, safe, and low-token.

## Core Loop

1. Load smallest context.
2. Do the work.
3. Self-check.
4. Cross-check only the risky parts.
5. Fix and re-check.
6. Run improvement scan.

## Risk Levels

| Level | Examples | Required check |
|---|---|---|
| 0 | tiny internal note | quick self-check |
| 1 | internal doc/context update | self-check + source file check |
| 2 | participant/sponsor/route planning | self-check + relevant perspective checks |
| 3 | public copy, website, social, GitHub | full cross-check + evidence |
| 4 | private data, legal/safety, live publishing, external sends | full cross-check + approval if uncertain |

## Evidence

Use one short evidence line:

```text
Check: OK/Fix/Blocked - source/readback/file
```

Do not paste long source text. Link or name the file/range/tool result.

## Stop Conditions

Stop and ask Francois when:

- private participant data may leak
- route reveal boundary is unclear
- sponsor status is unclear
- legal/safety wording changes real obligations
- live publishing/email/sheet writes are not explicitly approved
- GitHub may receive private or huge files
