import type { RelatedTourItem } from "../types";
import LightCreamLinework from "./light-cream-linework";

type TourRelatedToursProps = {
  items: RelatedTourItem[];
  cardsTheme?: "default" | "darkbronzo";
  lightTheme?: "default" | "tivoliUnified" | "mergedSfondosez";
};

export default function TourRelatedTours({ items, cardsTheme = "default", lightTheme = "default" }: TourRelatedToursProps) {
  if (items.length === 0) {
    return null;
  }
  const useDarkBronzoCards = cardsTheme === "darkbronzo";
  const useTivoliUnified = lightTheme === "tivoliUnified";
  const useMergedSfondosez = lightTheme === "mergedSfondosez";

  return (
    <section
      className={`relative isolate overflow-hidden py-14 md:py-16 ${
        useMergedSfondosez
          ? "bg-transparent py-0 md:py-0"
          : useTivoliUnified
            ? "border-y border-[#C79A62]/24 bg-[#f9f1e9]"
            : "border-y border-[#C79A62]/24 bg-[#F4E9DC]"
      }`}
      aria-labelledby="related-tours-heading"
    >
      {useMergedSfondosez ? null : useTivoliUnified ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.18,
            mixBlendMode: "multiply",
            backgroundImage: "url('/sfondo3.png?v=2')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : (
        <LightCreamLinework />
      )}
      {useMergedSfondosez ? null : (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(199,154,98,0)_0%,rgba(199,154,98,0.65)_50%,rgba(199,154,98,0)_100%)]" />
      )}

      <div className="relative mx-auto w-[min(100%,1080px)] px-4 md:px-6">
        <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#83654B]">
          Related Tours
        </p>
        <h2
          id="related-tours-heading"
          className="mt-3 max-w-[17ch] font-serif text-[2.4rem] leading-[0.95] tracking-[-0.016em] text-[#352821] md:text-[3rem]"
        >
          Continue Your Rome Journey
        </h2>

        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-[1.05rem] border p-5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6925E]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5eadc] ${
                useDarkBronzoCards
                  ? "border-[#d4a56c]/72 bg-[linear-gradient(165deg,rgba(52,20,12,0.97)_0%,rgba(36,14,8,0.97)_58%,rgba(26,10,6,0.98)_100%)] text-[#f5eee4] shadow-[0_0_0_1px_rgba(255,231,201,0.16)_inset,0_20px_40px_rgba(14,5,3,0.32)] hover:border-[#e2bc88]/72"
                  : "border-[#C79A62]/34 bg-[#f7efe2]/78 shadow-[0_1px_0_rgba(255,245,231,0.8)_inset,0_14px_28px_rgba(58,31,18,0.08)] hover:border-[#B6925E]/52 hover:bg-[#f8f1e7]"
              }`}
            >
              {useDarkBronzoCards ? (
                <>
                  <span className="pointer-events-none absolute inset-0 opacity-[0.46] mix-blend-soft-light [background-image:url('/darkbronzo.png')] [background-size:cover] [background-position:center_58%] [background-repeat:no-repeat]" />
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,206,145,0.24)_0%,rgba(255,206,145,0)_46%),radial-gradient(circle_at_84%_84%,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0)_56%),linear-gradient(180deg,rgba(10,4,2,0.08)_0%,rgba(10,4,2,0.34)_100%)]" />
                  <span className="pointer-events-none absolute inset-[3px] rounded-[0.85rem] border border-[#e7be87]/34" />
                </>
              ) : null}
              <div className="relative z-[1]">
              <p className={`font-serif text-[1.7rem] leading-[0.98] ${useDarkBronzoCards ? "text-[#edd2a8]" : "text-[#3B2B24]"}`}>{item.title}</p>
              <p className={`mt-2 max-w-[42ch] font-sans text-[0.98rem] leading-relaxed ${useDarkBronzoCards ? "text-[#f3e5d2]" : "text-[#4A372F]"}`}>
                {item.description}
              </p>
              <span className={`mt-3 inline-flex items-center gap-2 font-sans text-[0.77rem] font-semibold uppercase tracking-[0.15em] ${useDarkBronzoCards ? "text-[#D6B88E]" : "text-[#7B542E]"}`}>
                Explore Tour
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
