"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./luxury-final-cta-section.module.css";

const emailAddress = "romeguideservices@gmail.com";
const planningHighlights = ["Licensed local guides", "Private plans built around you", "Friendly, quick replies"];

export default function LuxuryFinalCtaSection() {
  const [copiedField, setCopiedField] = useState<"email" | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField("email");
      window.setTimeout(() => {
        setCopiedField((current) => (current === "email" ? null : current));
      }, 1600);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="final-cta-heading">
      <div className={styles.inner}>
        <article className={styles.panel}>
          <span className={styles.panelTexture} aria-hidden />
          <div className={styles.headerRow}>
            <p className={styles.eyebrow}>Ready When You Are</p>
            <p className={styles.liveBadge}>Real Human Reply</p>
          </div>

          <h2 id="final-cta-heading" className={styles.heading}>
            Let&apos;s Plan Your Trip Together
          </h2>

          <p className={styles.copy}>
            Tell us your dates, interests, and ideal pace. We&apos;ll send back a
            personal plan that feels easy and right for your trip.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/#booking-calendar" className={styles.primaryCta}>
              Start Planning
            </Link>
            <a href={`mailto:${emailAddress}`} className={styles.secondaryCta}>
              Email Our Team
            </a>
          </div>

          <ul className={styles.pillarRow} aria-label="Planning highlights">
            {planningHighlights.map((item) => (
              <li key={item} className={styles.pillarItem}>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.contactGrid} aria-label="Quick contacts">
            <article className={`${styles.contactCard} ${styles.emailCard}`}>
              <div className={styles.contactInfo}>
                <span className={styles.contactIcon} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3.8" y="6.2" width="16.4" height="11.6" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m4.8 7 7.2 6.1L19.2 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Email Us Directly</p>
                  <a href={`mailto:${emailAddress}`} className={styles.contactValue}>
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                type="button"
                className={styles.copyButton}
                onClick={() => handleCopy(emailAddress)}
              >
                {copiedField === "email" ? "Copied" : "Copy"}
              </button>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
