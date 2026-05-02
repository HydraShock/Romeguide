import Image from "next/image";
import type { TourPageData } from "../types";

type TourHeroProps = {
  hero: TourPageData["hero"];
};

function resolveHeroCtaHref(label: string, href: string) {
  const normalizedHref = href.trim();
  const normalizedLabel = label.toLowerCase();
  const isPlaceholderTarget =
    normalizedHref === "#" ||
    normalizedHref === "#final-cta" ||
    normalizedHref.startsWith("/booking-contact");

  const isPlanningCta = /plan|booking|book|prenota|availability|concierge|tailor|request|ask|custom|inquiry/.test(
    normalizedLabel,
  );
  const isExploreToursCta = /explore|view all|see all/.test(normalizedLabel);

  if (isPlanningCta && isPlaceholderTarget) {
    return "/#booking-calendar";
  }

  if (isExploreToursCta && (normalizedHref === "/tours" || normalizedHref === "/tours/")) {
    return "/#requested-tours-heading";
  }

  return normalizedHref || "#";
}

export default function TourHero({ hero }: TourHeroProps) {
  const isContactHero = hero.styleVariant === "contact";
  const heroFacts =
    hero.quickFacts && hero.quickFacts.length > 0
      ? hero.quickFacts.slice(0, 4)
      : ["Private Guides", "Custom Itineraries", "Easy Planning"];
  const heroTags = hero.microTags ?? [];
  const denseCopy =
    hero.title.length > 30 ||
    hero.subtitle.length > 170 ||
    (hero.intentLine?.length ?? 0) > 170;
  const sectionHeightClass = denseCopy
    ? "min-h-[634px] md:min-h-[70svh] lg:min-h-[684px]"
    : "min-h-[656px] md:min-h-[73svh] lg:min-h-[718px]";
  const imageClass = isContactHero
    ? "object-cover object-[58%_45%] md:scale-[1.02]"
    : "object-cover object-[67%_53%] md:scale-[1.035]";
  const radialOverlayClass = isContactHero
    ? "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(210,156,95,0.16)_0%,rgba(88,43,24,0.16)_42%,rgba(24,10,7,0.6)_100%)]"
    : "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_53%_56%,rgba(255,195,118,0.24)_0%,rgba(93,44,22,0.16)_43%,rgba(28,12,8,0.52)_100%)]";
  const linearOverlayClass = isContactHero
    ? "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(31,14,9,0.24)_0%,rgba(25,11,8,0.46)_46%,rgba(20,9,6,0.72)_100%)]"
    : "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(35,16,10,0.24)_0%,rgba(28,12,8,0.4)_44%,rgba(24,10,7,0.66)_100%)]";
  const textureOverlayClass = isContactHero
    ? "pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light [background-image:url('/porco.png')] [background-size:1100px_auto] [background-position:center] [filter:saturate(0.72)]"
    : "pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light [background-image:url('/porco.png')] [background-size:1000px_auto] [background-position:center] [filter:saturate(0.76)]";
  const panelClass = isContactHero
    ? "relative w-full max-w-[640px] overflow-hidden rounded-[1.9rem] border border-[#e8bb82]/58 bg-[linear-gradient(180deg,rgba(248,240,230,0.97)_0%,rgba(243,232,217,0.96)_100%)] shadow-[0_0_0_1px_rgba(255,229,192,0.24)_inset,0_0_32px_rgba(216,164,104,0.2),0_30px_68px_rgba(26,12,8,0.32)] md:p-0 lg:ml-[96px]"
    : "relative w-full max-w-[640px] overflow-hidden rounded-[1.9rem] border border-[#f2c27b]/62 bg-[linear-gradient(180deg,rgba(247,239,230,0.98)_0%,rgba(244,234,221,0.962)_100%)] shadow-[0_0_0_1px_rgba(255,222,171,0.26)_inset,0_0_44px_rgba(232,179,109,0.26),0_30px_68px_rgba(26,12,8,0.32)] md:p-0 lg:ml-[96px]";
  const primaryCtaHref = resolveHeroCtaHref(hero.primaryCtaLabel, hero.primaryCtaHref);
  const secondaryCtaHref = resolveHeroCtaHref(hero.secondaryCtaLabel, hero.secondaryCtaHref);

  return (
    <section className={`relative isolate overflow-hidden bg-[#2b140c] ${sectionHeightClass}`}>
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className={imageClass}
      />

      <div className={radialOverlayClass} />
      <div className={linearOverlayClass} />
      <div className={textureOverlayClass} />
      <div className="pointer-events-none absolute inset-x-0 top-[70%] h-px bg-[linear-gradient(90deg,rgba(232,179,109,0)_0%,rgba(232,179,109,0.74)_49%,rgba(232,179,109,0)_100%)] shadow-[0_0_10px_rgba(232,179,109,0.34)]" />
      {!isContactHero ? (
        <>
          <span className="pointer-events-none absolute right-[11.8%] top-[10.8%] hidden h-[40.8%] w-[23.8%] rounded-[999px] border border-[#C79A62]/28 md:block" />
          <span className="pointer-events-none absolute right-[10.9%] top-[9.6%] hidden h-[40.8%] w-[23.8%] rounded-[999px] border border-[#C79A62]/16 md:block" />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_49%,rgba(17,7,5,0.42)_100%)]" />

      <div className="relative mx-auto w-[min(100%,1536px)] px-4 pb-5 pt-8 sm:pb-7 sm:pt-10 md:px-7 md:pb-8 md:pt-[104px] lg:pb-6 lg:pt-[124px]">
        <div className={panelClass}>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-[radial-gradient(circle_at_50%_0%,rgba(255,237,211,0.68)_0%,rgba(255,237,211,0)_72%)]" />
          <span className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,rgba(232,179,109,0)_0%,rgba(232,179,109,0.76)_46%,rgba(232,179,109,0)_100%)]" />

          <div className="relative space-y-4 p-5 md:space-y-5 md:p-7 lg:p-8">
            <div>
              <p className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.24em] text-[#87684D] md:text-[0.72rem]">
                {hero.eyebrow}
              </p>
              <h1 className="whitespace-pre-line font-serif text-[clamp(2.2rem,6.2vw,3.95rem)] leading-[0.93] tracking-[-0.018em] text-[#3B2B24]">
                {hero.title}
              </h1>
              {hero.landmarksLine ? (
                <h2 className="mt-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#7A5A40] md:text-[0.78rem]">
                  {hero.landmarksLine}
                </h2>
              ) : null}
              <p className="mt-3.5 max-w-[38ch] font-sans text-[0.99rem] leading-[1.52] text-[#4B3A31] md:text-[1.04rem]">
                {hero.subtitle}
              </p>
              {hero.intentLine ? (
                <p className="mt-2.5 max-w-[46ch] font-sans text-[0.8rem] font-medium leading-[1.56] text-[#6A4E3C] md:text-[0.86rem]">
                  {hero.intentLine}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3 sm:flex-nowrap">
              <a
                href={primaryCtaHref}
                className="inline-flex min-h-[3rem] min-w-[12.4rem] items-center justify-center gap-2 rounded-full border border-[#ca9555] bg-[linear-gradient(180deg,#dfad67_0%,#c68131_100%)] px-5.5 font-sans text-[0.87rem] font-semibold text-[#fff1de] shadow-[0_1px_0_rgba(255,230,197,0.44)_inset,0_12px_24px_rgba(142,84,36,0.28)] transition duration-300 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A62]/72 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4eadf] md:text-[0.93rem]"
              >
                {hero.primaryCtaLabel}
                <span aria-hidden>&rarr;</span>
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex min-h-[3rem] min-w-[12.4rem] items-center justify-center rounded-full border border-[#cfa46e] bg-[#f6ead8]/80 px-5.5 font-sans text-[0.87rem] font-semibold text-[#7B542E] shadow-[0_1px_0_rgba(255,245,228,0.7)_inset] transition duration-300 hover:bg-[#f6ead8]/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A62]/58 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4eadf] md:text-[0.93rem]"
              >
                {hero.secondaryCtaLabel}
              </a>
            </div>

            <div className="border-t border-[#C8A379]/44 pt-4">
              <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
                {heroFacts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full border border-[#C8A379]/50 bg-[#f9efe2]/76 px-3.5 py-1.5 text-center font-sans text-[0.78rem] font-medium leading-tight text-[#5A4336] shadow-[0_1px_0_rgba(255,244,226,0.7)_inset] md:text-[0.82rem]"
                  >
                    {fact}
                  </li>
                ))}
              </ul>

              {heroTags.length > 0 ? (
                <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[#6C5342]">
                  <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#87684D]">
                    Ideal for
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {heroTags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[#cfb292]/58 bg-[#f8ede0]/78 px-2.5 py-1 font-sans text-[0.72rem] font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
