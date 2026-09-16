import { kanjiN5, pelajaranKanjiN5, totalKanjiN5 } from "@/data/kanji-n5";
import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import KanjiExplorer from "@/components/public/KanjiExplorer";
import CTA from "@/components/public/CTA";
import { BookOpen, Grid3x3, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Kanji JLPT N5 Minna no Nihongo | LPK PMS",
  description:
    "Daftar lengkap 243 kanji JLPT N5 sesuai Minna no Nihongo Shokyu I: arti, onyomi, kunyomi, dan contoh kosakata. Flashcard interaktif untuk persiapan ujian N5.",
  keywords: [
    "kanji jlpt n5",
    "kanji minna no nihongo",
    "belajar kanji n5",
    "flashcard kanji bahasa jepang",
    "kosakata kanji n5 lengkap"
  ]
};

export default function KanjiN5Page() {
  const stats = [
    { icon: BookOpen, label: "Total Kanji", value: totalKanjiN5 },
    { icon: Layers, label: "Pelajaran", value: pelajaranKanjiN5.length },
    { icon: Grid3x3, label: "Level", value: "N5" }
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="anim-kanji-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Materi Bahasa Jepang • JLPT N5</span>
          </div>

          <h1 className="anim-kanji-down anim-delay-100 font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Kanji N5 Minna no Nihongo
          </h1>

          <p className="anim-kanji-down anim-delay-200 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Daftar lengkap kanji level N5 yang dipelajari di Minna no Nihongo Shokyu I. Klik kartu untuk
            melihat bacaan on/kun dan contoh kosakata. Gunakan pencarian atau filter pelajaran untuk belajar per bab.
          </p>

          <div className="anim-kanji-down anim-delay-300 flex items-center justify-center gap-3 sm:gap-6 flex-wrap mt-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
                className="anim-kanji-pop flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-5 h-5 text-vermilion-400 shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-xl font-black text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Kanji Flashcard Explorer */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="anim-fade-up">
            <SectionHeader
              eyebrow="Flashcard Kanji"
              kanji="漢字練習"
              title={`${totalKanjiN5} Kanji N5 dengan`}
              highlight="Bacaan & Contoh Kosakata"
              description="Setiap kartu memuat kanji, arti bahasa Indonesia, bacaan onyomi (katakana) dan kunyomi (hiragana), serta contoh kosakata lengkap dengan furigana."
            />
          </div>

          <KanjiExplorer items={kanjiN5} lessons={pelajaranKanjiN5} total={totalKanjiN5} />
        </div>
      </section>

      {/* 3. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
