"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./luxury-site-header.module.css";

type PanelKey = "romeTours" | "dayTrips" | "italyTours";

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

type PrimaryNavItem = {
  label: string;
  href: string;
  panelKey?: PanelKey;
};

const megaPanels: Record<PanelKey, MegaPanelData> = {
  romeTours: {
    key: "romeTours",
    label: "Private Tours in Rome",
    href: "/tours",
    kicker: "Rome Signature Collection",
    headline: "Private Tours in Rome, Curated Around Your Pace",
    description:
      "Explore Rome with licensed private guides through routes designed for your interests, timing, and travel style.",
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
            description: "We shape destination, timing, and comfort around your trip priorities.",
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

const primaryNavItems: PrimaryNavItem[] = [
  { label: "Private Tours", href: "/tours", panelKey: "romeTours" },
  { label: "Day Trips", href: "/tours/day-trips-from-rome", panelKey: "dayTrips" },
  { label: "Tours in Italy", href: "/tours-in-italy", panelKey: "italyTours" },
  { label: "About Us", href: "/who-we-are" },
  { label: "Contact", href: "/booking-contact" },
];

function isPrimaryItemActive(pathname: string, item: PrimaryNavItem) {
  if (item.href === "/tours/day-trips-from-rome") {
    return pathname.startsWith("/tours/day-trips-from-rome");
  }

  if (item.href === "/tours") {
    return pathname === "/tours" || (pathname.startsWith("/tours/") && !pathname.startsWith("/tours/day-trips-from-rome"));
  }

  if (item.href === "/tours-in-italy") {
    return pathname === "/tours-in-italy" || pathname.startsWith("/tours-in-italy/");
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function LuxurySiteHeader() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";
  const isHome = currentPath === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeMenus = () => {
    setActivePanel(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeMenus();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const isOverlay = isHome && !isScrolled && !isMobileMenuOpen;
  const panelData = activePanel ? megaPanels[activePanel] : null;

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.headerRoot} ${
          isOverlay ? styles.headerRootOverlay : styles.headerRootSolid
        } ${isMobileMenuOpen ? styles.headerRootMenuOpen : ""}`}
        onMouseLeave={() => setActivePanel(null)}
      >
        <div className={styles.primaryBar}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="Rome Guide Services homepage"
            onClick={closeMenus}
          >
            <span className={styles.brandMark} aria-hidden>
              RG
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandTitle}>Rome Guide Services</span>
              <span className={styles.brandSubtitle}>Private Tours in Rome & Italy</span>
            </span>
          </Link>

          <div className={styles.navRow}>
            <nav className={styles.desktopNav} aria-label="Primary navigation">
              {primaryNavItems.map((item) => {
                const isActive = isPrimaryItemActive(currentPath, item);
                const hasPanel = Boolean(item.panelKey);

                return (
                  <div
                    key={`bottom-${item.href}`}
                    className={styles.navItem}
                    onMouseEnter={() => {
                      if (item.panelKey) {
                        setActivePanel(item.panelKey);
                      }
                    }}
                    onFocusCapture={() => {
                      if (item.panelKey) {
                        setActivePanel(item.panelKey);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                      aria-expanded={hasPanel ? activePanel === item.panelKey : undefined}
                      aria-haspopup={hasPanel ? "menu" : undefined}
                      onClick={closeMenus}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className={styles.primaryActions}>
            <Link href="/#booking-calendar" className={styles.desktopCta} onClick={closeMenus}>
              Check Availability
            </Link>
            <button
              type="button"
              className={styles.mobileToggle}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-site-menu"
              onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
            >
              <span className={styles.mobileToggleLine} />
              <span className={styles.mobileToggleLine} />
              <span className={styles.mobileToggleLine} />
            </button>
          </div>
        </div>

        <div className={`${styles.megaShell} ${panelData ? styles.megaShellOpen : ""}`}>
          {panelData ? (
            <div className={styles.megaPanel} role="menu" aria-label={`${panelData.label} submenu`}>
              <aside className={styles.megaIntro}>
                <p className={styles.megaKicker}>{panelData.kicker}</p>
                <h2 className={styles.megaHeadline}>{panelData.headline}</h2>
                <p className={styles.megaDescription}>{panelData.description}</p>
                <Link href={panelData.href} className={styles.megaPrimaryLink} onClick={closeMenus}>
                  {panelData.ctaLabel}
                </Link>
              </aside>

              <div className={styles.megaColumns}>
                {panelData.columns.map((column) => (
                  <section key={column.title} className={styles.megaColumn}>
                    <h3 className={styles.megaColumnTitle}>{column.title}</h3>
                    <ul className={styles.megaLinkList}>
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className={styles.megaLinkCard} onClick={closeMenus}>
                            <span className={styles.megaLinkLabel}>{link.label}</span>
                            <span className={styles.megaLinkDescription}>{link.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <div className={isHome ? styles.homeSpacer : styles.headerSpacer} aria-hidden />

      <div
        id="mobile-site-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.mobileMenuInner}>
          <nav className={styles.mobilePrimaryNav} aria-label="Mobile primary navigation">
            <Link href="/" className={styles.mobilePrimaryLink} onClick={closeMenus}>
              Home
            </Link>
            {primaryNavItems.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={styles.mobilePrimaryLink}
                onClick={closeMenus}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileMegaGroups}>
            {(Object.keys(megaPanels) as PanelKey[]).map((panelKey) => {
              const panel = megaPanels[panelKey];
              return (
                <section key={panel.key} className={styles.mobileGroup}>
                  <h2 className={styles.mobileGroupTitle}>{panel.label}</h2>
                  <ul className={styles.mobileGroupLinks}>
                    {panel.columns.flatMap((column) =>
                      column.links.map((link) => (
                        <li key={`${panel.key}-${link.href}`}>
                          <Link href={link.href} className={styles.mobileGroupLink} onClick={closeMenus}>
                            {link.label}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </section>
              );
            })}
          </div>

          <Link href="/#booking-calendar" className={styles.mobileCta} onClick={closeMenus}>
            Plan My Private Tour
          </Link>
        </div>
      </div>
    </>
  );
}
