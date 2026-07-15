import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";

const routes = [
  "",
  "/about-the-book",
  "/download-the-study-guide-and-teachers-guide",
  "/shareyour-family-story",
  "/share-your-art",
  "/how-to-order",
  "/guide-downloads",
  "/for-educators",
  "/events",
  "/map",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
