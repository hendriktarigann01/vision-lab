import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visionlab.mjsolution.co.id";
  const locales = ["en", "id"]; 

  const routes = ["/", "/about-us", "/services", "/contact-us"];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate URLs for each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
