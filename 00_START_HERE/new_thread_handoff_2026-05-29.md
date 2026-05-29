# KGT New Thread Handoff - 2026-05-29

Use this file to start a clean Codex thread for Korea Grand Tour without carrying the long prior conversation.

## How To Start The New Chat

Paste this:

```text
Read `00_START_HERE/new_thread_handoff_2026-05-29.md`, then continue as my Korea Grand Tour orchestral agent.
Use the smallest necessary context. Do not reread the full handoff unless compact files are insufficient.
```

## Current Project

- Project: Korea Grand Tour 2026
- Role for Codex: orchestral agent / project right arm
- Tone: warm, human, direct, premium but not corporate
- Public identity: cars, people, Korean roads, culture/history, friendship, food, memories, positive energy
- Website: https://koreagrandtour.weebly.com/
- Instagram: `@koreagrandtour`
- Email: `koreagrandtour@gmail.com`
- Private GitHub repo: `https://github.com/koreagrandtour/Korea-Grand-Tour-2026.git`

Primary daily state file:

```text
00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md
```

## What Is Confirmed

- KGT 2026 dates: August 14-17, 2026
- Duration: 4 days
- Start: Seoul
- Finish: Yangyang
- Expected distance: approximately 1,500 km
- Public headcount to show now: 14
- Target: 25 cars / 50 people
- Fee: KRW 200,000 per car, max 2 people
- Deposit: KRW 100,000, separate from the fee
- Registration closes: July 15, 2026
- Phase Two route reveal target: June 1, 2026
- Phase Three route reveal target: July 1, 2026
- Full route stays hidden until reveal timing; Phase One can be public.

## Current Priorities

1. Participant recruitment and follow-up
2. Strong social media content that attracts participants
3. Route planning and roadbook foundation
4. Credibility building with 2025 proof and real 2026 line-up
5. Sponsorship follow-up
6. Operations preparation

## Privacy Rules

Never expose or commit:

- participant names, phone numbers, emails
- car plate numbers when found in private participant docs
- insurance files
- licenses/passports/IDs
- payment proof
- signed agreements
- private participant conversations
- confidential sponsor negotiation notes

Participant-private workspace:

```text
05_PARTICIPANTS_LOCAL_ONLY/
```

Participant tracker:

```text
Google Sheet ID: 16VXP5YBeCo9yiTCfAWUsbVQvQbR5FHT48KLSihDLF50
Tabs confirmed visible: Form Responses 1, Deposit
```

Header-row access works. Do not read participant rows unless the task requires private participant operations.

## Skill System

Active KGT skills are installed locally and exist in the repo under `skills/`.

Current active skills: 13

- `kgt-quality-gate`
- `kgt-asset-inventory`
- `kgt-version-control-safety`
- `kgt-context-router`
- `kgt-project-manager`
- `kgt-privacy-redaction`
- `kgt-participant-ops`
- `kgt-participant-followup-copy`
- `kgt-bilingual-copy`
- `kgt-route-planner`
- `kgt-sponsor-followup`
- `kgt-website-updates`
- `kgt-visual-deliverable-producer`

Important consolidation:

- `kgt-instagram-content-planner` was folded into `kgt-visual-deliverable-producer`.
- `kgt-quality-gate` is the single cross-check and improvement gate. Do not recreate separate cross-checker/improver skills.

## Social / Video Rules

KGT social media is a top priority.

For social/video work:

1. Use real KGT assets first.
2. Research KGT past Instagram activity, similar car/rally/road-trip channels, Korean/global trends, hashtags, music/audio, and platform best practices.
3. Use OpenAI image generation for still image creation/editing when appropriate.
4. Use Canva for text, icons, layout, sizing variants, and editable polish.
5. Use HyperFrames by default for designed/motion-led video, unless a clearly better tool fits the task.
6. For live-looking reels, the base footage must feel good before adding captions, buttons, music, or effects.
7. Save finished work under:

```text
10_ASSETS/exports/YYYY-MM-DD_slug/
```

## Rejected Video Direction

Do not revive these directions:

- generated/abstract animated road-and-car storyboard
- fake cars on fake roads
- placeholder animation presented as a KGT reel
- over-designed captions/effects added before the base footage is strong

The draft folders made during the prior thread were rejected and removed:

```text
10_ASSETS/exports/2026-05-28_kgt_15s_winding_roads_story/
10_ASSETS/exports/2026-05-28_kgt_15s_real_road_reel/
```

Next KGT video attempt should start from stronger footage selection:

- real KGT local footage
- Google Drive media
- approved stock/video-bank footage only if local footage is not strong enough
- music direction before final editing

## GitHub / Git State Notes

Known pushed commits include:

- `16e27d4 Add KGT HyperFrames video draft workflow`
- `2105fdf Remove rejected KGT video draft`

The rejected generated video package was pushed previously and then removed in `2105fdf`.

As of creating this handoff, local `git` commands are blocked by the Apple/Xcode license prompt:

```text
You have not agreed to the Xcode license agreements.
```

Fix in Terminal if needed:

```text
sudo xcodebuild -license
```

There were also three unrelated deleted brand-source files reported earlier. They were user-side changes and should not be reverted unless François asks.

## Tools / Environment

- Homebrew is installed at `/opt/homebrew/bin/brew`.
- Homebrew `ffmpeg`, Node, npm, and npx were installed and verified.
- HyperFrames CLI ran successfully after Homebrew setup.
- HyperFrames doctor warned about low free memory and missing Docker; normal non-Docker rendering can still work.

## Git Safety

Before commits or pushes:

```text
python3 skills/kgt-version-control-safety/scripts/git_safety_check.py
```

Use:

```text
python3 skills/kgt-version-control-safety/scripts/git_safety_check.py --all-tracked
```

for broader tracked-file checks.

Small finished media exports under `10_ASSETS/exports/` are allowed when approved. Raw footage, huge media, participant/private files, credentials, and unrevealed route details must remain protected.

## Compact Context Routing

Do not reread everything. Start with:

```text
00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md
.agents/KGT_QUALITY_GATE.md
```

Then load only the relevant focused context:

- Marketing/social: `08_MARKETING/marketing_context.md`
- Visual/video: `skills/kgt-visual-deliverable-producer/SKILL.md`
- Route: `04_ROUTE_AND_OPERATIONS/route_context.md`
- Website: `07_WEBSITE/website_context.md`
- Sponsors: `06_SPONSORS_PARTNERS/sponsor_context.md`
- Legal/safety: `11_LEGAL_AND_SAFETY/legal_safety_context.md`
- Participant private ops: `05_PARTICIPANTS_LOCAL_ONLY/participant_context_private.md`

Only read the full internal handoff if compact context conflicts or is insufficient.

## Best Next Step

Start the new thread and choose one concrete next task.

Recommended next task:

```text
Find the strongest real KGT/Drive footage for a premium 15-second participant-attraction reel. Create a source shortlist first, then propose a cut before rendering.
```

This avoids repeating the mistake of polishing weak video material.
