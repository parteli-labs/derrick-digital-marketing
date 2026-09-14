/**
 * All page copy and figures in one place.
 *
 * Anything the client has not supplied is wrapped in `awaiting(...)` from
 * `lib/evidence.ts` and is withheld from production automatically. Comments no
 * longer carry that job — the type does. To clear one, swap `awaiting(...)` for
 * `confirmed(...)` with the real value.
 */

import { awaiting, confirmed, type Evidence } from "./evidence";

/** Used when the deploy host names no origin of its own. */
const FALLBACK_ORIGIN = "https://derrickdigital.ca";

/**
 * Hosts supply this variable in shapes `new URL()` rejects, and the failure
 * surfaces as a bare `TypeError: Invalid URL` while Next collects page data —
 * a long way from the cause, and only on the deploy, because a local `.env`
 * has it right.
 *
 * Two of those shapes are worth absorbing rather than failing on:
 *
 * - **Empty.** `??` only catches null and undefined, so a variable that exists
 *   and holds "" passes straight through. A dashboard field someone cleared
 *   reads as unset and is treated as unset.
 * - **No scheme.** Vercel's own `VERCEL_URL` is `project.vercel.app`, so
 *   pointing this at it — or typing the bare domain — is the obvious mistake.
 *   `https://` is assumed.
 *
 * Anything still unparseable throws with the variable named, because this site
 * sells search visibility: publishing a canonical, a sitemap and an og:url that
 * silently point at the wrong origin is worse than a build that stops.
 */
function resolveSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return FALLBACK_ORIGIN;

  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(candidate);
    // A mistyped scheme still parses once `https://` is bolted on the front —
    // "ht!tp://host" yields the hostname "ht!tp" — so the host is checked
    // rather than trusted to the parser.
    if (!/^[a-z0-9.-]+$/i.test(url.hostname)) throw new Error("implausible host");
    // `origin` normalises away a trailing slash, which robots.ts would
    // otherwise double into `https://host//sitemap.xml`.
    return url.origin;
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL is not a usable origin: ${JSON.stringify(raw)}. ` +
        `Expected something like ${FALLBACK_ORIGIN} — scheme optional, path ignored.`,
    );
  }
}

export const site = {
  name: "Derrick Digital",
  tagline: "GEO, SEO and brand for Alberta energy companies.",
  email: awaiting(
    "hello@derrickdigital.ca",
    "Enquiry inbox",
    "The real address enquiries should reach. Until this lands the site lists no email and the form's mail-client fallback stays off.",
  ),
  phone: awaiting(
    { display: "(780) 555-0142", href: "+17805550142" },
    "Phone number",
    "A real number, or a decision that the site lists none. 555-01xx is the reserved fictional range and reads as fake.",
  ),
  region: "Alberta, Canada",
  /** Domain is not confirmed as registered. Override per environment. */
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
} as const;

/** Masthead links. Contact is deliberately absent: the CTA beside them is it. */
export const nav = [
  { href: "#shift", label: "The Shift" },
  { href: "#services", label: "What We Do" },
] as const;

/** A run of copy where some words carry emphasis. Keeps markup out of content. */
export type Segment = string | { em: string };

export const hero = {
  body: "No one scrolls through dozens of blue links anymore. They do a search and click the first link. They ask an agent and get a recommendation.",
  bodyStrong: "We put Alberta energy companies at the top of those results.",
} as const;

export const shift = {
  heading: ["The results", "got shorter."],
  paragraphs: [
    "A page-one ranking used to mean ten chances to get noticed. It now means being one of the sources a model reads before it writes a three-name answer nobody scrolls past.",
    "Most oilfield companies have never checked what that answer says about them. The ones who move first take the slot and hold it. Once you become the cited authority, you stay it.",
  ],
  then: { label: "2019", note: "Ten links. Ten chances." },
  now: { label: "Now", note: "Three names. One shot." },
} as const;

export type Service = {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  /** Client-estimated, accepted as accurate. */
  firstMovement: string;
  drawer: { question: string; answer: string };
};

export const services: Service[] = [
  {
    tag: "GEO",
    title: "Generative Engine Optimization",
    body:
      "We baseline what assistants currently say about you, rebuild the evidence trail underneath it, and keep checking regularly (because it drifts).",
    bullets: ["Prompt-set baseline", "Entity + schema build", "Citation program", "Monthly re-run"],
    firstMovement: "45–90 days",
    drawer: {
      question: "What is GEO?",
      answer:
        "When someone asks ChatGPT, Claude, Gemini or Google's AI “who does coil tubing in the Montney,” the reply names a handful of companies and stops. Generative Engine Optimization is the work of making yours one of those names, structuring the evidence those systems read so they can name you with confidence instead of guessing.",
    },
  },
  {
    tag: "SEO",
    title: "Search Engine Optimization",
    body:
      "Nobody is retiring search. Architecture, service-area and play pages, and the technical work that gets you found by people ready to buy.",
    bullets: ["Technical audit", "IA rebuild", "Play + location pages", "Search Console"],
    firstMovement: "60–120 days",
    drawer: {
      question: "What is SEO?",
      answer:
        "The older discipline: getting your site to rank in the list of blue links on Google and Bing. It still starts most qualified enquiries in this industry and still pays for itself. But it is just no longer the whole picture, because a growing share of buyers never reach the list.",
    },
  },
  {
    tag: "Marketing",
    title: "Brand & Technical Content",
    body:
      "Capability sheets and case work written by people who know a completion crew from a workover rig. Plus the identity that makes it look serious.",
    bullets: ["Capability statements", "Case studies", "Site copy", "Identity system"],
    firstMovement: "3–6 weeks",
    drawer: {
      question: "What counts as brand work?",
      answer:
        "Everything a buyer reads once they have found you: capability statements, case work, spec sheets, site copy, and the visual identity holding it together. It is what moves you from “I have heard of them” to “put them on the bid list.”",
    },
  },
];

export type Stat = { figure: Evidence<string>; label: string };

export const stats: Stat[] = [
  {
    figure: confirmed("312"),
    label: "Buyer prompts per audit",
  },
  {
    figure: confirmed("5"),
    label: "Engines monitored",
  },
  { figure: confirmed("21d"), label: "Baseline to first move" },
  {
    figure: confirmed("0"),
    label: "Annual contracts",
  },
];

/**
 * The band needs enough surviving figures to read as a statistics band rather
 * than a stray number. Below this it is omitted entirely.
 */
export const STATS_MINIMUM = 2;

const replyPromise = awaiting(
  "1 business day",
  "Reply-time promise",
  "The response time the client will actually commit to. Until then the site promises a person, not a deadline.",
);

export const contact = {
  heading: ["We'd love to hear from", "you."],
  body:
    "Whether you want the full audit, a second opinion on work someone else is doing, or you just aren't sure what you're looking at. Send it over!",
  replyPromise,
  /** Form header badge. Omitted when the promise is unverified. */
  replyBadge: (window: string) => `Reply in ${window}`,
  promises: [
    {
      n: "01",
      strong: "A reply from a human",
      sourced: (window: string) => `, in the next ${window}.`,
      plain: () => ", not an auto-reply.",
    },
    {
      n: "02",
      strong: "Not a mailing list.",
      sourced: () => " We don't add you to anything and we won't send you a newsletter. Just a quick follow up!",
      plain: () => " We don't add you to anything and we won't send you a newsletter. Just a quick follow up!",
    },
    {
      n: "03",
      strong: "A straight answer.",
      sourced: () =>
        " If the fix is three afternoons of work you don't need us for, we'll say so! If we're not the right fit, we'll help point you towards someone who is.",
      plain: () =>
        " If the fix is three afternoons of work you don't need us for, we'll say so! If we're not the right fit, we'll help point you towards someone who is.",
    },
  ],
  topics: [
    "A visibility audit",
    "Generative Engine Optimization",
    "Search Engine Optimization",
    "Brand & technical content",
    "A second opinion on current work",
    "Not sure yet",
  ],
  confirmation: {
    sourced: (window: string) =>
      `Thanks! We'll get back to you inside ${window}, from a real person.`,
    plain: () => "Thanks! A real person will get back to you, not a scheduling link.",
    mailto:
      "Your message is loaded in your email app, hit send and it reaches the same inbox. If nothing opened, this device has no mail app set up.",
  },
  /**
   * Each error names what failed and, where we can know it, why. The recovery
   * is stated once, by the controls underneath — repeating it here would say the
   * same thing twice in the same box.
   */
  errors: {
    invalid: "We need a name, a company and an email address we can reply to.",
    offline: "That didn't send. Your device appears to be offline.",
    server: "That didn't send. Something went wrong between here and us.",
    unreachable: "That didn't send. Try again in a moment.",
  },
} as const;

export const footerLinks = {
  services: [
    { href: "#services", label: "Generative Engine Optimization" },
    { href: "#services", label: "Search Engine Optimization" },
    { href: "#services", label: "Brand & technical content" },
    { href: "#contact", label: "Visibility audit" },
  ],
  segments: [
    "Oilfield service companies",
    "Producers & operators",
    "Energy technology",
    "Construction & facilities",
  ],
} as const;

/** Everything the client still owes, surfaced in development. */
export const evidenceLedger = [
  site.email,
  site.phone,
  contact.replyPromise,
  ...stats.map((s) => s.figure),
] as const;
