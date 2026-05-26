# Workspace Architecture Plan

Created: 2026-05-26

Purpose: define how this local Korea Grand Tour workspace should stay organized before any real file migration happens.

## Core Rule

`00_START_HERE/` is for setup, onboarding, handoff, operating rules, and architecture guidance only.

It should not contain real Korea Grand Tour project assets.

The nested folder `00_START_HERE/01_ASSETS/` is setup-only. It may contain templates or setup examples, but not KGT photos, videos, sponsor decks, route files, participant files, or production media.

## Folder Roles

| Folder | Role |
|---|---|
| `00_START_HERE/` | Setup, onboarding, project handoff, architecture, approval register, GitHub guide |
| `.agents/` | Agent operating rules, safety checklists, migration maps, skill/plugin backlog |
| `01_STRATEGY/` | 2026 strategy, positioning, audience, success metrics |
| `02_2025_FIRST_EDITION/` | 2025 reference only, proof, lessons, public-safe retrospective |
| `03_2026_SECOND_EDITION/` | 2026 edition master docs, timeline, registration flow, risks |
| `04_ROUTE_AND_OPERATIONS/` | Route planning, operations, hotels, roadbook, safety operations |
| `05_PARTICIPANTS_LOCAL_ONLY/` | Local-only participant operations, private trackers, private files |
| `06_SPONSORS_PARTNERS/` | Sponsor strategy, target lists, deliverables, partner reporting |
| `07_WEBSITE/` | Website copy, audits, Weebly/future website planning |
| `08_MARKETING/` | Content calendars, Instagram/YouTube plans, campaigns |
| `09_COPY_BANK/` | Reusable English/Korean lines, captions, scripts, message templates |
| `10_ASSETS/` | Curated 2026 public-safe or reviewed assets, exports, selected media |
| `11_LEGAL_AND_SAFETY/` | T&C, safety policies, insurance rules, emergency plan |
| `12_POST_EVENT/` | Recaps, surveys, sponsor reports, testimonials, 2027 waitlist |

## Existing Source Folders

The current legacy/source folders stay in place until a migration is approved.

They are treated as source shelves:

- `BI/`
- `Events/`
- `Filming/`
- `KGT 2026/`
- `KGT 2026 Registration Followups/`
- `Marketing/`
- `Partners/`
- `Rides/`
- `Tools/`
- `Website/`

## Migration Principle

No files are moved, renamed, deleted, or restructured until:

1. A read-only asset index exists.
2. Each file/folder has a privacy and GitHub status.
3. A migration destination is proposed.
4. Francois approves the migration.

## GitHub Scope

Target repo: `koreagrandtour/Korea-Grand-Tour-2026`

Scope: Korea Grand Tour 2026 only.

Default GitHub-safe content:

- operating docs
- focused context files
- public-safe copy banks
- safety checklists
- selected 2026 templates

Default GitHub-excluded content:

- participant private files
- agreements
- payment proof
- insurance
- IDs/licenses/passports
- private sponsor negotiation notes
- raw media
- credentials/tokens
- unrevealed route files

Website/social-ready media may be included later only after review.

## New Asset Rule

Any new Korea Grand Tour 2026 asset created from now on for Instagram, YouTube, website, sponsor/public communication, or other official public use must be saved in the relevant local project folder and prepared for GitHub when appropriate.

Default local destinations:

- social media assets: `10_ASSETS/website_social_ready/` or `08_MARKETING/`
- website assets: `10_ASSETS/website_social_ready/` or `07_WEBSITE/`
- final exports: `10_ASSETS/exports/`
- sponsor/public assets: `10_ASSETS/` and/or `06_SPONSORS_PARTNERS/`

GitHub rule:

- commit finished or source assets when they are public-safe, 2026-relevant, and reasonably sized
- do not commit raw production media by default
- do not commit private participant data, credentials, payment/insurance/ID/license/passport files, or private sponsor negotiation notes
- visible number plates in images do not require a special plate-specific review
