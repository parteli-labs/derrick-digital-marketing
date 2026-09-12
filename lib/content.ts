/**
 * All page copy and figures in one place.
 *
 * PLACEHOLDER audit (see PRODUCT.md → "Evidence on Hand"):
 * anything marked `PLACEHOLDER` was authored to make the design concrete and is
 * NOT client-supplied. Replace before launch or remove the claim.
 * Figures marked `ESTIMATE` were confirmed as probably accurate but unverified.
 */

export const site = {
  name: "Derrick Digital",
  tagline: "GEO, SEO and brand for Alberta energy companies.",
  /** PLACEHOLDER — invented. Replace with the real inbox. */
  email: "hello@derrickdigital.ca",
  /** PLACEHOLDER — invented. Replace or remove. */
  phone: "(780) 555-0142",
  phoneHref: "+17805550142",
  region: "Alberta, Canada",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://derrickdigital.ca",
} as const;

export const nav = [
  { href: "#shift", label: "The Shift" },
  { href: "#services", label: "What We Do" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "GEO · SEO · Brand for the Oil Patch",
  stamp: "Alberta · WCSB",
  body:
    "Superintendents stopped scrolling ten blue links. They ask, they get a short list, and they call it.",
  bodyStrong: "We put Alberta energy companies on that list.",
  /** PLACEHOLDER — the ~400 figure is not sourced. */
  caption: { before: "Roughly", count: "400", middle: "service companies working the same basins. The answer names", emphasis: "three" },
} as const;

export const shift = {
  eyebrow: "The Shift",
  heading: ["The results", "got shorter."],
  paragraphs: [
    "A page-one ranking used to mean ten chances to get noticed. It now means being one of the sources a model reads before it writes a three-name answer nobody scrolls past.",
    "Most oilfield companies have never checked what that answer says about them. The ones who move first take the slot and hold it — these systems are conservative. Once you are the cited authority, you stay it.",
  ],
  then: { label: "2019", note: "Ten links. Ten chances." },
  now: { label: "Now", note: "Three names. One shot." },
} as const;

export type Service = {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  /** ESTIMATE — client-confirmed as probably accurate, not independently verified. */
  firstMovement: string;
  drawer: { question: string; answer: string };
};

export const services: Service[] = [
  {
    tag: "GEO",
    title: "Generative Engine Optimization",
    body:
      "We baseline what assistants currently say about you, rebuild the evidence trail underneath it, and keep checking — because it drifts.",
    bullets: ["Prompt-set baseline", "Entity + schema build", "Citation program", "Monthly re-run"],
    firstMovement: "45–90 days",
    drawer: {
      question: "What is GEO?",
      answer:
        "When someone asks ChatGPT, Claude, Gemini or Google's AI “who does coil tubing in the Montney,” the reply names a handful of companies and stops. Generative Engine Optimization is the work of making yours one of those names — structuring the evidence those systems read so they can name you with confidence instead of guessing.",
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
        "The older discipline: getting your site to rank in the list of blue links on Google and Bing. It still starts most qualified enquiries in this industry and still pays for itself — it is just no longer the whole picture, because a growing share of buyers never reach the list.",
    },
  },
  {
    tag: "BRD",
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

/** PLACEHOLDER — 312 and 5 are not client-supplied. 21d is an ESTIMATE. */
export const stats = [
  { figure: "312", label: "Buyer prompts per audit", verified: false },
  { figure: "5", label: "Engines monitored", verified: false },
  { figure: "21d", label: "Baseline to first move", verified: true },
  { figure: "0", label: "Annual contracts", verified: false },
] as const;

export const contact = {
  eyebrow: "Contact",
  heading: ["Tell us what", "you're trying to fix."],
  body:
    "Whether you want the full audit, a second opinion on work someone else is doing, or you just aren't sure what you're looking at — send it over.",
  promises: [
    { n: "01", strong: "A reply from a person", rest: ", inside one business day. Not a scheduling link." },
    { n: "02", strong: "No list, no drip sequence.", rest: " We don't add you to anything and we don't follow up twice." },
    { n: "03", strong: "A straight answer.", rest: " If the fix is three afternoons of work you don't need us for, we'll say so — and if we're not the right shop, we'll point you at who is." },
  ],
  topics: [
    "A visibility audit",
    "Generative Engine Optimization",
    "Search Engine Optimization",
    "Brand & technical content",
    "A second opinion on current work",
    "Not sure yet",
  ],
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
