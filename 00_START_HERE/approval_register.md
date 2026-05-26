# Approval Register

Created: 2026-05-26

Purpose: collect decisions that need Francois's approval before the KGT operating system moves into deeper cleanup, GitHub setup, or skill creation.

Status values:

- `Needs approval`
- `Approved`
- `Rejected`
- `Needs more info`
- `Deferred`

## A. Workspace / Folder Structure

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| A1 | Should old source folders stay in place for now? | Approve: keep old folders in place and use index/context files before moving anything. | Prevents breaking asset references or losing context. | Approved |
| A2 | Should we create a read-only asset index before restructuring? | Approve. | Gives us visibility without touching assets. | Approved |
| A3 | Should old folders later be mapped into the new architecture? | Defer until asset index exists. | Moving now is premature. | Approved |
| A4 | Should `00_START_HERE/01_ASSETS/` be treated as setup-only, with no real KGT assets stored there? | Approved. | `00_START_HERE/` is for setup/onboarding/architecture; real assets belong outside it. | Approved |

## B. Privacy / Local-Only Rules

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| B1 | Should participant agreements remain local-only even in a private GitHub repo? | Approve: yes, local-only. | Private GitHub is still not the right place for signed agreements. | Approved |
| B2 | Should participant trackers remain local-only? | Approve: yes, unless a redacted/template tracker is created. | Trackers may contain phones, emails, plates, payment notes, insurance. | Approved |
| B3 | Should payment proof, insurance, license/passport, and plate data be banned from GitHub entirely? | Approve. | Highest privacy/legal risk. | Approved |
| B4 | Should private sponsor negotiation notes be local-only? | Approve unless explicitly marked shareable. | Prevents partner/confidentiality issues. | Approved |
| B5 | Should public documents use aggregate registration counts only? | Approve by default. | Keeps momentum without exposing identities. | Approved |

## C. GitHub

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| C1 | Which GitHub repo should this workspace link to? | Use existing repo `koreagrandtour/Korea-Grand-Tour-2026` for 2026-only materials; consider a separate general ops repo later. | User already created the 2026 repo and wants this year's edition only. | Approved |
| C2 | Should the GitHub repo be private? | Approve: private only. | Required privacy boundary. | Approved |
| C3 | Should first commit include only 2026 operating docs and safety/context files? | Approve. | Reduces leak risk and keeps repo scoped to the 2026 edition. | Approved |
| C4 | Should raw media be excluded from GitHub by default? | Approve, with website/social-ready media handled as reviewed exceptions. | Folder has multi-GB media and privacy/size risks, but public/web assets may be needed. | Approved |
| C5 | Should selected compressed public assets be allowed later after review? | Approve. | Needed for website/social media assets when they are public-safe and optimized. | Approved |
| C6 | Should website plugin credentials always stay ignored/local? | Approve. | `.env` and `.square-token.json` were found. | Approved |
| C7 | Is the GitHub plugin connected to the KGT repo? | Connected as `koreagrandtour` / `koreagrandtour@gmail.com`; repo visible as `koreagrandtour/Korea-Grand-Tour-2026`; visibility private; permissions include admin and push. | Required before connector-based repo work. | Approved |
| C8 | Do visible number plates in images need special plate-specific review before public/GitHub use? | No. Francois has the right to display number plates from images. Keep normal privacy/content/route/file-size review. | Prevents unnecessary review friction while preserving other safety checks. | Approved |
| C9 | Which files should be considered for the first GitHub commit? | Use `.agents/github_first_commit_review_list.md`; includes full internal handoff, two sponsor deck PPTX files, and approved route images/files. Website prototypes remain excluded until a specific active prototype is confirmed. | Keeps first push fast and safe. | Approved |

## D. Website / Public Presence

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| D1 | Should the Rides page remain a 2025 archive or become the 2026 line-up page? | Rides is the 2026 page. Current 2025 list should become a separate `2025 rides` page. Francois will update website manually. | 2026 recruitment needs current social proof while preserving 2025 archive. | Approved |
| D2 | What public headcount should be shown today? | Show `14`. | Public website and posts need accurate live numbers. | Approved |
| D3 | Should About page be updated for the 4-day inland edition? | Approved in principle; Francois will do later. | Current wording may still feel 2025/weekend/full-circle. | Deferred |
| D4 | Should website stay English-primary bilingual? | Yes. | Confirmed operating structure. | Approved |
| D5 | Should full route details stay hidden until reveal schedule? | Yes. Phase 1 can remain displayed as currently shown on the website. | Protects privacy, safety, and reveal campaign. | Approved |

## E. Marketing / Brand

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| E1 | Should official brand colors/fonts remain unconfirmed for now? | Treat as working style, not final brand law. Current working colors: white, pungent blue, strong orange. Fonts: current website fonts. | Prevents fake precision while giving visuals a stable direction. | Approved |
| E2 | Should we create a lightweight brand guide before more visuals? | Yes. Create a working brand guide from current direction. | Visual consistency will matter soon. | Approved |
| E3 | Should car line-up visuals continue with car name + `Korea Grand Tour 2026` only? | Yes. | Confirmed current direction. | Approved |
| E4 | Should `KGT` be avoided in public visual titles unless space demands it? | Yes. Prefer `Korea Grand Tour`. | Matches car visual rule and premium positioning. | Approved |
| E5 | Should 2025 actual metrics be the only numeric proof until analytics are verified? | Yes. | Avoids overclaiming. | Approved |

## F. Route / Operations

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| F1 | Should the current inferred day-by-day route remain clearly marked as draft only? | Yes. | Avoids accidentally publishing unconfirmed route. | Approved |
| F2 | What is Inje Speedium's intended format? | Track day in the morning. | Affects route, safety, pricing, and content. | Approved |
| F3 | What is Ulsan industrial complex's intended format? | Arrive in the evening; beach and party/fun direction. | Affects logistics and sponsor/industry framing. | Approved |
| F4 | Should route planning prioritize safety/rest windows over visual ambition? | Deferred. Rest is planned, but exact timing is not known yet. | Protects the event and participants. | Deferred |
| F5 | Should hotels be coordinated by KGT but paid directly by participants? | Yes. | Confirmed operating rule. | Approved |

## G. Participant Operations

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| G1 | Which participant tracker/spreadsheet is the current source of truth? | Google Sheet `16VXP5YBeCo9yiTCfAWUsbVQvQbR5FHT48KLSihDLF50`. Current Google Drive connector returned 403 permission denied for the connected account; access needs to be granted before inspection/editing. | Blocks accurate follow-up and private tracker setup. | Approved with access blocker |
| G2 | Should public line-up posts use car identity only unless explicit approval exists? | Yes. People identity not disclosed for now. | Protects participant privacy. | Approved |
| G3 | Should interview criteria be documented before more confirmations? | Approved. | Participant quality is a core 2025 lesson. | Approved |
| G4 | Should Jonathon's 4 cars be treated as four independent registrations? | No. They cancelled. | Updates outdated handoff context. | Approved |
| G5 | Should all participant follow-ups stay in local-only docs unless redacted? | Yes. | Follow-ups may expose private statuses. | Approved |

## H. Sponsors

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| H1 | What are Tinybot's exact confirmed deliverables? | Later. | Blocks sponsor tracker and commitments. | Deferred |
| H2 | What is the current next step for Neotech? | Later. | Positive reply needs conversion. | Deferred |
| H3 | What is the current next step for Nexen Tire? | Later. | Positive reply needs conversion. | Deferred |
| H4 | Should contacted brands stay labeled `contacted / not confirmed` until explicit confirmation? | Yes. | Prevents overclaiming. | Approved |
| H5 | Should sponsor decks be reviewed before GitHub or sharing? | No extra review needed for now. | Decks are acceptable as-is for current use. | Approved |

## I. Legal / Safety

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| I1 | Should T&C be marked `not legally reviewed` everywhere internal? | Yes. | Avoids false confidence. | Approved |
| I2 | Who will legally review the T&C and participant agreement? | No one for now. | Legal review remains a future improvement, not a Phase 1 blocker. | Approved |
| I3 | Should alcohol/driving be stated as immediate eviction in participant-facing materials? | Yes. | Safety-critical and confirmed. | Approved |
| I4 | What insurance proof format is acceptable? | For now, trust. | Blocks participant completion checklist less formally for now. | Approved |
| I5 | Should public wording soften internal dispute logic while keeping actual internal rule private? | Already covered in T&C and agreement; all good. | No new wording needed now. | Approved |

## J. Phase 2 Readiness

| ID | Decision needed | Recommendation | Why it matters | Status |
|---|---|---|---|---|
| J1 | Is Phase 1 approved enough to start skill creation? | Approved once these decisions are recorded. | Phase 1 gate. | Approved |
| J2 | Should `SKILL_BACKLOG.md` and `PLUGIN_BACKLOG.md` remain planning-only for now? | Yes. | Matches instruction not to create skills yet. | Approved |
| J3 | Which skill should be first after Phase 1? | Wait to create skills for now. First planned skills remain `kgt-asset-inventory`, then `kgt-version-control-safety`. | These reduce risk before execution skills. | Approved / deferred |

## Suggested Approval Order

1. Privacy/local-only rules: B1-B5.
2. GitHub first-commit boundaries: C1-C6.
3. Workspace cleanup method: A1-A4.
4. Website/marketing public direction: D1-D5 and E1-E5.
5. Participant source of truth and public line-up rules: G1-G5.
6. Route/operations unknowns: F1-F5.
7. Sponsor commitments: H1-H5.
8. Legal/safety decisions: I1-I5.
9. Phase 2 readiness: J1-J3.
