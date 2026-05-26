# CODEX PROMPT 02 — Create KGT Skills After the Workspace Is Clean

Use this only after Prompt 01 has been completed and the local KGT folder is organized.

---

## Mission

Now that the Korea Grand Tour project workspace is organized, create the skills system.

The goal is still not “skills for the sake of skills.” The goal is to make Codex faster, safer, lower-token, more precise, and more useful for running Korea Grand Tour.

## Before starting

Read:

1. `AGENTS.md`
2. `00_START_HERE/KGT_CURRENT_STATE.md`
3. `00_START_HERE/KGT_CONTEXT_STRATEGY.md`
4. `.agents/CROSS_CHECK_RULES.md`
5. `.agents/IMPROVEMENT_LOG.md`
6. `.agents/SKILL_BACKLOG.md`
7. `.agents/PLUGIN_BACKLOG.md`
8. `.agents/SKILL_AND_PLUGIN_BLUEPRINT.md`
9. `.agents/KGT_SKILL_CREATION_STANDARD.md`
10. `.agents/SKILL_CREATOR_PROMPTS.md`

Only read the full handoff if the smaller files are insufficient.

## First check if Phase 1 is complete

Before creating skills, check whether the workspace is ready.

Confirm:

- folder structure exists,
- focused context files exist,
- `.gitignore` exists,
- privacy/local-only folders exist,
- asset inventory exists,
- open questions file exists,
- GitHub safety checklist exists,
- cross-check rules exist,
- improvement log exists.

If these are missing, stop and fix the Phase 1 workspace first.

## Required skill creation process

Use the built-in `$skill-creator` to create or update skills.

Do not create vague skills from names only.

For every skill:

1. Define the skill’s one job.
2. List 5 real KGT tasks that should trigger it.
3. List 3 tasks that should not trigger it.
4. List 3 failure modes to prevent.
5. Write a trigger-focused YAML description.
6. Decide what belongs in `SKILL.md` vs `references/`, `templates/`, and `scripts/`.
7. Define:
   - files to read,
   - files it may write,
   - privacy rules,
   - step-by-step procedure,
   - expected output,
   - cross-check rule,
   - improvement rule,
   - when to consult the full handoff.
8. Add evaluation prompts.
9. Track status in `.agents/SKILL_CREATION_STATUS.md`.

## Phase 2A — Create only the core operating skills first

Create these first:

1. `kgt-context-router`
2. `kgt-project-manager`
3. `kgt-skill-improver`
4. `kgt-cross-checker`
5. `kgt-asset-inventory`
6. `kgt-version-control-safety`
7. `kgt-privacy-redaction`

These are the foundation. Do not create all 50+ skills at once.

## Phase 2B — Create immediate execution skills after foundation

After the core operating skills are created and checked, create:

1. `kgt-participant-ops`
2. `kgt-participant-followup-copy`
3. `kgt-bilingual-copy`
4. `kgt-instagram-content-planner`
5. `kgt-route-planner`
6. `kgt-sponsor-followup`
7. `kgt-website-updates`
8. `kgt-visual-deliverable-producer`

If the sample `kgt-visual-deliverable-producer` skill already exists, inspect it and improve it according to the KGT Skill Creation Standard instead of recreating it blindly.

## Visual/video deliverable rule

For any visual or video task, the skill system must not stop at scripts or prompts if file creation is possible.

It must:

1. Create a KGT Visual Production Brief.
2. Use real KGT assets first.
3. Choose the right tool or model.
4. Create finished files in:

```text
10_ASSETS/exports/YYYY-MM-DD_slug/
```

5. Save:
   - final output,
   - source/editable file if possible,
   - preview,
   - notes,
   - QA report.

If a plugin/tool is missing, say exactly what is missing and recommend the required plugin.

## Plugin planning

Do not build plugins blindly.

Create or update:

```text
.agents/PLUGIN_REGISTRY.md
```

Prioritize plugin planning for:

- Google Drive / file access,
- Google Sheets trackers,
- Gmail outreach,
- Calendar operations,
- Maps/route research,
- Canva/Figma visual production,
- GitHub safety,
- local privacy scanner,
- document export,
- media production.

For each plugin, define:

- purpose,
- what it helps KGT do,
- what skills it supports,
- required access/permissions,
- privacy risks,
- fallback workflow if unavailable.

## Continuous improvement

After creating or using any skill, run the improvement loop.

Record findings in:

```text
.agents/IMPROVEMENT_LOG.md
```

If Codex sees a better way to reduce tokens, improve precision, protect privacy, or create deliverables faster, it should suggest the improvement.

## End your response with this report

1. Which Phase 1 files were checked.
2. Whether the workspace was ready for skills.
3. Which skills were created.
4. Which skills were not created yet and why.
5. Which plugins are recommended next.
6. What tests/evals were added.
7. What improvement suggestions were recorded.
8. What I should do next.
