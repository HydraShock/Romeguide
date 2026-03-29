import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WobbleCardDemo from "../components/wobble-card-demo";
import LuxuryEditorialToursSection from "../components/luxury-editorial-tours-section";
import DayTripsSection from "../components/day-trips-section";
import TravelerTestimonialsLegacySection from "../components/traveler-testimonials-legacy-section";
import TailorMadeExperiencesSection from "../components/tailor-made-experiences-section";
import LuxuryFaqSection from "../components/luxury-faq-section";
import LuxuryFooterSection from "../components/luxury-footer-section";
import LuxuryFinalCtaSection from "../components/luxury-final-cta-section";
import BookingTriageCalendarConcept from "../components/booking-triage-calendar-concept";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";
const PAGE_PATH = "/";

export const metadata: Metadata = {
  title: "Private Tours in Rome | Licensed Guides & Tailor-Made Itineraries",
  description:
    "Plan private tours in Rome with licensed local guides. Discover Ancient Rome, the Vatican, Christian Rome, and curated day trips from Rome with premium tailor-made service.",
  keywords: [
    "private tours Rome",
    "licensed Rome tour guide",
    "Vatican private tour Rome",
    "Ancient Rome private tour",
    "Christian Rome private tour",
    "day trips from Rome private",
    "tailor-made Rome itinerary",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Private Tours in Rome | Licensed Guides & Tailor-Made Itineraries",
    description:
      "Luxury private tours in Rome and Italy with licensed guides, elegant pacing, and concierge-level planning.",
    url: PAGE_PATH,
    siteName: "Rome Guide Services",
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
    title: "Private Tours in Rome | Rome Guide Services",
    description:
      "Private Rome tours, Vatican experiences, and day trips from Rome curated around your pace.",
    images: ["/dark1.png"],
  },
};

type TrustIconName = "temple" | "scroll" | "feather" | "service" | "globe";

const trustPoints = [
  {
    icon: "temple",
    title: "Licensed Rome Tour Guides",
    description:
      "Our team of officially licensed guides in Rome brings over 80 years of combined experience, offering deep knowledge of the city's history, culture, and hidden gems.",
  },
  {
    icon: "scroll",
    title: "Tailor-Made Private Tours",
    description:
      "Every experience is custom-designed around your interests, pace, and travel style - from individual travelers to private groups up to 50 people.",
  },
  {
    icon: "feather",
    title: "Family-Run Tour Experience",
    description:
      "Founded by Ludovica and Carlo, our family-run service offers a personal, authentic approach to discovering Rome with care, passion, and attention to detail.",
  },
  {
    icon: "globe",
    title: "Multilingual Private Guides",
    description:
      "We offer tours in English, Spanish, French, German, and more - ensuring a seamless and comfortable experience for international travelers.",
  },
  {
    icon: "service",
    title: "Personalized Premium Service",
    description:
      "With international experience and deep cultural understanding, we deliver a refined, client-focused service tailored to every traveler's needs.",
  },
] as const;

const trustPhotos = [
  { src: "/carlo1.jpg", alt: "Colosseum by blue hour in Rome" },
  { src: "/carlo2.jpg", alt: "Roman fountain and baroque facade" },
  { src: "/carlo3.jpg", alt: "St Peter's dome and river bridge" },
  { src: "/carlo4.jpg", alt: "Trevi-style fountain and Roman architecture" },
] as const;

const trustHighlights = [
  { value: "10+", label: "Years of Experience" },
  { value: "1000+", label: "Tourists Satisfied" },
  { value: "1500+", label: "Tours Done" },
] as const;

function TrustIcon({ name }: { name: TrustIconName }) {
  switch (name) {
    case "temple":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 9h18M6 9v7m4-7v7m4-7v7m4-7v7M4 20h16M12 4l8 4H4l8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "scroll":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 5h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1 0-6h8M8 13h8M8 9h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "feather":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M19 4c-5 0-9.5 2.7-12 7l-2 5 5-2c4.3-2.2 7-6.2 7-10Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 15l6-6M7 20l4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "service":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 12h5l2.5-2.5a2 2 0 0 1 2.8 0L15 11h6M4 17h6l2-2h8M7 7h3l1-1h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.2 2.2 3.5 5.6 3.5 9S14.2 18.8 12 21M12 3c-2.2 2.2-3.5 5.6-3.5 9s1.3 6.8 3.5 9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function resolveSiteUrl() {
  const fallbackUrl = "http://localhost:3000";
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl;

  try {
    return new URL(rawUrl).toString().replace(/\/+$/, "");
  } catch {
    return fallbackUrl;
  }
}

export default function Home() {
  const siteUrl = resolveSiteUrl();
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Tours in Rome and Italy",
    provider: {
      "@type": "TravelAgency",
      name: "Rome Guide Services",
      url: siteUrl,
    },
    areaServed: ["Rome", "Italy"],
    serviceType: [
      "Private tours in Rome",
      "Vatican private tours",
      "Day trips from Rome",
      "Tailor-made tours in Italy",
    ],
    offers: {
      "@type": "OfferCatalog",
      name: "Private Tour Collections",
      itemListElement: [
        { "@type": "Offer", name: "Ancient Rome Private Tour", url: `${siteUrl}/tours/ancient-rome` },
        { "@type": "Offer", name: "Private Vatican Tour", url: `${siteUrl}/tours/vatican` },
        { "@type": "Offer", name: "Day Trips from Rome", url: `${siteUrl}/tours/day-trips-from-rome` },
        { "@type": "Offer", name: "Private Tours in Italy", url: `${siteUrl}/tours-in-italy` },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            src="/dark1.png"
            alt="Rome sunset seen through an ancient arch"
            fill
            priority
            quality={100}
            unoptimized
            className={styles.heroBackground}
          />

          <div className={styles.contentLayer}>
            <div className={styles.copyBlock}>
              <p className={styles.kicker}>Private Tours in Rome</p>
              <h1 className={styles.title}>
                Private Rome Tours,
                <br />
                Crafted Around You
              </h1>
              <p className={styles.description}>
                Tailor-made itineraries designed around your interests, pace,
                and travel style - led by licensed local guides.
              </p>
              <div className={styles.ctaRow}>
                <Link href="/#requested-tours-heading" className={styles.primaryCta}>
                  Explore Private Tours
                </Link>
                <Link href="/#booking-calendar" className={styles.secondaryCta}>
                  Plan Your Trip
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.heroDivider} aria-hidden />

        <BookingTriageCalendarConcept />

        <section className={styles.toursShowcase} aria-labelledby="requested-tours-heading">
          <div className={styles.toursInner}>
            <h2 id="requested-tours-heading" className={styles.toursHeading}>
              Explore Our Most Requested Private Tours
            </h2>
            <span className={styles.headingRule} aria-hidden />
            <p className={styles.toursLead}>
              Curated experiences across Rome, the Vatican, and beyond - designed
              around your interests, pace, and travel style.
            </p>

            <WobbleCardDemo />
          </div>
        </section>

        <section className={styles.whyChooseSection} aria-labelledby="why-choose-heading">
          <div className={styles.whyChooseInner}>
            <div className={styles.whyChooseCopy}>
              <p className={styles.whyChooseEyebrow}>Why Choose Rome Guide Services</p>
              <h2 id="why-choose-heading" className={styles.whyChooseHeading}>
                A Family of Licensed Guides, Crafting Rome Around You
              </h2>
              <p className={styles.whyChooseLead}>
                We are a family-run team of licensed Roman guides, creating private
                itineraries that feel personal, elegant, and deeply connected to
                the city&apos;s heritage.
              </p>

              <div className={styles.trustGrid}>
                {trustPoints.map((point) => (
                  <article
                    key={point.title}
                    className={`${styles.trustCard} ${styles.trustCardLegacyOverlay}`}
                  >
                    <div className={styles.trustCardHeader}>
                      <span className={styles.trustIcon} aria-hidden>
                        <TrustIcon name={point.icon} />
                      </span>
                      <h3 className={styles.trustTitle}>{point.title}</h3>
                    </div>
                    <span className={styles.trustRule} aria-hidden />
                    <p className={styles.trustDescription}>{point.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.whyChooseMedia}>
              <div className={styles.photoCollage}>
                {trustPhotos.map((photo, index) => (
                  <figure key={photo.src} className={styles.photoTile} data-index={index + 1}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 720px) 46vw, (max-width: 1080px) 36vw, 20vw"
                      className={styles.portraitImage}
                    />
                  </figure>
                ))}
              </div>

              <div className={styles.highlightCloud}>
                {trustHighlights.map((highlight, index) => (
                  <article
                    key={highlight.label}
                    className={styles.highlightCard}
                    data-index={index + 1}
                  >
                    <p className={styles.highlightValue}>{highlight.value}</p>
                    <p className={styles.highlightLabel}>{highlight.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LuxuryEditorialToursSection />
        <DayTripsSection />
        <TailorMadeExperiencesSection />
        <TravelerTestimonialsLegacySection />
        <LuxuryFaqSection />
        <LuxuryFinalCtaSection />
        <LuxuryFooterSection />
      </main>
    </>
  );
}
