# CODEX PROMPT 01 — Build the Korea Grand Tour Project System First

Paste this into Codex from inside the local folder named `Korea Grand Tour`.

---

## Mission

The goal is **not** to create skills yet.

The goal is to help me build a serious, clean, safe, efficient operating system for the Korea Grand Tour project inside this local folder.

First, understand the project deeply. Then organize the local workspace, create the rules, architecture, folders, project documents, privacy boundaries, and GitHub-safe structure.

Skills will come later, after the project folder is tidy and the operating rules are stable.

## Read first, in this order

1. `AGENTS.md`
2. `00_START_HERE/codex_handoff_internal.md`
3. `00_START_HERE/KGT_CURRENT_STATE.md`
4. `00_START_HERE/KGT_CONTEXT_STRATEGY.md`
5. `README.md`

Only after that, inspect the local folder.

Do not start by creating skills.

## What I need you to do in Phase 1

### 1. Understand the project

Read the handoff and summarize for yourself:

- what Korea Grand Tour is,
- the 2025 edition,
- the 2026 edition,
- current priorities,
- participant registration situation,
- sponsor situation,
- route status,
- website status,
- safety/legal rules,
- marketing direction,
- open decisions.

Then create or update:

```text
00_START_HERE/KGT_CURRENT_STATE.md
00_START_HERE/open_questions.md
00_START_HERE/decision_log.md
```

Keep `KGT_CURRENT_STATE.md` short enough to be daily working memory.

### 2. Inspect the local folder

Create a safe inventory of what is in the local folder.

Look for:

- photos,
- videos,
- car visuals,
- logos,
- sponsor decks,
- route files,
- website materials,
- spreadsheets,
- participant/payment documents,
- Google Drive exports or synced files,
- duplicate/old files,
- sensitive/private files,
- huge files that should not go to GitHub.

Do not delete, move, rename, or restructure important assets without asking me first.

Create:

```text
10_ASSETS/asset_inventory.md
10_ASSETS/file_cleanup_plan.md
10_ASSETS/sensitive_assets_local_only.md
```

### 3. Create the project architecture

Create or update the folder structure needed for the KGT operating system:

```text
00_START_HERE/
01_STRATEGY/
02_2025_FIRST_EDITION/
03_2026_SECOND_EDITION/
04_ROUTE_AND_OPERATIONS/
05_PARTICIPANTS_LOCAL_ONLY/
06_SPONSORS_PARTNERS/
07_WEBSITE/
08_MARKETING/
09_COPY_BANK/
10_ASSETS/
11_LEGAL_AND_SAFETY/
12_POST_EVENT/
.agents/
```

Create only useful files at first. Do not create empty complexity for no reason.

### 4. Create focused context files

Create concise context files so future tasks do not require rereading the full handoff:

```text
08_MARKETING/marketing_context.md
06_SPONSORS_PARTNERS/sponsor_context.md
04_ROUTE_AND_OPERATIONS/route_context.md
07_WEBSITE/website_context.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
09_COPY_BANK/key_positioning_lines.md
09_COPY_BANK/korean_tone.md
05_PARTICIPANTS_LOCAL_ONLY/participant_context_private.md
```

The full handoff remains the archive/source of truth. These smaller files are the daily working context.

### 5. Create privacy and local-only rules

Set up private/local-only areas.

Sensitive information must stay local-only unless I explicitly say otherwise:

- participant personal details,
- phone numbers,
- emails,
- car plate numbers,
- insurance files,
- driver license/passport files,
- payment proof,
- private participant conversations,
- confidential sponsor negotiation notes.

Create/update:

```text
05_PARTICIPANTS_LOCAL_ONLY/README_PRIVATE.md
05_PARTICIPANTS_LOCAL_ONLY/private/
```

### 6. Create or improve `.gitignore`

Make sure GitHub will not accidentally receive private or huge files.

Protect:

- participant private files,
- payment proof,
- insurance,
- IDs/licenses/passports,
- credentials,
- raw videos,
- huge exports.

Create/update:

```text
.gitignore
.agents/git_safety_report.md
```

### 7. Prepare GitHub linking, but do not push private data

My GitHub account exists and uses:

```text
koreagrandtour@gmail.com
```

Help me prepare this local folder to become a **private GitHub repo**, but do not push anything automatically unless I explicitly ask.

Create:

```text
00_START_HERE/github_setup_guide.md
.agents/github_safety_checklist.md
```

The repo must be private.

### 8. Create cross-check and improvement rules now

Even before skills are created, the workspace must include two permanent operating habits:

#### Cross-checking

Before any important/public/high-risk output, you must cross-check from these perspectives:

- project manager,
- marketing/PR,
- operations,
- safety/legal,
- privacy,
- KGT brand/tone,
- factual accuracy.

Create:

```text
.agents/CROSS_CHECK_RULES.md
```

#### Continuous improvement

After non-trivial work, check whether the system can improve.

If yes, record:

```text
.agents/IMPROVEMENT_LOG.md
```

Possible improvements:

- better folder structure,
- better context files,
- better prompt,
- better skill later,
- better plugin later,
- better privacy rule,
- better checklist,
- lower-token workflow.

### 9. Do not create skills yet

For now, do **not** create the full skills system.

You may create:

```text
.agents/SKILL_BACKLOG.md
.agents/PLUGIN_BACKLOG.md
```

These should list what skills/plugins should be created later, after the folder is clean.

But do not run `$skill-creator` yet unless I specifically ask.

### 10. End your first response with this report

At the end, tell me:

1. What you understood about Korea Grand Tour.
2. What you found in the folder.
3. What files/folders you created or updated.
4. What you did to protect privacy.
5. What you did to prepare GitHub safely.
6. What focused context files are now available.
7. What still blocks progress.
8. What you recommend as the next step before creating skills.
9. Whether the folder is ready for Phase 2: skill creation, or not yet.

## Important rules

- Do not invent facts.
- Mark missing information as `OPEN QUESTION`.
- Separate confirmed facts from recommendations.
- Keep 2025 actual metrics separate from 2026 projections.
- Do not expose private participant data.
- Do not delete or move important assets without asking.
- Do not create skills yet.
- Keep the KGT tone warm, human, direct, premium but not corporate.
