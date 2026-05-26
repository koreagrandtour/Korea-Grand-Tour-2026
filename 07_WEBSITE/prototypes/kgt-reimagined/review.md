# Korea Grand Tour Current Site Review

Source pages reviewed: Home, About, Route, Rides, Join from `https://koreagrandtour.weebly.com/`, plus the local Weebly theme backup and local KGT image/video assets.

## Pain Points

- Home has the strongest idea, but the first impression is still static and template-like. It does not immediately feel like a once-a-year driving adventure.
- Dates/content are partly inconsistent across indexed snippets and pages. The visible site now says 2026, but some sections still reference 2025 rides/routes.
- The main CTA appears as `REGISTER NOW`, `Sign up`, `Pre-register`, `pre Register`, and `Register now`. This weakens decision confidence.
- Route and Join pages are too thin. They do not answer enough questions before asking for commitment.
- About has good heart but needs editing: long paragraphs, grammar issues, and the strongest emotional promise is buried.
- Rides has proof but weak presentation. The cars should feel like a living grid of participants, not a placeholder list.
- There is little motion, no cinematic opening, no progress/route storytelling, and no strong "I want to be there" moment.
- Weebly branding is visible on the live pages, making the experience feel less premium.

## Reimagined Direction

- Lead with a bright road-rally hero: blue sky, route line, date, start city, and a persistent register CTA.
- Use proof quickly: 2026 dates, 12 participants / 8 rides currently shown, solo or team friendly, cars and bikes welcome.
- Build the story around the 2026 Phase One route reveal: Inje and Jeonju as headliners, Cheongdo, Ulsan, and Damyang as support cities.
- Make the route cities image-led so the page sells the trip before it explains it.
- Make the rides section a living 2026 grid using the revealed registered-car campaign art.
- Make registration feel like joining a crew, not filling out a form.
- Keep implementation vanilla and Weebly-compatible: scoped CSS, no build step, no React, idempotent JavaScript.

## Implementation Notes

- The local preview uses optimized JPG derivatives of the generated 2026 campaign visuals for faster loading, while preserving the source PNGs in `assets/`.
- The redesigned site now follows the original architecture with five pages: Home, About, Route, Rides, and Join.
- The Route page includes an interactive SVG Korea map with live route animation, stop controls, approximate kilometers, and city activities.
- The illustration assets were removed from the live page direction. The visible pages now use real KGT road, participant, checkpoint, and car photography.
- The Weebly paste version uses only scoped CSS/HTML/JS and hosted image URLs so it can be pasted into an Embed Code block without a build step.
- The HyperFrames motion concept is in `motion/kgt-2026-route-reveal.html`, built around a bright route reveal from Inje to Jeonju.
- Validation found no missing local asset references and the Weebly snippet passed the paste-readiness checker.

## 2026 Route Source

Local KGT 2026 campaign assets and Instagram post folders identify the Phase One cities as:

- Headliners: Inje, Jeonju
- Support cities: Cheongdo, Ulsan, Damyang
- Registered cars shown: Veloster N, 911 Targa, Golf GTI, Avante N, Grandeur, Cayman S Manual, BMW M3, Surprise
