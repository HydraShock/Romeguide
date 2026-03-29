import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Florence%2C_Italy%2C_Brunelleschi%27s_Dome_of_Florence_Cathedral_at_sunset.jpg/1920px-Florence%2C_Italy%2C_Brunelleschi%27s_Dome_of_Florence_Cathedral_at_sunset.jpg
// overview: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Florence_street_from_the_Duomo_terrace_%2861468%29.jpg/1920px-Florence_street_from_the_Duomo_terrace_%2861468%29.jpg
// highlight-1: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Florence_street_from_the_Duomo_terrace_%2861468%29.jpg/1920px-Florence_street_from_the_Duomo_terrace_%2861468%29.jpg
// highlight-2: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ponte_Vecchio_from_Ponte_Santa_Trinita_Blue_hour.jpg/1920px-Ponte_Vecchio_from_Ponte_Santa_Trinita_Blue_hour.jpg
// highlight-3: https://upload.wikimedia.org/wikipedia/commons/3/3f/Florence._Uffizi_Gallery_and_Palazzo_Vecchio_%283611947576%29.jpg
// highlight-4: https://upload.wikimedia.org/wikipedia/commons/5/5c/Cappella_Madonna_di_Vitaleta--.jpg
const florenceTuscanyTourData: TourPageData = {
  slug: "private-florence-tuscany-tour",
  path: "/tours-in-italy/private-florence-tuscany-tour",
  seoTitle:
    "Private Florence & Tuscany Tour | Renaissance Florence, Art, Architecture & Countryside | Rome Guide Services",
  seoDescription:
    "Discover Florence and the wider Tuscan atmosphere through a private curated experience with tailored pacing, Renaissance highlights, elegant routes, and optional countryside extensions.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Private Florence & Tuscany Tour",
    landmarksLine: "FLORENCE \u2022 RENAISSANCE HIGHLIGHTS \u2022 TUSCAN ATMOSPHERE",
    subtitle:
      "Experience Florence through a private curated journey shaped around Renaissance art, architecture, elegant pacing, and the wider beauty of Tuscany beyond the city.",
    intentLine:
      "From the Duomo and Ponte Vecchio to museum masterpieces, artisan streets, and optional countryside extensions, this experience is designed for travelers who want Florence at its best \u2014 privately and intelligently.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/florence-tuscany/hero-private-florence-tuscany-tour.jpg",
    imageAlt: "Florence skyline with Brunelleschi's dome in warm sunset light",
    quickFacts: ["Private only", "Florence-led", "Guide included", "Tuscany extension available"],
    microTags: [
      "Art lovers",
      "Couples",
      "First-time Florence visitors",
      "Travelers extending into Tuscany",
    ],
  },
  facts: [
    { label: "Duration", value: "Half day / Full day / Tailor-made" },
    { label: "Format", value: "Private tour" },
    { label: "Guide", value: "Included" },
    { label: "Focus", value: "Florence highlights + Tuscany extension" },
    { label: "Best For", value: "Art, architecture, culture, scenic extensions" },
    { label: "Flexibility", value: "Tailor-made pacing" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "Renaissance Florence at the Center, Tuscany as the Natural Extension",
    intro:
      "Florence is the cultural anchor of this private experience: a city where Renaissance art, architecture, and civic identity are concentrated at extraordinary density.",
    body:
      "Rather than trying to package all of Tuscany into one vague route, we begin where the artistic and historical core is strongest: Duomo, Ponte Vecchio, Piazza della Signoria, Uffizi, and Accademia context. Tuscany enters as a curated second layer for guests who want more than the city itself, with optional countryside, hill-town, or wine-country extensions designed around comfort, elegance, and intelligent pacing.",
    imageSrc:
      "/images/tours-in-italy/florence-tuscany/overview-renaissance-florence-urban-texture.jpg",
    imageAlt: "Historic Florence streets and cathedral district seen from above",
  },
  highlights: [
    {
      title: "Florence: The Open-Air Museum of the Renaissance",
      description:
        "Read Florence through its urban fabric, facades, and piazzas, where architecture and civic history form one coherent visual narrative.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-ponte-vecchio-blue-hour.jpg",
      imageAlt: "Historic Florence along the Arno with Renaissance-era bridge architecture",
    },
    {
      title: "The Duomo, Ponte Vecchio, and Piazza della Signoria",
      description:
        "Experience Florence's landmark triad at a private pace, with route logic that connects symbolic spaces rather than rushing isolated stops.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-piazza-signoria.jpg",
      imageAlt: "Piazza della Signoria and Palazzo Vecchio in Florence",
    },
    {
      title: "Uffizi, Accademia, and the Art of a Private Pace",
      description:
        "Shape museum depth around your priorities, balancing major works with breathing room for context, conversation, and meaningful viewing.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-uffizi-gallery.jpg",
      imageAlt: "Uffizi and Palazzo Vecchio context in Florence historic center",
    },
    {
      title:
        "Tuscany Beyond Florence: Scenic Extensions, Hill Towns, and Wine Country Possibilities",
      description:
        "When desired, extend beyond Florence into a quieter Tuscan rhythm with curated scenic and cultural layers that complement the city core.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-tuscan-views-sunset.jpg",
      imageAlt: "Tuscan countryside at golden hour with refined landscape atmosphere",
    },
  ],
  itinerary: [
    {
      title: "Arrival and Orientation in Florence",
      description:
        "Begin with the city's historical and visual framework, adjusted to your pace, interests, and preferred depth.",
    },
    {
      title: "Renaissance Florence Highlights",
      description:
        "Move through the essential landmarks, including the Duomo area, Piazza della Signoria, Ponte Vecchio, and surrounding historic streets.",
    },
    {
      title: "Art, Museums, and Tailored Depth",
      description:
        "Shape the experience around museum access, architecture, artisans, or thematic focus according to your priorities.",
    },
    {
      title: "Florence as a Gateway to Tuscany",
      description:
        "Introduce extension possibilities into the Tuscan landscape, villages, or wine-country settings when aligned with your schedule.",
    },
    {
      title: "A Private Experience Built Around Your Priorities",
      description:
        "Close with a route designed around comfort, private pacing, and a clear balance between cultural depth and atmosphere.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Museum access (for example Uffizi or Accademia) is planned during confirmation to match your preferred pace and date.",
    meetingPointText:
      "Meeting starts in Florence city center, with pickup or transfer coordination available when needed.",
    walkingLevelText:
      "Walking is typically moderate in historic areas, with pacing adjusted around museum and street segments.",
    accessibilityNotes:
      "We tailor route sequence where possible, though historic surfaces and museum flows can vary by day.",
    whatToBringText:
      "Comfortable shoes, a light layer, and valid ID are recommended, especially when museum entries are included.",
    securityChecksText:
      "Major sites and museums may apply standard security and timed-entry controls.",
  },
  audience: [
    {
      title: "First-Time Florence Visitors Wanting the Right Private Introduction",
      description:
        "Ideal for guests seeking a clear and elegant Florence foundation without checklist overload.",
    },
    {
      title: "Art and Architecture Travelers",
      description:
        "Perfect for visitors who want Renaissance context, landmark depth, and curated museum logic.",
    },
    {
      title: "Couples Seeking a More Elegant Pace",
      description:
        "A refined private format for travelers who value beauty, rhythm, and meaningful cultural time.",
    },
    {
      title: "Guests Exploring Florence as a Base for Tuscany",
      description:
        "A strong fit for travelers who want city depth first, then optional countryside extension.",
    },
  ],
  upgrades: [
    {
      title: "Uffizi Priority Access Add-On",
      description:
        "Add curated Uffizi planning to protect flow and maximize viewing quality.",
    },
    {
      title: "Accademia / David Focus Add-On",
      description:
        "Include dedicated time and interpretation around David and Accademia highlights.",
    },
    {
      title: "Florence Artisan Route Extension",
      description:
        "Add artisan streets and workshop texture for guests interested in Florentine craftsmanship.",
    },
    {
      title: "Tuscany Scenic or Wine-Country Extension",
      description:
        "Extend beyond Florence with a curated countryside layer designed around timing and comfort.",
    },
    {
      title: "Premium Vehicle Upgrade",
      description:
        "Upgrade transfer comfort for extension routes and longer private itineraries.",
    },
  ],
  testimonial: {
    quote:
      "Florence felt extraordinary with private pacing. We could actually absorb the city, and the way the experience opened naturally toward Tuscany made it feel far more thoughtful than a standard tour.",
    name: "Isabelle M",
    context: "Private Florence & Tuscany tour guest",
  },
  faq: [
    {
      question: "Is this focused on Florence or on Tuscany?",
      answer:
        "Florence is the primary anchor. Tuscany is available as a curated extension layer when it fits your goals.",
    },
    {
      question: "Can the experience include museums such as the Uffizi or Accademia?",
      answer:
        "Yes. Museum inclusion is tailored during planning, with timing and depth adapted to your interests.",
    },
    {
      question: "Is this a walking experience, or can it include transport?",
      answer:
        "It is typically walk-led in Florence, with private transport integrated when extension logic requires it.",
    },
    {
      question: "Can Tuscany be added as an extension?",
      answer:
        "Absolutely. Scenic, cultural, or wine-country extensions can be added according to your schedule.",
    },
    {
      question: "Is this suitable for first-time visitors to Florence?",
      answer:
        "Yes. It is designed to provide a strong private introduction with clear structure and elegant pacing.",
    },
    {
      question: "Can the itinerary be tailored to art, architecture, or food interests?",
      answer:
        "Yes. As a private experience, we tailor emphasis and sequencing around your preferred themes.",
    },
    {
      question: "Is hotel pickup available if needed?",
      answer:
        "Yes, pickup or coordinated meeting logistics can be arranged based on your location and route design.",
    },
  ],
  relatedTours: [
    {
      title: "Rome Art & Architecture Tour",
      description: "Extend your cultural arc with a private route through Rome's design and artistic heritage.",
      href: "/tours/art-architecture",
    },
    {
      title: "Private Venice Tour",
      description: "Pair Florence with a private Venice experience focused on art, canals, and civic history.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Private Milan Tour",
      description:
        "Add a design- and architecture-led northern Italy counterpart to your Florence private experience.",
      href: "/tours-in-italy/private-milan-tour",
    },
    {
      title: "Private Tuscany Experiences",
      description:
        "Explore a Tuscany-first private format when your priorities go beyond city-centered exploration.",
      href: "/tours-in-italy/private-tuscany-experiences",
    },
    {
      title: "Private Day Trips from Rome",
      description:
        "Compare Florence and Tuscany with Rome-based curated escapes and private full-day routes.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Ancient Rome Private Tour",
      description: "Combine Renaissance Florence with an imperial Rome private experience for full historical range.",
      href: "/tours/ancient-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Private Florence & Tuscany Experience",
    description:
      "Share your dates, interests, and priorities, and we will shape a private experience centered on Florence with the right balance of art, architecture, atmosphere, and Tuscan extension possibilities.",
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
    title: florenceTuscanyTourData.seoTitle,
    description: florenceTuscanyTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: florenceTuscanyTourData.path,
    },
    openGraph: {
      title: florenceTuscanyTourData.seoTitle,
      description: florenceTuscanyTourData.seoDescription,
      url: florenceTuscanyTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/florence-tuscany/hero-private-florence-tuscany-tour.jpg",
          alt: "Florence skyline and Duomo in cinematic sunset atmosphere",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: florenceTuscanyTourData.seoTitle,
      description: florenceTuscanyTourData.seoDescription,
      images: ["/images/tours-in-italy/florence-tuscany/hero-private-florence-tuscany-tour.jpg"],
    },
  };
}

export default function PrivateFlorenceTuscanyTourPage() {
  return <TourTemplatePage data={florenceTuscanyTourData} />;
}

