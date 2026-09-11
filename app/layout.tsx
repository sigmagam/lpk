import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
