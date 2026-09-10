import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import Contact3DBadge from "@/components/public/Contact3DBadge";
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
  Mail,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legalitas Resmi Kemnaker RI & Profil Mitra | LPK Panca Multiguna Sukses Karawang",
  description:
    "Legalitas resmi LPK Panca Multiguna Sukses Karawang di Kementerian Ketenagakerjaan RI dengan Nomor VIN 2001321506, Pimpinan Yusuf Bachtiar, S.M, berdiri sejak 2018.",
};

export default function LegalitasPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b-2 border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 text-emerald-300 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            TERDAFTAR RESMI KEMNAKER RI
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Legalitas & Profil Mitra Resmi
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Terdaftar di Kementerian Ketenagakerjaan Republik Indonesia • Nomor VIN: <span className="font-mono font-black text-emerald-300">{siteConfig.vinNumber}</span>
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 1. KOTAK UTAMA: STATUS KELEMBAGAAN & NOMOR VIN */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-300 shadow-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b-2 border-slate-200">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border-2 border-emerald-300 text-xs font-black uppercase tracking-wide">
                    Status Kelembagaan: Verified LPK
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-navy-950">
                  {siteConfig.name}
                </div>
                <div className="text-sm font-mono font-bold text-slate-700 mt-1">
                  Nomor VIN: <span className="text-emerald-700 font-black text-base">{siteConfig.vinNumber}</span>
                </div>
              </div>

              <a
                href={siteConfig.legalitasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-black text-xs shadow-md transition-all hover:-translate-y-0.5 self-start sm:self-auto border-2 border-navy-950"
              >
                <span>Lihat Legalitas Resmi di Kemnaker</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Deskripsi Kejuruan Resmi */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary-900">
                <BookOpen className="w-4 h-4 text-primary-700" />
                <span>Kejuruan & Deskripsi Kelembagaan</span>
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                {siteConfig.deskripsiMitra}
              </p>
            </div>
          </div>

          {/* 2. KOTAK DETAIL: TENTANG MITRA LPK (Tebal & Jelas) */}
          <div>
            <div className="mb-6">
              <h2 className="font-heading font-black text-2xl text-navy-950">
                Tentang Mitra Pelatihan
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Data spesifikasi fisik kelembagaan, kapasitas pelatihan, dan legalitas operasional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card Pimpinan */}
              <div className="box-3d-bold bg-white rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-900 flex items-center justify-center mb-4 border-2 border-primary-200">
                    <UserCheck className="w-6 h-6 text-primary-800" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1">
                    Pimpinan Lembaga
                  </span>
                  <div className="font-heading font-black text-navy-950 text-base sm:text-lg leading-snug">
                    {siteConfig.pimpinan}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t-2 border-slate-100 text-xs text-slate-600 font-bold">
                  Penanggung Jawab Resmi
                </div>
              </div>

              {/* Card Tahun Berdiri */}
              <div className="box-3d-bold bg-white rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4 border-2 border-amber-200">
                    <Calendar className="w-6 h-6 text-amber-800" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1">
                    Tahun Berdiri
                  </span>
                  <div className="font-heading font-black text-navy-950 text-2xl">
                    {siteConfig.tahunBerdiri}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t-2 border-slate-100 text-xs text-slate-600 font-bold">
                  Beroperasi Aktif s/d Sekarang
                </div>
              </div>

              {/* Card Luas Area */}
              <div className="box-3d-bold bg-white rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4 border-2 border-emerald-200">
                    <Maximize2 className="w-6 h-6 text-emerald-800" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1">
                    Luas Area Pelatihan
                  </span>
                  <div className="font-heading font-black text-navy-950 text-2xl">
                    {siteConfig.luasArea}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t-2 border-slate-100 text-xs text-slate-600 font-bold">
                  Ruang Kelas, Asrama & Praktek
                </div>
              </div>

              {/* Card Jumlah Pegawai */}
              <div className="box-3d-bold bg-white rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4 border-2 border-purple-200">
                    <Users className="w-6 h-6 text-purple-800" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1">
                    Jumlah Pegawai
                  </span>
                  <div className="font-heading font-black text-navy-950 text-base leading-snug">
                    {siteConfig.jumlahPegawai}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t-2 border-slate-100 text-xs text-slate-600 font-bold">
                  Instruktur & Staf Profesional
                </div>
              </div>
            </div>
          </div>

          {/* 3. KOTAK SEKTOR POTENSIAL (Tebal, Jelas, & Rapi) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-300 shadow-md space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-full bg-navy-100 text-navy-950 text-xs font-black uppercase tracking-wider">
                  Kategori Penempatan Kerja
                </span>
              </div>
              <h2 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
                Sektor Potensial Pelatihan & Magang ke Jepang
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
                Bidang pekerjaan industri yang dipersiapkan secara spesifik di LPK Panca Multiguna Sukses Karawang
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteConfig.sektorPotensial.map((sektor, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 text-navy-950 font-black text-xs sm:text-sm shadow-sm hover:border-navy-950 transition-colors"
                >
                  <span className="w-8 h-8 rounded-xl bg-navy-950 text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{sektor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. LOGO & KONTAK ANIMASI 3D (WhatsApp & Email Resmi) */}
          <div className="space-y-4">
            <div>
              <h2 className="font-heading font-black text-2xl text-navy-950">
                Kontak Resmi Lembaga (Animasi 3D)
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Hubungi pimpinan atau bagian administrasi pelatihan kerja via WhatsApp dan email resmi
              </p>
            </div>

            <Contact3DBadge />
          </div>

          {/* 5. TAUTAN VERIFIKASI RESMI SKILLHUB */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-400 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-emerald-700 shrink-0" />
              <div>
                <h3 className="font-heading font-black text-base sm:text-lg text-emerald-950">
                  Verifikasi Langsung di Portal Kemnaker RI
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                  Pastikan keabsahan izin kelembagaan melalui platform resmi Kementerian Ketenagakerjaan RI Skillhub.
                </p>
              </div>
            </div>

            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs shadow-md transition-all shrink-0 border-2 border-emerald-900 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Buka Skillhub Kemnaker</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
