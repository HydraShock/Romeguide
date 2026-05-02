import styles from "./traveler-testimonials-legacy-section.module.css";

const googleMapsReviewsUrl = "https://share.google/o1WyhQOJTO9yGTJm4";

const testimonials = [
  {
    name: "Ann K",
    initials: "A",
    when: "3 years ago",
    quote:
      "What an amazing team. We booked at the very last minute, and Carlo made everything feel easy. Our Colosseum and Forum day was fantastic.",
  },
  {
    name: "Kelli Stromski",
    initials: "K",
    when: "2 years ago",
    quote:
      "We used Rome Guide Services for our family trip to Venice, Florence, Cinque Terre, and Rome. Everything felt smooth and simple, even with a complex itinerary.",
  },
  {
    name: "Cindy Evans",
    initials: "C",
    when: "6 years ago",
    quote:
      "We had six different priorities and only one day in Rome. Paola accommodated everything beautifully and gave us an experience that felt completely personalized.",
  },
  {
    name: "Liz Stone",
    initials: "L",
    when: "8 years ago",
    quote:
      "Our private Vatican tour with Elisa was the best way to see the museums and Basilica. Insightful, well paced, and perfect for our group.",
  },
  {
    name: "cy chyfer",
    initials: "CY",
    when: "8 years ago",
    quote:
      "Incredible experience, in-depth and wonderfully educational. Carlo guided us around the crowds and made the day feel effortless and special.",
  },
  {
    name: "Jane Staugas",
    initials: "J",
    when: "9 years ago",
    quote:
      "Carlo was our guide and David our driver. We saw much more in two days than we expected, without ever feeling rushed.",
  },
  {
    name: "Wang Qi",
    initials: "WQ",
    when: "10 years ago",
    quote:
      "Excellent private service and outstanding local knowledge. The day felt smooth, meaningful, and full of highlights.",
  },
  {
    name: "Germano Ciardi",
    initials: "G",
    when: "2 years ago",
    quote:
      "Professional team, smooth organization, and a wonderful experience from start to finish. Highly recommended.",
  },
] as const;

export default function TravelerTestimonialsLegacySection() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className={styles.section} aria-labelledby="traveler-testimonials-legacy-heading">
      <div className={styles.inner}>
        <header className={styles.headerBlock}>
          <h2 id="traveler-testimonials-legacy-heading" className={styles.heading}>
            What Travelers Say
          </h2>
          <div className={styles.headingRule} aria-hidden>
            <span />
          </div>
          <p className={styles.lead}>Real reviews from guests who joined our private tours in Rome.</p>
          <div className={styles.ctaRow}>
            <a
              href={googleMapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsButton}
            >
              View on Google Maps
            </a>
          </div>
        </header>

        <div className={styles.carouselViewport}>
          <div className={styles.carouselTrack}>
            {items.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className={styles.card}
                aria-hidden={index >= testimonials.length ? true : undefined}
              >
                <div className={styles.cardInner}>
                  <span className={styles.cardTexture} aria-hidden />
                  <span className={styles.cardShade} aria-hidden />
                  <span className={styles.glowQuote} aria-hidden>
                    &ldquo;&rdquo;
                  </span>

                  <div className={styles.cardBody}>
                    <div className={styles.cardTop}>
                      <span className={styles.avatarPlaceholder} aria-hidden>
                        <span>{item.initials}</span>
                      </span>
                      <div className={styles.clientMeta}>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.source}>Google Review</p>
                      </div>
                    </div>

                    <p className={styles.rating}>5/5</p>
                    <p className={styles.quote}>{item.quote}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

