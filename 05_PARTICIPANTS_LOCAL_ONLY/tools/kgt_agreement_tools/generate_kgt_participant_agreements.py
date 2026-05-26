from pathlib import Path
import re

from create_kgt_contract_template import build


OUTPUT_DIR = Path(
    "/Users/Francois/Documents/Codex/Main Playground/KGT_2026_registration_followups/private_participant_files/agreements"
)

PARTICIPANTS = [
    "서이정 (Michelle)",
    "Jonathon Gribbin",
    "곽진석",
    "Angela SoHyung Yu",
    "Luke Travers",
    "신호진",
    "Won Jonghun",
    "KIM NATALYA",
    "YoungMin Kim",
]


def safe_filename(name: str) -> str:
    cleaned = re.sub(r"[\\/:*?\"<>|]+", "", name).strip()
    cleaned = re.sub(r"\s+", "_", cleaned)
    return cleaned or "participant"


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_DIR.chmod(0o700)

    for index, participant in enumerate(PARTICIPANTS, start=1):
        filename = f"{index:02d}_KGT_2026_Agreement_{safe_filename(participant)}.pdf"
        build(OUTPUT_DIR / filename, participant)


if __name__ == "__main__":
    main()
