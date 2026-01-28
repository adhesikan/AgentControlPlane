import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agentcontrolplane.com";
  const routes = [
    "",
    "/product",
    "/use-cases",
    "/pricing",
    "/security",
    "/docs",
    "/about",
    "/contact",
    "/privacy",
    "/terms"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
