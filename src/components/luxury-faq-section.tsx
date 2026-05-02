"use client";

import { useMemo, useState } from "react";
import styles from "./luxury-faq-section.module.css";

const faqItems = [
  {
    question: "Are your tours private?",
    answer:
      "Yes. Every tour is fully private, created just for your group with a licensed local guide.",
  },
  {
    question: "Can you customize our itinerary?",
    answer:
      "Absolutely. We shape each day around your interests, preferred pace, and must-see places.",
  },
  {
    question: "Do you offer Vatican private tours?",
    answer:
      "Yes. Our Vatican private tours include the Museums, Sistine Chapel, and St. Peter's with timing that fits your group.",
  },
  {
    question: "Do you offer family-friendly tours?",
    answer:
      "Yes. We design family-friendly routes with flexible timing, engaging storytelling, and practical comfort.",
  },
  {
    question: "Do you arrange day trips from Rome?",
    answer:
      "Yes. We organize private day trips from Rome with easy logistics and friendly local guidance.",
  },
  {
    question: "Can you include a private driver?",
    answer:
      "Yes. We can include a private driver for transfers, full-day touring, and day trips from Rome.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "The earlier, the better, especially in high season, so we can reserve your preferred dates and guide.",
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
          <p className={styles.eyebrow}>Plan with Ease</p>
          <h2 id="faq-heading" className={styles.heading}>
            Frequently Asked Questions
          </h2>
          <span className={styles.headingLine} aria-hidden />
          <p className={styles.subtext}>
            Simple answers to help you plan private tours in Rome with confidence.
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
