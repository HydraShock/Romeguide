import Image from "next/image";
import styles from "./vertical-tour-card.module.css";

type VerticalTourCardProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  imagePosition?: string;
  monuments: readonly string[];
  href?: string;
  anchorId?: string;
  ctaLabel?: string;
  variant?: "featured" | "compact";
};

export default function VerticalTourCard({
  label,
  title,
  description,
  image,
  alt,
  imagePosition = "50% 50%",
  monuments,
  href = "#",
  anchorId,
  ctaLabel = "View Tour",
  variant = "compact",
}: VerticalTourCardProps) {
  const isFeatured = variant === "featured";
  const imageSizes = isFeatured
    ? "(max-width: 760px) 92vw, (max-width: 1080px) 48vw, 44vw"
    : "(max-width: 460px) 92vw, (max-width: 760px) 46vw, (max-width: 1080px) 48vw, 23vw";

  return (
    <article
      id={anchorId}
      className={`${styles.verticalCard} ${
        isFeatured ? styles.featuredCard : styles.compactCard
      }`}
    >
      <div className={`${styles.media} ${isFeatured ? styles.featuredMedia : styles.compactMedia}`}>
        <Image
          src={image}
          alt={alt}
          fill
          quality={95}
          sizes={imageSizes}
          className={styles.image}
          style={{ objectPosition: imagePosition }}
        />
        <span className={styles.mediaShade} aria-hidden />
        <span
          className={`${styles.fade} ${isFeatured ? styles.featuredFade : styles.compactFade}`}
          aria-hidden
        />
      </div>

      <div className={`${styles.body} ${isFeatured ? styles.featuredBody : styles.compactBody}`}>
        <p className={styles.kicker}>{label}</p>
        <h4 className={`${styles.title} ${isFeatured ? styles.featuredTitle : styles.compactTitle}`}>
          {title}
        </h4>
        <p className={styles.description}>{description}</p>

        <div className={styles.monumentsSection}>
          <p className={styles.monumentsLabel}>Monumenti iconici</p>
          <div className={styles.monumentsList}>
            {monuments.map((monument) => (
              <span key={monument} className={styles.monumentChip}>
                {monument}
              </span>
            ))}
          </div>
        </div>

        <a href={href} className={`${styles.cta} ${isFeatured ? styles.featuredCta : styles.compactCta}`}>
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
