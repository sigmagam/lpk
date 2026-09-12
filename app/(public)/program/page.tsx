import { programs, siteConfig } from "@/data/site";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import WhatsAppJobChannelBanner from "@/components/public/WhatsAppJobChannelBanner";
import {
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
  FileCheck2,
  Clock,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Program Pelatihan Kerja ke Jepang | LPK Panca Multiguna Sukses",
  description:
    "Direktori lengkap program pelatihan bahasa Jepang, persiapan kerja, pemagangan resmi Kemnaker RI, Tokutei Ginou, dan pembekalan budaya kerja di LPK PMS.",
  keywords: [
    "program LPK PMS",
    "pelatihan bahasa jepang karawang",
    "program magang jepang resmi",
    "tokutei ginou karawang",
    "persiapan kerja jepang",
    "kurikulum bahasa jepang n4"
  ]
};

export default function ProgramPage() {
  const kanjiLabels = ["基礎", "準備", "実習", "文化", "技能"];

  const programDetailsMap: Record<string, {
    target: string;
    persyaratan: string[];
    proses: string;
    benefits: string[];
  }> = {
    "bahasa-jepang": {
      target: "Lulusan SMA/SMK, Mahasiswa, atau Umum yang ingin menguasai bahasa Jepang dari nol hingga level kerja.",
      persyaratan: ["Minimal usia 18 tahun", "Pendidikan minimal SMA/SMK", "Komitmen belajar intensif 3-4 bulan"],
      proses: "Kelas Teori Tata Bahasa > Latihan Hiragana/Katakana > Kaiwa Praktis > Try Out JLPT/JFT",
      benefits: ["Target JLPT N5/N4 atau JFT-Basic", "Instruktur berpengalaman di Jepang", "Sertifikat resmi kelulusan lembaga"],
    },
    "persiapan-kerja": {
      target: "Calon tenaga kerja yang bersiap mengikuti seleksi wawancara (mensetsu) dengan perusahaan Jepang (Kaisha).",
      persyaratan: ["Telah memiliki dasar bahasa Jepang", "Fisik sehat & tidak bertato", "Lolos seleksi berkas administrasi"],
      proses: "Penyusunan Rirekisho > Bimbingan Jikoshoukai > Simulasi Mensetsu > Pembinaan Fisik & Disiplin",
      benefits: ["Percaya diri saat wawancara kaisha", "Paham etika kerja Jepang (Aisatsu & Hourensou)", "Peluang diterima (Goukaku) lebih tinggi"],
    },
    "pemagangan": {
      target: "Generasi muda Indonesia yang ingin menimba pengalaman kerja praktis 3-5 tahun di industri Jepang.",
      persyaratan: ["Usia 19 - 28 tahun", "Tinggi badan proporsional & lolos MCU", "Disiplin tinggi & bersedia magang 3 tahun"],
      proses: "Pelatihan Bahasa di LPK > Seleksi Wawancara > Kontrak Kerja > Pengurusan CoE/Visa > Keberangkatan",
      benefits: ["Uang saku standar Jepang", "Asuransi kesehatan & dana nenkin", "Sertifikat JITCO/OTIT setelah selesai"],
    },
    "budaya-jepang": {
      target: "Seluruh peserta yang akan diberangkatkan agar tidak mengalami culture shock saat bertempat tinggal di Jepang.",
      persyaratan: ["Telah lolos wawancara kerja", "Siap mematuhi aturan sosial Jepang", "Berkomitmen menjaga nama baik Indonesia"],
      proses: "Pengenalan Tata Tertib Sosial > Aturan Memilah Sampah > Belanja & Transportasi > Simulasi Kehidupan di Apato",
      benefits: ["Adaptasi cepat di lingkungan baru", "Hubungan harmonis dengan warga lokal", "Kemandirian hidup di perantauan"],
    },
    "pengembangan-kompetensi": {
      target: "Peserta yang membutuhkan spesialisasi teknis sesuai bidang penempatan kerja (manufaktur, pengelasan, perawatan, dll).",
      persyaratan: ["Minat pada bidang teknik/layanan", "Kemampuan fisik mendukung", "Mengikuti panduan keselamatan K3"],
      proses: "Teori Bidang Teknis > Pengenalan Istilah Kerja Jepang (Senmon Yougo) > Praktik Mandiri > Evaluasi Keterampilan",
      benefits: ["Kesiapan teknis langsung kerja", "Mengurangi risiko kecelakaan kerja", "Kemampuan membaca instruksi kerja pabrik"],
    },
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />
        <span
          aria-hidden="true"
          className="absolute -right-6 -bottom-8 font-heading font-black text-8xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
        >
          教育課程
        </span>

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Kurikulum Resmi Terakreditasi Kemnaker RI</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Program Pelatihan Kerja ke Jepang
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Direktori program pembekalan bahasa, keterampilan kerja industri, kesiapan fisik, serta etos kerja Kaisha yang diselenggarakan di LPK PMS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              Konsultasi Pendaftaran
            </a>
            <Link
              href="/tokutei-ginou"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              Program Khusus Tokutei Ginou (SSW) →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Program Spotlight (Tokutei Ginou Banner) */}
      <section className="py-8 bg-vermilion-50 border-b border-vermilion-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-vermilion-300 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-vermilion-100 text-vermilion-800 text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-vermilion-600" />
                Jalur Kerja Unggulan
              </span>
              <h2 className="font-heading font-black text-lg text-navy-950">
                Mencari Program Kerja Formal Tokutei Ginou (SSW)?
              </h2>
              <p className="text-xs text-slate-600">
                Gaji setara warga Jepang (180rb – 250rb JPY/bln), kontrak s/d 5 tahun, terbuka untuk 14 sektor industri resmi.
              </p>
            </div>
            <Link
              href="/tokutei-ginou"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold shadow-sm transition-all"
            >
              Buka Panduan Tokutei Ginou
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Program Editorial List */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="Katalog Lengkap"
            kanji="講座一覧"
            title="Daftar Lengkap Program Pelatihan"
            highlight="LPK PMS"
            description="Setiap program disusun sistematis dengan target kompetensi yang terukur dan aplikatif untuk kebutuhan kerja nyata di Jepang."
          />

          <div className="space-y-8">
            {programs.map((program, idx) => {
              const meta = programDetailsMap[program.slug] || {
                target: "Peserta yang ingin berkarir di Jepang",
                persyaratan: ["Usia min 18 tahun", "Pendidikan SMA/SMK"],
                proses: "Pendaftaran > Pelatihan > Evaluasi",
                benefits: ["Sertifikat kelulusan", "Bimbingan instruktur"],
              };

              return (
                <article
                  key={program.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-10 relative overflow-hidden"
                >
                  {/* Kanji Watermark */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-6 font-heading font-black text-7xl sm:text-8xl text-slate-100 select-none pointer-events-none"
                  >
                    {kanjiLabels[idx] || "研修"}
                  </span>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Title & Stages */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-black px-2.5 py-1 rounded-lg bg-navy-950 text-white shadow-sm">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-vermilion-700 bg-vermilion-50 px-2.5 py-0.5 rounded-full border border-vermilion-200">
                          {program.stages}
                        </span>
                      </div>

                      <h2 className="font-heading font-black text-xl sm:text-2xl text-navy-950 leading-tight">
                        {program.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {program.description}
                      </p>

                      <div className="pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Kategori Program:
                        </div>
                        <span className="text-xs font-bold text-navy-950 bg-slate-100 px-3 py-1 rounded-lg inline-block">
                          {program.category}
                        </span>
                      </div>
                    </div>

                    {/* Middle Column: Detailed Breakdown (Target, Persyaratan, Proses, Benefit) */}
                    <div className="lg:col-span-5 space-y-4 lg:border-x lg:border-slate-100 lg:px-6">
                      {/* Target Peserta */}
                      <div className="space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-primary-700" />
                          <span>Target Peserta</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {meta.target}
                        </p>
                      </div>

                      {/* Persyaratan */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Persyaratan Utama</span>
                        </div>
                        <ul className="space-y-1 text-xs text-slate-700">
                          {meta.persyaratan.map((syarat, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-emerald-600 font-bold">•</span>
                              <span>{syarat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Proses / Alur */}
                      <div className="space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Alur Pembelajaran</span>
                        </div>
                        <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                          {meta.proses}
                        </p>
                      </div>

                      {/* Benefit */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-vermilion-600" />
                          <span>Manfaat & Output Peserta</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {meta.benefits.map((b, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded"
                            >
                              ✓ {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Actions */}
                    <div className="lg:col-span-3 flex flex-col justify-between space-y-4 pt-4 lg:pt-0">
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Fokus Pembekalan:
                        </div>
                        <div className="space-y-1.5">
                          {program.highlights.map((h, i) => (
                            <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                              <span className="text-navy-950 font-bold">›</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        <Link
                          href={program.href}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition-all hover:-translate-y-0.5 text-center shadow-sm"
                        >
                          <span>Rincian & Silabus Program</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <a
                          href={siteConfig.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold transition-all text-center shadow-sm"
                        >
                          <span>Daftar via WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WhatsApp Job Channel */}
      <WhatsAppJobChannelBanner />

      {/* 5. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
