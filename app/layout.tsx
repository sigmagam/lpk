import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "LPK PMS Karawang | LPK Panca Multi Guna Sukses Karawang",
  description: siteConfig.description,
  robots: { index: true, follow: true },
  openGraph: {
    title: "LPK PMS Karawang | LPK Panca Multi Guna Sukses Karawang",
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#114a92",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}
