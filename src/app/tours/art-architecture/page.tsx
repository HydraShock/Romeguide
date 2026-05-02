import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://www.pexels.com/photo/pantheon-dome-interior-in-rome-16703729/
// overview: https://www.pexels.com/photo/close-up-photo-of-a-statue-2676582/
// highlight-1: https://www.pexels.com/photo/detail-of-baroque-fountain-sculpture-in-rome-35581642/
// highlight-2: https://www.pexels.com/photo/classical-renaissance-sculpture-in-rome-27926491/
// highlight-3: https://unsplash.com/photos/dgwQteZhci4
// highlight-4: https://www.pexels.com/photo/trevi-fountain-sculpture-detail-in-rome-29941014/
const artArchitectureTourData: TourPageData = {
  slug: "rome-art-architecture-private-tour",
  path: "/tours/art-architecture",
  seoTitle:
    "Rome Art & Architecture Private Tour | Galleries, Churches & Masterpieces | Rome Guide Services",
  seoDescription:
    "Admire Rome's galleries, churches, and architectural landmarks with a licensed private guide. Tailor-made art and architecture touring at your pace.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE GUIDED TOUR",
    title: "Rome Art and Architecture Tour",
    landmarksLine: "Vatican Museums | Borghese Gallery | Capitoline Context",
    subtitle:
      "Immerse yourself in Rome's artistic and architectural legacy with a private guide who connects masterpieces, patrons, and city design in one coherent route.",
    intentLine: "Private cultural storytelling from Renaissance to Baroque Rome.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Custom Itinerary",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/image%20(15).png",
    imageAlt: "Coffered dome interior of the Pantheon in Rome",
    quickFacts: ["3 to 4 hours", "Private only", "Licensed guide", "Curated museum flow"],
    microTags: ["Art enthusiasts", "Architecture students", "Couples"],
  },
  facts: [
    { label: "Duration", value: "3 to 4 hours" },
    { label: "Format", value: "Private only" },
    { label: "Guide", value: "Licensed guide" },
    { label: "Focus", value: "Art and architecture" },
    { label: "Access", value: "Entry planning support" },
    { label: "Pacing", value: "Tailor-made rhythm" },
  ],
  overview: {
    title: "Masterpieces in Their Urban Context",
    intro:
      "This tour goes beyond isolated artworks. Your guide shows how sculpture, painting, and architecture shaped each other across Rome's religious and civic spaces.",
    body:
      "From museum collections to church interiors and urban viewpoints, the route is built around your interests, whether technical, historical, or purely aesthetic. Expect depth without overload.",
    imageSrc: "/images/tours/art-architecture/overview-rome-art-architecture-tour-marble-sculpture.webp",
    imageAlt: "Marble sculpture detail in Rome showing fine craftsmanship",
  },
  highlights: [
    {
      title: "Masterpiece Collections with Clear Context",
      description:
        "Understand major works through patronage, style evolution, and artistic intent rather than disconnected labels.",
      imageSrc: "/images/tours/art-architecture/highlight-rome-art-architecture-tour-baroque-sculpture.webp",
      imageAlt: "Baroque fountain sculpture detail in historic Rome",
    },
    {
      title: "Architectural Wonders, Read in Layers",
      description:
        "Decode facades, domes, and spatial design from antiquity through Baroque transformation.",
      imageSrc: "/images/tours/art-architecture/highlight-rome-art-architecture-tour-renaissance-statue.webp",
      imageAlt: "Classical Renaissance statue in a Roman architectural setting",
    },
    {
      title: "Church Interiors and Artistic Patronage",
      description:
        "Trace how theology, politics, and private commissions shaped Rome's most compelling interiors.",
      imageSrc: "/images/tours/art-architecture/highlight-rome-art-architecture-tour-ornate-interior.webp",
      imageAlt: "Ornate church interior with frescoes and rich architectural details",
    },
    {
      title: "Hidden Gems Beyond Standard Circuits",
      description:
        "Include quieter high-value spaces for travelers seeking a more curated cultural perspective.",
      imageSrc: "/images/tours/art-architecture/highlight-rome-art-architecture-tour-trevi-detail.webp",
      imageAlt: "Trevi Fountain sculptural detail highlighting Roman craftsmanship",
    },
  ],
  itinerary: [
    {
      title: "Meeting and Curatorial Brief",
      description:
        "Meet your guide and define thematic priorities, from sculpture and painting to architecture.",
    },
    {
      title: "Primary Collection Focus",
      description:
        "Explore selected galleries or major interior spaces with high-context commentary.",
    },
    {
      title: "Architectural Reading Walk",
      description:
        "Move through nearby streets and facades to connect building design with artistic trends.",
    },
    {
      title: "Second Cultural Anchor",
      description:
        "Add a complementary church, museum, or viewpoint based on your chosen thematic arc.",
    },
    {
      title: "And Much More...",
      description:
        "This is a private custom tour, so there is always much more to see and we can add extra stops based on your interests.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Entry requirements vary by museum or church. Reservation strategy is confirmed during planning.",
    meetingPointText:
      "Meeting location depends on the selected first venue and is shared after confirmation.",
    walkingLevelText:
      "Moderate walking with museum corridors, stair variations, and periodic standing.",
    accessibilityNotes:
      "Accessibility depends on venue infrastructure. Route alternatives can be prepared when possible.",
    whatToBringText:
      "Bring valid ID, comfortable footwear, and any pre-booked ticket confirmations if requested.",
    securityChecksText:
      "Security checks may apply at museum and church entrances, especially in peak periods.",
  },
  audience: [
    {
      title: "Art Enthusiasts and Collectors",
      description: "Ideal for guests wanting stronger context around major works and curatorial choices.",
    },
    {
      title: "Architecture Students and Designers",
      description: "A focused route for those interested in structural language and urban composition.",
    },
    {
      title: "Photographers and Visual Creatives",
      description: "Includes perspective-rich spots and interpretive framing for visual storytelling.",
    },
    {
      title: "Couples Seeking Cultural Depth",
      description: "A refined private pace suited to travelers who value atmosphere and detail.",
    },
  ],
  upgrades: [
    {
      title: "Borghese Reservation Coordination",
      description: "Add reservation support and timing strategy for one of Rome's key collections.",
    },
    {
      title: "Extended Architecture Session",
      description: "Add more urban reading time for facades, piazzas, and layered city planning.",
    },
    {
      title: "Private Driver Coordination",
      description: "Optimize transitions between venues while preserving a relaxed premium pace.",
    },
    {
      title: "Specialist Focus Add-On",
      description: "Request deeper emphasis on a period, artist, or architectural movement.",
    },
  ],
  testimonial: {
    quote:
      "This felt like a private masterclass, not a standard tour. We finally understood how Rome's architecture and art speak to each other.",
    name: "Daniel S",
    context: "Art and architecture private tour guest",
  },
  faq: [
    {
      question: "Which museums or galleries can be included in this art and architecture tour?",
      answer:
        "The route is customized around your interests and availability, with optional museum and church combinations.",
    },
    {
      question: "Are entry tickets included for galleries and museums?",
      answer:
        "Ticket strategy depends on selected venues. We provide planning support during confirmation.",
    },
    {
      question: "Can the tour focus more on architecture than artworks?",
      answer:
        "Yes. We can shape the itinerary toward urban design, facades, domes, and structural evolution.",
    },
    {
      question: "Is this private cultural tour suitable for students?",
      answer:
        "Absolutely. It is especially useful for students and researchers wanting contextual explanations.",
    },
    {
      question: "How much walking is expected on this route?",
      answer:
        "Expect moderate walking with standing periods in cultural venues and between stops.",
    },
  ],
  relatedTours: [
    {
      title: "Ancient Rome Private Tour",
      description: "Archaeological storytelling across Colosseum, Forum, and Palatine Hill.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Private Vatican Tour",
      description: "A private Vatican route centered on museums and the Sistine Chapel.",
      href: "/tours/vatican",
    },
    {
      title: "Rome Private Walking Tour",
      description: "City-center highlights with flexible pacing and local context.",
      href: "/tours/walking-tours",
    },
    {
      title: "Day Trips from Rome",
      description: "Private full-day routes from Rome blending heritage destinations with chauffeur comfort.",
      href: "/tours/day-trips-from-rome",
    },
  ],
  finalCta: {
    title: "Plan Your Art and Architecture Experience in Rome",
    description:
      "Share your artistic interests and travel dates. We will curate a private route aligned with your pace and cultural priorities.",
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
    title: artArchitectureTourData.seoTitle,
    description: artArchitectureTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: artArchitectureTourData.path,
    },
    openGraph: {
      title: artArchitectureTourData.seoTitle,
      description: artArchitectureTourData.seoDescription,
      url: artArchitectureTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/image%20(15).png",
          alt: "Rome architecture and cultural details for a private art tour",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: artArchitectureTourData.seoTitle,
      description: artArchitectureTourData.seoDescription,
      images: ["/image%20(15).png"],
    },
  };
}

export default function ArtArchitectureTourPage() {
  return <TourTemplatePage data={artArchitectureTourData} />;
}
