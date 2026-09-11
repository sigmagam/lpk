import { programs, siteConfig } from "@/data/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Layers,
  ArrowRight,
  Sparkles,
  Phone,
  BookOpen
} from "lucide-react";
import CTA from "@/components/public/CTA";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) {
    return { title: "Program Tidak Ditemukan | LPK PMS Karawang" };
  }
  return {
    title: `${program.title} | LPK PMS Karawang`,
    description: program.shortDesc,
    keywords: [
      program.title,
      "pelatihan kerja jepang",
      "LPK PMS Karawang",
      program.category,
      "kursus bahasa jepang karawang"
    ]
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const otherPrograms = programs.filter((p) => p.slug !== slug);

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />
        <span
          aria-hidden="true"
          className="absolute -right-6 -bottom-8 font-heading font-black text-8xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
        >
          研修詳細
        </span>

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Kembali ke Seluruh Program</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-vermilion-400" />
              <span>{program.stages}</span>
            </span>
            <span className="text-xs font-bold text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Kategori: {program.category}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 max-w-3xl">
            {program.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            {program.shortDesc}
          </p>
        </div>
      </section>

      {/* 2. Content Breakdown */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Syllabus & Scope */}
            <div className="lg:col-span-8 space-y-6">
              {/* Deskripsi Lengkap */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vermilion-600">
                  <BookOpen className="w-4 h-4" />
                  <span>Deskripsi & Tujuan Program</span>
                </div>
                <h2 className="font-heading font-black text-xl text-navy-950">
                  Gambaran Umum Pembekalan
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Materi & Silabus Utama */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="font-heading font-black text-lg text-navy-950">
                  Cakupan Materi & Kompetensi
                </h3>
                <div className="space-y-3">
                  {program.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fokus Kesiapan */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="font-heading font-black text-lg text-navy-950">
                  Fokus Kesiapan Kerja Peserta
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {program.focus.map((f, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-navy-950 text-center flex items-center justify-center"
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Lainnya */}
              <div className="pt-6">
                <h3 className="font-heading font-bold text-base text-navy-950 mb-4">
                  Program Pembekalan Terkait Lainnya:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherPrograms.slice(0, 2).map((other) => (
                    <Link
                      key={other.id}
                      href={other.href}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all group"
                    >
                      <div className="text-[11px] font-bold text-slate-400 uppercase">
                        {other.stages}
                      </div>
                      <div className="text-sm font-bold text-navy-950 group-hover:text-vermilion-600 transition-colors mt-0.5">
                        {other.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {other.shortDesc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quick Action Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Box Konsultasi */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="font-heading font-black text-lg text-navy-950 pb-2 border-b border-slate-100">
                  Daftar Program Ini
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Hubungi konsultan LPK PMS Karawang untuk menanyakan jadwal batch kelas, persyaratan berkas, dan tahapan seleksi program <strong>{program.title}</strong>.
                </p>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-md transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Daftar via WhatsApp</span>
                </a>

                <div className="pt-2 text-[11px] text-slate-500 space-y-1 text-center">
                  <div>Karawang, Jawa Barat</div>
                  <div>WhatsApp: {siteConfig.whatsappNumber}</div>
                </div>
              </div>

              {/* Box Legalitas */}
              <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-7 border border-navy-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Jaminan Legalitas Kemnaker</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  LPK Panca Multiguna Sukses terdaftar resmi di Kemnaker RI dengan nomor VIN <strong>{siteConfig.vinNumber}</strong>.
                </p>
                <Link
                  href="/legalitas"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold pt-1"
                >
                  <span>Cek Profil Legalitas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Pre-footer */}
      <CTA />
    </div>
  );
}
