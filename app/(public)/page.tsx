import Link from "next/link";
import { siteConfig } from "@/data/site";
import HeroCenterpiece from "@/components/public/HeroCenterpiece";
import StructureSlider from "@/components/public/StructureSlider";
import StepTimeline from "@/components/public/StepTimeline";
import TokuteiGinouSection from "@/components/public/TokuteiGinouSection";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import OfficialTrustRibbon from "@/components/public/OfficialTrustRibbon";
import ConsultationForm from "@/components/public/ConsultationForm";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  MessageCircle,
  BellRing,
  HeartHandshake,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-navy-950 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-vermilion-600 animate-pulse" />
                <span>LPK Resmi Kemnaker RI • Karawang &amp; Lampung</span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-emerald-800 font-bold">VIN: {siteConfig.vinNumber}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy-950 leading-[1.12]">
                Persiapkan Masa Depanmu, Siap Bekerja di{" "}
                <span className="text-vermilion-600">Jepang</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {siteConfig.description}
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Daftar / Konsultasi WhatsApp</span>
                </a>
                <Link
                  href="/program"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-sm font-bold transition-all hover:-translate-y-0.5"
                >
                  <span>Pilihan Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={siteConfig.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold border border-slate-300 transition-colors"
                >
                  <BellRing className="w-4 h-4 text-emerald-600" />
                  <span>Info Job PMS</span>
                </a>
              </div>

              {/* Trust Indicators */}
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
                  <Users className="w-4 h-4 text-vermilion-600" />
                  200+ Alumni Berkarier di Jepang
                </span>
              </div>
            </div>

            {/* Right Column: Centerpiece Card */}
            <div className="lg:col-span-5">
              <HeroCenterpiece />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STAT BAR */}
      <section className="bg-navy-950 py-8 sm:py-10 border-b border-navy-900">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "200+", label: "Alumni di Jepang" },
              { value: "14+", label: "Sektor Industri" },
              { value: "2018", label: "Tahun Berdiri" },
              { value: "100%", label: "Legal Kemnaker RI" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-black text-2xl sm:text-3xl text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRAM UNGGULAN */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Jalur Karier"
            title="Program Unggulan"
            highlight="LPK PMS"
            description="Dua jalur resmi menuju kerja profesional di Jepang — dipilih sesuai minat, usia, dan kondisi peserta."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            {/* Card 1: Tokutei Ginou */}
            <Link
              href="/tokutei-ginou"
              className="group block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-navy-950 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-vermilion-600 text-white flex items-center justify-center font-black text-sm">
                  SSW
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-vermilion-600 group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
              </div>
              <h3 className="font-heading font-black text-xl text-navy-950 mb-2">
                Tokutei Ginou
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Visa kerja keahlian khusus (Specified Skilled Worker) dengan gaji setara warga Jepang. Jalur resmi, transparan, dan berjenjang.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["JLPT N4 / JFT", "Skill Assessment", "Gaji 18-25Jt/bln"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-vermilion-50 text-vermilion-700 text-[11px] font-bold border border-vermilion-200">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>

            {/* Card 2: Pemagangan */}
            <Link
              href="/program/pemagangan"
              className="group block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-navy-950 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-white flex items-center justify-center font-black text-base">
                  実習
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-navy-950 group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
              </div>
              <h3 className="font-heading font-black text-xl text-navy-950 mb-2">
                Program Pemagangan
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Pelatihan kerja 3–5 tahun di perusahaan mitra industri Jepang (Ginou Jisshuusei). Program resmi berpayung hukum Kemnaker RI.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["3–5 Tahun", "Mitra Kaisha", "Bahasa N5+"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Mengapa LPK PMS?"
            title="Keunggulan yang Membuat"
            highlight="Kami Berbeda"
            description="Standar pelatihan kami dirancang khusus untuk memastikan setiap peserta siap — secara bahasa, fisik, dan mental — menghadapi dunia kerja Jepang."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <BookOpen className="w-5 h-5" />,
                color: "bg-blue-50 text-blue-700",
                title: "Kurikulum Terarah & Praktis",
                desc: "Materi dirancang bertahap tanpa duplikasi: Materi Dasar (N5), Inti (N4 & Budaya Kerja), dan Khusus (Teknis & Simulasi Wawancara).",
              },
              {
                icon: <Users className="w-5 h-5" />,
                color: "bg-indigo-50 text-indigo-700",
                title: "Instruktur Berpengalaman Jepang",
                desc: "Tenaga pengajar dengan pengalaman kerja nyata di Jepang, membimbing simulasi wawancara (mensetsu) dan etika komunikasi (keigo).",
              },
              {
                icon: <Award className="w-5 h-5" />,
                color: "bg-amber-50 text-amber-700",
                title: "Pembinaan Disiplin & Fisik",
                desc: "Latihan fisik berkala dan penanaman budaya 5S untuk kesiapan stamina kerja di iklim 4 musim Jepang.",
              },
              {
                icon: <Briefcase className="w-5 h-5" />,
                color: "bg-purple-50 text-purple-700",
                title: "Pengurusan Dokumen & CoE",
                desc: "Pendampingan intensif proses verifikasi data, penerbitan Certificate of Eligibility (CoE) Imigrasi Jepang, visa, hingga tiket penerbangan.",
              },
              {
                icon: <HeartHandshake className="w-5 h-5" />,
                color: "bg-rose-50 text-rose-700",
                title: "Pendampingan Menuju Jepang",
                desc: "Komunikasi berkesinambungan dan koordinasi dengan pihak penerima di Jepang selama masa penugasan peserta.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                color: "bg-emerald-50 text-emerald-700",
                title: "Legalitas 100% Terverifikasi",
                desc: "Terdaftar resmi di Kemnaker RI, Kemenkumham, Disnaker Karawang, dan OSS-BKPM. Tidak ada biaya tersembunyi.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALUR BERANGKAT KE JEPANG */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Roadmap Berangkat"
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

      {/* 8. FORMULIR KONSULTASI */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Mulai Langkah Pertamamu"
            title="Konsultasikan Rencana Kariermu"
            highlight="Bersama Kami"
            description="Tanyakan segala hal seputar persyaratan, pilihan program, dan estimasi biaya. Tim instruktur LPK PMS siap melayani Anda."
          />
          <div className="max-w-2xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 9. LEGALITAS & AKREDITASI */}
      <OfficialTrustRibbon />

      {/* 10. PRE-FOOTER CTA */}
      <CTA />
    </div>
  );
}
