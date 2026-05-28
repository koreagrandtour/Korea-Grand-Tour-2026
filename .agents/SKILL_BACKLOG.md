# Skill Backlog

Phase 1 only. Do not create these skills yet.

Create skills in Phase 2 only after François confirms the folder is ready.

## Foundation Skills

0. `kgt-quality-gate`
   - Enforce low-token self-check, cross-check, workflow evidence, and improvement scan.
   - Read `.agents/KGT_QUALITY_GATE.md` first.
   - Status: created in Phase 2.

1. `kgt-context-router`
   - Route tasks to the smallest necessary context files.
   - Prevent reading the full handoff unnecessarily.
   - Status: created in Phase 2.

2. `kgt-project-manager`
   - Maintain priorities, milestones, open questions, decision log, and next actions.
   - Status: created in Phase 2.

3. `kgt-cross-checker`
   - Status: folded into `kgt-quality-gate`.
   - Do not create as a separate skill unless this becomes too heavy later.

4. `kgt-skill-improver`
   - Status: folded into `kgt-quality-gate`.
   - Do not create as a separate skill unless this becomes too heavy later.

5. `kgt-version-control-safety`
   - Protect private data and heavy assets before Git commits/pushes.
   - Status: created in Phase 2.

## Execution Skills

1. `kgt-asset-inventory`
   - Build and update asset indexes with privacy and GitHub status.
   - Status: created in Phase 2.

2. `kgt-participant-ops`
   - Manage local-only participant trackers, reminders, agreements, payment status, and interview status.
   - Status: created in Phase 2.

3. `kgt-participant-followup-copy`
   - Draft private participant follow-up messages in the right tone.
   - Status: created in Phase 2.

4. `kgt-bilingual-copy`
   - Create natural EN/KR marketing, website, and participant-facing copy.
   - Status: created in Phase 2.

5. `kgt-instagram-content-planner`
   - Build route reveal calendars, captions, Reels ideas, story sequences, and post checklists.
   - Status: created in Phase 2.

6. `kgt-route-planner`
   - Build route drafts, roadbook content, checkpoint notes, timing windows, and operations warnings.
   - Status: created in Phase 2.

7. `kgt-sponsor-followup`
   - Manage sponsor outreach, follow-up copy, deliverables, and sponsor report planning.
   - Status: created in Phase 2.

8. `kgt-website-updates`
   - Plan and prepare Weebly-safe website copy and content updates.
   - Status: created in Phase 2.

9. `kgt-privacy-redaction`
   - Create public/shareable versions of internal docs without private data.
   - Status: created in Phase 2.

10. `kgt-visual-deliverable-producer`
   - Produce finished graphics/videos/assets with QA, using real KGT assets first.
   - Status: created in Phase 2.

## Phase 2 Rule

When creating these, use `$skill-creator` and the KGT skill creation method. Every skill needs trigger examples, non-trigger examples, failure modes, privacy rules, cross-check rules, eval prompts, and output contracts.

Keep skills compact. Prefer references to stable `.agents/` rules over copying the same long instructions into every skill.
