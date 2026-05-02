import type { TourFactItem } from "../types";
import LightCreamLinework from "./light-cream-linework";

type TourFactsBarProps = {
  facts: TourFactItem[];
  lightTheme?: "default" | "tivoliUnified";
};

const FACTS_STANDARD = [
  { label: "Duration", aliases: ["duration"] },
  { label: "Format", aliases: ["format"] },
  { label: "Guide", aliases: ["guide"] },
  { label: "Driver", aliases: ["driver"] },
  { label: "Sites", aliases: ["sites", "main stops", "focus", "region"] },
] as const;

const FACTS_FALLBACK: Record<(typeof FACTS_STANDARD)[number]["label"], string> = {
  Duration: "Flexible",
  Format: "Private tour",
  Guide: "Licensed guide",
  Driver: "On request",
  Sites: "Based on interests",
};

function normalizeFactLabel(label: string) {
  return label.trim().toLowerCase().replace(/\s+/g, " ");
}

function toStandardFacts(facts: TourFactItem[]) {
  const lookup = new Map<string, string>();

  for (const fact of facts) {
    const normalizedLabel = normalizeFactLabel(fact.label);
    const cleanedValue = fact.value.trim();

    if (cleanedValue.length > 0 && !lookup.has(normalizedLabel)) {
      lookup.set(normalizedLabel, cleanedValue);
    }
  }

  return FACTS_STANDARD.map((column) => {
    let value = "";

    for (const alias of column.aliases) {
      const found = lookup.get(alias);
      if (found) {
        value = found;
        break;
      }
    }

    return {
      label: column.label,
      value: value || FACTS_FALLBACK[column.label],
    };
  });
}

export default function TourFactsBar({ facts }: TourFactsBarProps) {
  const standardFacts = toStandardFacts(facts);

  return (
    <section className="relative isolate overflow-hidden border-y border-[#C79A62]/26 bg-[linear-gradient(180deg,#f4eadf_0%,#f1e5d7_100%)]">
      <LightCreamLinework />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(214,162,100,0)_0%,rgba(214,162,100,0.66)_50%,rgba(214,162,100,0)_100%)]" />

      <div className="mx-auto w-[min(100%,1240px)] px-4 py-4 md:px-6 md:py-5">
        <div className="relative overflow-hidden rounded-[1.15rem] border border-[#C79A62]/34 bg-[#f7efe4]/84 px-4 py-4 shadow-[0_0_0_1px_rgba(255,244,226,0.68)_inset,0_12px_28px_rgba(60,34,20,0.08)] md:px-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-[radial-gradient(circle_at_50%_0%,rgba(255,252,246,0.68)_0%,rgba(255,252,246,0)_76%)]" />

          <dl className="relative grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-5">
            {standardFacts.map((fact, index) => (
              <div
                key={fact.label}
                className={`relative ${index !== standardFacts.length - 1 ? "lg:after:absolute lg:after:-right-3 lg:after:top-1/2 lg:after:h-8 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-[#C79A62]/26" : ""}`}
              >
                <dt className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#87684D] md:text-[0.66rem]">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 max-w-[18ch] font-sans text-[1rem] font-semibold leading-snug text-[#3B2B24] md:text-[1.02rem]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
