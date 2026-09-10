import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lpkpms.my.id";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/yusuf", "/yusuf/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
