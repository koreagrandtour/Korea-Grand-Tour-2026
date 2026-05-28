# KGT Skill Consolidation Review

Last updated: 2026-05-28

Goal: keep skill performance high while reducing token use and mental overhead.

## Current Recommendation

Keep the 14 skills for now. They are compact and mostly non-overlapping. Do not merge until real use shows repeated confusion.

## Why This Is Still Token-Efficient

- Skill metadata is short.
- `SKILL.md` bodies are compact.
- Repeated rules live in `.agents/`.
- Trigger/eval matrices live in `.agents/SKILL_CREATION_STATUS.md`.
- Scripts handle scans instead of loading long file lists.

## Clear Roles

| Skill | Role | Overlap risk |
|---|---|---|
| `kgt-quality-gate` | Cross-check and improvement scan | Keep as single gate |
| `kgt-context-router` | Choose files/skills to load | Low; use first when unsure |
| `kgt-project-manager` | Decisions, priorities, open questions | Low |
| `kgt-asset-inventory` | Asset/file inventory | Low |
| `kgt-version-control-safety` | Git/GitHub safety | Low |
| `kgt-privacy-redaction` | Share-safe redaction | Medium with Git safety, but different output |
| `kgt-participant-ops` | Private participant operations | Medium with follow-up copy |
| `kgt-participant-followup-copy` | Private participant message drafting | Merge candidate if underused |
| `kgt-bilingual-copy` | EN/KR copy quality | Medium with social/website copy |
| `kgt-instagram-content-planner` | Social calendar and post planning | Medium with visual producer |
| `kgt-route-planner` | Route/roadbook operations | Low |
| `kgt-sponsor-followup` | Sponsor outreach and status | Low |
| `kgt-website-updates` | Website page preparation | Medium with bilingual copy |
| `kgt-visual-deliverable-producer` | Finished visual/video files | Low; execution-focused |

## Future Merge Candidates

1. `kgt-participant-followup-copy` into `kgt-participant-ops` if participant messaging is always part of ops.
2. `kgt-website-updates` into `kgt-bilingual-copy` if website work stays copy-only.
3. `kgt-instagram-content-planner` into `kgt-visual-deliverable-producer` only if planning and production always happen together.

## Do Not Merge Yet

- Do not merge `kgt-quality-gate`; it is intentionally shared by all.
- Do not merge `kgt-version-control-safety`; GitHub/privacy failure risk justifies a dedicated skill.
- Do not merge `kgt-route-planner`; route safety and reveal boundaries are specialized.
