import VerticalTourCard from "./vertical-tour-card";
import styles from "./wobble-card-demo.module.css";

const tours = [
  {
    label: "Ancient Wonders",
    title: "Ancient Rome Tour",
    description:
      "Colosseum, Forum, and imperial landmarks in a private journey led by licensed local guides.",
    image: "/images/tours/ancient-rome/hero-ancient-rome-private-tour-colosseum-warm-light.webp",
    alt: "Colosseum and Roman Forum at sunset",
    imagePosition: "52% 44%",
    monuments: ["Colosseo", "Foro Romano", "Palatino"],
    stops: 9,
    highlights: 4,
    href: "/tours/ancient-rome",
  },
  {
    label: "Vatican Icons",
    title: "Vatican Tour",
    description:
      "Vatican Museums, Sistine Chapel, and St. Peter's with curated timing and seamless flow.",
    image: "/images/tours/vatican/hero-vatican-private-tour-st-peters-basilica-dusk.webp",
    alt: "St Peter's Basilica and Rome skyline at dusk",
    imagePosition: "72% 41%",
    monuments: ["Sistine Chapel", "San Pietro", "Musei Vaticani"],
    stops: 8,
    highlights: 4,
    href: "/tours/vatican",
  },
  {
    label: "Faith & Heritage",
    title: "Christian Rome Tour",
    description: "Basilicas and sacred landmarks with stories of early Christian Rome.",
    image: "/images/tours/christian-rome/hero-christian-rome-tour-basilica-facade.webp",
    alt: "Historic dome and basilica architecture in Rome",
    imagePosition: "66% 39%",
    monuments: ["S. Maria Maggiore", "S. Giovanni", "S. Clemente"],
    stops: 7,
    highlights: 3,
    href: "/tours/christian-rome",
  },
  {
    label: "City Strolls",
    title: "Rome Walking Tours",
    description: "Elegant piazzas, hidden alleys, and Roman street life at a relaxed pace.",
    image: "/images/tours/walking/hero-rome-private-walking-tour-pantheon-dusk.webp",
    alt: "Roman riverside and bridges during golden hour",
    imagePosition: "84% 43%",
    monuments: ["Piazza Navona", "Pantheon", "Campo de' Fiori"],
    stops: 6,
    highlights: 3,
    href: "/tours/walking-tours",
  },
  {
    label: "Family Moments",
    title: "Family-Friendly Tours",
    description: "Flexible routes, engaging stops, and comfortable pacing for every age.",
    image: "/images/tours/family/hero-family-friendly-rome-tour-colosseum-visit.webp",
    alt: "Warm Rome skyline with spacious route for families",
    imagePosition: "73% 43%",
    monuments: ["Villa Borghese", "Colosseo", "Circo Massimo"],
    stops: 6,
    highlights: 2,
    href: "/tours/family-friendly",
  },
  {
    label: "Design & Legacy",
    title: "Art & Architecture",
    description:
      "Pantheon perspectives, baroque interiors, and Rome's iconic architectural details.",
    image: "/images/tours/art-architecture/hero-rome-art-architecture-tour-pantheon-dome.webp",
    alt: "Roman architecture and river view at golden hour",
    imagePosition: "78% 40%",
    monuments: ["Pantheon", "Ara Pacis", "Piazza Venezia"],
    stops: 8,
    highlights: 4,
    href: "/tours/art-architecture",
  },
] as const;

export default function WobbleCardDemo() {
  return (
    <div className={styles.cardsLayout}>
      {tours.map((tour) => (
        // Home cards expose stable anchor ids so inner-page "Related Tours" links can target them.
        <VerticalTourCard
          key={tour.title}
          label={tour.label}
          title={tour.title}
          description={tour.description}
          image={tour.image}
          alt={tour.alt}
          imagePosition={tour.imagePosition}
          monuments={tour.monuments}
          stops={tour.stops}
          highlights={tour.highlights}
          href={tour.href}
          anchorId={tour.href.startsWith("#") ? tour.href.slice(1) : undefined}
          variant="featured"
        />
      ))}
    </div>
  );
}
