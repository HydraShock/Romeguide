import Image from "next/image";
import type { TourHighlightItem } from "../types";
import {
  BRONZE_SIGNATURE_BASE_STYLE,
  BRONZE_SIGNATURE_GHOST_STYLE,
  BRONZE_SIGNATURE_TONE_STYLE,
} from "@/lib/bronze-signature-style";

type TourHighlightsProps = {
  items: TourHighlightItem[];
  theme?: "default" | "bronzeHome";
};

export default function TourHighlights({ items, theme = "bronzeHome" }: TourHighlightsProps) {
  const [primary, ...secondary] = items;

  if (!primary) {
    return null;
  }

  const objectPositions = ["56% 47%", "56% 49%", "60% 50%"];
  const isBronzeHome = theme === "bronzeHome";

  return (
    <section
      className={`relative isolate overflow-hidden py-16 text-[#F5EFE7] md:py-20 ${
        isBronzeHome ? "" : "bg-[linear-gradient(180deg,#2f170e_0%,#281209_100%)]"
      }`}
      style={isBronzeHome ? BRONZE_SIGNATURE_BASE_STYLE : undefined}
    >
      {isBronzeHome ? (
        <>
          <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_TONE_STYLE} />
          <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_GHOST_STYLE} />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light [background-image:url('/porco.png')] [background-size:1100px_auto] [background-position:center]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(198,146,87,0.15)_0%,rgba(198,146,87,0)_45%),radial-gradient(circle_at_84%_72%,rgba(198,146,87,0.12)_0%,rgba(198,146,87,0)_52%)]" />
        </>
      )}
      <div className="pointer-events-none absolute -left-[14%] top-[22%] hidden h-[56%] w-[32%] rounded-[50%] border border-[#B6925E]/14 md:block" />
      <div className="pointer-events-none absolute -left-[12.5%] top-[18%] hidden h-[56%] w-[32%] rounded-[50%] border border-[#B6925E]/10 md:block" />

      <div className="relative mx-auto w-[min(100%,1220px)] px-4 md:px-6">
        <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#D6B88E]">
          Highlights
        </p>
        <h2 className="mt-3 max-w-[15ch] font-serif text-[2.45rem] font-semibold leading-[0.95] tracking-[-0.018em] text-[#F5EFE7] md:text-[3.2rem]">
          Signature Moments of the Tour
        </h2>

        <article className="group relative mt-8 grid overflow-hidden rounded-[1.55rem] border border-[#B6925E]/40 bg-[#3A1F12]/64 shadow-[0_0_0_1px_rgba(255,231,201,0.07)_inset,0_26px_54px_rgba(15,6,4,0.42)] md:grid-cols-12">
          <div className="relative min-h-[19rem] md:col-span-7 md:min-h-[24.5rem]">
            <Image
              src={primary.imageSrc}
              alt={primary.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-[58%_50%] transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.42)_100%)] md:bg-[linear-gradient(120deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.5)_86%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(12,5,3,0.55)_100%)]" />
          </div>

          <div className="relative p-6 md:col-span-5 md:p-8">
            <p className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.19em] text-[#C79A62]">
              Signature Highlight
            </p>
            <h3 className="mt-3 font-serif text-[2.1rem] leading-[0.95] text-[#F5EFE7] [text-shadow:0_2px_10px_rgba(9,3,2,0.48)] md:text-[2.5rem]">
              {primary.title}
            </h3>
            <p className="mt-4 max-w-[34ch] font-sans text-[0.98rem] leading-relaxed text-[#E9DCCD] [text-shadow:0_1px_6px_rgba(8,3,2,0.4)] md:text-[1.02rem]">
              {primary.description}
            </p>
          </div>
        </article>

        {secondary.length > 0 && (
          <div className="mt-4 grid gap-3.5 md:grid-cols-2">
            {secondary.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.25rem] border border-[#B6925E]/32 bg-[#3A1F12]/54 shadow-[0_0_0_1px_rgba(255,231,201,0.07)_inset,0_16px_34px_rgba(15,6,4,0.3)] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "min-h-[15rem] md:min-h-[14.2rem]" : "min-h-[14rem] md:min-h-[16.5rem]"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 92vw" : "(max-width: 768px) 100vw, 44vw"}
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    style={{ objectPosition: objectPositions[index] ?? "center" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(8,3,1,0.26)_0%,rgba(8,3,1,0)_44%),radial-gradient(circle_at_84%_82%,rgba(8,3,1,0.28)_0%,rgba(8,3,1,0)_52%),linear-gradient(180deg,rgba(10,4,2,0.14)_0%,rgba(10,4,2,0.52)_68%,rgba(10,4,2,0.72)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] bg-[linear-gradient(180deg,rgba(12,5,3,0)_0%,rgba(12,5,3,0.64)_76%,rgba(12,5,3,0.82)_100%)]" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <div className="rounded-[1rem] border border-[#d7b184]/34 bg-[linear-gradient(180deg,rgba(21,9,5,0.5)_0%,rgba(12,5,3,0.78)_100%)] px-3.5 py-3 backdrop-blur-[1.6px] shadow-[0_0_0_1px_rgba(255,228,190,0.08)_inset,0_12px_24px_rgba(6,2,1,0.3)] md:px-4 md:py-3.5">
                    <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-[#e2c4a1] [text-shadow:0_1px_5px_rgba(6,2,1,0.56)]">
                      Highlight {index + 2}
                    </p>
                    <h3
                      className={`mt-2 max-w-[26ch] font-serif leading-[0.96] text-[#F5EFE7] [text-shadow:0_2px_12px_rgba(6,2,1,0.78)] ${
                        index === 0 ? "text-[1.86rem] md:text-[2rem]" : "text-[1.7rem] md:text-[1.95rem]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[44ch] font-sans text-[0.92rem] leading-relaxed text-[#efe2d0] [text-shadow:0_1px_7px_rgba(6,2,1,0.62)] md:text-[0.98rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
