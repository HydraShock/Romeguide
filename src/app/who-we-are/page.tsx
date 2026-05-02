import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LuxuryFooterSection from "@/components/luxury-footer-section";
import WhoWeArePageEffects from "./page-effects";
import styles from "./page.module.css";

const PAGE_PATH = "/who-we-are";
const WHO_HERO_IMAGE = "/image%20(22).png";

const heroTrustStrip = [
  {
    title: "Licensed Team",
    value: "Official Rome guide credentials",
  },
  {
    title: "Family-Run",
    value: "Direct planning with our core team",
  },
  {
    title: "Private Only",
    value: "Custom pacing for every request",
  },
  {
    title: "Multilingual",
    value: "International guests hosted with clarity",
  },
];

const heroCompanionPoints = [
  "Rome-based family-run core team",
  "Licensed guide depth with relaxed pace",
  "Direct support from inquiry to tour day",
];

const heroPills = ["Licensed in Rome", "Private only", "Multilingual", "Custom"];

const trustPillars = [
  {
    title: "Licensed Rome Tour Guides",
    description:
      "Our guides are officially licensed in Rome and combine formal qualifications with years of on-the-ground experience across the city's major and lesser-known sites.",
  },
  {
    title: "Custom Private Tours",
    description:
      "Every private route is shaped around your pace, interests, and travel priorities, from archaeological depth to family-friendly rhythm.",
  },
  {
    title: "Family-Run Attention to Detail",
    description:
      "We are directly involved in planning and communication, so guests receive thoughtful support instead of anonymous booking-platform replies.",
  },
  {
    title: "Multilingual Private Guides",
    description:
      "We host travelers in multiple languages, helping international guests enjoy a smooth and culturally rich private experience in Rome.",
  },
  {
    title: "Personal, Reliable Service",
    description:
      "From first inquiry to final drop-off, we focus on clarity, reliability, comfort, and a genuinely human way of traveling through the city.",
  },
];

const trustPillarIcons = ["01", "02", "03", "04", "05"];

const guideProfiles = [
  {
    name: "Carlo",
    role: "Founder & Senior Licensed Guide",
    license: "Licensed in Rome",
    languages: "English, Italian",
    specialties: "Ancient Rome, route strategy, private multi-day planning",
    note: "Known for combining historical depth with practical pacing and high-touch private service.",
  },
  {
    name: "Ludovica",
    role: "Co-Founder & Client Experience Lead",
    license: "Licensed in Rome",
    languages: "Italian, English, Spanish",
    specialties: "Custom itineraries, family pacing, private guest coordination",
    note: "Ensures each itinerary feels clear, warm, and built around who is traveling.",
  },
];

const flexibilityConceptPills = ["Multilingual", "Private only", "Flexible pacing", "Custom"];

const flexibilityLanguageRows = [
  "Guide and guest language matching from first contact",
  "Clear storytelling depth without overly academic jargon",
  "Context adapted for first-time visitors and experienced travelers",
];

const flexibilityRhythmRows = [
  "Light start for jet-lagged arrivals",
  "High-focus monuments in your strongest energy window",
  "Calmer close with coffee breaks, taxis, or seated moments",
];

const flexibilityComfortRows = [
  "Walking intensity adjusted to your group",
  "Step-light alternatives when needed",
  "Route order designed around heat, crowds, and logistics",
];

const processSteps = [
  {
    title: "We Understand Your Priorities",
    description:
      "We start by understanding what you want to see, how you like to travel, and the pace that feels right for your group.",
  },
  {
    title: "We Shape the Right Private Route",
    description:
      "We design a clear private itinerary with licensed-guide depth, realistic timing, and strong route intelligence.",
  },
  {
    title: "We Coordinate the Details Clearly",
    description:
      "You receive straightforward planning support, practical notes, and reliable communication before the tour date.",
  },
  {
    title: "We Make the Day Feel Easy",
    description:
      "On the day, we focus on flow, comfort, and meaningful context so Rome feels clear rather than overwhelming.",
  },
];

const faqItems = [
  {
    question: "Are your guides officially licensed in Rome?",
    answer:
      "Yes. We work with officially licensed Rome tour guides and build each private experience around professional standards and local expertise.",
  },
  {
    question: "Are your tours always private?",
    answer:
      "Yes. Our tours are private by design, so pacing, route focus, and storytelling can be adapted to your group.",
  },
  {
    question: "Can you tailor tours around specific interests?",
    answer:
      "Absolutely. We regularly adapt routes around archaeology, art, architecture, faith heritage, food context, and neighborhood atmosphere.",
  },
  {
    question: "Do you offer tours in multiple languages?",
    answer:
      "Yes. We host guests in multiple languages and match guide profiles to language and thematic priorities whenever possible.",
  },
  {
    question: "Can you help with families or slower-paced routes?",
    answer:
      "Yes. We frequently design routes for families, older travelers, and guests who prefer a calmer rhythm over high-intensity touring.",
  },
  {
    question: "Do you also organize day trips and tours beyond Rome?",
    answer:
      "Yes. Alongside Rome tours, we offer private day trips from Rome and selected private destination experiences across Italy.",
  },
  {
    question: "How do we start planning our private tour?",
    answer:
      "Share your dates, interests, and preferred pace through our booking and contact path, and we will propose a private plan built around you.",
  },
];

const galleryItems = [
  { src: "/carlo1.jpg", alt: "Licensed Rome guide hosting guests near historic monuments" },
  { src: "/carlo2.jpg", alt: "Private tour moment in central Rome with warm evening light" },
  { src: "/carlo3.jpg", alt: "Guide-led route through Rome with river and dome backdrop" },
  { src: "/carlo4.jpg", alt: "Private guest experience near Rome baroque architecture" },
  { src: "/carlo5.jpg", alt: "Family-run Rome guide team in an on-tour moment" },
  { src: "/carlo6.jpg", alt: "Rome private guiding scene focused on authentic guest experience" },
];

function resolveBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  try {
    return new URL(raw).toString().replace(/\/+$/, "");
  } catch {
    return "http://localhost:3000";
  }
}

function buildOrganizationSchema() {
  const baseUrl = resolveBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rome Guide Services",
    url: `${baseUrl}/`,
    email: "romeguideservices@gmail.com",
    description:
      "Family-run Rome guide service offering custom private tours with licensed guides, multilingual support, and relaxed pace.",
    foundingLocation: {
      "@type": "Place",
      name: "Rome, Italy",
    },
    areaServed: {
      "@type": "Place",
      name: "Rome, Italy",
    },
    knowsLanguage: ["English", "Italian", "Spanish", "French", "German"],
  };
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
        name: "Who We Are",
        item: `${baseUrl}${PAGE_PATH}`,
      },
    ],
  };
}

export function generateMetadata(): Metadata {
  const title =
    "Who We Are | Licensed Rome Tour Guides & Custom Private Tours | Rome Guide Services";
  const description =
    "Meet our family-run team of licensed Rome tour guides creating custom private tours with relaxed pace, deep local knowledge, and a human client-focused approach.";

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
    openGraph: {
      title,
      description,
      url: PAGE_PATH,
      siteName: "Rome Guide Services",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: WHO_HERO_IMAGE,
          alt: "Rome skyline in cinematic light representing Rome Guide Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [WHO_HERO_IMAGE],
    },
  };
}

export default function WhoWeArePage() {
  const organizationSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <WhoWeArePageEffects />

      <main className={styles.page} data-who-we-are-root>
        <section
          className={styles.hero}
          aria-labelledby="who-we-are-main-title"
          data-reveal
        >
          <Image
            src={WHO_HERO_IMAGE}
            alt="Rome seen through an ancient arch in warm evening light"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
          <div className={styles.heroTexture} />
          <div className={styles.heroVignette} />

          <div className={styles.heroInner}>
            <article className={styles.heroPanel}>
              <p className={styles.heroEyebrow}>WHO WE ARE</p>
              <h1 id="who-we-are-main-title" className={styles.heroTitle}>
                A Family of Licensed Rome Tour Guides, Crafting Private Experiences Around You
              </h1>
              <p className={styles.heroLead}>
                We are a family-run team of licensed guides based in Rome, creating private tours
                that feel personal, warm, deeply informed, and carefully shaped around each
                traveler&apos;s pace and interests.
              </p>
              <p className={styles.heroSublead}>
                From iconic landmarks to hidden corners, our work combines local expertise,
                thoughtful planning, and a more human way of discovering Rome.
              </p>
              <div className={styles.heroActions}>
                <Link href="/#requested-tours-heading" className={styles.primaryCta}>
                  Explore Private Tours
                </Link>
                <Link href="/#booking-calendar" className={styles.secondaryCta}>
                  Plan Your Tour
                </Link>
              </div>
              <ul className={styles.heroPills}>
                {heroPills.map((pill) => (
                  <li key={pill}>{pill}</li>
                ))}
              </ul>
              <p className={styles.microTrustLine}>Licensed guides | Custom itineraries | Multilingual service</p>
            </article>

            <aside className={styles.heroCompanion} aria-label="Private guide service highlights">
              <p className={styles.heroCompanionEyebrow}>ROME GUIDE SERVICES</p>
              <h2 className={styles.heroCompanionTitle}>A More Personal Standard for Private Touring</h2>
              <p className={styles.heroCompanionLead}>
                We are not a booking platform. We are a hands-on team building clear private
                experiences with care and route intelligence.
              </p>
              <ul>
                {heroCompanionPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href="/booking-contact" className={styles.heroCompanionCta}>
                Start Your Inquiry
              </Link>
            </aside>
          </div>
        </section>

        <section className={styles.trustStripSection} aria-label="Quick trust overview" data-reveal>
          <div className={styles.sectionInner}>
            <div className={styles.trustStripGrid}>
              {heroTrustStrip.map((item) => (
                <article key={item.title} className={styles.trustStripCard} data-reveal>
                  <p>{item.title}</p>
                  <h3>{item.value}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.storySection} aria-labelledby="our-story-title" data-reveal>
          <div className={styles.sectionInner}>
            <div className={styles.storyFrame}>
              <div className={styles.storyGrid}>
                <article className={styles.storyCopy}>
                <p className={styles.sectionEyebrow}>OUR STORY</p>
                <h2 id="our-story-title" className={`${styles.sectionTitle} ${styles.storyTitle}`}>
                  Rooted in Rome, Built Around People
                </h2>
                <p>
                  Rome Guide Services was built by people who live this city every day and who
                  believe private travel should feel more personal than platform-driven. We are a
                  family-run Rome tour company, not a faceless marketplace.
                </p>
                <p>
                  Our approach is simple: licensed expertise, intelligent routing, and a human
                  standard of care from first message to final farewell. Guests trust us not just
                  for what we show, but for how we listen and adapt.
                </p>
                <p>
                  That philosophy allows us to host first-time visitors, returning travelers, and
                  private families with the same goal: making Rome feel clear, meaningful, and
                  beautifully paced.
                </p>
                <p className={styles.storyBadge}>Family-run | Licensed | Private only</p>
                </article>
                <figure className={styles.storyVisual}>
                  <div className={styles.storyVisualInner}>
                    <Image
                      src="/carlo5.jpg"
                      alt="Family-run Rome guide service team in an authentic on-tour moment"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className={styles.storyImage}
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.darkSection} aria-labelledby="why-choose-us-title" data-reveal>
          <div className={styles.sectionInner}>
            <div className={styles.darkSectionLayout}>
              <article className={styles.darkSectionIntro} data-reveal>
                <p className={`${styles.sectionEyebrow} ${styles.sectionEyebrowDark}`}>
                  WHY CHOOSE US
                </p>
                <h2 id="why-choose-us-title" className={styles.sectionTitleDark}>
                  Licensed Expertise, Custom Planning, and a Smarter Way to See Rome
                </h2>
                <p className={styles.darkSectionLead}>
                  We combine licensed expertise, family-run care, and private planning built around
                  travelers who want Rome done properly.
                </p>
                <p className={styles.darkSectionMeta}>
                  LICENSED | FAMILY-RUN | CUSTOM | MULTILINGUAL
                </p>
              </article>

              <div className={styles.pillarsGrid}>
                {trustPillars.slice(0, 4).map((pillar, index) => (
                  <article key={pillar.title} className={styles.pillarCard} data-reveal data-visible="true">
                    <span className={styles.pillarIcon} aria-hidden>
                      {trustPillarIcons[index] ?? "05"}
                    </span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </article>
                ))}
              </div>

              <article className={styles.premiumServiceBar} data-reveal data-visible="true">
                <span className={`${styles.pillarIcon} ${styles.premiumServiceIcon}`} aria-hidden>
                  {trustPillarIcons[4] ?? "05"}
                </span>
                <div className={styles.premiumServiceContent}>
                  <h3>{trustPillars[4]?.title}</h3>
                  <p>{trustPillars[4]?.description}</p>
                </div>
                <Link href="/#booking-calendar" className={styles.premiumServiceCta}>
                  Plan Your Private Experience
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.guidesSection} aria-labelledby="our-guides-title" data-reveal>
          <div className={styles.sectionInner}>
            <div className={styles.guidesTopRow}>
              <article className={styles.guidesIntro} data-reveal>
                <p className={styles.sectionEyebrow}>OUR GUIDES</p>
                <h2 id="our-guides-title" className={`${styles.sectionTitle} ${styles.guidesTitle}`}>
                  Local Knowledge, Professional Licensing, and Private-Guide Depth
                </h2>
                <p className={styles.guidesLead}>
                  The value of a private Rome guide is not only information, but interpretation,
                  pacing, and route judgment. Our licensed guides bring depth across archaeology,
                  art, architecture, and living Roman culture.
                </p>
                <p className={styles.guidesTrustRow}>
                  Licensed in Rome | Family-run approach | Multilingual support | Private only
                </p>
              </article>

              <figure className={styles.guidesHeroVisual} data-reveal>
                <Image
                  src="/carlo5.jpg"
                  alt="Family-run licensed guide team in Rome"
                  fill
                  sizes="(max-width: 860px) 100vw, 44vw"
                  className={styles.guidesHeroImage}
                />
              </figure>
            </div>

            <div className={styles.guidesCardsRow}>
              {guideProfiles.map((guide) => (
                <article key={guide.name} className={styles.guideCard} data-reveal>
                  <h3>{guide.name}</h3>
                  <p className={styles.guideRole}>{guide.role}</p>
                  <ul>
                    <li>
                      <strong>License:</strong> {guide.license}
                    </li>
                    <li>
                      <strong>Languages:</strong> {guide.languages}
                    </li>
                    <li>
                      <strong>Specialties:</strong> {guide.specialties}
                    </li>
                  </ul>
                  <p className={styles.guideNote}>{guide.note}</p>
                </article>
              ))}
            </div>

            <div className={styles.guidesPhotoStrip} data-reveal>
              <figure className={styles.guidesPhotoItem}>
                <Image
                  src="/carlo1.jpg"
                  alt="Licensed guide hosting private guests in Rome"
                  fill
                  sizes="(max-width: 860px) 100vw, 52vw"
                  className={styles.guidesPhotoImage}
                />
              </figure>
              <figure className={styles.guidesPhotoItem}>
                <Image
                  src="/carlo3.jpg"
                  alt="Private guide moment with Rome skyline backdrop"
                  fill
                  sizes="(max-width: 860px) 100vw, 38vw"
                  className={styles.guidesPhotoImage}
                />
              </figure>
            </div>
            <p className={styles.guidesPhotoCaption}>Real licensed guides. Real private experiences.</p>
          </div>
        </section>

        <section className={styles.approachSection} aria-labelledby="our-approach-title" data-reveal>
          <div className={styles.sectionInner}>
            <div className={styles.approachLayout}>
              <article className={styles.approachEditorial}>
                <p className={styles.sectionEyebrow}>OUR APPROACH</p>
                <h2 id="our-approach-title" className={`${styles.sectionTitle} ${styles.approachTitle}`}>
                  Private Touring, Rewritten Around Pace, Context, and Human Judgment
                </h2>
                <p className={styles.approachParagraph}>
                  Generic group tours optimize for volume. We design private experiences around
                  rhythm, relevance, and cultural depth.
                </p>
                <p className={styles.approachParagraph}>
                  Every itinerary is shaped by licensed expertise, intelligent route judgment, and
                  the ability to adapt the day to the traveler - not the other way around.
                </p>
                <p className={styles.approachTrustLine}>
                  Licensed guides | Custom routes | Private only | Clear planning
                </p>
                <Link href="/#requested-tours-heading" className={styles.approachEditorialLink}>
                  See how this philosophy shapes our tours <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>

              <aside className={styles.approachManifesto} aria-label="The private touring difference">
                <p className={styles.approachManifestoLabel}>THE DIFFERENCE</p>
                <h3 className={styles.approachManifestoStatement}>
                  No fixed scripts.
                  <br />
                  No rushed group rhythm.
                  <br />
                  No generic city checklist.
                </h3>

                <div className={styles.approachPrinciples}>
                  <article className={styles.approachPrinciple}>
                    <h4>Custom routing</h4>
                    <p>Built around interests, pace, and the right sequence of places.</p>
                  </article>
                  <article className={styles.approachPrinciple}>
                    <h4>Licensed interpretation</h4>
                    <p>Context-rich storytelling led by real professional guides.</p>
                  </article>
                  <article className={styles.approachPrinciple}>
                    <h4>Clear planning support</h4>
                    <p>Clear guidance from first inquiry to tour day.</p>
                  </article>
                </div>

                <p className={styles.approachManifestoTag}>Family-run Rome guide service</p>
              </aside>
            </div>

            <ul className={styles.approachProofStrip} aria-label="Private tour proof points">
              <li>Licensed in Rome</li>
              <li>Multilingual private guiding</li>
              <li>Custom itineraries</li>
              <li>Family-run planning</li>
            </ul>
          </div>
        </section>

        <section className={styles.flexibilitySection} aria-labelledby="who-we-welcome-title" data-reveal>
          <div className={styles.sectionInner}>
            <article className={styles.flexibilityEditorial} data-reveal>
              <p className={styles.sectionEyebrow}>WHO WE WELCOME</p>
              <h2 id="who-we-welcome-title" className={`${styles.sectionTitle} ${styles.flexibilityTitle}`}>
                Different Travelers, Different Rhythms: Three Ways We Shape the Day
              </h2>
              <p className={styles.flexibilityLead}>
                Every private experience is shaped through three concrete lenses: language clarity,
                pacing control, and comfort logic. This is how we adapt the same city to very
                different travelers.
              </p>
              <ul className={styles.flexibilityTrustLine} aria-label="Flexible private tour principles">
                {flexibilityConceptPills.map((pill) => (
                  <li key={pill}>{pill}</li>
                ))}
              </ul>
            </article>

            <div className={styles.flexibilityConceptDeck}>
              <article className={`${styles.flexibilityConceptCard} ${styles.flexibilityConceptLanguage}`} data-reveal>
                <p className={styles.flexibilityConceptLabel}>Language-first Design</p>
                <h3>Multilingual Clarity Panel</h3>
                <p>
                  We organize the route and storytelling around how your group actually processes
                  information, not around a fixed script.
                </p>
                <ul>
                  {flexibilityLanguageRows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </article>

              <article className={`${styles.flexibilityConceptCard} ${styles.flexibilityConceptRhythm}`} data-reveal>
                <p className={styles.flexibilityConceptLabel}>Pacing-first Design</p>
                <h3>Day Rhythm Timeline</h3>
                <p>
                  The itinerary follows your energy curve from morning to afternoon, balancing key
                  landmarks with breathing space.
                </p>
                <ol>
                  {flexibilityRhythmRows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ol>
              </article>

              <article className={`${styles.flexibilityConceptCard} ${styles.flexibilityConceptComfort}`} data-reveal>
                <p className={styles.flexibilityConceptLabel}>Comfort-first Design</p>
                <h3>Route Intelligence Notes</h3>
                <p>
                  We adapt walk length, stop order, and transport support so the day stays smooth,
                  comfortable, and realistic for your group.
                </p>
                <ul>
                  {flexibilityComfortRows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.gallerySection} aria-labelledby="real-moments-title" data-reveal>
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>REAL MOMENTS</p>
            <h2 id="real-moments-title" className={styles.sectionTitle}>
              The People Behind the Experience
            </h2>
            <p className={styles.sectionLead}>
              Real guides, real guests, real Rome. The following images reflect the human side of
              our work and the quality of experience we aim to deliver on every private route.
            </p>

            <div className={styles.galleryGrid}>
              {galleryItems.map((item) => (
                <figure key={item.src} className={styles.galleryItem} data-reveal>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 48vw, 32vw"
                    className={styles.galleryImage}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.processSection} aria-labelledby="how-we-work-title" data-reveal>
          <div className={styles.sectionInner}>
            <article className={styles.processIntro} data-reveal>
              <p className={`${styles.sectionEyebrow} ${styles.sectionEyebrowDark}`}>HOW WE WORK</p>
              <h2 id="how-we-work-title" className={styles.sectionTitleDark}>
                From First Inquiry to Private Experience, Every Detail Is Thought Through
              </h2>
            </article>

            <ol className={styles.processList}>
              {processSteps.map((step, index) => (
                <li key={step.title} className={styles.processItem} data-reveal>
                  <span className={styles.processIndex}>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="who-we-are-faq-title" data-reveal>
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="who-we-are-faq-title" className={styles.sectionTitle}>
              Common Questions Before You Plan
            </h2>

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

        <section className={styles.pathwaysSection} aria-labelledby="pathways-title" data-reveal>
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>PLAN YOUR PATH</p>
            <h2 id="pathways-title" className={styles.sectionTitle}>
              Explore Our Tours, Day Trips, and Booking Path
            </h2>

            <div className={styles.pathwaysGrid}>
              <article className={styles.pathwayCard} data-reveal>
                <h3>Private Tours in Rome</h3>
                <ul>
                  <li>
                    <Link href="/tours/ancient-rome">Ancient Rome Private Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours/vatican">Private Vatican Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours/christian-rome">Christian Rome Private Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours/walking-tours">Rome Private Walking Tours</Link>
                  </li>
                  <li>
                    <Link href="/tours/family-friendly">Family-Friendly Rome Private Tours</Link>
                  </li>
                  <li>
                    <Link href="/tours/art-architecture">Rome Art & Architecture Private Tour</Link>
                  </li>
                </ul>
              </article>

              <article className={styles.pathwayCard} data-reveal>
                <h3>Beyond Rome</h3>
                <ul>
                  <li>
                    <Link href="/tours/day-trips-from-rome">Private Day Trips from Rome</Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-florence-tuscany-tour">
                      Private Tours in Italy: Florence & Tuscany
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-venice-tour">Private Venice Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-milan-tour">Private Milan Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-sicily-tours">Private Sicily Tours</Link>
                  </li>
                </ul>
              </article>

              <article className={styles.pathwayCard} data-reveal>
                <h3>Booking & Contact</h3>
                <ul>
                  <li>
                    <Link href="/#booking-calendar">Start Your Booking & Contact Request</Link>
                  </li>
                  <li>
                    <a href="mailto:romeguideservices@gmail.com">Email Our Planning Team</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          className={styles.finalCtaSection}
          aria-labelledby="who-we-are-final-cta-title"
          data-reveal
        >
          <div className={styles.sectionInner}>
            <article className={styles.finalCtaPanel}>
              <h2 id="who-we-are-final-cta-title">
                Plan Your Private Rome Experience with the Right Guides
              </h2>
              <p>
                Tell us what you want to discover, how you like to travel, and what matters most
                to you. We&apos;ll help shape a private Rome experience with the right pace,
                expertise, and attention to detail.
              </p>
              <Link href="/#booking-calendar" className={styles.finalCtaButton}>
                Start Planning Your Tour
              </Link>
              <p className={styles.finalTrustLine}>
                Personalized reply within 24 hours | Licensed guides | Custom service
              </p>
            </article>
          </div>
        </section>
      </main>

      <LuxuryFooterSection />
    </>
  );
}
