const productionSite = "https://romeguidenet.vercel.app";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    try {
      const url = new URL(configured);
      if (["https:", "http:"].includes(url.protocol)) return url.origin;
    } catch {
      // Use the production origin when the setting is missing or invalid.
    }
  }
  return productionSite;
}
