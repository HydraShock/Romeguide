import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LuxuryFooterSection from "@/components/luxury-footer-section";
import { FOOD_BOOKING_URL, FOOD_TOURS_PATH, foodTourPath, foodTours } from "@/lib/food-tours";
import { getSiteUrl } from "@/lib/site-url";
import { foodTourMetadata } from "../metadata";
import styles from "../food-tours.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return foodTours.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = foodTours.find((item) => item.slug === slug);
  if (!tour) notFound();
  const title = tour.slug.endsWith("dessert-tour") ? `${tour.title} | Private Dessert & Gelato Tasting` : tour.title;
  return foodTourMetadata(title, tour.description, foodTourPath(slug), tour.hero);
}

export default async function FoodTourPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = foodTours.find((item) => item.slug === slug);
  if (!tour) notFound();

  const site = getSiteUrl();
  const url = `${site}${foodTourPath(slug)}`;
  const provider = new URL(tour.sourcePath, FOOD_BOOKING_URL).href;
  const related = foodTours.filter((item) => item.city === tour.city && item.slug !== slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site },
          { "@type": "ListItem", position: 2, name: "Food Tours", item: `${site}${FOOD_TOURS_PATH}` },
          { "@type": "ListItem", position: 3, name: tour.title, item: url },
        ],
      },
      {
        "@type": "TouristTrip", name: tour.title, url, description: tour.description,
        image: `${site}${tour.hero.src}`,
        itinerary: { "@type": "City", name: tour.city },
        provider: { "@type": "Organization", name: "Sweet & Salty Tours", url: "https://sweetandsaltytours.com/" },
      },
    ],
  };

  return (
    <>
      <main className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link> <span aria-hidden>/</span> <Link href={FOOD_TOURS_PATH}>Food Tours</Link> <span aria-hidden>/</span> <span aria-current="page">{tour.city}</span>
              </nav>
              <h1>{tour.title}</h1>
              <p>{tour.description}</p>
              <div className={styles.actions}><a className={styles.primary} href={FOOD_BOOKING_URL}>Request this tour <span aria-hidden>→</span></a></div>
            </div>
            <div className={styles.heroImage}>
              <Image src={tour.hero.src} alt={tour.hero.alt} fill priority sizes="(max-width: 760px) 95vw, 52vw" />
            </div>
          </div>
        </section>
        <div className={styles.detail}>
          <dl className={styles.facts}>
            <div><dt>Duration</dt><dd>{tour.duration}</dd></div>
            <div><dt>Typical start</dt><dd>{tour.schedule}</dd></div>
            <div><dt>Guide</dt><dd>Private guide in English</dd></div>
            <div><dt>Included</dt><dd>Food and drink tastings</dd></div>
          </dl>
          <section className={styles.experience} aria-labelledby="experience-title">
            <div>
              <h2 id="experience-title">What to Expect</h2>
              {tour.highlights.map((highlight) => (
                <div className={styles.highlight} key={highlight.title}>
                  <h3>{highlight.title}</h3><p>{highlight.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.detailImage}>
              <Image src={tour.detail.src} alt={tour.detail.alt} fill sizes="(max-width: 760px) 95vw, 40vw" />
            </div>
          </section>
          <section className={styles.planning} aria-labelledby="plan-food-tour">
            <h2 id="plan-food-tour">Plan Your {tour.city} Tasting</h2>
            {tour.planningNote ? <p>{tour.planningNote}</p> : <p>Share any dietary requirements when you request your dates so the team can discuss suitable tastings with you.</p>}
            <p>Choose this experience on the Sweet &amp; Salty booking form. Their team will confirm availability and the meeting details with you.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href={FOOD_BOOKING_URL}>Request this tour <span aria-hidden>→</span></a>
              <a className={styles.sourceLink} href={provider}>Tour by Sweet &amp; Salty Tours</a>
            </div>
          </section>
          <nav className={styles.related} aria-label="Related food tours">
            {related.map((item) => <Link key={item.slug} href={foodTourPath(item.slug)}>{item.title} <span aria-hidden>→</span></Link>)}
            <Link href={FOOD_TOURS_PATH}>All Food Tours in Italy <span aria-hidden>→</span></Link>
          </nav>
        </div>
      </main>
      <LuxuryFooterSection />
    </>
  );
}
