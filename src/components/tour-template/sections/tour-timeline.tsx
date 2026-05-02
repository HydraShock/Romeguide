import type { TourTimelineStop } from "../types";
import LightCreamLinework from "./light-cream-linework";

type TourTimelineProps = {
  stops: TourTimelineStop[];
  theme?: "default" | "sfondosez";
  lightTheme?: "default" | "tivoliUnified";
};

export default function TourTimeline({ stops, theme = "default" }: TourTimelineProps) {
  const useSfondosez = theme === "sfondosez";
  const sectionBaseBgClass = useSfondosez ? "bg-[#f9f1e9]" : "bg-[#F4E9DC]";

  return (
    <section className={`relative isolate overflow-hidden py-14 md:py-18 ${sectionBaseBgClass}`}>
      {useSfondosez ? (
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
      ) : null}
      {!useSfondosez ? <LightCreamLinework /> : null}
      <div className="relative z-[1] mx-auto w-[min(100%,1000px)] px-4 md:px-6">
        <p className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.17em] text-[#83654B]">
          Custom Route Flow
        </p>
        <h2 className="mt-3 max-w-[14ch] font-serif text-[2.42rem] font-semibold leading-[0.95] tracking-[-0.015em] text-[#352821] md:text-[3.1rem]">
          How Your Private Experience Can Unfold
        </h2>
        <p className="mt-3 max-w-[64ch] font-sans text-[0.96rem] leading-[1.7] text-[#5b4638] md:text-[1rem]">
          These are the core moments. Since every tour is private, we can adjust timing, focus, and
          extra stops around your interests.
        </p>

        <ol className="relative mt-8 space-y-7 before:absolute before:bottom-0 before:left-[1.05rem] before:top-1 before:w-px before:bg-[#B6925E]/38 md:before:left-[1.25rem]">
          {stops.map((stop, index) => (
            <li key={stop.title} className="relative grid gap-2.5 pl-11 md:pl-[3.75rem]">
              <span
                className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C79A62]/72 font-sans text-[0.83rem] font-semibold text-[#F7EFE6] shadow-[0_0_0_1px_rgba(255,231,201,0.16)_inset,0_10px_20px_rgba(14,5,3,0.3)] md:h-9 md:w-9 md:text-[0.88rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(165deg,rgba(52,20,12,0.95)_0%,rgba(36,14,8,0.95)_58%,rgba(26,10,6,0.96)_100%),url('/darkbronzo.png')",
                  backgroundSize: "cover, cover",
                  backgroundPosition: "center, center 58%",
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundBlendMode: "normal, soft-light",
                }}
              >
                {index + 1}
              </span>
              <h3 className="font-serif text-[2rem] leading-[0.98] text-[#3B2B24] md:text-[2.2rem]">
                {stop.title}
              </h3>
              <p className="max-w-[54ch] font-sans text-[1rem] leading-[1.7] text-[#4A372F] md:text-[1.03rem]">
                {stop.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
