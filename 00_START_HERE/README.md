# Korea Grand Tour Operations Workspace

This folder is the working project system for **Korea Grand Tour**.

Local folder name:

```text
Korea Grand Tour
```

## Current Edition

Korea Grand Tour 2026  
Dates: August 14-17, 2026

## Efficient Context System

Codex should not read the full handoff for every task.

Use:

```text
AGENTS.md
= always-read rules

00_START_HERE/KGT_CURRENT_STATE.md
= short daily working memory

Focused context files
= marketing / sponsors / route / website / legal / copy / participant ops

00_START_HERE/codex_handoff_internal.md
= full archive/source of truth

.agents/skills/
= reusable task workflows
```

## Skills and Plugins

Skill and plugin design instructions live here:

```text
.agents/SKILL_AND_PLUGIN_BLUEPRINT.md
.agents/SKILL_CREATOR_PROMPTS.md
.agents/PLUGIN_REGISTRY.md
```

When creating or updating skills, Codex should use the built-in `$skill-creator`.

Priority skills to create first:

1. `kgt-context-router`
2. `kgt-project-manager`
3. `kgt-skill-improver`
4. `kgt-cross-checker`
5. `kgt-asset-inventory`
6. `kgt-version-control-safety`
7. `kgt-participant-ops`
8. `kgt-participant-followup-copy`
9. `kgt-bilingual-copy`
10. `kgt-instagram-content-planner`
11. `kgt-route-planner`
12. `kgt-sponsor-followup`
13. `kgt-website-updates`
14. `kgt-privacy-redaction`
15. `kgt-visual-deliverable-producer`

## Visual / Video Deliverables

For visual and video tasks, Codex should create finished files in the project folder when possible, not only scripts or ideas.

Preferred output folder:

```text
10_ASSETS/exports/
```

Each deliverable should include an export path and source/editable path when possible.

## Privacy

Do not commit or share sensitive participant/payment/insurance/private sponsor data.

Keep sensitive files local-only.

## GitHub

If this folder becomes a GitHub repo, it must be private.

## Main Project Priorities

1. Participant recruitment
2. Social media posting
3. Route planning
4. Credibility building
5. Sponsorship support
6. Operations preparation

## KGT Skill Creation System

This workspace uses a precise KGT skill creation method.

Codex should not create skills from names only. It must follow the skill creation method inside:

```text
00_START_HERE/codex_handoff_internal.md
.agents/SKILL_AND_PLUGIN_BLUEPRINT.md
.agents/SKILL_CREATOR_PROMPTS.md
```

Each skill must include:

- one clear job,
- real trigger examples,
- non-trigger examples,
- failure modes,
- context files to read,
- files it may write,
- privacy rules,
- step-by-step procedure,
- output contract,
- eval prompts,
- cross-check rules,
- self-improvement rules.

## Visual Production System

For visual/video work, Codex must create a production brief, then produce finished files in:

```text
10_ASSETS/exports/YYYY-MM-DD_slug/
```

Outputs should include:

```text
final/
source/
preview/
notes.md
qa_report.md
```

If a tool/plugin is missing, Codex must say what is missing and recommend the right plugin or skill instead of pretending a final deliverable exists.

## Continuous Improvement

Codex should improve the workspace when real work reveals better procedures.

Improvement notes go to:

```text
.agents/IMPROVEMENT_LOG.md
```


## First Setup vs Daily Work

For the **first Codex setup run**, Codex should read:

1. `AGENTS.md`
2. `00_START_HERE/codex_handoff_internal.md`
3. `00_START_HERE/KGT_CURRENT_STATE.md`
4. `00_START_HERE/KGT_CONTEXT_STRATEGY.md`
5. `.agents/SKILL_AND_PLUGIN_BLUEPRINT.md`
6. `.agents/KGT_SKILL_CREATION_STANDARD.md`
7. `.agents/SKILL_CREATOR_PROMPTS.md`
8. `.agents/PLUGIN_REGISTRY.md`

This gives Codex the full Korea Grand Tour context before creating skills.

For normal future tasks, Codex should **not** reread the full handoff unless needed. It should use `AGENTS.md`, `KGT_CURRENT_STATE.md`, and the relevant focused context file.

## Two-Phase Codex Setup

This project is set up in two phases.

### Phase 1 — Project System Setup

Use first:

```text
00_START_HERE/CODEX_PROMPTS/PROMPT_01_PROJECT_SYSTEM_SETUP.md
```

Purpose:

- Understand Korea Grand Tour deeply.
- Inspect and organize the local folder.
- Create the project architecture.
- Create focused context files.
- Create privacy/local-only rules.
- Prepare `.gitignore` and GitHub safety.
- Establish cross-checking and continuous improvement.
- Create skill/plugin backlog only.
- Do **not** create skills yet.

### Phase 2 — Skill Creation After Setup

Use only after Phase 1 is complete:

```text
00_START_HERE/CODEX_PROMPTS/PROMPT_02_SKILL_CREATION_AFTER_SETUP.md
```

Purpose:

- Create skills with `$skill-creator`.
- Start with foundational skills.
- Then create execution skills.
- Add evals, cross-check rules, improvement rules, and output contracts.
- Plan plugins carefully.

The final goal is not skill creation. The final goal is to build a working operating system for Korea Grand Tour.
