import Image from "next/image";
import styles from "./wobble-card-demo.module.css";

const PLACEHOLDER_IMAGE = "/sbora.png";

export default function WobbleCardDemo() {
  return (
    <div className={styles.editorialGrid}>
      <div className={styles.topRow}>
        <article className={`${styles.card} ${styles.mediumCard}`}>
          <div className={`${styles.imagePanel} ${styles.imagePanelMedium}`}>
            <Image
              src={PLACEHOLDER_IMAGE}
              alt="Ancient Rome at sunset"
              fill
              sizes="(max-width: 860px) 100vw, (max-width: 1280px) 50vw, 36vw"
              className={`${styles.cardImage} ${styles.ancientImage}`}
            />
            <span className={styles.imageFade} aria-hidden />
          </div>

          <div className={styles.cardCopy}>
            <h3 className={styles.cardTitle}>Ancient Rome Tour</h3>
            <p className={styles.cardDescription}>
              Explore the Colosseum, Roman Forum, and the city&apos;s ancient
              heart with licensed local guides.
            </p>
            <a href="#" className={styles.cardCta}>
              View Tour
            </a>
          </div>
        </article>

        <article className={`${styles.card} ${styles.mediumCard}`}>
          <div className={`${styles.imagePanel} ${styles.imagePanelMedium}`}>
            <Image
              src="/card-vatican.png"
              alt="Vatican skyline at sunset"
              fill
              sizes="(max-width: 860px) 100vw, (max-width: 1280px) 50vw, 36vw"
              className={`${styles.cardImage} ${styles.vaticanImage}`}
            />
            <span className={styles.imageFade} aria-hidden />
          </div>

          <div className={styles.cardCopy}>
            <h3 className={styles.cardTitle}>Vatican Tour</h3>
            <p className={styles.cardDescription}>
              Discover the Vatican Museums, Sistine Chapel, and St. Peter&apos;s
              Basilica with a private guide.
            </p>
            <a href="#" className={styles.cardCta}>
              View Tour
            </a>
          </div>
        </article>
      </div>

      <article className={`${styles.card} ${styles.featuredCard}`}>
        <div className={`${styles.imagePanel} ${styles.imagePanelFeatured}`}>
          <Image
            src="/card-vatican.png"
            alt="Vatican skyline for private tours"
            fill
            sizes="(max-width: 860px) 100vw, 48vw"
            className={`${styles.cardImage} ${styles.featuredVaticanImage}`}
          />
          <span className={styles.imageFade} aria-hidden />
        </div>

        <div className={styles.imagePanelSecondary} aria-hidden>
          <Image
            src={PLACEHOLDER_IMAGE}
            alt=""
            fill
            sizes="(max-width: 860px) 100vw, 24vw"
            className={`${styles.cardImage} ${styles.featuredColosseumImage}`}
          />
        </div>

        <div className={`${styles.cardCopy} ${styles.featuredCopy}`}>
          <h3 className={`${styles.cardTitle} ${styles.featuredTitle}`}>
            Private Rome Tours, Crafted Around You
          </h3>
          <p className={`${styles.cardDescription} ${styles.featuredDescription}`}>
            Tailor-made itineraries designed around your interests, pace, and
            travel style.
          </p>
          <div className={styles.featuredActions}>
            <a href="#" className={styles.cardCta}>
              Explore Tours
            </a>
            <span className={styles.metaChip}>Tailor-Made</span>
            <span className={styles.metaChip}>Licensed Guides</span>
            <span className={styles.metaChip}>Family Friendly</span>
          </div>
        </div>
      </article>
    </div>
  );
}
