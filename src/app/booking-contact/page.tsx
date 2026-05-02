import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LuxuryFooterSection from "@/components/luxury-footer-section";
import InquiryForm from "./inquiry-form";
import styles from "./page.module.css";

const PAGE_PATH = "/booking-contact";
const CONTACT_EMAIL = "romeguideservices@gmail.com";
const CONTACT_HERO_IMAGE = "/image%20(21).png";

const heroQuickFacts = ["Reply in 24h", "Private only", "Licensed guides", "Custom plans"];
const heroQuickPills = ["Families", "Couples", "First-time Rome", "Custom itineraries"];

const bookingSteps = [
  {
    title: "Share Your Dates, Interests, and Travel Style",
    description:
      "Tell us what you want to discover, when you will travel, and the pace you prefer.",
  },
  {
    title: "We Suggest the Right Private Route",
    description:
      "We recommend the best private itinerary based on your priorities, timing, and group profile.",
  },
  {
    title: "We Refine the Details with You",
    description:
      "We adjust stops, sequencing, and practical notes so your plan feels clear and realistic.",
  },
  {
    title: "You Enjoy a Private Experience Built Around You",
    description:
      "On the day, you enjoy a route designed around comfort, context, and relaxed pace.",
  },
];

const requestTips = [
  "Your travel dates and preferred start windows",
  "Group size and traveler profile (family, couple, friends)",
  "Top priorities: Rome highlights, Vatican, day trips, or Italy routes",
  "Preferred pace (slow, balanced, intensive)",
  "Language preferences and mobility notes",
  "Any must-see landmarks or experiences",
];

const categoryCards = [
  {
    title: "Private Tours in Rome",
    description:
      "Choose among private routes in Ancient Rome, Vatican, Christian Rome, walking, family, and art-focused itineraries.",
    links: [
      { href: "/tours/ancient-rome", label: "Ancient Rome Private Tour" },
      { href: "/tours/vatican", label: "Private Vatican Tour" },
      { href: "/tours/christian-rome", label: "Christian Rome Private Tour" },
      { href: "/tours/walking-tours", label: "Rome Private Walking Tours" },
      { href: "/tours/family-friendly", label: "Family-Friendly Rome Private Tours" },
      { href: "/tours/art-architecture", label: "Rome Art & Architecture Private Tour" },
    ],
  },
  {
    title: "Day Trips from Rome",
    description:
      "Plan private escapes beyond Rome with flexible pacing and destination-focused planning.",
    links: [
      { href: "/tours/day-trips-from-rome", label: "Private Day Trips from Rome" },
      { href: "/tours/day-trips-from-rome/tivoli", label: "Private Tivoli Day Trip" },
      { href: "/tours/day-trips-from-rome/pompeii-amalfi-naples", label: "Pompeii & Amalfi Day Trip" },
    ],
  },
  {
    title: "Tours in Italy",
    description:
      "For multi-city journeys, we support private planning across selected Italy destinations.",
    links: [
      { href: "/tours-in-italy/private-florence-tuscany-tour", label: "Private Florence & Tuscany Tour" },
      { href: "/tours-in-italy/private-venice-tour", label: "Private Venice Tour" },
      { href: "/tours-in-italy/private-milan-tour", label: "Private Milan Tour" },
      { href: "/tours-in-italy/private-sicily-tours", label: "Private Sicily Tours" },
    ],
  },
];

const faqItems = [
  {
    question: "How quickly do you reply to booking requests?",
    answer:
      "We usually reply within 24 hours with a personalized planning response based on your request details.",
  },
  {
    question: "Are your tours always private?",
    answer:
      "Yes. Our experiences are private, so route pacing and depth can be adapted to your group.",
  },
  {
    question: "Can you tailor a tour around our interests?",
    answer:
      "Absolutely. We frequently adapt private routes around archaeology, art, architecture, family needs, and pace preferences.",
  },
  {
    question: "Can we ask about more than one tour in the same inquiry?",
    answer:
      "Yes. One request can include multiple priorities, and we will suggest the most clear structure.",
  },
  {
    question: "Do you offer tours in different languages?",
    answer:
      "Yes. We support multiple languages and match guide profiles according to availability and your needs.",
  },
  {
    question: "Can you help with families or slower-paced routes?",
    answer:
      "Yes. We regularly tailor pacing for families, older travelers, and guests who prefer a calmer rhythm.",
  },
  {
    question: "Can you help plan day trips or tours beyond Rome?",
    answer:
      "Yes. Alongside Rome touring, we can support private day trips from Rome and selected Italy destination planning.",
  },
];

function resolveBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  try {
    return new URL(raw).toString().replace(/\/+$/, "");
  } catch {
    return "http://localhost:3000";
  }
}

function buildBreadcrumbSchema() {
  const baseUrl = resolveBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Booking & Contact",
        item: `${baseUrl}${PAGE_PATH}`,
      },
    ],
  };
}

function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function buildContactPageSchema() {
  const baseUrl = resolveBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Booking & Contact | Rome Guide Services",
    description:
      "Contact Rome Guide Services to plan private tours in Rome, day trips from Rome, and custom Italy itineraries.",
    url: `${baseUrl}${PAGE_PATH}`,
    mainEntity: {
      "@type": "TravelAgency",
      name: "Rome Guide Services",
      url: `${baseUrl}/`,
      email: CONTACT_EMAIL,
    },
  };
}

export function generateMetadata(): Metadata {
  const title = "Booking & Contact | Plan Your Private Rome Tour | Rome Guide Services";
  const description =
    "Start planning your private Rome tour with our family-run team of licensed guides. Share your dates, interests, and travel style for a personal reply.";

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: PAGE_PATH,
    },
    keywords: [
      "contact Rome Guide Services",
      "book private tours Rome",
      "private Rome tour inquiry",
      "Rome private guide contact",
      "custom Italy itinerary planning",
    ],
    openGraph: {
      title,
      description,
      url: PAGE_PATH,
      siteName: "Rome Guide Services",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: CONTACT_HERO_IMAGE,
          alt: "Rome private tour planning with Rome Guide Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [CONTACT_HERO_IMAGE],
    },
  };
}

export default function BookingContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema();
  const faqSchema = buildFaqSchema();
  const contactPageSchema = buildContactPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <main className={styles.page}>
        <section className={styles.contactHero} aria-labelledby="booking-contact-main-title">
          <Image
            src={CONTACT_HERO_IMAGE}
            alt="Rome skyline at golden hour for private tour planning"
            fill
            priority
            sizes="100vw"
            className={styles.contactHeroImage}
          />
          <div className={styles.contactHeroShade} aria-hidden />
          <div className={styles.contactHeroTexture} aria-hidden />
          <div className={styles.contactHeroVignette} aria-hidden />

          <div className={styles.contactHeroInner}>
            <article className={styles.contactHeroPanel}>
              <p className={styles.contactHeroEyebrow}>BOOKING & CONTACT</p>
              <h1 id="booking-contact-main-title" className={styles.contactHeroTitle}>
                Plan Your Private Rome Tour
              </h1>
              <p className={styles.contactHeroLandmarks}>Rome | Day Trips | Italy Private Tours</p>
              <p className={styles.contactHeroLead}>
                Tell us your dates, interests, and travel style. We shape a private route with
                licensed guides and relaxed pace.
              </p>
              <p className={styles.contactHeroSublead}>
                Personalized planning for private tours in Rome, the Vatican, day trips, and
                selected Italy routes.
              </p>

              <div className={styles.contactHeroActions}>
                <a href="#booking-form" className={styles.contactHeroPrimaryCta}>
                  Start Your Inquiry <span aria-hidden>&rarr;</span>
                </a>
                <Link href="/#requested-tours-heading" className={styles.contactHeroSecondaryCta}>
                  Explore Private Tours
                </Link>
              </div>

              <ul className={styles.contactHeroFacts} aria-label="Booking contact quick facts">
                {heroQuickFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>

              <div className={styles.contactHeroPillsWrap}>
                <p>Ideal for</p>
                <ul className={styles.contactHeroPills}>
                  {heroQuickPills.map((pill) => (
                    <li key={pill}>{pill}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.howItWorks} aria-labelledby="how-it-works-title">
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>HOW IT WORKS</p>
            <h2 id="how-it-works-title">A More Personal Way to Plan Your Private Experience</h2>

            <ol className={styles.stepsGrid}>
              {bookingSteps.map((step, index) => (
                <li key={step.title} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="booking-form" className={styles.formSection} aria-labelledby="main-form-title">
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>BOOKING FORM</p>
            <h2 id="main-form-title">Start Your Private Tour Inquiry</h2>
            <p className={styles.sectionLead}>
              Share your travel details and priorities below. The clearer your request, the better we
              can tailor your private plan for Rome, day trips, and selected Italy routes.
            </p>
            <p className={styles.formSupportLine}>
              Direct support: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>

            <InquiryForm />
            <div className={styles.formTipsBlock}>
              <p className={styles.formTipsTitle}>To help us tailor your itinerary</p>
              <ul className={styles.tipsGrid}>
              {requestTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.categoriesSection} aria-labelledby="categories-title">
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>PLAN BY TOUR TYPE</p>
            <h2 id="categories-title">
              Choose Your Main Interest Before You Send the Inquiry
            </h2>

            <div className={styles.categoriesGrid}>
              {categoryCards.map((card) => (
                <article key={card.title} className={styles.categoryCard}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <ul>
                    {card.links.map((link) => (
                      <li key={link.href}>
                        {link.href.startsWith("#") ? (
                          <a href={link.href}>{link.label}</a>
                        ) : (
                          <Link href={link.href}>{link.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="booking-faq-title">
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="booking-faq-title">Booking and Planning Questions</h2>

            <div className={styles.faqList}>
              {faqItems.map((item) => (
                <details key={item.question} className={styles.faqItem}>
                  <summary>
                    <span>{item.question}</span>
                    <span aria-hidden>+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LuxuryFooterSection />
    </>
  );
}
