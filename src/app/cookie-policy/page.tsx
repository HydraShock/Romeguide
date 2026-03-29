import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal-pages.module.css";

const PAGE_PATH = "/cookie-policy";
const CONTACT_EMAIL = "romeguideservices@gmail.com";
const LAST_UPDATED = "March 29, 2026";
const GDPR_URL = "https://eur-lex.europa.eu/eli/reg/2016/679/oj";
const GARANTE_COOKIE_URL = "https://www.garanteprivacy.it/temi/cookie";
const GARANTE_COOKIE_GUIDELINES_URL =
  "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Rome Guide Services explaining technical cookies and how to manage browser preferences.",
  alternates: {
    canonical: PAGE_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <article className={styles.panel}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.title}>Cookie Policy</h1>
            <p className={styles.meta}>Last updated: {LAST_UPDATED}.</p>
          </header>

          <section className={styles.section}>
            <h2>1. What Cookies Are</h2>
            <p>
              Cookies are small text files stored on your device to help websites operate, improve
              security, and remember basic technical preferences.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Cookies Used on This Site</h2>
            <p>
              At the time of this update, this website is configured to use only strictly necessary
              technical cookies required for secure delivery and core functionality.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Purpose</th>
                    <th>Consent Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Technical / Necessary</td>
                    <td>Core page delivery, traffic routing, and security operations.</td>
                    <td>No, where strictly necessary for service delivery.</td>
                  </tr>
                  <tr>
                    <td>Analytics (non-essential)</td>
                    <td>Not currently active on this website.</td>
                    <td>Yes, if enabled in the future and not anonymized/strictly necessary.</td>
                  </tr>
                  <tr>
                    <td>Marketing / Profiling</td>
                    <td>Not currently active on this website.</td>
                    <td>Yes, explicit prior consent required.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Third-Party Cookies</h2>
            <p>
              We currently do not enable third-party profiling or advertising cookies on this site.
              If we introduce third-party tracking technologies, this policy and cookie controls will
              be updated before activation.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. How to Manage Cookies</h2>
            <p>
              You can manage and delete cookies directly through your browser settings. Blocking
              strictly necessary cookies may affect website functionality.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Regulatory References</h2>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href={GDPR_URL} target="_blank" rel="noopener noreferrer">
                  Regulation (EU) 2016/679 (GDPR)
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href={GARANTE_COOKIE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garante Privacy - Cookie topic page
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href={GARANTE_COOKIE_GUIDELINES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garante Privacy - Cookie Guidelines (10 June 2021)
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Policy Updates and Contact</h2>
            <p>
              We may update this policy if technologies or legal requirements change. For questions,
              contact <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p>
              For broader data processing details, please read our{" "}
              <Link className={styles.link} href="/privacy-policy">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
