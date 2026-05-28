# KGT Skill Consolidation Review

Last updated: 2026-05-28

Goal: keep skill performance high while reducing token use and mental overhead.

## Current Recommendation

Keep 13 active skills for now. `kgt-instagram-content-planner` has been folded into `kgt-visual-deliverable-producer` because social planning and post/reel/story production should happen together for KGT.

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
| `kgt-instagram-content-planner` | Folded into visual producer | Removed as active skill |
| `kgt-route-planner` | Route/roadbook operations | Low |
| `kgt-sponsor-followup` | Sponsor outreach and status | Low |
| `kgt-website-updates` | Website page preparation | Medium with bilingual copy |
| `kgt-visual-deliverable-producer` | Social planning plus finished visual/video files | Higher scope, but important KGT priority |

## Future Merge Candidates

1. `kgt-participant-followup-copy` into `kgt-participant-ops` if participant messaging is always part of ops.
2. `kgt-website-updates` into `kgt-bilingual-copy` if website work stays copy-only.
3. `kgt-instagram-content-planner` into `kgt-visual-deliverable-producer`: completed.

## Do Not Merge Yet

- Do not merge `kgt-quality-gate`; it is intentionally shared by all.
- Do not merge `kgt-version-control-safety`; GitHub/privacy failure risk justifies a dedicated skill.
- Do not merge `kgt-route-planner`; route safety and reveal boundaries are specialized.
