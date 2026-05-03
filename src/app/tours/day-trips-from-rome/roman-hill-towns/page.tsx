import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://www.pexels.com/photo/labro-lazio-at-sunset-35655977/
// overview: https://www.pexels.com/photo/buildings-on-a-hill-1096770/
// highlight-1: https://www.pexels.com/photo/italian-hillside-village-31681934/
// highlight-2: https://www.pexels.com/photo/italian-hilltop-town-with-rolling-hills-29236577/
// highlight-3: https://www.pexels.com/photo/picturesque-town-on-a-hill-19061862/
const romanHillTownsDayTripData: TourPageData = {
  slug: "roman-hill-towns-day-trip-from-rome",
  path: "/tours/day-trips-from-rome/roman-hill-towns",
  seoTitle:
    "Roman Hill Towns Private Day Trip from Rome | Frascati, Castel Gandolfo & Scenic Villages",
  seoDescription:
    "Private day trip from Rome to Roman hill towns with private driver, village stops, lake views, and flexible countryside pacing.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE DAY TRIP FROM ROME",
    title: "Roman Hill Towns\nPrivate Day Trip From Rome",
    landmarksLine: "From Rome | Frascati | Castel Gandolfo | Lake and Village Views",
    subtitle:
      "Enjoy a comfortable countryside day just outside Rome, blending village character, panoramic stops, and slow private pacing.",
    intentLine:
      "A scenic private day from Rome for guests who want atmosphere, local texture, and lower-intensity planning.",
    primaryCtaLabel: "Plan This Day Trip",
    secondaryCtaLabel: "Ask for Food & Wine Focus",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/day-trips/roman-hill-towns/hero-roman-hill-towns-day-trip-from-rome.jpg",
    imageAlt: "Historic hilltop village in Lazio at sunset",
    quickFacts: ["8 hours", "From Rome", "Private driver", "Flexible village stops"],
    microTags: ["Couples", "Slow-travel guests", "Food and wine travelers"],
  },
  facts: [
    { label: "Duration", value: "8 hours" },
    { label: "Departure", value: "Rome hotel pickup" },
    { label: "Format", value: "Private day trip" },
    { label: "Driver", value: "Professional chauffeur" },
    { label: "Main Stops", value: "Frascati, Castel Gandolfo, Nemi" },
    { label: "Best For", value: "Scenic villages and relaxed pace" },
  ],
  overview: {
    title: "Countryside Character Close to Rome",
    intro:
      "The Roman hill towns offer a full-day feeling without very long transfers, ideal for a lighter but still memorable escape.",
    body:
      "This private route is designed around atmosphere and comfort: village streets, panoramic lake viewpoints, and well-planned lunch timing. It is especially strong for couples and travelers who want a softer pace than monument-heavy city touring.",
    imageSrc: "/images/tours/day-trips/roman-hill-towns/overview-castelli-romani-hillscape.jpg",
    imageAlt: "Rolling hills and clustered townscape in the Roman countryside",
  },
  highlights: [
    {
      title: "Frascati and Local Village Life",
      description:
        "Explore beautiful streets and local rhythm in one of the most beloved hill-town zones near Rome.",
      imageSrc: "/images/tours/day-trips/roman-hill-towns/highlight-hillside-village-terraces.jpg",
      imageAlt: "Village terraces and layered homes on a hillside",
    },
    {
      title: "Lake Viewpoints and Scenic Drives",
      description:
        "Enjoy panoramic lake-and-hill compositions through short private transfers and carefully timed stops.",
      imageSrc: "/images/tours/day-trips/roman-hill-towns/highlight-lake-and-hilltown-vistas.jpg",
      imageAlt: "Panoramic hilltown and countryside views near Rome",
    },
    {
      title: "Slow Streets, Comfortable Pace",
      description:
        "This itinerary prioritizes ease and atmosphere, allowing moments to walk, sip, and linger without pressure.",
      imageSrc: "/images/tours/day-trips/roman-hill-towns/highlight-slow-village-streets.jpg",
      imageAlt: "Historic village lane in warm evening light",
    },
  ],
  itinerary: [
    {
      title: "Pickup in Rome and Transfer to First Hill Town",
      description:
        "Start with private departure from Rome and a short scenic drive into the Castelli Romani area.",
    },
    {
      title: "Frascati Exploration Window",
      description:
        "Stroll through key streets and viewpoints with optional local tasting stops based on your interests.",
    },
    {
      title: "Castel Gandolfo and Lake Panorama",
      description:
        "Continue to elevated viewpoints and village sections with well-planned scenic pauses.",
    },
    {
      title: "Lunch and Optional Nemi Segment",
      description:
        "Pause for lunch and, where preferred, add a short Nemi-style village stop before heading back.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so we can always add more stops, moments, and ideas based on your interests and timing.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "This route is generally low on mandatory ticketing. Any specific venue entries are discussed during planning.",
    meetingPointText: "Pickup is arranged from your Rome accommodation or a central agreed location.",
    walkingLevelText: "Light to moderate walking with village inclines and occasional cobbled streets.",
    accessibilityNotes:
      "We can reduce incline-heavy segments and prioritize vehicle-supported viewpoints if needed.",
    whatToBringText: "Comfortable shoes and a light layer are recommended for village streets and changing weather.",
    securityChecksText: "No major security bottlenecks are typical, but individual venues may enforce entry controls.",
  },
  audience: [
    {
      title: "Couples Wanting a Romantic Day Outside Rome",
      description: "Ideal for scenic drives, village atmosphere, and relaxed lunch experiences.",
    },
    {
      title: "Travelers Preferring Lighter Walking",
      description: "A gentler format than high-density city monument routes.",
    },
    {
      title: "Food and Wine Curious Guests",
      description: "Excellent for adding local cuisine and tasting stops in a private flexible structure.",
    },
    {
      title: "Multi-Day Rome Itineraries",
      description: "Perfect as a calm countryside counterpoint to archaeology-heavy city days.",
    },
  ],
  upgrades: [
    {
      title: "Private Tasting Appointment",
      description: "Add a well-planned local wine or product tasting where schedule and openings align.",
    },
    {
      title: "Extended Village Walk",
      description: "Increase on-foot time in your preferred town for shopping, photos, and slower exploration.",
    },
    {
      title: "More Comfortable Vehicle",
      description: "Add extra transfer comfort with a higher vehicle category and a quieter, more spacious cabin.",
    },
    {
      title: "Family Comfort Adaptation",
      description: "Adjust stop cadence and route complexity for children or mixed-mobility groups.",
    },
  ],
  testimonial: {
    quote:
      "They adjusted the itinerary around what we wanted and delivered a truly smooth day with great flexibility and support from guides and drivers.",
    name: "Jocelyn S",
    context: "Tripadvisor review, Oct 2019",
  },
  faq: [
    {
      question: "Which hill towns are included in this day trip from Rome?",
      answer:
        "Typical stops include Frascati and Castel Gandolfo, with possible additions such as Nemi depending on your pacing.",
    },
    {
      question: "Is this a good option for travelers who want less walking?",
      answer: "Yes. We can prioritize scenic viewpoints and reduce longer uphill segments.",
    },
    {
      question: "Can you include food and wine experiences?",
      answer:
        "Absolutely. We can add well-planned tasting or lunch reservations where timing and availability allow.",
    },
    {
      question: "Is the trip private with hotel pickup from Rome?",
      answer: "Yes. The route is private-only and includes Rome departure and return planning.",
    },
    {
      question: "Can this route be customized for families?",
      answer:
        "Yes. We adapt stop count, break frequency, and walking load to your group profile.",
    },
  ],
  relatedTours: [
    {
      title: "Orvieto & Umbria Private Day Trip",
      description: "For a longer countryside route with stronger cathedral and hill-town cultural focus.",
      href: "/tours/day-trips-from-rome/orvieto-umbria",
    },
    {
      title: "Tivoli Villas Private Day Trip",
      description: "Shift from village atmosphere to world-class villa gardens and imperial archaeology.",
      href: "/tours/day-trips-from-rome/tivoli",
    },
    {
      title: "Day Trips from Rome Collection",
      description: "Compare all private day-trip routes and choose by mood, duration, and interests.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Family-Friendly Rome Tour",
      description: "Pair your countryside day with an in-city route designed for mixed-age groups.",
      href: "/tours/family-friendly",
    },
  ],
  finalCta: {
    title: "Plan Your Roman Hill Towns Day from Rome",
    description:
      "Share your preferred style, from scenic and slow to food-focused. We will build a private countryside route around your day.",
    buttonLabel: "Request This Day Trip",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private pickup from Rome",
      "Flexible village pacing",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: romanHillTownsDayTripData.seoTitle,
    description: romanHillTownsDayTripData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: romanHillTownsDayTripData.path,
    },
    openGraph: {
      title: romanHillTownsDayTripData.seoTitle,
      description: romanHillTownsDayTripData.seoDescription,
      url: romanHillTownsDayTripData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/day-trips/roman-hill-towns/hero-roman-hill-towns-day-trip-from-rome.jpg",
          alt: "Historic hilltop village in Lazio at sunset",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: romanHillTownsDayTripData.seoTitle,
      description: romanHillTownsDayTripData.seoDescription,
      images: ["/images/tours/day-trips/roman-hill-towns/hero-roman-hill-towns-day-trip-from-rome.jpg"],
    },
  };
}

export default function RomanHillTownsDayTripPage() {
  return <TourTemplatePage data={romanHillTownsDayTripData} />;
}
