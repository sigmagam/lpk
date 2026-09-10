import { curriculumRoadmap, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { GraduationCap, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kurikulum Pelatihan | LPK Panca Multiguna Sukses Karawang",
  description:
    "Kurikulum resmi LPK Panca Multiguna Sukses Karawang: Materi Dasar, Materi Inti, dan Materi Khusus yang disusun bertahap untuk kesiapan kerja di Jepang.",
};

export default function KurikulumPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            Standar Pendidikan & Keterampilan
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Kurikulum Pelatihan Kerja
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Struktur materi berjenjang tanpa duplikasi untuk memastikan setiap peserta menguasai keterampilan praktis dan bahasa secara komprehensif.
          </p>
        </div>
      </section>

      {/* Main Roadmap */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 max-w-5xl mx-auto">
            {curriculumRoadmap.map((item, idx) => (
              <div
                key={item.number}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-navy-950">
                      {item.number}
                    </span>
                    <div>
                      <span className="text-xs font-black uppercase text-primary-800 tracking-wider block">
                        {item.phase}
                      </span>
                      <h2 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold self-start md:self-auto border border-slate-300">
                    Tahap 0{idx + 1}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-8 font-normal">
                  {item.description}
                </p>

                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-4">
                    Materi Pembelajaran:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-navy-950 font-bold"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs shadow-md transition-colors"
            >
              <span>Lihat Program Pelatihan Terkait</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
