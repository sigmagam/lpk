import { programs } from "@/data/site";
import Link from "next/link";
import { BookOpen, CheckCircle, ArrowRight, ExternalLink, Layers, Plus } from "lucide-react";

export default function YusufProgramPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-vermilion-100 text-vermilion-800 text-[10px] font-bold">
              Admin Yusuf
            </span>
            <span className="text-xs text-slate-400">• Program Pelatihan</span>
          </div>
          <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
            Kelola Program & Silabus Pelatihan
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Daftar 5 program resmi LPK Panca Multiguna Sukses Karawang terakreditasi Kemnaker RI
          </p>
        </div>

        <Link
          href="/dashboard/program"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold self-start sm:self-auto transition-colors"
        >
          <span>Tinjau di Dashboard</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((prog, idx) => (
          <div
            key={prog.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-navy-950 text-white text-[11px] font-bold">
                  0{idx + 1}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  <CheckCircle className="w-3 h-3" />
                  Aktif
                </span>
              </div>

              <h2 className="font-heading font-bold text-navy-950 text-base mb-2">
                {prog.title}
              </h2>
              <div className="text-[11px] font-semibold text-primary-700 mb-3">
                {prog.stages}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {prog.shortDesc}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  Komponen Utama:
                </span>
                {prog.highlights.map((h, i) => (
                  <div key={i} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">
                {prog.category}
              </span>
              <Link
                href={prog.href}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-bold text-navy-950 hover:text-primary-700"
              >
                <span>Lihat Publik</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
