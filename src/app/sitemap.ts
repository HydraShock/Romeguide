import type { MetadataRoute } from "next";
import { FOOD_TOURS_PATH, foodTourPath, foodTours } from "@/lib/food-tours";
import { getSiteUrl } from "@/lib/site-url";

const existingPaths = [
  "/", "/who-we-are", "/booking-contact", "/tours", "/tours-in-italy",
  ...["ancient-rome", "vatican", "christian-rome", "walking-tours", "family-friendly", "art-architecture", "day-trips-from-rome"].map((slug) => `/tours/${slug}`),
  ...["ostia-antica", "tivoli", "pompeii-amalfi-naples", "roman-hill-towns", "orvieto-umbria", "cerveteri-etruscans"].map((slug) => `/tours/day-trips-from-rome/${slug}`),
  ...["venice-tour", "florence-tuscany-tour", "naples-amalfi-coast-tour", "milan-tour", "sicily-tours", "orvieto-umbria-tour"].map((slug) => `/tours-in-italy/private-${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [...existingPaths, FOOD_TOURS_PATH, ...foodTours.map((tour) => foodTourPath(tour.slug))].map((path) => ({
    url: new URL(path, base).href,
  }));
}
