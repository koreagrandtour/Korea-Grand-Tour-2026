# Skill Backlog

Phase 1 only. Do not create these skills yet.

Create skills in Phase 2 only after François confirms the folder is ready.

## Foundation Skills

0. `kgt-quality-gate`
   - Enforce low-token self-check, cross-check, workflow evidence, and improvement scan.
   - Read `.agents/KGT_QUALITY_GATE.md` first.

1. `kgt-context-router`
   - Route tasks to the smallest necessary context files.
   - Prevent reading the full handoff unnecessarily.

2. `kgt-project-manager`
   - Maintain priorities, milestones, open questions, decision log, and next actions.

3. `kgt-cross-checker`
   - Cross-check public/high-risk outputs for accuracy, privacy, safety/legal risk, tone, and operations feasibility.
   - Must use risk levels to avoid over-checking low-risk work.

4. `kgt-skill-improver`
   - Record workflow improvements and suggest skill/plugin/context updates after real work.
   - Must follow `.agents/KGT_IMPROVEMENT_PROTOCOL.md`.

5. `kgt-version-control-safety`
   - Protect private data and heavy assets before Git commits/pushes.

## Execution Skills

1. `kgt-asset-inventory`
   - Build and update asset indexes with privacy and GitHub status.

2. `kgt-participant-ops`
   - Manage local-only participant trackers, reminders, agreements, payment status, and interview status.

3. `kgt-participant-followup-copy`
   - Draft private participant follow-up messages in the right tone.

4. `kgt-bilingual-copy`
   - Create natural EN/KR marketing, website, and participant-facing copy.

5. `kgt-instagram-content-planner`
   - Build route reveal calendars, captions, Reels ideas, story sequences, and post checklists.

6. `kgt-route-roadbook`
   - Build route drafts, roadbook content, checkpoint notes, timing windows, and operations warnings.

7. `kgt-sponsor-followup`
   - Manage sponsor outreach, follow-up copy, deliverables, and sponsor report planning.

8. `kgt-website-updates`
   - Plan and prepare Weebly-safe website copy and content updates.

9. `kgt-privacy-redaction`
   - Create public/shareable versions of internal docs without private data.

10. `kgt-visual-deliverable-producer`
   - Produce finished graphics/videos/assets with QA, using real KGT assets first.

## Phase 2 Rule

When creating these, use `$skill-creator` and the KGT skill creation method. Every skill needs trigger examples, non-trigger examples, failure modes, privacy rules, cross-check rules, eval prompts, and output contracts.

Keep skills compact. Prefer references to stable `.agents/` rules over copying the same long instructions into every skill.
