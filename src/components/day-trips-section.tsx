import Image from "next/image";
import styles from "./day-trips-section.module.css";

const featuredTrip = {
  title: "Pompeii / Amalfi / Naples",
  image: "/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg",
  alt: "Amalfi coast cliffs and sea for a day trip from Rome",
  href: "/tours/day-trips-from-rome",
  objectPosition: "50% 60%",
};

const topTrips = [
  {
    title: "Ostia Antica",
    image: "/images/tours/day-trips/ostia-antica/hero-ostia-antica-day-trip-from-rome.jpg",
    alt: "Ancient ruins for an Ostia Antica day trip",
    href: "/tours/day-trips-from-rome/ostia-antica",
    objectPosition: "56% 52%",
  },
  {
    title: "Orvieto / Umbria",
    image: "/images/tours/day-trips/orvieto-umbria/hero-orvieto-umbria-day-trip-from-rome.jpg",
    alt: "Orvieto cathedral and medieval architecture in Umbria",
    href: "/tours/day-trips-from-rome/orvieto-umbria",
    objectPosition: "70% 45%",
  },
  {
    title: "Cerveteri",
    subtitle: "& The Etruscans",
    image: "/images/tours/day-trips/cerveteri-etruscans/hero-cerveteri-etruscan-day-trip-from-rome.jpg",
    alt: "Archaeological landscape representing Etruscan heritage",
    href: "/tours/day-trips-from-rome/cerveteri-etruscans",
    objectPosition: "52% 52%",
  },
] as const;

const bottomTrips = [
  {
    title: "Roman Hill Towns",
    image: "/images/tours/day-trips/roman-hill-towns/hero-roman-hill-towns-day-trip-from-rome.jpg",
    alt: "Historic hill town architecture near Rome",
    href: "/tours/day-trips-from-rome/roman-hill-towns",
    objectPosition: "58% 44%",
  },
  {
    title: "Tivoli",
    image: "/images/tours/day-trips/tivoli/hero-tivoli-villas-day-trip-from-rome.jpg",
    alt: "Classical columns and gardens in Tivoli",
    href: "/tours/day-trips-from-rome/tivoli",
    objectPosition: "56% 50%",
  },
] as const;

function TripCard({
  title,
  subtitle,
  image,
  alt,
  href,
  objectPosition,
  large = false,
}: {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  href: string;
  objectPosition?: string;
  large?: boolean;
}) {
  return (
    <article className={`${styles.tripCard} ${large ? styles.featuredCard : styles.standardCard}`}>
      <Image
        src={image}
        alt={alt}
        fill
        loading="eager"
        sizes={
          large
            ? "(max-width: 1180px) 100vw, 58vw"
            : "(max-width: 760px) 100vw, (max-width: 1180px) 48vw, 22vw"
        }
        className={styles.cardImage}
        style={objectPosition ? { objectPosition } : undefined}
      />
      <span className={styles.imageShade} aria-hidden />
      <div className={styles.cardContent}>
        <h3 className={large ? styles.featuredTitle : styles.cardTitle}>
          {title}
          {subtitle ? (
            <>
              <br />
              <em>{subtitle}</em>
            </>
          ) : null}
        </h3>
        <a href={href} className={`${styles.cta} ${large ? styles.featuredCta : ""}`}>
          {large ? "Explore Day Trips from Rome" : "Explore Day Trip"}
        </a>
      </div>
    </article>
  );
}

export default function DayTripsSection() {
  return (
    <section className={styles.section} aria-labelledby="day-trips-heading">
      <div className={styles.inner}>
        <header className={styles.headerBlock}>
          <h2 id="day-trips-heading" className={styles.heading}>
            Day Trips from Rome
          </h2>
          <div className={styles.headingRule} aria-hidden>
            <span />
          </div>
          <p className={styles.lead}>
            Explore curated private escapes beyond the city, with seamless departures from
            Rome, chauffeur-led comfort, and elegant full-day pacing.
          </p>
        </header>

        <div className={styles.layout}>
          <TripCard {...featuredTrip} large />

          <div className={styles.rightColumn}>
            <div className={styles.topGrid}>
              {topTrips.map((trip) => (
                <TripCard key={trip.title} {...trip} />
              ))}
            </div>

            <div className={styles.bottomGrid}>
              {bottomTrips.map((trip) => (
                <TripCard key={trip.title} {...trip} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
