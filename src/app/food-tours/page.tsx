import Image from "next/image";
import Link from "next/link";
import LuxuryFooterSection from "@/components/luxury-footer-section";
import { FOOD_TOURS_PATH, foodTourCities, foodTourPath, foodTours } from "@/lib/food-tours";
import { getSiteUrl } from "@/lib/site-url";
import { foodTourMetadata } from "./metadata";
import styles from "./food-tours.module.css";

const title = "Private Food Tours in Italy";
const description = "Discover private food, wine and dessert tours in Rome, Florence and Venice with Sweet & Salty Tours, the sister company of Rome Guide Services.";
const featuredPhoto = foodTours[0].hero;

export const metadata = foodTourMetadata(`${title} | Rome, Florence & Venice`, description, FOOD_TOURS_PATH, featuredPhoto);

export default function FoodToursPage() {
  const site = getSiteUrl();
  const catalog = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: foodTours.map((tour, index) => ({
      "@type": "ListItem", position: index + 1, name: tour.title, url: `${site}${foodTourPath(tour.slug)}`,
    })),
  };

  return (
    <>
      <main className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalog) }} />
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link> <span aria-hidden>/</span> <span aria-current="page">Food Tours</span></nav>
              <h1>{title}</h1>
              <p>{description}</p>
              <nav className={styles.actions} aria-label="Food tours by city">
                {foodTourCities.map((city) => <a key={city} href={`#${city.toLowerCase()}`} className={styles.secondary}>{city}</a>)}
              </nav>
            </div>
            <div className={styles.heroImage}>
              <Image src={featuredPhoto.src} alt={featuredPhoto.alt} fill priority sizes="(max-width: 760px) 95vw, 52vw" />
            </div>
          </div>
        </section>
        <div className={styles.catalog}>
          {foodTourCities.map((city) => (
            <section key={city} id={city.toLowerCase()} className={styles.city} aria-labelledby={`${city.toLowerCase()}-food-heading`}>
              <h2 id={`${city.toLowerCase()}-food-heading`}>{city} Food Tours</h2>
              <div className={styles.cards}>
                {foodTours.filter((tour) => tour.city === city).map((tour) => (
                  <article className={styles.card} key={tour.slug}>
                    <Link href={foodTourPath(tour.slug)} className={styles.cardLink}>
                      <div className={styles.cardImage}>
                        <Image src={tour.hero.src} alt={tour.hero.alt} fill sizes="(max-width: 600px) 94vw, (max-width: 920px) 47vw, 32vw" />
                      </div>
                      <div className={styles.cardCopy}>
                        <span className={styles.duration}>{tour.duration}</span>
                        <h3>{tour.title}</h3>
                        <p>{tour.description}</p>
                        <span className={styles.cardAction}>Tour details <span aria-hidden>→</span></span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <LuxuryFooterSection />
    </>
  );
}
