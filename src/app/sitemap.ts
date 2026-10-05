import { MetadataRoute } from "next";
import { CHAPTERS } from "@/data/novelData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chrono-class-1964.com";

  const staticPages = [
    "",
    "/chapters",
    "/map",
    "/comic",
    "/codex",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const chapterPages = CHAPTERS.map((ch) => ({
    url: `${baseUrl}/chapters/${ch.slug}`,
    lastModified: new Date(ch.releaseDate).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...chapterPages];
}
