"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./luxury-center-logo-navbar.module.css";

type PanelKey = "romeTours" | "dayTrips" | "italyTours";

type NavLinkItem = {
  label: string;
  href: string;
  panelKey?: PanelKey;
};

type PanelLink = {
  href: string;
  label: string;
  description: string;
};

type PanelColumn = {
  title: string;
  links: PanelLink[];
};

type MegaPanelData = {
  key: PanelKey;
  label: string;
  href: string;
  kicker: string;
  headline: string;
  description: string;
  ctaLabel: string;
  columns: PanelColumn[];
};

type PanelPreviewItem = {
  href: string;
  label: string;
  description: string;
  image: string;
};

const megaPanels: Record<PanelKey, MegaPanelData> = {
  romeTours: {
    key: "romeTours",
    label: "Private Tours in Rome",
    href: "/tours",
    kicker: "Rome Signature Collection",
    headline: "Private Tours in Rome, Curated Around Your Pace",
    description:
      "Explore Rome with licensed private guides through routes designed around your interests, timing, and travel style.",
    ctaLabel: "View All Rome Private Tours",
    columns: [
      {
        title: "Most Requested",
        links: [
          {
            href: "/tours/ancient-rome",
            label: "Ancient Rome Private Tour",
            description: "Colosseum, Roman Forum, and Palatine Hill with private storytelling.",
          },
          {
            href: "/tours/vatican",
            label: "Private Vatican Tour",
            description: "Vatican Museums, Sistine Chapel, and St. Peter's in elegant pacing.",
          },
          {
            href: "/tours/christian-rome",
            label: "Christian Rome Tour",
            description: "Basilicas and sacred landmarks through private licensed guidance.",
          },
        ],
      },
      {
        title: "Curated Styles",
        links: [
          {
            href: "/tours/walking-tours",
            label: "Rome Private Walking Tour",
            description: "Historic center landmarks and hidden corners at your rhythm.",
          },
          {
            href: "/tours/family-friendly",
            label: "Family-Friendly Rome Tours",
            description: "Private routes tailored to children, teens, and mixed-age groups.",
          },
          {
            href: "/tours/art-architecture",
            label: "Rome Art & Architecture Tour",
            description: "Masterpieces, urban layers, and design heritage in one private route.",
          },
        ],
      },
      {
        title: "Planning Focus",
        links: [
          {
            href: "/who-we-are",
            label: "Meet Our Licensed Team",
            description: "Family-run service with local knowledge and premium attention to detail.",
          },
          {
            href: "/#booking-calendar",
            label: "Plan Your Private Tour",
            description: "Share dates and priorities for a tailor-made proposal.",
          },
        ],
      },
    ],
  },
  dayTrips: {
    key: "dayTrips",
    label: "Day Trips from Rome",
    href: "/tours/day-trips-from-rome",
    kicker: "Beyond Rome",
    headline: "Private Day Trips from Rome with Chauffeured Comfort",
    description:
      "Full-day escapes with private transport, realistic pacing, and optional licensed guide support.",
    ctaLabel: "Explore Day Trips from Rome",
    columns: [
      {
        title: "Heritage & Archaeology",
        links: [
          {
            href: "/tours/day-trips-from-rome/tivoli",
            label: "Private Tivoli Day Trip from Rome",
            description: "Hadrian's Villa and Villa d'Este with refined pacing.",
          },
          {
            href: "/tours/day-trips-from-rome/ostia-antica",
            label: "Private Ostia Antica Day Trip",
            description: "Ancient harbor archaeology without urban crowds.",
          },
          {
            href: "/tours/day-trips-from-rome/cerveteri-etruscans",
            label: "Private Cerveteri Etruscan Day Trip",
            description: "Etruscan heritage route with private driver logistics.",
          },
        ],
      },
      {
        title: "Scenic Escapes",
        links: [
          {
            href: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
            label: "Pompeii, Amalfi & Naples Day Trip",
            description: "A signature private route balancing archaeology and coastline.",
          },
          {
            href: "/tours/day-trips-from-rome/orvieto-umbria",
            label: "Private Orvieto & Umbria Day Trip",
            description: "Hill-town atmosphere, cathedral beauty, and countryside rhythm.",
          },
          {
            href: "/tours/day-trips-from-rome/roman-hill-towns",
            label: "Roman Hill Towns Private Day Trip",
            description: "Slow village charm and scenic viewpoints outside Rome.",
          },
        ],
      },
      {
        title: "Upgrade Your Route",
        links: [
          {
            href: "/#booking-calendar",
            label: "Ask for Tailor-Made Day Trip Planning",
            description: "We shape destination, timing, and comfort around your travel priorities.",
          },
        ],
      },
    ],
  },
  italyTours: {
    key: "italyTours",
    label: "Tours in Italy",
    href: "/tours-in-italy",
    kicker: "Italy Collection",
    headline: "Private Tours in Italy for Multi-City Luxury Itineraries",
    description:
      "Design private experiences across Italy with curated pacing, licensed expertise, and personalized service.",
    ctaLabel: "View Private Tours in Italy",
    columns: [
      {
        title: "Northern Italy",
        links: [
          {
            href: "/tours-in-italy/private-venice-tour",
            label: "Private Venice Tour",
            description: "Historic canals, hidden passages, and elegant private pacing.",
          },
          {
            href: "/tours-in-italy/private-milan-tour",
            label: "Private Milan Tour",
            description: "Fashion, art, and architecture with local private guidance.",
          },
          {
            href: "/tours-in-italy/private-florence-tuscany-tour",
            label: "Private Florence & Tuscany Tour",
            description: "Renaissance highlights and Tuscan atmosphere in one curated route.",
          },
        ],
      },
      {
        title: "Southern & Island Journeys",
        links: [
          {
            href: "/tours-in-italy/private-naples-amalfi-coast-tour",
            label: "Private Naples & Amalfi Coast Tour",
            description: "Southern heritage and coastlines with premium logistics.",
          },
          {
            href: "/tours-in-italy/private-sicily-tours",
            label: "Private Sicily Tours",
            description: "Island culture, archaeology, and private route design.",
          },
          {
            href: "/tours-in-italy/private-orvieto-umbria-tour",
            label: "Private Orvieto & Umbria Tour",
            description: "Countryside elegance, hill towns, and curated cultural stops.",
          },
        ],
      },
      {
        title: "Concierge Support",
        links: [
          {
            href: "/#booking-calendar",
            label: "Plan a Multi-City Private Itinerary",
            description: "Get a tailor-made Italy route built around your dates and priorities.",
          },
        ],
      },
    ],
  },
};

const panelPreviewItems: Record<PanelKey, PanelPreviewItem[]> = {
  romeTours: [
    {
      href: "/tours/ancient-rome",
      label: "Ancient Rome Private Tour",
      description: "Colosseum, Forum, and Palatine Hill with licensed private storytelling.",
      image: "/images/tours/ancient-rome/hero-ancient-rome-private-tour-colosseum-warm-light.webp",
    },
    {
      href: "/tours/vatican",
      label: "Private Vatican Tour",
      description: "Museums, Sistine Chapel, and St. Peter's with curated timing.",
      image: "/images/tours/vatican/hero-vatican-private-tour-san-pietro-sunset-final.webp",
    },
    {
      href: "/tours/christian-rome",
      label: "Christian Rome Tour",
      description: "Basilicas and sacred landmarks through private licensed guidance.",
      image: "/images/tours/christian-rome/hero-christian-rome-tour-basilica-facade.webp",
    },
    {
      href: "/tours/walking-tours",
      label: "Rome Private Walking Tour",
      description: "Historic center masterpieces and hidden corners at your pace.",
      image: "/images/tours/walking/hero-rome-private-walking-tour-pantheon-dusk.webp",
    },
    {
      href: "/tours/family-friendly",
      label: "Family-Friendly Rome Tour",
      description: "Tailored route for families, teens, and multigenerational travelers.",
      image: "/images/tours/family/hero-family-friendly-rome-tour-colosseum-visit.webp",
    },
  ],
  dayTrips: [
    {
      href: "/tours/day-trips-from-rome/tivoli",
      label: "Private Tivoli Day Trip",
      description: "Villa d'Este fountains and Hadrian's Villa with private driver comfort.",
      image: "/images/tours/day-trips/tivoli/hero-tivoli-villas-day-trip-from-rome.jpg",
    },
    {
      href: "/tours/day-trips-from-rome/ostia-antica",
      label: "Private Ostia Antica Day Trip",
      description: "Ancient port archaeology in a smooth and crowd-smart full-day route.",
      image: "/images/tours/day-trips/ostia-antica/hero-private-ostia-antica-day-trip-from-rome-warm-ruins.jpg",
    },
    {
      href: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
      label: "Pompeii & Amalfi Private Day Trip",
      description: "Archaeology and coastline in one signature route from Rome.",
      image: "/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg",
    },
    {
      href: "/tours/day-trips-from-rome/orvieto-umbria",
      label: "Orvieto & Umbria Day Trip",
      description: "Hill-town atmosphere, cathedral beauty, and countryside rhythm.",
      image: "/images/tours/day-trips/orvieto-umbria/highlight-orvieto-cliff-panorama.jpg",
    },
    {
      href: "/tours/day-trips-from-rome/roman-hill-towns",
      label: "Roman Hill Towns Day Trip",
      description: "Scenic villages and slow luxury pacing just beyond Rome.",
      image: "/images/tours/day-trips/roman-hill-towns/hero-roman-hill-towns-day-trip-from-rome.jpg",
    },
  ],
  italyTours: [
    {
      href: "/tours-in-italy/private-venice-tour",
      label: "Private Venice Tour",
      description: "Canals, hidden passages, and elegant private pacing.",
      image: "/images/tours-in-italy/venice/hero-private-venice-tour.jpg",
    },
    {
      href: "/tours-in-italy/private-florence-tuscany-tour",
      label: "Private Florence & Tuscany Tour",
      description: "Renaissance heritage and Tuscan atmosphere in one curated route.",
      image: "/images/tours-in-italy/florence-tuscany/hero-private-florence-tuscany-tour.jpg",
    },
    {
      href: "/tours-in-italy/private-milan-tour",
      label: "Private Milan Tour",
      description: "Design, fashion, and architecture with local private guidance.",
      image: "/images/tours-in-italy/milan/hero-private-milan-tour.jpg",
    },
    {
      href: "/tours-in-italy/private-naples-amalfi-coast-tour",
      label: "Private Naples & Amalfi Tour",
      description: "Southern heritage and coastline with premium logistics.",
      image: "/images/tours-in-italy/naples-amalfi/hero-private-naples-amalfi-coast-tour.jpg",
    },
    {
      href: "/tours-in-italy/private-sicily-tours",
      label: "Private Sicily Tours",
      description: "Island culture, archaeology, and tailor-made route design.",
      image: "/images/tours-in-italy/sicily/hero-private-sicily-tours.jpg",
    },
  ],
};

const leftLinks: NavLinkItem[] = [
  { label: "PRIVATE TOURS", href: "/tours", panelKey: "romeTours" },
  { label: "DAY TRIPS", href: "/tours/day-trips-from-rome", panelKey: "dayTrips" },
  { label: "TOURS IN ITALY", href: "/tours-in-italy", panelKey: "italyTours" },
];

const rightLinks: NavLinkItem[] = [
  { label: "ABOUT US", href: "/who-we-are" },
  { label: "CONTACT", href: "/booking-contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/tours") {
    return pathname === "/tours" || (pathname.startsWith("/tours/") && !pathname.startsWith("/tours/day-trips-from-rome"));
  }

  if (href === "/tours/day-trips-from-rome") {
    return pathname.startsWith("/tours/day-trips-from-rome");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function LuxuryCenterLogoNavbar() {
  const pathname = usePathname() ?? "/";
  const isHome = pathname === "/";
  const isDarkHeroPage =
    pathname.startsWith("/tours") ||
    pathname.startsWith("/tours-in-italy") ||
    pathname.startsWith("/who-we-are") ||
    pathname.startsWith("/booking-contact");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  const panelData = activePanel ? megaPanels[activePanel] : null;
  const panelItems = panelData ? panelPreviewItems[panelData.key] : [];

  const closeMenus = () => {
    setIsMobileOpen(false);
    setActivePanel(null);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        closeMenus();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
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
    const previousOverflow = document.body.style.overflow;

    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        ref={wrapperRef}
        className={`${styles.headerRoot} ${isScrolled ? styles.headerRootScrolled : ""}`}
        onMouseLeave={() => setActivePanel(null)}
      >
        <div className={styles.bar}>
          <nav className={styles.navGroupLeft} aria-label="Primary navigation left">
            {leftLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  isDarkHeroPage ? styles.navLinkLeftOnDark : styles.navLinkLeft
                } ${
                  isActivePath(pathname, item.href)
                    ? isDarkHeroPage
                      ? styles.navLinkActiveLeftOnDark
                      : styles.navLinkActiveLeft
                    : ""
                }`}
                aria-expanded={item.panelKey ? activePanel === item.panelKey : undefined}
                aria-haspopup={item.panelKey ? "menu" : undefined}
                onMouseEnter={() => setActivePanel(item.panelKey ?? null)}
                onFocus={() => setActivePanel(item.panelKey ?? null)}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className={styles.centerBrand}
            aria-label="Rome Guide Services Home"
            onClick={closeMenus}
          >
            <span className={styles.centerLogoWrap}>
              <Image
                src="/logo2.png"
                alt="RG Rome Guide Services Italy Bespoke"
                width={810}
                height={367}
                priority
                quality={100}
                sizes="(max-width: 980px) 210px, 340px"
                className={styles.centerLogoImage}
              />
            </span>
          </Link>

          <div className={styles.navGroupRight}>
            <nav
              className={styles.navRightLinks}
              aria-label="Primary navigation right"
              onMouseEnter={() => setActivePanel(null)}
            >
              {rightLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${styles.navLinkRight} ${
                    isActivePath(pathname, item.href) ? styles.navLinkActiveRight : ""
                  }`}
                  onClick={closeMenus}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/#booking-calendar"
              className={styles.conciergeCta}
              aria-label="Private concierge - go to booking calendar"
              onClick={closeMenus}
            >
              <span className={styles.conciergeCtaText}>PRIVATE CONCIERGE</span>
              <span className={styles.conciergeCtaArrow} aria-hidden>
                →
              </span>
            </Link>

            <button
              type="button"
              className={styles.mobileToggle}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="center-logo-mobile-nav"
              onClick={() => {
                setIsMobileOpen((open) => !open);
                setActivePanel(null);
              }}
            >
              <span className={styles.mobileToggleLine} />
              <span className={styles.mobileToggleLine} />
              <span className={styles.mobileToggleLine} />
            </button>
          </div>
        </div>

        <div className={`${styles.megaShell} ${panelData ? styles.megaShellOpen : ""}`}>
          {panelData ? (
            <div
              role="menu"
              aria-label={`${panelData.label} submenu`}
              className="relative ml-2 w-[min(100%,860px)] overflow-hidden rounded-[18px] border border-[rgba(218,176,121,0.46)] bg-[linear-gradient(142deg,rgba(46,24,16,0.84)_0%,rgba(35,18,13,0.8)_58%,rgba(27,14,10,0.82)_100%)] shadow-[0_24px_48px_rgba(16,7,4,0.35),0_0_0_1px_rgba(243,205,151,0.08)_inset] backdrop-blur-[9px]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[4px] rounded-[14px] border border-[rgba(225,186,129,0.24)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-[17%] top-0 h-px bg-gradient-to-r from-transparent via-[rgba(252,226,183,0.52)] to-transparent"
              />

              <ul className="relative z-[1] m-0 list-none px-5 py-4">
                {panelItems.map((item, itemIndex) => (
                  <li
                    key={`${panelData.key}-${item.href}`}
                    className={
                      itemIndex < panelItems.length - 1
                        ? "border-b border-[rgba(216,168,110,0.18)]"
                        : undefined
                    }
                  >
                    <Link
                      href={item.href}
                      className="group/row relative grid grid-cols-[152px_minmax(0,1fr)_auto] items-center gap-5 px-1 py-4 transition-[transform,background-color] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:bg-[rgba(202,139,82,0.09)] focus-visible:-translate-y-[1px] focus-visible:bg-[rgba(202,139,82,0.09)]"
                      onClick={closeMenus}
                    >
                      <span
                        className="relative h-[84px] w-[152px] overflow-hidden rounded-[8px] border border-[rgba(211,165,108,0.45)] bg-[rgba(40,19,12,0.68)] shadow-[0_10px_22px_rgba(15,6,4,0.26)]"
                        aria-hidden
                      >
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="152px"
                          className="object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:scale-[1.045] group-hover/row:brightness-110 group-focus-visible/row:scale-[1.045] group-focus-visible/row:brightness-110"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,232,198,0.08)_0%,rgba(0,0,0,0)_36%,rgba(0,0,0,0.2)_100%)]" />
                      </span>

                      <span className="min-w-0">
                        <span className="block font-serif text-[2.02rem] font-semibold leading-[0.95] text-[rgba(245,227,201,0.93)] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:text-[rgba(253,239,221,0.99)] group-focus-visible/row:text-[rgba(253,239,221,0.99)]">
                          {item.label}
                        </span>
                        <span className="mt-2 block max-w-[52ch] font-sans text-[0.9rem] leading-[1.48] tracking-[0.014em] text-[rgba(228,201,166,0.82)] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:text-[rgba(238,214,183,0.92)] group-focus-visible/row:text-[rgba(238,214,183,0.92)]">
                          {item.description}
                        </span>
                        <span className="mt-3 block h-px w-0 bg-gradient-to-r from-[rgba(229,186,124,0.9)] via-[rgba(234,195,138,0.36)] to-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:w-[42%] group-focus-visible/row:w-[42%]" />
                      </span>

                      <span className="pr-2 font-serif text-[2.18rem] leading-none text-[rgba(204,156,95,0.84)] transition-[transform,color] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:translate-x-[5px] group-hover/row:text-[rgba(228,184,126,0.95)] group-focus-visible/row:translate-x-[5px] group-focus-visible/row:text-[rgba(228,184,126,0.95)]">
                        &#8250;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <div
          id="center-logo-mobile-nav"
          className={`${styles.mobilePanel} ${isMobileOpen ? styles.mobilePanelOpen : ""}`}
          aria-hidden={!isMobileOpen}
        >
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {[...leftLinks, ...rightLinks].map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={`${styles.mobileNavLink} ${isActivePath(pathname, item.href) ? styles.mobileNavLinkActive : ""}`}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#booking-calendar"
            className={styles.mobileCta}
            aria-label="Private concierge - go to booking calendar"
            onClick={closeMenus}
          >
            <span className={styles.conciergeCtaText}>PRIVATE CONCIERGE</span>
            <span className={styles.conciergeCtaArrow} aria-hidden>
              →
            </span>
          </Link>
        </div>
      </header>

      <div className={isHome ? styles.homeSpacer : styles.headerSpacer} aria-hidden />
    </>
  );
}

