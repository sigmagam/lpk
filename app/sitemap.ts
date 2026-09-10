import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lpk-pms-karawang.vercel.app";
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/program`, lastModified: new Date() },
    { url: `${baseUrl}/program/tokutei-ginou`, lastModified: new Date() },
    { url: `${baseUrl}/program/magang`, lastModified: new Date() },
    { url: `${baseUrl}/kurikulum`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/lokasi`, lastModified: new Date() },
    { url: `${baseUrl}/kontak`, lastModified: new Date() },
  ];
}
