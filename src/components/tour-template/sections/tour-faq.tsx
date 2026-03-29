import type { TourFaqItem } from "../types";
import {
  BRONZE_SIGNATURE_BASE_STYLE,
  BRONZE_SIGNATURE_GHOST_STYLE,
  BRONZE_SIGNATURE_TONE_STYLE,
} from "@/lib/bronze-signature-style";

type TourFaqProps = {
  faq: TourFaqItem[];
};

export default function TourFaq({ faq }: TourFaqProps) {
  return (
    <section
      className="relative isolate overflow-hidden py-14 text-[#F5EFE7] md:py-16"
      style={BRONZE_SIGNATURE_BASE_STYLE}
      aria-labelledby="tour-faq-heading"
    >
      <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_TONE_STYLE} />
      <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_GHOST_STYLE} />
      <div className="relative z-[1] mx-auto w-[min(100%,980px)] px-4 md:px-6">
        <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#D6B88E]">FAQ</p>
        <h2
          id="tour-faq-heading"
          className="mt-3 max-w-[13ch] font-serif text-[2.45rem] font-semibold leading-[0.95] tracking-[-0.015em] text-[#F5EFE7] md:text-[3.05rem]"
        >
          Tour-Specific Questions
        </h2>

        <div className="mt-7">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[#B6925E]/28 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm font-sans text-[1rem] font-semibold text-[#F5EFE7] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B88E]/62 focus-visible:ring-offset-2 focus-visible:ring-offset-[#31180E]">
                <span>{item.question}</span>
                <span className="text-[#C79A62] transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="pt-3 pr-8 font-sans text-[0.98rem] leading-[1.72] text-[#E9DCCD]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
