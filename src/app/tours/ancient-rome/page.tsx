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
    "Ancient Rome Tour | Colosseum, Roman Forum & Palatine Hill | Rome Guide Services",
  seoDescription:
    "Explore the Colosseum, Roman Forum, and Palatine Hill with a licensed private guide. A private Ancient Rome tour built around your pace and interests.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  highlightsTheme: "bronzeHome",
  hero: {
    eyebrow: "PRIVATE GUIDED TOUR",
    title: "Ancient Rome Tour",
    landmarksLine: "Colosseum | Roman Forum | Palatine Hill",
    subtitle:
      "Explore the Colosseum, Roman Forum, and Palatine Hill and much more.",
    intentLine: "Private storytelling at your pace across Rome's must-see ancient sites.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Customize This Tour",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/ancient-rome/hero-ancient-rome-private-tour-colosseum-warm-light.webp",
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
    title: "Ancient Rome, Brought to Life",
    intro:
      "Your guide connects architecture, politics, and daily life so each stop actually makes sense.",
    body:
      "From the drama of the Colosseum to the civic center of the Forum and the imperial layers on Palatine Hill, the route is shaped around your group. Whether you are traveling as a couple, family, or history lover, the experience stays clear, engaging, and easy to follow.",
    imageSrc: "/images/tours/ancient-rome/overview-ancient-rome-tour-roman-forum-view.webp",
    imageAlt: "Aerial view of the Roman Forum ruins in central Rome",
  },
  highlights: [
    {
      title: "Colosseum: Arena, Spectacle, and Power",
      description:
        "Go beyond the postcard and see how the Colosseum really worked, from engineering choices to the politics behind the games.",
      imageSrc: "/images/tours/ancient-rome/highlight-colosseum-arches-ancient-rome.webp",
      imageAlt: "Columns and ruins of the Roman Forum under warm evening light",
    },
    {
      title: "Roman Forum: The Political Heart of the Empire",
      description:
        "Walk through temples, churches, and civic spaces with clear explanations of how power, law, and ritual shaped Rome.",
      imageSrc: "/images/tours/ancient-rome/highlight-roman-forum-columns-rome.webp",
      imageAlt: "Palatine Hill archaeological ruins overlooking the Roman Forum",
    },
    {
      title: "Palatine Hill: Origins of Rome",
      description:
        "Explore imperial residences and archaeological layers while linking Rome's legendary origins to what historians know today.",
      imageSrc: "/images/tours/ancient-rome/highlight-palatine-hill-ruins-rome.webp",
      imageAlt: "Panoramic view of Roman Forum ruins and surrounding historic skyline",
    },
    {
      title: "Imperial Context, Not Just Isolated Sites",
      description:
        "See how the Colosseum, Forum, and Palatine connect as one system of entertainment, politics, and elite life across centuries.",
      imageSrc: "/images/tours/ancient-rome/highlight-imperial-rome-archaeology-view.webp",
      imageAlt: "Forum Romanum ruins and archaeological layers in Rome",
    },
  ],
  itinerary: [
    {
      title: "Meeting Point and Tour Framing",
      description:
        "Meet your licensed guide, agree on the pace and focus, and start the route with a clear plan.",
    },
    {
      title: "Colosseum Exploration",
      description:
        "Explore key areas of the amphitheater while unpacking how the games worked and why they mattered in Roman society.",
    },
    {
      title: "Roman Forum Walk",
      description:
        "Follow an easy-to-read route through the Forum with storytelling that makes complex ruins understandable.",
    },
    {
      title: "Palatine Hill Viewpoints",
      description:
        "Take in panoramic views while exploring palace remains and how imperial power changed over time.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so we can add extra stops, hidden corners, and local suggestions based on your interests and timing.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Tickets are not issued automatically with this page request. During confirmation, we help you choose the best reservation option and entry time for your itinerary.",
    meetingPointText:
      "Meeting is arranged near the Colosseum area. Exact meeting point and timing are shared during confirmation.",
    walkingLevelText:
      "Moderate walking is expected across archaeological terrain with some uneven surfaces and occasional steps.",
    accessibilityNotes:
      "Route accessibility depends on current site conditions and entrances. We adapt pace and route wherever possible.",
    whatToBringText:
      "Bring a valid ID, comfortable walking shoes, water, and sun protection in warmer months.",
    securityChecksText:
      "Standard monument security checks may apply at entry points, so we recommend arriving a few minutes early.",
  },
  audience: [
    {
      title: "First-Time Visitors to Rome",
      description: "Great for first-time visitors who want Rome's top ancient landmarks explained in a clear, enjoyable way.",
    },
    {
      title: "Couples and Private Travelers",
      description: "Perfect for travelers who want private pacing, flexibility, and deeper context without feeling rushed.",
    },
    {
      title: "Families with Teens or Curious Kids",
      description: "The itinerary can be adapted with family-friendly explanations and breaks, while keeping the experience meaningful.",
    },
    {
      title: "Travelers Seeking Historical Context",
      description: "Ideal for travelers who want the stories behind the ruins, not just photo stops.",
    },
  ],
  upgrades: [
    {
      title: "Private Driver Coordination",
      description: "Private driver support before or after the walking section, especially helpful for tighter schedules.",
    },
    {
      title: "Extended Duration",
      description: "Add time for deeper coverage, additional viewpoints, or a second historical area in the same day.",
    },
    {
      title: "Ancient + Christian Rome Combination",
      description: "Pair this tour with Christian Rome and the Major Churches for a full historical timeline.",
    },
    {
      title: "Family Pace Adaptation",
      description: "Adjust pace, route complexity, and storytelling style to keep younger travelers engaged and comfortable.",
    },
  ],
  testimonial: {
    quote:
      "This was our second time with Rome Guide Services, and our Colosseum, Forum, and Palatine Hill tour would not have been the same without our guide.",
    name: "Mary R",
    context: "Tripadvisor review, May 2019",
  },
  faq: [
    {
      question: "Are Colosseum tickets included in this private tour?",
      answer:
        "Ticket planning is handled during confirmation. We guide you through entry times and options so the day runs smoothly.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "This route includes moderate walking on uneven historical surfaces. We adapt pace, pauses, and route emphasis to your group.",
    },
    {
      question: "Can we customize the itinerary?",
      answer:
        "Yes. Because the tour is private, we can focus more on archaeology, storytelling, photo spots, or family-friendly pacing.",
    },
    {
      question: "Is this suitable for children?",
      answer:
        "Absolutely. We adapt explanations and pacing for families, especially when traveling with older children or teens.",
    },
    {
      question: "Can we combine this with another Rome tour?",
      answer:
        "Yes. We can combine it with Christian Rome, Vatican, or selected neighborhoods based on your timing and interests.",
    },
  ],
  relatedTours: [
    {
      title: "Vatican Tour",
      description: "Vatican Museums and Sistine Chapel with private pacing that fits your day.",
      href: "/tours/vatican",
    },
    {
      title: "Christian Rome Tour",
      description: "Major Churches and sacred landmarks with clear storytelling and historical context.",
      href: "/tours/christian-rome",
    },
    {
      title: "Family-Friendly Rome Tours",
      description: "Flexible pacing and engaging storytelling designed for mixed-age travelers.",
      href: "/tours/family-friendly",
    },
    {
      title: "Day Trips from Rome",
      description: "Private full-day escapes from Rome with flexible pacing and comfortable transport.",
      href: "/tours/day-trips-from-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Ancient Rome Experience",
    description:
      "Share your dates and what matters most to you, and we'll build a private Ancient Rome plan that fits your pace.",
    buttonLabel: "Request My Private Plan",
    buttonHref: "#",
    trustItems: [
      "Personal reply within 24 hours",
      "Private, licensed guides",
      "Flexible planning around your pace",
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
          url: "/images/tours/ancient-rome/hero-ancient-rome-private-tour-colosseum-warm-light.webp",
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
      images: ["/images/tours/ancient-rome/hero-ancient-rome-private-tour-colosseum-warm-light.webp"],
    },
  };
}

export default function AncientRomeTourPage() {
  return <TourTemplatePage data={ancientRomeTourData} />;
}


