import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero + highlight-1: https://upload.wikimedia.org/wikipedia/commons/1/18/Duomo_di_Milano_by_night_%2844602863405%29.jpg
// overview + highlight-4: https://upload.wikimedia.org/wikipedia/commons/5/5d/Milano%2C_Galleria_Vittorio_Emanuele_II%2C_2016-06_CN-01.jpg
// highlight-2: https://upload.wikimedia.org/wikipedia/commons/8/89/Brera%2C_20121_Milano%2C_Italy_-_panoramio.jpg
// highlight-3: https://upload.wikimedia.org/wikipedia/commons/6/66/Milan_skyline_around_Unicredit_Tower_from_Duomo.jpg
const privateMilanTourData: TourPageData = {
  slug: "private-milan-tour",
  path: "/tours-in-italy/private-milan-tour",
  seoTitle:
    "Private Milan Tour | Duomo, Brera, Design, Architecture & Tailor-Made Experience | Rome Guide Services",
  seoDescription:
    "Discover Milan through a private curated tour with tailored pacing, iconic landmarks, elegant districts, architecture, and a more refined way to experience the city.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Private Milan Tour",
    landmarksLine: "DUOMO \u2022 BRERA \u2022 DESIGN \u2022 HIDDEN MILAN",
    subtitle:
      "Discover Milan through a private curated route that balances iconic landmarks, refined districts, architectural detail, and the quieter urban elegance that defines the city beyond first impressions.",
    intentLine:
      "From the Duomo and Galleria to Brera, design-led streets, and lesser-known corners, this private experience is shaped around your pace and cultural interests.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/milan/hero-private-milan-tour.jpg",
    imageAlt: "Milan Duomo illuminated in warm evening light",
    quickFacts: ["Private only", "Walking-led", "Guide included", "Tailor-made pacing"],
    microTags: [
      "Architecture lovers",
      "Design-minded travelers",
      "First-time Milan visitors",
      "Guests seeking a refined pace",
    ],
  },
  facts: [
    { label: "Duration", value: "Half day / Full day / Tailor-made" },
    { label: "Format", value: "Private city tour" },
    { label: "Focus", value: "Milan highlights + hidden districts" },
    { label: "Pace", value: "Tailored" },
    { label: "Best For", value: "Architecture, culture, design" },
    { label: "Extension", value: "Custom add-ons available" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "Milan Beyond the Surface, Read Through Architecture, Rhythm, and Refinement",
    intro:
      "Milan is often underestimated by travelers who see only business energy or fashion headlines. In a private format, the city reveals deeper layers of proportion, architecture, and urban elegance.",
    body:
      "This route is designed around pacing and coherence: Duomo as the symbolic anchor, then Galleria passages, Brera atmosphere, courtyards, and architectural transitions that define Milanese identity. Iconic landmarks matter, but much of Milan's value lies in quieter districts and details. With private guidance, the city becomes visually richer, more intelligible, and more memorable.",
    imageSrc: "/images/tours-in-italy/milan/overview-duomo-district-private-milan-tour.jpg",
    imageAlt: "Galleria Vittorio Emanuele II urban perspective in Milan",
  },
  highlights: [
    {
      title: "The Duomo and the Monumental Heart of Milan",
      description:
        "Explore the cathedral district as Milan's urban and symbolic center with context that goes beyond first-glance spectacle.",
      imageSrc: "/images/tours-in-italy/milan/highlight-duomo-monumental-heart.jpg",
      imageAlt: "Duomo di Milano facade and spires at night",
    },
    {
      title: "Brera, Elegant Streets, and the City's Cultural Texture",
      description:
        "Move through one of Milan's most refined districts where streetscape, proportion, and atmosphere reveal the city's quieter character.",
      imageSrc: "/images/tours-in-italy/milan/highlight-brera-cultural-texture.jpg",
      imageAlt: "Brera district street scene in Milan",
    },
    {
      title: "Design, Architecture, and the Logic of Milanese Refinement",
      description:
        "Read Milan through architectural transitions and design-led urban logic that connect heritage, modernity, and visual discipline.",
      imageSrc: "/images/tours-in-italy/milan/highlight-milan-design-architecture.jpg",
      imageAlt: "Milan architecture skyline with design-forward urban profile",
    },
    {
      title: "A Private Route Through Iconic and More Discreet Milan",
      description:
        "Private pacing allows iconic landmarks and less obvious city layers to be experienced as one coherent narrative.",
      imageSrc: "/images/tours-in-italy/milan/highlight-private-milan-discreet-route.jpg",
      imageAlt: "Milan's elegant gallery axis with warm urban light",
    },
  ],
  itinerary: [
    {
      title: "Orientation and First View of Milan",
      description:
        "Begin with the city's visual and historical framework at a calm, private pace.",
    },
    {
      title: "The Duomo District and Milan's Monumental Core",
      description:
        "Move through the cathedral area and surrounding anchors with contextual focus and selective depth.",
    },
    {
      title: "Brera and the City's More Refined Urban Texture",
      description:
        "Continue through one of Milan's most elegant districts, reading the city through proportion, streetscape, and atmosphere.",
    },
    {
      title: "Tailored Interests: Design, Architecture, Hidden Corners, or Cultural Focus",
      description:
        "Shape the route around your priorities and the specific Milan you want to understand.",
    },
    {
      title: "A Private Finish Built Around Your Pace",
      description:
        "Conclude with a route that feels coherent, elegant, and distinctly private.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Museum and monument entries are planned during confirmation to match your preferred depth and timing.",
    meetingPointText:
      "Meeting starts in central Milan, with exact point and timing confirmed in advance.",
    walkingLevelText:
      "This is primarily a walking-led urban route, with pacing adapted to your group and priorities.",
    accessibilityNotes:
      "Route sequencing can be adjusted where possible, though historic surfaces and traffic conditions may vary.",
    whatToBringText:
      "Comfortable shoes and weather-appropriate layers are recommended for city exploration.",
    securityChecksText:
      "Major landmarks and museums can apply standard entry controls and timed access windows.",
  },
  audience: [
    {
      title: "First-Time Milan Visitors Wanting the Right Introduction",
      description:
        "Ideal for guests seeking a clear, elegant private overview of Milan's core identity.",
    },
    {
      title: "Architecture and Design Travelers",
      description:
        "Perfect for visitors who want deeper insight into Milan's built environment and design culture.",
    },
    {
      title: "Couples Seeking a More Refined Pace",
      description:
        "A strong fit for travelers who value atmosphere, proportion, and private rhythm over rush.",
    },
    {
      title: "Guests Who Prefer Private Context Over Standard Group Touring",
      description:
        "Designed for travelers wanting intelligent route logic, focused interpretation, and flexibility.",
    },
  ],
  upgrades: [
    {
      title: "Duomo Focus Add-On",
      description:
        "Add deeper emphasis around the Duomo district and its architectural context.",
    },
    {
      title: "Brera Art and District Extension",
      description:
        "Extend time in Brera for stronger cultural and neighborhood depth.",
    },
    {
      title: "Last Supper Logistics Support",
      description:
        "Receive planning support around Last Supper availability and complementary nearby routing.",
    },
    {
      title: "Design-Focused Route Extension",
      description:
        "Shape the experience around design and architecture priorities across selected city segments.",
    },
    {
      title: "Fashion and Elegant Streets Add-On",
      description:
        "Add a refined urban style layer framed as cultural streetscape, not generic shopping.",
    },
  ],
  testimonial: {
    quote:
      "Milan felt unexpectedly rich and elegant with private pacing. The route made the city feel coherent, beautiful, and far more interesting than a standard first visit.",
    name: "Nathalie C",
    context: "Private Milan tour guest",
  },
  faq: [
    {
      question: "Is this a walking tour?",
      answer:
        "Yes, it is primarily walking-led, with pacing adapted to your group and interests.",
    },
    {
      question: "Can the route include the Duomo and Brera?",
      answer:
        "Yes. Both can be included, with route emphasis tailored to your preferred depth.",
    },
    {
      question: "Is this suitable for first-time visitors to Milan?",
      answer:
        "Absolutely. It is designed as a private introduction that balances iconic and understated Milan.",
    },
    {
      question: "Can the experience be customized around architecture, design, or elegant districts?",
      answer:
        "Yes. The route is tailored around your priorities and thematic interests.",
    },
    {
      question: "Is museum access included or separate?",
      answer:
        "Access planning is handled during confirmation and may be integrated depending on availability and timing.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is moderate to substantial depending on duration, with private pacing throughout.",
    },
    {
      question: "Is this a fully private guide experience?",
      answer:
        "Yes. This is a fully private guided experience with tailor-made sequencing.",
    },
  ],
  relatedTours: [
    {
      title: "Private Venice Tour",
      description:
        "Pair Milan's urban refinement with a private Venice route centered on canals and atmosphere.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Private Florence & Tuscany Tour",
      description:
        "Continue with a Florence-first cultural route and optional Tuscan extension.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Rome Art & Architecture Tour",
      description:
        "Extend your itinerary with a private Rome route focused on design and architectural depth.",
      href: "/tours/art-architecture",
    },
  ],
  finalCta: {
    title: "Plan Your Private Milan Experience",
    description:
      "Share your dates, interests, and priorities, and we will shape a private Milan route with the right balance of iconic landmarks, refined districts, architecture, and pace.",
    buttonLabel: "Request Your Private Tour",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private planning",
      "Tailor-made pacing",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: privateMilanTourData.seoTitle,
    description: privateMilanTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateMilanTourData.path,
    },
    openGraph: {
      title: privateMilanTourData.seoTitle,
      description: privateMilanTourData.seoDescription,
      url: privateMilanTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/milan/hero-private-milan-tour.jpg",
          alt: "Duomo di Milano in evening atmosphere",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateMilanTourData.seoTitle,
      description: privateMilanTourData.seoDescription,
      images: ["/images/tours-in-italy/milan/hero-private-milan-tour.jpg"],
    },
  };
}

export default function PrivateMilanTourPage() {
  return <TourTemplatePage data={privateMilanTourData} />;
}
