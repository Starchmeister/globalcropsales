import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://globalcropsales.com";
  return {
    rules: {
      // all bots allowed
      userAgent: "*",
      allow: [
        "/",
        "/products/beans",
        "/products/macadamia-nuts",
        "/products/peanuts",
      ],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
