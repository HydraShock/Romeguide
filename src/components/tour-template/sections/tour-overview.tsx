import Image from "next/image";
import type { TourOverviewData } from "../types";
import LightCreamLinework from "./light-cream-linework";

type TourOverviewProps = {
  overview: TourOverviewData;
  theme?: "default" | "darkbiancoSoft";
  lightTheme?: "default" | "tivoliUnified";
};

export default function TourOverview({ overview, theme = "default" }: TourOverviewProps) {
  const useDarkbiancoSoft = theme === "darkbiancoSoft";

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8f0e6_0%,#f4e9db_100%)] py-16 md:py-20">
      {useDarkbiancoSoft ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.32,
            mixBlendMode: "multiply",
            backgroundImage: "url('/darkbianco.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : null}
      <LightCreamLinework />

      <div className="relative z-[1] mx-auto grid w-[min(100%,1200px)] gap-10 px-4 md:px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5 lg:pr-6">
          <p className="font-sans text-[0.69rem] font-semibold uppercase tracking-[0.19em] text-[#83654B]">
            {overview.eyebrow ?? "Why This Tour"}
          </p>
          <h2 className="mt-3 max-w-[14ch] font-serif text-[2.55rem] font-semibold leading-[0.94] tracking-[-0.018em] text-[#352821] md:text-[3.35rem]">
            {overview.title}
          </h2>

          <div className="mt-4 h-px w-24 bg-[linear-gradient(90deg,rgba(182,146,94,0.9)_0%,rgba(182,146,94,0)_100%)]" />

          <p className="mt-5 max-w-[42ch] font-sans text-[1.02rem] leading-[1.72] text-[#4A372F] md:text-[1.08rem]">
            {overview.intro}
          </p>
          <p className="mt-4 max-w-[42ch] font-sans text-[1.02rem] leading-[1.72] text-[#4A372F] md:text-[1.08rem]">
            {overview.body}
          </p>
        </div>

        <div className="relative lg:col-span-7 lg:pl-6">
          <div className="pointer-events-none absolute -bottom-7 left-[16%] right-[10%] h-10 rounded-[999px] bg-[radial-gradient(circle,rgba(143,91,47,0.24)_0%,rgba(143,91,47,0)_72%)] blur-sm" />
          <span className="pointer-events-none absolute -left-[6%] top-[7%] hidden h-[82%] w-[76%] rounded-[52%] border border-[#b6925e]/14 lg:block" />
          <span className="pointer-events-none absolute -left-[4.8%] top-[9%] hidden h-[82%] w-[76%] rounded-[52%] border border-[#b6925e]/10 lg:block" />

          <figure className="relative overflow-hidden rounded-[1.7rem] border border-[#C79A62]/34 bg-[#EADCCF] p-3 shadow-[0_0_0_1px_rgba(255,241,221,0.7)_inset,0_28px_58px_rgba(58,31,18,0.18)]">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-[#cba67a]/45">
              <div className="relative aspect-[5/4] md:aspect-[16/11]">
                <Image
                  src={overview.imageSrc}
                  alt={overview.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover object-[58%_50%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,8,5,0.03)_0%,rgba(18,8,5,0.2)_100%)]" />
              </div>
            </div>

            <figcaption className="relative mt-3 inline-flex rounded-full border border-[#C79A62]/38 bg-[#f6ecdf] px-4 py-1.5 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#7d5a3c]">
              Story-led, Guest-paced
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
