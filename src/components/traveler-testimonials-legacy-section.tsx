"use client";

import { useMemo, useState } from "react";
import styles from "./traveler-testimonials-legacy-section.module.css";

const googleMapsReviewsUrl = "https://share.google/o1WyhQOJTO9yGTJm4";

type ReviewItem = {
  id: string;
  name: string;
  initials: string;
  when: string;
  title: string;
  body: string[];
};

const testimonials: ReviewItem[] = [
  {
    id: "dennis-f-2025",
    name: "Dennis F",
    initials: "DF",
    when: "May 2025",
    title: "Outstanding Tour Guide Services",
    body: [
      "We have used Rome Guide Services before and have always been pleased with the knowledge level of their guides and their commitment to service.",
      "We had an all-day Rome tour including St. Peter's, the Sistine Chapel, and major churches in Rome. Carlo was personable, knowledgeable, and thorough throughout the tour.",
      "We highly recommend them. They made trip planning very easy and their services are top notch.",
    ],
  },
  {
    id: "traveling-family-2025",
    name: "TravelingFamily1364",
    initials: "TF",
    when: "Mar 2025",
    title: "Unforgettable Rome and Florence memories",
    body: [
      "Our Rome guide, Emma, led us across the Colosseum, Roman Forum, St. Peter's Basilica, and Vatican Museums with outstanding knowledge.",
      "In Florence, our guide Roberto was passionate and made the city come alive through buildings, art, and stories.",
    ],
  },
  {
    id: "kristin-b-2024",
    name: "kristin b",
    initials: "KB",
    when: "Jul 2024",
    title: "A family day in Rome not to be missed!!",
    body: [
      "Carlo gave our family a full-day highlights tour of Rome and delivered exactly what we hoped for.",
      "He kept everyone engaged, including the kids, and happily answered all our questions.",
    ],
  },
  {
    id: "kelli-s-2023",
    name: "Kelli S",
    initials: "KS",
    when: "Jun 2023",
    title: "Perfect family trip!",
    body: [
      "We used Rome Guide Services for a family trip to Venice, Florence, Cinque Terre, and Rome.",
      "Everything from hotels and train transfers to city guides felt smooth, responsive, and well handled.",
    ],
  },
  {
    id: "texas-pilot-2023",
    name: "TexasPilot78218",
    initials: "TP",
    when: "Jun 2023",
    title: "Perfection every time",
    body: [
      "Carlo has been my guide for multiple trips to Italy over many years.",
      "He and his team provide complete service, from guides and drivers to transfers and planning.",
    ],
  },
  {
    id: "michael-b-2023",
    name: "Michael B",
    initials: "MB",
    when: "May 2023",
    title: "A must use for trips to Rome and Florence",
    body: [
      "Rome Guide Services created an amazing spring break tour for our family in Rome and Florence.",
      "Their advice, planning, and attention to detail were incredibly on point.",
    ],
  },
  {
    id: "anne-h-2022",
    name: "Anne H",
    initials: "AH",
    when: "May 2022",
    title: "Amazing Private Tour",
    body: [
      "Carlo provided both a guide and driver, and it made a huge difference in how we saw Rome.",
      "We visited major sites, got outside central Rome too, and the whole experience was deeply memorable.",
    ],
  },
  {
    id: "edm-2022",
    name: "EDM",
    initials: "ED",
    when: "Jun 2022",
    title: "Fantastic guides",
    body: [
      "We chose Rome Guide Services after extensive research and they were the best and most flexible by a wide margin.",
      "Our tours were exceptional, and the guides in Rome, Chianti, and Florence were informed, engaging, and passionate.",
    ],
  },
  {
    id: "rich-v-2019",
    name: "Rich V",
    initials: "RV",
    when: "Jul 2019",
    title: "THE guide service in Italian cities!",
    body: [
      "We visited Rome, Florence, and Venice and every guide delivered strong local expertise.",
      "From Vatican and Forum to Renaissance Florence and Venice landmarks, the experience was clear, educational, and enjoyable.",
    ],
  },
  {
    id: "jocelyn-s-2019",
    name: "Jocelyn S",
    initials: "JS",
    when: "Oct 2019",
    title: "Highly Recommended",
    body: [
      "Rome Guide Services provided a very knowledgeable and insightful experience.",
      "Their itinerary flexibility was extraordinary, and both guides and drivers were magnificent.",
    ],
  },
  {
    id: "mary-r-2019",
    name: "Mary R",
    initials: "MR",
    when: "May 2019",
    title: "Fabulous service!",
    body: [
      "This was our second time using Rome Guide Services and we were blown away again.",
      "Our Colosseum, Forum, and Palatine Hill tour would not have been the same without our guide.",
    ],
  },
  {
    id: "mac-christina-2019",
    name: "Mac & Christina",
    initials: "MC",
    when: "Apr 2019",
    title: "Vatican and Ancient Rome Tour",
    body: [
      "We did Vatican City with one guide and Ancient Rome with Carlo the next day.",
      "We saw more in one day than we could have in three on our own, and the depth of knowledge was extraordinary.",
    ],
  },
  {
    id: "cowgirlmom-2019",
    name: "CowgirlmomYYC",
    initials: "CY",
    when: "Mar 2019",
    title: "Amazing family experience",
    body: [
      "Carlo tailored the tours to all our interests and kept our family engaged with informative storytelling.",
      "Planning was flexible and we truly appreciated how they accommodated last-minute changes.",
    ],
  },
  {
    id: "david-traveler-2018",
    name: "DavidTraveller2",
    initials: "DT",
    when: "Apr 2018",
    title: "Best guide in Rome",
    body: [
      "Our Colosseum and Forum tour with Carlo was excellent, informative, and well paced.",
      "His English was flawless and he was very sensitive to our preferences.",
    ],
  },
  {
    id: "liz-s-2017",
    name: "Liz S",
    initials: "LS",
    when: "Aug 2017",
    title: "Fabulous tour of The Vatican",
    body: [
      "Our private Vatican tour with Elisa was the best way to see the museums and Basilica.",
      "She was extremely knowledgeable and great at keeping us as comfortable as possible during a warm day.",
    ],
  },
  {
    id: "nc-mom-2017",
    name: "NCMom21",
    initials: "NC",
    when: "Jun 2017",
    title: "Fantastic guide",
    body: [
      "Carlo arranged our schedule so we could see everything we wanted and more in limited time.",
      "He knew how to avoid crowds and how to get around efficiently. One of the best guides we have had.",
    ],
  },
  {
    id: "ben-g-2017",
    name: "Ben G",
    initials: "BG",
    when: "Feb 2017",
    title: "Excellent Guide of the Pantheon and Colosseum",
    body: [
      "Our tour around the Colosseum and Pantheon with Francesca was wonderful.",
      "She was knowledgeable and smart, and we would definitely book this company again.",
    ],
  },
  {
    id: "karen-f-2016",
    name: "Karen F",
    initials: "KF",
    when: "Jul 2016",
    title: "The Best Rome Guide",
    body: [
      "We booked multiple Rome tours including Ancient Rome, Baroque Rome, and the Vatican.",
      "The team arranged everything smoothly and each guide was excellent.",
    ],
  },
];

function buildExcerpt(body: string[]) {
  const text = body.join(" ");
  if (text.length <= 185) {
    return text;
  }

  return `${text.slice(0, 182).trimEnd()}...`;
}

export default function TravelerTestimonialsLegacySection() {
  const [openReviewId, setOpenReviewId] = useState<string | null>(null);

  const openReview = useMemo(
    () => testimonials.find((review) => review.id === openReviewId) ?? null,
    [openReviewId]
  );

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
          <p className={styles.lead}>
            Real reviews from guests who booked our private tours in Rome and across Italy.
          </p>
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
                key={`${item.id}-${index}`}
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
                        <p className={styles.source}>Tripadvisor Review • {item.when}</p>
                      </div>
                    </div>

                    <p className={styles.rating}>
                      5/5 <span className={styles.ratingStar} aria-hidden>★</span>
                    </p>
                    <p className={styles.reviewTitle}>{item.title}</p>
                    <p className={styles.quote}>{buildExcerpt(item.body)}</p>
                    <button
                      type="button"
                      className={styles.readMoreButton}
                      onClick={() => setOpenReviewId(item.id)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {openReview ? (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="review-modal-title">
          <div className={styles.modalCard}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpenReviewId(null)}
              aria-label="Close review"
            >
              ×
            </button>

            <p className={styles.modalMeta}>{openReview.name} • Tripadvisor • {openReview.when}</p>
            <h3 id="review-modal-title" className={styles.modalTitle}>
              {openReview.title}
            </h3>

            <div className={styles.modalBody}>
              {openReview.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
