import Image from "next/image";
import styles from "./tailor-made-experiences-section.module.css";

const features = [
  "Private Driver",
  "Tailor-Made Itineraries",
  "Food & Wine Tours",
  "Concierge Support",
] as const;

function FeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 14h11.5a2.5 2.5 0 0 0 2.5-2.5V9.8A1.8 1.8 0 0 0 16.2 8H11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.8 14h17.4M6.5 14v2M17.5 14v2M7.2 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM16.8 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TailorMadeExperiencesSection() {
  return (
    <section className={styles.sectionRoot} aria-labelledby="tailor-made-heading">
      <div className={styles.sectionContent}>
        <div className={styles.editorialStage}>
          <figure className={styles.mediaStage}>
            <Image
              src="/sbora.png"
              alt="Rome skyline at sunset viewed from a terrace"
              fill
              loading="eager"
              sizes="(max-width: 780px) 96vw, (max-width: 1120px) 92vw, 68vw"
              className={styles.photoImage}
            />
            <span className={styles.mediaOverlay} aria-hidden />
            <figcaption className={styles.mediaCaption}>Rome at Golden Hour</figcaption>
          </figure>

          <article className={styles.contentPanel}>
            <p className={styles.panelEyebrow}>Concierge Atelier</p>

            <h2 id="tailor-made-heading" className={styles.heading}>
              Tailor-Made Experiences,
              <br />
              <span>Beyond the Standard Tour</span>
            </h2>

            <p className={styles.description}>
              Experience Rome and Italy in your own unique way with our bespoke
              services designed around your interests, pace and desires.
            </p>

            <ul className={styles.featureGrid} aria-label="Tailor-made services">
              {features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                    <FeatureIcon />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#" className={styles.cta}>
              Customize Your Trip
            </a>
          </article>

          <aside className={styles.sideNotes} aria-hidden>
            <span>Private Journeys</span>
            <span>Roman Hospitality</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
