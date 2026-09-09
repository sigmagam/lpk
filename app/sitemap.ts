import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lpk-pms-karawang.vercel.app",
      lastModified: new Date(),
    },
  ];
}
