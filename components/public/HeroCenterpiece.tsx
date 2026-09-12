"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function HeroCenterpiece() {
  return (
    <div className="w-full max-w-[480px] mx-auto select-none">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">

        {/* Card Header */}
        <div className="bg-navy-950 text-white px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo LPK Panca Multiguna Sukses"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Terdaftar Kemnaker RI
                </div>
                <div className="font-heading font-black text-base text-white leading-tight">
                  LPK PMS
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  VIN: {siteConfig.vinNumber}
                </div>
              </div>
            </div>
            <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/20 text-[11px] font-bold">
              Est. {siteConfig.tahunBerdiri}
            </span>
          </div>

          {/* Stat bar */}
          <div className="mt-5 pt-4 border-t border-navy-800 grid grid-cols-3 gap-2 text-center">
            {[
              { value: "200+", label: "Alumni di Jepang", color: "text-white" },
              { value: "100%", label: "Legal & Akreditasi", color: "text-emerald-400" },
              { value: "14+", label: "Sektor Industri", color: "text-vermilion-400" },
            ].map((s) => (
              <div key={s.label} className="py-2 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                <div className={`text-base sm:text-lg font-black font-heading ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Jalur Program Kerja Utama:
          </div>

          <Link
            href="/tokutei-ginou"
            className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-vermilion-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                SSW
              </div>
              <div>
                <div className="text-sm font-bold text-navy-950 group-hover:text-vermilion-600 transition-colors">
                  Tokutei Ginou (Specified Skilled Worker)
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Visa kerja formal keahlian khusus, gaji standar setara warga Jepang.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-vermilion-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </Link>

          <Link
            href="/program/pemagangan"
            className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-navy-950 text-white flex items-center justify-center font-black text-base shrink-0">
                実習
              </div>
              <div>
                <div className="text-sm font-bold text-navy-950 group-hover:text-primary-700 transition-colors">
                  Program Pemagangan (Ginou Jisshuusei)
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Pelatihan kerja 3–5 tahun di perusahaan mitra industri Jepang.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </Link>

          {/* Tags */}
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

          {/* Footer row */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Bimbingan Bahasa N5–N3
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
