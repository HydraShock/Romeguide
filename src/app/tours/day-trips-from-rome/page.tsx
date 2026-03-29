import type { Metadata } from "next";
import Link from "next/link";
import LuxuryFooterSection from "@/components/luxury-footer-section";
import {
  BRONZE_SIGNATURE_BASE_STYLE,
  BRONZE_SIGNATURE_GHOST_STYLE,
  BRONZE_SIGNATURE_TONE_STYLE,
} from "@/lib/bronze-signature-style";

const PAGE_PATH = "/tours/day-trips-from-rome";

const dayTrips = [
  {
    href: "/tours/day-trips-from-rome/tivoli",
    title: "Private Tivoli Day Trip",
    description: "Hadrian's Villa and Villa d'Este with chauffeured comfort from Rome.",
  },
  {
    href: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
    title: "Pompeii, Amalfi & Naples Day Trip",
    description: "A signature south-Italy route balancing archaeology, coastlines, and timing.",
  },
  {
    href: "/tours/day-trips-from-rome/ostia-antica",
    title: "Private Ostia Antica Day Trip",
    description: "Ancient harbor archaeology with private transport and flexible pacing.",
  },
  {
    href: "/tours/day-trips-from-rome/orvieto-umbria",
    title: "Private Orvieto & Umbria Day Trip",
    description: "Hill-town atmosphere, cathedral heritage, and countryside elegance.",
  },
  {
    href: "/tours/day-trips-from-rome/roman-hill-towns",
    title: "Roman Hill Towns Day Trip",
    description: "Scenic villages, local flavor, and relaxed private routing from Rome.",
  },
  {
    href: "/tours/day-trips-from-rome/cerveteri-etruscans",
    title: "Cerveteri Etruscan Day Trip",
    description: "A private route into Etruscan heritage beyond standard Rome itineraries.",
  },
] as const;

const romeAddOns = [
  {
    href: "/tours/ancient-rome",
    title: "Ancient Rome Private Tour",
    description: "Pair your day trip with Rome's imperial landmarks and private storytelling.",
  },
  {
    href: "/tours/vatican",
    title: "Private Vatican Tour",
    description: "Combine your out-of-city day with a curated Vatican private experience.",
  },
  {
    href: "/#booking-calendar",
    title: "Plan a Tailor-Made Multi-Day Route",
    description: "Share your dates and we design Rome + day trips in one coherent itinerary.",
  },
] as const;

export const metadata: Metadata = {
  title: "Day Trips from Rome | Private Tivoli, Pompeii, Amalfi, Ostia & Umbria",
  description:
    "Explore private day trips from Rome with chauffeured transport and tailor-made pacing. Compare Tivoli, Pompeii, Amalfi Coast, Ostia Antica, Orvieto, Umbria, and more.",
  keywords: [
    "day trips from Rome",
    "private day trips from Rome",
    "Tivoli day trip from Rome",
    "Pompeii Amalfi day trip from Rome",
    "Ostia Antica private day trip",
    "Orvieto Umbria day trip",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Day Trips from Rome | Rome Guide Services",
    description:
      "Private full-day escapes from Rome with chauffeur-led comfort and curated pacing.",
    url: PAGE_PATH,
    siteName: "Rome Guide Services",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg",
        alt: "Private day trips from Rome by Rome Guide Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Trips from Rome | Rome Guide Services",
    description:
      "Compare private day trips from Rome to Tivoli, Pompeii, Amalfi Coast, Ostia, and Umbria.",
    images: ["/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg"],
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

export default function DayTripsFromRomeHubPage() {
  const siteUrl = resolveSiteUrl();
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Private Day Trips from Rome",
    itemListElement: dayTrips.map((trip, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: trip.title,
      url: `${siteUrl}${trip.href}`,
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
              Day Trips from Rome
            </p>
            <h1 className="mt-3 max-w-[20ch] font-serif text-[clamp(2.1rem,4.3vw,4rem)] leading-[0.95] text-[#f8ead8]">
              Private Day Trips from Rome, Curated Beyond the City
            </h1>
            <p className="mt-4 max-w-[70ch] font-sans text-[1rem] leading-[1.75] text-[#e8d0b2]">
              Discover full-day private escapes with hotel pickup in Rome, elegant pacing, and
              destination-first planning. From Tivoli and Ostia Antica to Pompeii, Amalfi, and
              Umbria, each route is designed around your style and comfort.
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
              Signature Day Trip Collections
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {dayTrips.map((trip) => (
                <article
                  key={trip.href}
                  className="rounded-[1.15rem] border border-[#cb9f67]/50 bg-[#f8eee2] p-4 shadow-[0_14px_24px_rgba(72,41,24,0.12)]"
                >
                  <h3 className="font-serif text-[1.58rem] leading-[1.02] text-[#3a2a22]">{trip.title}</h3>
                  <p className="mt-2 font-sans text-[0.94rem] leading-[1.6] text-[#614a3c]">
                    {trip.description}
                  </p>
                  <Link
                    href={trip.href}
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
            Pair with Private Tours in Rome
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {romeAddOns.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.08rem] border border-[#c79a62]/44 bg-[#f6eadc] p-4 shadow-[0_12px_22px_rgba(67,38,22,0.1)]"
              >
                <h3 className="font-serif text-[1.36rem] leading-[1.04] text-[#3c2d24]">{item.title}</h3>
                <p className="mt-2 font-sans text-[0.9rem] leading-[1.58] text-[#664f3f]">{item.description}</p>
                <Link
                  href={item.href}
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
