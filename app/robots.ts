import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Wajib www: apex di-redirect 301 ke www oleh hosting.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lpkpms.my.id";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  };
}
