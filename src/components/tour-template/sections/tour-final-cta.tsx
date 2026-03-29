import Image from "next/image";
import type { TourFinalCtaData } from "../types";
import LightCreamLinework from "./light-cream-linework";

type TourFinalCtaProps = {
  finalCta: TourFinalCtaData;
  lightTheme?: "default" | "tivoliUnified" | "mergedSfondosez";
};

function resolveFinalCtaHref(label: string, href: string) {
  const normalizedHref = href.trim();
  const normalizedLabel = label.toLowerCase();
  const isPlanningCta = /plan|booking|book|prenota|availability|concierge|tailor/.test(
    normalizedLabel,
  );
  const isExploreToursCta = /explore|view all|see all/.test(normalizedLabel);

  if (isPlanningCta && (normalizedHref === "#" || normalizedHref.startsWith("/booking-contact"))) {
    return "/#booking-calendar";
  }

  if (isExploreToursCta && (normalizedHref === "/tours" || normalizedHref === "/tours/")) {
    return "/#requested-tours-heading";
  }

  return normalizedHref || "#";
}

export default function TourFinalCta({ finalCta, lightTheme = "default" }: TourFinalCtaProps) {
  const useTivoliUnified = lightTheme === "tivoliUnified";
  const useMergedSfondosez = lightTheme === "mergedSfondosez";
  const buttonHref = resolveFinalCtaHref(finalCta.buttonLabel, finalCta.buttonHref);

  return (
    <section
      id="final-cta"
      className={`relative isolate overflow-hidden py-14 md:py-18 ${
        useMergedSfondosez ? "bg-transparent pt-8 md:pt-10" : useTivoliUnified ? "bg-[#f9f1e9]" : "bg-[#F4E9DC]"
      }`}
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
      <div className="relative z-[1] mx-auto w-[min(100%,1020px)] px-4 md:px-6">
        <article className="relative rounded-[1.45rem] border border-[#B6925E]/46 bg-[linear-gradient(160deg,#2E160D_0%,#3A1F12_62%,#2A130C_100%)] p-7 text-center text-[#F5EFE7] shadow-[0_0_0_1px_rgba(255,231,201,0.08)_inset,0_24px_56px_rgba(58,31,18,0.3)] md:p-10">
          <Image
            src="/pisellazzo.png"
            alt=""
            fill
            aria-hidden
            sizes="(max-width: 1024px) 100vw, 72vw"
            className="pointer-events-none object-cover object-[58%_52%] opacity-[0.34]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(24,9,6,0.9)_0%,rgba(29,12,8,0.68)_24%,rgba(29,12,8,0.58)_76%,rgba(24,9,6,0.9)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,4,2,0.52)_0%,rgba(13,4,2,0.24)_42%,rgba(13,4,2,0.6)_100%)]" />
          <div className="pointer-events-none absolute inset-x-[10%] top-0 h-16 bg-[radial-gradient(circle_at_50%_0%,rgba(214,162,100,0.32)_0%,rgba(214,162,100,0)_72%)]" />

          <h2 className="relative font-serif text-[2.45rem] font-semibold leading-[0.95] tracking-[-0.015em] md:text-[3.2rem]">
            {finalCta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-[45ch] font-sans text-[1.02rem] leading-[1.72] text-[#E9DCCD] md:text-[1.08rem]">
            {finalCta.description}
          </p>

          <a
            href={buttonHref}
            className="relative mx-auto mt-6 inline-flex min-h-[3.2rem] items-center justify-center rounded-full border border-[#C79A62] bg-[linear-gradient(180deg,#c79a62_0%,#aa7a47_100%)] px-8 font-sans text-[0.95rem] font-semibold text-[#F7EFE6] shadow-[0_1px_0_rgba(255,230,197,0.34)_inset,0_10px_20px_rgba(142,84,36,0.24)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B88E]/72 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B140C]"
          >
            {finalCta.buttonLabel}
          </a>

          <ul className="relative mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {finalCta.trustItems.map((item) => (
              <li
                key={item}
                className="relative overflow-hidden rounded-full border border-[#B6925E]/34 bg-[#3a1f12]/35"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 [background-image:url('/pisellazzo.png')] [background-size:cover] [background-position:center] opacity-[0.32]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(28,11,7,0.78)_0%,rgba(41,18,11,0.48)_24%,rgba(41,18,11,0.48)_76%,rgba(28,11,7,0.78)_100%)]"
                />
                <span className="relative block px-3 py-1 font-sans text-[0.77rem] text-[#D6B88E]">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
