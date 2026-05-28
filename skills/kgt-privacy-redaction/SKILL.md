---
name: kgt-privacy-redaction
description: Redact Korea Grand Tour materials for safe sharing by removing participant personal data, payment/insurance/license/passport details, private conversations, confidential sponsor notes, unrevealed route details, credentials, and local-only file references. Use before sharing internal KGT docs, sponsor summaries, website/social material, GitHub candidates, or participant-derived updates.
---

# KGT Privacy Redaction

One job: make material safe to share.

## Load Order

1. `.agents/KGT_QUALITY_GATE.md`
2. `11_LEGAL_AND_SAFETY/legal_safety_context.md`
3. `05_PARTICIPANTS_LOCAL_ONLY/README_PRIVATE.md` for participant/private work

## Redact

- phone numbers, emails, full names linked to private data
- plates when represented as data, not normal visible image context
- payment proof, insurance, IDs, licenses, passports
- private participant conversations
- confidential sponsor negotiation details
- unrevealed route details
- credentials, tokens, local-only paths

## Preserve

- public aggregate counts
- approved public car identity
- confirmed sponsor status only
- verified 2025 metrics

Output: redacted version, removed categories, remaining risks/open questions.
