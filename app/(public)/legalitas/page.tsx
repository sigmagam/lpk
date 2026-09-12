import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import Contact3DBadge from "@/components/public/Contact3DBadge";
import KejuruanExplorer from "@/components/public/KejuruanExplorer";
import SectionHeader from "@/components/public/SectionHeader";
import OfficialLegalBadges from "@/components/public/OfficialLegalBadges";
import OfficialTrustRibbon from "@/components/public/OfficialTrustRibbon";
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
  BookOpen,
  FileCheck2,
  FileText,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legalitas Resmi Kemnaker RI, Kemenkumham, Disnaker, AHU, OSS | LPK PMS",
  description:
    "Legalitas dan perizinan resmi LPK Panca Multiguna Sukses: Nomor Lisensi 503/10509/29/IPLPK/XI/DPMPTSP/2018, Jenis Mitra LPKS Swasta, VIN: 2001321506, Kemenkumham RI, Ditjen AHU, Disnaker Kab. Karawang, dan Lembaga OSS.",
  keywords: [
    "legalitas LPK PMS",
    "503/10509/29/IPLPK/XI/DPMPTSP/2018",
    "kemenkumham LPK PMS",
    "disnaker karawang lpk",
    "ditjen ahu lpk pms",
    "lembaga oss nib lpk",
    "VIN 2001321506",
    "Kemnaker RI LPK PMS",
    "izin operasional magang jepang"
  ]
};

export default function LegalitasPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900">

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Terdaftar & Berpayung Hukum Resmi Republik Indonesia</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Legalitas & Profil Izin Resmi Lembaga
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            LPK Panca Multiguna Sukses beroperasi dengan izin operasional lengkap dan diakui secara yuridis oleh <strong>Kemenkumham RI</strong>, <strong>Ditjen AHU</strong>, <strong>Kemnaker RI</strong>, <strong>Disnaker Kab. Karawang</strong>, serta <strong>Lembaga OSS</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Verifikasi Langsung di Kemnaker Skillhub</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <span>Konsultasi Status Legalitas</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Flagship: Centerpiece VIN & License Plinth & Dual-Direction Moving Logos */}
      <OfficialTrustRibbon />

      {/* 3. Flagship Deep-Dive: 5 Official Government Badges & Logos (3D Interactive) */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Kepastian Hukum & Izin Resmi"
            kanji="公認機関"
            title="5 Dokumen Legalitas Sah"
            highlight="Republik Indonesia"
            description="Sentuh atau arahkan kursor pada masing-masing kartu untuk melihat dokumen izin legalitas lengkap, dasar hukum, dan status pencatatan aktif."
          />

          {/* Render 5 HD Logos Component with 3D Depth */}
          <OfficialLegalBadges />
        </div>
      </section>

      {/* 4. Official Datasheet (Expanded with Lisensi, Jenis Mitra, & Kepemilikan) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Data Terverifikasi"
            kanji="登録証明"
            title="Lembar Fakta Kelembagaan"
            highlight="LPK PMS"
            description="Seluruh data operasional terdaftar sah dalam pangkalan data Kemnaker RI dan DPMPTSP untuk menjamin keamanan calon peserta."
          />

          {/* Grid Metadata Lembaga (6 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* 1. VIN */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Nomor Registrasi Resmi (VIN)
              </span>
              <div className="font-mono text-xl font-bold text-navy-950">
                {siteConfig.vinNumber}
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold">
                ✓ Terdaftar di Kemnaker RI
              </p>
            </div>

            {/* 2. Nomor Lisensi */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Nomor Lisensi Operasional
              </span>
              <div className="font-mono text-xs sm:text-sm font-black text-navy-950 break-all leading-tight">
                {siteConfig.nomorLisensi}
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold">
                ✓ Diterbitkan oleh DPMPTSP
              </p>
            </div>

            {/* 3. Jenis Mitra */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Jenis Mitra Lembaga
              </span>
              <div className="font-heading text-base sm:text-lg font-bold text-navy-950">
                {siteConfig.jenisMitra}
              </div>
              <p className="text-[11px] text-slate-500">
                Pelatihan Bahasa & Vokasi Jepang
              </p>
            </div>

            {/* 4. Kepemilikan Institusi */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Kepemilikan Institusi
              </span>
              <div className="font-heading text-xl font-black text-navy-950">
                {siteConfig.kepemilikanInstitusi}
              </div>
              <p className="text-[11px] text-slate-500">
                Berpayung Hukum SK Kemenkumham RI
              </p>
            </div>

            {/* 5. Pimpinan Lembaga */}
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

            {/* 6. Tahun Berdiri & Luas Balai */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Tahun Berdiri & Sarana
              </span>
              <div className="font-mono text-xl font-bold text-navy-950">
                {siteConfig.tahunBerdiri} • {siteConfig.luasArea}
              </div>
              <p className="text-[11px] text-slate-500">
                Pengalaman Lebih dari 7 Tahun
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

      {/* 5. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
