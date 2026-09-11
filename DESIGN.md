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
  orange-2: "#8A3111"
  paper: "#F2F0E6"
  muted: "#B9BCA6"
  muted-2: "#D6D9C4"
  sage: "#9FC0AC"
  dim: "#8D9179"
  on-lime: "#1A2010"
  on-lime-2: "#2C3520"
  placeholder: "#787D6B"
typography:
  display:
    fontFamily: "Big Shoulders, Big Shoulders Fallback, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(2.2rem, 6.6vw, 5.8rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "0.004em"
  headline:
    fontFamily: "Big Shoulders, Big Shoulders Fallback, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(1.9rem, 5.6vw, 4.2rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "0.004em"
  figure:
    fontFamily: "Big Shoulders, Big Shoulders Fallback, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.1rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "0.004em"
  title:
    fontFamily: "Big Shoulders, Big Shoulders Fallback, Arial Narrow, Impact, sans-serif"
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
  body-md:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.5
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
  wordmark:
    fontFamily: "Big Shoulders, Big Shoulders Fallback, Arial Narrow, Impact, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "normal"
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
    typography: "{typography.body}"
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

- Hazard orange calling the action, hi-vis chartreuse marking and labelling around it
- Zero corner radius anywhere in the system
- Heavy condensed display capitals against small tracked condensed labels
- Flat surfaces at rest; depth appears only as a response to interaction
- Structural borders at 3px, control borders at 2px — borders do the work shadows usually do

## Colors

A near-black green ground carrying two high-visibility signal colors, with the rest of
the palette a narrow range of desaturated sage and bone.

### Primary

- **Hazard Orange** (`--orange`, `#FF5A1F`): the act. Every call to action, and the
  figure a card is really selling — the time to first result. It also still marks the
  problem where the page shows one: the single remaining slot in the "Now" bar, the
  border on a failed send. Orange asks for a decision, whether that decision is to
  press or to look. Text on an orange fill is always Ink: paper on orange measures
  2.7:1 and never passed.
- **Orange Offset** (`--orange-2`, `#8A3111`): the hard shadow an orange button casts
  on hover, as Forest Lift is to a chartreuse one.

### Secondary

- **Safety Chartreuse** (`--lime`, `#C6F24E`): the mark. All labels and eyebrows, focus
  rings, selection, service tags, bullet marks, the single number that matters in a
  group, and the hover state of every card and link. This is the color of a hi-vis vest
  and PPE tape, which is precisely where this audience meets it — worn to be seen, not
  pressed. The one control it still fills is the ghost button on hover, and the drawer
  toggle, which are accents that became interactive rather than calls to action.

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
- **Placeholder** (`--placeholder`, `#787D6B`): input placeholder text — dim enough
  that it can never be mistaken for an entered value, and no dimmer. These placeholders
  carry real guidance ("e.g. Montney, Grande Prairie") for an audience reading in glare
  on a phone, so the tone is held at 4.6:1 rather than the 4.0:1 it started at.

### Named Rules

**The One Namespace Rule.** A colour and a type step may never share a name. Tailwind's
`text-*` utility serves both `--color-*` and `--text-*`, so a colour token named `lead`
silently shadowed the `lead` type step: `text-lead` resolved to a colour and the Lead
size never rendered anywhere it was used. The colour was removed because nothing
referenced it. Audit test: for every `--text-<name>`, confirm no `--color-<name>` exists.

**The Ten Percent Rule.** No viewport is more than roughly ten percent Safety
Chartreuse. Its authority comes entirely from its rarity; a page that is 30% chartreuse
has no accent at all, only noise. Audit test: squint at any screen — if more than one
element shouts, cut until one does.

**The Two Signals Rule.** Orange means *act — press this, or look at this*. Chartreuse
means *this is live, this is the label, this is where you are*. The two never swap jobs:
a chartreuse fill never asks to be clicked as a primary action, and orange never labels
something inert. One page carries one primary colour — a chartreuse submit button beside
an orange masthead CTA is two primaries and reads as two systems.

**The Green Ground Rule.** Neutrals are biased green, never neutral grey and never
true black. The logo is fixed and inherited; the palette bends toward it so the mark
never looks pasted on.

## Typography

**Display Font:** Big Shoulders (fallback: Big Shoulders Fallback → Arial Narrow, Impact, sans-serif)
**Body Font:** Barlow (fallback: Helvetica Neue, Arial, sans-serif)
**Label Font:** Barlow Condensed (fallback: Arial Narrow, sans-serif)

**Character:** Big Shoulders (formerly published as "Big Shoulders Display") is a condensed industrial face drawn from Chicago public
signage — tall, tight and relentless in heavy weights, which is why it can run at
enormous sizes without feeling decorative. Barlow is its natural companion: a
grotesque with slightly rounded, low-contrast letterforms that stays readable at small
sizes and in long paragraphs. Barlow Condensed carries all the small structural type,
so labels visibly belong to the same family as the body while reading as a different
register.

**The fallback is metric-matched, not nominal.** next/font ships no metric overrides for
Big Shoulders, so the display face swapped in with no size adjustment and reflowed the
largest text on the page. `Big Shoulders Fallback` is a local `@font-face` over Arial
Narrow carrying measured overrides — advance widths match at `size-adjust: 95.62%`, and
the face reports ascent 98.55% / descent 21.45% / no line gap on a 2000 upem, divided by
that adjustment to give `ascent-override: 103.07%` and `descent-override: 22.43%`.

### Hierarchy

Ten steps. Every font-size rendered on the site resolves to one of them; there are no
remaining ad-hoc literals in component markup.

- **Display** (900, `clamp(2.2rem, 6.6vw, 5.8rem)`, line-height 0.86): the single page
  headline. One per page, and always exactly two lines — each line is its own
  `whitespace-nowrap` block rather than a `<br/>` inside a measure, so no viewport can
  break it into three. The step is sized so the longer line still clears the illustration
  in the right-hand column: at 1450px it measures 698px against 1063px before the artwork
  begins. Constraining the headline with a `max-width` instead is what produced a third
  line, and is the thing to avoid here.
- **Headline** (900, `clamp(1.9rem, 5.6vw, 4.2rem)`, line-height 0.86): section openers.
- **Figure** (900, `clamp(2.1rem, 4vw, 3.1rem)`, line-height 0.82): big numbers and the
  service tags — display weight used as a graphic mark rather than as text.
- **Title** (900, `clamp(1.35rem, 2.2vw, 1.7rem)`, line-height 0.92): card and component
  titles, and the "see results in" figure at the foot of a service card.
- **Lead** (400, `clamp(1.05rem, 1.5vw, 1.3rem)`, line-height 1.5, max 46ch): the paragraph
  directly under a headline, and the numerals on the contact promises. Capped so it stays
  a statement, not a paragraph.
- **Body** (400, 1rem, line-height 1.55): default running text, the paragraphs on the
  chartreuse band, and every form control. Controls sit at a full 1rem deliberately —
  iOS Safari force-zooms a focused input set below 16px, which throws the whole form
  layout sideways on the phones this audience actually uses.
- **Body Medium** (400, 0.92rem, line-height 1.5): the denser supporting tier — card body
  copy, the contact promises, and confirmation text.
- **Body Small** (400, 0.88rem, line-height 1.5): footer links and the brand line beneath
  the wordmark.
- **Label** (700, 0.82rem, tracking 0.18em, uppercase): buttons, nav, form field labels,
  footer column headings, and the "see results in" label. No section carries an eyebrow —
  a heading that needs a label above it to be understood is the wrong heading.
- **Label Small** (600, 0.72rem, tracking 0.14em, uppercase): captions, metadata, bullet
  lists, and the panel header strip on the contact form.

Outside the ramp sits one fixed value: the **wordmark** (900, 1.2rem, line-height 0.82),
which is a property of the brand lockup rather than a reading size. It lives in a single
`Wordmark` component so it never rescales with the document and never reappears as a
literal in page markup.

### Named Rules

**The One Ramp Rule.** A font-size literal in component markup is a defect, not a
shortcut. When a size is genuinely needed twice it becomes a named step in `@theme`;
when it is needed once it snaps to the nearest existing step. Audit test:
`grep -rE 'text-\[[0-9.]+rem\]' components/` returns nothing but the wordmark lockup.

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
intervals so the page does not read as one continuous slab. Every section declares its
ground with `data-ground` (`ink`, `lime`, `forest`), which is what lets the separator
rule below know whether a boundary needs space or already has a colour change to carry it.

The section separator is **one** interval of `clamp(48px, 7vw, 96px)`, not two. Applying
that padding symmetrically to every section doubles it wherever two of them meet, which
rendered as 192px of undifferentiated ground between Services and Contact — a hole rather
than rhythm. A rule collapses the leading interval where neighbours share a ground; a
full-bleed band is exempt, because its padding is internal and the colour change divides
on its own. The rule is deliberately unlayered in CSS, since Tailwind utilities outrank
every `@layer`.

Responsive behavior collapses at two breakpoints, Tailwind's defaults rather than a
custom step: at **1024px** (`lg`) the two-column splits in the shift and contact sections
become single column, and at **768px** (`md`) the masthead navigation is replaced by the
persistent primary button and the decorative canvas drops to 42% opacity with its overlay
labels hidden, because text legibility outranks atmosphere at phone width. Card grids use
`auto-fit` and need no breakpoint at all — the column count falls out of the available
width.

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

Nothing is off-axis. Emphasis in a headline is carried by the outline instead: the
emphasised run is set in transparent type with a Paper stroke (`.u-outline`), on the
page headline and again on the contact heading. The stroke is sized in em — `max(1px,
0.022em)` — because a fixed 2px is delicate at the 92px desktop Display step and closes
up the counters at the 35px phone step.

### Named Rules

**The Square Corner Rule.** No radius. Not on buttons, not on tags, not on images, not
"just a little" on inputs. The square corner is load-bearing identity; one rounded
element makes the whole page look like a different template.

## Components

### Buttons

- **Shape:** hard square corners (0 radius), 3px border.
- **Primary:** Hazard Orange fill on Ink text, `13px 22px` padding, Label typography.
  The border matches the fill so primary and ghost share an identical box.
- **Hover:** translates `-2px, -2px` and casts a hard `4px 4px 0` offset — Orange Offset
  under a primary, Forest Lift under a ghost — so the button appears to lift off the
  page toward the reader. Transition 0.12s on transform, 0.18s on color.
- **Ghost:** transparent fill, chartreuse text and border. On hover it fills with
  chartreuse and inverts to ink.
- **One property, one owner:** every colour that differs by variant — border, fill,
  text, hover offset — is declared in the variant, never in the shared base. Two
  utilities for the same property in one class string resolve by stylesheet order, not
  by the order they were written, so a variant cannot reliably override a shared base.
- **Compact:** in the masthead only, padding drops to `11px 16px` — not lower. Below
  `md` this button is the entire navigation, and 10px put it at a 42px target for an
  audience reading one-handed in a vehicle.

### Cards / Containers

- **Corner style:** square (0 radius).
- **Background:** Ink Raised at rest, Forest on hover.
- **Border:** 3px Paper at rest, Safety Chartreuse on hover.
- **Shadow:** none — see Elevation & Depth. Cards lift 4px instead.
- **Internal padding:** `22px 20px 24px`, with a 12px internal stack gap.
- **Behavior:** body text brightens from Body Muted to Body Muted Lift as the surface
  changes, so the whole card responds as one object rather than the frame alone.

### Inputs / Fields

- **Style:** Ink fill, 2px Field Line border, square corners, `10px 11px` padding, Body
  typography at a full 1rem — see the Body step for why controls never go below 16px.
- **Optional fields:** half the contact fields are not required, and the only way to find
  out used to be rejection on submit. Optional labels carry a quiet `· Optional` in Dim;
  the separator is `aria-hidden` so the accessible name reads "Operating area Optional".
- **Label:** Safety Chartreuse, Barlow Condensed, uppercase, Label step at 0.15em
  tracking, sitting above the field. It sat a step lower on the ramp and read as
  metadata rather than as the name of the thing being asked for.
- **Focus:** the border becomes Safety Chartreuse. No glow, no ring, no shadow.
- **Error:** the form is never unmounted to show a failure — the inputs are uncontrolled,
  so replacing them discards everything typed. A failed send renders a `role="alert"`
  block inside the form, bordered in Hazard Orange on Ink, and takes focus so it is both
  announced and one tab from the recovery. The submit label becomes "Send again →".
- **Select:** native appearance is stripped and replaced with an inline chartreuse
  triangle, so selects match text inputs exactly.
- **Placeholder:** Placeholder (`--placeholder`) at 4.6:1 — dim enough to never be mistaken for an entered value, light enough to read outdoors.

### Navigation

- **Style:** Barlow Condensed, uppercase, 0.14em tracking, 0.82rem, Dim at rest and
  Safety Chartreuse on hover.
- **Position:** right-justified, sitting directly against the primary button at the
  right edge rather than floating mid-bar.
- **Masthead:** Ink ground with a 3px Safety Chartreuse bottom border — the single
  heaviest rule on the page, functioning as the hazard line under the header.
- **Mobile:** below 768px (`md`) the links are hidden entirely and the primary button
  carries the whole navigation load. Contact is not among the links at any width — the
  CTA sitting against them is that destination.

### Disclosure Drawer (signature component)

An expandable definition attached to a service card.

- **Structure:** a `<button>` carrying `aria-expanded` and `aria-controls`, and a
  labelled `role="region"` panel. It was built on `<details>`/`<summary>` until the
  cards became subgrids: a shared row band means an open drawer stretches its closed
  neighbours to match, and only the open card may span the answer band — which needs
  the open state in React, where `<details>` does not keep it. Button plus
  `aria-expanded` is the same disclosure contract, with native keyboard operation and
  announced state.
- **Concealment:** a collapsed panel is clipped to zero height, which hides it from the
  eye but not from a screen reader — all three answers were being announced while every
  toggle reported `aria-expanded="false"`. `<details>` concealed its own contents; the
  replacement carries `inert` whenever it is closed, which conceals it from assistive
  technology and from the tab order in one attribute.
- **Toggle:** styled as a control, not a link — 2px chartreuse border at 38% opacity,
  `11px 13px` padding, Label typography. It reaches full chartreuse when the parent card
  is hovered, and fills solid chartreuse with ink text on its own hover or keyboard focus.
- **Indicator:** a 2px plus-sign built from pseudo-elements; the vertical stroke scales to
  zero on open, 0.25s on `cubic-bezier(.2,.7,.3,1)`.
- **Motion:** height and opacity are animated by script (260ms open, 210ms close),
  measured against the rendered panel after the state lands. The effect compares the
  previous open state rather than tracking whether it has mounted, so it fires on a real
  toggle and not on StrictMode's second effect pass.
- **Row band:** only the open card spans the answer band, and it keeps that band for the
  length of the close animation. Dropping it first leaves the still-shrinking answer
  overflowing the six shared bands, which grows them — and every other card with them —
  for a frame.
- **Affordance:** the entire parent card is the click target, not only the toggle.

### Shortlist Field (signature component)

An abstract list, and one row climbing it. No numbers, no labels, no text.

**The pass, in four beats.** Each is eased, and they overlap on purpose:

1. **Out** — the mark slides left, clear of the column.
2. **Rise** — it climbs while the rows above it step down one position each, *as a group*.
   Both motions share one easing window, so the exchange reads as a single event rather
   than two animations running side by side. The group's step opens a gap exactly where
   the mark is heading.
3. **Back** — the mark slides right, into that gap.
4. **Settle** — the list eases down around its new order, returning the mark to the
   centre so the next pass starts from the same place.

Then it holds still for 1.7s. The pause is load-bearing: back to back, the passes read as
a mechanism idling; separated, each one reads as an event.

**The gain varies per pass.** Most are one or two places; occasionally one comes from a
long way back (up to eleven). A fixed step reads as a mechanism, a varying one reads as
something competing. The action stretches with the distance — `1700ms + 220ms` per place
— so the pace stays even whether the jump is short or long.

**Long jumps move the list, not the mark.** The mark's own travel is capped at three
positions on screen; past that the gain is carried by the list scrolling underneath it
during the same window. An eleven-place leap would otherwise throw the mark clean off the
top of the box. The relative gain is identical either way — only who does the moving
changes.

**Why the settle exists.** A mark that visibly climbs cannot also end where it began
unless something carries it back. The settle is that motion, and it is rigid — every row
and the mark move together — so it reads as the view following the climb rather than as
the mark losing ground. Without it the only options are a mark that never appears to move
or a seam in the loop.

**What went wrong before.** The first version paired a linear conveyor with a sinusoidal
bob on the mark. Both were continuous, neither referenced the other, and the result read
as two unrelated motions in the same box. Coupling the group's step to the mark's rise is
the whole fix; easing is what makes it legible.

- **Seamless:** the frame at the end of a cycle and the frame at the start of the next are
  identical by construction — the commit applies exactly the offsets the final frame
  rendered. Rows recycle bottom-to-top well outside the fade.
- **Fade:** rows dissolve toward both ends, computed per row from its distance to centre —
  solid within 5% of the box height, gone by 36%.
- **Knockout:** the rows are cut away around the mark so the row it passes stays a separate
  object instead of merging into it.
- **Not interactive.** No hover, no tap, no pointer events.
- **Placement:** full height of the hero and aligned right from `md` up; its own
  full-strength band below the copy on a phone, where the hero is one column and body text
  over the glowing mark measured 5.02:1.
- **Cost:** `shadowBlur` pre-rendered once into a sprite, never recomputed per frame. The
  loop stops when the hero scrolls out of view or the tab is hidden, and
  `prefers-reduced-motion` gets a composed still instead of the movement.
- **Deterministic:** row widths and opacities derive from the row, not from `Math.random()`.

### Named Rules

**The Own Ground Rule.** Text never sits on generated artwork and hopes. Either it carries
its own opaque ground, or the layout moves it off the artwork entirely. Contrast that
depends on where a mark happened to land is not contrast.

**The Honest Affordance Rule.** If a surface changes on hover, that whole surface must
be clickable. A tile that highlights but does nothing is a broken promise — either
make the whole thing the control or remove the hover state. Corollary: no interaction
may be hover-only; every hover behavior needs a tap or click equivalent, because a
large share of this audience is on a phone.

## Do's and Don'ts

### Do:

- **Do** keep each signal colour under roughly 10% of any viewport (The Ten Percent Rule).
- **Do** resolve every font-size to a named step; promote a size to `@theme` when it is
  needed twice, snap it to the nearest step when it is needed once (The One Ramp Rule).
- **Do** set form controls at a full 1rem so iOS does not force-zoom a focused field.
- **Do** give any label sitting over the atmospheric field its own opaque ground.
- **Do** declare each section's `data-ground` so the separator rule can tell a colour
  change from a spacing boundary.
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
- **Don't** name a colour token and a type step the same word — Tailwind's `text-*`
  utility serves both namespaces and the colour silently wins (The One Namespace Rule).
- **Don't** unmount a form to show an error. The inputs are uncontrolled; replacing them
  throws away everything the visitor typed.
- **Don't** double the section separator by padding both neighbours on a shared ground.
- **Don't** recompute `shadowBlur`, or any blur, inside an animation frame.
- **Don't** use blurred, ambient, or resting shadows. The only shadow is a hard 4px
  offset on button hover.
- **Don't** fill a control with Safety Chartreuse as a primary action, or leave one
  primary colour in one place and another elsewhere on the same page (The Two Signals
  Rule).
- **Don't** declare a variant-specific colour on a component's shared base class, where
  a variant has to out-order it to win.
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
