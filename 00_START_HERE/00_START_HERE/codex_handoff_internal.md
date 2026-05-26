---
title: "Korea Grand Tour - Codex Handoff"
subtitle: "Updated Master Internal Handoff for the 2026 Edition"
author: "Korea Grand Tour Team"
date: "2026-05-25"
mainfont: NanumGothic
CJKmainfont: NanumGothic
geometry: margin=0.8in
fontsize: 10pt
colorlinks: true
linkcolor: blue
urlcolor: blue
---

# Korea Grand Tour - Complete Codex Handoff

**Prepared for:** Codex / new AI collaborator  
**Project:** Korea Grand Tour  
**Edition currently in planning:** Korea Grand Tour 2026  
**Organizer to present publicly:** Korea Grand Tour Team  
**Official email:** koreagrandtour@gmail.com  
**Official website:** https://koreagrandtour.weebly.com/  
**Instagram:** @koreagrandtour  
**YouTube:** https://www.youtube.com/@KoreaGrandTour / @koreagrandtour  
**Document status:** Updated with François's confirmed answers, corrected website/T&C audit, and local folder/GitHub/Codex setup guidance as of 2026-05-25.  

## Important Usage Note

This is the **internal master handoff** for Codex or any new AI/project collaborator. It is intended to let the collaborator understand Korea Grand Tour from beginning to end, including strategy, past history, decisions, unresolved work, operational rules, marketing direction, and current 2026 planning.

Some participant and sponsor details are sensitive. The public/shareable version must remove private participant details, payment/deposit information, confidential sponsor outreach status, and internal dispute-handling logic if it is not meant for public release.

---


# 0. Local Workspace, GitHub, and Codex Setup

## 0.1 Current Working Folder

François's local project folder is named:

```text
Korea Grand Tour
```

This local folder contains the project assets and should be treated as the primary working workspace for Korea Grand Tour.

Codex should first inspect this local folder and create an organized inventory of what exists before creating, moving, renaming, deleting, or restructuring any important files.

## 0.2 GitHub Account

François has a GitHub account created using:

```text
koreagrandtour@gmail.com
```

Recommended GitHub repository name:

```text
korea-grand-tour-ops
```

Recommended visibility:

```text
Private
```

The recommended setup is:

```text
Local folder: Korea Grand Tour
+
Git version control
+
Private GitHub repository for non-sensitive project documents, templates, tools, skills, and operational systems
+
Local-only handling for sensitive participant/payment/insurance data
```

## 0.3 Important Privacy Rule for Repo Setup

The GitHub repository should not contain raw sensitive personal information unless François explicitly decides otherwise.

Keep the following local-only:

- Participant phone numbers.
- Participant emails.
- Car plate numbers.
- Insurance documents.
- Driver license/passport scans.
- Payment proof.
- Full private participant conversations.
- Private sponsor negotiation details that should not be visible outside the core team.

Create local-only/private areas for sensitive data, and protect them through `.gitignore`.

Recommended local-only path:

```text
05_PARTICIPANTS_LOCAL_ONLY/private/
```

## 0.4 Codex Setup Instructions

Codex should read and improve these two files at the project root:

```text
README.md
AGENTS.md
```

Codex should treat `AGENTS.md` as durable operating guidance for the project. It should improve it over time as the project becomes more structured, but should not remove the core instructions about privacy, confirmed facts, tone, and priorities.

Codex should also create or improve:

```text
.gitignore
00_START_HERE/codex_handoff_internal.md
00_START_HERE/open_questions.md
```

## 0.5 Codex Skills / Plugin Direction

François wants Codex to create adequate plugins/skills to help manage Korea Grand Tour.

Codex should create a skills/plugin plan before implementation. The first skills should help with:

1. Local file and asset inventory.
2. Google Drive export/index workflow.
3. Participant tracker templates.
4. Sponsor tracker and follow-up workflows.
5. Bilingual EN/KR marketing content generation.
6. Route planning and roadbook generation.
7. Website content update planning.
8. Public/shareable version generation with private data removed.
9. Post-event sponsor report creation.
10. Operations checklist and safety briefing generation.

Codex should create repository skills under:

```text
.agents/skills/
```

Suggested initial skills:

```text
.agents/skills/kgt_asset_inventory/
.agents/skills/kgt_bilingual_copy/
.agents/skills/kgt_sponsor_followup/
.agents/skills/kgt_participant_ops/
.agents/skills/kgt_route_roadbook/
.agents/skills/kgt_privacy_redactor/
```

## 0.6 First Codex Task

The first Codex task should not be to immediately rewrite everything. The first task should be:

1. Read `AGENTS.md`.
2. Read this handoff.
3. Inspect the local `Korea Grand Tour` folder.
4. Create a safe project inventory.
5. Improve `README.md` and `AGENTS.md`.
6. Create the folder/file structure if missing.
7. Create a `.gitignore` that protects sensitive and heavy files.
8. Propose a skill/plugin architecture.
9. Create the first small useful tools/templates.
10. Ask only the minimum necessary questions.

---

# 1. Start Here Brief for Codex

You are now helping the **Korea Grand Tour Team** build and operate Korea Grand Tour, a multi-day road rally in South Korea combining cars, scenic driving, culture, history, food, friendship, and content creation.

Korea Grand Tour is not just a car event. It is positioned as a human, positive, Korea-centered experience: people drive across Korea, discover roads and places, connect with good-hearted people, and create memories. It is inspired by the spirit of events like Gumball 3000, but it should not feel like a copy. Korea Grand Tour's identity is more local, more human, and more grounded in Korea's roads, culture, history, and people.

The first edition took place from **September 12-14, 2025**. It lasted **3 days**, covered approximately **1,500 km**, started from Seoul, followed a west coast -> south coast -> east coast route, and ended with a public finish-line car meet-up at **7 Drive-In / 7드라이브인 in Yangyang** on September 14, 2025 from **6 PM to 11 PM**. The 2025 edition had **20 participants** and **10 cars**, with a roughly **50% Korean / 50% foreigner** participant mix.

The second edition is planned for **August 14-17, 2026**. It will be a **4-day** event with an expected distance of approximately **1,500 km**. The 2026 route is not fully finalized yet, but the confirmed direction is an **inland Korea route** with valleys, mountain passes, winding roads, rice fields, small villages, cultural/historical stops, and scenic road sections. Confirmed elements include **Seoul as the start**, **Yangyang as the finish**, and confirmed stops/experiences such as **Inje**, **Jeonju**, **Jeonju Folk Village**, **Damyang Bamboo Forest**, **Buyeo old palace**, **Cheongdo strawberry and peach farm**, **Ulsan industrial complex**, **Inje Speedium**, and winding roads near Jeonju and Cheongdo. The exact day-by-day itinerary is not yet finalized.

The 2026 target is **25 cars** and **50 people**. The long-term ambition of **50 cars / 50 people** is still relevant as a future vision, but the current intended maximum for 2026 is 25 cars and 50 people.

Current registration status as confirmed by François:

- **13 pre-RSVPs**
- **17 people**
- **9 confirmed cars**
- **5 deposits paid**
- **5 agreements signed**
- **1 car photo received**

Registration/pricing for 2026:

- Participation fee: **KRW 200,000 per car**, max 2 people included.
- Deposit: **KRW 100,000**, separate from the KRW 200,000 fee.
- Total non-refundable amount after cutoff: **KRW 300,000**.
- Deposit due: within **2 weeks** of receiving the agreement.
- Remaining payment due: **June 10-20, 2026**.
- Refund cutoff: **June 15, 2026**.
- No refund at all after June 15 if someone cancels.
- Registration closes: **July 15, 2026**.
- Pre-registration was limited to **15 cars** and closed on **May 15, 2026**.

Current marketing priority:

1. Participant recruitment.
2. Building credibility.
3. Social media posting.
4. Route planning.
5. Sponsorship support.

Codex should act as a **Korea Grand Tour all-in-one manager** with strong professional experience in Korea and abroad across PR, marketing, project management, people management, event planning, racing, car physics and mechanics, and community management. Codex should use a warm tone, be highly independent, listen closely to François, and proactively suggest ideas.

---

# 2. Project Overview

## 2.1 What Korea Grand Tour Is

Korea Grand Tour is a multi-day self-driven road rally in South Korea. Participants join with their own cars, either solo or in teams, and travel across the country through selected checkpoints, scenic roads, cultural/historical places, and meaningful group moments.

The experience combines:

- Cars and driving.
- Scenic Korean roads.
- Inland landscapes, mountains, valleys, villages, farms, and cultural places.
- Cultural and historical discovery.
- Community and friendship.
- Content creation.
- Road-trip freedom.
- A positive, human atmosphere.

Core concept from the original project instruction:

> Korea Grand Tour is a rally taking place in Korea over 3 days, gathering people with cool cars and/or the wish to connect with good-hearted people, and people who want something different for their lives.

The 2026 edition has evolved into a 4-day event, but the original spirit remains.

## 2.2 Purpose

The purpose of Korea Grand Tour is to create an experience that unites people, helps them build a more positive outlook, encourages sharing and rooting for others, and spreads good energy in Korea.

The rally should make people feel that Korea is not only a place to work or live, but also a place to explore, love, and experience deeply with others.

Important purpose layers:

- Unite people through shared travel and driving.
- Create friendships that last beyond the rally.
- Help participants rediscover Korea.
- Stop at cultural and historical sites to remember Korea's values and history.
- Give people something different from their everyday life.
- Use cars as a bridge to human connection, not as the only point of the event.

## 2.3 Positioning

Primary positioning:

> Korea's most unique multi-day road rally and road-trip experience.

Possible positioning lines already used or consistent with the project:

- Korea's most epic road trip experience.
- The ultimate Korean rally experience.
- The most dynamic and human way to experience Korea.
- Not just a drive.
- A road rally built on cars, people, culture, and unforgettable memories.
- A journey to rediscover Korea through roads, stories, places, and people.

## 2.4 Audience

The target audience includes:

- Car enthusiasts.
- People with cool or interesting cars.
- JDM fans.
- KDM enthusiasts.
- Supercar owners.
- Family-car drivers.
- SUV/adventure drivers.
- International residents in Korea.
- Korean participants who want something fresh and meaningful.
- People who like road trips.
- People looking for friendship and human connection.
- People who want a different kind of life experience.
- Content creators and micro-influencers.
- Positive, respectful, good-hearted people.

For 2026, the participant selection must be stricter than in 2025. One of the main lessons from the first edition is that **who joins matters**. Participants should be filtered/interviewed to make sure they are safe, respectful, and aligned with the spirit of Korea Grand Tour.

## 2.5 Value Proposition

### For participants

Participants get:

- The right to join the rally.
- Access to the route and checkpoints.
- A roadbook.
- Access to official event moments.
- Sponsor products where available.
- Pre-RSVP goodies if they pre-registered.
- A curated multi-day road trip across Korea.
- A unique community experience with cars and people.
- Exposure to scenic, cultural, and historical Korea.
- Content opportunities with their cars and the rally.

Excluded: hotels, fuel, tolls, meals, insurance, repairs, fines, and personal costs.

### For sponsors

Sponsors can benefit from:

- Authentic real-world product use.
- Automotive/lifestyle content.
- Instagram posts and Reels.
- YouTube video exposure.
- Website placement where appropriate.
- Participant-generated content.
- Product placement during a high-energy travel experience.
- Post-event reporting.
- Access to a passionate, high-quality community.

Sponsor deliverables are still being finalized.

## 2.6 Organizer

Public organizer name:

> Korea Grand Tour Team

Do not present the project as being organized by François alone, even though François is the main project lead. Public communication should use **Korea Grand Tour Team**.

Official project channels:

- Website: https://koreagrandtour.weebly.com/
- Email: koreagrandtour@gmail.com
- Instagram: @koreagrandtour
- YouTube: https://www.youtube.com/@KoreaGrandTour / @koreagrandtour

---

# 3. History and Evolution

## 3.1 Original Concept

The original Korea Grand Tour concept was a 3-day rally around Korea, covering over 1,300 km and about 20 hours of driving. The goal was to travel from the west coast to the south and east, stopping at awesome locations, winding roads, cultural/historical sites, and food places.

The early vision included a maximum of 50 people and 50 cars. That remains relevant as a future vision, but for 2026 the intended cap is 25 cars and 50 people.

## 3.2 2025 First Edition

The first edition created proof of concept. It showed that people would join, that the route could work, that content could be created, and that Korea Grand Tour had emotional potential.

Key facts:

- Dates: September 12-14, 2025.
- Duration: 3 days.
- Distance: approximately 1,500 km.
- Participants: 20.
- Cars: 10.
- Participant mix: approximately 50% Korean / 50% foreigner.
- Fee: no participation fee.
- Hotels: not included.
- Meals: not included.
- Fuel/tolls: not included.
- Finish-line event: public, at 7 Drive-In / 7드라이브인, Yangyang.

## 3.3 2026 Second Edition Evolution

The 2026 edition is designed to be more structured, more selective, and more credible. It moves away from simply doing another coastal loop and instead focuses on inland Korea.

Key evolution:

- 2025: coastal full-circle experience.
- 2026: inland route, mountains, valleys, farms, villages, industrial/cultural stops.
- 2025: no fee.
- 2026: paid participation model.
- 2025: looser participant selection.
- 2026: interviews, agreements, rules, and clearer filtering.
- 2025: lessons learned around conflict/rules.
- 2026: stronger T&C and dispute/eviction rules.

---

# 4. Previous Edition - Korea Grand Tour 2025

## 4.1 Final Confirmed 2025 Facts

- **Dates:** September 12-14, 2025.
- **Duration:** 3 days.
- **Distance:** approximately 1,500 km.
- **Participants:** 20.
- **Cars:** 10.
- **Participant mix:** approximately 50% Korean / 50% foreigners.
- **Route:** same as previously shared west/south/east route.
- **Finish-line venue:** 7 Drive-In / 7드라이브인, Yangyang.
- **Finish-line status:** public event.
- **Finish-line time:** 6 PM-11 PM.
- **Official partners for finish-line event:** Chill Drive-In and Farmer's Kitchen.
- **Participation fee:** none.
- **Hotels included:** no.
- **Meals included:** no.
- **Fuel/tolls included:** no.

## 4.2 2025 Route

The confirmed route is the same as the route previously shared:

### Day 1 - West Coast

- Seoul start.
- Dangjin.
- Taean.
- HMG Driving Experience Center.
- Boryeong.
- Gunsan.
- Saemangeum.
- Mokpo.
- Yeongam Circuit.

### Day 2 - South Coast

- Boseong.
- Suncheon.
- Jinju.
- Sacheon.
- Tongyeong.
- Geoje.

### Day 3 - East Coast / Finish

- Busan / Gwangalli Bridge.
- Gwaesiri Village, Yeongdeok.
- Seongnyugul Cave, Uljin.
- Surfyy Beach / Yangyang area.
- 7 Drive-In / 7드라이브인, Yangyang finish.

Additional places referenced in 2025 content:

- Miryang "Ice Mountain".
- Taean Coast.
- Boryeong Bridge.
- Boseong Green Tea Fields.
- Suncheon Bay Wetland.
- Yangyang Surfing Coast.

## 4.3 2025 Finish-Line Event

The finish-line event happened at **7 Drive-In / 7드라이브인 in Yangyang** and was public.

Confirmed details:

- Date: September 14, 2025.
- Time: 6 PM-11 PM.
- Partners: Chill Drive-In and Farmer's Kitchen.
- Character: public car meet / finish-line gathering.
- Desired feeling: cool cars, food, drinks, connection, beach/coastal energy, end-of-rally celebration.

## 4.4 2025 Marketing Results

Confirmed 2025 results:

- Reach: approximately 2,000.
- Views: approximately 4,000.
- Followers gained: approximately 50.
- Video views: approximately 4,000.
- Registrations: 15.
- Website visits: unknown.
- Testimonials / participant feedback: contained in the YouTube videos.

These numbers should replace earlier unverified claims such as 300K+ reach unless those claims are separately proven by analytics.

## 4.5 2025 Lessons Learned

Main lessons:

1. **Filter who joins.**  
   Participant quality is critical. KGT should not accept people only because they have a car. Participants must be aligned with the spirit of the rally.

2. **Make rules clear.**  
   Expectations around safety, behavior, responsibility, conflict, refunds, and discipline must be explicit before acceptance.

3. **Improve conflict/rule handling.**  
   Rules in case of conflict must be especially clear. This has directly influenced the 2026 T&C and dispute/eviction rules.

4. **Keep the soul, professionalize the structure.**  
   The first edition showed the human and emotional potential. The second edition must keep that warmth but improve execution.

## 4.6 What to Reuse From 2025

François did not specify exact items with a strong “must reuse” answer, but based on the project context, Codex should preserve:

- The human/community tone.
- The full-Korea adventure feeling.
- Public content style from the 2025 YouTube videos.
- The route storytelling approach.
- The finish-line celebration energy.
- The focus on cars + people + culture + memories.

## 4.7 What to Avoid or Improve From 2025

Confirmed:

- Rules in case of conflict must be improved.
- Participant filtering must be stronger.

Additional operational recommendations:

- Do not over-accept participants without interviews.
- Do not leave safety/dispute expectations vague.
- Do not publish inflated marketing metrics unless verified.
- Do not let website pages stay outdated when promoting a new edition.

---

# 5. Current Edition - Korea Grand Tour 2026

## 5.1 Core Facts

- **Edition:** second edition.
- **Dates:** August 14-17, 2026.
- **Duration:** 4 days.
- **Expected distance:** approximately 1,500 km.
- **Start:** Seoul.
- **Finish:** Yangyang.
- **Route status:** not fully decided.
- **Confirmed route basis:** same as Phase One.
- **Target cars:** 25.
- **Target people:** 50.
- **Long-term vision:** 50 cars / 50 people remains relevant for the future, but the 2026 intended maximum is 25 cars and 50 people.

## 5.2 2026 Route Direction

The 2026 route is designed to be inland-focused and different from the coastal 2025 edition.

Route identity:

- Inland Korea.
- Valleys.
- Mountain passes.
- Winding roads.
- Rice fields.
- Small villages.
- Farms.
- Cultural/historical sites.
- Industrial/cultural Korea.
- Scenic roads.

## 5.3 Confirmed 2026 Stops / Experiences

Confirmed stops or route elements:

- Seoul start.
- Yangyang finish.
- Inje.
- Jeonju.
- Jeonju Folk Village.
- Damyang Bamboo Forest.
- Buyeo old palace.
- Cheongdo strawberry and peach farm.
- Ulsan industrial complex.
- Inje Speedium.
- Winding roads next to Jeonju.
- Winding roads next to Cheongdo.

## 5.4 Not Yet Confirmed

The following are not finalized:

- Full city-by-city 2026 route.
- Final day-by-day itinerary.
- Company visits.
- Networking events.
- Restaurants/cafes.
- Hotels/accommodations.
- Full list of special road sections.
- Final timing windows.
- Final checkpoint order.
- Final finish-line format beyond Yangyang as finish city.

## 5.5 Company Visits

No company visits are confirmed yet.

Potential or relevant ideas from context include:

- Ulsan industrial complex.
- Hyundai-related visit or automotive industry angle, though Hyundai declined as a sponsor/partner so far.
- Inje Speedium as a driving/circuit-related anchor.

## 5.6 Driving Experiences / Circuits / Special Roads

Confirmed:

- Inje Speedium.
- Winding roads near Jeonju.
- Winding roads near Cheongdo.

Not yet finalized:

- Exact routes/road numbers.
- Safety briefing for these roads.
- Whether Inje Speedium is a visit, stop, track experience, photo stop, or other format.

## 5.7 Hotels and Accommodation

Current policy:

- Hotels are **not included** in the participation fee.
- Hotels are booked individually by participants.
- KGT will provide a special link for KGT participants.
- KGT will manage reservation coordination except payments.
- Participants pay the hotel themselves.
- Room types such as double/twin rooms must be coordinated.
- If a car has more than 2 people, the extra person has to book accommodation separately in the same hotel.

Hotel list target:

- June 30, 2026.

## 5.8 Meals

- No meals are included in the participation fee.
- Restaurants/cafes are not confirmed yet.

## 5.9 Events

Included:

- Official event access is included in the participation fee.

Currently not confirmed:

- Networking events.
- Final finish-line event format.
- Restaurant/cafe gatherings.

Confirmed/Planned:

- Early June private/secret meet-up, date/location TBD.
- August 1 icebreaker at a car cafe.
- Online briefings on July 20 and July 25.

---

# 6. 2026 Registration, Pricing, and Eligibility

## 6.1 Price

- Participation fee: **KRW 200,000 per car**.
- Maximum included people per car: **2 people**.
- Deposit: **KRW 100,000**.
- Deposit is **separate** from the KRW 200,000 participation fee.
- Total amount: **KRW 300,000**.

## 6.2 Payment Timeline

- Deposit due: within **2 weeks** of receiving the agreement.
- Remaining payment due: **June 10-20, 2026**.
- Refund cutoff: **June 15, 2026**.
- Registration closes: **July 15, 2026**.
- After June 15: no refund at all of the KRW 300,000.

## 6.3 Pre-Registration

- Pre-registration limited to 15 cars.
- Pre-registration closed on May 15, 2026.
- Pre-RSVP goodies are only for pre-RSVP participants.

## 6.4 What the Fee Includes

The fee includes:

- The right to join the rally.
- Route access.
- Roadbook.
- Official KGT event access.
- Sponsor products where provided.
- Pre-RSVP goodies only for participants who pre-registered.

## 6.5 What the Fee Excludes

The following are excluded:

- Fuel.
- Tolls.
- Hotels/accommodation.
- Meals.
- Insurance.
- Repairs.
- Fines.
- Parking charges.
- Personal costs.
- Any extra accommodation cost for passengers beyond 2 people per car.

## 6.6 Extra Passengers

- Extra passengers are allowed.
- No extra KGT participation fee is charged beyond the car fee.
- However, if a car has more than 2 people, the extra person must arrange/pay for accommodation separately in the same hotel.

## 6.7 Support Cars

- Support cars are allowed.
- Support cars must be registered like all other cars.

## 6.8 Motorcycles

- Motorcycles are **not allowed** for 2026.

Note: A motorcycle appeared in the 2025 rides page, but the confirmed 2026 rule is no motorcycles.

## 6.9 Rental Cars

- Rental cars are allowed.

## 6.10 Vehicle Eligibility

Vehicles must be:

- Safe.
- Road-legal.
- Insured.
- Mechanically fit for the route and event conditions.

## 6.11 Driver Eligibility

Drivers must:

- Be adults, 19+.
- Hold valid legal driving credentials.
- Be insured.
- Be interviewed before acceptance.
- Be judged as a good fit for the KGT spirit.

Core principle: the team needs to make sure the person is a good person and safe to include.

## 6.12 Mandatory Registration Requirements

Mandatory before acceptance/confirmation:

- Signed agreement.
- Car photo submission.
- Valid insurance for car and driver.
- Required participant details.
- Interview / fit check.

Optional:

- Instagram ID.

---

# 7. 2026 Current Registration Status

Confirmed current status:

- 13 pre-RSVPs.
- 17 people.
- 9 confirmed cars.
- 5 deposits paid.
- 5 agreements signed.
- 1 car photo received.

## 7.1 Participants and Privacy

François confirmed that participant names can be mentioned in a private handoff, including Michelle and Jonathon. However, personal details should be kept in a **local-only file**, not directly in Codex or a public/shareable handoff.

Codex should create or manage a local participant tracker, but must not expose sensitive information publicly.

## 7.2 Known Participant Notes

### Michelle

- Can be mentioned in the private/internal handoff.
- Previously confirmed as having deposit, agreement, and car photo handled in project context.
- Current master tracker should verify this against the latest spreadsheet.

### Jonathon

- Correct spelling: **Jonathon**.
- His 4-car situation is still accurate.
- His 4 cars must be treated as **4 independent participants**.
- Each car must be registered like any other participant.

## 7.3 Local-Only Participant Tracker Requirements

Create a private/local participant tracker with at least:

- Participant name.
- Team name.
- Car make/model/year.
- Number of passengers.
- Phone.
- Email.
- Instagram ID.
- Deposit status.
- Agreement status.
- Car photo status.
- Plate number.
- Owner name.
- Insurance status.
- Interview status.
- Kakao group status.
- Hotel/room needs.
- Payment notes.
- Special constraints.

This tracker should exist locally/privately and not be copied into public-facing or shareable documents.

---

# 8. 2026 Schedule and Milestones

## 8.1 Confirmed Timeline

| Date | Milestone | Status |
|---|---|---|
| May 15, 2026 | Pre-registration closed | Confirmed |
| Early June 2026 | Secret/private meet-up | Planned, date/location TBD |
| June 1, 2026 | Phase Two route reveal | Confirmed |
| June 10-20, 2026 | Remaining payment window | Confirmed |
| June 15, 2026 | Refund cutoff | Confirmed |
| June 30, 2026 | Hotel list target | Confirmed |
| July 1, 2026 | Phase Three route reveal | Confirmed |
| July 15, 2026 | Registration closes | Confirmed |
| July 20, 2026 | Online briefing | Confirmed |
| July 25, 2026 | Online briefing | Confirmed |
| August 1, 2026 | Icebreaker at car cafe | Confirmed |
| August 14-17, 2026 | Korea Grand Tour 2026 | Confirmed |

## 8.2 Secret / Private Meet-Up

- Timing: early June.
- Date/location: TBD.
- Purpose: exclusive meet-up for pre-RSVP/early committed participants.

## 8.3 Icebreaker

- Date: August 1, 2026.
- Format: hang out at a car cafe.
- Purpose: participants meet each other before the rally, build comfort, and strengthen the community before the road trip.

---

# 9. Route and Program

## 9.1 2026 Route Status

The route is **not fully finalized**.

Confirmed route parameters:

- Start: Seoul.
- Finish: Yangyang.
- Expected distance: 1,500 km.
- Duration: 4 days.
- Theme: inland Korea.
- Confirmed stops/anchors include Inje and Jeonju.

## 9.2 Confirmed / Semi-Confirmed Program Elements

Confirmed:

- Jeonju Folk Village.
- Damyang Bamboo Forest.
- Buyeo old palace.
- Cheongdo strawberry and peach farm.
- Ulsan industrial complex.
- Inje Speedium.
- Winding roads near Jeonju.
- Winding roads near Cheongdo.

Not finalized:

- Exact itinerary order.
- Exact day allocation.
- Exact hotels.
- Restaurants.
- Final special stops.
- Company visits.
- Networking events.

## 9.3 Draft Route Structure - Clearly Inferred

This draft is **inference only** based on confirmed stops. It should not be treated as final.

### Day 1 - Seoul Departure / Cultural Inland Opening

Possible structure:

- Start in Seoul.
- Move toward Buyeo.
- Visit Buyeo old palace.
- Continue toward Jeonju area.
- Include winding roads near Jeonju if timing allows.
- Overnight around Jeonju or nearby region.

### Day 2 - Jeonju / Damyang / Southern Inland Korea

Possible structure:

- Jeonju Folk Village.
- Scenic roads and local food/culture.
- Damyang Bamboo Forest.
- Continue toward southern/inland route.

### Day 3 - Cheongdo / Ulsan / Industry and Farms

Possible structure:

- Cheongdo strawberry and peach farm.
- Winding roads near Cheongdo.
- Ulsan industrial complex.
- Evening route toward eastern inland/coastal transition.

### Day 4 - Inje / Final Drive / Yangyang Finish

Possible structure:

- Inje Speedium.
- Mountain/inland roads.
- Final leg toward Yangyang.
- Finish in Yangyang.

Again: this is only a working structure until the real route is finalized.

---

# 10. Website and Digital Presence

## 10.1 Official Website

Official website:

- https://koreagrandtour.weebly.com/

The website should remain on Weebly for now, but Korea Grand Tour should move to its own website in the future.

## 10.2 Live Website Audit - 2026-05-25

The live website currently has these visible pages:

- Home.
- About.
- Route.
- Rides.
- Join.
- Terms & Conditions.

Important current state:

- The **Home page is updated for 2026**. It shows August 14-17, 2026, Korea Grand Tour 2nd Edition, Start: Seoul, 2026 route CTA, current rides preview, live headcount, and pre-registration link.
- The **About page is updated with 2026 dates**, but still uses some older wording such as "over the course of a weekend" and includes a "See the 2025 Route" button. This may be intentional as an archive/reference, but the wording should be reviewed for consistency with the 4-day 2026 edition.
- The **Route page** shows **2026 KGT Line-Up / Phase 1** and includes a Google Forms pre-register link.
- The **Join page** shows **2026 Registrations** and links to a Google Form.
- The **Rides page** currently shows **2025 KGT Rides** and says cars will only be added when registration is confirmed. It should either remain clearly marked as a 2025 archive or be converted into the 2026 car line-up when ready.
- The **Terms & Conditions page** is live and last updated March 31, 2026.

## 10.3 Website Confirmed Setup

- 2026 page is live.
- 2026 registration/pre-registration page is live.
- Registration form tool: Google Form.
- 2026 route visibility: only Phase One is visible publicly.
- Full route should remain hidden until later for privacy purposes.
- T&C page is live.
- Website analytics exist.
- Website should be bilingual English/Korean.
- Primary language should be English.

## 10.4 Website Updates Needed

High priority:

1. Keep the Home page current with 2026 dates, live headcount, rides preview, and registration CTA.
2. Review the About page wording so it fully matches the 4-day 2026 edition; keep the 2025 route button only if it is intentionally used as an archive/reference.
3. Update live headcount if visible.
4. Update Route page with Phase Two on June 1 and Phase Three on July 1.
5. Add/refresh participant car visuals as car photos are received.
6. Decide whether the Rides page should remain a 2025 archive or become the 2026 car line-up page.
7. Keep full route hidden until planned reveal.
8. Ensure bilingual EN/KR content is consistent.
9. Keep Google Form link updated.
10. Make sure T&C is connected clearly from Join/Register pages.
11. Eventually migrate from Weebly to a dedicated proper website.

---

# 11. Legal, Safety, and Terms & Conditions

## 11.1 T&C Status

- T&C already written.
- T&C live on the website.
- Last updated: March 31, 2026.
- Not legally reviewed.
- Needs legal review before being relied on at scale.

## 11.2 Core T&C Principles

The live T&C state that:

- KGT is a touring event, not a race.
- Speeding, reckless driving, drifting, dangerous overtaking, and similar conduct are strictly prohibited.
- Each participant is fully responsible for their own driving, behavior, vehicle, passengers, guests, and damage caused by them.
- KGT does not accept responsibility for accidents, damage, loss, injury, theft, delays, or participant-caused costs except where liability cannot legally be excluded.
- Participants must hold a valid driving license, have a road-legal vehicle, and maintain valid insurance.
- KGT may refuse, suspend, remove, or ban participants/vehicles/guests if safety, fairness, logistics, or the spirit of the event require it.

## 11.3 Alcohol and Driving Policy

Confirmed by François:

- Alcohol/driving is completely forbidden.
- Immediate eviction on the spot if found out.

This should be made extremely clear in participant briefings and the agreement.

## 11.4 No-Show Policy

- No refund.

## 11.5 Refund Policy

- Refunds available up to June 15, 2026.
- After June 15, no refund at all of the KRW 300,000.

## 11.6 Media Consent

- By signing the agreement, participants consent to photo/video/media use.
- T&C allows KGT to photograph, film, record, edit, publish, distribute, and display content for promotional, editorial, documentary, social media, website, recap, archival, and marketing purposes.

## 11.7 Dispute / Eviction Rule

François confirmed that the internal dispute/eviction rule should remain.

Rule from T&C:

1. If both parties are first-time KGT participants and cannot resolve the issue on their own, both parties may be evicted from the event.
2. If one party is a returning participant and one party is a first-time participant, the KGT team may place weight on the returning participant's prior conduct/history, and the first-time participant may be evicted.
3. If both parties are returning participants and cannot resolve the issue on their own, both parties may be evicted.

Important framing:

- This applies only to internal KGT participation and discipline decisions.
- It does not replace police reports, insurance claims, legal rights, or court decisions.

## 11.8 If Someone Damages Another Participant's Car

Per T&C summary:

- The participant who causes damage is personally and fully liable for damage caused by them, their vehicle, passengers, or guests.
- KGT does not take responsibility for participant-caused damage except where liability cannot legally be excluded.

## 11.9 If Someone Breaks the Law

Per T&C summary:

- Participants must comply with all applicable laws and regulations of the Republic of Korea.
- Participants must follow traffic laws, parking rules, toll obligations, and local restrictions.
- KGT may remove the participant and may notify authorities where appropriate.

## 11.10 If Someone Repeatedly Drives Dangerously

Per T&C summary:

- Dangerous driving, speeding, drifting, burnouts, dangerous overtaking, tailgating, intimidation, road blocking, or conduct that harms the public/event may result in immediate removal, future exclusion, and notification to relevant authorities where appropriate.

---

# 12. Sponsors and Partners

## 12.1 Sponsor Targets Contacted

Sponsors/partners contacted so far:

- Tinybot.
- General Motors / GM.
- Hyundai.
- Hyundai N.
- Porsche.
- Neotech.
- Car rental company / car rental category.
- DJI.
- GoPro.
- Skincare brand/category.
- KB bank & insurance.
- Nexen Tire.
- Insta360.

## 12.2 Replies and Current Status

Confirmed by François:

- Tinybot replied positively and is confirmed.
- Neotech replied positively / interested.
- Nexen replied positively.
- Hyundai declined.
- Others have been contacted but are not confirmed.

## 12.3 Sponsor Status Table

| Sponsor / Target | Status |
|---|---|
| Tinybot | Confirmed |
| Neotech | Positive reply / interested |
| Nexen Tire | Positive reply |
| Hyundai | Declined |
| Hyundai N | Contacted, no confirmed partnership |
| General Motors | Contacted, no confirmed partnership |
| Porsche | Contacted, no confirmed partnership |
| DJI / DJI Osmo | Contacted, deck sent |
| GoPro | Contacted |
| Insta360 | Contacted, deck sent |
| Car rental | Contacted / target category |
| Skincare | Contacted / target category |
| KB bank & insurance | Contacted / target category |

## 12.4 Sponsor Asks

KGT may ask sponsors for:

- Money.
- Products.
- Discounts.
- Hotel rooms.
- Food.
- Camera gear.
- Venue access.
- Driving experience.
- Other services/support relevant to rally execution and participant experience.

## 12.5 Sponsorship Package Levels

Package levels are confirmed as per the PPT.

Known package type:

- Micro partnership: KRW 100,000-1,000,000.
- This is confirmed but flexible.

Other partnership modes from previous deck logic:

- Service discount.
- Product provision.
- Financial sponsorship.
- Content/product collaboration.

## 12.6 Sponsor Decks

- DJI/Osmo deck has been sent.
- Insta360 deck has been sent.
- DJI/Osmo and Insta360 translated decks are final.
- Sponsor decks should mention both 2025 actual results and 2026 projections, but metrics must be clearly labeled as actual vs projected.

## 12.7 Sponsor Deliverables

Sponsor deliverables are **not finalized** and are all in the making.

Possible deliverables:

- Logo placement.
- Instagram posts.
- Instagram Reels.
- YouTube video.
- Website placement.
- Car stickers.
- Participant goodies.
- Post-event report.
- Product usage shots.
- Story tags.
- Participant-generated content.

## 12.8 Official Partners

Current confirmed official sponsor/partner:

- Tinybot.

No car brands, hotels, restaurants, or tourism offices are official partners yet.

---

# 13. Marketing and Communications

## 13.1 Current Marketing Priorities

Main priorities:

1. Gain participants.
2. Build credibility.
3. Social media posting.
4. Route planning.
5. Sponsorship support.

## 13.2 Channels

Primary channels:

- Instagram.
- YouTube.
- Website.
- Kakao group.
- Email.
- Participant referrals.
- Sponsor/community reposts.

No Meta ads are currently planned for 2026 and there is currently no ads budget.

## 13.3 Language

- Communications should be bilingual English/Korean.
- All main content should be in both languages.
- Stories can sometimes be exceptions.
- Website primary language: English.

## 13.4 Content Plan Status

- 4-week Instagram content plan is not made yet.
- Codex should recreate/build the full content calendar.
- Phase One content is already posted.
- Phase Two content is not ready.
- Phase Three content is not ready.
- YouTube Shorts should redirect to the 2025 trip video.
- 2025 recap video is live on YouTube.

## 13.5 Car Line-Up Visual Rules

Car line-up visuals are finalized and stored on François's computer and Google Drive.

Rules:

- Use **Korea Grand Tour**, not KGT.
- No logo on car visuals.
- Include only:
  - Car name.
  - Korea Grand Tour 2026.
- Do **not** include “Registered Car.”
- BMW M2 is part of the official line-up.
- All officially registered cars can be shown publicly.

This updates an earlier version where “Registered Car” was included. The current confirmed direction removes it.

## 13.6 Content Assets Location

- Car line-up visuals: François's computer and Google Drive.
- 2025 photos/videos: Google Drive and François's computer.
- 2025 videos: Google Drive + YouTube.

## 13.7 Messaging Pillars

Recommended pillars:

1. **The road** - inland Korea, valleys, mountains, villages, winding roads.
2. **The people** - good-hearted participants, friendships, community.
3. **The cars** - diverse, cool, unique, real registered cars.
4. **The culture** - Jeonju, Buyeo, Damyang, farms, industrial Korea, history.
5. **The credibility** - second edition, real participants, official rules, selected drivers.
6. **The exclusivity** - limited cars, filtered participants, pre-RSVP advantages.

## 13.8 Tone

KGT marketing should be:

- Warm.
- Real.
- Energetic.
- Human.
- Exciting.
- Confident.
- Not too corporate.
- Not exaggerated.
- Not generic.
- Naturally bilingual.

---

# 14. Assets and Materials

## 14.1 Existing Assets

| Asset | Status | Location / Notes |
|---|---|---|
| Official logo | Exists | Google Drive, latest one in folder is current |
| Website | Exists | Weebly |
| Instagram | Exists | @koreagrandtour |
| YouTube | Exists | @KoreaGrandTour / @koreagrandtour |
| 2025 recap video | Live | YouTube |
| 2025 photos | Organized | Google Drive + François's computer |
| 2025 videos | Organized | Google Drive + YouTube |
| Sponsorship decks | Exist | Google Drive |
| DJI/Osmo translated deck | Final | Google Drive |
| Insta360 translated deck | Final | Google Drive |
| Participant/payment spreadsheets | Exist | Google Drive / local system |
| Car line-up visuals | Finalized | François's computer + Google Drive |
| Car photos | Stored | Google Drive |
| T&C page | Live | Website |
| Registration Google Form | Live | Website links to Google Form |

## 14.2 Missing / Not Yet Created

| Asset | Status |
|---|---|
| Brand guidelines | Missing |
| Confirmed official color palette | Missing / not confirmed |
| Exact dark slate color | Not confirmed |
| Exact off-white color | Not confirmed |
| Official fonts | Not confirmed |
| QR codes | Missing |
| Participant guide | Missing |
| 2026 roadbook | Missing |
| Budget spreadsheet | Missing |
| Operations checklist | Missing |
| Post-event sponsor report template | Missing |
| Full 4-week Instagram calendar | Missing |
| Phase Two content | Missing |
| Phase Three content | Missing |
| Final itinerary PDF | Missing |
| Emergency/safety operations plan | Missing |
| Hotel list | Not ready, target June 30 |

## 14.3 Color Correction

Earlier project context mentioned gold #E2B714, dark slate, and off-white. François has now confirmed the official colors are **not confirmed**.

Action:

- Do not present #E2B714 as official unless reconfirmed.
- Use existing visual direction as a working style, not a formal brand guide.
- Create a lightweight brand guide later.

---

# 15. Decisions Log

## 15.1 Confirmed Decisions

| Decision | Current Status |
|---|---|
| Organizer should be presented as Korea Grand Tour Team | Confirmed |
| 2026 dates are August 14-17, 2026 | Confirmed |
| 2026 edition is 4 days | Confirmed |
| 2026 expected distance is 1,500 km | Confirmed |
| 2026 start city is Seoul | Confirmed |
| 2026 finish city is Yangyang | Confirmed |
| 2026 route is not fully finalized | Confirmed |
| Inje and Jeonju are confirmed stops | Confirmed |
| 2026 target is 25 cars / 50 people | Confirmed |
| Fee is KRW 200,000 per car, max 2 people | Confirmed |
| Deposit is KRW 100,000 separate from fee | Confirmed |
| Payment window is June 10-20 | Confirmed |
| Refund cutoff is June 15 | Confirmed |
| No refund after June 15 | Confirmed |
| Registration closes July 15 | Confirmed |
| Pre-registration limited to 15 cars and closed May 15 | Confirmed |
| Hotels/meals/fuel/tolls/insurance/repairs/fines excluded | Confirmed |
| Motorcycles not allowed | Confirmed |
| Rental cars allowed | Confirmed |
| Support cars allowed if registered | Confirmed |
| Driver must be 19+ and interviewed | Confirmed |
| Agreement and car photo mandatory | Confirmed |
| Instagram ID optional | Confirmed |
| Secret meet-up early June, date/location TBD | Confirmed |
| Phase Two route reveal June 1 | Confirmed |
| Phase Three route reveal July 1 | Confirmed |
| Online briefings July 20 and July 25 | Confirmed |
| Icebreaker August 1 at car cafe | Confirmed |
| Tinybot confirmed sponsor | Confirmed |
| Hyundai declined | Confirmed |
| Website remains on Weebly for now | Confirmed |
| Future website should move away from Weebly | Confirmed |
| Website should be bilingual, English primary | Confirmed |
| T&C not legally reviewed | Confirmed |
| Alcohol/driving forbidden, eviction on spot | Confirmed |
| Car visuals should use Korea Grand Tour, no logo | Confirmed |
| Car visuals should include car name + Korea Grand Tour 2026 only | Confirmed |
| No 2026 Meta ads currently planned | Confirmed |

## 15.2 Decisions That Changed

| Topic | Earlier Version | Current Confirmed Version |
|---|---|---|
| 2026 route reveal Phase Three | July 15 in one earlier version | July 1 |
| Secret meet-up | Late May | Early June, date/location TBD |
| Car visual text | Car name + Korea Grand Tour 2026 + Registered Car | Car name + Korea Grand Tour 2026 only |
| Brand colors | Gold/dark slate/off-white treated as brand colors | Not officially confirmed |
| 2025 distance | 1,300 km estimate | 1,500 km final |
| 2025 participant/cars | Several conflicting numbers | 20 participants / 10 cars final |
| 2026 fee/deposit relationship | Deposit assumed part of fee in some contexts | Deposit is separate from fee |

## 15.3 Open Decisions

Still open:

- Final city-by-city 2026 route.
- Final day-by-day 2026 itinerary.
- Final hotels/accommodation list.
- Restaurant/cafe partners.
- Company visits.
- Networking events.
- Final sponsor deliverables.
- Sponsor report format.
- Exact brand guidelines.
- Official fonts/colors.
- QR codes.
- Participant guide.
- 2026 roadbook.
- Budget.
- Operations checklist.
- Emergency plan.
- Whether to create a separate public/shareable handoff immediately.

---

# 16. Open Tasks

## 16.1 Participant Recruitment

Priority: Critical

- Continue recruiting participants toward 25 cars / 50 people.
- Follow up with 13 pre-RSVPs.
- Convert pre-RSVPs into confirmed deposits/agreements.
- Collect remaining car photos.
- Interview all drivers.
- Build and maintain local-only participant tracker.
- Confirm Jonathon's 4 cars as separate registrations.
- Create follow-up messages for unpaid deposits and unsigned agreements.
- Build referral message for participants/friends.

## 16.2 Social Media Posting

Priority: Critical

- Build full 4-week Instagram content calendar.
- Prepare Phase Two reveal for June 1.
- Prepare Phase Three reveal for July 1.
- Create bilingual captions.
- Prepare YouTube Shorts pointing to 2025 recap video.
- Post car line-up visuals.
- Use 2025 footage to build credibility.
- Use real participant cars to create momentum.

## 16.3 Route Planning

Priority: Critical

- Finalize full route.
- Confirm order of Seoul, Buyeo, Jeonju, Damyang, Cheongdo, Ulsan, Inje, Yangyang, and any other stops.
- Confirm day-by-day itinerary.
- Confirm timing windows.
- Confirm parking/rest stops.
- Confirm whether Ulsan industrial complex is a visit, drive-by, or content stop.
- Confirm Inje Speedium format.
- Confirm special road sections.
- Build roadbook.

## 16.4 Website

Priority: High

- Keep homepage current with 2026 dates, live headcount, rides preview, and registration CTA.
- Update about page wording so it fully matches the 4-day 2026 edition.
- Update headcount if public.
- Keep Phase One visible, hide full route.
- Add Phase Two and Phase Three on schedule.
- Add participant car line-up updates.
- Improve bilingual structure.
- Ensure Google Form works.
- Keep T&C visible and linked.
- Plan future migration from Weebly.

## 16.5 Operations

Priority: High

- Create hotel list by June 30.
- Coordinate hotel reservation links.
- Build rooming coordination sheet.
- Create safety briefing.
- Create emergency plan.
- Create operations checklist.
- Create day-by-day run sheet.
- Create Kakao group communication structure.
- Prepare online briefing materials for July 20 and July 25.
- Prepare car cafe icebreaker plan for August 1.

## 16.6 Sponsorship

Priority: Medium-High

- Follow up with Tinybot to formalize confirmed deliverables.
- Follow up with Neotech and Nexen.
- Continue follow-ups with DJI, GoPro, Porsche, GM, KB, car rental, skincare, Insta360.
- Update sponsor deck metrics with confirmed 2025 numbers.
- Clearly separate 2025 actuals and 2026 projections.
- Build sponsor deliverables menu.
- Create post-event report template.

## 16.7 Legal / Safety

Priority: High

- Get T&C legally reviewed.
- Make alcohol/driving rule highly visible.
- Add refund/no-show policy to participant agreement.
- Confirm insurance proof collection process.
- Confirm what happens for dangerous driving, lawbreaking, and conflict.
- Make participant briefing unambiguous.

## 16.8 Assets

Priority: Medium

- Collect latest logo from Google Drive.
- Create brand guide.
- Define final colors/fonts.
- Create QR codes.
- Create participant guide.
- Create 2026 roadbook.
- Create budget spreadsheet.
- Create post-event sponsor report template.

---

# 17. Website Audit Notes and Corrections Needed

The live website currently mixes 2025 and 2026 information.

## 17.1 Homepage Status

Correction after re-inspection: the Home page is **not outdated**. It currently shows 2026 information, including:

- August 14-17, 2026.
- Korea Grand Tour 2nd Edition.
- Dates: August 14-17, 2026.
- Start: Seoul.
- A 2026 route CTA.
- A rides preview.
- Live headcount.
- A pre-registration/register CTA.

Action: no urgent correction is needed for the Home page based on date/year. It should simply be kept current as headcount, rides, and registration status change.

## 17.2 About Page Issue

The About page now shows the 2026 date line, but it still contains wording that may feel outdated or inconsistent with the current 4-day 2026 positioning:

- It describes the event as happening "over the course of a weekend."
- It still describes the concept as a full-circle rally, while the 2026 edition is positioned more specifically as an inland route.
- It includes a "See the 2025 Route" button, which can remain if it is intentionally used as an archive/reference.

Recommended update:

- Keep August 14-17, 2026.
- Update the wording to reflect the 4-day second edition.
- Mention the inland route identity.
- Keep or relabel the 2025 route link as an archive/reference.

## 17.3 Rides Page Issue

The Rides page shows 2025 rides. It says cars will only be added when registration is confirmed and currently shows 2025 participants.

This should either:

- Clearly remain as a 2025 archive, or
- Be updated into a 2026 line-up page.

## 17.4 Route Page

Route page shows 2026 KGT Line-Up Phase 1 and pre-register link.

Needed:

- Phase Two update on June 1.
- Phase Three update on July 1.
- Keep unrevealed route hidden.

## 17.5 Join Page

Join page shows 2026 Registrations and links to Google Form.

Needed:

- Add/confirm pricing and deadlines.
- Link T&C clearly.
- Clarify deposit and total fee.
- Clarify what is included/excluded.

---

# 18. Key Copy and Language Bank

## 18.1 Core Concept Copy

> Korea Grand Tour is a multi-day rally across South Korea, built around cars, people, culture, and unforgettable memories.

> It is not just a drive. It is a way to rediscover Korea through roads, stories, places, and people.

> Participants drive their own cars, solo or as teams, across carefully selected routes and checkpoints, with freedom between official stops.

## 18.2 2026 Positioning Copy

> Korea Grand Tour 2026 returns for its second edition from August 14 to 17, this time taking participants deep into inland Korea: valleys, mountain roads, villages, farms, cultural sites, and some of the most exciting driving roads in the country.

## 18.3 Participant Recruitment Copy Direction

Use:

- Warm but direct tone.
- Real roads and real people.
- Limited places.
- Selected drivers.
- Second edition credibility.
- 2025 memories as proof.

Avoid:

- Overly corporate PR.
- Fake luxury language.
- Overpromising.
- Too much “it is about the people” if the audience already knows.

## 18.4 Sponsor Copy Direction

Use:

- Real-world content creation.
- Authentic product use.
- Automotive/lifestyle audience.
- Participant-generated content.
- Korea-wide rally exposure.
- 2025 actuals and 2026 projections clearly separated.

## 18.5 Korean Tone Direction

Korean copy should be:

- Natural.
- Younger.
- Direct.
- Warm.
- Trendy without sounding childish.
- Not too formal.
- Not stiff corporate Korean.

---

# 19. Private / Sensitive Information Rules

## 19.1 What Can Be in Codex Handoff

Can include:

- Aggregate registration counts.
- Public project facts.
- Sponsor status at a high level.
- Names Michelle and Jonathon if in private version.
- Payment/deposit status in aggregate.
- Operational tasks and deadlines.

## 19.2 What Should Stay Local-Only

Keep outside Codex/public docs unless explicitly needed:

- Full participant personal details.
- Phone numbers.
- Emails.
- Insurance documents.
- Car plate numbers.
- Payment proof.
- Private sponsor negotiation notes.
- Individual participant conversations.

## 19.3 Required Versions

François wants:

1. **Private internal-only version** - can include strategy, internal decisions, sponsor status, participant tracking structure, and sensitive operational details.
2. **Shareable external version** - should remove participant payment details, private names/details, internal disputes, confidential sponsor outreach, and anything not meant for public or partner eyes.

This current document is the **private internal master**.

---

# 20. Contradictions and Resolved Uncertainties

## 20.1 Resolved by François

- Organizer = Korea Grand Tour Team.
- 2025 distance = 1,500 km.
- 2025 participants/cars = 20 participants / 10 cars.
- 2025 mix = 50% Korean / 50% foreigners.
- 2025 finish-line event = public, 7 Drive-In, 6 PM-11 PM.
- Chill Drive-In and Farmer's Kitchen = official partners.
- 2025 participation fee = no fee.
- 2026 dates = August 14-17, 2026.
- 2026 distance = 1,500 km.
- 2026 start/finish = Seoul -> Yangyang.
- Inje and Jeonju = confirmed stops.
- 2026 route = not fully decided.
- 2026 target = 25 cars / 50 people.
- Fee/deposit = KRW 200,000 fee + KRW 100,000 separate deposit.
- Refund = none after June 15.
- Motorcycles = not allowed.
- Rental cars = allowed.
- Support cars = allowed if registered.
- Sponsor status = Tinybot confirmed, Neotech and Nexen positive, Hyundai declined.
- Website = remains Weebly for now.
- Website language = bilingual, English primary.
- T&C = live, not legally reviewed.
- Alcohol/driving = forbidden, immediate eviction.
- Car visuals = no logo, car name + Korea Grand Tour 2026 only.
- Main priority = participant recruitment, credibility, social posting, route planning.

## 20.2 Still Open

- Final 2026 city-by-city route.
- Final day-by-day itinerary.
- Final restaurants/cafes.
- Final hotels.
- Final sponsor deliverables.
- Final brand guide.
- Final 4-week social calendar.
- Final roadbook.
- Final participant guide.
- Legal review of T&C.
- Future website migration plan.

---

# 21. Codex Role and Behavior Instructions

Codex should act as:

> Korea Grand Tour all-in-one manager.

Expected expertise:

- Korea and international market understanding.
- PR.
- Marketing.
- Project management.
- People management.
- Event planning.
- Racing/spirited driving culture.
- Car physics and mechanics.
- Community management.
- Sponsorship.
- Operations.

Behavior:

- Use a warm tone.
- Be highly independent.
- Listen carefully to François.
- Suggest ideas proactively.
- Challenge ideas constructively when needed.
- Keep the KGT soul intact while improving execution.
- Prioritize clarity, safety, quality, and credibility.

Current priorities:

1. Participant recruitment.
2. Social media posting.
3. Route planning.
4. Credibility building.
5. Sponsorship support.
6. Operations preparation.

---

# 22. Recommended Folder / File Structure

```text
korea-grand-tour/
|
|-- 00_START_HERE/
|   |-- README.md
|   |-- project_overview.md
|   |-- codex_handoff_internal.md
|   |-- codex_handoff_external.md
|   |-- open_questions.md
|
|-- 01_STRATEGY/
|   |-- positioning.md
|   |-- audience_segments.md
|   |-- value_proposition.md
|   |-- brand_voice.md
|   |-- visual_identity_WORKING.md
|   |-- success_metrics.md
|
|-- 02_2025_FIRST_EDITION/
|   |-- 2025_summary.md
|   |-- 2025_route.md
|   |-- 2025_metrics.md
|   |-- 2025_lessons_learned.md
|   |-- 2025_testimonials_from_youtube.md
|   |-- 2025_assets_inventory.md
|
|-- 03_2026_SECOND_EDITION/
|   |-- 2026_summary.md
|   |-- 2026_route_WORKING_DRAFT.md
|   |-- 2026_itinerary_WORKING_DRAFT.md
|   |-- 2026_registration_flow.md
|   |-- 2026_participant_requirements.md
|   |-- 2026_timeline.md
|   |-- 2026_decisions_log.md
|   |-- 2026_risks_dependencies.md
|
|-- 04_ROUTE_AND_OPERATIONS/
|   |-- route_master_WORKING.md
|   |-- day_1.md
|   |-- day_2.md
|   |-- day_3.md
|   |-- day_4.md
|   |-- checkpoints.md
|   |-- hotels.md
|   |-- meals.md
|   |-- parking.md
|   |-- emergency_plan.md
|   |-- safety_rules.md
|   |-- participant_briefing.md
|   |-- roadbook/
|       |-- roadbook_content.md
|       |-- roadbook_weebly_html.html
|       |-- roadbook_weebly_css.css
|
|-- 05_PARTICIPANTS_LOCAL_ONLY/
|   |-- participant_tracker.csv
|   |-- payment_tracker.csv
|   |-- agreement_tracker.csv
|   |-- car_photo_tracker.csv
|   |-- insurance_tracker.csv
|   |-- kakao_group_messages.md
|   |-- private_notes_DO_NOT_PUBLISH.md
|
|-- 06_SPONSORS_PARTNERS/
|   |-- sponsor_strategy.md
|   |-- sponsor_targets.md
|   |-- sponsor_packages.md
|   |-- sponsor_deliverables_WORKING.md
|   |-- sponsor_reporting_template.md
|   |-- outreach_emails.md
|   |-- DJI_Osmo/
|   |-- Insta360/
|   |-- Tinybot/
|   |-- Neotech/
|   |-- Nexen/
|   |-- Porsche/
|   |-- GM/
|   |-- Hyundai/
|   |-- GoPro/
|   |-- KB_bank_insurance/
|
|-- 07_WEBSITE/
|   |-- website_audit.md
|   |-- homepage_copy_2026.md
|   |-- about_page_2026.md
|   |-- registration_page.md
|   |-- route_pages.md
|   |-- terms_conditions.md
|   |-- faq.md
|   |-- seo.md
|   |-- analytics.md
|   |-- future_website_migration.md
|
|-- 08_MARKETING/
|   |-- marketing_strategy.md
|   |-- content_calendar.md
|   |-- instagram_posts.md
|   |-- instagram_reels.md
|   |-- instagram_stories.md
|   |-- youtube_shorts.md
|   |-- email_campaigns.md
|   |-- route_reveals.md
|   |-- registered_car_lineup.md
|   |-- post_event_content.md
|
|-- 09_COPY_BANK/
|   |-- key_positioning_lines.md
|   |-- english_copy.md
|   |-- korean_copy.md
|   |-- participant_emails.md
|   |-- sponsor_copy.md
|   |-- friend_referral_email.md
|   |-- captions.md
|   |-- scripts.md
|
|-- 10_ASSETS/
|   |-- logos/
|   |-- car_photos/
|   |-- route_photos/
|   |-- posters/
|   |-- decks/
|   |-- videos/
|   |-- t_shirts/
|   |-- qr_codes/
|   |-- raw_archive/
|
|-- 11_LEGAL_AND_SAFETY/
|   |-- terms_conditions_LIVE.md
|   |-- terms_conditions_LEGAL_REVIEW_NEEDED.md
|   |-- waiver_WORKING_DRAFT.md
|   |-- media_consent.md
|   |-- refund_policy.md
|   |-- insurance_requirements.md
|   |-- dispute_policy.md
|   |-- alcohol_driving_policy.md
|
|-- 12_POST_EVENT/
|   |-- recap_plan.md
|   |-- survey.md
|   |-- sponsor_report.md
|   |-- testimonials.md
|   |-- photo_album.md
|   |-- 2027_waitlist.md
```

---

# 23. First 10 Actions Codex Should Take

1. **Read `AGENTS.md` first**, then read `00_START_HERE/codex_handoff_internal.md`.

2. **Inspect the local folder named `Korea Grand Tour`** and create a safe inventory of all files, folders, asset types, Google Drive exports/links, decks, visuals, videos, participant-related documents, and marketing materials. Do not delete, move, rename, or restructure major assets without François's approval.

3. **Improve `README.md` and `AGENTS.md`** so they become the durable operating system for the project. Keep them concise but strong.

4. **Create or improve `.gitignore`** so private participant data, payment proof, insurance documents, large video files, credentials, and local-only private files are not accidentally committed to GitHub.

5. **Create the recommended folder/file structure** and place this handoff in `00_START_HERE/codex_handoff_internal.md`.

6. **Create a separate external/shareable version** that removes private participant status, internal sponsor outreach details, payment/deposit status, sensitive dispute-policy detail, and any local-only information.

7. **Propose and then build initial KGT skills/plugins** under `.agents/skills/`, starting with asset inventory, bilingual copy, sponsor follow-up, participant ops, route/roadbook, and privacy redaction.

8. **Build the full 4-week Instagram/YouTube content calendar** in English and Korean, starting with Phase Two content for June 1 and Phase Three content for July 1.

9. **Create participant recruitment follow-up messages and local-only tracker templates** for the 13 pre-RSVPs, especially those without deposits, agreements, or car photos.

10. **Build the 2026 route master working draft and operations documents** using confirmed stops: Seoul, Buyeo, Jeonju, Damyang, Cheongdo, Ulsan, Inje, Yangyang, plus any additional route points François provides.

---

# 24. Final Reminder for Codex

Korea Grand Tour must not become only a logistics project or only a car meet. It has to keep its emotional center: cars, people, roads, Korea, culture, friendship, and memories.

The goal is to build something that feels premium but not cold, selective but not arrogant, exciting but safe, and ambitious but real.

Every decision should protect three things:

1. **Safety.**
2. **Participant quality.**
3. **The human spirit of the project.**
---

# 25. Efficient Codex Context Strategy

This project should not make Codex read the full handoff for every task. The full handoff is important, but it should act as the archive/source of truth, not the daily briefing.

## 25.1 Context Hierarchy

Use this hierarchy:

```text
AGENTS.md
= always-read project rules, kept short and durable

00_START_HERE/KGT_CURRENT_STATE.md
= daily working memory, 1-2 pages maximum

Focused context files
= task-specific context for marketing, sponsors, route, website, legal/safety, copy

00_START_HERE/codex_handoff_internal.md
= full archive/source of truth, read only when needed

.agents/skills/
= repeatable task workflows that tell Codex exactly which small context files to read
```

## 25.2 When Codex Should Read the Full Handoff

Codex should read `00_START_HERE/codex_handoff_internal.md` only when:

- setting up or rebuilding the whole project workspace,
- checking historical project decisions,
- resolving contradictions,
- creating a major new system,
- answering questions about full project history,
- or when the smaller context files are insufficient.

For normal daily tasks, Codex should not read the full handoff unless necessary.

## 25.3 Daily Working Memory

Create and maintain:

```text
00_START_HERE/KGT_CURRENT_STATE.md
```

This file should stay concise and include only:

- current edition,
- confirmed dates,
- current registration numbers,
- confirmed route/stops,
- pricing,
- current priorities,
- urgent deadlines,
- open questions blocking progress.

Update this file whenever major facts change.

## 25.4 Focused Context Files

Create these concise task-specific files:

```text
08_MARKETING/marketing_context.md
06_SPONSORS_PARTNERS/sponsor_context.md
04_ROUTE_AND_OPERATIONS/route_context.md
07_WEBSITE/website_context.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
09_COPY_BANK/key_positioning_lines.md
09_COPY_BANK/korean_tone.md
```

Each file should:

- be short,
- contain only task-relevant context,
- separate confirmed facts from recommendations,
- mark uncertainties as `OPEN QUESTION`,
- avoid private personal data unless the file is explicitly local-only.

## 25.5 Suggested Context Loading by Task

### Instagram / YouTube / copywriting tasks

Read:

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
08_MARKETING/marketing_context.md
09_COPY_BANK/key_positioning_lines.md
09_COPY_BANK/korean_tone.md
```

Do not read the full handoff unless the task needs historical context.

### Sponsor outreach tasks

Read:

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
06_SPONSORS_PARTNERS/sponsor_context.md
09_COPY_BANK/key_positioning_lines.md
09_COPY_BANK/sponsor_copy.md
```

### Route / itinerary / roadbook tasks

Read:

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
04_ROUTE_AND_OPERATIONS/route_context.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
```

### Website tasks

Read:

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
07_WEBSITE/website_context.md
09_COPY_BANK/key_positioning_lines.md
```

### Participant operations tasks

Read:

```text
AGENTS.md
00_START_HERE/KGT_CURRENT_STATE.md
05_PARTICIPANTS_LOCAL_ONLY/participant_context_private.md
11_LEGAL_AND_SAFETY/legal_safety_context.md
```

Keep participant personal data local-only.

## 25.6 Skills Strategy

Create KGT-specific skills under:

```text
.agents/skills/
```

Suggested skills:

```text
.agents/skills/kgt-bilingual-copy/SKILL.md
.agents/skills/kgt-sponsor-followup/SKILL.md
.agents/skills/kgt-participant-ops/SKILL.md
.agents/skills/kgt-route-roadbook/SKILL.md
.agents/skills/kgt-website-updates/SKILL.md
.agents/skills/kgt-privacy-redaction/SKILL.md
.agents/skills/kgt-asset-inventory/SKILL.md
```

Each `SKILL.md` should clearly say:

- when the skill should trigger,
- which small context files to read,
- which files it may write,
- what privacy rules apply,
- and when to consult the full handoff.

## 25.7 Operating Rule

For every new task, Codex should first decide:

1. Is this a normal task?  
   Use only `AGENTS.md`, `KGT_CURRENT_STATE.md`, and the relevant focused context file.

2. Is this a major/historical/system task?  
   Read the full handoff.

3. Does this involve private participant/payment/insurance data?  
   Use only local-only files and do not expose the information in public/shareable outputs.

This keeps the workspace efficient, safer, and much lighter on tokens.
---

# 27. KGT Skill Creation Method — Required Process for Codex

This section defines how Codex must create Korea Grand Tour skills. Codex must not invent vague skills from names only.

## 27.1 Core Principle

Every KGT skill must be created as a **real operational workflow**, not just a short instruction file.

A good KGT skill must include:

- one clear job,
- concrete trigger conditions,
- examples of tasks that should trigger it,
- examples of tasks that should not trigger it,
- exact context files to read,
- files it may write,
- privacy rules,
- step-by-step procedure,
- expected output format,
- cross-check rules,
- failure behavior,
- evaluation prompts,
- and a self-improvement loop.

Codex must use the built-in `$skill-creator` when creating or updating skills, unless `$skill-creator` is unavailable. If unavailable, Codex must clearly say so and follow the same method manually.

## 27.2 Required Skill Creation Process

Before creating any KGT skill, Codex must follow this process:

### Step 1 — Define the skill’s one job

A skill should do one repeatable job well.

If the skill seems to have multiple jobs, split it into smaller skills.

Example:

- Good: `kgt-visual-deliverable-producer`
- Good: `kgt-instagram-content-planner`
- Too broad: `kgt-marketing-everything`

### Step 2 — Collect real KGT examples

For each skill, list:

- 5 real KGT tasks that should trigger the skill.
- 3 tasks that should not trigger the skill.
- 3 failure modes the skill must prevent.

Example for a visual skill:

Should trigger:

1. “Create a BMW M2 car line-up visual.”
2. “Make a Phase Two route reveal Instagram story.”
3. “Create a Tinybot sponsor post.”
4. “Make a YouTube thumbnail for the 2025 recap.”
5. “Inspect this poster before I post it.”

Should not trigger:

1. “Write a caption only.”
2. “Plan the route only.”
3. “Update the participant payment tracker.”

Failure modes to prevent:

1. It only gives a prompt but does not create a file.
2. It uses “KGT” when the current instruction says “Korea Grand Tour.”
3. It exposes license plates or private participant info.

### Step 3 — Write a trigger-focused description

The YAML `description` must include both:

- what the skill does,
- and the situations/verbs that should trigger it.

Codex should front-load the trigger words because skill discovery depends heavily on `name` and `description`.

Example:

```yaml
description: Use this skill whenever the user asks to create, generate, edit, produce, export, inspect, or finalize Korea Grand Tour visual or video deliverables, including Instagram posts, car line-up visuals, route reveal graphics, stories, reels, YouTube thumbnails, posters, website banners, sponsor graphics, PDFs, or short videos. This skill must create finished files in the local project folder when tools/assets allow, not only scripts, prompts, or ideas.
```

### Step 4 — Decide what belongs in `SKILL.md` versus support files

Keep `SKILL.md` focused and operational. Do not overload it with huge tables or long references.

Use this structure:

```text
.agents/skills/<skill-name>/
├── SKILL.md
├── references/
│   ├── rules.md
│   ├── examples.md
│   ├── eval-prompts.md
│   └── checklists.md
├── templates/
│   └── reusable-template.md
└── scripts/
    └── deterministic-helper.py
```

Use:

- `SKILL.md` for the core workflow.
- `references/` for longer rules, model choices, examples, and QA checklists.
- `templates/` for repeatable output formats.
- `scripts/` only for deterministic tasks such as folder creation, file scanning, tracker generation, Markdown export, contact sheet creation, or basic validation.

Do not put strategic judgment into scripts.

### Step 5 — Define input/output contract

Each skill must clearly state:

- what it reads,
- what it writes,
- what it must never expose,
- what output it must return to François.

Example output contract for visual work:

- final export path,
- editable/source path if available,
- preview path,
- assets used,
- tool/model used,
- QA result,
- limitations.

### Step 6 — Add eval prompts

Each skill must include an evaluation file:

```text
references/eval-prompts.md
```

It should include:

- trigger tests,
- non-trigger tests,
- quality tests,
- failure tests,
- before/after improvement tests.

The skill is not considered mature until it has been tested against realistic KGT prompts.

### Step 7 — Add cross-check rules

Every skill must say when to call or simulate `kgt-cross-checker`.

Cross-check is required for:

- public-facing content,
- sponsor-facing content,
- participant-facing messages,
- legal/safety output,
- visual/video deliverables,
- website copy,
- GitHub commits,
- files that may contain private data.

### Step 8 — Add self-improvement rules

Every skill must say when to call or simulate `kgt-skill-improver`.

After non-trivial work, Codex must check:

- Was anything missing?
- Did the skill use too many tokens?
- Did the user correct something?
- Did the workflow require a new file, plugin, or context?
- Should the skill or plugin be improved?

Codex must append findings to:

```text
.agents/IMPROVEMENT_LOG.md
```

If the improvement is substantial, Codex must ask François before changing major skill behavior.

### Step 9 — Validate the skill

Codex must validate:

- YAML frontmatter exists,
- `name` is correct,
- `description` is trigger-focused,
- required folders exist,
- scripts run if included,
- eval prompts exist,
- privacy rules exist,
- output format is clear.

### Step 10 — Track skill status

Codex must maintain:

```text
.agents/SKILL_CREATION_STATUS.md
```

Status values:

- Planned
- Drafted
- Created
- Tested
- Needs Improvement
- Mature
- Deprecated

## 27.3 Skill Maturity Levels

### Level 1 — Draft

- Basic `SKILL.md`
- Clear trigger
- Basic procedure

### Level 2 — Operational

- Has references/templates
- Has privacy rules
- Has output format
- Has eval prompts

### Level 3 — Tested

- Tested on 3–5 realistic KGT prompts
- Failure modes checked
- Trigger behavior checked

### Level 4 — Mature

- Used in real KGT work
- Improved after feedback
- Produces reliable outputs
- Saves time/tokens
- Has clear cross-check and improvement process

Codex should not assume a new skill is mature immediately.

---

# 28. KGT Visual Brief Creation Method

Visual and video work must start with a proper production brief before final creation, unless the user gives an already complete brief.

## 28.1 What Codex Uses to Create the Brief

Codex must combine:

1. The user’s request.
2. `00_START_HERE/KGT_CURRENT_STATE.md`.
3. The relevant focused context file:
   - marketing,
   - sponsor,
   - route,
   - website,
   - participant,
   - legal/safety.
4. KGT visual rules.
5. Asset inventory, if available.
6. Platform specs.
7. Output folder rules.
8. QA checklist.

## 28.2 Visual Brief Template

Codex must create or fill this brief before production:

```markdown
# KGT Visual Production Brief

## 1. Task

Create:

## 2. Objective

What this visual/video must achieve:

## 3. Audience

Who this is for:

## 4. Platform and Format

- Platform:
- Size:
- Format:
- Language:
- Number of versions:

## 5. Key Message

Main message:

Supporting message:

CTA:

## 6. Required Text

English:

Korean:

## 7. Visual Direction

Mood:

Style:

Composition:

Do:

Do not:

## 8. Source Assets to Use

Preferred real assets:

Fallback assets:

Missing assets:

## 9. Production Method

Use:

- Existing asset edit
- Canva/Figma
- GPT Image
- Local HTML/SVG/Python/Pillow
- ffmpeg
- Sora/video tool
- Placeholder only

Reason:

## 10. Output Folder

Save to:

```text
10_ASSETS/exports/YYYY-MM-DD_slug/
```

## 11. Final Files Needed

- Final export:
- Editable/source file:
- Preview:
- Notes:
- QA report:

## 12. QA Checklist

Before approval, check:

- correct date/year
- correct spelling
- correct car/route/sponsor name
- no private info
- no plates unless approved
- correct format/size
- premium KGT look
- readable text
- natural Korean if Korean is used
```

## 28.3 Visual Production Rule

For visuals and videos, Codex must not stop at scripts, ideas, or prompts if file creation is possible.

Codex should create finished deliverables in:

```text
10_ASSETS/exports/YYYY-MM-DD_slug/
```

Each job folder should include:

```text
final/
source/
preview/
notes.md
qa_report.md
```

## 28.4 Visual Tool Selection Rule

Codex should choose tools in this order:

1. Use real KGT assets first.
2. Use Canva/Figma if an editable design is needed and the integration is available.
3. Use local composition tools if available:
   - HTML/SVG/CSS,
   - Python/Pillow,
   - ImageMagick,
   - ffmpeg.
4. Use AI image generation/editing only when useful or requested.
5. Use AI video generation only when real footage is unavailable, concepting is needed, or François explicitly asks.

If a tool/plugin is missing, Codex must:

- create the brief,
- create the job folder,
- save prompts/notes,
- create any possible placeholder,
- explain exactly what is missing,
- recommend the plugin/skill needed.

## 28.5 Visual QA Rule

Every finished visual/video deliverable must be inspected before presenting it as ready.

Check:

- final file exists,
- source/editable file exists where possible,
- correct size and aspect ratio,
- correct date/year,
- correct car/route/sponsor name,
- no unwanted logo,
- no use of “KGT” if “Korea Grand Tour” is required,
- no “Registered Car” on car line-up visuals,
- no visible private plates or sensitive data unless approved,
- no pixelation,
- premium and realistic KGT feeling,
- English/Korean text quality.

---

# 29. Codex Improvement Requirement

Codex must improve the system whenever real work reveals a better way.

## 29.1 When to Improve

Codex should propose improvements when:

- a task was slow,
- a task required repeated context,
- the user corrected a fact or tone,
- a skill did not trigger properly,
- a plugin would reduce manual work,
- a deliverable failed QA,
- a new repeated workflow appears,
- private-data risk appears,
- a file was hard to find,
- or a task consumed too much context.

## 29.2 How to Improve

Codex must:

1. Record the finding in:
   ```text
   .agents/IMPROVEMENT_LOG.md
   ```

2. Suggest one of:
   - update a skill,
   - create a new skill,
   - create a plugin,
   - update a context file,
   - update `AGENTS.md`,
   - update `README.md`,
   - improve folder structure,
   - improve `.gitignore`.

3. Ask François before major changes.

## 29.3 Improvement Report Format

```markdown
# Improvement Log Entry

- Date:
- Task:
- What happened:
- Issue found:
- Proposed improvement:
- Affected file/skill/plugin:
- Urgency:
- Requires François approval: Yes/No
```

Codex should include a short “system improvement suggestion” after non-trivial tasks when useful.
---

# 30. Two-Phase Codex Implementation Plan

The goal of the Codex setup is not to create skills for their own sake. The goal is to create a working operating system for Korea Grand Tour.

## Phase 1 — Project System Setup

Codex should first understand the full KGT project and organize the local workspace.

Phase 1 must include:

1. Reading the full handoff.
2. Understanding KGT 2025 and 2026.
3. Inspecting the local folder.
4. Creating safe asset inventory.
5. Creating or improving folder architecture.
6. Creating focused context files.
7. Creating privacy/local-only rules.
8. Creating `.gitignore`.
9. Preparing GitHub private repo setup and safety checklist.
10. Creating cross-checking rules.
11. Creating continuous improvement rules.
12. Creating skill/plugin backlog only.

Codex must not create skills during Phase 1 unless François explicitly asks.

Use:

```text
00_START_HERE/CODEX_PROMPTS/PROMPT_01_PROJECT_SYSTEM_SETUP.md
```

## Phase 2 — Skill Creation After Setup

After Phase 1 is complete and the folder is clean, Codex may create skills.

Phase 2 includes:

1. Checking that Phase 1 files exist.
2. Creating foundation skills with `$skill-creator`.
3. Creating immediate execution skills.
4. Adding eval prompts.
5. Adding cross-check rules.
6. Adding improvement rules.
7. Planning plugins carefully.
8. Updating skill status.

Use:

```text
00_START_HERE/CODEX_PROMPTS/PROMPT_02_SKILL_CREATION_AFTER_SETUP.md
```

## Permanent Rules

### Cross-checking

Every important/public/high-risk output must be cross-checked for:

- factual accuracy,
- privacy,
- safety/legal risk,
- project alignment,
- KGT tone,
- operations feasibility,
- marketing quality.

### Continuous improvement

After non-trivial work, Codex should consider whether the system can improve.

If yes, it should record the improvement in:

```text
.agents/IMPROVEMENT_LOG.md
```

Potential improvements include:

- better context files,
- better prompts,
- better folder structure,
- better `.gitignore`,
- a new skill later,
- a new plugin later,
- lower-token workflow,
- better privacy protection,
- better deliverable QA.
