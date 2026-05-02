import type { TourPracticalInfoData } from "../types";

type TourPracticalInfoProps = {
  practicalInfo: TourPracticalInfoData;
};

const practicalInfoLabels = [
  { key: "ticketsText", label: "Tickets & Reservations" },
  { key: "meetingPointText", label: "Meeting Point" },
  { key: "walkingLevelText", label: "Walking Level" },
  { key: "accessibilityNotes", label: "Accessibility Notes" },
  { key: "whatToBringText", label: "What to Bring" },
  { key: "securityChecksText", label: "Security Checks" },
] as const;

export default function TourPracticalInfo({ practicalInfo }: TourPracticalInfoProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8efe4_0%,#f5eadc_100%)] py-14 md:py-16"
      aria-labelledby="practical-info-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-multiply [background-image:url('/porco.png')] [background-size:900px_auto] [background-position:center]" />

      <div className="relative mx-auto w-[min(100%,1000px)] px-4 md:px-6">
        <p className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.17em] text-[#83654B]">
          Good to Know
        </p>
        <h2
          id="practical-info-heading"
          className="mt-3 max-w-[14ch] font-serif text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.015em] text-[#352821] md:text-[3rem]"
        >
          Practical Information
        </h2>

        <div className="mt-7 rounded-[1.05rem] border border-[#C79A62]/28 bg-[#f7efe3]/72 px-5 py-2 shadow-[0_1px_0_rgba(255,245,231,0.82)_inset] md:px-7">
          {practicalInfoLabels.map((item) => {
            const value = practicalInfo[item.key];

            return (
              <details key={item.key} className="group border-b border-[#C79A62]/24 py-4 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm font-sans text-[0.98rem] font-semibold text-[#3B2B24] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6925E]/58 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7efe3]">
                  <span>{item.label}</span>
                  <span className="text-[#7B542E] transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pt-3 pr-4 font-sans text-[0.96rem] leading-[1.7] text-[#4A372F] md:pr-10">
                  {value}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
