import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://www.pexels.com/photo/st-peter-s-basilica-seen-from-via-della-conciliazione-33549726/
// overview: https://www.pexels.com/photo/st-peters-basilica-dome-over-trees-and-river-in-rome-20421988/
// highlight-1: https://www.pexels.com/photo/interior-of-st-peter-basilica-13996797/
// highlight-2: https://www.pexels.com/photo/intricate-interior-of-st-peter-s-basilica-vatican-33375807/
// highlight-3: https://www.pexels.com/photo/apostolic-palace-and-colonnade-in-vatican-city-31741852/
// highlight-4: https://www.pexels.com/photo/saint-peter-s-square-colonnade-and-fountain-28665599/
const vaticanTourData: TourPageData = {
  slug: "vatican-tour",
  path: "/tours/vatican",
  seoTitle:
    "Private Vatican Tour | Vatican Museums, Sistine Chapel & St. Peter's Basilica | Rome Guide Services",
  seoDescription:
    "Explore the Vatican Museums, Sistine Chapel, and St. Peter's Basilica with a licensed private guide. A private Vatican tour at your pace.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE GUIDED TOUR",
    title: "Private Vatican Tour",
    landmarksLine: "Vatican Museums | Sistine Chapel | St. Peter's Basilica",
    subtitle:
      "Explore Vatican City with a licensed private guide, with a route shaped around your interests and your pace.",
    intentLine: "Private Vatican storytelling through the city's most iconic spaces, at a pace that feels right for you.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Customize This Tour",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/vatican/hero-vatican-private-tour-san-pietro-sunset-final.webp",
    imageAlt: "St. Peter's Basilica facade at sunset in Vatican City",
    quickFacts: ["3 to 4 hours", "Private only", "Licensed guide", "Fast-track access"],
    microTags: ["First-time visitors", "Art lovers", "Pilgrims"],
  },
  facts: [
    { label: "Duration", value: "3 to 4 hours" },
    { label: "Format", value: "Private only" },
    { label: "Guide", value: "Licensed guide" },
    { label: "Access", value: "Fast-track available" },
    { label: "Walking", value: "Moderate" },
    { label: "Sites", value: "Museums, Sistine, St. Peter's" },
  ],
  overview: {
    title: "The Vatican, Made Clear and Enjoyable",
    intro:
      "Your guide connects papal history, Renaissance art, and the spiritual meaning behind each space in a way that is easy to follow.",
    body:
      "From the Vatican Museums to the Sistine Chapel and St. Peter's Basilica, the route is shaped around your interests and energy. Perfect if you want a private experience that feels both rich and relaxed.",
    imageSrc: "/images/tours/vatican/overview-vatican-tour-st-peters-river-view.webp",
    imageAlt: "St. Peter's Basilica dome viewed across the Tiber in warm evening light",
  },
  highlights: [
    {
      title: "Vatican Museums Without Guesswork",
      description:
        "Follow a clear route through key galleries so the major works are understood in context, not just seen in passing.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-basilica-interior.webp",
      imageAlt: "Ornate interior details inside St. Peter's Basilica in Vatican City",
    },
    {
      title: "Sistine Chapel Context and Meaning",
      description:
        "Arrive with the right context so Michelangelo's ceiling and altar wall feel meaningful, not overwhelming.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-baldachin-detail.webp",
      imageAlt: "Golden baldachin and monumental columns inside St. Peter's Basilica",
    },
    {
      title: "St. Peter's Basilica, Read as a Story",
      description:
        "Discover Bernini, Michelangelo, and papal symbolism through explanations shaped around what interests you most.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-st-peters-square-night.webp",
      imageAlt: "Apostolic Palace and colonnade at St. Peter's Square in Vatican City",
    },
    {
      title: "A Calm Private Flow Through Crowded Sites",
      description:
        "Move through busy areas with smoother timing and a calmer private flow built around your pace.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-colonnade-fountain.webp",
      imageAlt: "Fountain and colonnade composition in St. Peter's Square",
    },
  ],
  itinerary: [
    {
      title: "Meeting and Entry Strategy",
      description:
        "Meet your guide, review your preferences, and confirm the best entry timing before starting.",
    },
    {
      title: "Vatican Museums Galleries",
      description:
        "Explore major galleries with clear commentary and smooth transitions between key sections.",
    },
    {
      title: "Sistine Chapel Visit",
      description:
        "Visit the chapel with easy-to-follow context on iconography, patronage, and Michelangelo's innovation.",
    },
    {
      title: "St. Peter's Basilica",
      description:
        "Continue into the basilica to understand its architecture, spiritual role, and key masterpieces.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so we can add extra stops, hidden corners, and local suggestions based on your interests and timing.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Vatican access is planned during confirmation. Availability and entry windows can vary by date and season.",
    meetingPointText:
      "Meeting details are shared after confirmation, usually near the Vatican Museums entrances.",
    walkingLevelText:
      "Expect moderate walking through museum corridors, with standing periods during explanations.",
    accessibilityNotes:
      "Accessible routing can be arranged where available. Final route depends on current Vatican access conditions.",
    whatToBringText:
      "Bring valid ID, comfortable shoes, and dress in line with church entry requirements.",
    securityChecksText:
      "Security checks are standard at Vatican entrances, so short queues are normal.",
  },
  audience: [
    {
      title: "First-Time Visitors to Rome",
      description: "Great for first-time visitors who want the Vatican essentials explained clearly in one private route.",
    },
    {
      title: "Art and History Enthusiasts",
      description: "Ideal for travelers who want deeper context on Renaissance and papal masterpieces.",
    },
    {
      title: "Couples and Private Travelers",
      description: "A private format with flexible pacing and quieter moments inside major sites.",
    },
    {
      title: "Religious Pilgrims",
      description: "A respectful itinerary that balances spiritual significance and historical insight.",
    },
  ],
  upgrades: [
    {
      title: "Early Entrance Planning",
      description: "When possible, we aim for calmer entry windows so key areas feel less crowded.",
    },
    {
      title: "Extended Vatican Session",
      description: "Add extra time for deeper gallery coverage or a stronger focus on specific themes.",
    },
    {
      title: "Dome Climb Coordination",
      description: "Include St. Peter's Dome timing when conditions and schedule allow.",
    },
    {
      title: "Private Driver Coordination",
      description: "Add easy transfers before or after the tour for extra comfort.",
    },
  ],
  testimonial: {
    quote:
      "Our private Vatican tour with Elisa was the best way to see the museums and Basilica. She was extremely knowledgeable and kept us comfortable throughout.",
    name: "Liz S",
    context: "Tripadvisor review, Aug 2017",
  },
  faq: [
    {
      question: "Are skip-the-line Vatican tickets included in this private tour?",
      answer:
        "Ticket planning is handled during confirmation based on your preferred date and timing. We guide you to the best access option for your day.",
    },
    {
      question: "Does the tour include St. Peter's Basilica?",
      answer:
        "Yes, when basilica access is open and available. Entry flow can vary due to Vatican ceremonies or security controls.",
    },
    {
      question: "Is this Vatican tour suitable for children?",
      answer:
        "Yes. As a private tour, we adapt pacing and commentary style to keep younger travelers engaged without rushing adults.",
    },
    {
      question: "How much walking is required inside the Vatican Museums?",
      answer:
        "Expect moderate walking with extended indoor passages. We adjust stops and pacing based on your group's comfort.",
    },
    {
      question: "Can we customize the Vatican itinerary around specific artworks?",
      answer:
        "Absolutely. We can prioritize specific galleries, artists, or spiritual highlights based on your interests.",
    },
  ],
  relatedTours: [
    {
      title: "Ancient Rome Private Tour",
      description: "Colosseum, Roman Forum, and Palatine Hill with private pacing and clear storytelling.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Christian Rome Private Tour",
      description: "Catacombs and Major Churches for guests focused on faith and heritage.",
      href: "/tours/christian-rome",
    },
    {
      title: "Rome Family-Friendly Tour",
      description: "Flexible pacing and engaging narratives designed for families with children.",
      href: "/tours/family-friendly",
    },
    {
      title: "Day Trips from Rome",
      description: "Private full-day escapes from Rome with comfortable transport and flexible pacing.",
      href: "/tours/day-trips-from-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Private Vatican Experience",
    description:
      "Share your travel dates and interests, and we'll build a private Vatican plan that fits your pace, priorities, and entry timing.",
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
    title: vaticanTourData.seoTitle,
    description: vaticanTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: vaticanTourData.path,
    },
    openGraph: {
      title: vaticanTourData.seoTitle,
      description: vaticanTourData.seoDescription,
      url: vaticanTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/vatican/hero-vatican-private-tour-san-pietro-sunset-final.webp",
          alt: "St. Peter's Basilica facade at sunset in Vatican City",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: vaticanTourData.seoTitle,
      description: vaticanTourData.seoDescription,
      images: ["/images/tours/vatican/hero-vatican-private-tour-san-pietro-sunset-final.webp"],
    },
  };
}

export default function VaticanTourPage() {
  return <TourTemplatePage data={vaticanTourData} />;
}
