#!/usr/bin/env python3
import argparse
import subprocess
from pathlib import Path

BLOCK_TERMS = (
    ".env", "token", "secret", "credential", ".pem", ".key", ".p12", ".pfx",
    "payment", "deposit", "receipt", "insurance", "passport", "driver_license",
    "driving_license", "drivers_license", "license_scan", "licence_scan",
    "id_scan", "bank_statement", "bank_transfer", "payment_proof",
)
WARN_TERMS = ("agreement", "phone", "email", "private_conversation", "plate_number", "license_plate")
RAW_EXTS = {".mp4", ".mov", ".avi", ".m4v", ".wav", ".aifc", ".cr2", ".zip"}
PRIVATE_PREFIXES = ("05_PARTICIPANTS_LOCAL_ONLY/private/",)
FINAL_EXPORT_PREFIX = "10_ASSETS/exports/"
MAX_FINAL_EXPORT_BYTES = 50 * 1024 * 1024


def git_lines(args):
    result = subprocess.run(["git", *args], check=False, text=True, capture_output=True)
    if result.returncode not in (0, 1):
        raise SystemExit(result.stderr.strip() or "git command failed")
    return [line.strip() for line in result.stdout.splitlines() if line.strip()]


def staged_paths():
    return git_lines(["diff", "--cached", "--name-only", "--diff-filter=ACMR"])


def tracked_paths():
    return git_lines(["ls-files"])


def classify(path: str):
    lower = path.lower()
    suffix = Path(path).suffix.lower()
    if any(path.startswith(prefix) for prefix in PRIVATE_PREFIXES):
        return "BLOCK", "participant private folder"
    if path.startswith(FINAL_EXPORT_PREFIX) and "/raw/" in path:
        return "BLOCK", "raw export folder"
    if any(term in lower for term in BLOCK_TERMS):
        return "BLOCK", "sensitive filename/path"
    if suffix in RAW_EXTS:
        if path.startswith(FINAL_EXPORT_PREFIX):
            size = Path(path).stat().st_size if Path(path).exists() else 0
            if size <= MAX_FINAL_EXPORT_BYTES:
                return "OK", "finished export media under size limit"
            return "BLOCK", "finished export media exceeds size limit"
        return "BLOCK", "raw/heavy media extension"
    if any(term in lower for term in WARN_TERMS):
        return "WARN", "privacy-related filename/path"
    return "OK", "no filename/path risk found"


def main():
    parser = argparse.ArgumentParser(description="KGT Git safety check")
    parser.add_argument("--all-tracked", action="store_true", help="also check tracked files")
    args = parser.parse_args()

    paths = staged_paths()
    scope = "staged files"
    if args.all_tracked:
        paths = sorted(set(paths + tracked_paths()))
        scope = "staged + tracked files"

    blockers, warnings, ok = [], [], []
    for path in paths:
        level, reason = classify(path)
        row = (path, reason)
        if level == "BLOCK":
            blockers.append(row)
        elif level == "WARN":
            warnings.append(row)
        else:
            ok.append(row)

    print("# KGT Git Safety Check")
    print(f"Scope: {scope}")
    print(f"Files checked: {len(paths)}")
    print(f"Blockers: {len(blockers)}")
    print(f"Warnings: {len(warnings)}")
    print(f"Safe: {len(ok)}")

    if blockers:
        print("\n## Blockers")
        for path, reason in blockers[:50]:
            print(f"- {path}: {reason}")
    if warnings:
        print("\n## Warnings")
        for path, reason in warnings[:50]:
            print(f"- {path}: {reason}")
    if not blockers:
        print("\nAction: OK to commit/push from filename/path scan. Still review intent and staged diff.")
    else:
        print("\nAction: Do not commit/push until blockers are removed or explicitly approved.")


if __name__ == "__main__":
    main()
