# QA Report

Status: Draft MP4 motion preview, not publish-ready.

## Checks

- Privacy: OK. No participant identity used.
- Plates: OK for concept. Final export should avoid readable generated plates unless intentionally using approved real media.
- Route reveal: OK. No specific unrevealed route shown.
- Brand/tone: OK. Warm, premium, direct.
- Factual accuracy: OK. Uses confirmed 2026 framing and four-day direction.
- Production: local `ffmpeg` is now installed inside `.local_tools/` using `imageio-ffmpeg`.
- Video source: HyperFrames-ready source exists at `hyperframes/index.html`.
- Production limitation: `npm`/`npx` is not available on this Mac, so the HyperFrames CLI could not be run directly. The MP4 was rendered through a local fallback renderer from the same timing/storyboard direction.
- Audio/music: no music included yet; final social export should use approved/licensed music or platform-native audio.

## Next Step

If approved, produce the next version with real KGT footage/assets, HyperFrames CLI rendering once available, and Canva text treatment if needed.
