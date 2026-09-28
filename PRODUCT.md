# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary buyers are decision-makers at Alberta / Western Canadian energy businesses,
across three segments the client already targets:

- **Oilfield service companies** — owner or GM makes the marketing call directly.
- **Producers and operators** — a marketing or business-development lead owns the function.
- **Energy technology companies** — startups selling into the same basins.

The job they are doing: winning work they currently never hear about. They are not
shopping for marketing; they are trying to get on vendor lists and bid invitations.
The audience is pragmatic and sales-resistant — overt marketing language reads as a
warning sign, and unbacked claims destroy credibility faster than plain speech.

## Product Purpose

Derrick Digital sells GEO (Generative Engine Optimization), SEO, and brand /
technical content to Western Canadian energy companies.

The thesis: buyers increasingly ask an AI assistant rather than scrolling ten blue
links, and the assistant answers with a short list of named companies. A company
absent from that list is not ranked low — it is invisible. Derrick Digital's purpose
is to get clients named in those answers and keep them there, while continuing to
serve conventional search.

Success is a booked visibility audit, then a retained engagement. The site is a
lead-generation surface, not a brochure.

## Positioning

**Insider fluency is the real differentiator, and it is genuine.** The client has a
real oilfield background (confirmed). A generalist marketing agency cannot truthfully
claim to know a completion crew from a workover rig, and cannot write a capability
statement that survives a procurement review. This is the durable asset — it should
be demonstrated through correct use of the industry's own language rather than
asserted as a credential.

The secondary position is timing: this market has almost no GEO competition yet, and
generative systems are conservative once a company becomes an established cited
source. First movers hold the slot.

## Operating Context

- This is agency work. The user builds and presents; the site owner is the client and
  approves. Product facts must come from the client, not be authored on their behalf.
- Incumbent site: a Wix "coming soon" page at `rydermacleod23.wixsite.com/derick-digital`
  (note: the subdomain misspells the brand — canonical spelling is **Derrick Digital**,
  two r's). It is being fully replaced.
- The audience's terminology is load-bearing and must stay accurate:
  - **Plays / basins:** Montney, Duvernay, Cardium, Clearwater, Viking, Charlie Lake.
  - **Hubs:** Grande Prairie, Whitecourt, Drayton Valley, Bonnyville, Estevan,
    Fort St. John.
  - **Service lines:** coil tubing, wireline, completions & frac, workover & service
    rigs, fluid hauling / vac, production & testing, construction & facilities.
  - Regulatory and well vocabulary (AER licences, UWI, LSD grid, TVD/MD) is
    recognisable to this audience and reads as competence when used correctly — and
    as costume when used wrongly.
- Substantial mobile use: buyers read on phones, in vehicles and in the field.

## Capabilities and Constraints

- **Delivery:** single-page static site (`index.html`), self-contained HTML/CSS/JS,
  no build step and no backend. Fonts load from Google Fonts.
- **Contact handling:** the form composes a `mailto:` and hands off to the visitor's
  mail client. There is no server, so delivery is not guaranteed — a visitor using
  webmail with no registered mail handler gets nothing. The recipient address is a
  single constant in the page script. Replacing this with a posted endpoint is an
  open decision.
- **Deploy target: undecided.** No host chosen, and the `derrickdigital.ca` domain is
  not confirmed as registered.
- **Service offer is three lines:** GEO, SEO, and brand / technical content, with a
  fixed-fee visibility audit as the entry product.
- **The GEO process as currently described on the site is approximately right but the
  specifics differ.** The described sequence — baseline across several assistants,
  entity and schema rebuild, monthly re-run and report — is directionally accurate;
  the client must correct the details before launch. Treat the current description as
  a draft awaiting his correction, not as confirmed capability.

## Brand Commitments

- **The existing derrick-tower logo is fixed** and carries over from the current site.
  It is the only element the client required be preserved.
- **The palette must contain green**, to match that logo. (Volunteered by the client;
  recorded as stated and not expanded here.)
- Brand name: Derrick Digital.
- Voice, as validated by the client's positive response to drafts: plain, direct,
  unsentimental, willing to say when something is not worth paying for. No
  agency-speak.

## Evidence on Hand

Real and usable:

- The client's oilfield background (confirmed) — the basis of the positioning claim.
- The incumbent Wix site's copy and segment list.
- The statistics band: `312` buyer prompts per audit, `5` AI engines tracked monthly,
  `3` disciplines under one team, and `21` days from audit to first fix. Authored as
  placeholders and since confirmed by the client, so they publish. (`0` annual
  contracts was dropped: with no clients yet it read as "zero contracts won".) They carry `confirmed(...)` in `lib/content.ts`.

**Placeholders currently on the page that must not be treated as evidence.** These
were authored to make the design concrete and are not client-supplied:

- "Roughly `400`" Alberta service companies — placeholder.
- "Reply in 1 business day" — unverified service promise.
- Contact details `hello@derrickdigital.ca` and `(780) 555-0142` — **invented**.
- The logo mark currently rendered is a **reconstructed SVG**, not the client's asset.
  The real file has not been supplied.

Client-estimated and probably accurate, but not independently verified:

- 21 days from baseline to first move.
- GEO first movement 45–90 days; SEO 60–120 days; brand first asset 3–6 weeks.

Absent entirely — future work must not fabricate these: client names, case studies,
testimonials, logos, pricing, sample audit output, team bios, headcount, founding
date, certifications.

## Product Principles

1. **Never dress a placeholder as proof.** This audience treats unbacked numbers as a
   tell. Every figure on a shipped page must trace to the client or come off the page.
2. **Demonstrate the insider knowledge, don't assert it.** Correct vocabulary and
   real basins do more than any "we understand your industry" sentence.
3. **The audit is the entry point, but the door must be wider than the audit.** Many
   qualified buyers cannot yet name what they need; the contact path has to accept a
   vague enquiry without penalising it.
4. **Serve three segments without diluting to generic.** Service companies, producers,
   and energy tech have different buyers; specificity for one must not read as
   exclusion of the others.
5. **Honesty is the conversion strategy.** Saying "you may not need us for this" is a
   credibility asset with this audience, not lost revenue.

## Accessibility & Inclusion

No formal standard has been established with the client. Product-relevant needs that
are known: heavy phone use in vehicles and outdoors, where glare, one-handed use and
patchy rural connectivity are normal; and an older-skewing buyer population for whom
small type and low-contrast text are a real barrier. Keyboard and screen-reader
support should meet ordinary web baseline expectations.
