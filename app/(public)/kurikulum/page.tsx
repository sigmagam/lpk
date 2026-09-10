import { curriculumRoadmap, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, Layers, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kurikulum Pelatihan Kerja | LPK Panca Multiguna Sukses Karawang",
  description:
    "Kurikulum resmi LPK Panca Multiguna Sukses Karawang: Materi Dasar, Materi Inti, dan Materi Khusus yang disusun bertahap untuk kesiapan kerja di Jepang.",
};

export default function KurikulumPage() {
  const stageKanji = ["基礎編", "中核編", "専門編"];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b-2 border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border-2 border-navy-700 text-xs font-black text-emerald-300 uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            Standar Pendidikan & Keterampilan Resmi
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Kurikulum Pelatihan Kerja ke Jepang
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
                className="box-3d-special rounded-3xl p-8 sm:p-12 relative overflow-hidden group"
              >
                {/* Kanji Stage Stamp */}
                <span className="absolute top-4 right-8 font-heading font-black text-6xl sm:text-7xl text-slate-100 select-none pointer-events-none group-hover:text-primary-50 transition-colors">
                  {stageKanji[idx] || "講習"}
                </span>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-slate-200">
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

                    <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-black self-start md:self-auto border-2 border-slate-300">
                      Tahap 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-8 font-medium">
                    {item.description}
                  </p>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-4">
                      Rincian Modul Terjadwal:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {item.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="box-3d-bold p-4 rounded-2xl bg-slate-50 flex items-center gap-3 text-xs sm:text-sm text-navy-950 font-bold"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-navy-950 hover:bg-navy-900 text-white font-black text-xs shadow-md transition-all hover:-translate-y-1 border-2 border-navy-950"
            >
              <span>Lihat Pilihan Program Terkait</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
