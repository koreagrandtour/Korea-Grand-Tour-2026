# GitHub Setup Guide

Created: 2026-05-26

Goal: prepare `Korea Grand Tour` as a private GitHub repository without exposing private or huge files.

## Confirmed Account

- GitHub account email: koreagrandtour@gmail.com
- Existing 2026 repository: `koreagrandtour/Korea-Grand-Tour-2026`
- Required visibility: Private

## Scope Decision

This repository is for Korea Grand Tour 2026 only.

Do not use it as a general KGT archive or all-years operating repo. 2025 proof, legacy assets, and general operating templates should only enter this repo if they directly support the 2026 edition and are public-safe or properly redacted.

Potential future architecture:

- `koreagrandtour/Korea-Grand-Tour-2026`: 2026 edition workspace, website/social-ready assets, 2026 docs, 2026 operations.
- Separate future repo, if needed: general KGT operating system, reusable templates, multi-year docs, skills/plugins, sanitized historical archive.

## Before Initializing Git

1. Keep `.gitignore` in the project root.
2. Review `.agents/git_safety_report.md`.
3. Confirm private folders remain ignored.
4. Confirm credentials in the website plugin are ignored.
5. Decide which old folders should stay local-only.

## Safe Setup Flow

1. Initialize Git locally inside `Korea Grand Tour`.
2. Check status before staging.
3. Stage only safe operating documents first.
4. Commit with a clear message like `Initialize KGT operating system`.
5. Use the existing private GitHub repo named `koreagrandtour/Korea-Grand-Tour-2026`.
6. Add the private remote.
7. Push only after confirming repository visibility is private.

## GitHub Plugin Status - 2026-05-26

The GitHub plugin currently reports:

- authenticated user: `alonso537-ui`
- email: `francois.alonso537@gmail.com`
- accessible repositories: none
- GitHub App installations: none

Before connector-based GitHub work, install/authorize the GitHub App for the account or repo that owns `koreagrandtour/Korea-Grand-Tour-2026`.

Recheck on 2026-05-26: GitHub connector is linked to:

- account: `koreagrandtour`
- email: `koreagrandtour@gmail.com`
- repo: `koreagrandtour/Korea-Grand-Tour-2026`
- visibility: private
- permissions: admin/push visible through connector

## Do Not Push Automatically

Codex must not push this project to GitHub unless François explicitly asks.

## Never Commit Without Explicit Review

- participant details
- agreements
- payment proof
- insurance
- license/passport files
- private conversations
- sponsor negotiation notes
- credentials/tokens
- raw videos/audio/photos
- unrevealed route detail

## First Repo Scope Recommendation

Start with 2026-only files:

- `00_START_HERE/`
- `01_STRATEGY/` if populated
- `04_ROUTE_AND_OPERATIONS/route_context.md`
- `06_SPONSORS_PARTNERS/sponsor_context.md`
- `07_WEBSITE/website_context.md`
- `08_MARKETING/marketing_context.md`
- `09_COPY_BANK/`
- `11_LEGAL_AND_SAFETY/legal_safety_context.md`
- `.agents/`
- `.gitignore`

Do not commit broad all-years archives unless they are reviewed and clearly needed for the 2026 edition.

## Media Exception Rule

Raw media stays out of GitHub by default. Website/social-ready media may be committed later only if it is:

- selected intentionally for 2026,
- compressed/optimized for web or social use,
- public-safe,
- free of private participant data unless approved,
- free of visible plates unless approved,
- not an unrevealed route leak,
- and reviewed before staging.

Exclude all local-only/private/heavy files unless separately approved.
