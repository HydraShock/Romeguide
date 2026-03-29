"use client";

import { useMemo, useState } from "react";
import styles from "./luxury-faq-section.module.css";

const faqItems = [
  {
    question: "Are your tours private?",
    answer:
      "Yes. Every experience is fully private, designed exclusively for your party with a licensed local guide.",
  },
  {
    question: "Can you customize the itinerary?",
    answer:
      "Absolutely. We tailor each itinerary around your interests, pace, preferred timing, and must-see priorities.",
  },
  {
    question: "Do you offer family-friendly tours?",
    answer:
      "Yes. We create family-friendly routes with flexible pacing, engaging storytelling, and comfort-focused logistics.",
  },
  {
    question: "Do you arrange day trips from Rome?",
    answer:
      "Yes. We organize private day trips from Rome with curated routes, seamless timing, and personalized guidance.",
  },
  {
    question: "Can you provide a private driver?",
    answer:
      "Yes. Private driver service can be included for transfers, full-day touring, and day-trip transportation.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking as early as possible, especially in high season, to secure preferred dates and guides.",
  },
] as const;

export default function LuxuryFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = useMemo(
    () => ({
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
    }),
    []
  );

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Everything You Need to Know</p>
          <h2 id="faq-heading" className={styles.heading}>
            Frequently Asked Questions
          </h2>
          <span className={styles.headingLine} aria-hidden />
          <p className={styles.subtext}>
            Clear answers to help you plan your private Rome experience with confidence.
          </p>
        </header>

        <div className={styles.faqZone}>
          <dl className={styles.faqList}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <div
                  key={item.question}
                  className={styles.faqItem}
                  data-open={isOpen ? "true" : "false"}
                >
                  <dt className={styles.questionRow}>
                    <button
                      id={questionId}
                      type="button"
                      className={styles.questionButton}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className={styles.questionText}>{item.question}</span>
                      <span className={styles.toggleIcon} aria-hidden />
                    </button>
                  </dt>

                  <dd
                    id={answerId}
                    className={styles.answerWrap}
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
