export type TourFactItem = {
  label: string;
  value: string;
};

export type TourOverviewData = {
  eyebrow?: string;
  title: string;
  intro: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

export type TourHighlightItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type TourTimelineStop = {
  title: string;
  description: string;
};

export type TourPracticalInfoData = {
  ticketsText: string;
  meetingPointText: string;
  walkingLevelText: string;
  accessibilityNotes: string;
  whatToBringText: string;
  securityChecksText: string;
};

export type TourAudienceItem = {
  title: string;
  description: string;
};

export type TourUpgradeItem = {
  title: string;
  description: string;
};

export type TourFaqItem = {
  question: string;
  answer: string;
};

export type TourTestimonialData = {
  quote: string;
  name: string;
  context: string;
};

export type TourFinalCtaData = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  trustItems: string[];
};

export type RelatedTourItem = {
  title: string;
  description: string;
  href: string;
};

export type TourPageData = {
  slug: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  lightSectionsTheme?: "default" | "tivoliUnified";
  mergeRelatedAndFinalCta?: boolean;
  highlightsTheme?: "default" | "bronzeHome";
  overviewTheme?: "default" | "darkbiancoSoft";
  timelineTheme?: "default" | "sfondosez";
  audienceTheme?: "default" | "sfondosez2" | "sfondo3";
  upgradesTheme?: "default" | "light" | "homeDarkbronzo";
  cardsTheme?: "default" | "darkbronzo";
  hero: {
    styleVariant?: "default" | "contact";
    eyebrow: string;
    title: string;
    landmarksLine?: string;
    subtitle: string;
    intentLine?: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaHref: string;
    imageSrc: string;
    imageAlt: string;
    quickFacts?: string[];
    microTags?: string[];
  };
  facts: TourFactItem[];
  overview: TourOverviewData;
  highlights: TourHighlightItem[];
  itinerary: TourTimelineStop[];
  practicalInfo: TourPracticalInfoData;
  audience: TourAudienceItem[];
  upgrades: TourUpgradeItem[];
  testimonial: TourTestimonialData;
  faq: TourFaqItem[];
  relatedTours: RelatedTourItem[];
  finalCta: TourFinalCtaData;
};
