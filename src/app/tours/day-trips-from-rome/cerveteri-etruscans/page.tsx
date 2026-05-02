import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://www.pexels.com/photo/aerial-view-of-ancient-ruins-34565989/
// overview: https://www.pexels.com/photo/ancient-pillars-in-italy-10963330/
// highlight-1: https://www.pexels.com/photo/historic-roman-ruins-in-pompeii-33798773/
// highlight-2: https://www.pexels.com/photo/old-wall-paintings-in-pompeii-35626656/
// highlight-3: https://www.pexels.com/photo/historic-roman-ruins-at-palatine-hill-36240426/
const cerveteriEtruscansDayTripData: TourPageData = {
  slug: "cerveteri-etruscans-day-trip-from-rome",
  path: "/tours/day-trips-from-rome/cerveteri-etruscans",
  seoTitle:
    "Cerveteri & Etruscan Heritage Private Day Trip from Rome | Necropolis and Ancient Lazio",
  seoDescription:
    "Private day trip from Rome to Cerveteri's Etruscan heritage zone with private transport, curated archaeological pacing, and optional expert guidance.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE DAY TRIP FROM ROME",
    title: "Cerveteri & Etruscan Heritage\nPrivate Day Trip From Rome",
    landmarksLine: "From Rome | Banditaccia Necropolis | Etruscan Legacy in Lazio",
    subtitle:
      "Go beyond Roman history into the Etruscan world with a private day trip from Rome designed around archaeology, context, and route comfort.",
    intentLine:
      "A curated private archaeology route from Rome focused on pre-Roman civilization, funerary landscapes, and cultural continuity.",
    primaryCtaLabel: "Plan This Day Trip",
    secondaryCtaLabel: "Ask for Archaeology Focus",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc:
      "/images/tours/day-trips/cerveteri-etruscans/hero-cerveteri-etruscan-day-trip-from-rome.jpg",
    imageAlt: "Ancient archaeological landscape in Lazio for an Etruscan heritage route",
    quickFacts: ["7 to 8 hours", "From Rome", "Private vehicle", "Guide optional"],
    microTags: ["Archaeology lovers", "Repeat Rome visitors", "History-focused travelers"],
  },
  facts: [
    { label: "Duration", value: "7 to 8 hours" },
    { label: "Departure", value: "Rome hotel pickup" },
    { label: "Format", value: "Private day trip" },
    { label: "Driver", value: "Private chauffeur" },
    { label: "Main Stops", value: "Banditaccia, local heritage zone" },
    { label: "Best For", value: "Pre-Roman history enthusiasts" },
  ],
  overview: {
    title: "A Different Chapter of Ancient Italy",
    intro:
      "Cerveteri offers a rare chance to explore the Etruscan world in one manageable private day from Rome.",
    body:
      "This route focuses on funerary architecture, settlement context, and the cultural foundations that predate Roman dominance. With private transport and optional guide depth, the experience feels both intellectually rich and logistically effortless.",
    imageSrc:
      "/images/tours/day-trips/cerveteri-etruscans/overview-etruscan-heritage-rome-day-trip.jpg",
    imageAlt: "Classical stone columns and archaeological remains for Etruscan context",
  },
  highlights: [
    {
      title: "Banditaccia Necropolis Context",
      description:
        "Understand burial architecture, social hierarchy, and ritual culture through one of Italy's most important Etruscan sites.",
      imageSrc:
        "/images/tours/day-trips/cerveteri-etruscans/highlight-ancient-necropolis-landscape.jpg",
      imageAlt: "Archaeological landscape representing ancient necropolis terrain",
    },
    {
      title: "Etruscan Art, Symbols, and Legacy",
      description:
        "Connect visual motifs and funerary culture to the later Roman world through curated interpretive stops.",
      imageSrc:
        "/images/tours/day-trips/cerveteri-etruscans/highlight-etruscan-art-and-reliefs.jpg",
      imageAlt: "Ancient wall details and artistic traces from historical ruins",
    },
    {
      title: "Private Route Through Ancient Lazio",
      description:
        "Enjoy a calm transport-led day with room for focused archaeology rather than complex transit planning.",
      imageSrc:
        "/images/tours/day-trips/cerveteri-etruscans/highlight-ancient-archaeology-route.jpg",
      imageAlt: "Ruins and pathways in an archaeological site in Italy",
    },
  ],
  itinerary: [
    {
      title: "Pickup in Rome and Transfer North-West",
      description:
        "Depart Rome with private driver service and route briefing on the Etruscan focus of the day.",
    },
    {
      title: "Banditaccia Necropolis Visit",
      description:
        "Explore key sectors with optional expert guidance to decode funerary architecture and cultural meaning.",
    },
    {
      title: "Local Heritage Segment",
      description:
        "Add a nearby museum or contextual stop depending on opening schedules and your historical priorities.",
    },
    {
      title: "Lunch and Scenic Pause",
      description:
        "Enjoy a relaxed break in the Cerveteri area with timing tailored to your energy and return window.",
    },
    {
      title: "Return to Rome",
      description:
        "Return by private vehicle and reach Rome with enough evening flexibility for onward plans.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Necropolis and museum entry details are coordinated during planning according to current opening calendars.",
    meetingPointText: "Private pickup is arranged from your Rome hotel or a central agreed point.",
    walkingLevelText: "Moderate walking with uneven surfaces in archaeological areas.",
    accessibilityNotes:
      "Some site sections may have limited accessibility. We adapt pace and stop sequence where feasible.",
    whatToBringText:
      "Bring comfortable footwear, water, and sun protection for open-site archaeology conditions.",
    securityChecksText: "Site-specific ticket and access controls may apply based on management policies.",
  },
  audience: [
    {
      title: "Travelers Interested in Pre-Roman Italy",
      description: "Ideal for guests who want historical depth beyond the standard imperial Rome narrative.",
    },
    {
      title: "Repeat Visitors to Rome",
      description: "Perfect if you have seen central landmarks and want a different archaeological lens.",
    },
    {
      title: "Academic and Culturally Curious Guests",
      description: "A strong option for history-forward travelers who value context and interpretation.",
    },
    {
      title: "Private Groups Seeking Low-Stress Logistics",
      description: "Door-to-door transport keeps the day easy while preserving high-content site exploration.",
    },
  ],
  upgrades: [
    {
      title: "Archaeology Specialist Guide",
      description: "Add deeper Etruscan-focused commentary for high-context site interpretation.",
    },
    {
      title: "Tarquinia Extension",
      description:
        "Where timing permits, add a second Etruscan destination for broader comparative context.",
    },
    {
      title: "Private Lunch Reservation",
      description: "Secure a calm local table aligned with your preferred meal style and dietary needs.",
    },
    {
      title: "Family Adapted Pace",
      description: "Adjust route intensity for mixed-age travelers while preserving archaeological value.",
    },
  ],
  testimonial: {
    quote:
      "This trip gave us the missing chapter before Rome. The private format made a complex historical topic feel easy and fascinating.",
    name: "Robert L",
    context: "Cerveteri private day trip guest",
  },
  faq: [
    {
      question: "How far is Cerveteri from Rome?",
      answer:
        "Drive time is usually around one hour, making it a practical full-day private archaeology route.",
    },
    {
      question: "What is included in this Etruscan day trip?",
      answer:
        "Private transport and curated route planning are included. Guide and ticket elements are confirmed during planning.",
    },
    {
      question: "Is this trip suitable for children or teens?",
      answer: "Yes. We can simplify historical framing and adjust pacing for younger travelers.",
    },
    {
      question: "Can we combine Cerveteri with another nearby stop?",
      answer:
        "In many cases yes. We can add a secondary heritage stop when timing and site hours align.",
    },
    {
      question: "How much walking is involved at the necropolis?",
      answer: "Expect moderate walking on archaeological terrain with uneven surfaces in selected sectors.",
    },
  ],
  relatedTours: [
    {
      title: "Ostia Antica Private Day Trip",
      description: "Another archaeology-led route from Rome with shorter transfers and urban Roman context.",
      href: "/tours/day-trips-from-rome/ostia-antica",
    },
    {
      title: "Roman Hill Towns Private Day Trip",
      description: "Switch from archaeology to village landscapes and countryside rhythm.",
      href: "/tours/day-trips-from-rome/roman-hill-towns",
    },
    {
      title: "Day Trips from Rome Collection",
      description: "See all private full-day destination options departing from Rome.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Christian Rome Private Tour",
      description: "Connect pre-Roman heritage with Rome's later religious and cultural evolution.",
      href: "/tours/christian-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Cerveteri Etruscan Day from Rome",
    description:
      "Share your history interests and date. We will craft a private archaeology route with the right depth and pacing for your group.",
    buttonLabel: "Request This Day Trip",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private pickup from Rome",
      "Optional expert archaeology guidance",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: cerveteriEtruscansDayTripData.seoTitle,
    description: cerveteriEtruscansDayTripData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: cerveteriEtruscansDayTripData.path,
    },
    openGraph: {
      title: cerveteriEtruscansDayTripData.seoTitle,
      description: cerveteriEtruscansDayTripData.seoDescription,
      url: cerveteriEtruscansDayTripData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/day-trips/cerveteri-etruscans/hero-cerveteri-etruscan-day-trip-from-rome.jpg",
          alt: "Ancient archaeological landscape in Lazio for an Etruscan heritage route",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cerveteriEtruscansDayTripData.seoTitle,
      description: cerveteriEtruscansDayTripData.seoDescription,
      images: ["/images/tours/day-trips/cerveteri-etruscans/hero-cerveteri-etruscan-day-trip-from-rome.jpg"],
    },
  };
}

export default function CerveteriEtruscansDayTripPage() {
  return <TourTemplatePage data={cerveteriEtruscansDayTripData} />;
}
