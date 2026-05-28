---
name: kgt-visual-deliverable-producer
description: Produce and plan Korea Grand Tour visual/social/video deliverables, including Instagram posts, Stories, Reels, captions, hashtags, music notes, route reveal assets, line-up graphics, YouTube thumbnails, sponsor visuals, and website images. Use when social media strategy, trend research, file creation, or finished visual/video exports are expected.
---

# KGT Visual Deliverable Producer

Create files when possible. This skill also owns the former `kgt-instagram-content-planner` role.

## Load Order

1. `01_STRATEGY/visual_identity_WORKING.md`
2. `08_MARKETING/marketing_context.md`
3. `10_ASSETS/` relevant assets via `kgt-asset-inventory`
4. `skills/kgt-visual-deliverable-producer/references/social-media-research.md` for Instagram/YouTube/social work
5. task-specific context file

## Procedure

1. Create a KGT Visual / Social Production Brief.
2. For social content, research KGT past posts/activity, comparable channels, Korean/global trends, keywords, hashtags, music/audio, and platform best practices before drafting.
3. Use real KGT assets first.
4. For new images, prefer OpenAI image 2.0. If it is not exposed in the current runtime, use the best available OpenAI image generation/editing tool and log the limitation.
5. Use Canva to add or refine text, icons, layout, sizing, and platform variants.
6. Use HyperFrames by default for videos, motion, animated static assets, photo animation, text-to-video style compositions, captions, and reels/story motion, unless a clearly better video tool fits the task.
7. Save output under `10_ASSETS/exports/YYYY-MM-DD_slug/`.
8. Save final output, source/editable file if possible, preview, notes, and QA report.
9. Run `kgt-quality-gate` before public use.

If a needed plugin/tool is missing, create the brief and notes, then name the missing tool/plugin/software exactly.

Output: export folder path, files created, captions/copy/hashtags/music notes if relevant, assets used, research notes, QA result, limitations.
