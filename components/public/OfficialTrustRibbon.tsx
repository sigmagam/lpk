"use client";

import { useState, useRef, MouseEvent, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Pause,
  Play,
  Award,
  Building2
} from "lucide-react";

interface AuthorityItem {
  id: string;
  name: string;
  shortName: string;
  authority: string;
  role: string;
  status: string;
  identifier: string;
  logo: string;
  badgeBg: string;
}

const authoritiesList: AuthorityItem[] = [
  {
    id: "kemnaker",
    name: "Kementerian Ketenagakerjaan RI",
    shortName: "Kemnaker RI",
    authority: "Pemerintah Pusat Republik Indonesia",
    role: "Akreditasi Pelatihan & Pemagangan Kerja",
    status: "Terverifikasi Resmi",
    identifier: `VIN: ${siteConfig.vinNumber}`,
    logo: "/images/legalitas/kemnaker.svg",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-300",
  },
  {
    id: "kemenkumham",
    name: "Kementerian Hukum & HAM RI",
    shortName: "Kemenkumham RI",
    authority: "Kementerian Hukum RI",
    role: "Pengesahan Badan Hukum Lembaga",
    status: "Badan Hukum Sah",
    identifier: "SK Menkumham Terbit",
    logo: "/images/legalitas/kemenkumham.svg",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-300",
  },
  {
    id: "ditjen-ahu",
    name: "Ditjen Administrasi Hukum Umum",
    shortName: "DITJEN AHU",
    authority: "Ditjen AHU Kemenkumham",
    role: "Keabsahan Akta & Anggaran Dasar",
    status: "Tercatat di AHU Online",
    identifier: "Sistem AHU Resmi",
    logo: "/images/legalitas/ditjen-ahu.svg",
    badgeBg: "bg-blue-50 text-blue-900 border-blue-300",
  },
  {
    id: "disnaker",
    name: "Dinas Tenaga Kerja Kab. Karawang",
    shortName: "Disnaker Karawang",
    authority: "Pemkab Karawang",
    role: "Izin Operasional Balai Kerja Wilayah",
    status: "Izin Wilayah Aktif",
    identifier: "Wilayah Kab. Karawang",
    logo: "/images/legalitas/disnaker-karawang.svg",
    badgeBg: "bg-green-50 text-green-900 border-green-300",
  },
  {
    id: "oss",
    name: "Lembaga OSS - BKPM Republik Indonesia",
    shortName: "Lembaga OSS",
    authority: "Kementerian Investasi / BKPM",
    role: "Perizinan Berusaha Berbasis Risiko",
    status: "NIB Terbit Efektif",
    identifier: "NIB Resmi RBA",
    logo: "/images/legalitas/lembaga-oss.svg",
    badgeBg: "bg-teal-50 text-teal-900 border-teal-300",
  },
];

function MovingCard3D({ item }: { item: AuthorityItem }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
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

  return (
    <Link
      href="/legalitas"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="shrink-0 w-72 sm:w-80 select-none block p-1 group"
      style={{ perspective: "900px" }}
    >
      <div
        className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm transition-all ease-out h-full flex flex-col justify-between group-hover:border-navy-950/40"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(12px) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
          transitionDuration: isHovered ? "90ms" : "400ms",
          boxShadow: isHovered
            ? "0 20px 35px -8px rgba(11, 23, 39, 0.18), 0 8px 14px -4px rgba(11, 23, 39, 0.08)"
            : "0 2px 6px rgba(11, 23, 39, 0.04)",
        }}
      >
        <div className="space-y-4" style={{ transformStyle: "preserve-3d" }}>
          {/* Top Logo & Status */}
          <div className="flex items-center justify-between gap-3" style={{ transform: isHovered ? "translateZ(24px)" : "translateZ(0px)" }}>
            <div className="w-14 h-14 rounded-2xl bg-white p-1 border-2 border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src={item.logo}
                alt={`Logo Resmi ${item.name}`}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeBg}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>{item.status}</span>
              </span>
              <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {item.identifier}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-1" style={{ transform: isHovered ? "translateZ(18px)" : "translateZ(0px)" }}>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {item.authority}
            </div>
            <h4 className="font-heading font-black text-sm text-navy-950 group-hover:text-vermilion-600 transition-colors line-clamp-1">
              {item.name}
            </h4>
            <p className="text-[11px] text-slate-600 leading-snug line-clamp-2">
              {item.role}
            </p>
          </div>
        </div>

        {/* Card Footer */}
        <div
          className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500"
          style={{ transform: isHovered ? "translateZ(12px)" : "translateZ(0px)" }}
        >
          <span className="font-medium">Resmi Terdaftar</span>
          <span className="inline-flex items-center gap-1 font-bold text-navy-950 group-hover:text-vermilion-600 transition-colors">
            <span>Rincian</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function OfficialTrustRibbon() {
  const [isPlaying, setIsPlaying] = useState(true);

  // Duplicate for seamless 100% infinite marquee loop
  const marqueeItems = [...authoritiesList, ...authoritiesList, ...authoritiesList];

  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200 select-none relative overflow-hidden"
      aria-labelledby="official-legalitas-heading"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 z-10 space-y-10">
        {/* 1. Header (Matching the screenshot exactly) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-vermilion-600" />
            <span className="uppercase tracking-wider">LPK PANCA MULTI GUNA SUKSES</span>
          </div>

          <div className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wide">
            Lembaga Pelatihan Kerja ke Jepang Terdaftar Resmi Kemnaker RI
          </div>

          <h2
            id="official-legalitas-heading"
            className="font-heading font-black text-2xl sm:text-4xl text-navy-950 tracking-tight"
          >
            Legalitas Resmi Kemnaker RI
          </h2>
          <div className="w-20 h-1 bg-vermilion-600 mx-auto rounded-full mt-2" />
        </div>

        {/* 2. Flagship Centerpiece Card (Exact visual from the screenshot) */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-slate-200/90 shadow-lg p-6 sm:p-10 text-center space-y-6 relative overflow-hidden">
          {/* Subtle Ambient Top Accent */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>LEMBAGA PELATIHAN KERJA TERVERIFIKASI</span>
          </div>

          {/* Large VIN Box (Exact from screenshot) */}
          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
              NOMOR REGISTRASI RESMI (VIN)
            </div>

            <div className="inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-navy-950 text-white border-2 border-navy-900 shadow-md">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0" />
              <span className="font-mono text-2xl sm:text-4xl font-black tracking-widest text-emerald-300">
                {siteConfig.vinNumber}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium pt-1">
              Status: <strong className="text-emerald-700">Terdaftar Resmi di Kementerian Ketenagakerjaan RI</strong>
            </p>
          </div>

          {/* Verification Action Button */}
          <div className="pt-2">
            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Verifikasi di Kelembagaan Kemnaker RI</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3. Moving Infinite Marquee (Versi Animasi Gerak) */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>Sertifikasi & Mitra Pengesahan Resmi (Sentuh untuk Pause)</span>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors shadow-2xs cursor-pointer"
                aria-label={isPlaying ? "Jeda animasi gerakan" : "Jalankan animasi gerakan"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-slate-500" />
                    <span>Jeda Gerakan</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-600" />
                    <span>Mulai Gerakan</span>
                  </>
                )}
              </button>

              <Link
                href="/legalitas"
                className="inline-flex items-center gap-1 text-xs font-bold text-navy-950 hover:text-vermilion-600 transition-colors"
              >
                <span>Lihat 5 Dokumen Sah</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Marquee Track with Smooth Left & Right Gradient Shadows */}
          <div className="relative overflow-hidden py-3">
            {/* Left fade shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

            {/* Right fade shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

            {/* Continuous Infinite Scrolling Loop */}
            <div
              className="animate-marquee-legal flex gap-4"
              style={{
                animationPlayState: isPlaying ? "running" : "paused",
              }}
            >
              {marqueeItems.map((item, idx) => (
                <MovingCard3D key={`${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
