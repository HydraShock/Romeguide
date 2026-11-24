import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export function foodTourMetadata(title: string, description: string, path: string, image: { src: string; alt: string }): Metadata {
  const url = new URL(path, getSiteUrl()).href;
  const imageUrl = new URL(image.src, url).href;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [{ url: imageUrl, alt: image.alt }] },
    twitter: { card: "summary_large_image", title, description, images: [{ url: imageUrl, alt: image.alt }] },
  };
}
