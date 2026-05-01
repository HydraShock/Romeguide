import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: local asset provided by user (christianrome.png)
// overview: https://www.pexels.com/photo/piazza-del-popolo-and-santa-maria-del-popolo-church-in-rome-italy-19376772/
// highlight-1: https://www.pexels.com/photo/stone-archway-in-rome-17698225/
// highlight-2: https://www.pexels.com/photo/stone-slab-with-a-bas-relief-of-jesus-christ-carrying-the-cross-24205460/
// highlight-3: https://unsplash.com/photos/EX29LfBucj4
// highlight-4: https://unsplash.com/photos/GZVCCkoLtig
const christianRomeTourData: TourPageData = {
  slug: "christian-rome-tour",
  path: "/tours/christian-rome",
  seoTitle: "Christian Rome Private Tour | Catacombs & Major Basilicas | Rome Guide Services",
  seoDescription:
    "Discover catacombs, the Major Basilicas, and sacred landmarks with a licensed private guide. A Christian Rome tour tailored to your pace and interests.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE GUIDED TOUR",
    title: "Christian Rome Private Tour",
    landmarksLine: "Catacombs | The Major Basilicas",
    subtitle:
      "Discover Rome's Christian heritage through a private journey that connects early faith communities, papal history, and sacred architecture.",
    intentLine: "Private, faith-aware storytelling across Rome's major Christian landmarks.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Itinerary",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/christian-rome/hero-christian-rome-tour-basilica-facade.webp",
    imageAlt: "Candlelit catacomb chamber with early Christian iconography in Rome",
    quickFacts: ["3 to 4 hours", "Private only", "Licensed guide", "Driver on request"],
    microTags: ["Faith and history buffs", "Pilgrims", "Cultural travelers"],
  },
  facts: [
    { label: "Duration", value: "3 to 4 hours" },
    { label: "Format", value: "Private only" },
    { label: "Guide", value: "Licensed guide" },
    { label: "Driver", value: "On request" },
    { label: "Access", value: "Site-dependent entry" },
    { label: "Focus", value: "Faith and heritage" },
  ],
  overview: {
    title: "Tracing the Roots of Christian Rome",
    intro:
      "This tour moves beyond isolated church visits. Your guide links early Christian communities, papal authority, and the evolution of sacred spaces across centuries.",
    body:
      "From catacomb memory to the ceremonial scale of Rome's great basilicas, each stop is paced to your interests and devotional priorities. The result is a coherent spiritual and historical journey, not a checklist.",
    imageSrc: "/images/tours/christian-rome/overview-christian-rome-tour-papal-churches.webp",
    imageAlt: "Twin church facades at Piazza del Popolo in Rome",
  },
  highlights: [
    {
      title: "Catacombs and Early Christian Memory",
      description:
        "Understand burial traditions, symbols, and community life in underground spaces that shaped Rome's early Christian story.",
      imageSrc: "/images/tours/christian-rome/highlight-christian-rome-catacomb-arches.webp",
      imageAlt: "Stone vaulted passage evoking early Christian catacomb routes",
    },
    {
      title: "Major Basilicas in Historical Context",
      description:
        "Read each basilica through liturgy, architecture, and patronage, with clear links to Rome's wider ecclesiastical history.",
      imageSrc: "/images/tours/christian-rome/highlight-christian-rome-catacomb-relief.webp",
      imageAlt: "Stone Christian bas-relief carved on a historic tomb slab",
    },
    {
      title: "Faith Stories Connected to Place",
      description:
        "Follow a narrative route that explains saints, relic traditions, and key turning points of Christian Rome.",
      imageSrc: "/images/tours/christian-rome/highlight-christian-rome-basilica-dome.webp",
      imageAlt: "Ornate basilica dome and liturgical architecture in Rome",
    },
    {
      title: "Private Pace for Reflection and Depth",
      description:
        "Balance historical context with quieter moments, adapting rhythm for prayer, study, or photography.",
      imageSrc: "/images/tours/christian-rome/highlight-christian-rome-basilica-interior.webp",
      imageAlt: "Grand basilica interior with gilded details in Rome",
    },
  ],
  itinerary: [
    {
      title: "Meeting and Route Framing (15 min)",
      description:
        "Meet your guide and align route priorities around faith focus, pacing, and preferred church sequence.",
    },
    {
      title: "Catacombs Visit (1h 10m)",
      description:
        "Explore selected catacomb contexts with commentary on early Christian life, burial practice, and symbolism.",
    },
    {
      title: "Major Basilica Stop (1h)",
      description:
        "Continue to a major basilica and decode architecture, liturgical significance, and key artistic elements.",
    },
    {
      title: "Second Sacred Landmark (45m)",
      description:
        "Add a complementary church or basilica to complete the historical arc and devotional perspective.",
    },
    {
      title: "Closing and Practical Guidance (20 min)",
      description:
        "Receive recommendations for additional churches, mass times, and nearby Christian heritage sites.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Some catacomb and site entries require advance planning. Entry details are confirmed during booking.",
    meetingPointText:
      "Meeting location is shared after confirmation and depends on the selected first site.",
    walkingLevelText:
      "Moderate walking with occasional stairs and transfers between landmarks.",
    accessibilityNotes:
      "Accessibility varies by catacomb and church. We can adapt route design where site conditions allow.",
    whatToBringText:
      "Bring valid ID, comfortable footwear, and attire suitable for church entry.",
    securityChecksText:
      "Security and entry controls may apply at major basilicas and selected sacred sites.",
  },
  audience: [
    {
      title: "History and Faith Travelers",
      description: "Ideal for guests who want Christian Rome explained through both devotion and history.",
    },
    {
      title: "Catholic Visitors and Pilgrims",
      description: "A respectful private format that supports reflection while maintaining expert context.",
    },
    {
      title: "Couples and Solo Explorers",
      description: "A calm and personal route with adaptable rhythm and tailored storytelling depth.",
    },
    {
      title: "Cruise and Short-Stay Guests",
      description: "Efficient routing for travelers with limited time but strong heritage interests.",
    },
  ],
  upgrades: [
    {
      title: "Extended Catacombs Coverage",
      description: "Add time for deeper underground heritage focus where access conditions permit.",
    },
    {
      title: "Private Driver Coordination",
      description: "Simplify movement between dispersed sacred sites with private transfer support.",
    },
    {
      title: "Basilica Focus Extension",
      description: "Add an additional major basilica to broaden theological and architectural context.",
    },
    {
      title: "Faith-Focused Narrative Option",
      description: "Prioritize devotional storytelling and liturgical significance across key landmarks.",
    },
  ],
  testimonial: {
    quote:
      "From the catacombs to the basilicas, the route felt deeply meaningful and very clear. Our guide balanced history and spirituality beautifully.",
    name: "Thomas P",
    context: "Christian Rome private tour guest",
  },
  faq: [
    {
      question: "Which catacombs are included in this Christian Rome private tour?",
      answer:
        "The selected catacomb depends on date, availability, and your interests. We confirm the best option during planning.",
    },
    {
      question: "Is transport between churches and catacombs included?",
      answer:
        "Transport can be arranged on request. Some routes are partly walkable, while others are more comfortable with a driver.",
    },
    {
      question: "Is there a dress code for basilicas on this tour?",
      answer:
        "Yes. Church entry generally requires modest attire. We share practical guidance during confirmation.",
    },
    {
      question: "Can we customize the Christian Rome itinerary for specific churches?",
      answer:
        "Yes. The tour is private and can prioritize your preferred basilicas, devotional themes, or historical periods.",
    },
    {
      question: "How much walking is involved on the Christian Rome route?",
      answer:
        "Walking is usually moderate, with possible stairs in some sites. We tailor pace and route to your comfort level.",
    },
  ],
  relatedTours: [
    {
      title: "Private Vatican Tour",
      description: "Vatican Museums and Sistine Chapel with a private licensed guide.",
      href: "/tours/vatican",
    },
    {
      title: "Ancient Rome Private Tour",
      description: "A story-led private route across Colosseum, Forum, and Palatine Hill.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Day Trips from Rome",
      description: "Curated full-day escapes from Rome with private transport and tailored pacing.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Rome Art and Architecture Tour",
      description: "Masterpieces, churches, and urban design explained by private experts.",
      href: "/tours/art-architecture",
    },
  ],
  finalCta: {
    title: "Plan Your Christian Rome Experience",
    description:
      "Tell us your dates, spiritual interests, and pace preferences. We will shape a private Christian Rome itinerary around your priorities.",
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
    title: christianRomeTourData.seoTitle,
    description: christianRomeTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: christianRomeTourData.path,
    },
    openGraph: {
      title: christianRomeTourData.seoTitle,
      description: christianRomeTourData.seoDescription,
      url: christianRomeTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/christian-rome/hero-christian-rome-tour-basilica-facade.webp",
          alt: "Candlelit catacomb chamber with early Christian iconography in Rome",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: christianRomeTourData.seoTitle,
      description: christianRomeTourData.seoDescription,
      images: ["/images/tours/christian-rome/hero-christian-rome-tour-basilica-facade.webp"],
    },
  };
}

export default function ChristianRomeTourPage() {
  return <TourTemplatePage data={christianRomeTourData} />;
}
