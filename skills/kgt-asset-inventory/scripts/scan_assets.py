#!/usr/bin/env python3
import argparse
import os
from pathlib import Path

PRIVATE_TERMS = (
    "private", "participant", "payment", "deposit", "receipt", "insurance",
    "passport", "license", "licence", "agreement", "phone", "email", "kakao",
    "bank", "plate_number", "driver_license", "driving_license",
)
RAW_EXTS = {".mp4", ".mov", ".avi", ".m4v", ".wav", ".aifc", ".cr2", ".zip"}
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".heic", ".tif", ".tiff"}
DOC_EXTS = {".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".csv"}
SKIP_DIRS = {".git", "node_modules", "__pycache__", ".cache", ".next", "build", "dist"}


def classify(path: Path, size: int) -> str:
    lower = str(path).lower()
    ext = path.suffix.lower()
    if any(term in lower for term in PRIVATE_TERMS) or "05_participants_local_only/private" in lower:
        return "private/local-only"
    if ext in RAW_EXTS or "raw_archive" in lower or size >= 50 * 1024 * 1024:
        return "raw/heavy"
    if ext in IMAGE_EXTS and any(part in lower for part in ("website", "social", "lineup", "exports", "route 2025")):
        return "public-ready candidate"
    if ext in DOC_EXTS:
        return "needs review"
    return "general"


def walk(root: Path, focus):
    base = root / focus if focus else root
    for dirpath, dirnames, filenames in os.walk(base):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS and not d.startswith(".git")]
        for name in filenames:
            if name == ".DS_Store":
                continue
            path = Path(dirpath) / name
            try:
                size = path.stat().st_size
            except OSError:
                continue
            rel = path.relative_to(root)
            yield rel, size, classify(rel, size)


def human_size(size: int) -> str:
    units = ["B", "KB", "MB", "GB"]
    value = float(size)
    for unit in units:
        if value < 1024 or unit == units[-1]:
            return f"{value:.1f}{unit}" if unit != "B" else f"{int(value)}B"
        value /= 1024


def main():
    parser = argparse.ArgumentParser(description="Compact KGT asset scan")
    parser.add_argument("--root", default=".", help="KGT repo root")
    parser.add_argument("--focus", default=None, help="Optional folder to scan")
    parser.add_argument("--limit", type=int, default=30, help="Rows per flagged section")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    rows = list(walk(root, args.focus))
    counts = {}
    for _, _, category in rows:
        counts[category] = counts.get(category, 0) + 1

    print("# KGT Asset Scan")
    print(f"Root: {root}")
    print(f"Scope: {args.focus or '.'}")
    print(f"Total files: {len(rows)}")
    print()
    for category in sorted(counts):
        print(f"- {category}: {counts[category]}")

    for category in ("private/local-only", "raw/heavy", "public-ready candidate", "needs review"):
        flagged = [(p, s) for p, s, c in rows if c == category]
        if not flagged:
            continue
        print(f"\n## {category}")
        for path, size in sorted(flagged, key=lambda item: (-item[1], str(item[0])))[: args.limit]:
            print(f"- {path} ({human_size(size)})")


if __name__ == "__main__":
    main()
