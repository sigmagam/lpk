import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LPK Panca Multiguna Sukses Karawang | Pelatihan Kerja ke Jepang",
  description:
    "LPK Panca Multiguna Sukses Karawang adalah Lembaga Pelatihan Kerja resmi terdaftar di Kementerian Ketenagakerjaan RI, melatih dan mempersiapkan calon tenaga kerja ke Jepang melalui pelatihan bahasa, keterampilan kerja, kedisiplinan, dan budaya.",
  keywords: [
    "LPK Panca Multiguna Sukses Karawang",
    "LPK PMS Karawang",
    "Pelatihan Kerja ke Jepang Karawang",
    "Magang ke Jepang Karawang",
    "Tokutei Ginou Karawang",
    "Bahasa Jepang Karawang",
    "LPK Resmi Kemnaker Karawang",
    "lpkpms.my.id"
  ],
  authors: [{ name: "LPK Panca Multiguna Sukses Karawang" }],
  openGraph: {
    title: "LPK Panca Multiguna Sukses Karawang | Pelatihan Kerja ke Jepang",
    description: "Lembaga Pelatihan Kerja terdaftar resmi di Kemnaker RI untuk persiapan program pemagangan dan kerja ke Jepang.",
    url: "https://lpkpms.my.id",
    siteName: "LPK Panca Multiguna Sukses Karawang",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlec327dfc83c294016",
  },
  other: {
    "google-site-verification": "googlec327dfc83c294016",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1B32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="google-site-verification" content="googlec327dfc83c294016" />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col selection:bg-navy-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
