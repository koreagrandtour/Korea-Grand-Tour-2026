# Asset Inventory

Created: 2026-05-26

This is a safe inventory. It does not move, delete, rename, or expose private contents.

## Folder Snapshot

- Total files found: 955
- Large top-level areas by size:
  - `Filming/`: about 1.4 GB
  - `Marketing/`: about 983 MB
  - `Website/`: about 224 MB
  - `Rides/`: about 49 MB
  - `KGT 2026/`: about 23 MB
  - `BI/`: about 5.9 MB
  - `Events/`: about 3.5 MB
  - `Partners/`: about 1.4 MB
  - `KGT 2026 Registration Followups/`: about 616 KB

## File Type Summary

| Type | Count | Notes |
|---|---:|---|
| `.jpeg` | 279 | Mostly 2025 photos and Kakao exports |
| `.jpg` | 265 | Photos, car images, website assets |
| `.png` | 126 | Visual assets, graphics, templates |
| `.mp4` | 48 | Reels, raw clips, website video assets |
| `.mov` | 7 | Raw or participant video clips |
| `.pdf` | 11 | Includes agreement-related files; treat carefully |
| `.pptx` | 2 | Sponsor/pitch decks |
| `.xlsx` | 1 | Spreadsheet; inspect before any GitHub commit |
| `.mp3` | 10 | Music assets |
| `.aifc` | 5 | Narration audio |
| `.html` | 19 | Website prototypes/exports |
| `.md` | 15 before Phase 1 additions | Project docs |
| `.json` | 7 | Includes at least one local credential/token risk |
| `.env` | 1 | Credential risk |
| `.DS_Store` | 43 | macOS metadata, should be ignored |

## Confirmed Asset Areas

### Photos / Car Visuals

- `Rides/` contains individual 2025 ride folders with car images.
- `KGT 2026/Line up phase 1/CARS/` appears to contain 2026 line-up material.
- `Filming/Pics & vids from everyone/` contains many 2025 participant/shared images.
- `Website/kgt-freeform/assets/` and `Website/kgt-reimagined/assets/` contain web-ready car and route visuals.
- `BI/` contains logo/brand-image candidates.

### Videos / Audio

- `Filming/` contains 2025 footage, narration, music, and video issue folders.
- `Marketing/Social Media/Instagram/Stories - Reels/` contains many social video assets.
- `Website/kgt-freeform/assets/` and `Website/kgt-reimagined/assets/` include website video files.

### Sponsor / Partner Materials

- `Marketing/Pitch Deck/` contains two PPTX pitch decks and supporting visuals.
- `Partners/` exists but should be indexed in a later pass before moving anything.

### Website Materials

- `Website/kgt-freeform/` contains a static website prototype or export.
- `Website/kgt-reimagined/` contains another site concept plus motion and Weebly paste files.
- `Website/Weebly Site Editor Plugin/` contains plugin/tooling material and local credential files that must not be committed.
- `Website/Sites - All images/Route/` contains a full route draft image.

### Participant / Payment / Agreement Material

- `KGT 2026 Registration Followups/private_participant_files/agreements/` contains signed/generated participant agreement PDFs with personal names.
- `KGT 2026 Registration Followups/templates/` contains agreement/message templates and KGT T&C source text.
- Treat all participant agreement PDFs, payment proof, insurance, phone/email, and private conversations as local-only.

### Route Files

- `Website/Sites - All images/Route/Full route (draft).png` exists.
- No GPX/KML route files were confirmed in this first pass.

### Credentials / Local Tooling

- `Website/Weebly Site Editor Plugin/plugins/weebly-site-editor/.env` exists.
- `Website/Weebly Site Editor Plugin/plugins/weebly-site-editor/.square-token.json` exists.
- These are credential/local-token risks and must be ignored by Git.

## Huge Files / GitHub Risks

Files over 50 MB found:

| Size | Path |
|---:|---|
| 247 MB | `Marketing/Social Media/Instagram/Stories - Reels/Stores/Checkpoints/boryeong 3.mp4` |
| 140 MB | `Marketing/Pitch Deck/Visuals/VID_20240928_083141.mp4` |
| 101 MB | `Marketing/Social Media/Instagram/Stories - Reels/Both/KGT - Only the end for reel.mp4` |

Other notable heavy files include `.MOV`, `.mp4`, `.aifc`, `.CR2`, and high-resolution `.jpeg` files over 10 MB. These should stay local unless a compressed public export is intentionally selected.

## Duplicate / Old File Signals

- Multiple website concepts exist: `kgt-freeform`, `kgt-reimagined`, and Weebly plugin/export material.
- `00_START_HERE/01_ASSETS/` exists while Phase 1 also creates root `01_ASSETS/`; decide later whether to merge or keep the old folder as setup/archive.
- `Filming/Pics & vids from everyone/` and `Marketing/Social Media/Instagram/Post/KGT 2025 summary post/` appear to contain overlapping Kakao media.
- Many `.DS_Store` files should be ignored; no need to delete now.

## Recommended Next Inventory Pass

1. Build a machine-readable asset index with path, size, type, purpose, privacy level, and GitHub status.
2. Review the single `.xlsx` file to classify it as public/template/private.
3. Review sponsor decks and remove/flag private negotiation details before any sharing.
4. Select a small public-safe asset subset for GitHub only after privacy review.
