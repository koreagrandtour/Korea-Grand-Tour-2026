---
name: kgt-version-control-safety
description: Review Korea Grand Tour Git status, staged files, commits, and pushes for private data, huge files, credentials, raw media, participant documents, route reveal risk, and GitHub scope. Use before KGT commits or pushes, after large file moves, when preparing GitHub-safe files, or when checking whether a file belongs in the private 2026 repo.
---

# KGT Version Control Safety

Use before commits and pushes. Do not stage private files to "test" safety.

## Load Order

1. Read `.agents/KGT_QUALITY_GATE.md`.
2. Read `.agents/github_safety_checklist.md` and `.agents/git_safety_report.md` when making GitHub decisions.
3. Read `.gitignore`.

## Fast Check

Run from the KGT repo root:

```bash
python3 skills/kgt-version-control-safety/scripts/git_safety_check.py
```

Use `--all-tracked` to check tracked files as well as staged files.

## Blockers

Block commit/push if staged files include:

- participant private folder contents
- payment proof, insurance, passport, license, ID, agreement PDFs
- credentials, tokens, `.env`, private keys
- raw videos or huge archives unless explicitly approved
- unrevealed route details intended to stay private

## Output Contract

```text
Git safety:
Blockers:
Warnings:
Safe staged files:
Action:
```

If blocked, do not push. Explain the exact path and reason without exposing private contents.
