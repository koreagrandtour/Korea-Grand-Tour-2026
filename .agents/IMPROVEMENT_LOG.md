# Improvement Log

Append after non-trivial work when the system can become faster, safer, cleaner, or less token-heavy.

## 2026-05-26 - Phase 1 Operating System Setup

- Task: Build the initial KGT local operating system.
- What happened: The handoff already contained strong rules and the folder contains real private agreements, heavy media, website prototypes, and local credentials.
- Issue found: Existing project materials are spread across older folders and the new architecture did not yet have focused daily context files.
- Proposed improvement: Keep old assets in place for now, create focused context files, and use inventory/index docs before any move.
- Affected file/skill/plugin: `01_ASSETS/asset_inventory.md`, context files, `.gitignore`, `.agents/`
- Urgency: High
- Requires François approval: No for docs/safety structure; Yes before moving assets.

## 2026-05-27 - Phase 1 Decision Closure

- Task: Record Francois's Phase 1 approvals and remaining uncertainties.
- What happened: Most public, brand, route, sponsor, legal, and Phase 2 gate decisions are now confirmed.
- Issue found: The participant tracker is identified but inaccessible to the connected Google Drive account; website prototype files are currently missing from the working tree and should not be silently deleted.
- Proposed improvement: Keep a separate approval register/current-state/open-question rhythm, and treat external tool access plus asset deletions as explicit blockers before execution work.
- Affected file/skill/plugin: `00_START_HERE/approval_register.md`, `00_START_HERE/00_START_HERE/open_questions.md`, Google Drive connector, `07_WEBSITE/prototypes/`
- Urgency: Medium
- Requires François approval: No for documentation; Yes before committing website prototype deletions.

## 2026-05-28 - Low-Token Quality Foundation

- Task: Prepare Phase 2 cross-check and auto-improvement foundation.
- What happened: Current rules were useful but passive; they did not force self-check, receiver cross-check, evidence, or improvement levels.
- Issue found: Too much process could increase token cost if every task loads every rule.
- Proposed improvement: Use risk levels, smallest-context routing, compact handoffs, short evidence lines, and improvement levels.
- Affected file/skill/plugin: `.agents/CROSS_CHECK_RULES.md`, `.agents/KGT_QUALITY_GATE.md`, `.agents/KGT_IMPROVEMENT_PROTOCOL.md`, future skills
- Urgency: High
- Requires François approval: Approved by request.

## 2026-05-28 - First Phase 2 Skills

- Task: Create the first KGT skills in the repo and global Codex skill folder.
- What happened: `kgt-quality-gate`, `kgt-asset-inventory`, and `kgt-version-control-safety` were created with compact bodies and helper scripts for repeated scans.
- Issue found: The Git safety helper initially warned on all `KakaoTalk_Photo` filenames, creating noise.
- Proposed improvement: Remove generic `kakao` filename warnings; keep warnings focused on actual private-conversation or contact/detail indicators.
- Affected file/skill/plugin: `skills/kgt-version-control-safety/scripts/git_safety_check.py`
- Urgency: Medium
- Requires François approval: No; low-risk tuning to reduce false positives.

## Template

- Date:
- Task:
- What happened:
- Issue found:
- Proposed improvement:
- Affected file/skill/plugin:
- Urgency:
- Requires François approval:
