import { curriculumRoadmap } from "@/data/site";
import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardKurikulumPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
          Struktur Silabus & Kurikulum Pelatihan
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Tahapan progresif pembelajaran bahasa, budaya, fisik, dan keterampilan kerja industri
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {curriculumRoadmap.map((item) => (
          <div
            key={item.number}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-2xl font-black text-primary-700">
                  {item.number}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {item.phase}
                </span>
              </div>

              <h2 className="font-heading font-bold text-navy-950 text-lg mb-2">
                {item.title}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Materi Terjadwal:
                </span>
                {item.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href="/kurikulum"
                className="text-xs font-bold text-navy-950 hover:text-primary-700 inline-flex items-center gap-1.5"
              >
                <span>Lihat Format Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
