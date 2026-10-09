import { MetadataRoute } from "next";
import { programs } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lpkpms.my.id";
  const buildDate = new Date();

  const publicRoutes = [
    { route: "", priority: 1.0, freq: "daily" as const },
    { route: "/tokutei-ginou", priority: 0.95, freq: "daily" as const },
    { route: "/program", priority: 0.9, freq: "weekly" as const },
    { route: "/tentang-kami", priority: 0.8, freq: "monthly" as const },
    { route: "/kurikulum", priority: 0.8, freq: "monthly" as const },
    { route: "/kanji-n5", priority: 0.75, freq: "weekly" as const },
    { route: "/keunggulan", priority: 0.7, freq: "monthly" as const },
    { route: "/legalitas", priority: 0.7, freq: "monthly" as const },
    { route: "/lokasi", priority: 0.7, freq: "monthly" as const },
    { route: "/faq", priority: 0.75, freq: "weekly" as const },
    { route: "/kontak", priority: 0.8, freq: "monthly" as const },
  ];

  const programRoutes = programs.map((p) => ({
    route: `/program/${p.slug}`,
    priority: 0.85,
    freq: "monthly" as const,
  }));

  const allRoutes = [...publicRoutes, ...programRoutes];

  return allRoutes.map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: freq,
    priority,
  }));
}
