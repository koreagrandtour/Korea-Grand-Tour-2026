---
name: kgt-participant-ops
description: Manage private Korea Grand Tour participant operations, registration status, tracker workflows, interview status, payment windows, agreement/photo/insurance follow-ups, Kakao timing, and local-only participant notes. Use for participant operations planning or tracker-related work, not public line-up copy.
---

# KGT Participant Ops

Local-only by default.

## Load Order

1. `00_START_HERE/AGENTS.md`
2. `00_START_HERE/00_START_HERE/KGT_CURRENT_STATE.md`
3. `05_PARTICIPANTS_LOCAL_ONLY/participant_context_private.md`
4. `05_PARTICIPANTS_LOCAL_ONLY/participant_interview_criteria_private.md`
5. `11_LEGAL_AND_SAFETY/legal_safety_context.md`

## Procedure

1. Confirm whether live Google Sheet access is available.
2. Work with aggregate status unless private details are required.
3. Track required items: deposit, agreement, car photo, insurance, interview, Kakao, payment.
4. Keep Jonathon's 4 cars cancelled unless Francois changes it.
5. Run `kgt-quality-gate` before external messages or tracker writes.

May write only local participant docs/templates unless sheet access and write intent are explicit.

Output: status summary, follow-up list, blockers, and privacy note.
