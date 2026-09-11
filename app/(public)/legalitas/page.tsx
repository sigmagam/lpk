import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import Contact3DBadge from "@/components/public/Contact3DBadge";
import KejuruanExplorer from "@/components/public/KejuruanExplorer";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import {
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Building2,
  MapPin,
  Award,
  UserCheck,
  Calendar,
  Maximize2,
  Users,
  Briefcase,
  BookOpen
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legalitas Resmi Kemnaker RI & Daftar Kejuruan | LPK PMS Karawang",
  description:
    "Legalitas resmi LPK Panca Multiguna Sukses Karawang di Kementerian Ketenagakerjaan RI dengan Nomor VIN 2001321506, Pimpinan Yusuf Bachtiar, S.M, berdiri sejak 2018, serta direktori kejuruan kerja Jepang lengkap.",
  keywords: [
    "legalitas LPK PMS Karawang",
    "VIN 2001321506",
    "Kemnaker RI LPK PMS",
    "kejuruan magang jepang",
    "Yusuf Bachtiar SM Karawang"
  ]
};

export default function LegalitasPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />
        <span
          aria-hidden="true"
          className="absolute -right-6 -bottom-8 font-heading font-black text-8xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
        >
          公的認可
        </span>

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Terdaftar Resmi Kemnaker RI</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Legalitas & Profil Mitra Resmi
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Informasi akreditasi kelembagaan resmi di Kementerian Ketenagakerjaan Republik Indonesia serta direktori kejuruan kerja yang siap ditempuh peserta.
          </p>

          <div className="mt-8">
            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Verifikasi Langsung di Kemnaker Skillhub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Official Datasheet */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Data Terverifikasi"
            kanji="登録証明"
            title="Lembar Fakta Kelembagaan"
            highlight="LPK PMS Karawang"
            description="Seluruh data operasional terdaftar sah dalam pangkalan data Kemnaker RI untuk menjamin keamanan calon peserta."
          />

          {/* Grid Metadata Lembaga */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Nomor Registrasi (VIN)
              </span>
              <div className="font-mono text-xl font-bold text-navy-950">
                {siteConfig.vinNumber}
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold">
                ✓ Terdaftar di Kemnaker RI
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Pimpinan Lembaga
              </span>
              <div className="font-heading text-lg font-bold text-navy-950">
                {siteConfig.pimpinan}
              </div>
              <p className="text-[11px] text-slate-500">
                Pimpinan Berdedikasi Sejak 2018
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Tahun Berdiri
              </span>
              <div className="font-mono text-xl font-bold text-navy-950">
                {siteConfig.tahunBerdiri}
              </div>
              <p className="text-[11px] text-slate-500">
                Pengalaman Lebih dari 7 Tahun
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Luas Sarana Pelatihan
              </span>
              <div className="font-mono text-xl font-bold text-navy-950">
                {siteConfig.luasArea}
              </div>
              <p className="text-[11px] text-slate-500">
                Gedung & Ruang Kelas Nyaman
              </p>
            </div>
          </div>

          {/* Detailed Accreditation Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm max-w-5xl mx-auto space-y-6">
            <div className="space-y-3">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
                Deskripsi Status Kemitraan Kemnaker
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {siteConfig.deskripsiMitra}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                Status Operasional: <strong className="text-emerald-700 font-bold">Aktif & Terverifikasi Nasional</strong>
              </div>
              <a
                href={siteConfig.legalitasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs shadow-sm transition-all"
              >
                <span>Buka Tautan Skillhub Kemnaker</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Kejuruan Explorer */}
          <div className="max-w-5xl mx-auto pt-6">
            <KejuruanExplorer />
          </div>

          {/* Contact Plinth */}
          <div className="max-w-5xl mx-auto">
            <Contact3DBadge />
          </div>
        </div>
      </section>

      {/* 3. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
