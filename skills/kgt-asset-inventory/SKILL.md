---
name: kgt-asset-inventory
description: Inventory Korea Grand Tour local files and assets with privacy, size, media, website/social-readiness, and GitHub-safety flags. Use when scanning KGT folders, updating asset_inventory.md, finding sensitive/private files, identifying huge/raw media, mapping assets to the project architecture, or preparing files for GitHub, website, Instagram, YouTube, sponsors, or cleanup.
---

# KGT Asset Inventory

Inventory without moving or deleting files unless Francois explicitly asks.

## Load Order

1. Read `.agents/KGT_QUALITY_GATE.md`.
2. Read `01_ASSETS/asset_inventory.md`, `01_ASSETS/file_cleanup_plan.md`, and `01_ASSETS/sensitive_assets_local_only.md` when updating inventory docs.
3. Read `.gitignore` before judging GitHub safety.

## Fast Scan

Run the helper from the KGT repo root:

```bash
python3 skills/kgt-asset-inventory/scripts/scan_assets.py --root .
```

Use `--focus <folder>` for narrower scans.

The script reads filenames, sizes, extensions, and paths only. It does not open private documents.

## Classification

- `private/local-only`: participant details, payment proof, insurance, IDs, licenses, passports, private conversations, confidential sponsor notes.
- `raw/heavy`: video, raw media, large exports, archives, raw filming folders.
- `public-ready candidate`: website/social/sponsor assets that appear public-safe and reasonably sized.
- `needs review`: unclear owner, unclear audience, unrevealed route, old duplicate, or ambiguous sponsor status.

Visible number plates in images do not need special plate-only review, but normal privacy/content/file-size checks still apply.

## Output Contract

Keep outputs compact:

```text
Inventory scope:
Counts:
Private/local-only:
Huge/raw:
Public-ready candidates:
Needs review:
Recommended doc updates:
```

Update inventory docs only with useful deltas.
