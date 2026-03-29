"use client";

import { useEffect } from "react";

const ROOT_SELECTOR = "[data-who-we-are-root]";
const REVEAL_SELECTOR = "[data-reveal]";

export default function WhoWeArePageEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(ROOT_SELECTOR);

    if (!root) {
      return;
    }

    root.setAttribute("data-motion-ready", "true");

    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    revealNodes.forEach((node, index) => {
      node.style.setProperty("--reveal-order", String(index % 6));
    });

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-visible", "true");
            }
          });
        },
        {
          threshold: 0.14,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      revealNodes.forEach((node) => observer?.observe(node));
    } else {
      revealNodes.forEach((node) => node.setAttribute("data-visible", "true"));
    }

    return () => {
      observer?.disconnect();
      root.removeAttribute("data-motion-ready");
    };
  }, []);

  return null;
}
