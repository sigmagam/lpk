import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import OfficialTrustRibbon from "@/components/public/OfficialTrustRibbon";
import {
  ShieldCheck,
  Target,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Building2,
  Calendar,
  Maximize2,
  Sparkles,
  BookOpen,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami & Profil Lembaga | LPK Panca Multiguna Sukses Karawang",
  description:
    "Profil resmi LPK Panca Multiguna Sukses Karawang. Terdaftar di Kemnaker RI dengan VIN 2001321506, dipimpin oleh Yusuf Bachtiar, S.M, berdiri sejak 2018 dengan 200+ alumni di Jepang.",
  keywords: [
    "profil LPK PMS Karawang",
    "Yusuf Bachtiar SM",
    "sejarah LPK PMS",
    "legalitas kemnaker lpk pms",
    "LPK jepang karawang terpercaya"
  ]
};

export default function TentangKamiPage() {
  const institutionalValues = [
    {
      title: "Kedisiplinan Tinggi (Kiritsu)",
      desc: "Menerapkan kedisiplinan waktu, tata krama, serta budaya 5S Jepang sejak hari pertama pelatihan.",
    },
    {
      title: "Transparansi & Legalitas",
      desc: "Menjamin proses pemberangkatan berpayung hukum Kemnaker RI tanpa biaya tersembunyi.",
    },
    {
      title: "Standar Industri Kaisha",
      desc: "Kurikulum yang disesuaikan langsung dengan kebutuhan operasional pabrik dan perusahaan di Jepang.",
    },
    {
      title: "Pendampingan Menyeluruh",
      desc: "Bimbingan dari pendaftaran, belajar bahasa, wawancara, dokumen visa, hingga penempatan di Jepang.",
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />
        <span
          aria-hidden="true"
          className="absolute -right-6 -bottom-8 font-heading font-black text-8xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
        >
          当校紹介
        </span>

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Lembaga Pelatihan Kerja Resmi Kemnaker RI</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Tentang LPK PMS Karawang
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Dedikasi berkelanjutan sejak tahun 2018 dalam mencetak generasi muda Indonesia yang terampil, beretos kerja unggul, dan sukses berkarier di Jepang.
          </p>
        </div>
      </section>

      {/* 2. Institutional Facts Ribbon */}
      <section className="bg-white border-b border-slate-200 py-8 select-none">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-navy-950">
                {siteConfig.tahunBerdiri}
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-0.5">
                Tahun Berdiri
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-vermilion-600">
                200+ Orang
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-0.5">
                Alumni di Jepang
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-600">
                {siteConfig.vinNumber}
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-0.5">
                Nomor VIN Kemnaker
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-primary-700">
                {siteConfig.luasArea}
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase mt-0.5">
                Luas Sarana Balai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Profile & Leadership */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Official Logo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md text-center space-y-5">
                <div className="w-28 h-28 mx-auto bg-white rounded-2xl p-2.5 shadow-sm border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Logo LPK Panca Multiguna Sukses Karawang"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-heading font-black text-navy-950 text-lg sm:text-xl uppercase">
                    LPK Panca Multiguna Sukses
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Karawang, Jawa Barat
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-left space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Pimpinan Lembaga:</span>
                    <strong className="text-navy-950 font-bold">{siteConfig.pimpinan}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Status Legalitas:</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Kemnaker RI Aktif
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Kapasitas Staf:</span>
                    <span className="text-navy-950 font-semibold">{siteConfig.jumlahPegawai}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={siteConfig.legalitasUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs transition-colors"
                  >
                    <span>Verifikasi Data di Kemnaker</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Narrative */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-vermilion-700 bg-vermilion-50 px-3 py-1 rounded-full border border-vermilion-200 inline-block">
                  Profil Lembaga
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 leading-tight">
                  Membangun Jembatan Karier Indonesia – Jepang Sejak 2018
                </h2>
              </div>

              <p className="font-medium text-navy-950 text-base sm:text-lg leading-relaxed">
                {siteConfig.deskripsiMitra}
              </p>

              <p>
                Sebagai lembaga pelatihan kerja resmi di bawah naungan Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI), LPK Panca Multiguna Sukses Karawang berorientasi pada peningkatan kompetensi nyata, pembentukan kedisiplinan tinggi, serta penanaman etika kerja industri Jepang (Kaisha).
              </p>

              <p>
                Dengan bimbingan menyeluruh yang mencakup penguasaan bahasa Jepang (N5–N3), pembinaan fisik, kesiapan mental, hingga pengurusan berkas CoE (Certificate of Eligibility) dan Visa Kerja, kami memastikan setiap lulusan memiliki kepercayaan diri dan kemampuan bersaing di pasar tenaga kerja internasional.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/program"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <span>Pilihan Program Pelatihan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/legalitas"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-navy-950 text-xs sm:text-sm font-bold border border-slate-300 transition-colors"
                >
                  <span>Cek Status Legalitas</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nilai-Nilai Inti Lembaga */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Fondasi Pendidikan"
            kanji="基本理念"
            title="Prinsip & Nilai-Nilai Pembinaan"
            highlight="LPK PMS"
            description="Standar nilai yang kami tanamkan kepada setiap calon peserta kerja untuk memastikan kesiapan adaptasi dan integritas kerja prima di Jepang."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalValues.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs font-bold text-vermilion-600 bg-vermilion-100/70 px-2.5 py-0.5 rounded">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading font-bold text-base text-navy-950">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Official Authority Accreditation Ribbon */}
      <OfficialTrustRibbon />

      {/* 6. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
