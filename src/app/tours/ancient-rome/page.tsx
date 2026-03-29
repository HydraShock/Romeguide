import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://www.pexels.com/photo/sunlit-colosseum-in-rome-italy-33009165/
// overview: https://www.pexels.com/photo/view-of-buildings-at-roman-forum-in-rome-italy-14094641/
// highlight-1: https://www.pexels.com/photo/the-roman-forum-2225440/
// highlight-2: https://www.pexels.com/photo/historic-roman-ruins-at-palatine-hill-36240426/
// highlight-3: https://www.pexels.com/photo/view-of-the-roman-forum-in-rome-italy-17057107/
// highlight-4: https://www.pexels.com/photo/ruins-of-forum-romanum-16441878/
const ancientRomeTourData: TourPageData = {
  slug: "ancient-rome-tour",
  path: "/tours/ancient-rome",
  seoTitle:
    "Ancient Rome Private Tour | Colosseum, Roman Forum & Palatine Hill | Rome Guide Services",
  seoDescription:
    "Explore the Colosseum, Roman Forum, and Palatine Hill with a licensed private guide. A tailor-made Ancient Rome tour designed around your pace and interests.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  highlightsTheme: "bronzeHome",
  hero: {
    eyebrow: "PRIVATE GUIDED TOUR",
    title: "Ancient Rome Private Tour",
    landmarksLine: "Colosseum | Roman Forum | Palatine Hill",
    subtitle:
      "Explore the Colosseum, Roman Forum, and Palatine Hill through a private itinerary designed around your interests, walking pace, and curiosity.",
    intentLine: "Private, guest-paced storytelling across Rome's essential ancient sites.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/image%20(16).png",
    imageAlt: "Colosseum illuminated at warm golden hour in Rome",
    quickFacts: ["3 to 4 hours", "Private only", "Licensed guide", "Driver on request"],
    microTags: ["History lovers", "First-time visitors", "Families welcome"],
  },
  facts: [
    { label: "Duration", value: "3 to 4 hours" },
    { label: "Format", value: "Private only" },
    { label: "Guide", value: "Licensed guide" },
    { label: "Driver", value: "On request" },
    { label: "Tickets", value: "Assistance available" },
    { label: "Sites", value: "Colosseum, Forum, Palatine" },
  ],
  overview: {
    title: "Imperial Rome, Read Through Storytelling",
    intro:
      "This is not a monument checklist. Your guide connects architecture, politics, and daily life so each site reads as one clear story.",
    body:
      "From the arena drama of the Colosseum to the civic heart of the Forum and the layered remains on Palatine Hill, the pace is tailored to your group. Families, couples, and deeply curious travelers all get the same landmarks with the right rhythm and depth.",
    imageSrc: "/images/tours/ancient-rome/overview-ancient-rome-tour-roman-forum-view.webp",
    imageAlt: "Aerial view of the Roman Forum ruins in central Rome",
  },
  highlights: [
    {
      title: "Colosseum: Arena, Spectacle, and Power",
      description:
        "Read the amphitheater beyond the postcard: engineering choices, crowd management, and the political theater behind the games.",
      imageSrc: "/images/tours/ancient-rome/highlight-colosseum-arches-ancient-rome.webp",
      imageAlt: "Columns and ruins of the Roman Forum under warm evening light",
    },
    {
      title: "Roman Forum: The Political Heart of the Empire",
      description:
        "Walk through temples, basilicas, and civic spaces with a clear narrative of how power, law, and ritual shaped imperial Rome.",
      imageSrc: "/images/tours/ancient-rome/highlight-roman-forum-columns-rome.webp",
      imageAlt: "Palatine Hill archaeological ruins overlooking the Roman Forum",
    },
    {
      title: "Palatine Hill: Origins of Rome",
      description:
        "Explore imperial residences and archaeological layers while your guide links Rome's legendary foundation to its historical evolution.",
      imageSrc: "/images/tours/ancient-rome/highlight-palatine-hill-ruins-rome.webp",
      imageAlt: "Panoramic view of Roman Forum ruins and surrounding historic skyline",
    },
    {
      title: "Imperial Context, Not Just Isolated Sites",
      description:
        "Understand how Colosseum, Forum, and Palatine form one system of spectacle, governance, and elite life across centuries.",
      imageSrc: "/images/tours/ancient-rome/highlight-imperial-rome-archaeology-view.webp",
      imageAlt: "Forum Romanum ruins and archaeological layers in Rome",
    },
  ],
  itinerary: [
    {
      title: "Meeting Point and Tour Framing",
      description:
        "Meet your licensed guide, confirm pacing preferences, and frame the route before entering the main archaeological zone.",
    },
    {
      title: "Colosseum Exploration",
      description:
        "Explore key areas of the amphitheater while unpacking the logistics, symbolism, and social meaning of Roman spectacle.",
    },
    {
      title: "Roman Forum Walk",
      description:
        "Follow a curated route through the Forum with focused storytelling that makes complex ruins easy to read.",
    },
    {
      title: "Palatine Hill Viewpoints",
      description:
        "Take in panoramic viewpoints while exploring palace remains and the evolution of imperial power.",
    },
    {
      title: "Closing Recommendations",
      description:
        "Close with practical next-step recommendations based on your remaining schedule, interests, and energy.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Tickets are not issued automatically with this page request. We assist with reservation strategy during confirmation so entry timing matches your itinerary.",
    meetingPointText:
      "Meeting is arranged near the Colosseum area. Exact point and timing are shared during confirmation. TODO: confirm final pin location text.",
    walkingLevelText:
      "Moderate walking is expected across archaeological terrain with some uneven surfaces and occasional steps.",
    accessibilityNotes:
      "Route accessibility depends on current site conditions and entrances. We adapt pace and route where possible. TODO: confirm wheelchair-accessible route policy.",
    whatToBringText:
      "Bring a valid ID, comfortable walking shoes, water, and sun protection in warmer months.",
    securityChecksText:
      "Standard monument security checks may apply at entry points, so we recommend arriving a few minutes early.",
  },
  audience: [
    {
      title: "First-Time Visitors to Rome",
      description: "Ideal if you want a clear and elegant introduction to Rome's most important ancient landmarks.",
    },
    {
      title: "Couples and Private Travelers",
      description: "A refined private experience that allows slower pacing, richer storytelling, and flexible timing.",
    },
    {
      title: "Families with Teens or Curious Kids",
      description: "The itinerary can be adapted with accessible explanations and breaks, without losing depth.",
    },
    {
      title: "Travelers Seeking Historical Context",
      description: "Perfect for guests who want more than photos and prefer understanding the city through narrative.",
    },
  ],
  upgrades: [
    {
      title: "Private Driver Coordination",
      description: "Door-to-door comfort before or after the walking section, ideal for tighter schedules and elevated logistics.",
    },
    {
      title: "Extended Duration",
      description: "Add time for deeper coverage, additional viewpoints, or a second historical area in the same day.",
    },
    {
      title: "Ancient + Christian Rome Combination",
      description: "Pair this tour with a curated church and basilica route for a full historical arc.",
    },
    {
      title: "Family Pace Adaptation",
      description: "Adjust cadence, route complexity, and storytelling style to keep younger travelers engaged.",
    },
  ],
  testimonial: {
    quote:
      "Our guide transformed the Colosseum and Forum from ruins into a story we could actually follow. It felt private, calm, and perfectly paced.",
    name: "Ann K",
    context: "Ancient Rome private tour guest",
  },
  faq: [
    {
      question: "Are Colosseum tickets included in this private tour?",
      answer:
        "Ticket strategy is planned during confirmation. We guide you through timing, entry options, and logistics so access is smooth and aligned with your schedule.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "This route includes moderate walking on uneven historical surfaces. We adapt pace, pauses, and route emphasis to your group.",
    },
    {
      question: "Can we customize the itinerary?",
      answer:
        "Yes. This tour is private and flexible. We can emphasize archaeology, storytelling, photography points, or family-friendly pacing.",
    },
    {
      question: "Is this suitable for children?",
      answer:
        "Absolutely. We tailor explanations and rhythm for families, especially when traveling with older children or teens.",
    },
    {
      question: "Can we combine this with another Rome tour?",
      answer:
        "Yes, we can design a combined day with complementary experiences such as Christian Rome, Vatican, or selected neighborhoods.",
    },
  ],
  relatedTours: [
    {
      title: "Vatican Private Tour",
      description: "Museums, Sistine Chapel, and St. Peter's in a curated private route.",
      href: "/tours/vatican",
    },
    {
      title: "Christian Rome Tour",
      description: "Basilicas and sacred landmarks with a narrative approach to early Christian Rome.",
      href: "/tours/christian-rome",
    },
    {
      title: "Family-Friendly Rome Tours",
      description: "Flexible pacing and engaging storytelling designed for mixed-age travelers.",
      href: "/tours/family-friendly",
    },
    {
      title: "Day Trips from Rome",
      description: "Private full-day escapes with curated routes, private transport, and tailored pacing.",
      href: "/tours/day-trips-from-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Ancient Rome Experience",
    description:
      "Share your travel dates and preferences. We will design a private itinerary that fits your style, pace, and priorities.",
    buttonLabel: "Request Your Private Plan",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private, licensed guides",
      "Tailor-made planning",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: ancientRomeTourData.seoTitle,
    description: ancientRomeTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: ancientRomeTourData.path,
    },
    openGraph: {
      title: ancientRomeTourData.seoTitle,
      description: ancientRomeTourData.seoDescription,
      url: ancientRomeTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/image%20(16).png",
          alt: "Colosseum illuminated at warm golden hour in Rome",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ancientRomeTourData.seoTitle,
      description: ancientRomeTourData.seoDescription,
      images: ["/image%20(16).png"],
    },
  };
}

export default function AncientRomeTourPage() {
  return <TourTemplatePage data={ancientRomeTourData} />;
}

