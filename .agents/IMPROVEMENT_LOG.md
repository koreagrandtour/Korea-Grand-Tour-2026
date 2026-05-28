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

## 2026-05-28 - Phase 2 Skill System Completion

- Task: Implement the token-efficient Phase 2 skills plan.
- What happened: Shared governance files were added, remaining foundation/execution skills were created, and `kgt-quality-gate` remained the single cross-check/improvement skill.
- Issue found: Older planning text still referenced `.agents/skills/` and separate cross-checker/improver skills.
- Proposed improvement: Standardize on `skills/` plus global mirror, and record cross-check/improvement as folded into `kgt-quality-gate`.
- Affected file/skill/plugin: `00_START_HERE/00_START_HERE/KGT_CONTEXT_STRATEGY.md`, `.agents/SKILL_BACKLOG.md`, `skills/kgt-quality-gate/SKILL.md`
- Urgency: Medium
- Requires François approval: No; implements approved token-efficient plan.

## 2026-05-28 - Asset Scanner Noise Reduction

- Task: Test Phase 2 helper scripts.
- What happened: `kgt-asset-inventory` flagged ordinary `KakaoTalk_Photo` exports in raw media as private.
- Issue found: The generic `kakao` filename rule created noisy false positives.
- Proposed improvement: Classify raw archive/heavy media before private filename heuristics and remove generic `kakao` matching.
- Affected file/skill/plugin: `skills/kgt-asset-inventory/scripts/scan_assets.py`
- Urgency: Medium
- Requires François approval: No; low-risk false-positive reduction.

## 2026-05-28 - Skill Consolidation Review

- Task: Review the 14 KGT skills for token usage and overlap.
- What happened: Most skills are compact and route to focused context files, but 14 names may feel heavy operationally.
- Issue found: `kgt-participant-followup-copy`, `kgt-bilingual-copy`, `kgt-instagram-content-planner`, and `kgt-website-updates` all touch copy; `kgt-project-manager` and `kgt-context-router` both guide task startup.
- Proposed improvement: Keep all 14 for now because their triggers are distinct, but use `kgt-context-router` first for ambiguous tasks. Revisit consolidation after real usage; strongest future merge candidate is `kgt-participant-followup-copy` into `kgt-participant-ops` if it feels too granular.
- Affected file/skill/plugin: `.agents/SKILL_CONSOLIDATION_REVIEW.md`, `.agents/SKILL_CREATION_STATUS.md`
- Urgency: Low
- Requires François approval: Yes before deleting or merging any existing skill.

## 2026-05-28 - Google Sheets Tracker Access Updated

- Task: Re-check Google Drive/Sheets connector access to the participant tracker.
- What happened: Metadata access now works for spreadsheet `16VXP5YBeCo9yiTCfAWUsbVQvQbR5FHT48KLSihDLF50`.
- Issue found: Old docs still said Codex lacked permission.
- Proposed improvement: Update participant context, current state, and open questions to remove the old access blocker while preserving private-row caution.
- Affected file/skill/plugin: `05_PARTICIPANTS_LOCAL_ONLY/participant_context_private.md`, `00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md`, `00_START_HERE/00_START_HERE/open_questions.md`
- Urgency: Medium
- Requires François approval: No; reflects verified access metadata.

## 2026-05-28 - Social Media Skill Merge

- Task: Merge Instagram-related planning into the visual/social deliverable skill.
- What happened: `kgt-instagram-content-planner` was folded into `kgt-visual-deliverable-producer`.
- Issue found: KGT social work needs strategy, research, captions, hashtags, music, visuals, and video production in one workflow; separate planning risked duplicated context.
- Proposed improvement: Use one social/visual producer skill with KGT account review, similar-channel research, Korean/global trend checks, OpenAI image 2.0, Canva editing, and HyperFrames video/motion workflow.
- Affected file/skill/plugin: `skills/kgt-visual-deliverable-producer/`, `skills/kgt-context-router/`, `.agents/SKILL_CREATION_STATUS.md`, `.agents/PLUGIN_REGISTRY.md`, `.agents/PLUGIN_BACKLOG.md`
- Urgency: High
- Requires François approval: Approved by request.

## Template

- Date:
- Task:
- What happened:
- Issue found:
- Proposed improvement:
- Affected file/skill/plugin:
- Urgency:
- Requires François approval:
