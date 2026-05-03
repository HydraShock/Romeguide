import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: local asset provided by user (romewalking.png)
// overview: https://www.pexels.com/photo/architecture-in-piazza-navona-rome-7473036/
// highlight-1: https://www.pexels.com/photo/close-up-of-pantheon-columns-in-rome-20271089/
// highlight-2: https://www.pexels.com/photo/facades-and-fountain-detail-in-piazza-navona-29434694/
// highlight-3: https://www.pexels.com/photo/trevi-fountain-at-evening-in-rome-6220441/
// highlight-4: https://www.pexels.com/photo/charming-street-scene-in-rome-italy-35607126/
const walkingTourData: TourPageData = {
  slug: "rome-private-walking-tour",
  path: "/tours/walking-tours",
  seoTitle:
    "Rome Private Walking Tour | Pantheon, Piazza Navona & Trevi Fountain | Rome Guide Services",
  seoDescription:
    "Discover Pantheon, Piazza Navona, and Trevi Fountain with a licensed private guide. A flexible Rome walking tour designed around your pace and interests.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE GUIDED TOUR",
    title: "Rome Private Walking Tour",
    landmarksLine: "Pantheon | Piazza Navona | Trevi Fountain",
    subtitle:
      "Explore Rome on foot through iconic squares and hidden lanes, guided by a private local expert who adapts the route to your rhythm.",
    intentLine: "Flexible private walking across Rome's must-see highlights and local corners.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Itinerary",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/walking/hero-rome-private-walking-tour-pantheon-dusk.webp",
    imageAlt: "Pantheon and fountain at sunset in Rome city center",
    quickFacts: ["2 to 3 hours", "Private only", "Licensed guide", "Flexible route"],
    microTags: ["First-time visitors", "Food and culture lovers", "Solo travelers"],
  },
  facts: [
    { label: "Duration", value: "2 to 3 hours" },
    { label: "Format", value: "Private only" },
    { label: "Guide", value: "Licensed guide" },
    { label: "Walking", value: "Moderate" },
    { label: "Route", value: "Flexible city center" },
    { label: "Sites", value: "Pantheon, Navona, Trevi" },
  ],
  overview: {
    title: "Rome on Foot, Well-planned Around You",
    intro:
      "Your private guide shapes the walk around your pace, interests, and preferred balance of landmarks and hidden corners.",
    body:
      "From the Pantheon to Piazza Navona and the Trevi area, the route blends essential highlights with local context and practical city insights. A strong fit for first-time visitors who want flexibility without losing depth.",
    imageSrc: "/images/tours/walking/overview-rome-private-walking-tour-piazza-navona.webp",
    imageAlt: "Fountain and architecture in Piazza Navona during soft daylight",
  },
  highlights: [
    {
      title: "Pantheon, Beyond the Facade",
      description:
        "Understand engineering, ritual use, and urban context while exploring one of Rome's most enduring monuments.",
      imageSrc: "/images/tours/walking/highlight-rome-walking-tour-pantheon-columns.webp",
      imageAlt: "Pantheon columns and inscription in central Rome",
    },
    {
      title: "Piazza Navona and Baroque Storytelling",
      description:
        "Explore fountains, historic buildings, and local city life with a guide who connects art history to everyday life in Rome.",
      imageSrc: "/images/tours/walking/highlight-rome-walking-tour-piazza-navona-architecture.webp",
      imageAlt: "Architectural details around Piazza Navona on a Rome walking route",
    },
    {
      title: "Trevi Fountain and Hidden Passages",
      description:
        "Move from iconic viewpoints into quieter streets.",
      imageSrc: "/images/tours/walking/highlight-rome-walking-tour-trevi-fountain-evening.webp",
      imageAlt: "Trevi Fountain illuminated in the evening in Rome",
    },
    {
      title: "City Guidance for all your journey",
      description:
        "Get practical orientation, neighborhood tips, and food suggestions to improve the rest of your Rome stay.",
      imageSrc: "/images/tours/walking/highlight-rome-walking-tour-street-life.webp",
      imageAlt: "Roman cobblestone street scene with cafes and walking visitors",
    },
  ],
  itinerary: [
    {
      title: "Meeting Point and Preferences",
      description:
        "Meet your guide in central Rome and set priorities for pacing, focus, and route style.",
    },
    {
      title: "Pantheon District Walk",
      description:
        "Explore the Pantheon area with commentary on architecture, urban layering, and Roman daily life.",
    },
    {
      title: "Piazza Navona Segment",
      description:
        "Walk through Navona and nearby lanes with focus on fountains, baroque design, and local history.",
    },
    {
      title: "Trevi Area and Hidden Stops",
      description:
        "Reach the Trevi zone through side streets that feel quieter and more local.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so we can always add more stops, moments, and ideas based on your interests and timing.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "This tour focuses on outdoor city highlights; monument entries can be added on request where available.",
    meetingPointText:
      "Meeting is arranged in central Rome near the first selected stop.",
    walkingLevelText:
      "Moderate walking on cobblestones with regular standing intervals and short breaks.",
    accessibilityNotes:
      "Route can be adapted for mobility needs where street layout and pavement conditions permit.",
    whatToBringText:
      "Comfortable shoes, water, and weather-appropriate clothing are recommended.",
    securityChecksText:
      "No major security bottlenecks are expected unless optional monument entries are included.",
  },
  audience: [
    {
      title: "First-Time Visitors to Rome",
      description: "A strong orientation experience combining must-see landmarks with local context.",
    },
    {
      title: "Food and Culture Lovers",
      description: "Ideal for guests who enjoy city stories, neighborhood texture, and lifestyle insights.",
    },
    {
      title: "Solo Travelers and Couples",
      description: "Private pacing makes the walk more personal, flexible, and comfortable.",
    },
    {
      title: "Cruise and Short-Stay Guests",
      description: "Efficient route design helps maximize limited time in the historic center.",
    },
  ],
  upgrades: [
    {
      title: "Street Food Tasting Stop",
      description: "Add a well-planned tasting pause featuring classic Roman flavors in trusted local spots.",
    },
    {
      title: "Sunset Timing Route",
      description: "Shift the itinerary to golden hour for softer light and a more atmospheric city walk.",
    },
    {
      title: "Private Driver Support",
      description: "Include point-to-point comfort before or after the walking segment.",
    },
    {
      title: "Extended Walking Session",
      description: "Add extra neighborhoods or monument entries for deeper city coverage.",
    },
  ],
  testimonial: {
    quote:
      "Our Pantheon and Colosseum day with Francesca was wonderful. She was knowledgeable and easy to follow, and we would definitely book this company again.",
    name: "Ben G",
    context: "Tripadvisor review, Feb 2017",
  },
  faq: [
    {
      question: "How much walking is involved in this Rome private walking tour?",
      answer:
        "Walking is moderate, mostly on cobblestone streets with frequent stops for storytelling and photos.",
    },
    {
      question: "Can we customize the route beyond Pantheon, Navona, and Trevi?",
      answer:
        "Yes. This private format allows route changes based on your interests, pace, and available time.",
    },
    {
      question: "Are monument tickets included in the walking tour?",
      answer:
        "The base itinerary focuses on outdoor highlights. Optional entries can be planned if desired.",
    },
    {
      question: "Is this walking tour suitable for travelers with limited mobility?",
      answer:
        "We can adapt rhythm and route where possible. Let us know your needs in advance for best planning.",
    },
    {
      question: "Can we include a food stop during the tour?",
      answer:
        "Yes. A street-food or coffee break can be built into your route if you want.",
    },
  ],
  relatedTours: [
    {
      title: "Ancient Rome Private Tour",
      description: "Colosseum, Roman Forum, and Palatine Hill with deeper historical context.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Rome Art and Architecture Tour",
      description: "A museum-and-city route focused on masterpieces and design history.",
      href: "/tours/art-architecture",
    },
    {
      title: "Private Vatican Tour",
      description: "Vatican Museums and Sistine Chapel in one well-planned private route.",
      href: "/tours/vatican",
    },
    {
      title: "Day Trips from Rome",
      description: "Add a private full-day escape beyond the city with easy pickup and return.",
      href: "/tours/day-trips-from-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Private Rome Walking Experience",
    description:
      "Share your schedule and interests. We will design a private city walk that fits your pace, priorities, and preferred neighborhoods.",
    buttonLabel: "Request Your Private Plan",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private, licensed guides",
      "Custom planning",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: walkingTourData.seoTitle,
    description: walkingTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: walkingTourData.path,
    },
    openGraph: {
      title: walkingTourData.seoTitle,
      description: walkingTourData.seoDescription,
      url: walkingTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/walking/hero-rome-private-walking-tour-pantheon-dusk.webp",
          alt: "Pantheon and fountain at sunset in Rome city center",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: walkingTourData.seoTitle,
      description: walkingTourData.seoDescription,
      images: ["/images/tours/walking/hero-rome-private-walking-tour-pantheon-dusk.webp"],
    },
  };
}

export default function WalkingToursPage() {
  return <TourTemplatePage data={walkingTourData} />;
}
