import { programs, siteConfig } from "@/data/site";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, CheckCircle2, ArrowRight, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Program Pelatihan | LPK Panca Multiguna Sukses Karawang",
  description:
    "Direktori lengkap program pelatihan bahasa Jepang, persiapan kerja, pemagangan, budaya, dan pengembangan kompetensi di LPK Panca Multiguna Sukses Karawang.",
};

export default function ProgramPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-xs font-semibold text-primary-300 uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-primary-400" />
            Kurikulum Pelatihan Terstruktur
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Program Pelatihan Kerja ke Jepang
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pembekalan intensif kemampuan bahasa, keterampilan teknis, pembinaan fisik, serta kesiapan mental menghadapi lingkungan kerja di Jepang.
          </p>
        </div>
      </section>

      {/* Program Catalog */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, idx) => (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Program Number & Category (4 cols) */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-black px-3 py-1 rounded-lg bg-navy-950 text-white">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-bold uppercase text-primary-700 tracking-wider">
                        {program.category}
                      </span>
                    </div>

                    <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950 leading-tight">
                      {program.title}
                    </h2>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{program.stages}</span>
                    </div>
                  </div>

                  {/* Center: Description & Highlights (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {program.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Fokus Pembelajaran:
                      </span>
                      {program.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Actions (3 cols) */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-between h-full pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <Link
                      href={program.href}
                      className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors text-center"
                    >
                      <span>Lihat Rincian Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors text-center"
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
