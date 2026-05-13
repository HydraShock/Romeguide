import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://commons.wikimedia.org/wiki/File:Positano_Sunset.JPG
// overview: https://commons.wikimedia.org/wiki/File:Evening_view_on_the_bay_of_Naples,_overlooking_Mount_Vesuvius.jpg
// highlight-1: https://www.pexels.com/photo/church-tower-and-sea-view-in-naples-32878039/
// highlight-2: https://www.pexels.com/photo/aerial-view-of-naples-and-mount-vesuvius-35979501/
// highlight-3: https://www.pexels.com/photo/sunset-over-seashore-in-sorrento-6992021/
// highlight-4: https://www.pexels.com/photo/landscape-photo-of-positano-27025488/
const privateNaplesAmalfiCoastTourData: TourPageData = {
  slug: "private-naples-amalfi-coast-tour",
  path: "/tours-in-italy/private-naples-amalfi-coast-tour",
  seoTitle:
    "Naples & Amalfi Coast Tour | Private Southern Italy Experience | Rome Guide Services",
  seoDescription:
    "Explore Naples and the Amalfi Coast with a private tour built around your pace, from city character to stunning coastal views.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Naples & Amalfi Coast Tour",
    landmarksLine: "NAPLES \u2022 AMALFI COAST \u2022 SOUTHERN ITALY ATMOSPHERE",
    subtitle:
      "Discover Naples and the Amalfi Coast with a private route built around scenic views, local character, and the right pace for your group.",
    intentLine:
      "From Naples to the coast, we shape the day around your interests so southern Italy feels easy, beautiful, and never rushed.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/naples-amalfi/hero-private-naples-amalfi-coast-tour.jpg",
    imageAlt: "Positano and the Amalfi Coast glowing in warm sunset light",
    quickFacts: [
      "Private only",
      "Custom pacing",
      "Driver-led route available",
      "Scenic and cultural focus",
    ],
    microTags: [
      "Couples",
      "Coastal route lovers",
      "Returning Italy travelers",
      "Guests who love scenic coastal days",
    ],
  },
  facts: [
    { label: "Duration", value: "Full day / Multi-stop / Custom" },
    { label: "Format", value: "Private coastal experience" },
    { label: "Focus", value: "Naples + Amalfi Coast" },
    { label: "Route Style", value: "Scenic and cultural" },
    { label: "Best For", value: "Southern Italy, views, atmosphere, architecture" },
    { label: "Flexibility", value: "Custom pacing" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "See Southern Italy Without Rushing It",
    intro:
      "Naples and the Amalfi Coast are often packed into stressful schedules. A private format gives you a calmer and more enjoyable day.",
    body:
      "This route balances city character and coastal beauty with practical timing and selective stops. You still see the highlights, but with room to enjoy the views, ask questions, and travel at a comfortable pace.",
    imageSrc:
      "/images/tours-in-italy/naples-amalfi/overview-naples-bay-private-coastal-tour.jpg",
    imageAlt: "Naples Bay and Mount Vesuvius in cinematic evening atmosphere",
  },
  highlights: [
    {
      title: "Naples: Urban Character, History, and Southern Energy",
      description:
        "Explore Naples through its streets, architecture, and local energy.",
      imageSrc: "/images/tours-in-italy/naples-amalfi/highlight-naples-urban-character.jpg",
      imageAlt: "Historic Naples view with warm southern light and coastal depth",
    },
    {
      title: "Amalfi Coast: Mediterranean Light, Cliffs, and Beautiful Scenery",
      description:
        "Enjoy iconic coastal viewpoints where cliffs, villages, and sea light define the Amalfi Coast.",
      imageSrc: "/images/tours-in-italy/naples-amalfi/highlight-amalfi-coast-scenery.jpg",
      imageAlt: "Aerial southern Italy coastline with warm sea and city layers",
    },
    {
      title: "Scenic Movement Between Places, Not Just Checkpoints",
      description:
        "The route is planned so travel time feels part of the experience, not just transfer between stops.",
      imageSrc: "/images/tours-in-italy/naples-amalfi/highlight-scenic-movement-route.jpg",
      imageAlt: "Mediterranean sunset over the southern Italy coast",
    },
    {
      title: "A Private Route Built Around Beauty and Pace",
      description:
        "Private planning lets us adapt the day to your style, instead of a fixed group-tour schedule.",
      imageSrc:
        "/images/tours-in-italy/naples-amalfi/highlight-private-route-southern-italy.jpg",
      imageAlt: "Positano hillside architecture and sea in comfortable coastal light",
    },
  ],
  itinerary: [
    {
      title: "Getting Started in Southern Italy",
      description:
        "Start with a clear plan that balances Naples and the coast around your pace.",
    },
    {
      title: "Naples as the Cultural Anchor",
      description:
        "Explore Naples through its layered history, local character, and architecture.",
    },
    {
      title: "The Amalfi Coast Through Scenic Rhythm",
      description:
        "Follow a coastal route built around views and selected stops, without rushing.",
    },
    {
      title: "Choose Priorities Along the Route",
      description:
        "Adapt the route to your interests, whether you want more scenery, architecture, food, or slower exploration.",
    },
    {
      title: "And Much More...",
      description:
        "Every tour is private and custom, so we can always add more places and ideas based on what you enjoy most.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Any optional site access is planned during confirmation so timing stays clear with your preferred route style.",
    meetingPointText:
      "Start points are set based on where you are staying in southern Italy and your route.",
    walkingLevelText:
      "Walking is typically moderate, with pace adjusted to your group and selected stops.",
    accessibilityNotes:
      "We can adapt sequence where possible, though some historic centers and coastal settings include steps or uneven surfaces.",
    whatToBringText:
      "Comfortable shoes, sun protection, and light layers are recommended for mixed city and coastal conditions.",
    securityChecksText:
      "Major sites may apply standard entry controls based on season and local operations.",
  },
  audience: [
    {
      title: "Couples Looking for a Beautiful Southern Italy Day",
      description:
        "Ideal for travelers who want scenic beauty and a calm private pace.",
    },
    {
      title: "Travelers Wanting Naples and the Coast in One Comfortable Route",
      description:
        "A strong fit if you want city character and coastal beauty in one clear route.",
    },
    {
      title: "Returning Italy Visitors Looking for More Atmosphere",
      description:
        "Perfect for travelers who want more than a standard day trip.",
    },
    {
      title: "Travelers Who Prefer Private Tours",
      description:
        "Designed for visitors who value comfort, flexibility, and a smooth day flow.",
    },
  ],
  upgrades: [
    {
      title: "Scenic Coastal Extension",
      description:
        "Expand the coastal segment with additional viewpoints when timing and conditions align.",
    },
    {
      title: "Gourmet Lunch Reservation Support",
      description:
        "Receive planning assistance for a well-positioned lunch stop along your route.",
    },
    {
      title: "Private Driver and More Comfortable Vehicle",
      description:
        "Add extra comfort and style with a higher-comfort vehicle option for the full experience.",
    },
    {
      title: "Pompeii Stop if You Want It",
      description:
        "Add Pompeii only when desired, framed as a selective extension rather than the core route.",
    },
    {
      title: "Sunset-Timed Route Adjustment",
      description:
        "When feasible, align the sequence to capture the coast in warm late-day light.",
    },
  ],
  testimonial: {
    quote:
      "Rome Guide Services could not have provided a more knowledgeable and flexible experience. Their guides and drivers made every part of the itinerary feel easy.",
    name: "Jocelyn S",
    context: "Tripadvisor review, Oct 2019",
  },
  faq: [
    {
      question: "Is this a private Naples and Amalfi Coast experience?",
      answer:
        "Yes. This is fully private, and we build it around your priorities and pace.",
    },
    {
      question: "Can the route be customized?",
      answer:
        "Absolutely. Stop focus, timing, and day flow are adjusted to your interests and travel rhythm.",
    },
    {
      question: "Is this different from a day trip from Rome?",
      answer:
        "Yes. This page is for a Naples and Amalfi Coast experience, not a Rome-departure day trip.",
    },
    {
      question: "Can Pompeii be added if requested?",
      answer:
        "Yes. Pompeii can be added as an optional extension when it aligns with your preferred route and pace.",
    },
    {
      question: "Is private transport part of the experience?",
      answer:
        "Yes. Private transport can be added as a core part of the route.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is usually moderate, depending on selected stops, with pace adjusted to your group.",
    },
    {
      question: "Is this suitable for couples or slower-paced travelers?",
      answer:
        "Yes. The experience is especially well suited to guests who value a comfortable, less rushed pace.",
    },
  ],
  relatedTours: [
    {
      title: "Sicily Tours",
      description:
        "Continue south with private Sicily tours focused on culture, scenery, and local flavor.",
      href: "/tours-in-italy/private-sicily-tours",
    },
    {
      title: "Florence & Tuscany Tour",
      description:
        "Pair southern coastal atmosphere with a Florence-focused route and optional Tuscany extension.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Venice Tour",
      description:
        "Balance Mediterranean coastal rhythm with a private Venice city route centered on canals and atmosphere.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Day Trips from Rome",
      description:
        "Compare this with private day trips that depart from Rome.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Pompeii, Amalfi & Naples Day Trip from Rome",
      description:
        "Need a Rome-departure full-day format instead? Explore the dedicated day-trip version with from-Rome planning.",
      href: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
    },
  ],
  finalCta: {
    title: "Plan Your Private Naples & Amalfi Coast Experience",
      description:
        "Share your dates and interests, and we'll build a private Naples and Amalfi Coast route that fits your pace.",
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
    title: privateNaplesAmalfiCoastTourData.seoTitle,
    description: privateNaplesAmalfiCoastTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateNaplesAmalfiCoastTourData.path,
    },
    openGraph: {
      title: privateNaplesAmalfiCoastTourData.seoTitle,
      description: privateNaplesAmalfiCoastTourData.seoDescription,
      url: privateNaplesAmalfiCoastTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/naples-amalfi/hero-private-naples-amalfi-coast-tour.jpg",
          alt: "Amalfi Coast in warm cinematic sunset light",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateNaplesAmalfiCoastTourData.seoTitle,
      description: privateNaplesAmalfiCoastTourData.seoDescription,
      images: ["/images/tours-in-italy/naples-amalfi/hero-private-naples-amalfi-coast-tour.jpg"],
    },
  };
}

export default function PrivateNaplesAmalfiCoastTourPage() {
  return <TourTemplatePage data={privateNaplesAmalfiCoastTourData} />;
}

