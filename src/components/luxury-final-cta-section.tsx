"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./luxury-final-cta-section.module.css";

const phoneDisplay = "06 687 8411";
const phoneHref = "+39066878411";
const emailAddress = "romeguideservices@gmail.com";
const conciergePillars = ["Guide autorizzate", "Itinerari su misura", "Supporto rapido"];

export default function LuxuryFinalCtaSection() {
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

  const handleCopy = async (value: string, field: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((current) => (current === field ? null : current));
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
            <p className={styles.eyebrow}>Private Concierge Finale</p>
            <p className={styles.liveBadge}>Disponibilita Live</p>
          </div>

          <h2 id="final-cta-heading" className={styles.heading}>
            Facciamo Insieme il Tuo
            <br />
            Viaggio Privato a Roma
          </h2>

          <p className={styles.copy}>
            Raccontaci date, interessi e ritmo ideale: il nostro team costruira un itinerario
            elegante e personale con guida privata autorizzata, logistica fluida e assistenza reale.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/#booking-calendar" className={styles.primaryCta}>
              Pianifica Ora il Tuo Tour
            </Link>
            <a href={`tel:${phoneHref}`} className={styles.secondaryCta}>
              Chiama Ora
            </a>
          </div>

          <ul className={styles.pillarRow} aria-label="Punti concierge">
            {conciergePillars.map((item) => (
              <li key={item} className={styles.pillarItem}>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.contactGrid} aria-label="Contatti rapidi">
            <article className={styles.contactCard}>
              <div className={styles.contactInfo}>
                <span className={styles.contactIcon} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.6 3.9c.5-.5 1.2-.7 1.9-.4l2.5 1.1c.8.4 1.2 1.3 1 2.2l-.4 2c-.1.5 0 1 .4 1.4l2 2c.4.4.9.5 1.4.4l2-.4c.9-.2 1.8.2 2.2 1l1.1 2.5c.3.7.1 1.4-.4 1.9l-1.2 1.2c-.8.8-2 1.1-3.1.8-2.8-.8-5.5-2.5-7.8-4.8s-4-5-4.8-7.8c-.3-1.1 0-2.3.8-3.1l1.2-1.2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Telefono Diretto</p>
                  <a href={`tel:${phoneHref}`} className={styles.contactValue}>
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <button
                type="button"
                className={styles.copyButton}
                onClick={() => handleCopy(phoneDisplay, "phone")}
              >
                {copiedField === "phone" ? "Copiato" : "Copia"}
              </button>
            </article>

            <article className={`${styles.contactCard} ${styles.emailCard}`}>
              <div className={styles.contactInfo}>
                <span className={styles.contactIcon} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3.8" y="6.2" width="16.4" height="11.6" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m4.8 7 7.2 6.1L19.2 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Email Concierge</p>
                  <a href={`mailto:${emailAddress}`} className={styles.contactValue}>
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                type="button"
                className={styles.copyButton}
                onClick={() => handleCopy(emailAddress, "email")}
              >
                {copiedField === "email" ? "Copiato" : "Copia"}
              </button>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
