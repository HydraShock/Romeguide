import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://upload.wikimedia.org/wikipedia/commons/8/83/Orvieto_at_night.jpg
// overview: https://upload.wikimedia.org/wikipedia/commons/3/34/Orvieto_-_Italy_-_2012_1.jpg
// highlight-1: https://www.pexels.com/photo/gothic-cathedral-details-35531509/
// highlight-2: https://www.pexels.com/photo/medieval-village-in-italy-35797728/
// highlight-3: https://www.pexels.com/photo/hillside-umbria-panorama-35531510/
// highlight-4: https://upload.wikimedia.org/wikipedia/commons/b/b2/Orvieto-panorama.jpg
const privateOrvietoUmbriaTourData: TourPageData = {
  slug: "private-orvieto-umbria-tour",
  path: "/tours-in-italy/private-orvieto-umbria-tour",
  seoTitle:
    "Private Orvieto & Umbria Tour | Hill Towns, Cathedral, Countryside & Custom Experience | Rome Guide Services",
  seoDescription:
    "Explore Orvieto and Umbria with a private tour at your pace, with hill towns, cathedral heritage, countryside views, and food and wine options.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Private Orvieto & Umbria Tour",
    landmarksLine: "ORVIETO \u2022 HILL TOWNS \u2022 COUNTRYSIDE \u2022 FOOD & WINE",
    subtitle:
      "Discover Orvieto and Umbria with a private route built around hill-town beauty, cathedral architecture, countryside rhythm, and a slower pace.",
    intentLine:
      "From Orvieto's skyline and cathedral to scenic villages and local food, we shape the day around what you enjoy most.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/orvieto-umbria/hero-private-orvieto-umbria-tour.jpg",
    imageAlt: "Orvieto illuminated at dusk above the Umbrian landscape",
    quickFacts: [
      "Private only",
      "Custom pacing",
      "Scenic and cultural focus",
      "Food and wine extensions available",
    ],
    microTags: [
      "Couples",
      "Hill-town lovers",
      "Food and wine travelers",
    ],
  },
  facts: [
    { label: "Duration", value: "Full day / Custom" },
    { label: "Format", value: "Private countryside experience" },
    { label: "Focus", value: "Orvieto + Umbrian atmosphere" },
    { label: "Route Style", value: "Scenic and cultural" },
    { label: "Best For", value: "Hill towns, architecture, food, wine" },
    { label: "Flexibility", value: "Custom pacing" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "A Calmer Way to See Central Italy",
    intro:
      "Orvieto and Umbria are quieter than Italy's biggest cities, but full of beauty, history, and character.",
    body:
      "A private format lets you enjoy this region at the right pace. Orvieto gives the day a strong cultural base, while Umbria adds villages, scenic roads, and food-and-wine moments. It feels clear, relaxed, and much more enjoyable than a rushed checklist.",
    imageSrc: "/images/tours-in-italy/orvieto-umbria/overview-orvieto-umbrian-atmosphere.jpg",
    imageAlt: "Orvieto and surrounding Umbrian countryside in warm afternoon light",
  },
  highlights: [
    {
      title: "Orvieto: Cathedral, Skyline, and Hill-Town Beauty",
      description:
        "Experience Orvieto through its cathedral, skyline, and cliffside setting.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-orvieto-cathedral-skyline.jpg",
      imageAlt: "Detailed Gothic facade of Orvieto Cathedral",
    },
    {
      title: "Umbria: Slower Roads, Beautiful Villages, and Countryside Rhythm",
      description:
        "Move through hill towns and countryside with a route focused on views, comfort, and continuity.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-umbria-hill-town-streets.jpg",
      imageAlt: "Medieval Umbrian village architecture and stone lanes",
    },
    {
      title: "Food, Wine, and the Quiet Beauty of Central Italy",
      description:
        "Add food and wine moments naturally along the route, without losing the cultural focus.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-umbria-food-wine-rhythm.jpg",
      imageAlt: "Umbrian hillside views and vineyard atmosphere",
    },
    {
      title: "A Private Route Focused on Atmosphere, Not Rush",
      description:
        "Private planning lets us adapt timing, stop depth, and scenic focus to your priorities.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-private-route-atmosphere.jpg",
      imageAlt: "Orvieto skyline profile above central Italy countryside",
    },
  ],
  itinerary: [
    {
      title: "Getting Started in Umbria",
      description:
        "Start with a clear route through hill towns, countryside views, and a slower rhythm.",
    },
    {
      title: "Orvieto as the Main Cultural Stop",
      description:
        "Begin in Orvieto with focus on its skyline, cathedral, and historic center.",
    },
    {
      title: "Hill-Town and Countryside Texture",
      description:
        "Continue through scenic roads and selected villages, with room for unhurried exploration.",
    },
    {
      title: "Choose Priorities Along the Route",
      description:
        "Adapt the route around food, wine, architecture, viewpoints, or a slower atmospheric pace.",
    },
    {
      title: "And Much More...",
      description:
        "Every tour is private and custom, so we can always add more places and ideas based on what you enjoy most.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Any site or cathedral access is planned in advance so timing stays smooth for your route.",
    meetingPointText:
      "Starting points are set based on where you are staying and your route.",
    walkingLevelText:
      "Walking is typically moderate with stone streets and occasional inclines in historic areas.",
    accessibilityNotes:
      "Route pacing can be adjusted where possible, though some town surfaces and viewpoints include uneven terrain.",
    whatToBringText:
      "Comfortable shoes, light layers, and sun protection are recommended for mixed town-and-countryside conditions.",
    securityChecksText:
      "Religious and heritage sites may apply standard entry checks and dress expectations.",
  },
  audience: [
    {
      title: "Couples Seeking a More Romantic Central Italy Experience",
      description:
        "Ideal for travelers who want scenic views, cultural depth, and a comfortable private pace.",
    },
    {
      title: "Travelers Who Want Hill Towns and Countryside Together",
      description:
        "Perfect for guests who value village character and landscape atmosphere beyond major city intensity.",
    },
    {
      title: "Food and Wine Lovers",
      description:
        "A strong fit for travelers who want local food culture as part of the day.",
    },
    {
      title: "Travelers Who Prefer Private Tours",
      description:
        "Designed for visitors who want flexibility, comfort, and a route that makes sense.",
    },
  ],
  upgrades: [
    {
      title: "Wine Tasting Moment",
      description:
        "Add a wine tasting stop where it fits naturally in your day.",
    },
    {
      title: "Gourmet Lunch Reservation Support",
      description:
        "Receive planning assistance for a thoughtfully timed Umbrian lunch stop.",
    },
    {
      title: "Scenic Village Extension",
      description:
        "Add extra village texture and viewpoints when a slower route is your priority.",
    },
    {
      title: "More Comfortable Vehicle",
      description:
        "Add extra comfort with a higher-category vehicle for a smoother private experience.",
    },
    {
      title: "Architecture-Focused Route Adjustment",
      description:
        "Add more focus on the cathedral, streetscape, and heritage details along the route.",
    },
  ],
  testimonial: {
    quote:
      "Their flexibility in adjusting the itinerary to what we wanted was extraordinary, and the full day felt calm, smooth, and very well organized.",
    name: "Jocelyn S",
    context: "Tripadvisor review, Oct 2019",
  },
  faq: [
    {
      question: "Is this a private Orvieto and Umbria experience?",
      answer:
        "Yes. This is a fully private Orvieto and Umbria experience, built around your pace.",
    },
    {
      question: "Can the route be customized?",
      answer:
        "Absolutely. Stops, timing, and themes are adjusted to your interests and travel style.",
    },
    {
      question: "Is this different from a day trip from Rome?",
      answer:
        "Yes. This page is for an Orvieto and Umbria destination tour, not a Rome-departure day trip.",
    },
    {
      question: "Can wine or food stops be included?",
      answer:
        "Yes. Food and wine stops can be added naturally along the route.",
    },
    {
      question: "Is private transport part of the experience?",
      answer:
        "Yes. Private transport can be added based on your preferred route and pace.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is generally moderate, with stone streets and inclines in historic areas.",
    },
    {
      question: "Is this suitable for couples or slower-paced travelers?",
      answer:
        "Yes. It is especially well suited to travelers who value atmosphere, comfort, and a less rushed rhythm.",
    },
  ],
  relatedTours: [
    {
      title: "Private Florence & Tuscany Tour",
      description:
        "Pair Umbria's hill-town rhythm with a Florence route and optional Tuscany extension.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Private Castelli Romani Day Trip from Rome",
      description:
        "Compare this Umbria destination route with a day trip that starts from Rome.",
      href: "/tours/day-trips-from-rome/roman-hill-towns",
    },
    {
      title: "Private Tivoli Day Trip from Rome",
      description:
        "Explore another beautiful central Italy private route focused on villas, gardens, and heritage.",
      href: "/tours/day-trips-from-rome/tivoli",
    },
    {
      title: "Private Sicily Tours",
      description:
        "Continue with private Sicily tours across culture, landscapes, and coastal towns.",
      href: "/tours-in-italy/private-sicily-tours",
    },
    {
      title: "Private Orvieto Day Trip from Rome",
      description:
        "Need a Rome-departure one-day option instead? See the dedicated day-trip page with from-Rome planning.",
      href: "/tours/day-trips-from-rome/orvieto-umbria",
    },
  ],
  finalCta: {
    title: "Plan Your Private Orvieto & Umbria Experience",
      description:
        "Share your dates and interests, and we'll build a private Orvieto and Umbria route that fits your pace.",
    buttonLabel: "Plan This Tour",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private planning",
      "Custom pacing",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: privateOrvietoUmbriaTourData.seoTitle,
    description: privateOrvietoUmbriaTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateOrvietoUmbriaTourData.path,
    },
    openGraph: {
      title: privateOrvietoUmbriaTourData.seoTitle,
      description: privateOrvietoUmbriaTourData.seoDescription,
      url: privateOrvietoUmbriaTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/orvieto-umbria/hero-private-orvieto-umbria-tour.jpg",
          alt: "Orvieto hill-town skyline in warm evening light",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateOrvietoUmbriaTourData.seoTitle,
      description: privateOrvietoUmbriaTourData.seoDescription,
      images: ["/images/tours-in-italy/orvieto-umbria/hero-private-orvieto-umbria-tour.jpg"],
    },
  };
}

export default function PrivateOrvietoUmbriaTourPage() {
  return <TourTemplatePage data={privateOrvietoUmbriaTourData} />;
}
