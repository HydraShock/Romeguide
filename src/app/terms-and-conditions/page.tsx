import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal-pages.module.css";

const PAGE_PATH = "/terms-and-conditions";
const CONTACT_EMAIL = "romeguideservices@gmail.com";
const CONTACT_PHONE_DISPLAY = "06 687 8411";
const CONTACT_PHONE_HREF = "+39066878411";
const LAST_UPDATED = "March 29, 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing the use of Rome Guide Services website and private tour booking inquiries.",
  alternates: {
    canonical: PAGE_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <article className={styles.panel}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.title}>Terms & Conditions</h1>
            <p className={styles.meta}>Last updated: {LAST_UPDATED}.</p>
          </header>

          <section className={styles.section}>
            <h2>1. Scope</h2>
            <p>
              These Terms govern access to and use of this website and all inquiry requests submitted
              to Rome Guide Services for private tours in Rome, day trips, and Italy itineraries.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Nature of the Service</h2>
            <ul className={styles.list}>
              <li>This website provides information about private touring services.</li>
              <li>
                Sending an inquiry does not automatically create a binding booking contract.
              </li>
              <li>
                A booking is considered confirmed only after written confirmation from our team and,
                where required, receipt of any requested deposit/payment.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Quotes, Pricing, and Payments</h2>
            <p>
              Prices and inclusions are provided in written proposals. Unless otherwise stated,
              prices are in EUR. Tickets, third-party suppliers, transfers, and special requests may
              affect final pricing.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Changes and Cancellations</h2>
            <p>
              Changes requested by clients are subject to availability and may involve price
              adjustments. Cancellation and refund conditions are specified in each confirmed
              booking proposal and may vary depending on tickets and third-party services already
              secured.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Client Responsibilities</h2>
            <ul className={styles.list}>
              <li>Provide accurate booking and traveler information.</li>
              <li>Arrive on time at agreed meeting points.</li>
              <li>Respect local regulations, cultural sites, and guide safety instructions.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Third-Party Services</h2>
            <p>
              Some itinerary components may involve third-party providers (for example transport,
              entrances, or external suppliers). Their own terms may apply in addition to these Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Liability</h2>
            <p>
              To the maximum extent permitted by law, Rome Guide Services is not liable for indirect
              losses, events outside reasonable control, or disruptions caused by third-party actions,
              strikes, weather, government measures, or force majeure events.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Intellectual Property</h2>
            <p>
              Website text, visual assets, and branding are protected by applicable intellectual
              property laws and may not be copied, republished, or reused without prior written consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Governing Law</h2>
            <p>
              These Terms are governed by Italian law. Mandatory consumer rights under applicable EU
              and national law remain unaffected.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact</h2>
            <ul className={styles.list}>
              <li>
                Email: <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                Phone: <a className={styles.link} href={`tel:${CONTACT_PHONE_HREF}`}>{CONTACT_PHONE_DISPLAY}</a>
              </li>
              <li>Company: Rome Guide Services, Rome, Italy</li>
            </ul>
            <p>
              Privacy and cookie processing details are available in our{" "}
              <Link className={styles.link} href="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className={styles.link} href="/cookie-policy">
                Cookie Policy
              </Link>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
