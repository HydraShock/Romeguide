"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

type LuxuryRomeNavbarProps = {
  items?: NavItem[];
  activeHref?: string;
  brandHref?: string;
  ctaHref?: string;
  className?: string;
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Private Tours", href: "/tours" },
  { label: "Day Trips", href: "/tours/day-trips-from-rome" },
  { label: "Tours in Italy", href: "/tours-in-italy" },
  { label: "About Us", href: "/who-we-are" },
  { label: "Contact", href: "/booking-contact" },
];

const TOP_TEXTURE = `url("data:image/svg+xml,${encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220' fill='none'>
  <g stroke='rgba(248,218,172,0.22)' stroke-width='1'>
    <path d='M-50 170C170 45 300 220 520 120C740 20 910 195 1490 58'/>
    <path d='M-20 150C180 65 330 175 535 112C760 44 970 170 1480 74' opacity='.55'/>
    <path d='M120 210C330 120 540 150 770 112C980 76 1200 148 1460 108' opacity='.45'/>
    <path d='M0 90C230 30 410 95 600 62C820 24 1010 86 1440 20' opacity='.28'/>
  </g>
</svg>
`)}")`;

const EASE_CLASS = "[transition-timing-function:cubic-bezier(.22,1,.36,1)]";

export default function LuxuryRomeNavbar({
  items = DEFAULT_ITEMS,
  activeHref,
  brandHref = "/",
  ctaHref = "/#booking-calendar",
  className,
}: LuxuryRomeNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <div
      ref={rootRef}
      className={clsx(
        "fixed inset-x-0 z-[140] flex justify-center transition-all duration-500",
        EASE_CLASS,
        isScrolled ? "top-3" : "top-5",
        className
      )}
    >
      <header
        className={clsx(
          "pointer-events-auto relative isolate w-[min(1180px,calc(100%-48px))] overflow-hidden rounded-full border shadow-[0_12px_40px_rgba(25,10,4,0.35),0_0_24px_rgba(214,170,103,0.08)] backdrop-blur-[14px] transition-all duration-500",
          EASE_CLASS,
          isScrolled
            ? "h-[74px] border-[rgba(214,170,103,0.4)]"
            : "h-[78px] border-[rgba(214,170,103,0.35)]"
        )}
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: isScrolled
              ? "linear-gradient(180deg, rgba(40,20,10,0.82) 0%, rgba(30,14,8,0.84) 56%, rgba(20,9,5,0.86) 100%), linear-gradient(116deg, rgba(84,42,20,0.22) 0%, rgba(84,42,20,0) 65%)"
              : "linear-gradient(180deg, rgba(48,24,12,0.72) 0%, rgba(37,18,10,0.75) 54%, rgba(23,10,6,0.8) 100%), linear-gradient(116deg, rgba(84,42,20,0.28) 0%, rgba(84,42,20,0) 65%)",
          }}
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full opacity-[0.17] mix-blend-screen"
          style={{
            backgroundImage: `${TOP_TEXTURE}, radial-gradient(circle at 50% 6%, rgba(255,219,168,0.22) 0%, rgba(255,219,168,0) 62%)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
          }}
        />
        <span className="pointer-events-none absolute inset-[1.5px] rounded-full border border-[rgba(246,214,167,0.22)]" />
        <span className="pointer-events-none absolute inset-x-7 top-[1px] h-px bg-gradient-to-r from-transparent via-[rgba(255,226,186,0.6)] to-transparent" />
        <span className="pointer-events-none absolute left-1/2 top-[46%] h-11 w-[46%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,196,102,0.12)_0%,rgba(255,196,102,0)_74%)]" />

        <div className="relative z-10 grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-5 lg:px-6">
          <a
            href={brandHref}
            className="group inline-flex min-w-[240px] items-center gap-3 rounded-full border border-[rgba(214,170,103,0.2)] bg-[linear-gradient(180deg,rgba(103,52,28,0.18)_0%,rgba(57,27,16,0.16)_100%)] px-2.5 py-1.5 transition-all duration-300 hover:border-[rgba(232,190,128,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,210,145,0.52)]"
            aria-label="Rome Guide Services Home"
          >
            <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(228,182,114,0.82)] bg-[linear-gradient(160deg,rgba(95,48,26,0.98)_0%,rgba(42,20,12,0.98)_100%)] text-[1.05rem] font-semibold tracking-[0.03em] text-[rgba(247,234,214,0.94)] shadow-[inset_0_0_0_1px_rgba(248,214,160,0.28),0_4px_12px_rgba(0,0,0,0.32)]">
              <span className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(251,226,183,0.3)]" />
              RG
            </span>
            <span className="grid leading-none">
              <span className="font-serif text-[1.82rem] text-[rgba(247,234,214,0.95)] [text-shadow:0_1px_10px_rgba(9,4,2,0.4)]">
                Rome Guide Services
              </span>
              <span className="mt-0.5 text-[0.61rem] font-medium uppercase tracking-[0.16em] text-[rgba(224,196,154,0.78)]">
                Private Tours in Rome &amp; Italy
              </span>
            </span>
          </a>

          <nav className="hidden min-w-0 justify-center lg:flex" aria-label="Primary navigation">
            <ul className="flex items-center gap-1 rounded-full border border-[rgba(214,170,103,0.16)] bg-[linear-gradient(180deg,rgba(78,38,22,0.12)_0%,rgba(45,21,12,0.16)_100%)] px-2 py-1">
              {items.map((item) => {
                const isActive = item.active ?? activeHref === item.href;
                return (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      className={clsx(
                        "group relative inline-flex h-9 items-center rounded-full px-4 text-[0.95rem] font-medium tracking-[0.012em] text-[rgba(247,234,214,0.9)] transition-all duration-300",
                        EASE_CLASS,
                        "hover:-translate-y-[1px] hover:text-[rgba(254,243,225,0.98)] hover:[text-shadow:0_0_14px_rgba(255,196,102,0.22)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,208,141,0.5)]",
                        isActive &&
                          "border border-[rgba(223,177,110,0.36)] bg-[linear-gradient(180deg,rgba(108,54,30,0.26)_0%,rgba(74,33,19,0.24)_100%)] text-[rgba(255,241,218,0.98)]"
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        className={clsx(
                          "pointer-events-none absolute inset-x-3 bottom-[6px] h-px origin-center bg-gradient-to-r from-transparent via-[rgba(236,186,113,0.95)] to-transparent transition-transform duration-300",
                          EASE_CLASS,
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <a
              href={ctaHref}
              className={clsx(
                "group relative hidden h-11 min-w-[168px] items-center justify-center overflow-hidden rounded-full border text-center text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[rgba(255,246,233,0.95)] transition-all duration-300",
                EASE_CLASS,
                "border-[rgba(232,185,116,0.9)] bg-[linear-gradient(180deg,rgba(221,171,104,0.96)_0%,rgba(193,126,58,0.97)_58%,rgba(163,100,41,0.98)_100%)]",
                "shadow-[inset_0_0_0_1px_rgba(255,233,193,0.28),inset_0_1px_0_rgba(255,241,219,0.44),0_8px_16px_rgba(41,17,8,0.24)]",
                "hover:-translate-y-[1px] hover:brightness-[1.04] hover:shadow-[inset_0_0_0_1px_rgba(255,239,209,0.38),inset_0_1px_0_rgba(255,245,230,0.52),0_12px_22px_rgba(41,17,8,0.3)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,213,148,0.6)]",
                "lg:inline-flex"
              )}
            >
              <span className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,233,195,0.24)]" />
              <span className="pointer-events-none absolute inset-x-3 top-[2px] h-[42%] rounded-full bg-[linear-gradient(180deg,rgba(255,238,211,0.34)_0%,rgba(255,238,211,0)_100%)]" />
              <span className="relative z-10">Plan Your Tour</span>
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="luxury-rome-mobile-nav"
              onClick={() => setMobileOpen((open) => !open)}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(214,170,103,0.34)] bg-[rgba(60,28,16,0.48)] text-[rgba(247,234,214,0.92)] shadow-[inset_0_1px_0_rgba(247,211,154,0.18)] transition-all duration-300 hover:border-[rgba(234,192,129,0.54)] hover:bg-[rgba(84,40,22,0.52)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,208,141,0.52)] lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="relative h-4 w-4">
                <span
                  className={clsx(
                    "absolute left-0 top-[2px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-300",
                    EASE_CLASS,
                    mobileOpen && "top-[7px] rotate-45"
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 top-[7px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-300",
                    EASE_CLASS,
                    mobileOpen && "opacity-0"
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-current transition-all duration-300",
                    EASE_CLASS,
                    mobileOpen && "top-[7px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="luxury-rome-mobile-nav"
        className={clsx(
          "pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-[145] w-[min(92vw,420px)] -translate-x-1/2 transition-all duration-300 lg:hidden",
          EASE_CLASS,
          mobileOpen ? "pointer-events-auto translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="relative isolate overflow-hidden rounded-[26px] border border-[rgba(214,170,103,0.35)] bg-[linear-gradient(180deg,rgba(40,20,10,0.88)_0%,rgba(27,13,8,0.9)_100%)] p-4 shadow-[0_18px_44px_rgba(14,6,3,0.46),0_0_20px_rgba(214,170,103,0.1)] backdrop-blur-xl">
          <span className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-screen" style={{ backgroundImage: TOP_TEXTURE, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
          <span className="pointer-events-none absolute inset-[1.5px] rounded-[24px] border border-[rgba(246,214,167,0.22)]" />
          <nav aria-label="Mobile navigation" className="relative z-10">
            <ul className="grid gap-2.5">
              {items.map((item) => {
                const isActive = item.active ?? activeHref === item.href;
                return (
                  <li key={`mobile-${item.href}`}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={clsx(
                        "inline-flex h-11 w-full items-center rounded-xl border px-4 text-[0.95rem] font-medium tracking-[0.012em] transition-all duration-300",
                        EASE_CLASS,
                        isActive
                          ? "border-[rgba(224,178,112,0.46)] bg-[linear-gradient(180deg,rgba(105,50,28,0.3)_0%,rgba(73,32,18,0.28)_100%)] text-[rgba(255,241,218,0.98)]"
                          : "border-[rgba(214,170,103,0.2)] bg-[rgba(73,35,21,0.24)] text-[rgba(247,234,214,0.9)] hover:border-[rgba(232,190,128,0.42)] hover:bg-[rgba(95,45,27,0.32)]"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a
            href={ctaHref}
            onClick={() => setMobileOpen(false)}
            className={clsx(
              "relative z-10 mt-4 inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-full border border-[rgba(232,185,116,0.86)] bg-[linear-gradient(180deg,rgba(221,171,104,0.96)_0%,rgba(193,126,58,0.97)_58%,rgba(163,100,41,0.98)_100%)] text-center text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[rgba(255,246,233,0.95)] shadow-[inset_0_0_0_1px_rgba(255,233,193,0.24),0_8px_16px_rgba(41,17,8,0.24)] transition-all duration-300",
              EASE_CLASS
            )}
          >
            <span className="pointer-events-none absolute inset-[2px] rounded-full border border-[rgba(255,233,195,0.22)]" />
            <span className="relative z-10">Plan Your Tour</span>
          </a>
        </div>
      </div>
    </div>
  );
}
