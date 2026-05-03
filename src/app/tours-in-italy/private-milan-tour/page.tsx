import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero + highlight-1: https://upload.wikimedia.org/wikipedia/commons/1/18/Duomo_di_Milano_by_night_%2844602863405%29.jpg
// overview + highlight-4: https://upload.wikimedia.org/wikipedia/commons/5/5d/Milano%2C_Galleria_Vittorio_Emanuele_II%2C_2016-06_CN-01.jpg
// highlight-2: https://upload.wikimedia.org/wikipedia/commons/8/89/Brera%2C_20121_Milano%2C_Italy_-_panoramio.jpg
// highlight-3: https://upload.wikimedia.org/wikipedia/commons/6/66/Milan_skyline_around_Unicredit_Tower_from_Duomo.jpg
const privateMilanTourData: TourPageData = {
  slug: "private-milan-tour",
  path: "/tours-in-italy/private-milan-tour",
  seoTitle:
    "Private Milan Tour | Duomo, Brera, Design, Architecture & Custom Experience | Rome Guide Services",
  seoDescription:
    "Explore Milan with a private tour at your pace, from iconic landmarks to quieter neighborhoods and design-focused streets.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Private Milan Tour",
    landmarksLine: "DUOMO \u2022 BRERA \u2022 DESIGN \u2022 HIDDEN MILAN",
    subtitle:
      "Discover Milan with a private route that balances iconic landmarks, architectural detail, and quieter neighborhoods.",
    intentLine:
      "From the Duomo and Galleria to Brera and hidden corners, we shape the day around your pace and interests.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/milan/hero-private-milan-tour.jpg",
    imageAlt: "Milan Duomo illuminated in warm evening light",
    quickFacts: ["Private only", "Walking-led", "Guide included", "Custom pacing"],
    microTags: [
      "Architecture lovers",
      "Design-minded travelers",
      "First-time Milan visitors",
      "Guests seeking a comfortable pace",
    ],
  },
  facts: [
    { label: "Duration", value: "Half day / Full day / Custom" },
    { label: "Format", value: "Private city tour" },
    { label: "Focus", value: "Milan highlights + hidden districts" },
    { label: "Pace", value: "Flexible" },
    { label: "Best For", value: "Architecture, culture, design" },
    { label: "Extension", value: "Extra experiences on request" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "See the Real Milan, Not Just the Postcard Version",
    intro:
      "Milan is much more than business and fashion headlines. A private tour helps you enjoy the city in a clearer, more relaxed way.",
    body:
      "We start from the Duomo area, then connect the route through the Galleria, Brera, courtyards, and key architectural transitions. You still see the famous places, but also the quieter details that make Milan feel real.",
    imageSrc: "/images/tours-in-italy/milan/overview-duomo-district-private-milan-tour.jpg",
    imageAlt: "Galleria Vittorio Emanuele II urban perspective in Milan",
  },
  highlights: [
    {
      title: "The Duomo and the Monumental Heart of Milan",
      description:
        "Explore the cathedral district as Milan's symbolic center, with simple context that goes beyond first impressions.",
      imageSrc: "/images/tours-in-italy/milan/highlight-duomo-monumental-heart.jpg",
      imageAlt: "Duomo di Milano facade and spires at night",
    },
    {
      title: "Brera, Beautiful Streets, and the City's Cultural Texture",
      description:
        "Walk through one of Milan's most enjoyable districts, where the city feels quieter and more local.",
      imageSrc: "/images/tours-in-italy/milan/highlight-brera-cultural-texture.jpg",
      imageAlt: "Brera district street scene in Milan",
    },
    {
      title: "Design and Architecture Across Old and New Milan",
      description:
        "See how Milan moves between heritage and modern design through streets, buildings, and city spaces.",
      imageSrc: "/images/tours-in-italy/milan/highlight-milan-design-architecture.jpg",
      imageAlt: "Milan architecture skyline with design-forward urban profile",
    },
    {
      title: "A Private Route Through Famous Spots and Hidden Corners",
      description:
        "Private pacing lets you enjoy famous places and quieter corners in one smooth route.",
      imageSrc: "/images/tours-in-italy/milan/highlight-private-milan-discreet-route.jpg",
      imageAlt: "Milan's beautiful gallery axis with warm urban light",
    },
  ],
  itinerary: [
    {
      title: "Getting Started in Milan",
      description:
        "Start with a clear intro to Milan at a calm pace.",
    },
    {
      title: "The Duomo District and Milan's Monumental Core",
      description:
        "Move through the cathedral area and nearby landmarks with clear explanations at the right depth for you.",
    },
    {
      title: "Brera and Milan's Local Rhythm",
      description:
        "Continue through Brera and nearby streets to see Milan's style and rhythm up close.",
    },
    {
      title: "Choose Your Focus: Design, Architecture, Hidden Corners, or Culture",
      description:
        "Shape the route around your priorities and the specific Milan you want to understand.",
    },
    {
      title: "And Much More...",
      description:
        "Every tour is private and custom, so we can always add more places and ideas based on what you enjoy most.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Museum and monument entries are planned during confirmation to match your preferred depth and timing.",
    meetingPointText:
      "Meeting starts in central Milan, with exact point and timing confirmed in advance.",
    walkingLevelText:
      "This is mainly a walking city route, with pace adjusted to your group and priorities.",
    accessibilityNotes:
      "We can adjust the order where possible, though historic surfaces and traffic conditions may vary.",
    whatToBringText:
      "Comfortable shoes and weather-appropriate layers are recommended for city exploration.",
    securityChecksText:
      "Major landmarks and museums can apply standard entry controls and timed access windows.",
  },
  audience: [
    {
      title: "First-Time Milan Visitors",
      description:
        "Ideal for guests seeking a clear, beautiful private overview of Milan's main character.",
    },
    {
      title: "Architecture and Design Travelers",
      description:
        "Perfect for visitors who want deeper insight into Milan's built environment and design culture.",
    },
    {
      title: "Couples Seeking a More Comfortable Pace",
      description:
        "Great for travelers who prefer a relaxed pace over a rushed schedule.",
    },
    {
      title: "Travelers Who Prefer Private Tours",
      description:
        "Great for travelers who want a smoother day flow, focused storytelling, and flexibility.",
    },
  ],
  upgrades: [
    {
      title: "More Duomo Focus",
      description:
        "Add more focus on the Duomo district and its architectural story.",
    },
    {
      title: "Brera Art and District Extension",
      description:
        "Extend time in Brera for stronger cultural and neighborhood depth.",
    },
    {
      title: "Last Supper Planning Support",
      description:
        "Receive planning support around Last Supper availability and complementary nearby routing.",
    },
    {
      title: "Design-Focused Route Extension",
      description:
        "Shape the experience around design and architecture priorities across selected city segments.",
    },
    {
      title: "Fashion and Beautiful Streets Focus",
      description:
        "Add a comfortable urban style layer framed as cultural streetscape, not generic shopping.",
    },
  ],
  testimonial: {
    quote:
      "Carlo has been our guide for multiple trips to Italy, and every time his planning and local team make the experience smooth, clear, and worth every euro.",
    name: "TexasPilot78218",
    context: "Tripadvisor review, Jun 2023",
  },
  faq: [
    {
      question: "Is this a walking tour?",
      answer:
        "Yes, it is mainly walking-based, with pace adjusted to your group and interests.",
    },
    {
      question: "Can the route include the Duomo and Brera?",
      answer:
        "Yes. Both can be included, with focus adjusted to how deep you want to go.",
    },
    {
      question: "Is this suitable for first-time visitors to Milan?",
      answer:
        "Absolutely. It works very well as a private introduction to both iconic and quieter Milan.",
    },
    {
      question: "Can the experience be customized around architecture, design, or beautiful districts?",
      answer:
        "Yes. The route is built around your priorities and main interests.",
    },
    {
      question: "Is museum access included or separate?",
      answer:
        "Museum access is planned during confirmation and can be added based on availability and timing.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is moderate to substantial depending on duration, with private pacing throughout.",
    },
    {
      question: "Is this a fully private guide experience?",
      answer:
        "Yes. This is a fully private guided experience, built around your group.",
    },
  ],
  relatedTours: [
    {
      title: "Private Venice Tour",
      description:
        "Pair Milan with a private Venice route centered on canals and quieter corners.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Private Florence & Tuscany Tour",
      description:
        "Continue with a Florence-focused private route and optional Tuscany extension.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Rome Art & Architecture Tour",
      description:
        "Add Rome with a private route focused on art, design, and architecture.",
      href: "/tours/art-architecture",
    },
  ],
  finalCta: {
    title: "Plan Your Private Milan Experience",
      description:
        "Share your dates and interests, and we'll build a private Milan route that fits your pace.",
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
    title: privateMilanTourData.seoTitle,
    description: privateMilanTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateMilanTourData.path,
    },
    openGraph: {
      title: privateMilanTourData.seoTitle,
      description: privateMilanTourData.seoDescription,
      url: privateMilanTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/milan/hero-private-milan-tour.jpg",
          alt: "Duomo di Milano in evening atmosphere",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateMilanTourData.seoTitle,
      description: privateMilanTourData.seoDescription,
      images: ["/images/tours-in-italy/milan/hero-private-milan-tour.jpg"],
    },
  };
}

export default function PrivateMilanTourPage() {
  return <TourTemplatePage data={privateMilanTourData} />;
}
