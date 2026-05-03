import type { Metadata } from "next";
import Link from "next/link";
import LuxuryFooterSection from "@/components/luxury-footer-section";
import {
  BRONZE_SIGNATURE_BASE_STYLE,
  BRONZE_SIGNATURE_GHOST_STYLE,
  BRONZE_SIGNATURE_TONE_STYLE,
} from "@/lib/bronze-signature-style";

const PAGE_PATH = "/tours-in-italy";

const italyTours = [
  {
    href: "/tours-in-italy/private-florence-tuscany-tour",
    title: "Private Florence & Tuscany Tour",
    description: "Renaissance art, Tuscan views, and a private route at your pace.",
  },
  {
    href: "/tours-in-italy/private-venice-tour",
    title: "Private Venice Tour",
    description: "Canals, hidden lanes, and local corners beyond the busiest routes.",
  },
  {
    href: "/tours-in-italy/private-milan-tour",
    title: "Private Milan Tour",
    description: "Architecture, design, and city highlights with local private guidance.",
  },
  {
    href: "/tours-in-italy/private-sicily-tours",
    title: "Private Sicily Tours",
    description: "Island history, archaeology, and flexible private routes.",
  },
  {
    href: "/tours-in-italy/private-naples-amalfi-coast-tour",
    title: "Private Naples & Amalfi Coast Tour",
    description: "Southern city character, coastal views, and flexible private planning.",
  },
  {
    href: "/tours-in-italy/private-orvieto-umbria-tour",
    title: "Private Orvieto & Umbria Tour",
    description: "Hill towns, cathedral heritage, and countryside rhythm at a relaxed pace.",
  },
] as const;

export const metadata: Metadata = {
  title: "Private Tours in Italy | Florence, Venice, Milan, Sicily & Amalfi",
  description:
    "Explore private tours in Italy with custom itineraries across Florence, Tuscany, Venice, Milan, Sicily, Naples, Amalfi Coast, and Umbria.",
  keywords: [
    "private tours in Italy",
    "private Florence tour",
    "private Venice tour",
    "private Milan tour",
    "private Sicily tour",
    "private Naples Amalfi tour",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Private Tours in Italy | Rome Guide Services",
    description:
      "Private tours in Italy with local guides, flexible pacing, and clear planning.",
    url: PAGE_PATH,
    siteName: "Rome Guide Services",
    type: "website",
    locale: "en_US",
    images: [{ url: "/dark1.png", alt: "Private tours in Italy by Rome Guide Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Tours in Italy | Rome Guide Services",
    description:
      "Private tours in Florence, Venice, Milan, Sicily, Naples, Amalfi Coast, and Umbria.",
    images: ["/dark1.png"],
  },
};

function resolveSiteUrl() {
  const fallbackUrl = "http://localhost:3000";
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl;

  try {
    return new URL(rawUrl).toString().replace(/\/+$/, "");
  } catch {
    return fallbackUrl;
  }
}

export default function ToursInItalyHubPage() {
  const siteUrl = resolveSiteUrl();
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Private Tours in Italy",
    itemListElement: italyTours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tour.title,
      url: `${siteUrl}${tour.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="bg-[#f7efe6] text-[#2f241d]">
        <section
          className="relative overflow-hidden px-4 pb-12 pt-28 text-[#f4e8d8] md:px-8 md:pb-16 md:pt-32"
          style={BRONZE_SIGNATURE_BASE_STYLE}
        >
          <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_TONE_STYLE} />
          <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_GHOST_STYLE} />
          <div className="relative z-[1] mx-auto w-full max-w-[1160px]">
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-[#ddb47e]">
              Tours in Italy
            </p>
            <h1 className="mt-3 max-w-[20ch] font-serif text-[clamp(2.1rem,4.3vw,4rem)] leading-[0.95] text-[#f8ead8]">
              Private Tours in Italy for Easy Multi-City Trips
            </h1>
            <p className="mt-4 max-w-[70ch] font-sans text-[1rem] leading-[1.75] text-[#e8d0b2]">
              Go beyond Rome with private tours across Italy.
              From Florence and Venice to Milan, Sicily, Umbria, Naples, and the Amalfi Coast,
              each route is shaped around your interests and your pace.
            </p>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-[1160px] overflow-hidden px-4 pb-14 pt-10 md:px-8 md:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "url('/sfondo3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,239,230,0.08) 0%, rgba(247,239,230,0.83) 22%, rgba(247,239,230,0.88) 78%, rgba(247,239,230,0.08) 100%)",
            }}
          />
          <div className="relative z-[1]">
            <h2 className="font-serif text-[clamp(1.8rem,2.8vw,2.8rem)] leading-[0.98] text-[#3d2b22]">
              Top Italy Collections
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {italyTours.map((tour) => (
                <article
                  key={tour.href}
                  className="rounded-[1.15rem] border border-[#cb9f67]/50 bg-[#f8eee2] p-4 shadow-[0_14px_24px_rgba(72,41,24,0.12)]"
                >
                  <h3 className="font-serif text-[1.58rem] leading-[1.02] text-[#3a2a22]">{tour.title}</h3>
                  <p className="mt-2 font-sans text-[0.94rem] leading-[1.6] text-[#614a3c]">
                    {tour.description}
                  </p>
                  <Link
                    href={tour.href}
                    className="mt-4 inline-flex min-h-[2.4rem] items-center rounded-full border border-[#bf8f58]/55 px-4 font-sans text-[0.74rem] font-semibold uppercase tracking-[0.09em] text-[#7a5232] transition-colors hover:bg-[#f1dfcb]"
                  >
                    Explore Tour
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[1.2rem] border border-[#c79a62]/46 bg-[#f5eadf] p-5 md:p-6">
              <h2 className="font-serif text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1] text-[#3f2f25]">
                Need a Custom Italy Itinerary?
              </h2>
              <p className="mt-3 max-w-[68ch] font-sans text-[0.98rem] leading-[1.72] text-[#5c4739]">
                Share your dates, pace, and main destinations. We will put together a private
                multi-city route that feels clear, smooth, and personal.
              </p>
              <Link
                href="/#booking-calendar"
                className="mt-5 inline-flex min-h-[2.75rem] items-center rounded-full border border-[#bc8850]/64 bg-[#f0dec8] px-5 font-sans text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-[#774b2d] transition-colors hover:bg-[#ebd5bb]"
              >
                Plan My Italy Journey
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LuxuryFooterSection />
    </>
  );
}
