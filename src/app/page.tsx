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
  title: "Private Tours in Rome | Licensed Local Guides & Custom Itineraries",
  description:
    "Book private tours in Rome with licensed local guides. Discover Ancient Rome, Vatican private tours, and day trips from Rome with custom itineraries built around your pace.",
  keywords: [
    "private tours in Rome",
    "Rome private tours",
    "licensed Rome tour guides",
    "private Vatican tour",
    "Ancient Rome private tour",
    "Christian Rome tour",
    "day trips from Rome",
    "custom Rome itinerary",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Private Tours in Rome | Licensed Local Guides & Custom Itineraries",
    description:
      "Private tours in Rome and Italy with licensed guides, flexible planning, and custom itineraries for every traveler.",
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
      "Private tours in Rome, Vatican highlights, and day trips from Rome built around your interests.",
    images: ["/dark1.png"],
  },
};

type TrustIconName = "temple" | "scroll" | "feather" | "service" | "globe";

const trustPoints = [
  {
    icon: "temple",
    title: "Licensed Local Guides in Rome",
    description:
      "Our officially licensed Rome tour guides have spent decades helping travelers enjoy the city with confidence. We blend iconic landmarks, local stories, and hidden corners at your pace.",
  },
  {
    icon: "scroll",
    title: "Private Tours Made for You",
    description:
      "Every itinerary is built around your interests, your rhythm, and your travel style, whether you're traveling solo, as a couple, or with family and friends.",
  },
  {
    icon: "feather",
    title: "Family-Run, Personal Approach",
    description:
      "Founded by Ludovica and Carlo, our family-run service makes every guest feel welcomed, cared for, and truly connected to the city.",
  },
  {
    icon: "globe",
    title: "Guides in Your Language",
    description:
      "We guide in English, Spanish, French, German, and more, so your day in Rome feels easy, natural, and enjoyable from start to finish.",
  },
  {
    icon: "service",
    title: "Friendly Service, Human Touch",
    description:
      "From your first message to your final stop, we offer thoughtful support and local expertise for smooth, memorable private tours in Rome.",
  },
] as const;

const trustPhotos = [
  { src: "/carlo1.jpg", alt: "Colosseum by blue hour in Rome" },
  { src: "/carlo2.jpg", alt: "Roman fountain and baroque facade" },
  { src: "/carlo3.jpg", alt: "Rome skyline and river bridge at sunset" },
  { src: "/carlo4.jpg", alt: "Trevi-style fountain and Roman architecture" },
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
      "Custom tours in Italy",
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
            className={`${styles.heroBackground} ${styles.desktopHeroBackground}`}
          />
          <Image
            src="/chat.png"
            alt="Rome private tours with local guide"
            fill
            priority
            quality={100}
            unoptimized
            className={`${styles.heroBackground} ${styles.mobileHeroBackground}`}
          />

          <div className={styles.contentLayer}>
            <div className={styles.copyBlock}>
              <p className={styles.kicker}>Private Tours in Rome</p>
              <h1 className={styles.title}>
                Private Tours in Rome,
                <br />
                Designed Around You
              </h1>
              <p className={styles.description}>
                Personalized journeys through Rome, crafted around your passions and pace.
                Discover the Eternal City alongside our expert local guides.
              </p>
              <div className={styles.ctaRow}>
                <Link href="/#requested-tours-heading" className={styles.primaryCta}>
                  Explore Private Tours
                </Link>
                <Link href="/#booking-calendar" className={styles.secondaryCta}>
                  Plan Your Rome Trip
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
              Explore Our Most Requested Private Tours in Rome
            </h2>
            <span className={styles.headingRule} aria-hidden />
            <p className={styles.toursLead}>
              Choose from Ancient Rome, Vatican, walking, family-friendly, and
              art-focused tours, all shaped around what you love.
            </p>

            <WobbleCardDemo />
          </div>
        </section>

        <section className={styles.whyChooseSection} aria-labelledby="why-choose-heading">
          <div className={styles.whyChooseInner}>
            <div className={styles.whyChooseCopy}>
              <p className={styles.whyChooseEyebrow}>Why Travelers Book With Us</p>
              <h2 id="why-choose-heading" className={styles.whyChooseHeading}>
                Licensed Rome Guides, Family-Run Care
              </h2>
              <p className={styles.whyChooseLead}>
                We&apos;re a family-run team creating private tours in Rome that feel
                personal, authentic, and rich in local insight.
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
