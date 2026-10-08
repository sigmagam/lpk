import Link from "next/link";
import { siteConfig } from "@/data/site";
import HeroCardStack from "@/components/public/HeroCardStack";
import StructureSlider from "@/components/public/StructureSlider";
import StepTimeline from "@/components/public/StepTimeline";
import TokuteiGinouSection from "@/components/public/TokuteiGinouSection";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import OfficialTrustRibbon from "@/components/public/OfficialTrustRibbon";
import ConsultationForm from "@/components/public/ConsultationForm";
import StatCounter from "@/components/public/StatCounter";
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
    <div className="bg-washi">

      {/* 1. HERO SECTION — Ukiyo-e modern: navy malam, emas, torii */}
      <section className="relative overflow-hidden bg-navy-950 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        {/* Seigaiha wave pattern, emas sangat halus */}
        <div
          className="pointer-events-none absolute inset-0 text-gold-500 pattern-seigaiha opacity-[0.07]"
          aria-hidden="true"
        />
        {/* Glow emas & merah di balik kartu */}
        <div className="pointer-events-none absolute -top-20 right-0 w-[32rem] h-[32rem] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-vermilion-700/15 blur-3xl" />
        {/* Kanji watermark raksasa */}
        <span
          className="kanji-watermark absolute top-1/4 left-2 sm:left-10 text-[10rem] sm:text-[15rem] text-white font-jp"
          aria-hidden="true"
        >
          働く
        </span>

        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="anim-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur border border-gold-500/30 text-xs font-bold text-gold-200 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-vermilion-500 animate-pulse" />
                <span>LPK Resmi Kemnaker RI • Karawang &amp; Lampung</span>
                <span className="text-white/25">|</span>
                <span className="font-mono text-emerald-300 font-bold">VIN: {siteConfig.vinNumber}</span>
              </div>

              <h1 className="anim-fade-up anim-delay-100 font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Persiapkan Masa Depanmu, Siap Bekerja di{" "}
                <span className="text-gold-gradient animate-gold-shimmer">Jepang</span>
              </h1>

              <p className="anim-fade-up anim-delay-200 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {siteConfig.description}
              </p>

              <div className="anim-fade-up anim-delay-300 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anim-pulse-ring inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-b from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 text-sm font-black shadow-lg shadow-gold-900/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-navy-950" />
                  <span>Daftar / Konsultasi WhatsApp</span>
                </a>
                <Link
                  href="/program"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur text-white text-sm font-bold border border-white/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Pilihan Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={siteConfig.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.06] text-gold-200 text-sm font-bold border border-gold-500/40 transition-colors"
                >
                  <BellRing className="w-4 h-4 text-emerald-400" />
                  <span>Info Job PMS</span>
                </a>
              </div>

              <div className="anim-fade-up anim-delay-400 pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Terdaftar Resmi Kemnaker RI
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Kurikulum Standar Industri Kaisha
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-vermilion-400" />
                  200+ Alumni Berkarier di Jepang
                </span>
              </div>
            </div>

            {/* Right Column: 3D Program Card Stack */}
            <div className="lg:col-span-5 anim-fade-right anim-delay-200">
              <HeroCardStack />
            </div>
          </div>
        </div>

        {/* Pemisah emas di dasar hero */}
        <div className="jp-divider relative mt-4" aria-hidden="true">
          <span className="rhombus" />
        </div>
      </section>

      {/* 2. STAT BAR — navy dengan pola seigaiha emas */}
      <section className="relative overflow-hidden bg-navy-950 py-9 sm:py-11 border-t border-gold-900/40">
        <div
          className="pointer-events-none absolute inset-0 text-gold-400 pattern-seigaiha opacity-[0.06]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(200,16,46,0.22),transparent_45%),radial-gradient(circle_at_82%_50%,rgba(200,160,75,0.16),transparent_45%)]" />
        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 sm:divide-x sm:divide-gold-900/50">
            <StatCounter value="200+" label="Alumni di Jepang" />
            <StatCounter value="14+" label="Sektor Industri" />
            <StatCounter value="2018" label="Tahun Berdiri" />
            <StatCounter value="100%" label="Legal Kemnaker RI" />
          </div>
        </div>
      </section>

      {/* 3. PROGRAM UNGGULAN — washi paper section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-washi texture-washi">
        <span
          className="kanji-watermark absolute top-6 right-4 text-8xl sm:text-9xl text-navy-950 font-jp"
          aria-hidden="true"
        >
          二道
        </span>
        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="anim-fade-up">
            <SectionHeader
              eyebrow="Jalur Karier"
              title="Program Unggulan"
              highlight="LPK PMS"
              description="Dua jalur resmi menuju kerja profesional di Jepang — dipilih sesuai minat, usia, dan kondisi peserta."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            <Link
              href="/tokutei-ginou"
              className="anim-fade-left card-lift group relative block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 transition-all overflow-hidden"
            >
              {/* Aksen garis emas di atas */}
              <span className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-vermilion-700 via-gold-400 to-vermilion-700" />
              <span className="kanji-watermark absolute -right-1 -bottom-3 text-8xl text-vermilion-600 font-jp">
                特定技能
              </span>
              {/* Hanko */}
              <div
                className="animate-hanko absolute top-5 right-5 w-12 h-12 rounded-lg bg-vermilion-600 text-white grid place-items-center font-jp font-black text-base rotate-[-5deg]"
                style={{ boxShadow: "0 8px 18px -6px rgba(200, 16, 46, 0.55)" }}
              >
                合格
              </div>
              <div className="relative flex items-start justify-between gap-4 mb-5 pr-14">
                <div className="w-12 h-12 rounded-xl bg-vermilion-600 text-white flex items-center justify-center font-black text-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-vermilion-600/30">
                  SSW
                </div>
              </div>
              <h3 className="relative font-heading font-black text-xl text-navy-950 mb-2">Tokutei Ginou</h3>
              <p className="relative text-sm text-slate-600 leading-relaxed mb-4">
                Visa kerja keahlian khusus (Specified Skilled Worker) dengan gaji setara warga Jepang. Jalur resmi, transparan, dan berjenjang.
              </p>
              <div className="relative flex flex-wrap gap-1.5">
                {["JLPT N4 / JFT", "Skill Assessment", "Gaji 18-25Jt/bln"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-vermilion-50 text-vermilion-700 text-[11px] font-bold border border-vermilion-200">{tag}</span>
                ))}
              </div>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-vermilion-700">
                Pelajari jalur SSW
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/program/pemagangan"
              className="anim-fade-right card-lift group relative block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 transition-all overflow-hidden"
            >
              <span className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900" />
              <span className="kanji-watermark absolute -right-1 -bottom-3 text-8xl text-navy-950 font-jp">
                実習
              </span>
              <div className="relative flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-white flex items-center justify-center font-black text-base transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-navy-950/30 font-jp">
                  実習
                </div>
              </div>
              <h3 className="relative font-heading font-black text-xl text-navy-950 mb-2">Program Pemagangan</h3>
              <p className="relative text-sm text-slate-600 leading-relaxed mb-4">
                Pelatihan kerja 3–5 tahun di perusahaan mitra industri Jepang (Ginou Jisshuusei). Program resmi berpayung hukum Kemnaker RI.
              </p>
              <div className="relative flex flex-wrap gap-1.5">
                {["3–5 Tahun", "Mitra Kaisha", "Bahasa N5+"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200">{tag}</span>
                ))}
              </div>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-navy-800">
                Pelajari jalur magang
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <span
          className="kanji-watermark absolute bottom-4 left-4 text-9xl text-navy-950 font-jp"
          aria-hidden="true"
        >
          強み
        </span>
        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="anim-fade-up">
            <SectionHeader
              eyebrow="Mengapa LPK PMS?"
              title="Keunggulan yang Membuat"
              highlight="Kami Berbeda"
              description="Standar pelatihan kami dirancang khusus untuk memastikan setiap peserta siap — secara bahasa, fisik, dan mental — menghadapi dunia kerja Jepang."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5" />, kanji: "学", color: "bg-blue-50 text-blue-700", title: "Kurikulum Terarah & Praktis", desc: "Materi dirancang bertahap tanpa duplikasi: Materi Dasar (N5), Inti (N4 & Budaya Kerja), dan Khusus (Teknis & Simulasi Wawancara).", delay: "anim-delay-100" },
              { icon: <Users className="w-5 h-5" />, kanji: "師", color: "bg-indigo-50 text-indigo-700", title: "Instruktur Berpengalaman Jepang", desc: "Tenaga pengajar dengan pengalaman kerja nyata di Jepang, membimbing simulasi wawancara (mensetsu) dan etika komunikasi (keigo).", delay: "anim-delay-150" },
              { icon: <Award className="w-5 h-5" />, kanji: "心", color: "bg-amber-50 text-amber-700", title: "Pembinaan Disiplin & Fisik", desc: "Latihan fisik berkala dan penanaman budaya 5S untuk kesiapan stamina kerja di iklim 4 musim Jepang.", delay: "anim-delay-200" },
              { icon: <Briefcase className="w-5 h-5" />, kanji: "書", color: "bg-purple-50 text-purple-700", title: "Pengurusan Dokumen & CoE", desc: "Pendampingan intensif proses verifikasi data, penerbitan Certificate of Eligibility (CoE) Imigrasi Jepang, visa, hingga tiket penerbangan.", delay: "anim-delay-250" },
              { icon: <HeartHandshake className="w-5 h-5" />, kanji: "道", color: "bg-rose-50 text-rose-700", title: "Pendampingan Menuju Jepang", desc: "Komunikasi berkesinambungan dan koordinasi dengan pihak penerima di Jepang selama masa penugasan peserta.", delay: "anim-delay-300" },
              { icon: <ShieldCheck className="w-5 h-5" />, kanji: "法", color: "bg-emerald-50 text-emerald-700", title: "Legalitas 100% Terverifikasi", desc: "Terdaftar resmi di Kemnaker RI, Kemenkumham, Disnaker Karawang, dan OSS-BKPM. Tidak ada biaya tersembunyi.", delay: "anim-delay-350" },
            ].map((item) => (
              <div
                key={item.title}
                className={`anim-card card-lift ${item.delay} relative p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 overflow-hidden`}
              >
                <span className="kanji-watermark absolute -right-1 -bottom-2 text-6xl text-navy-950 font-jp">
                  {item.kanji}
                </span>
                <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center ${item.color} transition-transform duration-300 hover:scale-110 hover:-rotate-3`}>
                  {item.icon}
                </div>
                <h3 className="relative font-heading font-bold text-base text-navy-950">
                  {item.title}
                </h3>
                <p className="relative text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALUR BERANGKAT KE JEPANG */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-washi texture-washi border-t border-slate-200">
        <span
          className="kanji-watermark absolute top-8 right-6 text-9xl text-navy-950 font-jp"
          aria-hidden="true"
        >
          道
        </span>
        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="anim-fade-up">
            <SectionHeader
              eyebrow="Roadmap Berangkat"
              title="Alur & Tahapan Menuju Kerja"
              highlight="di Jepang"
              description="9 langkah terstruktur dari awal pendaftaran, pembekalan bahasa dan fisik, ujian sertifikasi, seleksi kaisha, hingga terbang dan bekerja di Jepang."
            />
          </div>
          <div className="anim-fade-up anim-delay-150">
            <StepTimeline />
          </div>
        </div>
      </section>

      {/* 6. TOKUTEI GINOU */}
      <TokuteiGinouSection />

      {/* 7. SLIDER */}
      <StructureSlider />

      {/* 8. KONSULTASI */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-gold-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 w-64 h-64 rounded-full bg-vermilion-100/40 blur-3xl" />
        <span
          className="kanji-watermark absolute top-8 left-1/2 -translate-x-1/2 text-9xl text-navy-950 font-jp"
          aria-hidden="true"
        >
          相談
        </span>
        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="anim-fade-up jp-divider mb-8" aria-hidden="true">
            <span className="rhombus" />
          </div>
          <div className="anim-fade-up anim-delay-100">
            <SectionHeader
              eyebrow="Mulai Langkah Pertamamu"
              title="Konsultasikan Rencana Kariermu"
              highlight="Bersama Kami"
              description="Tanyakan segala hal seputar persyaratan, pilihan program, dan estimasi biaya. Tim instruktur LPK PMS siap melayani Anda."
            />
          </div>
          <div className="anim-fade-up anim-delay-150 max-w-2xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 9. LEGALITAS */}
      <OfficialTrustRibbon />

      {/* 10. CTA */}
      <CTA />
    </div>
  );
}
