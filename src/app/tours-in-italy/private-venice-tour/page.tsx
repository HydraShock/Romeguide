import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Canal_in_Venice_after_sunset.jpg/1920px-Canal_in_Venice_after_sunset.jpg
// overview: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg/1920px-St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg
// highlight-1: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg/1920px-St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg
// highlight-2: https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ponte_di_Rialto_facciata_ovest_di_sera.jpg/1920px-Ponte_di_Rialto_facciata_ovest_di_sera.jpg
// highlight-3: https://upload.wikimedia.org/wikipedia/commons/a/ae/Calle_Campaniel_San_Polo_Venice.jpg
// highlight-4: https://upload.wikimedia.org/wikipedia/commons/7/78/Venice_city_scenes_-_night_on_the_Grand_canal%2C_near_St_Mark%27s_square_%2811002355734%29.jpg
const privateVeniceTourData: TourPageData = {
  slug: "private-venice-tour",
  path: "/tours-in-italy/private-venice-tour",
  seoTitle:
    "Venice Tour | St. Mark's, Canals, Hidden Venice & Custom Experience | Rome Guide Services",
  seoDescription:
    "Explore Venice with a private tour at your pace, mixing iconic landmarks, quiet canals, and hidden corners.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Venice Tour",
    landmarksLine: "ST. MARK'S \u2022 CANALS \u2022 HIDDEN VENICE",
    subtitle:
      "Discover Venice with a private route that balances iconic landmarks, quiet canals, and the slower rhythm that makes the city special.",
    intentLine:
      "From St. Mark's and the Grand Canal to hidden lanes and artisan corners, we shape the day around your pace and interests.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/venice/hero-private-venice-tour.jpg",
    imageAlt: "Venetian canal at sunset with warm reflections and beautiful facades",
    quickFacts: ["Private only", "Walking-led", "Guide included", "Custom pacing"],
    microTags: [
      "Couples",
      "First-time Venice visitors",
      "Art and architecture travelers",
      "Guests seeking a quieter pace",
    ],
  },
  facts: [
    { label: "Duration", value: "Half day / Full day / Custom" },
    { label: "Format", value: "Private city tour" },
    { label: "Focus", value: "Venice highlights + hidden corners" },
    { label: "Pace", value: "Flexible" },
    { label: "Best For", value: "Culture, atmosphere, architecture" },
    { label: "Extension", value: "Extra experiences on request" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "Venice Without the Rush",
    intro:
      "Venice can feel overwhelming when you rush it. A private format makes the city easier, clearer, and more enjoyable.",
    body:
      "We balance St. Mark's and other highlights with quieter calli, bridges, and canals where Venice feels more local. With a private guide and a steady walking pace, the city becomes easier to understand and much more memorable.",
    imageSrc: "/images/tours-in-italy/venice/overview-st-marks-private-venice-tour.jpg",
    imageAlt: "St. Mark's Basilica and the monumental heart of Venice",
  },
  highlights: [
    {
      title: "St. Mark's and the Historic Heart of Venice",
      description:
        "Visit Venice's cultural center with clear explanations and a private pace, without rushing monument to monument.",
      imageSrc: "/images/tours-in-italy/venice/overview-st-marks-private-venice-tour.jpg",
      imageAlt: "St. Mark's Basilica in warm Venetian light",
    },
    {
      title: "The Grand Canal, Bridges, and the City's Water-Led Identity",
      description:
        "See Venice through canals, bridges, and viewpoints that show how water shapes daily life in the city.",
      imageSrc: "/images/tours-in-italy/venice/highlight-grand-canal-rialto.jpg",
      imageAlt: "Rialto bridge and Grand Canal at evening hour",
    },
    {
      title: "Hidden Venice: Quiet Passages, Artisan Corners, and Lesser-Known Beauty",
      description:
        "Step away from the busiest routes into quieter lanes that feel more local and authentic.",
      imageSrc: "/images/tours-in-italy/venice/highlight-hidden-venice-calle.jpg",
      imageAlt: "Narrow Venetian calle with historic facades and intimate atmosphere",
    },
    {
      title: "A Private Route Focused on Atmosphere, Not Rush",
      description:
        "Private planning keeps the route clear and enjoyable, with enough time to really enjoy each place.",
      imageSrc: "/images/tours-in-italy/venice/highlight-private-venice-night-route.jpg",
      imageAlt: "Night-time Venice canal scene with warm reflections",
    },
  ],
  itinerary: [
    {
      title: "Getting Started in Venice",
      description:
        "Start with a clear intro to Venice at a calm pace.",
    },
    {
      title: "St. Mark's and the Iconic Core",
      description:
        "Walk through Venice's iconic center with clear explanations and focus on what matters most to you.",
    },
    {
      title: "Canals, Bridges, and the City's Rhythm",
      description:
        "Experience how movement, water, and viewpoints make Venice unlike any other city.",
    },
    {
      title: "Hidden Passages and Your Interests",
      description:
        "Shape the route around quieter areas, architecture, artisans, and your personal priorities.",
    },
    {
      title: "And Much More...",
      description:
        "Every tour is private and custom, so we can always add more places and ideas based on what you enjoy most.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Monument or museum entries can be added during planning based on your preferred depth and timing.",
    meetingPointText:
      "Meeting starts in central Venice, with exact point and timing confirmed during itinerary design.",
    walkingLevelText:
      "This is mainly a walking route across bridges and calli, with pace adjusted to your group.",
    accessibilityNotes:
      "Venice includes bridges and uneven surfaces; we adjust the route where possible for comfort.",
    whatToBringText:
      "Comfortable shoes and weather-appropriate layers are recommended for a city route shaped by walking and water.",
    securityChecksText:
      "Major monuments and museums may apply standard entry checks and timed access windows.",
  },
  audience: [
    {
      title: "First-Time Venice Visitors",
      description:
        "Ideal for guests who want a clear and beautiful private entry point into Venice.",
    },
    {
      title: "Couples Who Prefer an Atmospheric Pace",
      description:
        "Perfect for travelers who value intimacy, beauty, and a less rushed city rhythm.",
    },
    {
      title: "Travelers Who Love Architecture and City Detail",
      description:
        "A strong fit for visitors drawn to facades, bridges, city details, and local history.",
    },
    {
      title: "Travelers Who Prefer Private Tours",
      description:
        "Great for guests who want a smoother day flow, focused storytelling, and flexible pacing.",
    },
  ],
  upgrades: [
    {
      title: "More St. Mark's Focus",
      description:
        "We can place more focus on the St. Mark's area and its history.",
    },
    {
      title: "Doge's Palace or Museum Extension",
      description:
        "Add more museum time if you want stronger historical background.",
    },
    {
      title: "Gondola Experience Coordination",
      description:
        "Coordinate a comfortable gondola segment that aligns naturally with the walking route.",
    },
    {
      title: "Hidden Venice Extension",
      description:
        "Increase time in quieter quarters for atmosphere, architecture, and local texture.",
    },
    {
      title: "Artisans and Local Craft Focus",
      description:
        "Shape the route around Venetian craft tradition and artisan-oriented city segments.",
    },
  ],
  testimonial: {
    quote:
      "In Venice, our guide gave us a wonderful tour of St. Mark's Square, the Doge's Palace, and nearby historic sites in a way that kept everyone engaged.",
    name: "Rich V",
    context: "Tripadvisor review, Jul 2019",
  },
  faq: [
    {
      question: "Is this a walking tour?",
      answer:
        "Yes, it is mainly a walking tour, based on Venice's layout and bridge network.",
    },
    {
      question: "Can the route include St. Mark's or the Doge's Palace?",
      answer:
        "Yes. We can include St. Mark's area focus and add Doge's Palace or museum depth as requested.",
    },
    {
      question: "Is this suitable for first-time visitors to Venice?",
      answer:
        "Absolutely. It works very well as a private introduction to both iconic and quieter Venice.",
    },
    {
      question: "Can the experience be customized around art, architecture, or quieter areas?",
      answer:
        "Yes. The route is built around your priorities, with focus adjusted to your preferred themes.",
    },
    {
      question: "Is gondola coordination possible?",
      answer:
        "Yes, gondola coordination can be included when it aligns with your timing and route design.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is moderate to substantial depending on duration, with pace adjusted to your group.",
    },
    {
      question: "Is this a private guide experience only?",
      answer:
        "Yes. This is a fully private guide experience, built around your pace.",
    },
  ],
  relatedTours: [
    {
      title: "Florence & Tuscany Tour",
      description:
        "Pair Venice with a Florence-first private route focused on Renaissance highlights.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Milan Tour",
      description:
        "Continue north with a private Milan route focused on architecture, design, and city life.",
      href: "/tours-in-italy/private-milan-tour",
    },
    {
      title: "Rome Art & Architecture Tour",
      description:
        "Add Rome with a private route centered on art and architecture.",
      href: "/tours/art-architecture",
    },
    {
      title: "Orvieto & Umbria Tour",
      description:
        "Switch to a calmer countryside route with hill towns, views, and local food culture.",
      href: "/tours-in-italy/private-orvieto-umbria-tour",
    },
  ],
  finalCta: {
    title: "Plan Your Private Venice Experience",
      description:
        "Share your dates and interests, and we'll build a private Venice route that fits your pace.",
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
    title: privateVeniceTourData.seoTitle,
    description: privateVeniceTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateVeniceTourData.path,
    },
    openGraph: {
      title: privateVeniceTourData.seoTitle,
      description: privateVeniceTourData.seoDescription,
      url: privateVeniceTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/venice/hero-private-venice-tour.jpg",
          alt: "Venice canal reflections at warm dusk with beautiful facades",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateVeniceTourData.seoTitle,
      description: privateVeniceTourData.seoDescription,
      images: ["/images/tours-in-italy/venice/hero-private-venice-tour.jpg"],
    },
  };
}

export default function PrivateVeniceTourPage() {
  return <TourTemplatePage data={privateVeniceTourData} />;
}

