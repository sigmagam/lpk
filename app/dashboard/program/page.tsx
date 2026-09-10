import { programs } from "@/data/site";
import Link from "next/link";
import { BookOpen, CheckCircle, ArrowRight, ExternalLink, GraduationCap, Layers } from "lucide-react";

export default function DashboardProgramPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-900 text-xs font-black border border-primary-200 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>5 Program Terverifikasi Kemnaker RI</span>
            </div>
            <h1 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
              Direktori Program Pelatihan Kerja
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
              Silabus dan modul pelatihan resmi LPK Panca Multiguna Sukses Karawang
            </p>
          </div>
          <Link
            href="/program"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold self-start sm:self-auto border border-slate-300 transition-colors"
          >
            <span>Lihat Tampilan Publik</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Program Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((prog, idx) => (
          <div
            key={prog.id}
            className="card-3d-interactive bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-navy-950 text-white text-[11px] font-black">
                  0{idx + 1}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 text-[10px] font-black border border-emerald-300">
                  <CheckCircle className="w-3 h-3 text-emerald-700" />
                  Aktif
                </span>
              </div>

              <h2 className="font-heading font-black text-navy-950 text-base mb-2">
                {prog.title}
              </h2>
              <div className="text-xs font-black text-primary-800 mb-3">
                {prog.stages}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                {prog.shortDesc}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-slate-200">
                <span className="text-[11px] font-black uppercase text-slate-700 block">
                  Komponen Utama:
                </span>
                {prog.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="text-xs text-slate-900 flex items-start gap-1.5 font-medium">
                    <span className="text-primary-700 font-bold">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600">
                {prog.category}
              </span>
              <Link
                href={prog.href}
                className="inline-flex items-center gap-1 text-xs font-black text-navy-950 hover:text-primary-800 transition-colors"
              >
                <span>Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
