# Git Safety Report

Created: 2026-05-26

## Status

- `Korea Grand Tour` is not currently a Git repository.
- No push was performed.
- A root `.gitignore` was created to protect private and heavy files before Git is initialized.
- Existing target GitHub repo: `koreagrandtour/Korea-Grand-Tour-2026`.
- Repo scope: Korea Grand Tour 2026 only.
- GitHub plugin status on 2026-05-26: connected to `koreagrandtour@gmail.com`, repo visible as `koreagrandtour/Korea-Grand-Tour-2026`, visibility private, connector permissions include admin and push.

## Main Risks Found

- Participant agreement PDFs exist under the 2026 registration follow-up area.
- Private participant file folders exist and must remain local-only.
- Local credentials/tokens exist in the Weebly site editor plugin folder.
- Raw/heavy videos exist in `Filming/` and `Marketing/`.
- Sponsor decks may contain non-public negotiation or business context and should be reviewed before commit.
- Route draft image may reveal unreleased route details.

## GitHub-Safe First Commit Recommendation

Only after review, the first private repo commit should include 2026-only:

- operating docs
- focused context files
- `.gitignore`
- non-sensitive templates
- public-safe copy banks
- GitHub setup guide
- safety checklists

Do not include:

- participant private data
- agreement PDFs
- payment/insurance/ID/license/passport files
- `.env` or token files
- raw videos/audio/photos
- private sponsor negotiation notes
- unrevealed route files

## Media Exception

Raw media is excluded by default. Selected compressed media for the website or social media can be added later after review if it is public-safe, optimized, and directly relevant to the 2026 edition.

Visible number plates in images do not require a special plate-specific review because Francois has approved plate display rights for images. Continue reviewing media for private documents, confidential details, unrevealed route leaks, file size, and 2026 relevance.

## Future Asset Commit Rule

New KGT 2026 assets created for Instagram, YouTube, the website, sponsors, or public communication should be saved locally in the relevant project folder and committed to GitHub when they are public-safe, 2026-relevant, and reasonably sized.

Raw production media remains excluded by default unless explicitly selected and optimized.

## Required Pre-Commit Check

Before every commit, run or simulate:

1. Check ignored private paths.
2. Search staged files for emails, phone numbers, plates, payment words, insurance, passport, license, token, secret.
3. Check large files.
4. Confirm no raw video or private agreement PDFs are staged.
5. Confirm repo remote is private before first push.
