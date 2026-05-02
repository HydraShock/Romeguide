import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://unsplash.com/photos/dKJQhcOOckE
// overview: https://www.pexels.com/photo/villa-borghese-lake-scene-in-rome-29311245/
// highlight-1: https://www.pexels.com/photo/old-monument-with-columns-and-trees-6057695/
// highlight-2: https://www.pexels.com/photo/rome-villa-borghese-park-boat-scene-9880088/
// highlight-3: https://unsplash.com/photos/RmN6q-vZQcA
// highlight-4: https://www.pexels.com/photo/relaxed-rome-city-park-view-20681973/
const familyFriendlyTourData: TourPageData = {
  slug: "rome-family-friendly-private-tour",
  path: "/tours/family-friendly",
  seoTitle: "Rome Family-Friendly Private Tour | Kid-Friendly Rome Highlights | Rome Guide Services",
  seoDescription:
    "Keep kids engaged while exploring Rome with a licensed private guide. Family-friendly storytelling, flexible pacing, and personalized routes for all ages.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE GUIDED TOUR",
    title: "Rome Family-Friendly Tour",
    landmarksLine: "Ancient Rome Highlights | Vatican Options | Piazza Stops",
    subtitle:
      "Keep children engaged with interactive storytelling and relaxed pacing while your private guide adapts Rome's major sites to your family rhythm.",
    intentLine: "Private, kid-aware touring that keeps adults and children equally involved.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Itinerary",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/family/hero-family-friendly-rome-tour-colosseum-visit.webp",
    imageAlt: "Visitors walking near the Colosseum in Rome on a relaxed day",
    quickFacts: ["About 3 hours", "Private only", "Licensed guide", "Kid-paced rhythm"],
    microTags: ["Families with kids", "Education trips", "Relaxed pace"],
  },
  facts: [
    { label: "Duration", value: "About 3 hours" },
    { label: "Format", value: "Private only" },
    { label: "Guide", value: "Licensed guide" },
    { label: "Pacing", value: "Kid-friendly" },
    { label: "Breaks", value: "Planned stops" },
    { label: "Route", value: "Family-based on" },
  ],
  overview: {
    title: "Rome Through Curious Eyes",
    intro:
      "This is not an adults-only lecture adapted at the last minute. The itinerary is designed from the start for families, with storytelling that keeps children involved.",
    body:
      "Your guide balances historical depth for adults with interactive prompts, short transitions, and flexible pauses for younger travelers. Families leave with shared memories instead of fatigue.",
    imageSrc: "/images/tours/family/overview-family-friendly-rome-tour-villa-borghese-lake.webp",
    imageAlt: "Families and visitors enjoying the lake at Villa Borghese in Rome",
  },
  highlights: [
    {
      title: "Kid-Friendly Guide Approach",
      description:
        "Guides use clear narratives, visual cues, and age-aware language so children stay curious and connected.",
      imageSrc: "/images/tours/family/highlight-family-friendly-rome-tour-temple-garden.webp",
      imageAlt: "Couple relaxing near the Temple of Diana in Villa Borghese",
    },
    {
      title: "Interactive Stories at Major Sites",
      description:
        "Transform monuments into stories with characters, fun facts, and questions that keep attention high.",
      imageSrc: "/images/tours/family/highlight-family-friendly-rome-tour-park-boat.webp",
      imageAlt: "Small boats and families at Villa Borghese park in Rome",
    },
    {
      title: "Relaxed Pace and Smart Breaks",
      description:
        "Planned pauses and route flexibility reduce stress for parents while preserving cultural value.",
      imageSrc: "/images/tours/family/highlight-family-friendly-rome-tour-colosseum-courtyard.webp",
      imageAlt: "People gathered in a sunlit courtyard near the Colosseum",
    },
    {
      title: "Flexible Route by Age and Energy",
      description:
        "The itinerary adjusts to your group's age range, walking comfort, and overall travel schedule.",
      imageSrc: "/images/tours/family/highlight-family-friendly-rome-tour-relaxed-pace.webp",
      imageAlt: "Calm riverside park scene in Rome suited to a relaxed family pace",
    },
  ],
  itinerary: [
    {
      title: "Meet and Family Briefing",
      description:
        "Meet your guide and confirm age range, attention span, and preferred activity rhythm.",
    },
    {
      title: "Main Landmark Story Stop",
      description:
        "Begin with a high-impact site explained through child-friendly storytelling and visual anchors.",
    },
    {
      title: "Interactive Walk Segment",
      description:
        "Move through nearby streets with light educational prompts and engaging Roman anecdotes.",
    },
    {
      title: "Second Highlight and Break",
      description:
        "Add a second major stop with pacing adjustments and optional snack or rest pause.",
    },
    {
      title: "Wrap-Up and Next Tips",
      description:
        "End with practical tips for family dining and transport, and choose whether to add one more kid-friendly stop if everyone still has energy.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so we can always add more stops, moments, and ideas based on your interests and timing.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Ticketed entries can be integrated depending on your chosen route and family preferences.",
    meetingPointText:
      "Meeting point is selected for easy family access and shared after confirmation.",
    walkingLevelText:
      "Walking level is adapted to child age and stroller needs where possible.",
    accessibilityNotes:
      "Stroller-friendly alternatives can be planned according to route and site conditions.",
    whatToBringText:
      "Bring water, light snacks, sun protection, and any child essentials needed for comfort.",
    securityChecksText:
      "If ticketed monuments are included, standard security checks may require short waiting times.",
  },
  audience: [
    {
      title: "Parents with Kids Age 6+",
      description: "A balanced format that keeps children engaged while adults enjoy meaningful context.",
    },
    {
      title: "School and Education Trips",
      description: "Structured storytelling and interactive prompts support learning in a live city setting.",
    },
    {
      title: "Multi-Generational Families",
      description: "Flexible pace helps grandparents, parents, and children enjoy the same route comfortably.",
    },
    {
      title: "Travelers Needing Relaxed Pace",
      description: "Ideal when comfort, breaks, and low-stress planning are top priorities.",
    },
  ],
  upgrades: [
    {
      title: "Family Driver Coordination",
      description: "Add private transfers to reduce fatigue and simplify movement between stops.",
    },
    {
      title: "Extended Family Session",
      description: "Add extra time for slower pacing, additional breaks, and one extra highlight.",
    },
    {
      title: "Interactive Activity Kit",
      description: "Include optional age-appropriate prompts to keep children actively participating.",
    },
    {
      title: "Family Lunch Planning",
      description: "Add a child-friendly meal stop selected for quality, comfort, and planning.",
    },
  ],
  testimonial: {
    quote:
      "Our kids stayed engaged the whole time, and we still got the depth we wanted. It was smooth, thoughtful, and genuinely fun for everyone.",
    name: "Emily T",
    context: "Family-friendly Rome tour guest",
  },
  faq: [
    {
      question: "Is this Rome family-friendly tour suitable for young children?",
      answer:
        "Yes. The route and storytelling style are adapted to your children's ages and attention span.",
    },
    {
      question: "Can we bring a stroller on this private family tour?",
      answer:
        "In many areas yes, though some historic streets are uneven. We plan stroller-friendlier routes where possible.",
    },
    {
      question: "Can we include both Ancient Rome and Vatican stops for kids?",
      answer:
        "Yes, depending on timing and energy levels. We can design a hybrid route with child-aware pacing.",
    },
    {
      question: "How often do we stop for breaks during the family tour?",
      answer:
        "Breaks are planned into the itinerary and can be increased as needed during the tour.",
    },
    {
      question: "Do guides adapt explanations for both adults and children?",
      answer:
        "Absolutely. Our private format lets guides balance educational depth with engaging child-friendly narration.",
    },
  ],
  relatedTours: [
    {
      title: "Ancient Rome Private Tour",
      description: "A deeper historical route for families with older kids and curious teens.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Private Vatican Tour",
      description: "Vatican Museums and Sistine Chapel with private pacing options for families.",
      href: "/tours/vatican",
    },
    {
      title: "Rome Private Walking Tour",
      description: "Flexible city-center walking for families wanting lighter planning.",
      href: "/tours/walking-tours",
    },
    {
      title: "Day Trips from Rome",
      description: "Private family-ready escapes with custom pacing, private transport, and practical planning.",
      href: "/tours/day-trips-from-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Family-Friendly Rome Experience",
    description:
      "Share ages, travel dates, and interests. We will design a private Rome itinerary that keeps everyone engaged and comfortable.",
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
    title: familyFriendlyTourData.seoTitle,
    description: familyFriendlyTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: familyFriendlyTourData.path,
    },
    openGraph: {
      title: familyFriendlyTourData.seoTitle,
      description: familyFriendlyTourData.seoDescription,
      url: familyFriendlyTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/family/hero-family-friendly-rome-tour-colosseum-visit.webp",
          alt: "Family-friendly private Rome tour route",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: familyFriendlyTourData.seoTitle,
      description: familyFriendlyTourData.seoDescription,
      images: ["/images/tours/family/hero-family-friendly-rome-tour-colosseum-visit.webp"],
    },
  };
}

export default function FamilyFriendlyTourPage() {
  return <TourTemplatePage data={familyFriendlyTourData} />;
}
