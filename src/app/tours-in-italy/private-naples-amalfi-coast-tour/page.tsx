import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://commons.wikimedia.org/wiki/File:Positano_Sunset.JPG
// overview: https://commons.wikimedia.org/wiki/File:Evening_view_on_the_bay_of_Naples,_overlooking_Mount_Vesuvius.jpg
// highlight-1: https://www.pexels.com/photo/church-tower-and-sea-view-in-naples-32878039/
// highlight-2: https://www.pexels.com/photo/aerial-view-of-naples-and-mount-vesuvius-35979501/
// highlight-3: https://www.pexels.com/photo/sunset-over-seashore-in-sorrento-6992021/
// highlight-4: https://www.pexels.com/photo/landscape-photo-of-positano-27025488/
const privateNaplesAmalfiCoastTourData: TourPageData = {
  slug: "private-naples-amalfi-coast-tour",
  path: "/tours-in-italy/private-naples-amalfi-coast-tour",
  seoTitle:
    "Private Naples & Amalfi Coast Tour | Luxury Southern Italy Experience | Rome Guide Services",
  seoDescription:
    "Discover Naples and the Amalfi Coast through a private curated experience shaped around coastal beauty, urban character, elegant pacing, and tailor-made southern Italy touring.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE TOUR IN ITALY",
    title: "Private Naples & Amalfi Coast Tour",
    landmarksLine: "NAPLES \u2022 AMALFI COAST \u2022 SOUTHERN ITALY ATMOSPHERE",
    subtitle:
      "Discover Naples and the Amalfi Coast through a private curated experience shaped around coastal beauty, historic character, Mediterranean light, and the flexibility to move at the right pace.",
    intentLine:
      "From Naples' layered identity to the elegance of the coast, this private route is designed for travelers who want southern Italy to feel refined, atmospheric, and intelligently paced.",
    primaryCtaLabel: "Plan This Tour",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours-in-italy/naples-amalfi/hero-private-naples-amalfi-coast-tour.jpg",
    imageAlt: "Positano and the Amalfi Coast glowing in warm sunset light",
    quickFacts: [
      "Private only",
      "Tailor-made pacing",
      "Driver-led route available",
      "Scenic and cultural focus",
    ],
    microTags: [
      "Couples",
      "Coastal route lovers",
      "Returning Italy travelers",
      "Guests seeking southern Italy elegance",
    ],
  },
  facts: [
    { label: "Duration", value: "Full day / Multi-stop / Tailor-made" },
    { label: "Format", value: "Private coastal experience" },
    { label: "Focus", value: "Naples + Amalfi Coast" },
    { label: "Route Style", value: "Scenic and cultural" },
    { label: "Best For", value: "Southern Italy, views, atmosphere, architecture" },
    { label: "Flexibility", value: "Tailor-made pacing" },
  ],
  overview: {
    eyebrow: "WHY THIS TOUR",
    title: "Southern Italy at Its Most Atmospheric, Without the Rush",
    intro:
      "Naples and the Amalfi Coast are often experienced too quickly or through generic checklists. In a private format, their contrast becomes the strength of the journey: Naples' layered energy and the coast's luminous elegance in one coherent route.",
    body:
      "This experience is designed around pace, scenic rhythm, and selective focus rather than speed. You move through southern Italy with room for context, atmosphere, and comfort, adapting stop priorities to what matters most to you. It is not mass-tour logic or one-day sprint planning. It is a refined private approach that makes both city character and coastal beauty more memorable.",
    imageSrc:
      "/images/tours-in-italy/naples-amalfi/overview-naples-bay-private-coastal-tour.jpg",
    imageAlt: "Naples Bay and Mount Vesuvius in cinematic evening atmosphere",
  },
  highlights: [
    {
      title: "Naples: Urban Character, History, and Southern Energy",
      description:
        "Read Naples through layered streets, architecture, and civic texture that reveal one of Italy's most vivid urban identities.",
      imageSrc: "/images/tours-in-italy/naples-amalfi/highlight-naples-urban-character.jpg",
      imageAlt: "Historic Naples view with warm southern light and coastal depth",
    },
    {
      title: "Amalfi Coast: Mediterranean Light, Cliffs, and Elegant Scenery",
      description:
        "Move through iconic coastline perspectives where architecture, cliffs, and sea light create unmistakable southern atmosphere.",
      imageSrc: "/images/tours-in-italy/naples-amalfi/highlight-amalfi-coast-scenery.jpg",
      imageAlt: "Aerial southern Italy coastline with warm sea and city layers",
    },
    {
      title: "Scenic Movement Between Places, Not Just Checkpoints",
      description:
        "The route is curated as a visual experience in motion, with transitions that feel intentional, graceful, and unrushed.",
      imageSrc: "/images/tours-in-italy/naples-amalfi/highlight-scenic-movement-route.jpg",
      imageAlt: "Mediterranean sunset over the southern Italy coast",
    },
    {
      title: "A Private Route Shaped Around Beauty, Pace, and Experience",
      description:
        "Private planning allows priorities, tempo, and emphasis to adapt to your style rather than fixed group-tour timing.",
      imageSrc:
        "/images/tours-in-italy/naples-amalfi/highlight-private-route-southern-italy.jpg",
      imageAlt: "Positano hillside architecture and sea in refined coastal light",
    },
  ],
  itinerary: [
    {
      title: "Arrival Into the Southern Italy Atmosphere",
      description:
        "Begin by framing the experience through the contrast between Naples and the coast, with route flow tailored to your pace.",
    },
    {
      title: "Naples as the Cultural Anchor",
      description:
        "Explore Naples through layered history, urban identity, and architectural character with focused private context.",
    },
    {
      title: "The Amalfi Coast Through Scenic Rhythm",
      description:
        "Follow a coastline segment designed around beauty, perspective, and selected stops rather than rushed coverage.",
    },
    {
      title: "Tailored Priorities Along the Route",
      description:
        "Adapt the route around your interests, whether scenic emphasis, architecture, food moments, or slower exploration.",
    },
    {
      title: "A Private Experience Built Around Your Style",
      description:
        "Conclude with a coherent private journey shaped around comfort, flexibility, and the kind of southern Italy experience you want.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Any optional site access is planned during confirmation so timing stays coherent with your preferred route style.",
    meetingPointText:
      "Start points are coordinated according to your southern Italy base and private route design.",
    walkingLevelText:
      "Walking is typically moderate, with pacing tailored to your group and selected stop mix.",
    accessibilityNotes:
      "We can adapt sequence where possible, though some historic centers and coastal settings include steps or uneven surfaces.",
    whatToBringText:
      "Comfortable shoes, sun protection, and light layers are recommended for mixed city and coastal conditions.",
    securityChecksText:
      "Major sites may apply standard entry controls based on season and local operations.",
  },
  audience: [
    {
      title: "Couples Seeking a More Beautiful Southern Italy Experience",
      description:
        "Ideal for travelers who want atmosphere, scenic depth, and private rhythm over checklist speed.",
    },
    {
      title: "Travelers Wanting Naples and the Coast in One Refined Route",
      description:
        "A strong fit for guests who want urban character and coastal elegance in one curated journey.",
    },
    {
      title: "Returning Italy Visitors Looking for More Atmosphere",
      description:
        "Perfect for travelers ready for a more layered and destination-led private experience.",
    },
    {
      title: "Guests Who Prefer Private Pacing Over Standard Group Touring",
      description:
        "Designed for visitors who value comfort, flexibility, and intelligent route logic.",
    },
  ],
  upgrades: [
    {
      title: "Scenic Coastal Extension",
      description:
        "Expand the coastal segment with additional viewpoints when timing and conditions align.",
    },
    {
      title: "Gourmet Lunch Reservation Support",
      description:
        "Receive concierge assistance for a well-positioned lunch stop along your route.",
    },
    {
      title: "Private Driver Upgrade / Premium Vehicle",
      description:
        "Enhance comfort and style with an upgraded vehicle class for the full experience.",
    },
    {
      title: "Optional Pompeii Add-On",
      description:
        "Add Pompeii only when desired, framed as a selective extension rather than the core route.",
    },
    {
      title: "Sunset-Timed Route Adjustment",
      description:
        "When feasible, align the sequence to capture the coast in warm late-day light.",
    },
  ],
  testimonial: {
    quote:
      "The route felt beautifully balanced. Naples had depth and character, the coast was extraordinary, and the private pacing made the entire day feel elegant rather than overwhelming.",
    name: "Claire M",
    context: "Private Naples & Amalfi Coast guest",
  },
  faq: [
    {
      question: "Is this a private Naples and Amalfi Coast experience?",
      answer:
        "Yes. This is a fully private experience designed around your priorities, pace, and route style.",
    },
    {
      question: "Can the route be customized?",
      answer:
        "Absolutely. Stop emphasis, timing, and route flow are adapted to your interests and travel rhythm.",
    },
    {
      question: "Is this different from a day trip from Rome?",
      answer:
        "Yes. This page is destination-led for Naples and the Amalfi Coast, not built around Rome departure logistics.",
    },
    {
      question: "Can Pompeii be added if requested?",
      answer:
        "Yes. Pompeii can be added as an optional extension when it aligns with your preferred route and pace.",
    },
    {
      question: "Is private transport part of the experience?",
      answer:
        "Yes. Private transport can be integrated as a core part of the route design.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Walking is usually moderate, depending on selected stops, with pacing adapted to your group.",
    },
    {
      question: "Is this suitable for couples or slower-paced travelers?",
      answer:
        "Yes. The experience is especially well suited to guests who value a refined, less rushed pace.",
    },
  ],
  relatedTours: [
    {
      title: "Private Sicily Tours",
      description:
        "Continue south with a tailor-made regional Sicily journey focused on culture, scenery, and private planning.",
      href: "/tours-in-italy/private-sicily-tours",
    },
    {
      title: "Private Florence & Tuscany Tour",
      description:
        "Pair southern coastal atmosphere with a Florence-first Renaissance experience and Tuscan extension options.",
      href: "/tours-in-italy/private-florence-tuscany-tour",
    },
    {
      title: "Private Venice Tour",
      description:
        "Balance Mediterranean coastal rhythm with a private Venice city route centered on atmosphere and canals.",
      href: "/tours-in-italy/private-venice-tour",
    },
    {
      title: "Private Day Trips from Rome",
      description:
        "Compare destination-based touring with curated private day escapes departing from Rome.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Private Pompeii, Amalfi & Naples Day Trip from Rome",
      description:
        "Need a Rome-departure full-day format instead? Explore the dedicated day-trip version with from-Rome logistics.",
      href: "/tours/day-trips-from-rome/pompeii-amalfi-naples",
    },
  ],
  finalCta: {
    title: "Plan Your Private Naples & Amalfi Coast Experience",
    description:
      "Share your dates, interests, and priorities, and we will shape a private southern Italy route with the right balance of coastal beauty, urban character, and elegant pacing.",
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
    title: privateNaplesAmalfiCoastTourData.seoTitle,
    description: privateNaplesAmalfiCoastTourData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: privateNaplesAmalfiCoastTourData.path,
    },
    openGraph: {
      title: privateNaplesAmalfiCoastTourData.seoTitle,
      description: privateNaplesAmalfiCoastTourData.seoDescription,
      url: privateNaplesAmalfiCoastTourData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours-in-italy/naples-amalfi/hero-private-naples-amalfi-coast-tour.jpg",
          alt: "Amalfi Coast in warm cinematic sunset light",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: privateNaplesAmalfiCoastTourData.seoTitle,
      description: privateNaplesAmalfiCoastTourData.seoDescription,
      images: ["/images/tours-in-italy/naples-amalfi/hero-private-naples-amalfi-coast-tour.jpg"],
    },
  };
}

export default function PrivateNaplesAmalfiCoastTourPage() {
  return <TourTemplatePage data={privateNaplesAmalfiCoastTourData} />;
}
