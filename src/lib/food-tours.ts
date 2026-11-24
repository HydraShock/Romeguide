export const foodTourCities = ["Rome", "Florence", "Venice"] as const;

type FoodTourCity = (typeof foodTourCities)[number];

type TourPhoto = {
  src: string;
  alt: string;
};

export type FoodTour = {
  slug: string;
  city: FoodTourCity;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  sourcePath: string;
  hero: TourPhoto;
  detail: TourPhoto;
  highlights: { title: string; description: string }[];
  planningNote?: string;
};

export const FOOD_TOURS_PATH = "/food-tours";
export const FOOD_BOOKING_URL = "https://sweetandsaltytours.com/booking/";

function photo(file: string, alt: string): TourPhoto {
  return { src: `/images/food-tours/${file}.webp`, alt };
}

// Photos and tour details come from the linked Sweet & Salty tour pages.
export const foodTours: FoodTour[] = [
  {
    slug: "rome-food-tour",
    city: "Rome",
    title: "Rome Food Tour",
    description: "Taste Roman street food, classic pasta and artisan gelato on a private walk through the historic center.",
    duration: "2.5–3.5 hours",
    schedule: "Morning or midday",
    sourcePath: "/rome-food-tour/",
    hero: photo("rome-pasta", "Plated Roman pasta tastings"),
    detail: photo("rome-market", "Produce stalls at a Rome market"),
    highlights: [
      { title: "Campo de’ Fiori and Trastevere", description: "Walk between tasting stops in the historic center and hear how neighborhood markets and family businesses shape Roman cooking." },
      { title: "Roman pasta and street food", description: "Get to know dishes such as cacio e pepe, carbonara and amatriciana. Stops can include a bakery, a butcher’s shop and a trattoria." },
      { title: "A final scoop of gelato", description: "End on the sweeter side at an artisan gelateria, after sampling savory specialties and Italian wine along the way." },
    ],
    planningNote: "Gluten-free and lactose-free options are listed for this tour. Mention any allergies or dietary needs when you send the request so the team can confirm what it can accommodate.",
  },
  {
    slug: "rome-dessert-tour",
    city: "Rome",
    title: "Rome Sweet Tour",
    description: "Follow Rome’s sweet traditions through the historic center, with tiramisù, handmade pastries, chocolate and artisan gelato.",
    duration: "2 hours",
    schedule: "Morning or afternoon",
    sourcePath: "/sweet-tour/",
    hero: photo("rome-gelato", "Trays of gelato in a Rome gelateria"),
    detail: photo("rome-chocolate", "Assorted chocolates in a confectioner’s display"),
    highlights: [
      { title: "Pastry and chocolate stops", description: "Visit sweet shops in the historic center and find out how simple ingredients become the pastries and chocolates locals come back for." },
      { title: "Tiramisù and Roman dessert traditions", description: "Taste familiar Italian desserts with a guide who can explain what to look for and how each stop fits into everyday life in Rome." },
      { title: "Artisan gelato", description: "Compare flavors and learn how different ingredients and preparation methods change the texture of a scoop." },
    ],
  },
  {
    slug: "rome-wine-tasting-tour",
    city: "Rome",
    title: "Rome Wine Tour",
    description: "Join a private sommelier-led tasting at Roman wine bars and explore Italian wines through aperitivo pairings.",
    duration: "About 2.5 hours",
    schedule: "Afternoon",
    sourcePath: "/wine-tour/",
    hero: photo("rome-wine-tasting", "Italian wine being tasted alongside food pairings"),
    detail: photo("rome-wine-bar", "Wine glasses in a Rome wine bar"),
    highlights: [
      { title: "Wine bars with a sommelier", description: "Visit Roman enoteche and talk through the regions, producers and styles behind what you taste." },
      { title: "Three to seven wines by arrangement", description: "Build a tasting around styles you want to explore, from sparkling wine to reds and dessert wines. Ask in advance about specific regions or vintages." },
      { title: "Aperitivo pairings", description: "Taste how Italian wines go with cheeses, cured meats, bread and fruit, and take home ideas for your own aperitivo." },
    ],
    planningNote: "This experience is for guests aged 18 and over. For a group that includes children, consider the Rome Food Tour or Rome Sweet Tour.",
  },
  {
    slug: "florence-food-tour",
    city: "Florence",
    title: "Florence Food Tour",
    description: "Walk through central Florence with a local food guide and taste Tuscan cheeses, cured meats, Florentine dishes and wine.",
    duration: "2.5–3.5 hours",
    schedule: "Morning or midday",
    sourcePath: "/florence-food-tour/",
    hero: photo("florence-tuscan-sandwich", "A filled Tuscan sandwich on the Florence food tour"),
    detail: photo("florence-tasting", "A Tuscan food tasting served in a terracotta bowl"),
    highlights: [
      { title: "A covered market in Florence", description: "Meet vendors and see the ingredients they use while your guide explains how the market fits into the city’s food culture." },
      { title: "Tuscan flavors between Renaissance streets", description: "Pause for cheeses, salami and Florentine specialties between the old lanes, piazzas and palaces of the city center." },
      { title: "Wine in a historic cellar", description: "Taste Tuscan wine in a cellar setting and learn how local wine and food work together." },
    ],
  },
  {
    slug: "venice-bacaro-street-food-tour",
    city: "Venice",
    title: "Venice Bacarò Street Food Tour",
    description: "Visit traditional Venice wine bars for cicchetti and regional drinks on a guided walk through San Polo and Dorsoduro.",
    duration: "2.5–3.5 hours",
    schedule: "Morning or midday",
    sourcePath: "/venice-food-tour/",
    hero: photo("venice-cicchetti", "Venetian cicchetti on slices of bread"),
    detail: photo("venice-bacaro", "Cicchetti prepared at a Venetian bacarò counter"),
    highlights: [
      { title: "How to order at a bacarò", description: "Learn the rhythm of these neighborhood wine bars, from choosing small bites at the counter to ordering an ombra, a small glass of wine." },
      { title: "Venetian small plates", description: "Depending on the kitchen that day, tastings may include polenta with seafood, cuttlefish or preparations made with preserved cod." },
      { title: "San Polo and Dorsoduro", description: "Walk along canals and narrow lanes between stops. Choose this route when you want the wine bars and tastings as the focus of the tour." },
    ],
  },
  {
    slug: "venice-bacaro-market-food-tour",
    city: "Venice",
    title: "Venice Bacarò Market & Food Tour",
    description: "Visit a fresh market in central Venice before tasting cicchetti and regional drinks at traditional bacari.",
    duration: "3–3.5 hours",
    schedule: "10 am, Tuesday to Saturday",
    sourcePath: "/venice-food-tour/",
    hero: photo("venice-rialto", "Historic waterfront market buildings along a Venetian canal"),
    detail: photo("venice-bacaro", "Venetian cicchetti lined up at the counter"),
    highlights: [
      { title: "A morning at the fresh market", description: "Start among stalls selling seasonal produce, fish and other ingredients. Your guide explains what the vendors have on display and how it is used in local kitchens." },
      { title: "From market stalls to the bacarò counter", description: "See how the ingredients you’ve been talking about show up in cicchetti, from seafood toppings to soft polenta." },
      { title: "Regional drinks along the route", description: "Pause for Venetian wine-bar tastings as you walk between markets, canals and back streets. This version starts in the morning to catch the market." },
    ],
    planningNote: "Select the Bacarò Market & Street Food option on the booking form if you want the market visit included.",
  },
  {
    slug: "venice-dessert-tour",
    city: "Venice",
    title: "Venice Sweet Tour",
    description: "Explore Venetian pastry shops, taste local cookies and traditional cakes, and finish with homemade gelato.",
    duration: "2 hours",
    schedule: "10 am, daily",
    sourcePath: "/venice-sweet-tour/",
    hero: photo("venice-pastries", "Traditional pastries dusted with sugar in a Venetian shop"),
    detail: photo("venice-gelato", "Gelato on display in a Venice gelateria"),
    highlights: [
      { title: "Venetian pastry shops", description: "Sample traditional sweets at local bakeries and learn which treats are associated with Venice and its history." },
      { title: "Coffee, chocolate and cookies", description: "Try the pairings that make a pastry stop feel Venetian, from cookies with Italian coffee to a cup of hot chocolate." },
      { title: "Homemade gelato", description: "Finish at a gelateria after a morning of sweet stops through the city." },
    ],
  },
];

export function foodTourPath(slug: string) {
  return `${FOOD_TOURS_PATH}/${slug}`;
}
