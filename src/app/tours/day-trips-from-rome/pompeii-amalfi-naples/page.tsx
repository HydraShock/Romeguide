import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://www.pexels.com/photo/aerial-view-of-italian-coastline-town-19730388/
// overview: https://www.pexels.com/photo/old-ruins-under-clear-sky-35626653/
// highlight-1: https://www.pexels.com/photo/ancient-roman-ruins-14754633/
// highlight-2: https://www.pexels.com/photo/manarola-village-in-italy-10436112/
// highlight-3: https://www.pexels.com/photo/castel-dell-ovo-and-vesuvius-36427342/
const pompeiiAmalfiNaplesData: TourPageData = {
  slug: "pompeii-amalfi-naples-day-trip-from-rome",
  path: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
  seoTitle: "Private Pompeii, Amalfi & Naples Day Trip from Rome | Rome Guide Services",
  seoDescription:
    "Explore Pompeii, Naples, and the Amalfi Coast on a private day trip from Rome with tailored pacing, luxury transport, and a curated full-day itinerary.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE DAY TRIP FROM ROME",
    title: "Private Pompeii, Amalfi & Naples Day Trip from Rome",
    landmarksLine: "POMPEII • NAPLES • AMALFI COAST",
    subtitle:
      "Discover southern Italy in one beautifully curated private day trip from Rome. From the ruins of Pompeii to the color and coastline of Naples and Amalfi, this route is designed for comfort, pacing, and memorable views.",
    intentLine:
      "A full-day private experience with tailored timing, scenic driving, and flexible stop planning.",
    primaryCtaLabel: "Plan This Day Trip",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg",
    imageAlt: "Golden-hour Amalfi Coast cliffs and sea on a private day trip route from Rome",
    quickFacts: ["Full day", "Private only", "Driver included", "Guide on request"],
    microTags: [
      "First-time Italy visitors",
      "Couples",
      "Scenic route lovers",
      "Travelers extending a Rome stay",
    ],
  },
  facts: [
    { label: "Duration", value: "Full day" },
    { label: "Departure", value: "From Rome" },
    { label: "Format", value: "Private day trip" },
    { label: "Driver", value: "Included" },
    { label: "Guide", value: "On request" },
    { label: "Main Stops", value: "Pompeii, Naples, Amalfi Coast" },
  ],
  overview: {
    eyebrow: "WHY THIS DAY TRIP",
    title: "Southern Italy, Curated in One Elegant Route",
    intro:
      "This is not a rushed bus-style excursion. It is a private full-day route from Rome, paced around your preferences and designed for elegant, efficient flow.",
    body:
      "Pompeii brings archaeological depth, Naples adds southern character and panoramic energy, and the Amalfi Coast delivers iconic Mediterranean beauty. With private transportation and thoughtful timing, you experience more of Italy in one memorable day without changing hotels.",
    imageSrc: "/images/tours/day-trips/pompeii-amalfi-naples/overview-pompeii-ruins-private-day-trip.jpg",
    imageAlt: "Ancient Pompeii ruins under warm Mediterranean light",
  },
  highlights: [
    {
      title: "Pompeii: The Preserved World of Ancient Daily Life",
      description:
        "Walk through streets, homes, and civic spaces with route pacing that helps archaeology feel vivid, coherent, and worth the journey from Rome.",
      imageSrc: "/images/tours/day-trips/pompeii-amalfi-naples/highlight-pompeii-forum-ruins.jpg",
      imageAlt: "Roman ruins and stone pathways at Pompeii archaeological site",
    },
    {
      title: "Naples: Southern Energy, Views, and Historic Character",
      description:
        "Include selected Naples panoramas or drive-through moments that add urban soul and bay-side perspective to the day.",
      imageSrc: "/images/tours/day-trips/pompeii-amalfi-naples/highlight-naples-castel-dellovo.jpg",
      imageAlt: "Naples waterfront and Castel dell'Ovo with Mount Vesuvius views",
    },
    {
      title: "Amalfi Coast: Scenic Beauty and Iconic Mediterranean Light",
      description:
        "Enjoy dramatic coastline views, village atmosphere, and curated scenic pauses with private-route flexibility.",
      imageSrc: "/images/tours/day-trips/pompeii-amalfi-naples/highlight-amalfi-coast-village.jpg",
      imageAlt: "Colorful village houses on the Amalfi Coast hillside",
    },
    {
      title: "One Private Route, Balanced Around Your Day",
      description:
        "The sequence is planned for comfort and realism, so the day feels curated and memorable rather than overloaded.",
      imageSrc: "/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg",
      imageAlt: "Southern Italy coastal landscape at golden hour",
    },
  ],
  itinerary: [
    {
      title: "Departure from Rome",
      description:
        "Begin with private pickup and departure tailored to your preferred start time.",
    },
    {
      title: "Pompeii Exploration",
      description:
        "Spend time exploring Pompeii with a route adapted to your interest in archaeology, ancient daily life, and Roman history.",
    },
    {
      title: "Naples Drive or Panoramic Stop",
      description:
        "Take in the atmosphere, urban energy, or selected viewpoint moments depending on pacing.",
    },
    {
      title: "Amalfi Coast Scenic Segment",
      description:
        "Enjoy the coastline, villages, and dramatic sea-facing landscapes in a beautifully paced route.",
    },
    {
      title: "Return to Rome",
      description:
        "Finish with a private return journey designed for comfort after a full day.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Pompeii ticket strategy is confirmed during planning so entry timing aligns with your full-day route from Rome.",
    meetingPointText:
      "Pickup from your Rome hotel or an agreed central point is arranged during confirmation.",
    walkingLevelText:
      "Walking is usually moderate, especially in Pompeii where surfaces can be uneven.",
    accessibilityNotes:
      "We adapt pacing where possible, but Pompeii and selected coastal areas may include uneven terrain and steps.",
    whatToBringText:
      "Bring comfortable shoes, water, and sun protection for a warm-weather southern Italy route.",
    securityChecksText:
      "Timed entry and security controls may apply at archaeological sites depending on season and operations.",
  },
  audience: [
    {
      title: "Travelers Wanting One Signature Day Beyond Rome",
      description:
        "Ideal for guests who want one unforgettable full-day escape rather than multiple fragmented transfers.",
    },
    {
      title: "Couples Seeking a Scenic Private Escape",
      description:
        "A refined route with dramatic views, flexible stops, and private comfort throughout the day.",
    },
    {
      title: "Guests Interested in Archaeology and Coastal Italy",
      description:
        "Perfect for travelers who want Pompeii's history and Amalfi's beauty in one curated itinerary.",
    },
    {
      title: "Visitors Preferring Private Transport Over Group Tours",
      description:
        "A strong fit for guests who value elegance, control, and stress-free routing from Rome.",
    },
  ],
  upgrades: [
    {
      title: "Private Pompeii Guide Add-On",
      description: "Add deeper archaeological context with a licensed private guide in Pompeii.",
    },
    {
      title: "Extended Amalfi Coast Scenic Stop",
      description: "Add extra coastline time when route timing and traffic conditions allow.",
    },
    {
      title: "Premium Vehicle Upgrade",
      description: "Elevate comfort with a higher vehicle class for the full-day journey.",
    },
    {
      title: "Lunch Reservation Support",
      description: "Receive concierge help securing a well-timed lunch stop along your route.",
    },
  ],
  testimonial: {
    quote:
      "Our day beyond Rome felt seamless from start to finish. Pompeii was extraordinary, the coastline was unforgettable, and the private pacing made the whole experience feel effortless.",
    name: "Claire M",
    context: "Pompeii & Amalfi private day trip guest",
  },
  faq: [
    {
      question: "Is this a full-day private trip from Rome?",
      answer:
        "Yes. This is designed as a full-day private itinerary with Rome departure and return.",
    },
    {
      question: "Is a Pompeii guide included?",
      answer:
        "A private Pompeii guide is available on request and can be added during planning.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is usually moderate, especially in Pompeii where surfaces are uneven. We adapt pacing where possible.",
    },
    {
      question: "Can the itinerary be customized?",
      answer:
        "Yes. Stop emphasis and pacing can be tailored to your interests, season, and group style.",
    },
    {
      question: "Is Amalfi or Positano always included?",
      answer:
        "Route details depend on traffic, season, and your priorities. We confirm the best coastal segment during planning.",
    },
    {
      question: "Is pickup from our hotel available?",
      answer:
        "Yes. Private pickup from your Rome hotel or an agreed central point is available.",
    },
    {
      question: "Is this suitable for families?",
      answer:
        "Yes. We can adapt pacing, stop durations, and walking load for families and mixed-age groups.",
    },
  ],
  relatedTours: [
    {
      title: "Private Day Trips from Rome",
      description: "Explore all curated private day routes departing from Rome.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Private Tivoli Day Trip from Rome",
      description: "A heritage-focused escape to Hadrian's Villa and Villa d'Este.",
      href: "/tours/day-trips-from-rome/tivoli",
    },
    {
      title: "Private Orvieto Day Trip from Rome",
      description: "Cathedral culture, hill-town atmosphere, and elegant countryside pacing.",
      href: "/tours/day-trips-from-rome/orvieto-umbria",
    },
    {
      title: "Ancient Rome Private Tour",
      description: "Pair your southern day trip with Rome's essential imperial archaeology.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Rome Private Walking Tour",
      description: "Balance your full-day escape with an elegant city-center route at a slower pace.",
      href: "/tours/walking-tours",
    },
  ],
  finalCta: {
    title: "Plan Your Pompeii, Amalfi & Naples Day Trip",
    description:
      "Share your dates and travel preferences, and we will design a private full-day itinerary from Rome with the right balance of archaeology, scenery, and comfort.",
    buttonLabel: "Request Your Private Day Trip",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private transport",
      "Tailor-made pacing",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: pompeiiAmalfiNaplesData.seoTitle,
    description: pompeiiAmalfiNaplesData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: pompeiiAmalfiNaplesData.path,
    },
    openGraph: {
      title: pompeiiAmalfiNaplesData.seoTitle,
      description: pompeiiAmalfiNaplesData.seoDescription,
      url: pompeiiAmalfiNaplesData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg",
          alt: "Golden-hour Amalfi Coast cliffs and sea on a private day trip route from Rome",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pompeiiAmalfiNaplesData.seoTitle,
      description: pompeiiAmalfiNaplesData.seoDescription,
      images: ["/images/tours/day-trips/pompeii-amalfi-naples/hero-pompeii-amalfi-day-trip-from-rome.jpg"],
    },
  };
}

export default function PompeiiAmalfiNaplesDayTripPage() {
  return <TourTemplatePage data={pompeiiAmalfiNaplesData} />;
}
