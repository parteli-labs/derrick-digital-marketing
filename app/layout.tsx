import type { Metadata } from "next";
import { Big_Shoulders, Barlow, Barlow_Condensed } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Google consolidated "Big Shoulders Display" into the variable "Big Shoulders" family.
const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const description =
  "GEO, SEO and brand for Alberta energy companies. When a buyer asks an AI assistant who to call, we make sure your name is in the answer.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Derrick Digital — GEO & SEO for Alberta energy companies",
    template: "%s — Derrick Digital",
  },
  description,
  applicationName: site.name,
  keywords: [
    "generative engine optimization",
    "GEO",
    "SEO",
    "oilfield marketing",
    "Alberta",
    "oil and gas marketing",
    "energy marketing",
    "Grande Prairie",
    "Montney",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Derrick Digital — GEO & SEO for Alberta energy companies",
    description,
    url: site.url,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derrick Digital — GEO & SEO for Alberta energy companies",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

/**
 * Structured data. This is the same entity/schema work the site sells, so the
 * site had better carry it: it is what a generative engine reads to decide
 * whether it can name this company with confidence.
 */
function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}#organization`,
    name: site.name,
    description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Alberta" },
      { "@type": "AdministrativeArea", name: "British Columbia" },
      { "@type": "AdministrativeArea", name: "Saskatchewan" },
    ],
    knowsAbout: [
      "Generative Engine Optimization",
      "Search Engine Optimization",
      "Oilfield services marketing",
      "Technical content",
    ],
    serviceType: [
      "Generative Engine Optimization",
      "Search Engine Optimization",
      "Brand and technical content",
    ],
    address: { "@type": "PostalAddress", addressRegion: "AB", addressCountry: "CA" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-CA"
      className={`${bigShoulders.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
