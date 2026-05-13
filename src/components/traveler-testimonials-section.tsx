import styles from "./traveler-testimonials-section.module.css";

const testimonials = [
  {
    name: "Ann K",
    initials: "A",
    when: "3 years ago",
    quote:
      "What an amazing tour company. We arranged at the very last minute, and Carlo pulled everything together for us. Our trip to the Colosseum and Forum was smooth and unforgettable.",
  },
  {
    name: "Kelli Stromski",
    initials: "K",
    when: "2 years ago",
    quote:
      "We used Rome Guide Services to plan our family trip to Venice, Florence, Cinque Terre, and Rome. Every detail felt thoughtful and easy, even with complex international travel.",
  },
  {
    name: "Cindy Evans",
    initials: "C",
    when: "6 years ago",
    quote:
      "We had six different priorities and just one day in Rome. Paola beautifully accommodated every request and gave us a day that felt personal, smooth, and perfectly paced.",
  },
  {
    name: "Liz Stone",
    initials: "L",
    when: "8 years ago",
    quote:
      "We had a private Vatican tour with Elisa, and it was the best way to see the museums and Basilica. A focused four-hour tour that still felt rich and relaxed.",
  },
  {
    name: "cy chyfer",
    initials: "CY",
    when: "8 years ago",
    quote:
      "Incredible experience. In-depth and wonderfully educational. Carlo guided us around the crowds and gave us access to moments we could never have arranged on our own.",
  },
  {
    name: "Jane Staugas",
    initials: "J",
    when: "9 years ago",
    quote:
      "Carlo was our guide and David our driver. We saw far more in two days than we thought possible, while everything still felt calm, natural, and well-organized.",
  },
] as const;

export default function TravelerTestimonialsSection() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className={styles.section} aria-labelledby="traveler-testimonials-heading">
      <div className={styles.inner}>
        <header className={styles.headerBlock}>
          <h2 id="traveler-testimonials-heading" className={styles.heading}>
            Traveler Testimonials
          </h2>
          <div className={styles.headingRule} aria-hidden>
            <span />
          </div>
          <p className={styles.lead}>
            Discover what our guests say about their private experiences in Rome and
            beyond.
          </p>
        </header>

        <div className={styles.carouselViewport}>
          <div className={styles.carouselTrack}>
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className={styles.card}
                aria-hidden={index >= testimonials.length ? true : undefined}
              >
                <div className={styles.cardInner}>
                  <span className={styles.cardTexture} aria-hidden />
                  <span className={styles.cardShade} aria-hidden />

                  <div className={styles.cardTop}>
                    <span className={styles.avatar}>{item.initials}</span>
                    <div>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.meta}>Google Review</p>
                    </div>
                  </div>

                  <p className={styles.rating}>
                    5/5 <span className={styles.ratingStar} aria-hidden>★</span>
                  </p>
                  <p className={styles.quote}>{item.quote}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
