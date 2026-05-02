import VerticalTourCard from "./vertical-tour-card";
import styles from "./wobble-card-demo.module.css";

const tours = [
  {
    label: "Ancient Wonders",
    title: "Ancient Rome Tour",
    description:
      "Explore the Colosseum, Roman Forum, and imperial landmarks on a private tour with a licensed local guide.",
    image: "/images/tours/ancient-rome/hero-ancient-rome-private-tour-colosseum-warm-light.webp",
    alt: "Colosseum and Roman Forum at sunset",
    imagePosition: "52% 44%",
    monuments: ["Colosseo", "Foro Romano", "Palatino"],
    href: "/tours/ancient-rome",
  },
  {
    label: "Vatican Icons",
    title: "Vatican Tour",
    description:
      "Enjoy a private Vatican tour of the Museums, Sistine Chapel, and St. Peter's at a relaxed, well-planned pace.",
    image: "/images/tours/vatican/hero-vatican-private-tour-st-peters-basilica-dusk.webp",
    alt: "St Peter's Basilica and Rome skyline at dusk",
    imagePosition: "72% 41%",
    monuments: ["Sistine Chapel", "San Pietro", "Musei Vaticani"],
    href: "/tours/vatican",
  },
  {
    label: "Faith & Heritage",
    title: "Christian Rome Tour",
    description: "Visit Rome's great basilicas and sacred landmarks through the stories of early Christianity.",
    image: "/images/tours/christian-rome/hero-christian-rome-tour-basilica-facade.webp",
    alt: "Historic dome and basilica architecture in Rome",
    imagePosition: "66% 39%",
    monuments: ["S. Maria Maggiore", "S. Giovanni", "S. Clemente"],
    href: "/tours/christian-rome",
  },
  {
    label: "City Strolls",
    title: "Rome Walking Tours",
    description: "Discover beautiful piazzas, hidden alleys, and local street life on a private walking tour in Rome.",
    image: "/images/tours/walking/hero-rome-private-walking-tour-pantheon-dusk.webp",
    alt: "Roman riverside and bridges during golden hour",
    imagePosition: "84% 43%",
    monuments: ["Piazza Navona", "Pantheon", "Campo de' Fiori"],
    href: "/tours/walking-tours",
  },
  {
    label: "Family Moments",
    title: "Family-Friendly Tours",
    description: "Flexible routes, engaging stops, and family-friendly pacing designed for travelers of every age.",
    image: "/images/tours/family/hero-family-friendly-rome-tour-colosseum-visit.webp",
    alt: "Warm Rome skyline with spacious route for families",
    imagePosition: "73% 43%",
    monuments: ["Villa Borghese", "Colosseo", "Circo Massimo"],
    href: "/tours/family-friendly",
  },
  {
    label: "Design & Legacy",
    title: "Art & Architecture",
    description:
      "From the Pantheon to baroque masterpieces, explore Rome's art and architecture with a private local guide.",
    image: "/images/tours/art-architecture/hero-rome-art-architecture-tour-pantheon-dome.webp",
    alt: "Roman architecture and river view at golden hour",
    imagePosition: "78% 40%",
    monuments: ["Pantheon", "Ara Pacis", "Piazza Venezia"],
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
          href={tour.href}
          anchorId={tour.href.startsWith("#") ? tour.href.slice(1) : undefined}
          variant="featured"
        />
      ))}
    </div>
  );
}
