import type { Metadata } from "next";
import Link from "next/link";
import LuxuryFooterSection from "@/components/luxury-footer-section";
import {
  BRONZE_SIGNATURE_BASE_STYLE,
  BRONZE_SIGNATURE_GHOST_STYLE,
  BRONZE_SIGNATURE_TONE_STYLE,
} from "@/lib/bronze-signature-style";

const PAGE_PATH = "/tours";

const romeTours = [
  {
    href: "/tours/ancient-rome",
    title: "Ancient Rome Private Tour",
    description: "Colosseum, Roman Forum, and Palatine Hill with licensed private storytelling.",
  },
  {
    href: "/tours/vatican",
    title: "Private Vatican Tour",
    description: "Vatican Museums, Sistine Chapel, and St. Peter's in comfortable private pacing.",
  },
  {
    href: "/tours/christian-rome",
    title: "Christian Rome Tour",
    description: "Churches, sacred landmarks, and early Christian heritage in private format.",
  },
  {
    href: "/tours/walking-tours",
    title: "Rome Private Walking Tour",
    description: "City-center routes designed around your rhythm and curiosity.",
  },
  {
    href: "/tours/family-friendly",
    title: "Family-Friendly Rome Tours",
    description: "Private routes adapted to families, mixed ages, and comfortable pacing.",
  },
  {
    href: "/tours/art-architecture",
    title: "Rome Art & Architecture Tour",
    description: "Masterpieces, urban history, and design storytelling with local expertise.",
  },
] as const;

const dayTrips = [
  {
    href: "/tours/day-trips-from-rome",
    title: "Day Trips from Rome",
    description: "Compare all private full-day escapes beyond Rome in one well-planned collection.",
  },
  {
    href: "/tours/day-trips-from-rome/tivoli",
    title: "Private Tivoli Day Trip",
    description: "Hadrian's Villa and Villa d'Este with chauffeured comfort from Rome.",
  },
  {
    href: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
    title: "Pompeii, Amalfi & Naples Day Trip",
    description: "A top south-Italy private route balancing archaeology and coastline.",
  },
] as const;

export const metadata: Metadata = {
  title: "Private Tours in Rome | Ancient Rome, Vatican, Walking & Family Tours",
  description:
    "Explore our private tours in Rome with licensed guides. Choose Ancient Rome, Vatican, Christian Rome, walking, family-friendly, and art-focused experiences.",
  keywords: [
    "private tours in Rome",
    "Ancient Rome private tour",
    "Vatican private tour",
    "Rome private walking tour",
    "family-friendly Rome tour",
    "Rome art and architecture tour",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Private Tours in Rome | Rome Guide Services",
    description:
      "Discover private Rome tours well-planned around your interests, pace, and travel style with licensed local guides.",
    url: PAGE_PATH,
    siteName: "Rome Guide Services",
    type: "website",
    locale: "en_US",
    images: [{ url: "/dark1.png", alt: "Private tours in Rome by Rome Guide Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Tours in Rome | Rome Guide Services",
    description:
      "Ancient Rome, Vatican, walking, and family tours in private format with licensed local guides.",
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

export default function ToursHubPage() {
  const siteUrl = resolveSiteUrl();
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Private Tours in Rome",
    itemListElement: romeTours.map((tour, index) => ({
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
              Private Tours in Rome
            </p>
            <h1 className="mt-3 max-w-[18ch] font-serif text-[clamp(2.15rem,4.4vw,4.2rem)] leading-[0.95] text-[#f8ead8]">
              Well-planned Rome Private Tours, Designed Around You
            </h1>
            <p className="mt-4 max-w-[68ch] font-sans text-[1rem] leading-[1.75] text-[#e8d0b2]">
              Choose from our most requested private tours in Rome, from Ancient Rome and the
              Vatican to walking routes, family-friendly itineraries, and art-focused experiences.
              Every route is adapted to your pace, interests, and priorities.
            </p>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-[1160px] overflow-hidden px-4 pb-12 pt-10 md:px-8 md:pb-16">
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
              Core Rome Collections
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {romeTours.map((tour) => (
                <article
                  key={tour.href}
                  className="rounded-[1.15rem] border border-[#cb9f67]/50 bg-[#f8eee2] p-4 shadow-[0_14px_24px_rgba(72,41,24,0.12)]"
                >
                  <h3 className="font-serif text-[1.62rem] leading-[1.02] text-[#3a2a22]">{tour.title}</h3>
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
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1160px] px-4 pb-14 md:px-8 md:pb-20">
          <h2 className="font-serif text-[clamp(1.7rem,2.7vw,2.6rem)] leading-[0.98] text-[#3d2b22]">
            Extend Your Journey Beyond Rome
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {dayTrips.map((trip) => (
              <article
                key={trip.href}
                className="rounded-[1.08rem] border border-[#c79a62]/44 bg-[#f6eadc] p-4 shadow-[0_12px_22px_rgba(67,38,22,0.1)]"
              >
                <h3 className="font-serif text-[1.38rem] leading-[1.04] text-[#3c2d24]">{trip.title}</h3>
                <p className="mt-2 font-sans text-[0.9rem] leading-[1.58] text-[#664f3f]">{trip.description}</p>
                <Link
                  href={trip.href}
                  className="mt-4 inline-flex min-h-[2.3rem] items-center rounded-full border border-[#ba8650]/50 px-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.09em] text-[#785133] transition-colors hover:bg-[#efddca]"
                >
                  Open Route
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <LuxuryFooterSection />
    </>
  );
}
