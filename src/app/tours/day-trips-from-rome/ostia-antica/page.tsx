import type { Metadata } from "next";
import TourTemplatePage from "@/components/tour-template/tour-template-page";
import type { TourPageData } from "@/components/tour-template/types";

// Stock image sources:
// hero: https://pixabay.com/photos/italy-ostia-antica-ruins-1314573/
// overview: https://pixabay.com/photos/monument-ostia-antica-italy-4918654/
// highlight-1: https://pixabay.com/photos/monument-ostia-antica-italy-4918654/
// highlight-2: https://pixabay.com/photos/italy-ostia-antica-ruins-1314573/
// highlight-3: https://www.pexels.com/photo/ancient-columns-and-arches-36399044/
// highlight-4: https://pixabay.com/photos/ostia-antica-love-rome-domus-2660869/
const ostiaAnticaDayTripData: TourPageData = {
  slug: "ostia-antica-day-trip-from-rome",
  path: "/tours/day-trips-from-rome/ostia-antica",
  seoTitle:
    "Private Ostia Antica Day Trip from Rome | Ancient Port of Rome | Rome Guide Services",
  seoDescription:
    "Discover Ostia Antica on a private day trip from Rome with tailored pacing, private transport, and a refined archaeological itinerary through the ancient port of Rome.",
  lightSectionsTheme: "tivoliUnified",
  mergeRelatedAndFinalCta: true,
  overviewTheme: "darkbiancoSoft",
  timelineTheme: "sfondosez",
  audienceTheme: "sfondo3",
  upgradesTheme: "homeDarkbronzo",
  hero: {
    eyebrow: "PRIVATE DAY TRIP FROM ROME",
    title: "Private Ostia Antica Day Trip from Rome",
    landmarksLine: "OSTIA ANTICA \u2022 ANCIENT PORT OF ROME",
    subtitle:
      "Leave the center of Rome behind for a private journey through Ostia Antica, the remarkably preserved ancient port where streets, baths, houses, and public spaces reveal everyday Roman life in extraordinary detail.",
    intentLine:
      "A quieter archaeological experience with curated pacing, private transport, and room to understand the Roman world beyond its monumental center.",
    primaryCtaLabel: "Plan This Day Trip",
    secondaryCtaLabel: "Ask for a Tailor-Made Version",
    primaryCtaHref: "#final-cta",
    secondaryCtaHref: "#final-cta",
    imageSrc: "/images/tours/day-trips/ostia-antica/hero-private-ostia-antica-day-trip-from-rome-warm-ruins.jpg",
    imageAlt: "Warm archaeological ruins and umbrella pines in Ostia Antica",
    quickFacts: ["Half day or full day", "Private only", "Driver included", "Guide on request"],
    microTags: [
      "Archaeology lovers",
      "Returning Rome visitors",
      "Families with older children",
      "Travelers wanting fewer crowds",
    ],
  },
  facts: [
    { label: "Duration", value: "Half day or full day" },
    { label: "Departure", value: "From Rome" },
    { label: "Format", value: "Private day trip" },
    { label: "Driver", value: "Included" },
    { label: "Guide", value: "On request" },
    { label: "Main Stops", value: "Ostia Antica archaeological site" },
  ],
  overview: {
    eyebrow: "WHY THIS DAY TRIP",
    title: "Ancient Rome, Seen Through Daily Life Rather Than Monumental Scale",
    intro:
      "Ostia Antica offers a more spacious and less crowded archaeological setting than central Rome, making it a highly rewarding private escape for curious travelers.",
    body:
      "As the ancient port of Rome, Ostia reveals how people lived, traded, bathed, worshipped, and moved through a functioning Roman city. Houses, streets, baths, shops, and public spaces create rich urban texture at a calmer pace. It is an elegant complement to Colosseum and Forum touring, or an alternative for guests seeking substance without intensity.",
    imageSrc: "/images/tours/day-trips/ostia-antica/overview-private-ostia-antica-port-gateway.jpg",
    imageAlt: "Brick streets and arches in the archaeological city of Ostia Antica",
  },
  highlights: [
    {
      title: "The Ancient Port: Rome's Commercial Gateway to the Mediterranean",
      description:
        "Understand Ostia's strategic role in feeding and supplying imperial Rome through a city built for movement, storage, and exchange.",
      imageSrc: "/images/tours/day-trips/ostia-antica/overview-private-ostia-antica-port-gateway.jpg",
      imageAlt: "Ancient brick corridor and port-city ruins at Ostia Antica",
    },
    {
      title: "Streets, Houses, Baths, and Shops: Daily Life Preserved in Stone",
      description:
        "Read Roman daily life through residential blocks, commercial spaces, and civic structures that remain legible at a human scale.",
      imageSrc: "/images/tours/day-trips/ostia-antica/hero-private-ostia-antica-day-trip-from-rome-warm-ruins.jpg",
      imageAlt: "Warm stone ruins and urban remains in Ostia Antica",
    },
    {
      title: "A Quieter Archaeological Experience Beyond the City Center",
      description:
        "Walk through major ancient remains with less crowd pressure and more room for context, pacing, and meaningful observation.",
      imageSrc: "/images/tours/day-trips/ostia-antica/highlight-ostia-columns-and-arches.jpg",
      imageAlt: "Ancient columns and pines in Ostia Antica archaeological park",
    },
    {
      title: "One Private Route Through the Roman World at a More Human Scale",
      description:
        "Private transport and tailored timing turn a complex site into a calm, coherent archaeological journey from Rome.",
      imageSrc: "/images/tours/day-trips/ostia-antica/highlight-ostia-antica-sculptural-detail.jpg",
      imageAlt: "Classical sculptural detail connected to Ostia Antica heritage",
    },
  ],
  itinerary: [
    {
      title: "Departure from Rome",
      description:
        "Begin with private pickup and a smooth transfer from Rome to Ostia Antica.",
    },
    {
      title: "Entering the Ancient Port",
      description:
        "Start with an introduction to the role of Ostia as Rome's maritime and commercial gateway.",
    },
    {
      title: "Streets, Public Spaces, and Everyday Urban Life",
      description:
        "Explore roads, baths, apartment blocks, shops, and public structures that reveal how people lived and worked.",
    },
    {
      title: "Key Monuments and Interpretive Highlights",
      description:
        "Move through the theatre, forum area, and other major points of interest with an emphasis on clarity and context.",
    },
    {
      title: "Return to Rome",
      description:
        "Conclude with a private return to Rome after a calmer, more spacious archaeological experience.",
    },
  ],
  practicalInfo: {
    ticketsText:
      "Entry planning is coordinated during confirmation so the schedule fits your preferred half-day or full-day pacing.",
    meetingPointText:
      "Hotel pickup in Rome or an agreed central meeting point is included and confirmed in advance.",
    walkingLevelText:
      "Walking is generally moderate on archaeological surfaces, with route rhythm adapted to your group.",
    accessibilityNotes:
      "Some site areas include uneven stone surfaces. We adapt stop order and pacing where possible.",
    whatToBringText:
      "Bring comfortable shoes, water, and weather-appropriate layers for open-air archaeological exploration.",
    securityChecksText:
      "Standard site controls and ticket checks may apply depending on season and operations.",
  },
  audience: [
    {
      title: "Travelers Seeking a Quieter Alternative to Central Rome",
      description:
        "Ideal for guests who want ancient depth without the intensity and crowd density of major city monuments.",
    },
    {
      title: "Archaeology Lovers Wanting More Depth",
      description:
        "Perfect for travelers interested in urban infrastructure, trade systems, and daily Roman life in context.",
    },
    {
      title: "Returning Visitors to Rome",
      description:
        "A strong next step for guests who have seen Colosseum and Forum and want a different archaeological lens.",
    },
    {
      title: "Families with Older Children and Curious Teens",
      description:
        "The route can be paced for engagement and learning while maintaining comfort and manageable logistics.",
    },
  ],
  upgrades: [
    {
      title: "Private Licensed Archaeology Guide",
      description:
        "Add specialist interpretation for deeper insight into Ostia's layout, symbolism, and historical evolution.",
    },
    {
      title: "Extended Route with Additional Historical Context",
      description:
        "Increase site depth with additional sectors and a broader interpretive narrative when timing allows.",
    },
    {
      title: "Ostia + Cerveteri Combination Option",
      description:
        "Combine Roman and Etruscan perspectives in one private archaeological day when requested in advance.",
    },
    {
      title: "Premium Vehicle Upgrade",
      description:
        "Elevate transfer comfort with a higher-class private vehicle for a more refined day-trip profile.",
    },
  ],
  testimonial: {
    quote:
      "Ostia Antica was one of the most rewarding days of our trip. It felt spacious, deeply atmospheric, and much easier to absorb with private pacing and context.",
    name: "Daniel F",
    context: "Private Ostia Antica day trip guest",
  },
  faq: [
    {
      question: "Is this a half-day or full-day private trip from Rome?",
      answer:
        "It can be designed as either, depending on your preferred depth, timing, and energy level.",
    },
    {
      question: "Is Ostia Antica a good alternative to the Colosseum and Forum?",
      answer:
        "Yes. Ostia offers excellent archaeological substance in a calmer, more spacious environment outside the city center.",
    },
    {
      question: "Is a guide included or optional?",
      answer:
        "Guide service is optional. A private licensed archaeology guide can be added during planning.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Expect moderate walking on archaeological terrain, with pacing adapted to your group.",
    },
    {
      question: "Can this be combined with another archaeological site?",
      answer:
        "Yes, in many cases. Combination options such as Cerveteri can be discussed during itinerary design.",
    },
    {
      question: "Is hotel pickup included?",
      answer:
        "Yes. Private pickup from your Rome hotel or a central agreed point is included.",
    },
    {
      question: "Is this suitable for children or teenagers?",
      answer:
        "Yes, especially for older children and teens. We tailor narrative depth and rhythm to keep the experience engaging.",
    },
  ],
  relatedTours: [
    {
      title: "Private Day Trips from Rome",
      description: "Explore all curated private escape routes departing from Rome.",
      href: "/tours/day-trips-from-rome",
    },
    {
      title: "Ancient Rome Private Tour",
      description: "Pair Ostia's daily-life archaeology with Rome's imperial monuments.",
      href: "/tours/ancient-rome",
    },
    {
      title: "Private Tivoli Day Trip from Rome",
      description: "A refined villa-and-garden alternative with Renaissance and imperial context.",
      href: "/tours/day-trips-from-rome/tivoli",
    },
    {
      title: "Cerveteri Etruscan Day Trip from Rome",
      description: "Extend your archaeology focus with a private pre-Roman heritage route.",
      href: "/tours/day-trips-from-rome/cerveteri-etruscans",
    },
    {
      title: "Rome Private Walking Tour",
      description: "Continue with an elegant city-center route after your day beyond Rome.",
      href: "/tours/walking-tours",
    },
  ],
  finalCta: {
    title: "Plan Your Private Ostia Antica Day Trip",
    description:
      "Share your dates and preferences, and we will design a private archaeological day from Rome with the right balance of depth, pacing, and comfort.",
    buttonLabel: "Request Your Private Day Trip",
    buttonHref: "#",
    trustItems: [
      "Personalized reply within 24 hours",
      "Private transport",
      "Tailor-made pacing",
    ],
  },
};

export function generateMetadata(): Metadata {
  return {
    title: ostiaAnticaDayTripData.seoTitle,
    description: ostiaAnticaDayTripData.seoDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: ostiaAnticaDayTripData.path,
    },
    openGraph: {
      title: ostiaAnticaDayTripData.seoTitle,
      description: ostiaAnticaDayTripData.seoDescription,
      url: ostiaAnticaDayTripData.path,
      siteName: "Rome Guide Services",
      images: [
        {
          url: "/images/tours/day-trips/ostia-antica/hero-private-ostia-antica-day-trip-from-rome-warm-ruins.jpg",
          alt: "Warm archaeological ruins and umbrella pines in Ostia Antica",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ostiaAnticaDayTripData.seoTitle,
      description: ostiaAnticaDayTripData.seoDescription,
      images: ["/images/tours/day-trips/ostia-antica/hero-private-ostia-antica-day-trip-from-rome-warm-ruins.jpg"],
    },
  };
}

export default function OstiaAnticaDayTripPage() {
  return <TourTemplatePage data={ostiaAnticaDayTripData} />;
}
