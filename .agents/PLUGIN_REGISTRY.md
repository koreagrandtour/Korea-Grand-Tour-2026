# KGT Plugin Registry

Planning only. Do not build or connect plugins without approval.

| Plugin / access | Helps KGT do | Supports skills | Permissions | Privacy risk | Fallback |
|---|---|---|---|---|---|
| Google Drive | Find logos, decks, media, docs | asset, sponsor, website, visual | read files; write only when approved | private files may appear | local folder inventory |
| Google Sheets | Participant, sponsor, hotel, route trackers | participant ops, project manager | sheet read/write | personal/payment columns | local-only notes until access granted |
| Gmail | Sponsor and participant outreach context | sponsor, participant follow-up | read/search; send only approved | private conversations | draft local copy |
| Calendar | Milestones, briefings, meet-ups | project manager, participant ops | calendar read/write | personal schedule exposure | local milestone docs |
| Maps / route research | Roads, timing, checkpoints | route planner | location search/routing | unrevealed route sensitivity | manual route notes |
| OpenAI image 2.0 / image generation | New KGT images and image edits | visual producer | image generation/edit access | public/private asset mix, rights | save prompt/brief and use existing assets |
| Canva / Figma | Text, icons, layouts, resizing, editable designs | visual producer, website, sponsor | design create/edit | public/private asset mix | local briefs and exports |
| Korea Grand Tour Instagram Graph | KGT account review, recent posts, media, insights, approved publishing payloads | visual producer, project manager | account/media/insights; publish only with explicit approval | accidental publishing, token exposure | public profile review and manual notes |
| Browser / Chrome web research | Instagram, YouTube, Reddit, Korean/community trend and keyword research | visual producer | web access, authenticated browser if needed | public/private tab mix | manual search notes |
| GitHub | Private repo, issues, version safety | Git safety, project manager | repo read/write | accidental private commit | local Git only |
| Local privacy scanner | Pre-commit data checks | privacy, Git safety | local file metadata/read | false positives/negatives | manual review |
| Documents export | Agreements, decks, PDFs | participant, sponsor, legal | local/Drive docs | signed/private docs | local-only export |
| HyperFrames | Default KGT video tool; animate static objects/photos, create motion/video from text, captions, reels/story motion | visual producer | local video project/render access | rights/privacy/public risk | storyboard/brief in export folder |
| CapCut / DaVinci Resolve / Premiere | Optional manual polish for reels, cuts, subtitles, color, music timing | visual producer | local media edit access | rights/privacy/public risk | HyperFrames + Canva export |
| Media production | Video/image generation and edits | visual producer | asset read/write | rights/privacy/public risk | briefs/prompts in export folder |

Priority: social media production stack: OpenAI image generation, Canva, HyperFrames, Instagram Graph insights, then Google Sheets for participant operations.
