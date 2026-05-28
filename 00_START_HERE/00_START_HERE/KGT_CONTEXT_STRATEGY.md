# KGT Context Strategy for Codex

Purpose: keep Codex efficient and avoid wasting tokens by reading the full handoff on every task.

## Rule

The full handoff is the archive/source of truth. It is not the daily working file.

For normal tasks, Codex should read:

1. `AGENTS.md`
2. `00_START_HERE/KGT_CURRENT_STATE.md`
3. the relevant focused context file

Only read `00_START_HERE/codex_handoff_internal.md` when needed for:

- first-time project setup,
- full project history,
- resolving contradictions,
- major workspace restructuring,
- or when the smaller files are insufficient.

## Context Files to Create / Maintain

```text
00_START_HERE/KGT_CURRENT_STATE.md
08_MARKETING/marketing_context.md
06_SPONSORS_PARTNERS/sponsor_context.md
04_ROUTE_AND_OPERATIONS/route_context.md
07_WEBSITE/website_context.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
09_COPY_BANK/key_positioning_lines.md
09_COPY_BANK/korean_tone.md
```

## Which Files to Read by Task

### Marketing / Copy / Social Media

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
08_MARKETING/marketing_context.md
09_COPY_BANK/key_positioning_lines.md
09_COPY_BANK/korean_tone.md
```

### Sponsor Outreach

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
06_SPONSORS_PARTNERS/sponsor_context.md
09_COPY_BANK/key_positioning_lines.md
```

### Route / Roadbook / Itinerary

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
04_ROUTE_AND_OPERATIONS/route_context.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
```

### Website

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
07_WEBSITE/website_context.md
09_COPY_BANK/key_positioning_lines.md
```

### Participant Operations

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
05_PARTICIPANTS_LOCAL_ONLY/participant_context_private.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
```

### Privacy / External Sharing

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
```

## Skills to Create

Create the following skills under `skills/` and mirror them to `/Users/Francois/.codex/skills/`:

```text
kgt-bilingual-copy
kgt-sponsor-followup
kgt-participant-ops
kgt-route-planner
kgt-website-updates
kgt-privacy-redaction
kgt-asset-inventory
```

Each `SKILL.md` should include:

- name
- description
- when to trigger
- files to read
- files it may write
- privacy rules
- when to consult the full handoff
