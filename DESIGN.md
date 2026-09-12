---
name: Derrick Digital
description: Hi-vis worksite signage for an Alberta energy marketing firm — flat, stamped, and built to be read fast.
colors:
  ink: "#0C0D0A"
  ink-2: "#14160F"
  field: "#2E3326"
  forest: "#1B3A28"
  forest-2: "#24513A"
  lime: "#C6F24E"
  orange: "#FF5A1F"
  paper: "#F2F0E6"
  lead: "#CFD2BE"
  muted: "#B9BCA6"
  muted-2: "#D6D9C4"
  sage: "#9FC0AC"
  dim: "#8D9179"
  on-lime: "#1A2010"
  on-lime-2: "#2C3520"
  placeholder: "#6E7361"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(2.9rem, 9.4vw, 7.8rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "0.004em"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(2.2rem, 5.6vw, 4.2rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "0.004em"
  figure:
    fontFamily: "Big Shoulders, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.1rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "0.004em"
  title:
    fontFamily: "Big Shoulders, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "0.004em"
  lead:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
  label-sm:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(18px, 4vw, 56px)"
  section: "clamp(48px, 7vw, 96px)"
  stack: "12px"
  grid: "18px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.lime}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 22px"
  button-ghost-hover:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "22px 20px 24px"
  card-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.muted-2}"
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "10px 11px"
  drawer-summary:
    backgroundColor: "transparent"
    textColor: "{colors.lime}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "11px 13px"
  drawer-summary-hover:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
---

# Design System: Derrick Digital

## Overview

**Creative North Star: "The Safety Placard"**

This system borrows the visual language of worksite signage: the hi-vis vest, the
hazard placard, the equipment tag bolted to a skid. Everything is built to be read at
a glance, in bad light, by someone who is busy and not inclined to be sold to. That
constraint produces the whole aesthetic — maximum contrast, heavy condensed capitals,
flat opaque surfaces, no ornament that does not carry information.

The audience is Alberta oilfield and energy operators. They are surrounded by this
language every day, so it reads as native rather than as a theme. The system earns
credibility the way the copy does: by being fluent rather than by claiming fluency. A
softer, more conventional agency look would read as an outsider's guess at the
industry; this reads like it came from inside it.

Density is deliberately uneven. Headline type is enormous and crowds the viewport;
supporting text is small, tight and workmanlike. The gap between those two scales is
the drama in the system — there is almost nothing in the middle. The logo is a fixed
inherited asset and the palette carries green to match it, which is why the darkest
neutrals are green-biased rather than true black.

**Key Characteristics:**

- Hi-vis chartreuse against near-black, with hazard orange as a second signal
- Zero corner radius anywhere in the system
- Heavy condensed display capitals against small tracked condensed labels
- Flat surfaces at rest; depth appears only as a response to interaction
- Structural borders at 3px, control borders at 2px — borders do the work shadows usually do

## Colors

A near-black green ground carrying two high-visibility signal colors, with the rest of
the palette a narrow range of desaturated sage and bone.

### Primary

- **Safety Chartreuse** (`--lime`, `#C6F24E`): the shout. Primary buttons, all labels and
  eyebrows, focus rings, selection, the single number that matters in a group, and the
  active state of every control. This is the color of a hi-vis vest and PPE tape, which
  is precisely where this audience meets it.

### Secondary

- **Hazard Orange** (`--orange`, `#FF5A1F`): the warning. Marks the problem, the loss, the thing
  going wrong, and provenance stamps. Carries heat and alarm that chartreuse cannot,
  because chartreuse has been spent on "go". Welcome in larger graphic doses —
  oversized marks, section grounds, chart emphasis — provided it never lands on a
  call to action.

### Neutral

- **Ink** (`--ink`, `#0C0D0A`): the ground. A near-black biased green rather than neutral, so
  the logo's green reads as belonging rather than applied.
- **Ink Raised** (`--ink-2`, `#14160F`): card and panel fill, one barely perceptible step above
  the ground.
- **Field Line** (`--field`, `#2E3326`): input borders, internal rules, and dividers inside
  components.
- **Forest** (`--forest`, `#1B3A28`): the logo green. Hovered card fill and full-bleed section
  grounds.
- **Forest Lift** (`--forest-2`, `#24513A`): the hard offset shadow cast on button hover.
- **Paper** (`--paper`, `#F2F0E6`): a warm bone. Primary text, structural card borders, and
  inverted panel headers.
- **Paper Lead** (`--lead`, `#CFD2BE`): the hero lead paragraph, one step below full paper.
- **Body Muted** (`--muted`, `#B9BCA6`): the default body-copy tone inside components.
- **Body Muted Lift** (`--muted-2`, `#D6D9C4`): the same copy when its card is hovered — text
  brightens with the surface rather than staying fixed.
- **Sage Muted** (`--sage`, `#9FC0AC`): small labels sitting on a forest ground.
- **Dim** (`--dim`, `#8D9179`): the quietest tier — bullet labels, captions, and the neutral
  crowd marks in the hero canvas.
- **Ink on Chartreuse** (`--on-lime`, `#1A2010`): body text sitting on the full-bleed
  chartreuse band. Near-black with a green cast so it never reads as pure black on
  a saturated ground.
- **Ink on Chartreuse Muted** (`--on-lime-2`, `#2C3520`): the secondary label tier on
  that same band.
- **Placeholder** (`--placeholder`, `#6E7361`): input placeholder text — deliberately
  dim enough that it can never be mistaken for an entered value.

### Named Rules

**The Ten Percent Rule.** No viewport is more than roughly ten percent Safety
Chartreuse. Its authority comes entirely from its rarity; a page that is 30% chartreuse
has no accent at all, only noise. Audit test: squint at any screen — if more than one
element shouts, cut until one does.

**The Two Signals Rule.** Chartreuse means *go, press, this is live*. Orange means
*look out, this is the problem*. The two never swap jobs and orange never appears on a
call to action. Orange may be used generously in graphic and editorial roles; it may
never be used to invite a click.

**The Green Ground Rule.** Neutrals are biased green, never neutral grey and never
true black. The logo is fixed and inherited; the palette bends toward it so the mark
never looks pasted on.

## Typography

**Display Font:** Big Shoulders (fallback: Arial Narrow, Impact, sans-serif)
**Body Font:** Barlow (fallback: Helvetica Neue, Arial, sans-serif)
**Label Font:** Barlow Condensed (fallback: Arial Narrow, sans-serif)

**Character:** Big Shoulders (formerly published as "Big Shoulders Display") is a condensed industrial face drawn from Chicago public
signage — tall, tight and relentless in heavy weights, which is why it can run at
enormous sizes without feeling decorative. Barlow is its natural companion: a
grotesque with slightly rounded, low-contrast letterforms that stays readable at small
sizes and in long paragraphs. Barlow Condensed carries all the small structural type,
so labels visibly belong to the same family as the body while reading as a different
register.

### Hierarchy

Eight steps, consolidated from the sixteen ad-hoc sizes the first static build
accumulated. Every size on the site now resolves to one of these.

- **Display** (900, `clamp(2.9rem, 9.4vw, 7.8rem)`, line-height 0.86): the single page
  headline. One per page, sized to dominate the first viewport.
- **Headline** (900, `clamp(2.2rem, 5.6vw, 4.2rem)`, line-height 0.86): section openers.
- **Figure** (900, `clamp(2.1rem, 4vw, 3.1rem)`, line-height 0.82): big numbers and the
  three-letter service tags — display weight used as a graphic mark rather than as text.
- **Title** (900, `clamp(1.35rem, 2.2vw, 1.7rem)`, line-height 0.92): card and component titles.
- **Lead** (400, `clamp(1.05rem, 1.5vw, 1.3rem)`, line-height 1.5, max 46ch): the paragraph
  directly under a headline. Capped so it stays a statement, not a paragraph.
- **Body** (400, 1rem, line-height 1.55): default running text.
- **Label** (700, 0.82rem, tracking 0.18em, uppercase): eyebrows, buttons, nav.
- **Label Small** (600, 0.72rem, tracking 0.14em, uppercase): captions, metadata, field
  labels, bullet lists.


### Named Rules

**The Two Registers Rule.** Type is either very large or very small; the middle is
almost empty. A headline and its label can sit inches apart in scale and still feel
like one system. Resist introducing intermediate sizes to "bridge" them — the gap is
the design.

**The Tracked Capitals Rule.** All uppercase text is condensed and tracked to at least
0.10em, and 0.13–0.24em for anything under 0.8rem. Untracked small capitals are
illegible and instantly read as an error. Running body copy is never uppercase.

## Layout

A single centred container at 1280px maximum, with a fluid side gutter of
`clamp(18px, 4vw, 56px)` that never drops below 18px. Sections are separated by
vertical padding of `clamp(48px, 7vw, 96px)` rather than by rules — whitespace and
full-bleed color changes carry the divisions.

Content grids are asymmetric by default: two-column splits favour the text column
(`minmax(0,1fr)` against a fixed-maximum companion) rather than splitting evenly.
Card grids use `repeat(auto-fit, minmax(270px, 1fr))` with an 18px gap, so the column
count falls naturally rather than at named breakpoints. Internal component stacks use
a 12px gap.

Full-bleed sections — the chartreuse "shift" band, the forest statistics band — run
edge to edge and are the primary rhythmic device, breaking the dark ground at
intervals so the page does not read as one continuous slab.

Responsive behavior collapses at 900px: multi-column grids become single column, the
masthead navigation is replaced by the persistent primary button, and decorative
canvas layers drop to 42% opacity with their overlay labels hidden, because text
legibility outranks atmosphere at phone width.

## Elevation & Depth

**This system is flat at rest.** No surface carries an ambient shadow, and nothing is
elevated merely to look important. Separation is achieved by opaque tonal steps
(`ink` → `ink-raised` → `forest`) and by heavy borders.

Depth exists only as a *response*. On hover, a primary button translates up and left
by 2px and casts a hard-edged 4px offset shadow in Forest Lift — a graphic offset with
no blur, closer to a printed drop shadow than to simulated light. Cards lift 4px on
hover with no shadow at all.

### Shadow Vocabulary

- **Hard offset** (`box-shadow: 4px 4px 0 var(--forest-2)`): button hover only. Zero blur,
  zero spread. Never softened, never applied at rest.

### Named Rules

**The Flat-At-Rest Rule.** Shadows are a response to interaction, never a property of a
surface. If an element is not being touched, it is flat. Any blurred or ambient shadow
is outside this system.

## Shapes

**Zero radius, everywhere, without exception.** There is no `border-radius` anywhere in
the implementation and none should be introduced. Every corner in the system is square:
buttons, cards, inputs, badges, panels, the canvas frame.

Borders carry the structural weight that shadows carry in softer systems, at two
distinct tiers: **3px** for structural containers (cards, panels, primary buttons) and
**2px** for inline controls and internal dividers (inputs, drawer toggles, component
rules). The tier is meaningful — a 3px border says "this is an object", a 2px border
says "this is a control or a division inside one".

Rotation is used sparingly and only on provenance marks: the origin stamp sits at
-2.4deg, and the emphasised word in the headline is skewed -6deg. These are the only
two places anything is off-axis, which is what keeps them feeling applied rather than
styled.

### Named Rules

**The Square Corner Rule.** No radius. Not on buttons, not on tags, not on images, not
"just a little" on inputs. The square corner is load-bearing identity; one rounded
element makes the whole page look like a different template.

## Components

### Buttons

- **Shape:** hard square corners (0 radius), 3px border.
- **Primary:** Safety Chartreuse fill on Ink text, `13px 22px` padding, Label
  typography. The border matches the fill so primary and ghost share an identical box.
- **Hover:** translates `-2px, -2px` and casts a hard `4px 4px 0` Forest Lift offset —
  the button appears to lift off the page toward the reader. Transition 0.12s on
  transform, 0.18s on color.
- **Ghost:** transparent fill, chartreuse text and border. On hover it fills with
  chartreuse and inverts to ink — a ghost becomes a primary rather than merely
  brightening.
- **Compact:** in the masthead only, padding drops to `10px 16px`.

### Cards / Containers

- **Corner style:** square (0 radius).
- **Background:** Ink Raised at rest, Forest on hover.
- **Border:** 3px Paper at rest, Safety Chartreuse on hover.
- **Shadow:** none — see Elevation & Depth. Cards lift 4px instead.
- **Internal padding:** `22px 20px 24px`, with a 12px internal stack gap.
- **Behavior:** body text brightens from Body Muted to Body Muted Lift as the surface
  changes, so the whole card responds as one object rather than the frame alone.

### Inputs / Fields

- **Style:** Ink fill, 2px Field Line border, square corners, `10px 11px` padding, body
  typography at 0.94rem.
- **Label:** Safety Chartreuse, Barlow Condensed, uppercase, 0.15em tracking, sitting
  above the field.
- **Focus:** the border becomes Safety Chartreuse. No glow, no ring, no shadow.
- **Select:** native appearance is stripped and replaced with an inline chartreuse
  triangle, so selects match text inputs exactly.
- **Placeholder:** Placeholder (`--placeholder`) — dim enough to never be mistaken for an entered value.

### Navigation

- **Style:** Barlow Condensed, uppercase, 0.14em tracking, 0.82rem, Dim at rest and
  Safety Chartreuse on hover.
- **Position:** right-justified, sitting directly against the primary button at the
  right edge rather than floating mid-bar.
- **Masthead:** Ink ground with a 3px Safety Chartreuse bottom border — the single
  heaviest rule on the page, functioning as the hazard line under the header.
- **Mobile:** below 900px the links are hidden entirely and the primary button carries
  the whole navigation load.

### Disclosure Drawer (signature component)

An expandable definition attached to a service card, built on `<details>`/`<summary>`
so it retains native semantics and keyboard operation.

- **Toggle:** styled as a control, not a link — 2px chartreuse border at 38% opacity,
  `11px 13px` padding, Label typography. It reaches full chartreuse border when the
  parent card is hovered, and fills solid chartreuse with ink text on its own hover or
  keyboard focus.
- **Indicator:** a 2px plus-sign built from pseudo-elements; the vertical stroke
  scales to zero on open, 0.25s on `cubic-bezier(.2,.7,.3,1)`.
- **Motion:** height and opacity are animated by script (260ms open, 210ms close),
  because `<details>` cannot transition natively. The close animation completes
  *before* `open` is set false, so content never disappears instantly.
- **Affordance:** the entire parent card is the click target, not only the toggle.

### Named Rules

**The Honest Affordance Rule.** If a surface changes on hover, that whole surface must
be clickable. A tile that highlights but does nothing is a broken promise — either
make the whole thing the control or remove the hover state. Corollary: no interaction
may be hover-only; every hover behavior needs a tap or click equivalent, because a
large share of this audience is on a phone.

## Do's and Don'ts

### Do:

- **Do** keep Safety Chartreuse under roughly 10% of any viewport (The Ten Percent Rule).
- **Do** use the two border tiers meaningfully — 3px for objects, 2px for controls.
- **Do** set every piece of small type in Barlow Condensed, uppercase, tracked to at
  least 0.10em.
- **Do** let full-bleed color bands carry section rhythm instead of horizontal rules.
- **Do** brighten a component's text along with its surface on hover, so the object
  responds as a whole.
- **Do** fade atmospheric graphics out with a mask so they dissolve into the ground.
- **Do** give every hover behavior a click or tap equivalent.

### Don't:

- **Don't** introduce any `border-radius`, at any size, anywhere (The Square Corner Rule).
- **Don't** use blurred, ambient, or resting shadows. The only shadow is a hard 4px
  offset on button hover.
- **Don't** put Hazard Orange on a call to action — it is the warning signal, not the
  go signal (The Two Signals Rule).
- **Don't** use neutral grey or true black. Neutrals are green-biased so the fixed logo
  belongs.
- **Don't** frame a full-bleed atmospheric canvas in a hard-edged box — a visible
  rectangle around ambient artwork was explicitly rejected; mask and fade it instead.
- **Don't** build simulated product UI — mock dashboards, fake chat transcripts, fake
  result panels — to illustrate a claim. This was explicitly rejected as cluttered and
  artificial. Make the point with abstract form or with plain type.
- **Don't** bookend the page with full-width diagonal stripe bands; that treatment was
  tried and rejected.
- **Don't** add intermediate type sizes to soften the jump between display and label.
  The scale gap is intentional.
