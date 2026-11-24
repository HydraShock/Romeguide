"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./luxury-roman-cursor.module.css";

type CursorMode = "default" | "link" | "card" | "cta" | "text";

function detectCursorMode(target: EventTarget | null): CursorMode {
  if (!(target instanceof Element)) {
    return "default";
  }

  if (target.closest(":disabled, [aria-disabled='true']")) {
    return "default";
  }

  if (
    target.closest(
      "[data-cursor='cta'], .primaryCta, .contactHeroPrimaryCta, .calendarCta, .flowFinalCta, .heroCompanionCta",
    )
  ) {
    return "cta";
  }

  if (
    target.closest(
      "a[href], button, summary, select, input:is([type='button'], [type='submit'], [type='reset'], [type='checkbox'], [type='radio']), [role='button'], [role='link'], [data-cursor='link']",
    )
  ) {
    return "link";
  }

  if (
    target.closest(
      "input, textarea, [contenteditable='true'], [data-cursor='text']",
    )
  ) {
    return "text";
  }

  if (
    target.closest(
      "[data-cursor='card'], article, .categoryCard, .tripCard, .stepCard, .trustStripCard",
    )
  ) {
    return "card";
  }

  return "default";
}

export default function LuxuryRomanCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  const haloRef = useRef<HTMLSpanElement | null>(null);
  const markerRef = useRef<HTMLSpanElement | null>(null);
  const visibleRef = useRef(false);
  const modeRef = useRef<CursorMode>("default");

  useEffect(() => {
    const fineQuery = window.matchMedia("(pointer: fine)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      setEnabled(fineQuery.matches && !reducedQuery.matches);
    };

    syncEnabled();
    fineQuery.addEventListener("change", syncEnabled);
    reducedQuery.addEventListener("change", syncEnabled);

    return () => {
      fineQuery.removeEventListener("change", syncEnabled);
      reducedQuery.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    visibleRef.current = false;
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("luxury-cursor-enabled");
    body.classList.add("luxury-cursor-enabled");

    const handleMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (markerRef.current) {
        markerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const nextMode = detectCursorMode(event.target);
      if (nextMode !== modeRef.current) {
        modeRef.current = nextMode;
        setMode(nextMode);
      }
    };

    const handleLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const handleEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleBlur = () => {
      visibleRef.current = false;
      setVisible(false);
      setPressed(false);
      modeRef.current = "default";
      setMode("default");
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown, { passive: true });
    window.addEventListener("mouseup", handleUp, { passive: true });
    document.addEventListener("mouseleave", handleLeave, { passive: true });
    document.addEventListener("mouseenter", handleEnter, { passive: true });
    window.addEventListener("blur", handleBlur, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("blur", handleBlur);

      html.classList.remove("luxury-cursor-enabled");
      body.classList.remove("luxury-cursor-enabled");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  const rootClassName = [
    styles.cursorRoot,
    visible && mode !== "text" ? styles.cursorVisible : "",
    mode === "link" ? styles.cursorLink : "",
    mode === "card" ? styles.cursorCard : "",
    mode === "cta" ? styles.cursorCta : "",
    pressed ? styles.cursorPressed : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div aria-hidden className={rootClassName}>
      <span ref={haloRef} className={styles.cursorHalo} />
      <span ref={markerRef} className={styles.cursorMarker}>
        <span className={styles.cursorDot} />
        <svg className={styles.cursorHand} viewBox="0 0 26 30" focusable="false">
          <defs>
            <linearGradient id="roman-cursor-hand-fill" x2="0.25" y2="1">
              <stop stopColor="#fff8e8" />
              <stop offset="0.5" stopColor="#f4c77d" />
              <stop offset="1" stopColor="#bb7939" />
            </linearGradient>
          </defs>
          <path
            d="M10 2.5a2 2 0 0 1 2 2v9.25a1.8 1.8 0 0 1 3.6 0V15a1.8 1.8 0 0 1 3.6 0v1.1a1.8 1.8 0 0 1 3.6 0v3.7c0 4.9-2.9 8.2-7.8 8.2h-1.8c-2.5 0-4.4-1.1-5.8-3.2l-4.2-6.2a1.9 1.9 0 0 1 2.9-2.3L8 18.1V4.5a2 2 0 0 1 2-2Z"
            fill="url(#roman-cursor-hand-fill)"
            stroke="#653418"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
