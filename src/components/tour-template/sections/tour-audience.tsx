import type { TourAudienceItem } from "../types";
import LightCreamLinework from "./light-cream-linework";

type TourAudienceProps = {
  items: TourAudienceItem[];
  theme?: "default" | "sfondosez2" | "sfondo3";
  cardsTheme?: "default" | "darkbronzo";
  lightTheme?: "default" | "tivoliUnified";
};

export default function TourAudience({
  items,
  theme = "default",
  cardsTheme = "default",
  lightTheme = "default",
}: TourAudienceProps) {
  const useSfondosez2 = theme === "sfondosez2";
  const useSfondo3 = theme === "sfondo3";
  const useTivoliUnified = lightTheme === "tivoliUnified";
  const useBronzeCards = cardsTheme === "darkbronzo" || useSfondo3;
  const sectionBaseBgClass = useSfondo3 || useTivoliUnified ? "bg-[#fbf5ee]" : "bg-[#F4E9DC]";

  return (
    <section className={`relative isolate overflow-hidden py-14 md:py-16 ${sectionBaseBgClass}`}>
      {useTivoliUnified ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.14,
            mixBlendMode: "multiply",
            backgroundImage: "url('/sfondo3.png?v=2')",
            backgroundSize: "cover",
            backgroundPosition: "center 52%",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : useSfondosez2 || useSfondo3 ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: useSfondo3 ? 0.14 : 0.52,
            backgroundImage: useSfondo3 ? "url('/sfondo3.png?v=2')" : "url('/sfondosez2.png')",
            backgroundSize: "cover",
            backgroundPosition: useSfondo3 ? "center 52%" : "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : null}
      {!useSfondosez2 && !useSfondo3 ? <LightCreamLinework /> : null}
      <div className="relative z-[1] mx-auto w-[min(100%,1140px)] px-4 md:px-6">
        <p className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.16em] text-[#83654B]">
          Who It Is For
        </p>
        <h2 className="mt-3 max-w-[15ch] font-serif text-[2.42rem] font-semibold leading-[0.95] tracking-[-0.015em] text-[#352821] md:text-[3.1rem]">
          Is This Tour Right for You?
        </h2>

        <div className="mt-7 grid gap-3.5 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-[1.1rem] border p-5 md:p-6 ${
                useBronzeCards
                  ? "min-h-[11rem] rounded-[1rem] border-[1px] border-[rgba(226,172,104,0.92)] bg-[linear-gradient(162deg,#31180d_0%,#241109_42%,#1c0d07_72%,#2d160c_100%)] text-[#f5eee4] shadow-[0_0_0_1px_rgba(123,74,40,0.94),0_0_0_1px_rgba(245,197,130,0.3)_inset,0_1px_0_rgba(255,231,196,0.24)_inset,0_14px_24px_rgba(39,18,9,0.31)]"
                  : `border-[#C79A62]/28 shadow-[0_1px_0_rgba(255,244,226,0.72)_inset] ${
                      index < 2 ? "bg-[#f5eadf]/88" : "bg-[#f3e7d9]/76"
                    }`
              }`}
            >
              {useBronzeCards ? (
                <>
                  <span
                    className="pointer-events-none absolute inset-0 z-0 opacity-[0.78] mix-blend-soft-light"
                    style={{
                      background: `
                        radial-gradient(circle at 50% 30%, rgba(255, 199, 136, 0.24) 0%, rgba(255, 199, 136, 0.08) 34%, rgba(255, 199, 136, 0) 66%),
                        url('/darkbronzo.png'),
                        url('/ragnar.png'),
                        linear-gradient(180deg, rgba(255, 229, 190, 0.2) 0%, rgba(255, 229, 190, 0) 36%),
                        repeating-linear-gradient(118deg, rgba(255, 223, 177, 0.03) 0px, rgba(255, 223, 177, 0.03) 1px, rgba(39, 19, 10, 0.05) 1px, rgba(39, 19, 10, 0.05) 3px)
                      `,
                      backgroundSize: "cover, cover, 150% auto, auto, auto",
                      backgroundPosition: "center, 50% 0%, 50% 0%, center, center",
                      backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, repeat",
                    }}
                  />
                  <span
                    className="pointer-events-none absolute inset-[2px] rounded-[0.95rem] border border-[rgba(246,201,137,0.24)]"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255, 236, 205, 0.2), inset 0 -1px 0 rgba(102, 56, 28, 0.28)" }}
                  />
                </>
              ) : null}

              <div className="relative z-[1]">
              <h3
                className={`font-serif leading-[0.98] ${useBronzeCards ? "text-[#f0d3ac]" : "text-[#3B2B24]"} ${index < 2 ? "text-[2.05rem]" : "text-[1.8rem]"}`}
                style={useBronzeCards ? { textShadow: "0 2px 10px rgba(11, 4, 2, 0.62)" } : undefined}
              >
                {item.title}
              </h3>
              <div className={`mt-2 h-px w-20 ${useBronzeCards ? "bg-[linear-gradient(90deg,rgba(224,169,100,0.94)_0%,rgba(224,169,100,0.4)_64%,rgba(224,169,100,0)_100%)]" : "bg-[linear-gradient(90deg,rgba(182,146,94,0.9)_0%,rgba(182,146,94,0)_100%)]"}`} />
              <p
                className={`mt-3 font-sans text-[0.98rem] leading-[1.44] ${useBronzeCards ? "text-[#edd7bb]" : "text-[#4A372F]"}`}
                style={useBronzeCards ? { textShadow: "0 1px 5px rgba(10, 4, 2, 0.45)" } : undefined}
              >
                {item.description}
              </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
