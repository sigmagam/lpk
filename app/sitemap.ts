import { MetadataRoute } from "next";
import { programs } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lpk-phi.vercel.app";

  const staticRoutes = [
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
    "/dashboard/pengaturan",
  ];

  const programRoutes = programs.map((p) => `/program/${p.slug}`);

  const allRoutes = [...staticRoutes, ...programRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/dashboard") ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/dashboard") ? 0.7 : 0.8,
  }));
}
