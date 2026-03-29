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
    "Private Sicily Tours | Luxury Tailor-Made Experiences in Sicily | Rome Guide Services",
  seoDescription:
    "Discover Sicily through private tailor-made tours shaped around archaeology, baroque towns, coastal beauty, food, wine, and refined cultural pacing.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOURS IN ITALY",
    title: "Private Sicily Tours",
    landmarksLine: "ARCHAEOLOGY \u2022 BAROQUE TOWNS \u2022 COAST \u2022 FOOD \u2022 WINE",
    subtitle:
      "Discover Sicily through private tailor-made experiences shaped around ancient sites, elegant towns, coastal beauty, food culture, and the layered identity that makes the island unlike anywhere else in Italy.",
    intentLine:
      "From Greek and Roman archaeology to baroque cities, volcanic landscapes, and refined coastal routes, Sicily can be explored privately and intelligently through journeys designed around your pace and priorities.",
    primaryCtaLabel: "Plan Your Sicily Tour",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/sicily/hero-private-sicily-tours.jpg",
    imageAlt: "Mt Etna and Taormina in warm Sicilian evening light",
    quickFacts: ["Private only", "Tailor-made", "Regional planning", "Cultural and scenic focus"],
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
    { label: "Style", value: "Tailor-made" },
    { label: "Best For", value: "Multi-day and curated experiences" },
    { label: "Planning", value: "Personalized route design" },
  ],
  overview: {
    eyebrow: "WHY SICILY",
    title: "One of Italy's Richest and Most Layered Destinations, Best Experienced Privately",
    intro:
      "Sicily is not one single experience but a region of powerful contrasts: archaeology and baroque architecture, coastal atmosphere and volcanic energy, urban layers and slower cultural rhythm.",
    body:
      "A private format transforms this complexity into elegance. Rather than rushing through disconnected highlights, you can shape Sicily through meaningful priorities: Greek and Roman heritage, baroque eastern towns, Palermo's Arab-Norman character, scenic coasts, Etna landscapes, and food-and-wine identity. This page is designed as a premium gateway to Sicily planning, not a one-size-fits-all route.",
    imageSrc: "/images/tours-in-italy/sicily/overview-sicily-coastal-atmosphere.jpg",
    imageAlt: "Sunset atmosphere over Ortigia coastline in Sicily",
  },
  highlights: [
    {
      title: "Archaeological Sicily: Ancient Theatres, Temples, and Pre-Modern Layers",
      description:
        "Explore Sicily through its deep civilizational foundations, from classical temple landscapes to layered pre-modern heritage.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-archaeology.jpg",
      imageAlt: "Valley of the Temples in Agrigento, Sicily",
    },
    {
      title: "Baroque and Historic Towns: Elegant Urban Beauty Across the Island",
      description:
        "Discover refined townscapes, piazzas, and architecture that express Sicily's post-seismic baroque and historic identity.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-baroque-towns.jpg",
      imageAlt: "Baroque architecture in Noto, Sicily",
    },
    {
      title: "Coastal Sicily: Sea, Light, and Refined Mediterranean Atmosphere",
      description:
        "Follow sea-facing routes and elegant coastal settings where light, stone, and water define Sicilian character.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-coastal-routes.jpg",
      imageAlt: "Ortigia coastline at sunset in Sicily",
    },
    {
      title: "Food, Wine, and Tailor-Made Regional Rhythm",
      description:
        "Shape the island through culinary culture, local wines, and pacing that leaves room for depth rather than checklist speed.",
      imageSrc: "/images/tours-in-italy/sicily/highlight-sicily-food-wine-rhythm.jpg",
      imageAlt: "Sicilian landscape around Etna and Taormina",
    },
  ],
  itinerary: [
    {
      title: "Archaeology and Ancient Civilizations",
      description:
        "Build a route centered on Sicily's major archaeological legacies, from temples and theatres to layered classical and pre-Roman heritage.",
    },
    {
      title: "Baroque Cities and Historic Elegance",
      description:
        "Shape your journey around architecture, piazzas, and historic townscapes where Sicily's urban beauty is most expressive.",
    },
    {
      title: "Coastal and Scenic Sicily",
      description:
        "Prioritize sea-facing towns, dramatic viewpoints, and Mediterranean atmosphere with refined route pacing.",
    },
    {
      title: "Sicily Through Food, Wine, and Slow Cultural Discovery",
      description:
        "Design an experience built around culinary identity, local producers, and a slower rhythm of cultural immersion.",
    },
    {
      title: "A Tailor-Made Private Route Built Around Your Priorities",
      description:
        "Combine themes into one coherent private journey shaped to your interests, travel style, and desired pace.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Site and monument access are coordinated during planning so timing aligns with your selected Sicily route.",
    meetingPointText:
      "Starting points are defined according to your arrival area and overall regional itinerary plan.",
    walkingLevelText:
      "Walking intensity varies by route style and can be adapted across archaeology, towns, or coastal segments.",
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
        "Ideal for guests looking for a richer southern Italy chapter beyond classic first-time circuits.",
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
        "Designed for travelers who want Sicily planned as a coherent region, not a fragmented checklist.",
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
        "Emphasize eastern Sicily's architectural elegance and historic urban character.",
    },
    {
      title: "Food and Wine Emphasis",
      description:
        "Build in curated culinary and wine moments that align with your route rhythm.",
    },
    {
      title: "Coastal and Scenic Focus",
      description:
        "Shift the journey toward sea-facing landscapes and atmospheric Mediterranean pacing.",
    },
    {
      title: "Luxury Vehicle and Transfer Planning",
      description:
        "Elevate comfort and logistics for longer regional movements across the island.",
    },
    {
      title: "Multi-Day Itinerary Shaping",
      description:
        "Structure a coherent private route across selected Sicily zones with intelligent sequencing.",
    },
  ],
  testimonial: {
    quote:
      "Sicily felt vast and layered in the best possible way, and having it shaped privately made everything feel more coherent, elegant, and deeply memorable.",
    name: "Amelia R",
    context: "Private Sicily tour guest",
  },
  faq: [
    {
      question: "Are these private tours in Sicily tailor-made?",
      answer:
        "Yes. Every Sicily plan is built privately around your interests, pace, and preferred route style.",
    },
    {
      question: "Is Sicily better explored as a multi-day journey?",
      answer:
        "In most cases, yes. Sicily's range is best experienced through a curated multi-day structure.",
    },
    {
      question: "Can the route focus on archaeology, food, or coastal towns?",
      answer:
        "Absolutely. We can emphasize one theme or combine several in a balanced private itinerary.",
    },
    {
      question: "Is private transport part of the planning?",
      answer:
        "Yes, private transport and transfer strategy are integrated according to your regional route.",
    },
    {
      question: "Can the itinerary be built around one area of Sicily?",
      answer:
        "Yes. Sicily can be approached island-wide or through a focused zone depending on your priorities.",
    },
    {
      question: "Is this suitable for first-time visitors to Sicily?",
      answer:
        "Yes. First-time travelers benefit from structured private planning and coherent route design.",
    },
    {
      question: "Can the experience be adapted for couples, families, or slower-paced travel?",
      answer:
        "Yes. Pacing, logistics, and thematic focus are tailored to your travel style and group profile.",
    },
  ],
  relatedTours: [
    {
      title: "Private Venice Tour",
      description:
        "Pair Sicily's regional depth with a private Venice city route centered on atmosphere and water-led identity.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Private Milan Tour",
      description:
        "Combine Sicily with a design- and architecture-led private experience in Milan.",
      href: "/tours-in-italy/private-milan-tour",
    },
    {
      title: "Private Florence & Tuscany Tour",
      description:
        "Continue your Italy itinerary with a Florence-first route and Tuscan extension possibilities.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
  ],
  finalCta: {
    title: "Plan Your Private Sicily Experience",
    description:
      "Share your dates, interests, and travel priorities, and we will shape a private Sicily journey with the right balance of culture, scenery, pacing, and regional depth.",
    buttonLabel: "Request Your Private Sicily Tour",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private planning",
      "Tailor-made routes",
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
