# File Cleanup Plan

Created: 2026-05-26

No files should be deleted, moved, renamed, or restructured without approval.

## Immediate Safety Actions

- Keep participant agreement PDFs in local-only areas.
- Keep `.env`, token files, and credentials out of Git.
- Keep raw videos, huge exports, and original footage out of Git.
- Keep `.DS_Store`, caches, and generated build folders ignored.

## Recommended Non-Destructive Cleanup

1. Create a read-only asset index before moving anything.
2. Label each asset as one of:
   - `public-safe`
   - `internal`
   - `local-only-private`
   - `local-only-heavy`
   - `needs-review`
3. Decide whether old folders map to the new architecture:
   - `Filming/` -> `10_ASSETS/raw_archive/` or remain in place with index only
   - `Marketing/` -> `08_MARKETING/` plus `10_ASSETS/`
   - `Partners/` -> `06_SPONSORS_PARTNERS/`
   - `Website/` -> `07_WEBSITE/`
   - `Rides/` -> `02_2025_FIRST_EDITION/` and/or `10_ASSETS/car_photos/`
4. Keep original files in place until François approves a migration.

## Needs Review Before GitHub

- Sponsor decks and partner folders.
- The `.xlsx` file.
- Website exports with images/video assets.
- Route draft images if the route should remain hidden.
- Any car photo where plates, people, or private locations are visible.
- Any file names containing personal names.

## Safe to Ignore Now

- `.DS_Store`
- `__pycache__/`
- `.pyc`
- local plugin credentials
- raw video/audio/photo originals
- generated website dependencies/build outputs

## Approval Needed Before Any Move

- Participant agreements and private follow-up folders.
- Raw footage and 2025 photo archive.
- Website plugin folders.
- Sponsor decks.
- Car line-up visuals.
- Logo/brand files.
