import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://lpkpms.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LPK Panca Multiguna Sukses Karawang | Pelatihan Kerja ke Jepang",
  description:
    "LPK Panca Multiguna Sukses Karawang adalah Lembaga Pelatihan Kerja resmi terdaftar di Kementerian Ketenagakerjaan RI (VIN: 2001321506), melatih dan mempersiapkan calon tenaga kerja ke Jepang melalui pelatihan bahasa, keterampilan kerja, kedisiplinan, dan budaya.",
  keywords: [
    "LPK Panca Multiguna Sukses Karawang",
    "LPK PMS Karawang",
    "Pelatihan Kerja ke Jepang Karawang",
    "Magang ke Jepang Karawang",
    "Tokutei Ginou Karawang",
    "Bahasa Jepang Karawang",
    "LPK Resmi Kemnaker Karawang",
    "VIN 2001321506",
    "lpkpms.my.id"
  ],
  authors: [{ name: "LPK Panca Multiguna Sukses Karawang", url: siteUrl }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/images/logo.png", sizes: "640x640", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "LPK Panca Multiguna Sukses Karawang | Pelatihan Kerja ke Jepang",
    description: "Lembaga Pelatihan Kerja terdaftar resmi di Kemnaker RI untuk persiapan program pemagangan dan kerja ke Jepang.",
    url: siteUrl,
    siteName: "LPK Panca Multiguna Sukses Karawang",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 640,
        height: 640,
        alt: "Logo Resmi LPK Panca Multiguna Sukses Karawang",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "LPK Panca Multiguna Sukses Karawang | Pelatihan Kerja ke Jepang",
    description: "Lembaga Pelatihan Kerja terdaftar resmi di Kemnaker RI untuk persiapan kerja ke Jepang.",
    images: [`${siteUrl}/images/logo.png`],
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
  themeColor: "#0B1727",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: "LPK Panca Multiguna Sukses Karawang",
    alternateName: "LPK PMS Karawang",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.png`,
      width: 640,
      height: 640,
    },
    image: `${siteUrl}/images/logo.png`,
    description:
      "Lembaga Pelatihan Kerja resmi terdaftar di Kementerian Ketenagakerjaan RI (VIN: 2001321506), melatih dan mempersiapkan calon tenaga kerja ke Jepang.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Utama Pesona Cengkong Asri 1 Blk. C7 No.2-3, Pancawati, Kec. Purwasari",
      addressLocality: "Karawang",
      addressRegion: "Jawa Barat",
      postalCode: "41351",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6285692923642",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "Japanese", "English"],
    },
    sameAs: [
      "https://www.instagram.com/lpkpmskarawang",
      "https://www.tiktok.com/@lpk.pms.karawang19",
      "https://whatsapp.com/channel/0029Vb6zaUsISTkPcksxFG0f",
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Direct HTML Favicon & Search Engine Links */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="googlec327dfc83c294016" />

        {/* Google Structured Data / JSON-LD for Google Search Knowledge & Logo Display */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col selection:bg-navy-900 selection:text-white">
        {/* Hidden Translation Mount Element */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Sync Saved Language Cookie Before Page Interactive */}
        <Script
          id="google-translate-cookie-sync"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('lpk_pms_selected_lang');
                  if (saved && saved !== 'id') {
                    var gtCode = saved === 'zh' ? 'zh-CN' : saved;
                    document.cookie = 'googtrans=/id/' + gtCode + '; path=/;';
                    if (window.location.hostname) {
                      document.cookie = 'googtrans=/id/' + gtCode + '; domain=' + window.location.hostname + '; path=/;';
                      document.cookie = 'googtrans=/id/' + gtCode + '; domain=.' + window.location.hostname + '; path=/;';
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />

        {/* Translation Engine Callback & Script */}
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.googleTranslateElementInit = function() {
                try {
                  new google.translate.TranslateElement({
                    pageLanguage: 'id',
                    includedLanguages: 'id,ja,en,de,fr,ko,zh-CN,es,ar,nl',
                    autoDisplay: false
                  }, 'google_translate_element');
                } catch(e) {}
              };
            `,
          }}
        />
        <Script
          id="google-translate-engine"
          strategy="afterInteractive"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />

        {children}
      </body>
    </html>
  );
}
