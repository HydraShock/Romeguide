import type { TourUpgradeItem } from "../types";
import {
  BRONZE_SIGNATURE_BASE_STYLE,
  BRONZE_SIGNATURE_GHOST_STYLE,
  BRONZE_SIGNATURE_TONE_STYLE,
} from "@/lib/bronze-signature-style";

type TourUpgradesProps = {
  items: TourUpgradeItem[];
  theme?: "default" | "light" | "homeDarkbronzo";
  cardsTheme?: "default" | "darkbronzo";
};

export default function TourUpgrades({ items, theme = "default", cardsTheme = "default" }: TourUpgradesProps) {
  const isLight = theme === "light";
  const isHomeDarkBronzo = theme === "homeDarkbronzo";
  const useDarkBronzoCards = cardsTheme === "darkbronzo";
  const shouldCenterLastCard = items.length % 2 === 1;

  if (isLight) {
    return (
      <section className="relative isolate overflow-hidden bg-[#f4e9dc] py-14 text-[#2E241F] md:py-18">
        <div className="mx-auto w-[min(100%,1140px)] px-4 md:px-6">
          <p className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.16em] text-[#83654B]">
            Tailor-Made Options
          </p>
          <h2 className="mt-3 max-w-[16ch] font-serif text-[2.45rem] font-semibold leading-[0.95] tracking-[-0.015em] text-[#352821] md:text-[3.1rem]">
            Optional Upgrades
          </h2>

          <div className="mt-7 grid gap-3.5 md:grid-cols-2">
            {items.map((item, index) => {
              const isLastCard = index === items.length - 1;
              const lastCardLayoutClass =
                isLastCard && shouldCenterLastCard ? "md:col-span-2 md:mx-auto md:w-[min(100%,760px)]" : "";

              return (
                <article
                  key={item.title}
                  className={`relative overflow-hidden rounded-[1.15rem] border p-5 md:p-6 ${
                    useDarkBronzoCards
                      ? index === 0
                        ? "border-[#d4a56c]/72 bg-[linear-gradient(165deg,rgba(52,20,12,0.97)_0%,rgba(36,14,8,0.97)_58%,rgba(26,10,6,0.98)_100%)] text-[#f5eee4] shadow-[0_0_0_1px_rgba(255,231,201,0.16)_inset,0_20px_40px_rgba(14,5,3,0.32)]"
                        : "border-[#B6925E]/50 bg-[linear-gradient(165deg,rgba(46,18,11,0.95)_0%,rgba(31,13,8,0.95)_60%,rgba(22,10,6,0.97)_100%)] text-[#f5eee4] shadow-[0_0_0_1px_rgba(255,231,201,0.1)_inset,0_16px_32px_rgba(14,5,3,0.26)]"
                      : index === 0
                        ? "border-[#c79a62]/50 bg-[#f5eadf]/92 shadow-[0_0_0_1px_rgba(255,245,231,0.75)_inset,0_16px_30px_rgba(58,31,18,0.12)]"
                        : "border-[#C79A62]/28 bg-[#f3e7d9]/82 shadow-[0_1px_0_rgba(255,244,226,0.72)_inset]"
                  } ${lastCardLayoutClass}`}
                >
                  {useDarkBronzoCards ? (
                    <>
                      <span className="pointer-events-none absolute inset-0 opacity-[0.46] mix-blend-soft-light [background-image:url('/darkbronzo.png')] [background-size:cover] [background-position:center_58%] [background-repeat:no-repeat]" />
                      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,206,145,0.24)_0%,rgba(255,206,145,0)_46%),radial-gradient(circle_at_84%_84%,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0)_56%),linear-gradient(180deg,rgba(10,4,2,0.08)_0%,rgba(10,4,2,0.34)_100%)]" />
                      <span className="pointer-events-none absolute inset-[3px] rounded-[0.95rem] border border-[#e7be87]/34" />
                    </>
                  ) : null}
                  <div className="relative z-[1]">
                    <h3 className={`font-serif text-[1.95rem] leading-tight md:text-[2.05rem] ${useDarkBronzoCards ? "text-[#edd2a8]" : "text-[#3B2B24]"}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-2 max-w-[40ch] font-sans text-[0.98rem] leading-[1.7] ${useDarkBronzoCards ? "text-[#f3e5d2]" : "text-[#4A372F]"}`}>
                      {item.description}
                    </p>
                    <span className={`mt-4 inline-flex rounded-full border px-3 py-1 font-sans text-[0.63rem] font-semibold uppercase tracking-[0.15em] ${useDarkBronzoCards ? "border-[#B6925E]/42 text-[#D6B88E]" : "border-[#B6925E]/42 text-[#7B542E]"}`}>
                      Concierge Upgrade
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (isHomeDarkBronzo) {
    return (
      <section
        className="relative isolate overflow-hidden py-14 text-[#F5EFE7] md:py-18"
        style={BRONZE_SIGNATURE_BASE_STYLE}
      >
        <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_TONE_STYLE} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.48,
            mixBlendMode: "soft-light",
            backgroundImage: "url('/darkbronzo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(198,146,87,0.17)_0%,rgba(198,146,87,0)_44%),radial-gradient(circle_at_84%_84%,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0)_58%),linear-gradient(180deg,rgba(9,4,2,0.12)_0%,rgba(9,4,2,0.44)_100%)]" />
        <div className="pointer-events-none absolute -right-[14%] top-[18%] hidden h-[62%] w-[34%] rounded-[50%] border border-[#B6925E]/14 md:block" />
        <div className="pointer-events-none absolute -right-[12.7%] top-[14%] hidden h-[62%] w-[34%] rounded-[50%] border border-[#B6925E]/10 md:block" />

        <div className="relative z-[1] mx-auto w-[min(100%,1140px)] px-4 md:px-6">
          <p className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.16em] text-[#D6B88E]">
            Tailor-Made Options
          </p>
          <h2 className="mt-3 max-w-[16ch] font-serif text-[2.45rem] font-semibold leading-[0.95] tracking-[-0.015em] text-[#F5EFE7] md:text-[3.1rem]">
            Optional Upgrades
          </h2>

          <div className="mt-7 grid gap-3.5 md:grid-cols-2">
            {items.map((item, index) => {
              const isLastCard = index === items.length - 1;
              const lastCardLayoutClass =
                isLastCard && shouldCenterLastCard ? "md:col-span-2 md:mx-auto md:w-[min(100%,760px)]" : "";

              return (
                <article
                  key={item.title}
                  className={`relative overflow-hidden rounded-[1.2rem] border border-[#d9c7b0]/86 bg-[#f5eee4]/97 p-5 shadow-[0_0_0_1px_rgba(255,250,241,0.68)_inset,0_14px_28px_rgba(15,6,4,0.22)] md:p-6 ${lastCardLayoutClass}`}
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-[0.42]"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, rgba(152,126,93,0.075) 0px, rgba(152,126,93,0.075) 1px, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 7px)",
                    }}
                  />
                  <span className="pointer-events-none absolute inset-[1px] rounded-[1.08rem] border border-[#eee0cf]/74" />

                  <div className="relative z-[1]">
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[#ceb397]/74 bg-[#f4eadc]/94 px-2 text-[0.98rem] font-semibold text-[#9a7a57]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-serif text-[2.05rem] leading-[0.96] tracking-[-0.01em] text-[#3B2B24] md:text-[2.16rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] font-sans text-[0.98rem] leading-[1.58] text-[#67584d]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative isolate overflow-hidden py-14 text-[#F5EFE7] md:py-18"
      style={BRONZE_SIGNATURE_BASE_STYLE}
    >
      <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_TONE_STYLE} />
      <div className="pointer-events-none absolute inset-0" style={BRONZE_SIGNATURE_GHOST_STYLE} />
      <div className="pointer-events-none absolute -right-[14%] top-[18%] hidden h-[62%] w-[34%] rounded-[50%] border border-[#B6925E]/14 md:block" />
      <div className="pointer-events-none absolute -right-[12.7%] top-[14%] hidden h-[62%] w-[34%] rounded-[50%] border border-[#B6925E]/10 md:block" />

      <div className="relative z-[1] mx-auto w-[min(100%,1140px)] px-4 md:px-6">
        <p className="font-sans text-[0.67rem] font-semibold uppercase tracking-[0.16em] text-[#D6B88E]">
          Tailor-Made Options
        </p>
        <h2 className="mt-3 max-w-[16ch] font-serif text-[2.45rem] font-semibold leading-[0.95] tracking-[-0.015em] text-[#F5EFE7] md:text-[3.1rem]">
          Optional Upgrades
        </h2>

        <div className="mt-7 grid gap-3.5 md:grid-cols-2">
          {items.map((item, index) => {
            const isLastCard = index === items.length - 1;
            const lastCardLayoutClass =
              isLastCard && shouldCenterLastCard ? "md:col-span-2 md:mx-auto md:w-[min(100%,760px)]" : "";

            return (
              <article
                key={item.title}
                className={`rounded-[1.15rem] border p-5 md:p-6 ${
                  index === 0
                    ? "border-[#c79a62]/50 bg-[linear-gradient(180deg,rgba(57,30,18,0.78)_0%,rgba(39,18,11,0.72)_100%)] shadow-[0_0_0_1px_rgba(255,231,201,0.09)_inset,0_18px_38px_rgba(15,6,4,0.3)]"
                    : "border-[#B6925E]/36 bg-[#2B140C]/56 shadow-[0_0_0_1px_rgba(255,231,201,0.05)_inset]"
                } ${lastCardLayoutClass}`}
              >
                <h3 className="font-serif text-[1.95rem] leading-tight text-[#F5EFE7] md:text-[2.05rem]">{item.title}</h3>
                <p className="mt-2 max-w-[40ch] font-sans text-[0.98rem] leading-[1.7] text-[#E9DCCD]">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex rounded-full border border-[#B6925E]/42 px-3 py-1 font-sans text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-[#D6B88E]">
                  Concierge Upgrade
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
