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
    title: "Licensed Guides",
    value: "Officially licensed in Rome",
  },
  {
    title: "Family-Run",
    value: "Plan directly with our family team",
  },
  {
    title: "Private Only",
    value: "Just your group, always",
  },
  {
    title: "Multilingual",
    value: "English, Italian, Spanish, and more",
  },
];

const heroPills = ["Licensed in Rome", "Private tours only", "Family-run", "Multilingual"];

const trustPillars = [
  {
    title: "Licensed Local Guides",
    description:
      "Every tour is led by a licensed Rome guide who knows how to make complex history clear and engaging.",
  },
  {
    title: "Private Tours Built Around You",
    description:
      "We shape each day around your interests, pace, and energy so the experience feels easy and personal.",
  },
  {
    title: "Family-Run, Start to Finish",
    description:
      "You speak with real people who plan and support your trip directly, not a generic booking desk.",
  },
  {
    title: "Clear Communication in Your Language",
    description:
      "We match language needs early so your tour feels smooth before, during, and after the day.",
  },
  {
    title: "Reliable Support on Tour Day",
    description:
      "From meeting-point logistics to last-minute adjustments, we stay present and practical.",
  },
];

const trustPillarIcons = ["01", "02", "03", "04", "05"];

const guideProfiles = [
  {
    name: "Carlo",
    role: "Founder & Licensed Guide",
    license: "Licensed in Rome",
    languages: "English, Italian",
    specialties: "Ancient Rome, smart routing, private multi-day planning",
    note: "Carlo keeps big stories clear while pacing the day around your energy.",
  },
  {
    name: "Ludovica",
    role: "Co-Founder & Client Experience Lead",
    license: "Licensed in Rome",
    languages: "Italian, English, Spanish",
    specialties: "Custom itineraries, family pacing, private guest coordination",
    note: "Ludovica helps shape each tour so it feels smooth, warm, and personal.",
  },
];

const processSteps = [
  {
    title: "Tell Us What You Want",
    description:
      "Share your dates, interests, and preferred pace so we understand your priorities right away.",
  },
  {
    title: "We Build Your Route",
    description:
      "We suggest a private plan with the right stops, timing, and rhythm for your group.",
  },
  {
    title: "We Confirm the Details",
    description:
      "We align on meeting points, timing, and practical notes so everything feels easy before tour day.",
  },
  {
    title: "You Enjoy Rome at Your Pace",
    description:
      "On the day, we guide with flexibility and clear context so you can enjoy Rome without stress.",
  },
];

const faqItems = [
  {
    question: "Are your guides officially licensed in Rome?",
    answer:
      "Yes. All our Rome tours are led by officially licensed guides.",
  },
  {
    question: "Are your tours always private?",
    answer:
      "Yes. We run private tours only, so everything is tailored to your group.",
  },
  {
    question: "Can you tailor tours around specific interests?",
    answer:
      "Absolutely. Tell us what you love, and we shape the day around it.",
  },
  {
    question: "Do you offer tours in multiple languages?",
    answer:
      "Yes. We can guide in multiple languages, based on availability.",
  },
  {
    question: "Can you help with families or slower-paced routes?",
    answer:
      "Yes. We regularly plan for families, older travelers, and anyone who prefers a slower pace.",
  },
  {
    question: "Do you also organize day trips and tours beyond Rome?",
    answer:
      "Yes. Besides Rome, we plan private day trips and selected multi-city Italy routes.",
  },
  {
    question: "How do we start planning our private tour?",
    answer:
      "Send us your dates and interests through the booking form, and we will reply with a personal plan.",
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
      "Family-run Rome guide service offering private tours with licensed guides, multilingual support, and flexible pacing.",
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
    "Meet our family-run team of licensed Rome guides and see how we plan private tours with clear communication, flexible pacing, and personal support.";

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
                The Rome Team Behind Your Private Tour
              </h1>
              <p className={styles.heroLead}>
                We are a family-run team of licensed guides in Rome. We create private tours that
                feel clear, personal, and paced around your group.
              </p>
              <p className={styles.heroSublead}>
                From must-see landmarks to quieter corners, we help you experience Rome in a way
                that feels natural and never rushed.
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
              <p className={styles.microTrustLine}>Local team in Rome | Licensed guides | Private tours only</p>
            </article>

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
                  Rome Guide Services started as a family project with a simple idea: private tours
                  should feel personal, not transactional.
                </p>
                <p>
                  We live and work in Rome, and we plan each route ourselves. That means clear
                  communication, smart timing, and fewer surprises on the day.
                </p>
                <p>
                  Whether it is your first time here or your fifth, we adapt the experience to
                  you and keep it warm, practical, and memorable.
                </p>
                <p className={styles.storyBadge}>Family-run in Rome | Practical planning | Human support</p>
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
                  Local Expertise, Human Support, and Private Tours That Feel Easy
                </h2>
                <p className={styles.darkSectionLead}>
                  We combine licensed guiding with thoughtful planning, so you get depth without
                  stress.
                </p>
                <p className={styles.darkSectionMeta}>
                  LOCAL | LICENSED | PRIVATE | FLEXIBLE
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
                  Meet the Guides Behind Your Tour
                </h2>
                <p className={styles.guidesLead}>
                  A great private guide does more than explain monuments. We read the room, adjust
                  the rhythm, and turn Rome into a story that makes sense for your group.
                </p>
                <p className={styles.guidesTrustRow}>
                  Real local guides | Friendly pace | Clear communication
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
            <p className={styles.guidesPhotoCaption}>Real guides, real guests, real days in Rome.</p>
          </div>
        </section>

        <section className={styles.approachSection} aria-labelledby="our-approach-title" data-reveal>
          <div className={styles.sectionInner}>
            <div className={styles.approachLayout}>
              <article className={styles.approachEditorial}>
                <p className={styles.sectionEyebrow}>OUR APPROACH</p>
                <h2 id="our-approach-title" className={`${styles.sectionTitle} ${styles.approachTitle}`}>
                  How We Build a Private Tour That Fits You
                </h2>
                <p className={styles.approachParagraph}>
                  Group tours follow fixed scripts. We do not.
                </p>
                <p className={styles.approachParagraph}>
                  We adapt each route to your interests, your pace, and how you want the day to
                  feel.
                </p>
                <p className={styles.approachTrustLine}>
                  Built around your interests, your pace, and your day
                </p>
                <Link href="/#requested-tours-heading" className={styles.approachEditorialLink}>
                  See the tours we can shape for you <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>

              <aside className={styles.approachManifesto} aria-label="The private touring difference">
                <p className={styles.approachManifestoLabel}>OUR PROMISE</p>
                <h3 className={styles.approachManifestoStatement}>
                  No rushed scripts.
                  <br />
                  No giant group pace.
                  <br />
                  No one-size-fits-all checklist.
                </h3>

                <div className={styles.approachPrinciples}>
                  <article className={styles.approachPrinciple}>
                    <h4>Custom routing</h4>
                    <p>Right places, right order, right rhythm for your group.</p>
                  </article>
                  <article className={styles.approachPrinciple}>
                    <h4>Licensed interpretation</h4>
                    <p>Clear, engaging context from licensed local guides.</p>
                  </article>
                  <article className={styles.approachPrinciple}>
                    <h4>Clear planning support</h4>
                    <p>Simple coordination from first message to tour day.</p>
                  </article>
                </div>

                <p className={styles.approachManifestoTag}>Family-run private touring in Rome</p>
              </aside>
            </div>

            <ul className={styles.approachProofStrip} aria-label="Private tour proof points">
              <li>Private tours only</li>
              <li>Family and senior-friendly pacing</li>
              <li>Multilingual support</li>
              <li>Day trips and Italy extensions</li>
            </ul>
          </div>
        </section>

        <section className={styles.gallerySection} aria-labelledby="real-moments-title" data-reveal>
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>REAL MOMENTS</p>
            <h2 id="real-moments-title" className={styles.sectionTitle}>
              The People Behind the Experience
            </h2>
            <p className={styles.sectionLead}>
              These are real moments from our tours. No stock actors, no staged scripts, just the
              way we actually work with guests in Rome.
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
                How Planning with Us Works
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
              Questions We Hear Most
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
              Choose Where to Start
            </h2>

            <div className={styles.pathwaysGrid}>
              <article className={styles.pathwayCard} data-reveal>
                <h3>Private Tours in Rome</h3>
                <ul>
                  <li>
                    <Link href="/tours/ancient-rome">Ancient Rome Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours/vatican">Vatican Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours/christian-rome">Christian Rome Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours/walking-tours">Rome Walking Tours</Link>
                  </li>
                  <li>
                    <Link href="/tours/family-friendly">Family-Friendly Rome Tours</Link>
                  </li>
                  <li>
                    <Link href="/tours/art-architecture">Rome Art & Architecture Tour</Link>
                  </li>
                </ul>
              </article>

              <article className={styles.pathwayCard} data-reveal>
                <h3>Beyond Rome</h3>
                <ul>
                  <li>
                    <Link href="/tours/day-trips-from-rome">Day Trips from Rome</Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-florence-tuscany-tour">
                      Tours in Italy: Florence & Tuscany
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-venice-tour">Venice Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-milan-tour">Milan Tour</Link>
                  </li>
                  <li>
                    <Link href="/tours-in-italy/private-sicily-tours">Sicily Tours</Link>
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
                Ready to Plan Your Rome Trip Together?
              </h2>
              <p>
                Tell us your dates, priorities, and preferred pace. We&apos;ll send a personal
                plan built around what matters to you.
              </p>
              <Link href="/#booking-calendar" className={styles.finalCtaButton}>
                Start Planning
              </Link>
              <p className={styles.finalTrustLine}>
                Reply within 24 hours | Real people, no call center
              </p>
            </article>
          </div>
        </section>
      </main>

      <LuxuryFooterSection />
    </>
  );
}

