---
name: Derrick Digital
description: A prospectus for an Alberta energy marketing firm — dark ground, crown green and gold, light Franklin type over field photography.
colors:
  ink: "#0A0D0B"
  ink-2: "#111612"
  line: "#26302A"
  forest: "#006039"
  gold: "#C9A55C"
  garnet: "#D4604C"
  paper: "#F2F1EC"
  soft: "#C4C9C4"
  muted: "#A3AAA4"
  dim: "#7E8680"
  placeholder: "#78807A"
  mist: "#DBE7DF"
  sage: "#BCD3C4"
typography:
  display:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 7.6vw, 7.4rem)"
    fontWeight: 200
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 5rem)"
    fontWeight: 200
    lineHeight: 1
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 6vw, 5.6rem)"
    fontWeight: 200
    lineHeight: 1
    letterSpacing: "-0.045em"
  figure-sm:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 200
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.4rem, 2vw, 1.65rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.6
  body:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
  body-md:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 300
    lineHeight: 1.6
  body-sm:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 300
    lineHeight: 1.55
  label:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 5vw, 80px)"
  section: "clamp(80px, 10vw, 150px)"
  masthead: "84px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "15px 26px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.body-sm}"
  button-text-hover:
    textColor: "{colors.gold}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "8px 0 10px"
  form-panel:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3.4vw, 44px)"
  drawer-summary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.body-sm}"
    padding: "14px 0"
  drawer-summary-hover:
    textColor: "{colors.gold}"
---

# Design System: Derrick Digital

## Overview

**Creative North Star: "The Prospectus"**

The page reads like the opening spread of an energy company's annual report: a
full-bleed field photograph, an enormous light headline, and everything else held to a
strict grid of hairlines and small tracked capitals. Its job is to look like it belongs
in the same room as the buyer's own investor materials. This audience reads those
documents, so a page that looks like one reads as a peer rather than a vendor.

The register is restraint. Colour is a dark, green-biased ground, one crown-green band,
and gold used sparingly enough to stay precious. Type is a single family, Libre
Franklin, run from a 200-weight display down to 11px capitals. Most of the drama comes
from the jump in scale between those two ends, and from photography of the industry
itself. Motion is slow and eased, and it only ever settles content into place.

This replaced "The Safety Placard" (hi-vis chartreuse, hazard orange, heavy condensed
capitals). That direction read as modern-tech and loud. The brief that replaced it was
"less neon, more Rolex", and that buyers in oil and gas should see a firm that looks
the part.

**Key Characteristics:**

- Full-bleed oil and gas photography under a dark scrim, with a slow parallax drift
- One light display face, with the emphasised words set at 500 rather than in a colour
- Crown green as the only colour band; gold as the call to action and the accent
- Hairline rules (1px) do all the structural work, with no boxes, cards or shadows
- Zero corner radius anywhere
- Motion that settles: fade-ups, a drawn rule, figures counting up once

## Colors

A near-black green ground, one crown-green band, and gold. Everything else is a narrow
range of green-biased greys.

### Primary

- **Crown Gold** (`--gold`, `#C9A55C`): the act and the accent. Every call to action is
  a gold fill with Ink text (8.4:1). It also marks the service tags, the "3" in the shift
  figure, focus rings, selection, and the hover state of rules and links. Paper on gold
  is 2.0:1 and never passes.

### Secondary

- **Crown Green** (`--forest`, `#006039`): the one colour band (the shift section) and
  the top of the vista photograph that fades out of it. Text on it is Paper (6.8:1), Mist
  (6.0:1) or Sage for small labels (4.9:1). Gold on it is 3.3:1, which is enough for a
  display figure and nothing smaller.
- **Garnet** (`--garnet`, `#D4604C`): errors only, meaning a failed send, the
  development notice, and the "Unverified" mark on a provisional figure. It measures
  under 2:1 on Forest and never appears there.

### Neutral

- **Ink** (`--ink`, `#0A0D0B`): the ground. Biased green rather than neutral, so the
  green band and the gold read as belonging rather than applied.
- **Ink Raised** (`--ink-2`, `#111612`): the contact form panel, at 90% over its
  photograph.
- **Line** (`--line`, `#26302A`): every hairline on an ink ground — list rules, the stats
  dividers, the footer, the solid masthead's bottom edge.
- **Paper** (`--paper`, `#F2F1EC`): headlines, primary text, and the top rule of each
  service column.
- **Soft** (`--soft`, `#C4C9C4`): lead copy sitting over a photograph.
- **Muted** (`--muted`, `#A3AAA4`): running body copy and field labels.
- **Dim** (`--dim`, `#7E8680`): the quietest tier — small labels, "Optional", footer
  headings. 5.2:1 on Ink, and held there; the first build had it at 4.2:1.
- **Placeholder** (`--placeholder`, `#78807A`): dimmer than Dim so it never reads as an
  entered value, and still above 4.5:1 on the form panel.
- **Mist** (`--mist`, `#DBE7DF`) and **Sage** (`--sage`, `#BCD3C4`): body copy and small
  labels on the forest band.

### Named Rules

**The One Namespace Rule.** A colour and a type step may never share a name. Tailwind's
`text-*` utility serves both `--color-*` and `--text-*`, so a colour token named `lead`
once silently shadowed the `lead` type step. Audit test: for every `--text-<name>`,
confirm no `--color-<name>` exists.

**The Precious Gold Rule.** Gold is the call to action and a handful of accents. It
never fills a section, never sets running text, and never appears twice as a fill in one
viewport except as the masthead button beside a hero button. If a screen has more than
one gold surface competing, cut until one does.

**The Green Ground Rule.** Neutrals are biased green, never neutral grey and never true
black.

## Typography

**Family:** Libre Franklin (fallback: Franklin Gothic → Helvetica Neue, Arial, sans-serif)

**Character:** an open revival of Franklin Gothic, the long-standing newspaper and
corporate-report face. It reads as established rather than technical. At 200 it is
elegant enough to run at 7rem. At 500 and in tracked capitals it is sturdy enough for
11px labels. One family carries the whole system. Weights rendered are exactly 200,
300, 400, 500 and 600, and `app/layout.tsx` loads no others.

### Hierarchy

- **Display** (200, `clamp(3rem, 7.6vw, 7.4rem)`, line-height 0.98, tracking −0.035em):
  the hero headline only. Two lines, the second set at 500. Weight, not colour, carries
  the emphasis.
- **Headline** (200, `clamp(2.6rem, 5.4vw, 5rem)`, line-height 1, tracking −0.03em):
  section openers, with the contact heading's last word at 500.
- **Figure** (200, `clamp(3.4rem, 6vw, 5.6rem)`, tracking −0.045em): the statistics band.
- **Figure Small** (200/300, 3.5rem, line-height 0.9): the 10 and the 3 in the shift
  figure, which share a half-column.
- **Title** (400, `clamp(1.4rem, 2vw, 1.65rem)`): service titles, the "first results"
  figure, and the form's confirmation line.
- **Lead** (300, 1.125rem, line-height 1.6, max ~40–46ch): the paragraph under a
  headline.
- **Body** (300, 1rem): running text and every form control. Controls sit at a full
  1rem deliberately. iOS Safari force-zooms a focused input set below 16px, which throws
  the form sideways on the phones this audience uses.
- **Body Medium** (300, 0.9375rem): service descriptions and the shift figure's column
  labels.
- **Body Small** (300/400, 0.875rem): bullets, the drawer toggle, footer links, buttons.
- **Label** (500, 0.6875rem, tracking 0.16em, uppercase, `.u-label`): nav, field
  labels, service tags, stat captions, footer headings.

Outside the ramp sits one fixed value: the **wordmark** (600, 0.875rem, tracking
0.2em, dropping to 0.75rem/0.16em below `sm`). It is a property of the brand lockup and
lives only in `Wordmark`.

### Named Rules

**The One Ramp Rule.** A font-size literal in component markup is a defect. A size
needed twice becomes a named step in `@theme`; a size needed once snaps to the nearest
step. Audit test: `grep -rE 'text-\[[0-9.]+(rem|px)\]' components/` returns only the
wordmark.

**The Two Registers Rule.** Type is either very large and light or very small and
tracked. The middle is nearly empty, and the gap is the design.

**The Weight Emphasis Rule.** Inside a headline, emphasis is a heavier weight (500)
on the same light face, never a colour change, an italic, or an outline.

**The Tracked Capitals Rule.** All uppercase text is tracked to at least 0.1em, and
labels to 0.16em. Running copy is never uppercase. Small capitals are 500, never bold.

## Layout

A single centred container at 1320px maximum, with a fluid side gutter of
`clamp(20px, 5vw, 80px)`. Sections are separated by `clamp(80px, 10vw, 150px)` of
vertical padding. Within sections, 1px rules separate things; there are no boxes.

The page runs: **hero** (photograph) → **shift** (forest band) → **vista** (photograph,
no copy) → **services** (ink) → **stats** (ink, behind a hairline) → **contact**
(photograph) → footer. The ground alternates between photograph and flat colour, which
is the page's rhythm.

Two-column splits favour the text column (`5fr 4fr` in the hero and shift, `5fr 6fr`
in contact) and collapse at `lg` (1024px), except the hero row, which holds to `md`.
Service columns use `repeat(auto-fit, minmax(270px, 1fr))`, so the column count falls
out of the width with no breakpoint.

Every section declares its ground with `data-ground` (`photo`, `ink`, `forest`). The
section separator is **one** interval, not two. A rule in `globals.css` zeroes the top
padding of a section that follows another on the same ground. A section on a
photograph or a colour band is exempt, because its padding is internal and the change
of ground divides on its own. Stats follows Services on ink, so its spacing lives inside
its rule rather than on the section. The rule is deliberately unlayered, since Tailwind
utilities outrank every `@layer`.

## Photography

Three full-bleed photographs, all oil and gas:

- **Hero:** a drilling rig silhouetted against a dusk sky, set right of centre on
  desktop (the rig stands at 64% across the frame) and centred on it on a phone.
- **Vista:** a high-altitude aerial of a plant and tank farm in boreal country, with no
  copy on it.
- **Contact:** a pumpjack silhouetted at sunset.

- **Grade:** every photograph carries `.u-photo` (`saturate(0.8) contrast(1.05)`), so
  stock from different shoots reads as one set. The contact photo is the exception at
  full saturation: desaturating it turned the sun into a grey disc.
- **Scrim:** text never sits on a raw photograph. The hero is darkest behind the copy,
  left to right on desktop and bottom to top on a phone. The vista fades out of the
  forest band above and into ink below. The contact form sits on its own near-opaque
  panel.
- **Drift:** each photograph sits in an oversized wrapper and drifts at 18–22% of scroll
  distance (`ParallaxPhoto`). That reads as depth, not motion.
- **Relevance:** photography must be recognisably oil and gas. A beautiful aerial of
  farmland was rejected for exactly that reason. Per-service photographs were also
  rejected: stock that does not illustrate the specific service is decoration.
- **Provenance:** all three are free-licence stand-ins for the client's own field
  photography. The hero lives in `public/photos/` (Pixabay); the others load from the
  stock libraries allowed in `next.config.ts`.
- **No one else's name:** no operator or contractor branding may be legible anywhere in a
  photograph. The first hero showed a drilling contractor's name on the mast and was
  replaced for it.

## Motion

Slow, eased, and only ever settling content into its final place. Everything uses
`--ease-enter` (`cubic-bezier(0.2, 0.7, 0.2, 1)`).

- **Hero entrance (once, on load):** the photograph scales from 1.12 to 1 and fades in
  over 2.8s. Each headline line rises out of its own clipping box (1.2s, the second line
  0.14s later). The rule above the copy draws left to right. The copy and buttons fade
  up last, then the scroll chevron.
- **Scroll chevron:** a small chevron centred at the foot of the hero that drifts down
  6px and fades on a 2.6s loop. It links to the next section.
- **Reveals:** headings, paragraphs and columns fade up 28px over 1.1s the first time
  they enter view, staggered by `delay` (`Reveal`, `useReveal`).
- **Bars:** the shift figure's bars draw across to their own lengths, staggered 50ms.
- **Counting:** figures count up from zero over 2.2s the first time they are seen
  (`CountUp`). Only the leading number animates, so "21d" counts 0d → 21d. "0" has
  nothing to count to and stays put. Assistive tech reads the final figure, never a
  frame in flight.
- **Parallax:** see Photography.
- **Masthead:** clear over the hero, solid (ink at 92% with a 10px blur) once 60% of the
  viewport has scrolled.
- **Hover:** buttons swap fill and nudge their arrow 4px right. Service bullets indent
  and turn gold behind a growing tick. Nav links draw a gold underline. Service columns
  turn their top rule gold.

### Named Rules

**The Script-Optional Rule.** Content is only ever hidden by motion once the motion can
run. An inline script in `app/layout.tsx` marks `<html data-motion>` before first paint,
and reveal styles key off it. A visitor whose script never loads sees the whole page in
its final state. Figures are server-rendered at their final value.

**The Settle Rule.** Motion brings content into place and stops. Nothing loops except
the scroll chevron. Nothing bounces, overshoots or moves on its own after it has
arrived.

**The Reduced Motion Rule.** With `prefers-reduced-motion`, every entrance, reveal,
count, drift and loop is off, and the page renders in its final state.

## Elevation & Depth

**Flat.** No shadows anywhere, at rest or on interaction. Depth comes from photography
and the parallax drift, and separation from hairlines and the change of ground. The
only translucent surfaces are the solid masthead and the contact form panel. Both are
blurred, because they sit over moving content.

## Shapes

**Zero radius, everywhere, without exception.** Buttons, inputs, panels, the notice bar.
Borders are 1px hairlines. The thickest line in the system is the 3px gold bar marking
the one slot in the shift figure.

**The Square Corner Rule.** No radius. Not on buttons, not on inputs, not "just a
little" anywhere. One rounded element makes the page look like a different template.

## Components

### Buttons

- **Primary:** gold fill, Ink text, Body Small at 500 with 0.04em tracking, `15px 26px`
  (`11px 18px` compact, masthead only). Hover swaps the fill to Paper.
- **Text:** no fill, Paper text, the same type. Hover turns it gold. Used beside a
  primary for the secondary route ("What changed").
- **Arrow:** a trailing `→` rendered by `Arrow`, `aria-hidden`, which nudges 4px right
  on hover. It is the only movement a button makes.
- **One property, one owner:** every colour that differs by variant is declared in the
  variant, never in the shared base. Two utilities for one property resolve by
  stylesheet order, not by the order written.

### Masthead

- Fixed. The wordmark sits left, and the nav links and a compact primary button sit
  right.
- **Clear state:** links in Paper at 600 with a soft dark text-shadow. A scrim fades down
  from the top edge behind them, because the links have to hold contrast over whatever
  sky a photograph puts there.
- **Solid state:** Ink at 92% with a blur and a Line bottom border, once the hero is
  mostly scrolled past.
- **Mobile:** below `md` the links hide, and the button is the whole navigation.
  Contact is never a link, because the button is that destination.

### Service Columns

- No box. Each column opens with a 1px Paper rule that turns gold on hover. The whole
  column is the drawer's click target (see The Honest Affordance Rule).
- Bands, top to bottom: gold label tag, Title, Body Medium description, a hairline list
  of deliverables, the "First results" label and figure, the drawer toggle, and the
  drawer answer.
- **Subgrid:** every column subgrids onto seven shared row bands and always spans all
  seven, so the rows line up however the copy wraps. Spacing below a column is its own
  bottom padding, which lands in the answer band for all three. A row gap on the parent
  would be split into the margins around every band and misalign the toggles. That
  happened, and it is why the parent has `gap-y-0`.

### Disclosure Drawer

- A `<button>` with `aria-expanded`/`aria-controls` and a labelled `role="region"`
  panel. Closed panels carry `inert`, so they are hidden from assistive technology and
  the tab order, not just clipped to zero height.
- **Toggle:** Body Small in Paper between two hairlines, with a gold plus whose vertical
  stroke scales to zero on open.
- **Motion:** height and opacity animated by script (260ms open, 210ms close), measured
  against the rendered panel after the state lands.

### Contact Form

- **Panel:** Ink Raised at 90% with a 14px blur and a faint Paper hairline, over the
  contact photograph. A header row carries "Contact us" and, once the client confirms
  it, the reply window in gold.
- **Fields:** underlined, not boxed. A 1px Paper-at-28% bottom rule turns gold on focus,
  and the label above turns gold with it. Labels use the Label style in Muted. Optional
  fields say "Optional" in Dim.
- **Select:** native appearance stripped and replaced with a gold chevron.
- **Error:** the form is never unmounted to show a failure. The inputs are uncontrolled,
  so replacing them discards everything typed. A failed send renders a `role="alert"`
  block with a Garnet left rule, takes focus, and offers the mail-client fallback when
  there is a real inbox.
- **Sent:** the panel keeps its shape and swaps the fields for one gold Title line.
- **Sending:** posts to `/api/contact`, which sends through Resend. A hidden honeypot
  field catches bots.

### Statistics

- Four figures in the Figure style, each behind a left hairline, with a Label caption
  in Muted. Each counts up when seen. Only client-confirmed figures render. Below
  `STATS_MINIMUM` the band is omitted rather than padded out.

### Named Rules

**The Own Ground Rule.** Text never sits on a photograph and hopes. It gets a scrim
designed for that position, or its own opaque panel. Contrast that depends on where the
photograph happened to be dark is not contrast.

**The Honest Affordance Rule.** If a surface changes on hover, that whole surface is
clickable. Every hover behaviour has a tap or click equivalent, because much of this
audience is on a phone.

## Do's and Don'ts

### Do:

- **Do** use photography that is recognisably oil and gas, under a scrim.
- **Do** carry headline emphasis with weight (500 on 200), not colour.
- **Do** resolve every font-size to a named step (The One Ramp Rule).
- **Do** set form controls at a full 1rem so iOS does not force-zoom a focused field.
- **Do** declare each section's `data-ground`.
- **Do** keep motion slow, eased and one-shot, and make sure it can be absent entirely.
- **Do** separate with 1px hairlines rather than boxes or fills.

### Don't:

- **Don't** introduce any `border-radius`, anywhere.
- **Don't** add shadows, at rest or on hover.
- **Don't** name a colour token and a type step the same word.
- **Don't** unmount a form to show an error.
- **Don't** double the section separator by padding both neighbours on a shared ground.
- **Don't** put garnet on forest, or use it for anything but errors.
- **Don't** use neutral grey or true black.
- **Don't** put photographs above the service columns. Images that do not illustrate
  the specific service read as decoration, and were removed.
- **Don't** place a long-running scroll indicator at the edge of the hero. A vertical
  line was rejected in favour of a small centred chevron.
- **Don't** build simulated product UI (mock dashboards, fake chat transcripts) to
  illustrate a claim. It was rejected as cluttered and artificial.
- **Don't** reintroduce the hi-vis vocabulary: chartreuse, hazard orange, condensed
  900-weight capitals, hard offset shadows, 3px borders, outlined headline text.
