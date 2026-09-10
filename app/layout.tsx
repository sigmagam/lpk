import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "LPK PMS Karawang | LPK Panca Multi Guna Sukses Karawang",
  description: siteConfig.description,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#b31b1b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
