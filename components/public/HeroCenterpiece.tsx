"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Building2,
  ArrowRight,
  ExternalLink,
  Briefcase,
  GraduationCap
} from "lucide-react";

export default function HeroCenterpiece() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Subtle Background Ambience */}
      <div
        aria-hidden="true"
        className="absolute -top-6 -right-6 w-64 h-64 bg-vermilion-100/60 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary-100/60 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      {/* Main Showcase Plinth */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
        {/* Card Header: Japanese Torii / Institutional Header */}
        <div className="bg-navy-950 text-white p-6 sm:p-7 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/[0.04] to-transparent pointer-events-none" />
          <span
            aria-hidden="true"
            className="absolute -right-4 -bottom-6 text-7xl font-heading font-black text-white/[0.05] pointer-events-none"
          >
            就労
          </span>

          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo LPK Panca Multiguna Sukses"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Terdaftar Kemnaker RI
                </div>
                <h2 className="font-heading font-black text-base sm:text-lg text-white leading-tight">
                  LPK PMS KARAWANG
                </h2>
                <div className="text-xs text-slate-300 font-medium">
                  VIN: <span className="font-mono text-white font-bold">{siteConfig.vinNumber}</span>
                </div>
              </div>
            </div>

            <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-[11px] font-bold">
              Est. 2018
            </span>
          </div>

          {/* Micro stats banner */}
          <div className="mt-5 pt-4 border-t border-navy-800/80 grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-base sm:text-lg font-black text-white font-heading">
                200+
              </div>
              <div className="text-[10px] text-slate-300 font-medium leading-tight mt-0.5">
                Alumni di Jepang
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-base sm:text-lg font-black text-emerald-400 font-heading">
                100%
              </div>
              <div className="text-[10px] text-slate-300 font-medium leading-tight mt-0.5">
                Legal & Terakreditasi
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-base sm:text-lg font-black text-vermilion-400 font-heading">
                14+
              </div>
              <div className="text-[10px] text-slate-300 font-medium leading-tight mt-0.5">
                Sektor Industri
              </div>
            </div>
          </div>
        </div>

        {/* Card Body: Programs & Focus Tracks */}
        <div className="p-6 sm:p-7 space-y-5 bg-white">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Jalur Program Kerja Utama:
            </div>

            {/* Track 1: Tokutei Ginou */}
            <Link
              href="/tokutei-ginou"
              className="group flex items-start justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-vermilion-100 text-vermilion-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  SSW
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-950 group-hover:text-vermilion-600 transition-colors flex items-center gap-1.5">
                    <span>Tokutei Ginou (Specified Skilled Worker)</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Visa kerja formal keahlian khusus, gaji standar setara warga Jepang.
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-vermilion-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
            </Link>

            {/* Track 2: Program Pemagangan Resmi */}
            <Link
              href="/program/pemagangan"
              className="group flex items-start justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  実習
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-950 group-hover:text-primary-700 transition-colors flex items-center gap-1.5">
                    <span>Program Pemagangan (Ginou Jisshuusei)</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Pelatihan kerja 3-5 tahun di perusahaan mitra industri Jepang.
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-700 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
            </Link>
          </div>

          {/* Sektor Potensial Tags */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Sektor Penempatan Populer:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {siteConfig.sektorPotensial.map((sektor) => (
                <span
                  key={sektor}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200"
                >
                  {sektor}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Card Reassurance */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Bimbingan Bahasa N5-N3
            </span>
            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-700 hover:text-primary-800 font-bold"
            >
              <span>Verifikasi Kemnaker</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
