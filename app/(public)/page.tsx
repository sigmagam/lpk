import Link from "next/link";
import Image from "next/image";
import { siteConfig, programs, keunggulan } from "@/data/site";
import HeroCenterpiece from "@/components/public/HeroCenterpiece";
import StructureSlider from "@/components/public/StructureSlider";
import StepTimeline from "@/components/public/StepTimeline";
import TokuteiGinouSection from "@/components/public/TokuteiGinouSection";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import ConsultationForm from "@/components/public/ConsultationForm";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  ArrowRight,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Briefcase,
  Layers,
  MessageCircle,
  BellRing,
  Building2,
  Sparkles,
  HeartHandshake
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200">
        <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Value Proposition & High Conversion Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-navy-950 uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-vermilion-600 animate-pulse" />
                <span>LPK Resmi Kemnaker RI • Karawang</span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-emerald-800 font-bold">VIN: {siteConfig.vinNumber}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy-950 leading-[1.14]">
                Persiapkan Masa Depanmu, Siap Bekerja di{" "}
                <span className="text-vermilion-600 relative inline-block">
                  Jepang
                </span>
              </h1>

              {/* Institution Subheading */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                {siteConfig.description}
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-sm font-bold shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Daftar / Konsultasi WhatsApp</span>
                </a>

                <Link
                  href="/program"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5 text-center"
                >
                  <span>Pilihan Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold border border-slate-300 transition-colors text-center"
                >
                  <BellRing className="w-4 h-4 text-emerald-600" />
                  <span>Info Job PMS</span>
                </a>
              </div>

              {/* Trust Micro Indicators */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Terdaftar Resmi Kemnaker RI
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-700" />
                  Kurikulum Standar Industri Kaisha
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-vermilion-600" />
                  Pelatihan di Karawang
                </span>
              </div>
            </div>

            {/* Right Column: High-Credibility Centerpiece */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroCenterpiece />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & CREDIBILITY STATS BAR */}
      <section className="bg-white border-b border-slate-200 py-10 select-none">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="text-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-heading font-black text-navy-950">
                2018
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Tahun Berdiri Lembaga
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Pengalaman Lebih dari 7 Tahun
              </div>
            </div>

            <div className="text-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-heading font-black text-vermilion-600">
                200+
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Lulusan Bekerja di Jepang
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Alumni di Berbagai Prefektur
              </div>
            </div>

            <div className="text-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-heading font-black text-emerald-600">
                100%
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Jalur Resmi & Legal
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Akreditasi Kemnaker VIN {siteConfig.vinNumber}
              </div>
            </div>

            <div className="text-center pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-heading font-black text-primary-700">
                14+
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Bidang Kejuruan Resmi
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Manufaktur, Makanan, Kaigo, dll
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAM UTAMA (Core Programs Catalogue) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pilihan Jalur Karier"
            kanji="主要課程"
            title="Program Utama Pelatihan Kerja"
            highlight="ke Jepang"
            description="Setiap program dirancang secara komprehensif untuk memastikan peserta memiliki kompetensi bahasa, keterampilan teknis, serta ketahanan mental sesuai standar kaisha di Jepang."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Tokutei Ginou SSW */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-vermilion-700 bg-vermilion-50 border border-vermilion-200 px-3 py-1 rounded-full">
                    SSW / Tokutei Ginou
                  </span>
                  <span className="text-xs font-bold text-slate-400">01</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-navy-950 group-hover:text-vermilion-600 transition-colors">
                  Tokutei Ginou (Specified Skilled Worker)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Status visa kerja formal bagi tenaga kerja berkeahlian khusus dengan standar gaji setara warga negara Jepang (180rb - 250rb JPY/bulan) dan perlindungan kerja penuh.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Target Ujian JFT-Basic A2 / JLPT N4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Skill Test 14 Sektor Prioritas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Kontrak Kerja Resmi s/d 5 Tahun</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/tokutei-ginou"
                  className="text-xs font-bold text-navy-950 group-hover:text-vermilion-600 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Detail Tokutei Ginou</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] font-semibold text-slate-400">Jalur Terpopuler</span>
              </div>
            </div>

            {/* Card 2: Bahasa Jepang */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
                    Bahasa Jepang
                  </span>
                  <span className="text-xs font-bold text-slate-400">02</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-navy-950 group-hover:text-primary-700 transition-colors">
                  Pembelajaran Bahasa Jepang (N5 - N3)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bimbingan intensif tata bahasa, penguasaan huruf Hiragana, Katakana, Kanji dasar, serta simulasi percakapan harian (kaiwa) bersama sensei berpengalaman.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Kurikulum Minna no Nihongo I & II</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Latihan Kaiwa & Percakapan Pabrik</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Try Out JLPT & JFT Berkala</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/program/bahasa-jepang"
                  className="text-xs font-bold text-navy-950 group-hover:text-primary-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Detail Program Bahasa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] font-semibold text-slate-400">Materi Inti</span>
              </div>
            </div>

            {/* Card 3: Program Pemagangan Resmi */}
            <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                    Ginou Jisshuusei
                  </span>
                  <span className="text-xs font-bold text-slate-400">03</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-navy-950 group-hover:text-navy-800 transition-colors">
                  Program Pemagangan (Ginou Jisshuusei)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Program pelatihan kerja 3 hingga 5 tahun di perusahaan Jepang untuk transfer teknologi dan peningkatan keahlian kerja bagi lulusan SMK/SMA.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Disalurkan ke Kaisha Terverifikasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Uang Saku Standar & Asuransi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Peluang Lanjut ke Tokutei Ginou</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/program/pemagangan"
                  className="text-xs font-bold text-navy-950 group-hover:text-primary-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Detail Program Magang</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] font-semibold text-slate-400">3 - 5 Tahun</span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-950 hover:text-vermilion-600 transition-colors"
            >
              <span>Lihat Seluruh Katalog 5 Program Pembekalan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KENAPA LPK PMS? (Benefit & Credibility Section) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Keunggulan Kelembagaan"
            kanji="強み"
            title="Mengapa Memilih"
            highlight="LPK PMS Karawang?"
            description="Kami tidak hanya mengajarkan bahasa Jepang, tetapi membimbing setiap peserta dari tahap persiapan mental hingga sukses beradaptasi dan bekerja di Jepang."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950">
                Terdaftar Resmi Kemnaker RI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Legalitas terjamin dengan nomor VIN <strong>2001321506</strong> pada sistem Kementerian Ketenagakerjaan RI, memberikan rasa aman bagi calon peserta dan orang tua.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-vermilion-100 text-vermilion-700 flex items-center justify-center font-bold text-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950">
                Kurikulum Terarah & Praktis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Materi dirancang bertahap tanpa duplikasi: Materi Dasar (N5), Materi Inti (N4 & Budaya Kerja), dan Materi Khusus (Keterampilan Teknis & Simulasi Wawancara).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-primary-100 text-primary-800 flex items-center justify-center font-bold text-sm">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950">
                Instruktur Berpengalaman Jepang
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tenaga pengajar yang telah memiliki pengalaman kerja nyata di Jepang, membimbing simulasi wawancara kerja (mensetsu) dan etika komunikasi sopan (keigo).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950">
                Pembinaan Disiplin & Fisik Unggul
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Latihan kebugaran fisik berkala dan penanaman budaya 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) untuk kesiapan stamina kerja di iklim 4 musim Jepang.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950">
                Pengurusan Dokumen & CoE Terpadu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pendampingan intensif proses verifikasi data, penerbitan Certificate of Eligibility (CoE) dari Imigrasi Jepang, pengurusan visa kerja, hingga tiket penerbangan.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950">
                Pendampingan Menuju Jepang
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Komunikasi berkesinambungan dan koordinasi bersama pihak penerima di Jepang guna memastikan kondisi peserta tetap terpantau dengan baik selama bertugas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALUR BERANGKAT KE JEPANG (Interactive 9-Step Timeline) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Roadmap Berangkat"
            kanji="渡航手順"
            title="Alur & Tahapan Menuju Kerja"
            highlight="di Jepang"
            description="9 langkah terstruktur dari awal pendaftaran, pembekalan bahasa dan fisik, ujian sertifikasi, seleksi kaisha, hingga terbang dan bekerja di Jepang."
          />

          <StepTimeline />
        </div>
      </section>

      {/* 6. TOKUTEI GINOU (SSW) SPOTLIGHT */}
      <TokuteiGinouSection />

      {/* 7. STRUKTUR & GALERI KELEMBAGAAN SLIDER */}
      <StructureSlider />

      {/* 8. FORMULIR KONSULTASI INTERAKTIF */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Mulai Langkah Pertamamu"
            kanji="無料相談"
            title="Konsultasikan Rencana Kariermu"
            highlight="Bersama Kami"
            description="Tanyakan segala hal seputar persyaratan, pilihan program, dan estimasi biaya. Tim instruktur LPK PMS Karawang siap melayani Anda."
          />

          <div className="max-w-2xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 9. PRE-FOOTER CTA SECTION */}
      <CTA />
    </div>
  );
}
