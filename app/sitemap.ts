import { MetadataRoute } from "next";
import { programs } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lpkpms.my.id";

  const publicRoutes = [
    "",
    "/tentang-kami",
    "/program",
    "/kurikulum",
    "/keunggulan",
    "/legalitas",
    "/lokasi",
    "/faq",
    "/kontak",
    "/dashboard",
    "/dashboard/peserta",
    "/dashboard/program",
    "/dashboard/kurikulum",
    "/dashboard/legalitas",
    "/dashboard/faq",
  ];

  const programRoutes = programs.map((p) => `/program/${p.slug}`);

  const allRoutes = [...publicRoutes, ...programRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : route.startsWith("/dashboard") ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/program") ? 0.9 : route.startsWith("/dashboard") ? 0.8 : 0.7,
  }));
}
