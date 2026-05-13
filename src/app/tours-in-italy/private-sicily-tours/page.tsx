import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero + highlight-4: https://upload.wikimedia.org/wikipedia/commons/4/46/Mt_Etna_and_Taormina_as_seen_from_the_Ancient_Theatre_of_Taormina_%2822290641726%29.jpg
// overview + highlight-3: https://upload.wikimedia.org/wikipedia/commons/0/06/Ortigia_sunset%2C_Siracusa%2C_Sicily_-_49676831047.jpg
// highlight-1: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Valley_of_the_Temples%2C_Agrigento%2C_Sicily_-_49667763336.jpg/2000px-Valley_of_the_Temples%2C_Agrigento%2C_Sicily_-_49667763336.jpg
// highlight-2: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/San_Salvatore_Monastery_in_the_Baroque_city_of_Noto_on_the_island_of_Sicily%2C_Italy_%2849432681223%29.jpg/2000px-San_Salvatore_Monastery_in_the_Baroque_city_of_Noto_on_the_island_of_Sicily%2C_Italy_%2849432681223%29.jpg
const privateSicilyToursData: TourPageData = {
  slug: "private-sicily-tours",
  path: "/tours-in-italy/private-sicily-tours",
  seoTitle:
    "Sicily Tours | Private Custom Experiences in Sicily | Rome Guide Services",
  seoDescription:
    "Explore Sicily with private custom tours built around archaeology, baroque towns, coastal views, food, wine, and the pace you prefer.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOURS IN ITALY",
    title: "Sicily Tours",
    landmarksLine: "ARCHAEOLOGY \u2022 BAROQUE TOWNS \u2022 COAST \u2022 FOOD \u2022 WINE",
    subtitle:
      "Discover Sicily with private tours built around ancient sites, beautiful towns, coastal views, and food culture.",
    intentLine:
      "From Greek and Roman archaeology to baroque cities and volcanic landscapes, we design each route around your pace and priorities.",
    primaryCtaLabel: "Plan Your Sicily Tour",
    secondaryCtaLabel: "Ask for a Custom Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/sicily/hero-private-sicily-tours.jpg",
    imageAlt: "Mt Etna and Taormina in warm Sicilian evening light",
    quickFacts: ["Private only", "Custom", "Regional planning", "Cultural and scenic focus"],
    microTags: [
      "Returning Italy travelers",
      "Couples",
      "Culture and archaeology lovers",
      "Guests seeking a multi-layered destination",
    ],
  },
  facts: [
    { label: "Format", value: "Private tours" },
    { label: "Region", value: "Sicily" },
    { label: "Focus", value: "Culture, landscapes, archaeology, food, wine" },
    { label: "Style", value: "Custom" },
    { label: "Best For", value: "Multi-day private trips" },
    { label: "Planning", value: "Personalized route design" },
  ],
  overview: {
    eyebrow: "WHY SICILY",
    title: "A Big, Diverse Destination Best Seen at Your Own Pace",
    intro:
      "Sicily brings together archaeology, baroque architecture, coastlines, volcanic landscapes, and strong local food culture.",
    body:
      "A private format helps make all of this easy to enjoy. Instead of racing through disconnected stops, we build a route around what matters most to you, from ancient heritage and historic towns to scenic coasts and food-and-wine moments.",
    imageSrc: "/images/tours-in-italy/sicily/overview-sicily-coastal-atmosphere.jpg",
    imageAlt: "Sunset atmosphere over Ortigia coastline in Sicily",
  },
  highlights: [
    {
      title: "Archaeological Sicily: Ancient Theatres and Temples",
      description:
        "Explore Sicily's deep history, from classical temples to long-standing local heritage.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-archaeology.jpg",
      imageAlt: "Valley of the Temples in Agrigento, Sicily",
    },
    {
      title: "Baroque and Historic Towns Across the Island",
      description:
        "Discover historic town centers, squares, and architecture that define Sicily's baroque character.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-baroque-towns.jpg",
      imageAlt: "Baroque architecture in Noto, Sicily",
    },
    {
      title: "Coastal Sicily: Sea, Light, and Mediterranean Atmosphere",
      description:
        "Follow sea-facing routes and beautiful coastal settings where light, stone, and water define Sicilian character.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-coastal-routes.jpg",
      imageAlt: "Ortigia coastline at sunset in Sicily",
    },
    {
      title: "Food, Wine, and Custom Regional Rhythm",
      description:
        "Shape your trip around food culture, local wines, and a pace that gives each stop proper time.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-food-wine-rhythm.jpg",
      imageAlt: "Sicilian landscape around Etna and Taormina",
    },
  ],
  itinerary: [
    {
      title: "Archaeology and Ancient Civilizations",
      description:
        "Build a route centered on Sicily's main archaeological sites, from temples to theatres and ancient towns.",
    },
    {
      title: "Baroque Cities and Historic Towns",
      description:
        "Shape your route around architecture, squares, and the historic townscapes that define Sicily.",
    },
    {
      title: "Coastal and Scenic Sicily",
      description:
        "Prioritize sea-facing towns, dramatic viewpoints, and Mediterranean light at a comfortable pace.",
    },
    {
      title: "Sicily Through Food, Wine, and Slow Discovery",
      description:
        "Build in local food, wine, and producers, with a slower rhythm that still feels rich and complete.",
    },
    {
      title: "And Much More...",
      description:
        "Every tour is private and custom, so we can always add more places and ideas based on what you enjoy most.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Site and monument access are planned in advance so timing stays smooth for your Sicily route.",
    meetingPointText:
      "Starting points are defined according to your arrival area and overall regional itinerary plan.",
    walkingLevelText:
      "Walking intensity varies by route style and can be adjusted across archaeology, towns, or coastal segments.",
    accessibilityNotes:
      "We can tailor pacing and stop order, though some historic centers and archaeological areas include uneven surfaces.",
    whatToBringText:
      "Comfortable shoes, sun protection, and light layers are recommended for mixed cultural and scenic routes.",
    securityChecksText:
      "Major sites may apply standard controls and ticket checks depending on region and season.",
  },
  audience: [
    {
      title: "Returning Italy Travelers Wanting More Than the Standard Route",
      description:
        "Ideal for guests who want more than the classic first-time Italy route.",
    },
    {
      title: "Couples Seeking a Richer Southern Italy Experience",
      description:
        "Perfect for travelers who value atmosphere, beauty, and private pacing across diverse settings.",
    },
    {
      title: "Archaeology and Culture Lovers",
      description:
        "A strong fit for guests who want depth across sites, towns, and historical layers.",
    },
    {
      title: "Guests Planning a Private Multi-Day Journey",
      description:
        "Designed for travelers who want Sicily planned as a clear region, not a fragmented checklist.",
    },
  ],
  upgrades: [
    {
      title: "Archaeology-Led Route Design",
      description:
        "Prioritize ancient Sicily through a route focused on temples, theatres, and heritage depth.",
    },
    {
      title: "Baroque Towns Route",
      description:
        "Focus on eastern Sicily's baroque architecture and historic town centers.",
    },
    {
      title: "Food and Wine Emphasis",
      description:
        "Add food and wine moments that fit naturally into your route.",
    },
    {
      title: "Coastal and Scenic Focus",
      description:
        "Shift the journey toward sea-facing landscapes and atmospheric Mediterranean pacing.",
    },
    {
      title: "Private Vehicle and Transfer Planning",
      description:
        "Add extra comfort and clear planning for longer regional movements across the island.",
    },
    {
      title: "Multi-Day Itinerary Shaping",
      description:
        "Build a clear private route across selected Sicily areas with smooth flow.",
    },
  ],
  testimonial: {
    quote:
      "We used Rome Guide Services on multiple trips to Italy and every time they delivered thoughtful planning, excellent guides, and a very smooth private experience.",
    name: "Kelli S",
    context: "Tripadvisor review, Jun 2023",
  },
  faq: [
    {
      question: "Are these private tours in Sicily custom?",
      answer:
        "Yes. Every Sicily plan is built privately around your interests, pace, and preferred route style.",
    },
    {
      question: "Is Sicily better explored as a multi-day journey?",
      answer:
        "In most cases, yes. Sicily is easier to enjoy with a multi-day plan.",
    },
    {
      question: "Can the route focus on archaeology, food, or coastal towns?",
      answer:
        "Absolutely. We can emphasize one theme or combine several in a balanced private itinerary.",
    },
    {
      question: "Is private transport part of the planning?",
      answer:
        "Yes. Private transport and transfers can be added based on your regional route.",
    },
    {
      question: "Can the itinerary be built around one area of Sicily?",
      answer:
        "Yes. Sicily can be approached island-wide or through a focused zone depending on your priorities.",
    },
    {
      question: "Is this suitable for first-time visitors to Sicily?",
      answer:
        "Yes. First-time travelers usually find private planning much easier and less stressful.",
    },
    {
      question: "Can you adjust the experience for couples, families, or slower-paced travel?",
      answer:
        "Yes. Pace, planning, and themes are adjusted to your travel style and group profile.",
    },
  ],
  relatedTours: [
    {
      title: "Venice Tour",
      description:
        "Pair Sicily's regional depth with a private Venice route centered on canals and atmosphere.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Milan Tour",
      description:
        "Combine Sicily with a design- and architecture-led private experience in Milan.",
      href: "/tours-in-italy/private-milan-tour",
    },
    {
      title: "Florence & Tuscany Tour",
      description:
        "Continue your Italy itinerary with a Florence-first route and Tuscan extension possibilities.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
  ],
  finalCta: {
    title: "Plan Your Private Sicily Experience",
      description:
        "Share your dates and interests, and we'll build a private Sicily route that fits your pace and priorities.",
    buttonLabel: "Plan This Tour",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private planning",
      "Custom routes",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: privateSicilyToursData.seoTitle,
    description: privateSicilyToursData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateSicilyToursData.path,
    },
    openGraph: {
      title: privateSicilyToursData.seoTitle,
      description: privateSicilyToursData.seoDescription,
      url: privateSicilyToursData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/sicily/hero-private-sicily-tours.jpg",
          alt: "Mt Etna and Taormina in cinematic Sicilian light",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateSicilyToursData.seoTitle,
      description: privateSicilyToursData.seoDescription,
      images: ["/images/tours-in-italy/sicily/hero-private-sicily-tours.jpg"],
    },
  };
}

export default function PrivateSicilyToursPage() {
  return <TourTemplatePage data={privateSicilyToursData} />;
}

