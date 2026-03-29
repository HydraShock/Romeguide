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
    "Explore the Vatican Museums, Sistine Chapel, and St. Peter's Basilica with a licensed private guide. Personalized Vatican City touring at your pace.",
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
      "Explore Vatican City with a licensed private guide who connects art, history, and faith through a route tailored to your interests and pace.",
    intentLine: "Private, guest-paced storytelling through the Vatican's most iconic spaces.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Itinerary",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/image%20(19).png",
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
    title: "Where Faith, Art, and Power Meet",
    intro:
      "This is not a rushed museum pass. Your guide weaves together papal history, Renaissance art, and the spiritual meaning behind each space.",
    body:
      "From the Vatican Museums to the Sistine Chapel and St. Peter's Basilica, the route is paced around your interests and energy. Ideal for guests who want both depth and comfort in one private experience.",
    imageSrc: "/images/tours/vatican/overview-vatican-tour-st-peters-river-view.webp",
    imageAlt: "St. Peter's Basilica dome viewed across the Tiber in warm evening light",
  },
  highlights: [
    {
      title: "Vatican Museums Without Guesswork",
      description:
        "Follow a curated route through key galleries with clear storytelling, so major works are understood in context instead of seen in passing.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-basilica-interior.webp",
      imageAlt: "Ornate interior details inside St. Peter's Basilica in Vatican City",
    },
    {
      title: "Sistine Chapel Context and Meaning",
      description:
        "Arrive prepared with the historical and artistic context needed to fully appreciate Michelangelo's ceiling and altar wall.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-baldachin-detail.webp",
      imageAlt: "Golden baldachin and monumental columns inside St. Peter's Basilica",
    },
    {
      title: "St. Peter's Basilica, Read as a Story",
      description:
        "Discover Bernini, Michelangelo, and papal symbolism with explanations tailored to your interests and travel style.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-st-peters-square-night.webp",
      imageAlt: "Apostolic Palace and colonnade at St. Peter's Square in Vatican City",
    },
    {
      title: "A Calm Private Flow Through Crowded Sites",
      description:
        "Enjoy smoother timing, fewer bottlenecks, and a route shaped around your pace for a more refined Vatican experience.",
      imageSrc: "/images/tours/vatican/highlight-vatican-tour-colonnade-fountain.webp",
      imageAlt: "Fountain and colonnade composition in St. Peter's Square",
    },
  ],
  itinerary: [
    {
      title: "Meeting and Entry Strategy (15 min)",
      description:
        "Meet your guide, review preferences, and align entry timing before starting the Vatican route.",
    },
    {
      title: "Vatican Museums Galleries (1h 45m)",
      description:
        "Explore major galleries and high-value sections with focused commentary and efficient transitions.",
    },
    {
      title: "Sistine Chapel Visit (30m)",
      description:
        "Visit the chapel with clear narrative framing on iconography, patronage, and artistic innovation.",
    },
    {
      title: "St. Peter's Basilica (45m)",
      description:
        "Continue into the basilica to understand its architecture, liturgical role, and key masterpieces.",
    },
    {
      title: "Closing Recommendations (15 min)",
      description:
        "Receive tailored suggestions for nearby viewpoints, meals, or follow-up cultural stops.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Vatican access is planned during confirmation. Availability and entry windows can vary by date and season.",
    meetingPointText:
      "Meeting details are shared after booking confirmation near Vatican Museums entry points.",
    walkingLevelText:
      "Moderate walking with museum corridors, standing periods, and controlled pacing.",
    accessibilityNotes:
      "Accessible routing can be arranged where available. Final route depends on current Vatican access conditions.",
    whatToBringText:
      "Bring valid ID, comfortable shoes, and dress in line with church entry requirements.",
    securityChecksText:
      "Security checks are standard at Vatican entrances, so slight queue times should be expected.",
  },
  audience: [
    {
      title: "First-Time Visitors to Rome",
      description: "Perfect for guests who want Vatican essentials explained clearly in one private route.",
    },
    {
      title: "Art and History Enthusiasts",
      description: "Ideal for travelers seeking richer context on Renaissance and papal masterpieces.",
    },
    {
      title: "Couples and Private Travelers",
      description: "A refined format with flexible pacing and quieter moments inside major sites.",
    },
    {
      title: "Religious Pilgrims",
      description: "A respectful itinerary balancing devotional significance and historical insight.",
    },
  ],
  upgrades: [
    {
      title: "Early Entrance Planning",
      description: "Prioritize calmer entry windows to experience key areas before peak crowd density.",
    },
    {
      title: "Extended Vatican Session",
      description: "Add extra time for deeper gallery coverage or focused art-historical themes.",
    },
    {
      title: "Dome Climb Coordination",
      description: "Include St. Peter's Dome timing when conditions and schedule allow.",
    },
    {
      title: "Private Driver Coordination",
      description: "Add seamless transfers before or after the tour for maximum comfort.",
    },
  ],
  testimonial: {
    quote:
      "Our guide made the Vatican feel personal and understandable. We moved smoothly, avoided stress, and finally understood what we were seeing.",
    name: "Maria R",
    context: "Vatican private tour guest",
  },
  faq: [
    {
      question: "Are skip-the-line Vatican tickets included in this private tour?",
      answer:
        "Ticket planning is handled during confirmation based on your preferred date and timing. We guide you to the most suitable access option.",
    },
    {
      question: "Does the tour include St. Peter's Basilica?",
      answer:
        "Yes, when basilica access is open and operational. Entry flow can vary due to Vatican ceremonies or security controls.",
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
        "Absolutely. We can prioritize selected galleries, artists, or devotional points based on your interests.",
    },
  ],
  relatedTours: [
    {
      title: "Ancient Rome Private Tour",
      description: "Colosseum, Roman Forum, and Palatine Hill in a private story-led route.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Christian Rome Private Tour",
      description: "Catacombs and papal basilicas for guests focused on faith and heritage.",
      href: "/tours/christian-rome",
    },
    {
      title: "Rome Family-Friendly Tour",
      description: "Flexible pacing and engaging narratives designed for families with children.",
      href: "/tours/family-friendly",
    },
    {
      title: "Day Trips from Rome",
      description: "Private full-day escapes from Rome with chauffeur support and curated logistics.",
      href: "/tours/day-trips-from-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Private Vatican Experience",
    description:
      "Share your travel dates and interests. We will build a private Vatican itinerary aligned with your pace, priorities, and entry timing.",
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
          url: "/image%20(19).png",
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
      images: ["/image%20(19).png"],
    },
  };
}

export default function VaticanTourPage() {
  return <TourTemplatePage data={vaticanTourData} />;
}
