import type { TourPageData } from "./types";
import LuxuryFooterSection from "../luxury-footer-section";
import TourAudience from "./sections/tour-audience";
import TourFaq from "./sections/tour-faq";
import TourFactsBar from "./sections/tour-facts-bar";
import TourFinalCta from "./sections/tour-final-cta";
import TourHero from "./sections/tour-hero";
import TourHighlights from "./sections/tour-highlights";
import TourOverview from "./sections/tour-overview";
import TourRelatedTours from "./sections/tour-related-tours";
import TourTestimonial from "./sections/tour-testimonial";
import TourTimeline from "./sections/tour-timeline";
import TourUpgrades from "./sections/tour-upgrades";

type TourTemplatePageProps = {
  data: TourPageData;
};

function buildFaqSchema(data: TourPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(data: TourPageData) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const baseUrl = siteUrl.replace(/\/+$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tours",
        item: `${baseUrl}/#requested-tours-heading`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.hero.title,
        item: `${baseUrl}${data.path}`,
      },
    ],
  };
}

export default function TourTemplatePage({ data }: TourTemplatePageProps) {
  const faqSchema = buildFaqSchema(data);
  const breadcrumbSchema = buildBreadcrumbSchema(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#F7EFE6] text-[#2E241F]">
        <TourHero hero={data.hero} />
        <TourFactsBar facts={data.facts} lightTheme={data.lightSectionsTheme} />
        <TourOverview overview={data.overview} theme={data.overviewTheme} lightTheme={data.lightSectionsTheme} />
        <TourHighlights items={data.highlights} theme={data.highlightsTheme} />
        <TourTimeline stops={data.itinerary} theme={data.timelineTheme} lightTheme={data.lightSectionsTheme} />
        <TourAudience
          items={data.audience}
          theme={data.audienceTheme}
          cardsTheme={data.cardsTheme}
          lightTheme={data.lightSectionsTheme}
        />
        <TourUpgrades items={data.upgrades} theme={data.upgradesTheme} cardsTheme={data.cardsTheme} />
        <TourTestimonial testimonial={data.testimonial} lightTheme={data.lightSectionsTheme} />
        <TourFaq faq={data.faq} />
        {data.mergeRelatedAndFinalCta ? (
          <section className="relative isolate overflow-hidden bg-[#f9f1e9] py-14 md:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                opacity: 0.32,
                backgroundImage: "url('/sfondosez.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="relative z-[1]">
              <TourRelatedTours items={data.relatedTours} cardsTheme={data.cardsTheme} lightTheme="mergedSfondosez" />
              <TourFinalCta finalCta={data.finalCta} lightTheme="mergedSfondosez" />
            </div>
          </section>
        ) : (
          <>
            <TourRelatedTours items={data.relatedTours} cardsTheme={data.cardsTheme} lightTheme={data.lightSectionsTheme} />
            <TourFinalCta finalCta={data.finalCta} lightTheme={data.lightSectionsTheme} />
          </>
        )}
      </main>
      <LuxuryFooterSection />
    </>
  );
}
