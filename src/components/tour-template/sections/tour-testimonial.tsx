import Image from "next/image";
import type { TourTestimonialData } from "../types";
import LightCreamLinework from "./light-cream-linework";

type TourTestimonialProps = {
  testimonial: TourTestimonialData;
  lightTheme?: "default" | "tivoliUnified";
};

export default function TourTestimonial({ testimonial, lightTheme = "default" }: TourTestimonialProps) {
  const useTivoliUnified = lightTheme === "tivoliUnified";

  return (
    <section className={`relative isolate overflow-hidden py-16 md:py-20 ${useTivoliUnified ? "bg-[#f9f1e9]" : "bg-[#F4E9DC]"}`}>
      {useTivoliUnified ? (
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

      <div className="relative mx-auto w-[min(100%,1160px)] px-4 md:px-6">
        <div className="pointer-events-none absolute inset-x-[14%] bottom-2 h-14 rounded-[999px] bg-[radial-gradient(circle,rgba(143,91,47,0.22)_0%,rgba(143,91,47,0)_72%)] blur-sm" />

        <article className="relative mx-auto w-full max-w-[980px] overflow-hidden rounded-[1.55rem] border border-[#B6925E]/50 bg-[linear-gradient(165deg,rgba(53,27,17,0.98)_0%,rgba(42,20,12,0.98)_62%,rgba(33,15,10,0.99)_100%)] p-7 text-[#F5EFE7] shadow-[0_0_0_1px_rgba(255,231,201,0.08)_inset,0_28px_58px_rgba(16,7,4,0.32)] md:p-10 lg:p-11">
          <Image
            src="/pisellazzo.png"
            alt=""
            fill
            aria-hidden
            sizes="(max-width: 1024px) 100vw, 78vw"
            className="pointer-events-none object-cover object-[60%_52%] opacity-[0.42]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(20,8,5,0.9)_0%,rgba(29,12,8,0.58)_24%,rgba(29,12,8,0.54)_76%,rgba(20,8,5,0.9)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,4,2,0.56)_0%,rgba(12,4,2,0.22)_44%,rgba(12,4,2,0.58)_100%)]" />
          <div className="pointer-events-none absolute inset-x-[10%] top-0 h-18 bg-[radial-gradient(circle_at_50%_0%,rgba(214,162,100,0.26)_0%,rgba(214,162,100,0)_72%)]" />

          <p className="relative font-serif text-[2.7rem] leading-none text-[#D6B88E] md:text-[3.05rem]">&ldquo;</p>
          <blockquote className="relative mt-2 max-w-[34ch] font-serif text-[1.76rem] leading-[1.12] tracking-[-0.01em] text-[#F4EDE3] md:text-[2.15rem]">
            {testimonial.quote}
          </blockquote>

          <footer className="relative mt-7 border-t border-[#B6925E]/28 pt-4">
            <p className="font-sans text-[1rem] font-semibold text-[#F0E3D4] md:text-[1.04rem]">
              {testimonial.name}
            </p>
            <p className="mt-1 font-sans text-[0.84rem] text-[#D6B88E] md:text-[0.88rem]">
              {testimonial.context}
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}
