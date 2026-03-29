import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal-pages.module.css";

const PAGE_PATH = "/privacy-policy";
const CONTACT_EMAIL = "romeguideservices@gmail.com";
const CONTACT_PHONE_DISPLAY = "06 687 8411";
const CONTACT_PHONE_HREF = "+39066878411";
const LAST_UPDATED = "March 29, 2026";
const GARANTE_RIGHTS_URL =
  "https://www.garanteprivacy.it/home/diritti/come-agire-per-tutelare-i-tuoi-dati-personali";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Rome Guide Services covering personal data processed through inquiry forms and booking requests.",
  alternates: {
    canonical: PAGE_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <article className={styles.panel}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.meta}>
              Controller: Rome Guide Services, Rome, Italy. Last updated: {LAST_UPDATED}.
            </p>
          </header>

          <section className={styles.section}>
            <h2>1. Who We Are</h2>
            <p>
              Rome Guide Services (we/us) is the data controller for personal data collected
              through this website and booking inquiry flows.
            </p>
            <ul className={styles.list}>
              <li>
                Email: <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                Phone: <a className={styles.link} href={`tel:${CONTACT_PHONE_HREF}`}>{CONTACT_PHONE_DISPLAY}</a>
              </li>
              <li>Location: Rome, Italy</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. What Data We Process</h2>
            <p>When you contact us, we may process:</p>
            <ul className={styles.list}>
              <li>Identity and contact data (name, email, phone/WhatsApp).</li>
              <li>Travel planning details (dates, guests, interests, language, selected tour category).</li>
              <li>Message content you submit in booking and inquiry forms.</li>
              <li>Technical data required to deliver and secure the site (for example IP/log data from hosting).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Purposes and Legal Bases</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Legal Basis</th>
                    <th>Main Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Respond to inquiries and prepare tailored tour proposals.</td>
                    <td>Pre-contractual steps / contract performance (GDPR Art. 6(1)(b)).</td>
                    <td>Name, contact details, travel preferences, message.</td>
                  </tr>
                  <tr>
                    <td>Comply with legal, accounting, and tax obligations.</td>
                    <td>Legal obligation (GDPR Art. 6(1)(c)).</td>
                    <td>Booking and invoicing information where applicable.</td>
                  </tr>
                  <tr>
                    <td>Protect site security, prevent abuse, and maintain service reliability.</td>
                    <td>Legitimate interest (GDPR Art. 6(1)(f)).</td>
                    <td>Technical and log-related data.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Data Retention</h2>
            <ul className={styles.list}>
              <li>Inquiry and planning correspondence: typically up to 24 months from last contact.</li>
              <li>Confirmed booking/administrative data: for the period required by applicable law.</li>
              <li>Technical/security logs: retained only as needed for security and operations.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Recipients and Transfers</h2>
            <p>
              Data may be processed by trusted providers that support hosting, email, and technical
              operations. If providers are located outside the EEA, we rely on recognized safeguards
              required by GDPR.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights</h2>
            <p>
              You may request access, rectification, erasure, restriction, portability, and object
              to processing where applicable. You may also lodge a complaint with the Italian Data
              Protection Authority (Garante per la protezione dei dati personali).
            </p>
            <p>
              To exercise your rights, contact us at{" "}
              <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p>
              Official rights and complaint channel:{" "}
              <a className={styles.link} href={GARANTE_RIGHTS_URL} target="_blank" rel="noopener noreferrer">
                Garante Privacy - How to protect your data rights
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Cookies and Tracking</h2>
            <p>
              For details on cookies and similar technologies, see our{" "}
              <Link className={styles.link} href="/cookie-policy">
                Cookie Policy
              </Link>
              .
            </p>
            <p className={styles.notice}>
              If we introduce non-essential analytics or marketing tools in the future, this policy
              and the cookie controls will be updated accordingly.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
