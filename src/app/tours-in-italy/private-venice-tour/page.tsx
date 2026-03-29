import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Canal_in_Venice_after_sunset.jpg/1920px-Canal_in_Venice_after_sunset.jpg
// overview: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg/1920px-St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg
// highlight-1: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg/1920px-St._Mark%27s_Basilica%2C_St_Mark%27s_Square%2C_Venice%2C_Italy.jpg
// highlight-2: https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ponte_di_Rialto_facciata_ovest_di_sera.jpg/1920px-Ponte_di_Rialto_facciata_ovest_di_sera.jpg
// highlight-3: https://upload.wikimedia.org/wikipedia/commons/a/ae/Calle_Campaniel_San_Polo_Venice.jpg
// highlight-4: https://upload.wikimedia.org/wikipedia/commons/7/78/Venice_city_scenes_-_night_on_the_Grand_canal%2C_near_St_Mark%27s_square_%2811002355734%29.jpg
const privateVeniceTourData: TourPageData = {
  slug: "private-venice-tour",
  path: "/tours-in-italy/private-venice-tour",
  seoTitle:
    "Private Venice Tour | St. Mark's, Canals, Hidden Venice & Tailor-Made Experience | Rome Guide Services",
  seoDescription:
    "Discover Venice through a private curated tour with tailored pacing, iconic highlights, hidden corners, elegant routes, and a more intimate experience of the city.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Private Venice Tour",
    landmarksLine: "ST. MARK'S \u2022 CANALS \u2022 HIDDEN VENICE",
    subtitle:
      "Discover Venice through a private curated route that balances iconic landmarks, quiet canals, historic atmosphere, and the slower rhythm that makes the city unforgettable.",
    intentLine:
      "From St. Mark's and the Grand Canal to hidden passages, artisan corners, and elegant viewpoints, this private experience is shaped around your pace and interests.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/venice/hero-private-venice-tour.jpg",
    imageAlt: "Venetian canal at sunset with warm reflections and elegant facades",
    quickFacts: ["Private only", "Walking-led", "Guide included", "Tailor-made pacing"],
    microTags: [
      "Couples",
      "First-time Venice visitors",
      "Art and architecture travelers",
      "Guests seeking a quieter pace",
    ],
  },
  facts: [
    { label: "Duration", value: "Half day / Full day / Tailor-made" },
    { label: "Format", value: "Private city tour" },
    { label: "Focus", value: "Venice highlights + hidden corners" },
    { label: "Pace", value: "Tailored" },
    { label: "Best For", value: "Culture, atmosphere, architecture" },
    { label: "Extension", value: "Custom add-ons available" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "Venice Beyond the Crowd, Seen at the Right Pace",
    intro:
      "Venice can feel overwhelming when approached as a rushed checklist. A private format changes that by improving pacing, route logic, and context from the first steps.",
    body:
      "This experience balances St. Mark's and the iconic urban core with quieter calli, bridges, and canals where the city feels more intimate and coherent. With a private guide and curated walking rhythm, Venice becomes less congested and more readable: architecture, water, movement, and atmosphere connected in one elegant route.",
    imageSrc: "/images/tours-in-italy/venice/overview-st-marks-private-venice-tour.jpg",
    imageAlt: "St. Mark's Basilica and the monumental heart of Venice",
  },
  highlights: [
    {
      title: "St. Mark's and the Historic Heart of Venice",
      description:
        "Experience Venice's cultural anchor with focused context and a private pace that avoids rushed monument-hopping.",
      imageSrc: "/images/tours-in-italy/venice/overview-st-marks-private-venice-tour.jpg",
      imageAlt: "St. Mark's Basilica in warm Venetian light",
    },
    {
      title: "The Grand Canal, Bridges, and the City's Water-Led Identity",
      description:
        "Read Venice through canals, crossings, and viewpoints that reveal how water shapes architecture, movement, and civic life.",
      imageSrc: "/images/tours-in-italy/venice/highlight-grand-canal-rialto.jpg",
      imageAlt: "Rialto bridge and Grand Canal at evening hour",
    },
    {
      title: "Hidden Venice: Quiet Passages, Artisan Corners, and Lesser-Known Beauty",
      description:
        "Step beyond the busiest flows into quieter lanes and local textures that make the city feel layered and authentic.",
      imageSrc: "/images/tours-in-italy/venice/highlight-hidden-venice-calle.jpg",
      imageAlt: "Narrow Venetian calle with historic facades and intimate atmosphere",
    },
    {
      title: "A Private Route Designed Around Atmosphere, Not Rush",
      description:
        "Private curation keeps the route elegant and coherent, prioritizing quality of experience over checklist speed.",
      imageSrc: "/images/tours-in-italy/venice/highlight-private-venice-night-route.jpg",
      imageAlt: "Night-time Venice canal scene with warm reflections",
    },
  ],
  itinerary: [
    {
      title: "Orientation and First View of Venice",
      description:
        "Begin with the city's visual and historical framework introduced at a calm private pace.",
    },
    {
      title: "St. Mark's and the Iconic Core",
      description:
        "Move through Venice's monumental heart with context, elegance, and selective focus on what matters most.",
    },
    {
      title: "Canals, Bridges, and the City's Rhythm",
      description:
        "Understand Venice through movement, water, and viewpoint logic that makes this city unlike any other.",
    },
    {
      title: "Hidden Passages and Tailored Interests",
      description:
        "Shape the route around quieter areas, architecture, artisans, and personal priorities.",
    },
    {
      title: "A Private Finish Built Around Your Pace",
      description:
        "Conclude with a coherent route ending that feels memorable, elegant, and distinctly private.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Monument or museum entries can be integrated during planning based on your preferred depth and timing.",
    meetingPointText:
      "Meeting starts in central Venice, with exact point and timing confirmed during itinerary design.",
    walkingLevelText:
      "This is primarily a walking-led route across bridges and calli, with pacing adapted to your group.",
    accessibilityNotes:
      "Venice includes bridges and uneven surfaces; route logic can be adjusted where possible for comfort.",
    whatToBringText:
      "Comfortable shoes and weather-appropriate layers are recommended for a city route shaped by walking and water.",
    securityChecksText:
      "Major monuments and museums may apply standard entry checks and timed access windows.",
  },
  audience: [
    {
      title: "First-Time Venice Visitors Wanting the Right Introduction",
      description:
        "Ideal for guests who want a clear and elegant private entry point into Venice.",
    },
    {
      title: "Couples Seeking a More Atmospheric Pace",
      description:
        "Perfect for travelers who value intimacy, beauty, and a less rushed city rhythm.",
    },
    {
      title: "Guests Interested in Architecture and Urban Beauty",
      description:
        "A strong fit for visitors drawn to facades, bridges, urban texture, and civic history.",
    },
    {
      title: "Travelers Who Prefer Private Context Over Standard Group Touring",
      description:
        "Designed for guests who want intelligent route logic, focused storytelling, and tailored pacing.",
    },
  ],
  upgrades: [
    {
      title: "St. Mark's Focus Add-On",
      description:
        "Add deeper emphasis around the basilica area and its historical context.",
    },
    {
      title: "Doge's Palace or Museum Extension",
      description:
        "Integrate curated interior depth for travelers wanting stronger institutional context.",
    },
    {
      title: "Gondola Experience Coordination",
      description:
        "Coordinate a refined gondola segment that aligns naturally with the walking route.",
    },
    {
      title: "Hidden Venice Extension",
      description:
        "Increase time in quieter quarters for atmosphere, architecture, and local texture.",
    },
    {
      title: "Artisans and Local Craft Focus Add-On",
      description:
        "Shape the route around Venetian craft tradition and artisan-oriented city segments.",
    },
  ],
  testimonial: {
    quote:
      "Venice felt completely different with private pacing. We saw the iconic places, but the quieter corners and the way the route unfolded made the city feel intimate and extraordinary.",
    name: "Caroline D",
    context: "Private Venice tour guest",
  },
  faq: [
    {
      question: "Is this a walking tour?",
      answer:
        "Yes, it is primarily walking-led, designed around Venice's urban layout and bridge network.",
    },
    {
      question: "Can the route include St. Mark's or the Doge's Palace?",
      answer:
        "Yes. We can include St. Mark's area focus and add Doge's Palace or museum depth as requested.",
    },
    {
      question: "Is this suitable for first-time visitors to Venice?",
      answer:
        "Absolutely. It is designed as a clear private introduction to iconic and lesser-known Venice.",
    },
    {
      question: "Can the experience be customized around art, architecture, or quieter areas?",
      answer:
        "Yes. The route is tailored around your priorities, with emphasis adjusted to your preferred themes.",
    },
    {
      question: "Is gondola coordination possible?",
      answer:
        "Yes, gondola coordination can be included when it aligns with your timing and route design.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is moderate to substantial depending on duration, with pacing adapted to your group.",
    },
    {
      question: "Is this a private guide experience only?",
      answer:
        "Yes. This is designed as a private guide experience with tailor-made pacing and route logic.",
    },
  ],
  relatedTours: [
    {
      title: "Private Florence & Tuscany Tour",
      description:
        "Pair Venice's water-led urban atmosphere with a Florence-first Renaissance private experience.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Private Milan Tour",
      description:
        "Continue north with a private route focused on architecture, design, and modern urban identity.",
      href: "/tours-in-italy/private-milan-tour",
    },
    {
      title: "Rome Art & Architecture Tour",
      description:
        "Extend your cultural itinerary with a Rome route centered on artistic and architectural depth.",
      href: "/tours/art-architecture",
    },
    {
      title: "Private Tuscany Experiences",
      description:
        "Explore a countryside-led private format when your priorities shift from city texture to regional rhythm.",
      href: "/tours-in-italy/private-tuscany-experiences",
    },
  ],
  finalCta: {
    title: "Plan Your Private Venice Experience",
    description:
      "Share your dates, interests, and priorities, and we will shape a private Venice route with the right balance of iconic landmarks, hidden corners, atmosphere, and pace.",
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
    title: privateVeniceTourData.seoTitle,
    description: privateVeniceTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateVeniceTourData.path,
    },
    openGraph: {
      title: privateVeniceTourData.seoTitle,
      description: privateVeniceTourData.seoDescription,
      url: privateVeniceTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/venice/hero-private-venice-tour.jpg",
          alt: "Venice canal reflections at warm dusk with elegant facades",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateVeniceTourData.seoTitle,
      description: privateVeniceTourData.seoDescription,
      images: ["/images/tours-in-italy/venice/hero-private-venice-tour.jpg"],
    },
  };
}

export default function PrivateVeniceTourPage() {
  return <TourTemplatePage data={privateVeniceTourData} />;
}
