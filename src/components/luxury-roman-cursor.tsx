"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./luxury-roman-cursor.module.css";

type CursorMode = "default" | "link" | "card" | "cta" | "text";

function detectCursorMode(target: EventTarget | null): CursorMode {
  if (!(target instanceof Element)) {
    return "default";
  }

  if (
    target.closest(
      "input, textarea, select, [contenteditable='true'], [data-cursor='text']",
    )
  ) {
    return "text";
  }

  if (
    target.closest(
      "[data-cursor='cta'], .conciergeCta, .primaryCta, .contactHeroPrimaryCta, .calendarCta, .flowFinalCta, .heroCompanionCta",
    )
  ) {
    return "cta";
  }

  if (
    target.closest(
      "[data-cursor='card'], article, .categoryCard, .tripCard, .stepCard, .trustStripCard",
    )
  ) {
    return "card";
  }

  if (
    target.closest(
      "a, button, summary, [role='button'], [data-cursor='link'], input[type='submit'], input[type='button']",
    )
  ) {
    return "link";
  }

  return "default";
}

export default function LuxuryRomanCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  const haloRef = useRef<HTMLSpanElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);
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

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
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
    window.addEventListener("mousedown", handleDown, { passive: true });
    window.addEventListener("mouseup", handleUp, { passive: true });
    document.addEventListener("mouseleave", handleLeave, { passive: true });
    document.addEventListener("mouseenter", handleEnter, { passive: true });
    window.addEventListener("blur", handleBlur, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
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
      <span ref={dotRef} className={styles.cursorDot} />
    </div>
  );
}
