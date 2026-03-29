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
    "Private Orvieto & Umbria Tour | Hill Towns, Cathedral, Countryside & Tailor-Made Experience | Rome Guide Services",
  seoDescription:
    "Discover Orvieto and Umbria through a private curated experience shaped around hill-town beauty, cathedral architecture, countryside rhythm, food, wine, and elegant pacing.",
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
      "Discover Orvieto and the wider Umbrian atmosphere through a private curated experience shaped around hill-town beauty, cathedral architecture, countryside rhythm, and the quieter elegance of central Italy.",
    intentLine:
      "From Orvieto's dramatic skyline and cathedral to scenic villages, local food, and slower cultural pacing, this private route is designed for travelers who want beauty without rush and depth without noise.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/orvieto-umbria/hero-private-orvieto-umbria-tour.jpg",
    imageAlt: "Orvieto illuminated at dusk above the Umbrian landscape",
    quickFacts: [
      "Private only",
      "Tailor-made pacing",
      "Scenic and cultural focus",
      "Food and wine extensions available",
    ],
    microTags: [
      "Couples",
      "Hill-town lovers",
      "Food and wine travelers",
      "Guests seeking a slower pace",
    ],
  },
  facts: [
    { label: "Duration", value: "Full day / Tailor-made" },
    { label: "Format", value: "Private countryside experience" },
    { label: "Focus", value: "Orvieto + Umbrian atmosphere" },
    { label: "Route Style", value: "Scenic and cultural" },
    { label: "Best For", value: "Hill towns, architecture, food, wine" },
    { label: "Flexibility", value: "Tailor-made pacing" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "A More Graceful Central Italy Experience, Built Around Place Rather Than Rush",
    intro:
      "Orvieto and Umbria are often overshadowed by louder destinations, yet they offer one of central Italy's most rewarding combinations of architecture, atmosphere, and countryside rhythm.",
    body:
      "A private format reveals this region at the right pace. Orvieto provides a strong visual and cultural anchor through its skyline and cathedral, while the wider Umbrian layer adds elegant villages, scenic roads, food-and-wine texture, and reflective tempo. This is not a checklist route or one-day speed run. It is a refined journey shaped around place, beauty, and intelligent pacing.",
    imageSrc: "/images/tours-in-italy/orvieto-umbria/overview-orvieto-umbrian-atmosphere.jpg",
    imageAlt: "Orvieto and surrounding Umbrian countryside in warm afternoon light",
  },
  highlights: [
    {
      title: "Orvieto: Cathedral, Skyline, and Hill-Town Drama",
      description:
        "Experience Orvieto as the route's visual and architectural anchor, where cathedral craft and cliffside identity create immediate impact.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-orvieto-cathedral-skyline.jpg",
      imageAlt: "Detailed Gothic facade of Orvieto Cathedral",
    },
    {
      title: "Umbria: Slower Roads, Elegant Villages, and Countryside Rhythm",
      description:
        "Move through hill-town and rural settings with a route designed for atmosphere, proportion, and scenic continuity.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-umbria-hill-town-streets.jpg",
      imageAlt: "Medieval Umbrian village architecture and stone lanes",
    },
    {
      title: "Food, Wine, and the Quiet Luxury of Central Italy",
      description:
        "Add culinary and wine moments as natural supporting layers that enrich the route without overwhelming its cultural focus.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-umbria-food-wine-rhythm.jpg",
      imageAlt: "Umbrian hillside textures and vineyard atmosphere",
    },
    {
      title: "A Private Route Shaped Around Atmosphere, Not Rush",
      description:
        "Private planning allows timing, stop depth, and scenic emphasis to adapt to your priorities instead of group-tour constraints.",
      imageSrc: "/images/tours-in-italy/orvieto-umbria/highlight-private-route-atmosphere.jpg",
      imageAlt: "Orvieto skyline profile above central Italy countryside",
    },
  ],
  itinerary: [
    {
      title: "Entering the Umbrian Atmosphere",
      description:
        "Frame the experience through the contrast between hill-town architecture, countryside depth, and slower cultural rhythm.",
    },
    {
      title: "Orvieto as the Architectural and Visual Anchor",
      description:
        "Begin in Orvieto with focus on skyline presence, cathedral identity, and the character of its historic core.",
    },
    {
      title: "Hill-Town and Countryside Texture",
      description:
        "Continue through scenic segments and selected village layers with room for perspective and unhurried exploration.",
    },
    {
      title: "Tailored Priorities Along the Route",
      description:
        "Adapt the route around food, wine, architecture, viewpoints, or a slower atmospheric pace.",
    },
    {
      title: "A Private Experience Built Around Your Style",
      description:
        "Conclude with a coherent journey shaped around your preferences, not fixed group-tour logic.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Any site or cathedral access is aligned during planning so timing supports your preferred route rhythm.",
    meetingPointText:
      "Starting logistics are coordinated according to your base location and private route design.",
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
        "Ideal for travelers wanting scenic elegance, cultural depth, and private pacing in one refined route.",
    },
    {
      title: "Travelers Wanting Hill Towns and Countryside in One Refined Route",
      description:
        "Perfect for guests who value village character and landscape atmosphere beyond major city intensity.",
    },
    {
      title: "Food and Wine Lovers",
      description:
        "A strong fit for travelers who want local culinary texture integrated into a broader cultural journey.",
    },
    {
      title: "Guests Who Prefer Private Pacing Over Standard Group Touring",
      description:
        "Designed for visitors seeking flexibility, comfort, and curated route logic.",
    },
  ],
  upgrades: [
    {
      title: "Wine Tasting Add-On",
      description:
        "Integrate a curated wine moment where it naturally fits your route style and timing.",
    },
    {
      title: "Gourmet Lunch Reservation Support",
      description:
        "Receive concierge assistance for a thoughtfully timed Umbrian lunch stop.",
    },
    {
      title: "Scenic Village Extension",
      description:
        "Add extra village texture and viewpoints when a slower route is your priority.",
    },
    {
      title: "Premium Vehicle Upgrade",
      description:
        "Elevate comfort with a higher-category vehicle for a smoother private experience.",
    },
    {
      title: "Architecture-Focused Route Adjustment",
      description:
        "Increase emphasis on cathedral, streetscape, and heritage detail along the route.",
    },
  ],
  testimonial: {
    quote:
      "The route felt beautifully balanced \u2014 Orvieto had drama and elegance, while the wider Umbrian atmosphere made the whole experience feel calm, rich, and deeply memorable.",
    name: "Emma S",
    context: "Private Orvieto & Umbria guest",
  },
  faq: [
    {
      question: "Is this a private Orvieto and Umbria experience?",
      answer:
        "Yes. This is a fully private destination-led experience with tailored pacing and route design.",
    },
    {
      question: "Can the route be customized?",
      answer:
        "Absolutely. Stops, timing, and thematic focus are adapted to your interests and travel style.",
    },
    {
      question: "Is this different from a day trip from Rome?",
      answer:
        "Yes. This page is positioned as an Orvieto and Umbria destination experience, not as a Rome-departure day-trip format.",
    },
    {
      question: "Can wine or food stops be included?",
      answer:
        "Yes. Food and wine elements can be added as curated route extensions.",
    },
    {
      question: "Is private transport part of the experience?",
      answer:
        "Yes. Private transport can be integrated according to your preferred route and pacing.",
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
        "Pair Umbria's hill-town rhythm with a Florence-first private experience and Tuscan cultural depth.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Private Castelli Romani Day Trip from Rome",
      description:
        "Compare this destination-led Umbria route with a Rome-based hill-town day trip format.",
      href: "/tours/day-trips-from-rome/roman-hill-towns",
    },
    {
      title: "Private Tivoli Day Trip from Rome",
      description:
        "Explore another elegant central Italy private route focused on villas, gardens, and heritage.",
      href: "/tours/day-trips-from-rome/tivoli",
    },
    {
      title: "Private Sicily Tours",
      description:
        "Continue with a richer regional private journey across Sicily's culture, landscapes, and atmosphere.",
      href: "/tours-in-italy/private-sicily-tours",
    },
    {
      title: "Private Orvieto Day Trip from Rome",
      description:
        "Need a Rome-departure one-day option instead? See the dedicated day-trip page with from-Rome logistics.",
      href: "/tours/day-trips-from-rome/orvieto-umbria",
    },
  ],
  finalCta: {
    title: "Plan Your Private Orvieto & Umbria Experience",
    description:
      "Share your dates, interests, and priorities, and we will shape a private central Italy route with the right balance of scenery, architecture, food, wine, and elegant pacing.",
    buttonLabel: "Request Your Private Tour",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private planning",
      "Tailor-made pacing",
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
