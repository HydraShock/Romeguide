import Image from "next/image";
import styles from "./luxury-editorial-tours-section.module.css";

const tourTypes = [
  {
    label: "Private Experiences",
    title: "Groups of All Sizes",
    description:
      "From intimate gatherings to large parties, we design elegant itineraries with seamless pacing, premium logistics, and curated moments across Rome.",
    image: "/editorial-tours/groups-all-sizes.jpg",
  },
  {
    label: "Tailored Comfort",
    title: "Family-Friendly Tours",
    description:
      "Thoughtfully paced routes, engaging storytelling, and child-aware planning create refined family experiences that feel effortless and memorable.",
    image: "/editorial-tours/family-friendly.jpg",
  },
  {
    label: "Curated Discovery",
    title: "Small Groups & Friends",
    description:
      "Perfect for close circles seeking a sophisticated day in Rome, with flexible timing, insider viewpoints, and personalized cultural depth.",
    image: "/editorial-tours/small-groups-friends.jpg",
  },
  {
    label: "Port-to-City Luxury",
    title: "Cruise Passengers",
    description:
      "Efficient, high-touch touring from dock to destination, crafted for limited schedules while preserving the richness of a private Roman journey.",
    image: "/editorial-tours/cruise-passengers.jpg",
  },
] as const;

export default function LuxuryEditorialToursSection() {
  return (
    <section className={`${styles.sectionRoot} py-16 md:py-20 lg:py-24`}>
      <div className={`${styles.sectionContent} mx-auto w-full max-w-[1080px] px-5 md:px-8`}>
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {tourTypes.map((tour, index) => {
            const textLeft = index % 2 === 0;

            return (
              <article
                key={tour.title}
                className={`${styles.row} flex flex-col items-center gap-6 md:gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12`}
              >
                <div
                  className={`order-2 w-full max-w-[500px] text-center lg:text-left ${
                    textLeft ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"
                  }`}
                >
                  <p className="font-sans text-[0.58rem] uppercase tracking-[0.28em] text-[#d8b389]/90 transition-colors duration-300 md:text-[0.65rem]">
                    {tour.label}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-[1.06] text-[#f5efe7] transition-colors duration-300 md:text-[2.4rem] lg:text-[2.8rem]">
                    {tour.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[38ch] font-sans text-[0.92rem] leading-relaxed text-[#e7dbce]/85 transition-colors duration-300 md:text-[0.98rem] lg:mx-0">
                    {tour.description}
                  </p>
                  <span className="mx-auto mt-5 block h-px w-20 bg-gradient-to-r from-[#d8b185]/80 to-transparent lg:mx-0" />
                </div>

                <div
                  className={`order-1 flex w-full justify-center ${
                    textLeft ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"
                  }`}
                >
                  <div
                    className={`${styles.medallion} relative h-56 w-56 rounded-full md:h-64 md:w-64 lg:h-[240px] lg:w-[240px] xl:h-[260px] xl:w-[260px] ${
                      textLeft ? "lg:translate-y-1" : "lg:-translate-y-1"
                    }`}
                  >
                    <span className={styles.haloOuter} />
                    <span className={styles.haloInner} />
                    <span className={styles.borderOuter} />

                    <div className={styles.photoFrame}>
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        sizes="(max-width: 768px) 224px, (max-width: 1200px) 260px, 260px"
                        loading="eager"
                        className={styles.photoImage}
                      />
                      <span className={styles.borderInner} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
