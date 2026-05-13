import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero + highlight-2: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Orvieto-panorama.jpg/1920px-Orvieto-panorama.jpg
// overview: https://www.pexels.com/photo/beautiful-hill-town-rooftops-in-umbria-34347090/
// highlight-1: https://www.pexels.com/photo/gothic-cathedral-details-35531509/
// highlight-3: https://www.pexels.com/photo/beautiful-hill-town-rooftops-in-umbria-34347090/
// highlight-4: https://www.pexels.com/photo/cathedral-with-ornate-gothic-facade-19250184/
const orvietoDayTripData: TourPageData = {
  slug: "orvieto-day-trip-from-rome",
  path: "/tours/day-trips-from-rome/orvieto-umbria",
  seoTitle:
    "Orvieto Day Trip from Rome | Orvieto Cathedral & Umbrian Hill Town | Rome Guide Services",
  seoDescription:
    "Escape Rome for a private day trip to Orvieto with flexible pacing, private transport, and a comfortable itinerary through one of Umbria\u2019s most beautiful hill towns.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE DAY TRIP FROM ROME",
    title: "Orvieto Day Trip from Rome",
    landmarksLine: "ORVIETO \u2022 UMBRIA \u2022 HILL TOWN ESCAPE",
    subtitle:
      "Leave Rome behind for a private journey into Orvieto, where dramatic views, quiet stone streets, a magnificent cathedral, and the gentle rhythm of Umbria create one of central Italy\u2019s most beautiful day trips.",
    intentLine:
      "A private full-day escape designed around atmosphere, scenic pacing, cultural depth, and the beauty of one unforgettable hill town.",
    primaryCtaLabel: "Plan This Day Trip",
    secondaryCtaLabel: "Ask for a Custom Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/day-trips/orvieto-umbria/highlight-orvieto-cliff-panorama.jpg",
    imageAlt: "Elevated view of Orvieto hill town above the Umbrian countryside",
    quickFacts: ["Full day", "Private only", "Driver included", "Guide on request"],
    microTags: [
      "Couples",
      "Hill town lovers",
      "Art and architecture travelers",
      "Guests extending a Rome stay",
    ],
  },
  facts: [
    { label: "Duration", value: "Full day" },
    { label: "Departure", value: "From Rome" },
    { label: "Format", value: "Private day trip" },
    { label: "Driver", value: "Included" },
    { label: "Guide", value: "On request" },
    { label: "Main Stops", value: "Orvieto, Cathedral, historic center" },
  ],
  overview: {
    eyebrow: "WHY THIS DAY TRIP",
    title: "A More Atmospheric and Comfortable Escape Beyond Rome",
    intro:
      "Orvieto offers a slower, more scenic contrast to Rome, with extraordinary architecture, quiet streets, and a deeply rewarding Umbrian hill-town atmosphere.",
    body:
      "This private Orvieto day trip from Rome is designed for beauty and rhythm over intensity. The cathedral anchors the experience with visual and cultural depth, while panoramic viewpoints and beautiful stone streets create a graceful route from start to finish. Private transportation keeps the day smooth and comfortable.",
    imageSrc: "/images/tours/day-trips/orvieto-umbria/overview-umbria-hill-town-private-route.jpg",
    imageAlt: "Historic Orvieto rooftops and Umbrian landscape views",
  },
  highlights: [
    {
      title: "Orvieto Cathedral: Gothic Drama and Italian Craftsmanship",
      description:
        "Discover one of Italy's most striking cathedral facades and artistic programs, with time to appreciate detail, scale, and cultural context.",
      imageSrc: "/images/tours/day-trips/orvieto-umbria/highlight-orvieto-cathedral-detail.jpg",
      imageAlt: "Decorative Gothic details from the facade of Orvieto Cathedral",
    },
    {
      title: "Hill-Town Views: One of Central Italy\u2019s Most Scenic Profiles",
      description:
        "Take in Orvieto's dramatic cliff setting and broad Umbrian panoramas that make this destination a favorite private escape from Rome.",
      imageSrc: "/images/tours/day-trips/orvieto-umbria/highlight-orvieto-cliff-panorama.jpg",
      imageAlt: "Orvieto skyline rising on its cliff above the Umbrian valley",
    },
    {
      title: "Quiet Streets, Stone Architecture, and Umbrian Atmosphere",
      description:
        "Walk through calm lanes and comfortable stone spaces where architecture, local rhythm, and viewpoint moments feel intimate and unhurried.",
      imageSrc: "/images/tours/day-trips/orvieto-umbria/overview-umbria-hill-town-private-route.jpg",
      imageAlt: "Quiet stone streets and rooftops in Orvieto's historic core",
    },
    {
      title: "A Private Day with More Beauty, Less Rush",
      description:
        "Private routing, well-planned timing, and comfort-focused planning create a day that is beautiful, scenic, and smoothly paced.",
      imageSrc: "/images/tours/day-trips/orvieto-umbria/hero-orvieto-umbria-day-trip-from-rome.jpg",
      imageAlt: "Cathedral frontage and historic urban atmosphere in Orvieto",
    },
  ],
  itinerary: [
    {
      title: "Departure from Rome",
      description:
        "Begin with private pickup and a comfortable drive north from Rome into Umbria.",
    },
    {
      title: "Arrival in Orvieto",
      description:
        "Enter the hill town and start with orientation to its dramatic setting, stone fabric, and historic rhythm.",
    },
    {
      title: "Cathedral and Historic Core",
      description:
        "Explore the cathedral area and the comfortable urban heart of Orvieto with time for architecture, art, and atmosphere.",
    },
    {
      title: "Scenic Views and Slow Exploration",
      description:
        "Take in quieter streets, local viewpoints, and cultural details that make Orvieto feel distinct from larger cities.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so we can always add more stops, moments, and ideas based on your interests and timing.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Cathedral entry and any optional museum access are coordinated during planning based on your preferred pacing.",
    meetingPointText:
      "Private pickup from your Rome accommodation or a convenient central point is included.",
    walkingLevelText:
      "Walking is typically moderate, with stone streets and occasional inclines in the historic center.",
    accessibilityNotes:
      "We adapt timing and route flow where possible, though some historic surfaces can be uneven.",
    whatToBringText:
      "Comfortable shoes, a light layer, and sun protection are recommended for a full day in and around Orvieto.",
    securityChecksText:
      "Churches and heritage sites may apply modest dress expectations and standard entrance checks.",
  },
  audience: [
    {
      title: "Travelers Wanting a Scenic Escape from Rome",
      description:
        "Ideal for guests seeking a private full-day route with scenery, atmosphere, and cultural substance.",
    },
    {
      title: "Couples Seeking a Romantic Cultural Day",
      description:
        "A strong choice for travelers who want slower rhythm, beautiful settings, and memorable shared viewpoints.",
    },
    {
      title: "Guests Interested in Architecture and Italian Towns",
      description:
        "Perfect for visitors drawn to Gothic craftsmanship, layered urban fabric, and historic hill-town character.",
    },
    {
      title: "Visitors Who Prefer a Slower, More Atmospheric Pace",
      description:
        "Designed for guests who value private comfort and destination depth over high-intensity city touring.",
    },
  ],
  upgrades: [
    {
      title: "Private Licensed Guide in Orvieto",
      description:
        "Add expert interpretation for cathedral history, town structure, and cultural context.",
    },
    {
      title: "Extended Umbrian Lunch Stop",
      description:
        "Reserve extra time for a relaxed Umbrian lunch in line with your preferred pace.",
    },
    {
      title: "Wine Tasting Moment",
      description:
        "Include a well-planned tasting element where timing, season, and opening schedules make it realistic.",
    },
    {
      title: "More Comfortable Vehicle",
      description:
        "Add extra transfer comfort with a higher-category private vehicle for the full-day route.",
    },
  ],
  testimonial: {
    quote:
      "Their flexibility in adjusting the itinerary to our wishes was extraordinary. The day felt insightful, smooth, and fully personalized.",
    name: "Jocelyn S",
    context: "Tripadvisor review, Oct 2019",
  },
  faq: [
    {
      question: "Is this a full-day private trip from Rome?",
      answer:
        "Yes. This route is designed as a full-day private day trip with return to Rome the same evening.",
    },
    {
      question: "Is a guide included or optional?",
      answer:
        "Guide service is optional. You can add a private licensed guide in Orvieto during planning.",
    },
    {
      question: "How much walking is involved in Orvieto?",
      answer:
        "Walking is generally moderate on stone streets with occasional inclines, and pacing is adjusted to your group.",
    },
    {
      question: "Is there time for lunch or local wine?",
      answer:
        "Yes. We can include a relaxed lunch window and, where practical, a well-planned wine element.",
    },
    {
      question: "Can the itinerary be customized?",
      answer:
        "Absolutely. As a private Orvieto tour from Rome, timing and emphasis can be adapted to your preferences.",
    },
    {
      question: "Is hotel pickup included?",
      answer:
        "Yes. Private pickup from your Rome hotel or an agreed central point is included.",
    },
    {
      question: "Is this a good day trip for couples or older travelers?",
      answer:
        "Yes. The route is especially well suited to travelers who prefer a scenic and slower cultural pace.",
    },
  ],
  relatedTours: [
    {
      title: "Day Trips from Rome",
      description: "Browse all destination-led private escapes departing from Rome.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Tivoli Day Trip from Rome",
      description: "Pair Orvieto's hill-town elegance with villas, gardens, and imperial heritage.",
      href: "/tours/day-trips-from-rome/tivoli",
    },
    {
      title: "Ostia Antica Day Trip from Rome",
      description: "Add a quieter archaeological route focused on daily life in the ancient port of Rome.",
      href: "/tours/day-trips-from-rome/ostia-antica",
    },
    {
      title: "Ancient Rome Tour",
      description: "Complement your day beyond Rome with a private deep dive into imperial landmarks.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Rome Art & Architecture Tour",
      description: "Continue with a well-planned Rome route centered on design, craftsmanship, and urban beauty.",
      href: "/tours/art-architecture",
    },
  ],
  finalCta: {
    title: "Plan Your Private Orvieto Day Trip",
    description:
      "Share your dates and preferences, and we will design a private day from Rome with the right balance of scenery, architecture, atmosphere, and comfort.",
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
    title: orvietoDayTripData.seoTitle,
    description: orvietoDayTripData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: orvietoDayTripData.path,
    },
    openGraph: {
      title: orvietoDayTripData.seoTitle,
      description: orvietoDayTripData.seoDescription,
      url: orvietoDayTripData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/day-trips/orvieto-umbria/highlight-orvieto-cliff-panorama.jpg",
          alt: "Orvieto skyline and Umbrian hill-town landscape",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: orvietoDayTripData.seoTitle,
      description: orvietoDayTripData.seoDescription,
      images: ["/images/tours/day-trips/orvieto-umbria/highlight-orvieto-cliff-panorama.jpg"],
    },
  };
}

export default function OrvietoUmbriaDayTripPage() {
  return <TourTemplatePage data={orvietoDayTripData} />;
}

