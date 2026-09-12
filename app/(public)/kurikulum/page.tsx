import { curriculumRoadmap, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Layers,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kurikulum Pelatihan Kerja ke Jepang | LPK PMS",
  description:
    "Kurikulum resmi LPK Panca Multiguna Sukses: Materi Dasar, Materi Inti, dan Materi Khusus terstruktur standar industri Kaisha dan Kemnaker RI.",
  keywords: [
    "kurikulum LPK PMS",
    "materi bahasa jepang n5 n4",
    "pelatihan kerja kaisha jepang",
    "silabus magang jepang resmi",
    "belajar bahasa jepang karawang"
  ]
};

export default function KurikulumPage() {
  const stageKanji = ["基礎編", "中核編", "専門編"];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900">

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="anim-scale-pop inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Standar Pendidikan Vokasi Terakreditasi</span>
          </div>

          <h1 className="anim-fade-up anim-delay-100 font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Kurikulum Pelatihan Kerja ke Jepang
          </h1>

          <p className="anim-fade-up anim-delay-200 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Struktur materi bertahap tanpa duplikasi: dari penguasaan tata bahasa dasar, pembinaan etika kerja Kaisha, hingga pemantapan keterampilan spesifik bidang industri.
          </p>
        </div>
      </section>

      {/* 2. Main Curriculum Roadmap */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="anim-fade-up"><SectionHeader
            eyebrow="Struktur 3 Tahap"
            kanji="学習体系"
            title="3 Fase Pembinaan Berjenjang"
            highlight="Menuju Kesiapan Kerja"
            description="Setiap modul disusun sistematis agar siswa mencapai kemampuan bahasa komunikatif (kaiwa), ketahanan fisik prima, dan mental kerja siap pakai."
          /></div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {curriculumRoadmap.map((item, idx) => (
              <article
                key={item.number}
                className="anim-fade-up anim-delay-100 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 relative overflow-hidden"
              >

                <div className="relative z-10 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-navy-950 text-white">
                      Fase {item.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-vermilion-700 bg-vermilion-50 border border-vermilion-200 px-3 py-1 rounded-full">
                      {item.phase}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-navy-950">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Komponen & Indikator Capaian:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.details.map((d, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="anim-fade-up anim-delay-300 mt-12 text-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-950 hover:text-vermilion-600 transition-colors"
            >
              <span>Pelajari Implementasi Kurikulum pada Seluruh Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
