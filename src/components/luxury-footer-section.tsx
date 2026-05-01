import Link from "next/link";
import styles from "./luxury-footer-section.module.css";

const contactEmail = "romeguideservices@gmail.com";
const creatorInstagramUrl = "https://www.instagram.com/francesco.iaia_/";

const footerGroups = [
  {
    title: "Tours",
    links: [
      { label: "Day Trips", href: "/tours/day-trips-from-rome" },
      { label: "Tours in Italy", href: "/tours-in-italy" },
      { label: "Private Tours", href: "/tours" },
    ],
  },
  {
    title: "Experiences",
    links: [
      { label: "Ancient Rome", href: "/tours/ancient-rome" },
      { label: "Pompeii and Amalfi", href: "/tours/day-trips-from-rome/pompeii-amalfi-naples" },
      { label: "Venice Tour", href: "/tours-in-italy/private-venice-tour" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/who-we-are" },
      { label: "Contact", href: "/booking-contact" },
    ],
  },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/romeguideservices/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/RomeGuideServices/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function LuxuryFooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.brandStatement} aria-label="Brand statement">
          <p className={styles.brandName}>Rome Guide Services</p>
          <h2 className={styles.tagline}>Private Rome Tours, Made Around You</h2>
          <p className={styles.supportingLine}>
            Private tours in Rome, Vatican highlights, and day trips designed with local care.
          </p>
          <span className={styles.statementDivider} aria-hidden />
        </section>

        <section className={styles.navigationArea} aria-label="Footer navigation">
          <div className={styles.navGroups}>
            {footerGroups.map((group) => (
              <article key={group.title} className={styles.navGroup}>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <ul className={styles.linkList}>
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}`}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contactArea} aria-label="Contact and social">
          <div className={styles.contactList}>
            <a href={`mailto:${contactEmail}`} className={styles.contactLink}>
              {contactEmail}
            </a>
            <p className={styles.location}>Rome, Italy</p>
          </div>

          <div className={styles.socialRow}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>

        <section className={styles.bottomStrip} aria-label="Legal">
          <div className={styles.copyrightLine}>
            <p className={styles.copyright}>
              <span className={styles.copyrightBase}>{"\u00A9 2026 Rome Guide Services."}</span>
              <span className={styles.copyrightSeparator} aria-hidden>
                {"\u00B7"}
              </span>
              <span className={styles.createdByGold}>Created by Francesco Buttarazzi Iaia</span>
            </p>
            <a
              href={creatorInstagramUrl}
              className={styles.creatorInstagramButton}
              aria-label="Instagram profile of Francesco Buttarazzi Iaia"
              title="Follow Francesco Buttarazzi Iaia on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div className={styles.legalArea}>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className={styles.legalLink}>
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className={styles.legalLink}>
                Cookie Policy
              </Link>
              <a href="#cookie-preferences" className={styles.legalLink} data-open-cookie-preferences>
                Cookie Preferences
              </a>
            </div>
            <p className={styles.complianceNote}>
              GDPR (EU 2016/679) and cookie policy aligned with the Italian Data Protection
              Authority guidelines of June 10, 2021.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}

