import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://www.pexels.com/photo/beautiful-fountains-at-villa-d-este-tivoli-34017020/
// overview: https://www.pexels.com/photo/beautiful-gardens-at-villa-d-este-31563576/
// highlight-1: https://pixabay.com/photos/villa-adriana-hadrians-villa-tivoli-4691262/
// highlight-2: https://www.pexels.com/photo/water-fountain-at-villa-d-este-13816328/
// highlight-3: https://www.pexels.com/photo/beautiful-fountains-at-villa-d-este-tivoli-34017020/
// highlight-4: https://www.pexels.com/photo/beautiful-gardens-at-villa-d-este-31563576/
const tivoliDayTripData: TourPageData = {
  slug: "tivoli-villas-day-trip-from-rome",
  path: "/tours/day-trips-from-rome/tivoli",
  seoTitle:
    "Private Tivoli Day Trip from Rome | Hadrian\u2019s Villa & Villa d\u2019Este | Rome Guide Services",
  seoDescription:
    "Discover Hadrian\u2019s Villa and Villa d\u2019Este on a private day trip from Rome with well-planned pacing, private transport, and a comfortable itinerary through Tivoli\u2019s most iconic villas and gardens.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE DAY TRIP FROM ROME",
    title: "Private Tivoli Day Trip from Rome",
    landmarksLine: "HADRIAN\u2019S VILLA \u2022 VILLA D\u2019ESTE \u2022 TIVOLI",
    subtitle:
      "Escape Rome for a beautifully well-planned private day in Tivoli, where imperial ruins, Renaissance villas, and extraordinary gardens create one of Italy\u2019s most beautiful cultural journeys.",
    intentLine:
      "A full-day private experience designed around comfort, pacing, and a comfortable balance of archaeology, architecture, and landscape.",
    primaryCtaLabel: "Plan This Day Trip",
    secondaryCtaLabel: "Ask for a Custom Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/day-trips/tivoli/hero-tivoli-villas-day-trip-from-rome.jpg",
    imageAlt: "Tivoli villa gardens and terraces in comfortable warm light",
    quickFacts: ["Full day", "Private only", "Driver included", "Guide on request"],
    microTags: ["Garden lovers", "Art and history travelers", "Couples", "Visitors extending a Rome stay"],
  },
  facts: [
    { label: "Duration", value: "Full day" },
    { label: "Departure", value: "From Rome" },
    { label: "Format", value: "Private day trip" },
    { label: "Driver", value: "Included" },
    { label: "Guide", value: "On request" },
    { label: "Main Stops", value: "Hadrian\u2019s Villa, Villa d\u2019Este, Tivoli" },
  ],
  overview: {
    eyebrow: "WHY THIS DAY TRIP",
    title: "Imperial Grandeur, Garden Elegance, and a Slower Rhythm Beyond Rome",
    intro:
      "This is not a rushed excursion. It is a private Tivoli day trip from Rome designed as a cultural retreat, ideal for guests who want beauty and depth without urban intensity.",
    body:
      "Hadrian\u2019s Villa opens a vast imperial archaeological world, while Villa d\u2019Este offers one of Italy\u2019s most celebrated compositions of fountains, terraces, and Renaissance design. With private transportation and well-planned pacing, this Tivoli villas day trip from Rome leaves room for walking, photography, and quiet appreciation.",
    imageSrc: "/images/tours/day-trips/tivoli/overview-villa-deste-gardens-tivoli.jpg",
    imageAlt: "Villa d'Este terraces and fountains in Tivoli",
  },
  highlights: [
    {
      title: "Hadrian\u2019s Villa: Imperial Space on a Monumental Scale",
      description:
        "Explore the immense archaeological landscape of Villa Adriana through a route adapted to your interests in imperial architecture and Roman history.",
      imageSrc: "/images/tours/day-trips/tivoli/highlight-hadrians-villa-monumental-ruins.jpg",
      imageAlt: "Hadrian's Villa ruins and reflective pools in Tivoli",
    },
    {
      title: "Villa d\u2019Este: Fountains, Terraces, and Renaissance Spectacle",
      description:
        "Experience theatrical water features, layered terraces, and comfortable villa design in one of Italy's most iconic garden ensembles.",
      imageSrc: "/images/tours/day-trips/tivoli/highlight-villa-deste-fountain-axis.jpg",
      imageAlt: "Villa d'Este fountain axis and terrace composition",
    },
    {
      title: "Tivoli: A Comfortable Escape Beyond the City",
      description:
        "Enjoy a quieter destination atmosphere beyond Rome, where greenery, stone, and water define a slower cultural rhythm.",
      imageSrc: "/images/tours/day-trips/tivoli/hero-tivoli-villas-day-trip-from-rome.jpg",
      imageAlt: "Beautiful Tivoli garden geometry and cypress-lined terraces",
    },
    {
      title: "One Private Day, Balanced Around Beauty and Pace",
      description:
        "Private transport and thoughtful sequencing keep the day graceful and comfortable from departure to return.",
      imageSrc: "/images/tours/day-trips/tivoli/highlight-tivoli-waterworks-and-views.jpg",
      imageAlt: "Villa d'Este waterworks and historic facade details",
    },
  ],
  itinerary: [
    {
      title: "Departure from Rome",
      description:
        "Begin with private pickup and a comfortable departure from Rome toward Tivoli.",
    },
    {
      title: "Hadrian\u2019s Villa Exploration",
      description:
        "Explore the scale, ruins, and imperial ambition of Hadrian\u2019s Villa through a route adapted to your interests and pacing.",
    },
    {
      title: "Tivoli Pause or Local Transition",
      description:
        "Move through Tivoli with time for transition, atmosphere, and scenic rhythm between major stops.",
    },
    {
      title: "Villa d\u2019Este Gardens and Fountains",
      description:
        "Experience the terraces, water features, and comfortable design language of one of Italy's most celebrated villas.",
    },
    {
      title: "Flexible Return to Rome",
      description:
        "Return to Rome in comfort after a custom-paced day, with optional final stops if you prefer.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so we can always add more stops, moments, and ideas based on your interests and timing.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Entry planning for Hadrian\u2019s Villa and Villa d\u2019Este is coordinated during confirmation so visit windows align with your day.",
    meetingPointText:
      "Hotel pickup from Rome or an agreed central departure point is included and confirmed in advance.",
    walkingLevelText:
      "Walking is typically moderate, with archaeological surfaces at Hadrian\u2019s Villa and sloped garden paths at Villa d\u2019Este.",
    accessibilityNotes:
      "We adapt pace and stop order where possible, but some stairs, inclines, and uneven surfaces may be present.",
    whatToBringText:
      "Bring comfortable shoes, water, and light layers for outdoor villa and garden sections.",
    securityChecksText:
      "Standard entry and site controls can apply at both villas depending on daily operations.",
  },
  audience: [
    {
      title: "Travelers Seeking a Comfortable Day Beyond Rome",
      description:
        "Ideal for guests who want a graceful private cultural escape instead of another monument-heavy city day.",
    },
    {
      title: "Garden and Landscape Lovers",
      description:
        "Perfect for travelers drawn to terraces, fountains, and formal garden design.",
    },
    {
      title: "Guests Interested in Imperial and Renaissance History",
      description:
        "A strong fit for visitors who want Roman archaeological scale and Renaissance artistry in one destination.",
    },
    {
      title: "Couples and Private Travelers Wanting a Slower Cultural Pace",
      description:
        "Designed for relaxed pace, atmospheric stops, and a relaxed rhythm from Rome to Tivoli and back.",
    },
  ],
  upgrades: [
    {
      title: "Private Licensed Guide in Tivoli",
      description:
        "Add expert interpretation for Hadrian\u2019s Villa and Villa d\u2019Este with a private licensed guide.",
    },
    {
      title: "Extended Garden Time",
      description: "Increase time inside Villa d\u2019Este for slower exploration, photography, and atmosphere.",
    },
    {
      title: "Gourmet Lunch Reservation Support",
      description: "Receive planning support for a well-timed lunch stop between villa visits.",
    },
    {
      title: "More Comfortable Vehicle",
      description: "Add extra comfort for your full-day route with a higher private vehicle category.",
    },
  ],
  testimonial: {
    quote:
      "Tivoli felt like the perfect escape from Rome. Hadrian\u2019s Villa was extraordinary, Villa d\u2019Este was unforgettable, and the private pacing made the whole day feel beautifully effortless.",
    name: "Elena R",
    context: "Private Tivoli day trip guest",
  },
  faq: [
    {
      question: "Is this a full-day private trip from Rome?",
      answer:
        "Yes. This is a full-day private Tivoli day trip from Rome with return the same day.",
    },
    {
      question: "Are both Hadrian\u2019s Villa and Villa d\u2019Este included?",
      answer:
        "Yes, both villas are included in the core route, with pacing adapted to your interests.",
    },
    {
      question: "Is a guide included or optional?",
      answer:
        "Guide service is optional. You can add a private licensed guide during planning.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Expect moderate walking across archaeological paths and garden terraces, with pacing adapted where possible.",
    },
    {
      question: "Can the itinerary be customized?",
      answer:
        "Yes. As a private Tivoli tour from Rome, we can tailor timing, stop emphasis, and break rhythm.",
    },
    {
      question: "Is hotel pickup included?",
      answer:
        "Yes. Private pickup from your Rome hotel or an agreed central point is included.",
    },
    {
      question: "Is this a good choice for couples or older travelers?",
      answer:
        "Absolutely. This route is designed for a slower cultural pace and can be adapted for comfort-focused travelers.",
    },
  ],
  relatedTours: [
    {
      title: "Private Day Trips from Rome",
      description: "Compare well-planned destination-led private escapes departing from Rome.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Private Orvieto Day Trip from Rome",
      description: "A comfortable hill-town and cathedral route with beautiful countryside pacing.",
      href: "/tours/day-trips-from-rome/orvieto-umbria",
    },
    {
      title: "Private Pompeii, Amalfi & Naples Day Trip from Rome",
      description: "A top southern Italy route combining archaeology, coast, and private comfort.",
      href: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
    },
    {
      title: "Ancient Rome Private Tour",
      description: "Pair Tivoli's villas with Rome's imperial landmarks for a complete historical arc.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Rome Art & Architecture Tour",
      description: "Continue your cultural itinerary in Rome with a private design-focused city route.",
      href: "/tours/art-architecture",
    },
  ],
  finalCta: {
    title: "Plan Your Private Tivoli Day Trip",
    description:
      "Share your dates and preferences, and we will design a private day from Rome with the right balance of villas, gardens, history, and comfort.",
    buttonLabel: "Request Your Private Day Trip",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private transport",
      "Custom pacing",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: tivoliDayTripData.seoTitle,
    description: tivoliDayTripData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: tivoliDayTripData.path,
    },
    openGraph: {
      title: tivoliDayTripData.seoTitle,
      description: tivoliDayTripData.seoDescription,
      url: tivoliDayTripData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/day-trips/tivoli/hero-tivoli-villas-day-trip-from-rome.jpg",
          alt: "Tivoli villa gardens and terraces in comfortable warm light",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tivoliDayTripData.seoTitle,
      description: tivoliDayTripData.seoDescription,
      images: ["/images/tours/day-trips/tivoli/hero-tivoli-villas-day-trip-from-rome.jpg"],
    },
  };
}

export default function TivoliDayTripPage() {
  return <TourTemplatePage data={tivoliDayTripData} />;
}
