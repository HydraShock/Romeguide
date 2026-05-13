import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import CookieConsentBanner from "@/components/cookie-consent-banner";
import LuxuryCenterLogoNavbar from "@/components/luxury-center-logo-navbar";
import LuxuryRomanCursor from "@/components/luxury-roman-cursor";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DEFAULT_SITE_URL = "http://localhost:3000";
const SITE_NAME = "Rome Guide Services";
const SITE_DESCRIPTION =
  "Private tours in Rome and across Italy with licensed guides, custom itineraries, and friendly human planning support.";
const CONTACT_EMAIL = "romeguideservices@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/RomeGuideServices/";
const INSTAGRAM_URL = "https://www.instagram.com/romeguideservices/";
const SITE_KEYWORDS = [
  "private tours Rome",
  "Rome private tour guide",
  "licensed Rome tour guides",
  "Vatican private tour",
  "Ancient Rome private tour",
  "day trips from Rome",
  "private tours in Italy",
  "custom Italy itinerary",
  "private tours Rome",
  "family-run Rome tours",
];

function resolveMetadataBase() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

  try {
    return new URL(rawUrl);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}

const metadataBase = resolveMetadataBase();
const siteUrl = metadataBase.toString().replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Private Tours in Rome & Italy | Licensed Guides | Rome Guide Services",
    template: "%s | Rome Guide Services",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  category: "travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Private Tours in Rome & Italy | Licensed Guides | Rome Guide Services",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/dark1.png",
        alt: "Private tours in Rome with licensed local guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Tours in Rome & Italy | Rome Guide Services",
    description: SITE_DESCRIPTION,
    images: ["/dark1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
    areaServed: ["Rome", "Italy"],
    knowsAbout: [
      "Private tours in Rome",
      "Vatican private tours",
      "Ancient Rome private tours",
      "Day trips from Rome",
      "Private tours in Italy",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", url: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Private Tours in Rome", url: `${siteUrl}/tours` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Day Trips from Rome",
        url: `${siteUrl}/tours/day-trips-from-rome`,
      },
      { "@type": "ListItem", position: 4, name: "Tours in Italy", url: `${siteUrl}/tours-in-italy` },
      { "@type": "ListItem", position: 5, name: "Who We Are", url: `${siteUrl}/who-we-are` },
      { "@type": "ListItem", position: 6, name: "Booking & Contact", url: `${siteUrl}/booking-contact` },
      { "@type": "ListItem", position: 7, name: "Privacy Policy", url: `${siteUrl}/privacy-policy` },
      {
        "@type": "ListItem",
        position: 8,
        name: "Terms & Conditions",
        url: `${siteUrl}/terms-and-conditions`,
      },
      { "@type": "ListItem", position: 9, name: "Cookie Policy", url: `${siteUrl}/cookie-policy` },
    ],
  };

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LuxuryCenterLogoNavbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        <div id="main-content">{children}</div>
        <CookieConsentBanner />
        <LuxuryRomanCursor />
      </body>
    </html>
  );
}
