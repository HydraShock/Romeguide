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
    "Explore Florence and Tuscany with a private tour at your pace, with Renaissance highlights, local neighborhoods, and optional countryside time.",
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
      "Discover Florence with a private tour focused on Renaissance art, architecture, and a relaxed pace, with the option to continue into Tuscany.",
    intentLine:
      "From the Duomo and Ponte Vecchio to museums, artisan streets, and countryside add-ons, we shape the day around what matters most to you.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Version",
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
    { label: "Duration", value: "Half day / Full day / Custom" },
    { label: "Format", value: "Private tour" },
    { label: "Guide", value: "Included" },
    { label: "Focus", value: "Florence highlights + Tuscany extension" },
    { label: "Best For", value: "Art, architecture, culture, scenic extensions" },
    { label: "Flexibility", value: "Custom pacing" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "Start in Florence, Add Tuscany if You Want",
    intro:
      "Florence is compact, beautiful, and full of art, architecture, and history.",
    body:
      "Instead of rushing through everything, we focus on Florence highlights like the Duomo, Ponte Vecchio, Piazza della Signoria, and museum options such as the Uffizi or Accademia. If you want, we can then extend into Tuscany with hill towns, scenic drives, or wine-country stops.",
    imageSrc:
      "/images/tours-in-italy/florence-tuscany/overview-renaissance-florence-urban-texture.jpg",
    imageAlt: "Historic Florence streets and cathedral district seen from above",
  },
  highlights: [
    {
      title: "Florence: Renaissance Beauty All Around You",
      description:
        "See how Florence's streets, facades, and squares bring the Renaissance to life.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-ponte-vecchio-blue-hour.jpg",
      imageAlt: "Historic Florence along the Arno with Renaissance-era bridge architecture",
    },
    {
      title: "The Duomo, Ponte Vecchio, and Piazza della Signoria",
      description:
        "Visit Florence's most iconic landmarks at a private pace, without rushing from stop to stop.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-piazza-signoria.jpg",
      imageAlt: "Piazza della Signoria and Palazzo Vecchio in Florence",
    },
    {
      title: "Uffizi, Accademia, and Art at Your Pace",
      description:
        "Choose how deep to go in the museums, with time to enjoy key works without feeling rushed.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-uffizi-gallery.jpg",
      imageAlt: "Uffizi and Palazzo Vecchio context in Florence historic center",
    },
    {
      title: "Tuscany Beyond Florence: Hill Towns, Views, and Wine Country",
      description:
        "If you want, we can add a Tuscany extension with scenic drives, hill towns, and wine-country stops.",
      imageSrc: "/images/tours-in-italy/florence-tuscany/highlight-tuscan-views-sunset.jpg",
      imageAlt: "Tuscan countryside at golden hour with comfortable landscape atmosphere",
    },
  ],
  itinerary: [
    {
      title: "Getting Started in Florence",
      description:
        "Start with a clear intro to the city, based on your pace and interests.",
    },
    {
      title: "Florence Highlights",
      description:
        "Walk through key areas like the Duomo, Piazza della Signoria, Ponte Vecchio, and nearby historic streets.",
    },
    {
      title: "Art, Museums, and Your Pace",
      description:
        "Choose how much time to give museums, architecture, artisan streets, or specific themes.",
    },
    {
      title: "Optional Tuscany Extension",
      description:
        "If you want, add a Tuscany extension with villages, scenic roads, or wine-country stops.",
    },
    {
      title: "And Much More...",
      description:
        "Every tour is private and custom, so we can always add more places and ideas based on what you enjoy most.",
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
      title: "First-Time Florence Visitors",
      description:
        "Great for travelers who want a clear, stress-free introduction to Florence.",
    },
    {
      title: "Art and Architecture Travelers",
      description:
        "Great if you want better art and architecture explanations through the day.",
    },
    {
      title: "Couples Who Prefer a Relaxed Pace",
      description:
        "A private format for couples who prefer a relaxed and meaningful pace.",
    },
    {
      title: "Travelers Combining Florence and Tuscany",
      description:
        "Best for travelers who want Florence first, then a Tuscany extension.",
    },
  ],
  upgrades: [
    {
      title: "Uffizi Priority Access Planning",
      description:
        "Add Uffizi priority planning to keep the day smooth and avoid wasted time.",
    },
    {
      title: "Accademia / David Extra Focus",
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
        "Extend beyond Florence with a countryside option shaped around timing and comfort.",
    },
    {
      title: "More Comfortable Vehicle",
      description:
        "Improve transfer comfort for extension routes and longer private itineraries.",
    },
  ],
  testimonial: {
    quote:
      "In Florence, our guide Roberto was truly passionate about his city and brought the buildings, art, and stories to life for our family.",
    name: "TravelingFamily1364",
    context: "Tripadvisor review, Mar 2025",
  },
  faq: [
    {
      question: "Is this focused on Florence or on Tuscany?",
      answer:
        "Florence is the main focus. Tuscany can be added as an extension when it fits your goals.",
    },
    {
      question: "Can the experience include museums such as the Uffizi or Accademia?",
      answer:
        "Yes. Museum inclusion is planned during confirmation, with timing and depth adjusted to your interests.",
    },
    {
      question: "Is this a walking experience, or can it include transport?",
      answer:
        "It is usually walk-led in Florence, with private transport added when needed for extensions.",
    },
    {
      question: "Can Tuscany be added as an extension?",
      answer:
        "Absolutely. Scenic, cultural, or wine-country extensions can be added according to your schedule.",
    },
    {
      question: "Is this suitable for first-time visitors to Florence?",
      answer:
        "Yes. It works very well as a first private introduction to Florence.",
    },
    {
      question: "Can the itinerary be built around art, architecture, or food interests?",
      answer:
        "Yes. As a private tour, we can shape the day around your preferred themes.",
    },
    {
      question: "Is hotel pickup available if needed?",
      answer:
        "Yes. Pickup or a meeting point can be arranged based on your location and route.",
    },
  ],
  relatedTours: [
    {
      title: "Rome Art & Architecture Tour",
      description: "Add Rome with a private route focused on art, architecture, and city history.",
      href: "/tours/art-architecture",
    },
    {
      title: "Private Venice Tour",
      description: "Pair Florence with a private Venice route focused on canals, art, and local atmosphere.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Private Milan Tour",
      description:
        "Add a northern Italy stop with a private Milan route focused on design and architecture.",
      href: "/tours-in-italy/private-milan-tour",
    },
    {
      title: "Private Orvieto & Umbria Tour",
      description:
        "Switch to a countryside rhythm with hill towns, views, and local food culture.",
      href: "/tours-in-italy/private-orvieto-umbria-tour",
    },
    {
      title: "Private Day Trips from Rome",
      description:
        "Compare Florence and Tuscany with private day-trip options from Rome.",
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
        "Share your dates and interests, and we\u2019ll build a private Florence and Tuscany route that fits your pace.",
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

