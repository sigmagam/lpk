"use client";

import React, { useState, useRef, MouseEvent, useCallback } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  BookOpen,
  HelpCircle,
  Award,
  Phone,
  MapPin,
  Layers,
  Building2,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Search,
  Globe
} from "lucide-react";

export interface SitelinkItem {
  name: string;
  href: string;
  desc: string;
  category: "priority" | "alphabetical";
  alphaTag: string;
  icon: React.ReactNode;
}

export const searchResultSitelinksData: SitelinkItem[] = [
  // 1 & 2: PRIORITY LINKS (Utama)
  {
    name: "Legalitas Resmi Lembaga",
    href: "/legalitas",
    desc: "VIN Kemnaker RI 2001321506, Kemenkumham, Ditjen AHU, Disnaker Karawang, & OSS.",
    category: "priority",
    alphaTag: "★ Prioritas 1",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
  },
  {
    name: "Kurikulum Pelatihan Jepang",
    href: "/kurikulum",
    desc: "Roadmap 3 fase: Materi Dasar N5, Materi Inti N4 & Kaisha, dan Materi Khusus Industri.",
    category: "priority",
    alphaTag: "★ Prioritas 2",
    icon: <GraduationCap className="w-4 h-4 text-vermilion-600" />,
  },

  // 3-10: ALPHABETICAL ORDER (B, F, K, K, L, P, T, T)
  {
    name: "Bahasa Jepang (N5 - N3)",
    href: "/program/bahasa-jepang",
    desc: "Bimbingan intensif tata bahasa, hiragana, katakana, kanji, kaiwa, dan try out JLPT/JFT.",
    category: "alphabetical",
    alphaTag: "B",
    icon: <BookOpen className="w-4 h-4 text-primary-700" />,
  },
  {
    name: "FAQ & Tanya Jawab Lengkap",
    href: "/faq",
    desc: "Jawaban resmi seputar biaya, syarat usia, tahapan seleksi, dan alur keberangkatan ke Jepang.",
    category: "alphabetical",
    alphaTag: "F",
    icon: <HelpCircle className="w-4 h-4 text-amber-600" />,
  },
  {
    name: "Keunggulan Pelatihan LPK PMS",
    href: "/keunggulan",
    desc: "Kurikulum terkini kaisha, instruktur profesional bersertifikat, & sarana balai memadai.",
    category: "alphabetical",
    alphaTag: "K",
    icon: <Award className="w-4 h-4 text-purple-600" />,
  },
  {
    name: "Kontak & Saluran WhatsApp",
    href: "/kontak",
    desc: "Konsultasi admin WhatsApp resmi, Channel Info Job PMS Pusat, Instagram, dan TikTok.",
    category: "alphabetical",
    alphaTag: "K",
    icon: <Phone className="w-4 h-4 text-emerald-600" />,
  },
  {
    name: "Lokasi & Peta Balai Karawang",
    href: "/lokasi",
    desc: "Petunjuk rute transportasi dan peta Google Maps balai pelatihan di Purwasari, Karawang.",
    category: "alphabetical",
    alphaTag: "L",
    icon: <MapPin className="w-4 h-4 text-rose-600" />,
  },
  {
    name: "Program Pelatihan Kerja",
    href: "/program",
    desc: "Direktori lengkap 5 program pembekalan: Pemagangan, SSW, Bahasa, Budaya, & Kompetensi.",
    category: "alphabetical",
    alphaTag: "P",
    icon: <Layers className="w-4 h-4 text-blue-600" />,
  },
  {
    name: "Tentang Kami & Profil PMS",
    href: "/tentang-kami",
    desc: "Sejarah berdirinya LPK sejak 2018, pimpinan Yusuf Bachtiar, S.M, dan 200+ alumni di Jepang.",
    category: "alphabetical",
    alphaTag: "T",
    icon: <Building2 className="w-4 h-4 text-slate-700" />,
  },
  {
    name: "Tokutei Ginou (SSW) Jepang",
    href: "/tokutei-ginou",
    desc: "Visa kerja formal gaji 180rb–250rb JPY/bulan, 14 sektor industri, dan bebas tes bagi eks-magang.",
    category: "alphabetical",
    alphaTag: "T",
    icon: <Sparkles className="w-4 h-4 text-vermilion-600" />,
  },
];

function SitelinkCard3D({ item }: { item: SitelinkItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;
    setRotation({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  }, []);

  const isPriority = item.category === "priority";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative select-none"
      style={{ perspective: "900px" }}
    >
      <Link
        href={item.href}
        className={`block p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
          isPriority
            ? "bg-white border-vermilion-300/80 shadow-xs hover:border-vermilion-600"
            : "bg-white border-slate-200/90 shadow-xs hover:border-navy-950/40"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(10px) translateY(-3px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
          boxShadow: isHovered
            ? isPriority
              ? "0 16px 28px -6px rgba(200, 16, 46, 0.18), 0 8px 12px -4px rgba(11, 23, 39, 0.06)"
              : "0 16px 28px -6px rgba(11, 23, 39, 0.14), 0 8px 12px -4px rgba(11, 23, 39, 0.06)"
            : "0 2px 4px rgba(11, 23, 39, 0.03)",
        }}
      >
        {/* Top line indicator */}
        <div className="flex items-center justify-between gap-2 mb-2.5" style={{ transform: isHovered ? "translateZ(18px)" : "translateZ(0px)" }}>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
              {item.icon}
            </span>
            <span
              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                isPriority
                  ? "bg-vermilion-50 text-vermilion-700 border border-vermilion-200"
                  : "bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {item.alphaTag}
            </span>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-navy-950 group-hover:translate-x-0.5 transition-all" />
        </div>

        {/* Title */}
        <div style={{ transform: isHovered ? "translateZ(24px)" : "translateZ(0px)" }}>
          <h4 className="font-heading font-black text-xs sm:text-sm text-navy-950 group-hover:text-vermilion-600 transition-colors line-clamp-1">
            {item.name}
          </h4>
          <p className="text-[11px] text-slate-500 leading-snug mt-1 line-clamp-2">
            {item.desc}
          </p>
        </div>

        {/* URL subtext */}
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="truncate">lpkpms.my.id{item.href}</span>
          <span className="text-emerald-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Kunjungi →</span>
        </div>
      </Link>
    </div>
  );
}

export default function SearchResultSitelinks() {
  return (
    <section
      aria-label="Search Result Sitelinks Google"
      className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 select-none relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-japanese-grid opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 mb-3 shadow-xs">
            <Search className="w-3.5 h-3.5 text-vermilion-600" />
            <span>Google Search Result Sitelinks • Struktur Navigasi Resmi</span>
          </div>

          <h3 className="font-heading font-black text-xl sm:text-2xl text-navy-950 leading-tight">
            Peta Sitelinks Pencarian Resmi LPK PMS Karawang
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Struktur penautan mesin pencari diurutkan dengan prioritas utama pada <strong>Legalitas Resmi</strong> dan <strong>Kurikulum Pelatihan</strong>, diikuti rute pilihan yang disusun secara rapi berdasarkan urutan abjad.
          </p>
        </div>

        {/* Sitelinks Grid (3D Animated) */}
        <nav
          aria-label="Direktori Sitelinks Hasil Pencarian"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4"
        >
          {searchResultSitelinksData.map((item) => (
            <SitelinkCard3D key={item.href} item={item} />
          ))}
        </nav>

        {/* Micro Footer Notice */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            Domain Resmi: <strong className="text-navy-950 font-mono">https://lpkpms.my.id</strong>
          </span>
          <span>
            Terindeks Schema.org <strong className="text-navy-950 font-semibold">WebSite & SiteNavigationElement</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
