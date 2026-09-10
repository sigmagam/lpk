import { programs, siteConfig } from "@/data/site";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, CheckCircle2, ArrowRight, Layers, ShieldCheck, Sparkles, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Program Pelatihan Kerja ke Jepang | LPK Panca Multiguna Sukses Karawang",
  description:
    "Direktori lengkap program pelatihan bahasa Jepang, persiapan kerja, pemagangan, budaya, dan pengembangan kompetensi di LPK Panca Multiguna Sukses Karawang.",
};

export default function ProgramPage() {
  const kanjiLabels = ["基礎", "特定技能", "技能実習", "日本文化", "専門技術"];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b-2 border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border-2 border-navy-700 text-xs font-black text-emerald-300 uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-4 h-4 text-emerald-400" />
            Kurikulum Pelatihan Terstruktur Kemnaker RI
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Program Pelatihan Kerja ke Jepang
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Pembekalan intensif kemampuan bahasa, keterampilan teknis, pembinaan fisik, serta kesiapan mental menghadapi lingkungan kerja di Jepang.
          </p>
        </div>
      </section>

      {/* Program Catalog (Special UI) */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, idx) => (
              <div
                key={program.id}
                className="box-3d-special rounded-3xl p-8 sm:p-10 relative overflow-hidden group"
              >
                {/* Kanji Watermark Accent (Special Visual Touch) */}
                <span className="absolute top-4 right-6 font-heading font-black text-6xl sm:text-8xl text-slate-100 select-none pointer-events-none group-hover:text-primary-50 transition-colors">
                  {kanjiLabels[idx] || "研修"}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Number, Title, & Badge */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-black px-3 py-1 rounded-lg bg-navy-950 text-white shadow-sm">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-black uppercase text-primary-800 tracking-wider">
                        {program.category}
                      </span>
                    </div>

                    <h2 className="font-heading font-black text-xl sm:text-2xl text-navy-950 leading-tight">
                      {program.title}
                    </h2>

                    <div className="inline-flex items-center gap-2 text-xs font-black text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded-full border-2 border-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>{program.stages}</span>
                    </div>
                  </div>

                  {/* Center Column: Description & Highlights */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {program.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 block">
                        Fokus Pembelajaran Utama:
                      </span>
                      {program.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Actions */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-between h-full pt-4 lg:pt-0 border-t-2 lg:border-t-0 border-slate-200">
                    <Link
                      href={program.href}
                      className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-black transition-all hover:-translate-y-0.5 text-center shadow-md border-2 border-navy-950"
                    >
                      <span>Lihat Rincian Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-black transition-colors text-center border-2 border-slate-300"
                    >
                      <span>Konsultasi Program</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
