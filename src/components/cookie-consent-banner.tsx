"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./cookie-consent-banner.module.css";

type ConsentSource = "accept_all" | "reject_optional" | "custom";

type StoredPreferences = {
  version: string;
  updatedAt: string;
  source: ConsentSource;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "rgs_cookie_preferences_v1";
const COOKIE_KEY = "rgs_cookie_consent_v1";
const CONSENT_VERSION = "2026-03-29";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

function parsePreferences(raw: string | null): StoredPreferences | null {
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<StoredPreferences>;

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.marketing !== "boolean" ||
      parsed.necessary !== true ||
      typeof parsed.updatedAt !== "string" ||
      typeof parsed.version !== "string"
    ) {
      return null;
    }

    const source: ConsentSource =
      parsed.source === "accept_all" || parsed.source === "reject_optional" || parsed.source === "custom"
        ? parsed.source
        : "custom";

    return {
      version: parsed.version,
      updatedAt: parsed.updatedAt,
      source,
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
    };
  } catch {
    return null;
  }
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const parts = document.cookie.split(";").map((part) => part.trim());
  for (const part of parts) {
    if (!part.startsWith(`${name}=`)) {
      continue;
    }

    return part.slice(name.length + 1);
  }

  return null;
}

function makePreferences(source: ConsentSource, analytics: boolean, marketing: boolean): StoredPreferences {
  return {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    source,
    necessary: true,
    analytics,
    marketing,
  };
}

function writePreferences(preferences: StoredPreferences) {
  const serialized = JSON.stringify(preferences);
  localStorage.setItem(STORAGE_KEY, serialized);
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(serialized)}; Max-Age=${ONE_YEAR_SECONDS}; Path=/; SameSite=Lax`;

  document.documentElement.setAttribute("data-cookie-analytics", preferences.analytics ? "granted" : "denied");
  document.documentElement.setAttribute("data-cookie-marketing", preferences.marketing ? "granted" : "denied");

  window.dispatchEvent(
    new CustomEvent("rgs:cookie-consent-updated", {
      detail: preferences,
    }),
  );
}

export default function CookieConsentBanner() {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [savedPreferences, setSavedPreferences] = useState<StoredPreferences | null>(null);
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  const [draftMarketing, setDraftMarketing] = useState(false);

  useEffect(() => {
    const fromStorage = parsePreferences(localStorage.getItem(STORAGE_KEY));
    const fromCookie = parsePreferences(
      (() => {
        const cookieValue = readCookie(COOKIE_KEY);
        return cookieValue ? decodeURIComponent(cookieValue) : null;
      })(),
    );

    const initial = fromStorage ?? fromCookie;

    if (initial) {
      setSavedPreferences(initial);
      setDraftAnalytics(initial.analytics);
      setDraftMarketing(initial.marketing);
      setIsVisible(false);

      document.documentElement.setAttribute("data-cookie-analytics", initial.analytics ? "granted" : "denied");
      document.documentElement.setAttribute("data-cookie-marketing", initial.marketing ? "granted" : "denied");
    } else {
      setIsVisible(true);
      setIsCustomizeOpen(false);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    const onOpenPreferences = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest("[data-open-cookie-preferences]");
      if (!trigger) {
        return;
      }

      event.preventDefault();

      if (savedPreferences) {
        setDraftAnalytics(savedPreferences.analytics);
        setDraftMarketing(savedPreferences.marketing);
      }

      setIsVisible(true);
      setIsCustomizeOpen(true);
    };

    document.addEventListener("click", onOpenPreferences);

    return () => {
      document.removeEventListener("click", onOpenPreferences);
    };
  }, [savedPreferences]);

  const statusLabel = useMemo(() => {
    if (!savedPreferences) {
      return "No choice recorded yet";
    }

    if (savedPreferences.analytics && savedPreferences.marketing) {
      return "All optional cookies accepted";
    }

    if (!savedPreferences.analytics && !savedPreferences.marketing) {
      return "Only necessary cookies enabled";
    }

    return "Custom cookie preferences saved";
  }, [savedPreferences]);

  const saveAndClose = (preferences: StoredPreferences) => {
    writePreferences(preferences);
    setSavedPreferences(preferences);
    setDraftAnalytics(preferences.analytics);
    setDraftMarketing(preferences.marketing);
    setIsVisible(false);
    setIsCustomizeOpen(false);
  };

  const closeBanner = () => {
    if (savedPreferences) {
      setDraftAnalytics(savedPreferences.analytics);
      setDraftMarketing(savedPreferences.marketing);
      setIsVisible(false);
      setIsCustomizeOpen(false);
      return;
    }

    saveAndClose(makePreferences("reject_optional", false, false));
  };

  const acceptAll = () => {
    saveAndClose(makePreferences("accept_all", true, true));
  };

  const rejectOptional = () => {
    saveAndClose(makePreferences("reject_optional", false, false));
  };

  const saveCustom = () => {
    saveAndClose(makePreferences("custom", draftAnalytics, draftMarketing));
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (savedPreferences) {
          setDraftAnalytics(savedPreferences.analytics);
          setDraftMarketing(savedPreferences.marketing);
          setIsVisible(false);
          setIsCustomizeOpen(false);
          return;
        }

        saveAndClose(makePreferences("reject_optional", false, false));
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isVisible, savedPreferences]);

  if (!isReady || !isVisible) {
    return null;
  }

  return (
    <aside className={styles.wrapper} aria-live="polite" id="cookie-preferences">
      <section className={styles.panel} role="dialog" aria-label="Cookie preferences">
        <button
          type="button"
          className={styles.closeButton}
          onClick={closeBanner}
          aria-label="Close cookie preferences"
        >
          ×
        </button>
        <p className={styles.eyebrow}>Cookie Preferences</p>
        <h2 className={styles.title}>Privacy First, Better Experience</h2>
        <p className={styles.bodyText}>
          We use strictly necessary cookies for secure navigation and booking. Optional analytics and
          marketing cookies are off by default and require your consent.
        </p>

        {!isCustomizeOpen ? (
          <>
            <p className={styles.status}>
              <strong>Status:</strong> {statusLabel}
            </p>
            <div className={styles.actionsRow}>
              <button type="button" className={styles.choiceButton} onClick={rejectOptional}>
                Reject Optional
              </button>
              <button type="button" className={styles.choiceButton} onClick={() => setIsCustomizeOpen(true)}>
                Customize
              </button>
              <button type="button" className={styles.choiceButton} onClick={acceptAll}>
                Accept All
              </button>
            </div>
            <p className={styles.closeNote}>Closing with × keeps only necessary cookies active.</p>
          </>
        ) : (
          <>
            <div className={styles.preferenceList}>
              <div className={styles.preferenceRow}>
                <div>
                  <p className={styles.prefTitle}>Necessary Cookies</p>
                  <p className={styles.prefDescription}>Always active for security and core functionality.</p>
                </div>
                <span className={styles.alwaysOn}>Always On</span>
              </div>

              <label className={styles.preferenceRow}>
                <div>
                  <p className={styles.prefTitle}>Analytics Cookies</p>
                  <p className={styles.prefDescription}>Help us improve performance and user journeys.</p>
                </div>
                <span className={styles.toggleWrap}>
                  <input
                    type="checkbox"
                    className={styles.toggleInput}
                    checked={draftAnalytics}
                    onChange={(event) => setDraftAnalytics(event.target.checked)}
                  />
                  <span className={styles.toggleTrack} aria-hidden />
                </span>
              </label>

              <label className={styles.preferenceRow}>
                <div>
                  <p className={styles.prefTitle}>Marketing Cookies</p>
                  <p className={styles.prefDescription}>Enable personalized campaigns and remarketing.</p>
                </div>
                <span className={styles.toggleWrap}>
                  <input
                    type="checkbox"
                    className={styles.toggleInput}
                    checked={draftMarketing}
                    onChange={(event) => setDraftMarketing(event.target.checked)}
                  />
                  <span className={styles.toggleTrack} aria-hidden />
                </span>
              </label>
            </div>

            <div className={styles.actionsRow}>
              <button type="button" className={styles.ghostButton} onClick={() => setIsCustomizeOpen(false)}>
                Back
              </button>
              <button type="button" className={styles.secondaryButton} onClick={rejectOptional}>
                Reject Optional
              </button>
              <button type="button" className={styles.primaryButton} onClick={saveCustom}>
                Save Choices
              </button>
            </div>
          </>
        )}

        <p className={styles.legalText}>
          Learn more in our <Link href="/cookie-policy">Cookie Policy</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </section>
    </aside>
  );
}
