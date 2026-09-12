"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Building2,
  ArrowRight,
  Award,
  FileCheck2,
  FileText
} from "lucide-react";

interface LogoEntity {
  id: string;
  name: string;
  logo: string;
}

// Official legal logos
const upperLogos: LogoEntity[] = [
  { id: "kemnaker", name: "Kementerian Ketenagakerjaan RI", logo: "/images/legalitas/kemnaker.svg" },
  { id: "kemenkumham", name: "Kementerian Hukum dan HAM RI", logo: "/images/legalitas/kemenkumham.svg" },
  { id: "ditjen-ahu", name: "Ditjen Administrasi Hukum Umum", logo: "/images/legalitas/ditjen-ahu.svg" },
  { id: "pms", name: "LPK Panca Multi Guna Sukses", logo: "/images/logo.png" },
];

const lowerLogos: LogoEntity[] = [
  { id: "disnaker", name: "Dinas Tenaga Kerja Kab. Karawang", logo: "/images/legalitas/disnaker-karawang.svg" },
  { id: "oss", name: "Lembaga OSS - BKPM Republik Indonesia", logo: "/images/legalitas/lembaga-oss.svg" },
  { id: "kemnaker-2", name: "Terverifikasi Kemnaker RI", logo: "/images/legalitas/kemnaker.svg" },
  { id: "kemenkumham-2", name: "Pengayoman Kemenkumham", logo: "/images/legalitas/kemenkumham.svg" },
];

// Duplicate for 100% seamless infinite loop
const row1Items = [...upperLogos, ...upperLogos, ...upperLogos, ...upperLogos];
const row2Items = [...lowerLogos, ...lowerLogos, ...lowerLogos, ...lowerLogos];

function LogoTile({ item }: { item: LogoEntity }) {
  return (
    <Link
      href="/legalitas"
      aria-label={`Lihat Legalitas Resmi ${item.name}`}
      className="shrink-0 group block p-1 select-none"
    >
      <div
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center p-3.5 sm:p-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-navy-950/40"
        style={{
          boxShadow: "0 4px 12px -2px rgba(11, 23, 39, 0.05), 0 2px 4px -1px rgba(11, 23, 39, 0.03)",
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={item.logo}
            alt={`Logo Resmi ${item.name}`}
            width={72}
            height={72}
            className="w-full h-full object-contain drop-shadow-xs transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
}

export default function OfficialTrustRibbon() {
  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200 select-none"
      aria-labelledby="official-legalitas-heading"
    >

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 z-10 space-y-10">
        {/* 1. Header (Matching Screenshot) */}
        <div className="anim-fade-up text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
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

        {/* 2. Flagship Centerpiece Card with Full Institutional Credentials */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-slate-200/90 shadow-lg p-6 sm:p-10 text-center space-y-6 relative overflow-hidden">
          {/* Ambient Glow Accent */}

          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>LEMBAGA PELATIHAN KERJA TERVERIFIKASI</span>
          </div>

          {/* Institutional Metadata Badges (Jenis Mitra & Kepemilikan) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
              <span className="text-slate-400 font-normal">Jenis Mitra:</span>
              <strong className="text-navy-950">{siteConfig.jenisMitra}</strong>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200">
              <span className="text-emerald-600 font-normal">Kepemilikan Institusi:</span>
              <strong>{siteConfig.kepemilikanInstitusi}</strong>
            </span>
          </div>

          {/* Large VIN Box */}
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
          </div>

          {/* Official License Plinth (Nomor Lisensi DPMPTSP) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left space-y-2 shadow-2xs">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-primary-700" />
                <span>Nomor Lisensi Operasional (Izin Penyelenggaraan LPK)</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                Resmi Terbit
              </span>
            </div>

            <div className="font-mono text-xs sm:text-sm font-black text-navy-950 tracking-wide break-all">
              {siteConfig.nomorLisensi}
            </div>

            <p className="text-[11px] text-slate-500 leading-snug">
              Diterbitkan oleh: <strong className="text-slate-700">{siteConfig.penerbitLisensi}</strong>
            </p>
          </div>

          {/* Status Keterangan */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Status: <strong className="text-emerald-700 font-bold">Terdaftar Resmi di Kementerian Ketenagakerjaan RI</strong>
          </p>

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

        {/* 3. Dual-Row Animated Moving Logos (Atas Kanan, Bawah Kiri - Tanpa Teks, Jalan Terus) */}
        <div className="space-y-3 pt-2">
          {/* Row 1: Baris Atas bergerak ke Kanan (animate-marquee-right) */}
          <div className="relative overflow-hidden py-1">
            {/* Left fade shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
            {/* Right fade shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-right flex gap-3 sm:gap-4">
              {row1Items.map((item, idx) => (
                <LogoTile key={`row1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2: Baris Bawah bergerak ke Kiri (animate-marquee-left) */}
          <div className="relative overflow-hidden py-1">
            {/* Left fade shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
            {/* Right fade shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-left flex gap-3 sm:gap-4">
              {row2Items.map((item, idx) => (
                <LogoTile key={`row2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Link to Detail Page */}
        <div className="text-center pt-2">
          <Link
            href="/legalitas"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-vermilion-600 transition-colors"
          >
            <span>Buka Rincian & Lembar Fakta 5 Dokumen Legalitas Sah</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
