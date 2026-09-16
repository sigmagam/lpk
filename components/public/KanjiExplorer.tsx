"use client";

import { useState, useMemo } from "react";
import { Search, RotateCw, BookOpen, X, Layers } from "lucide-react";
import type { KanjiN5 } from "@/data/kanji-n5";

interface KanjiExplorerProps {
  items: KanjiN5[];
  lessons: number[];
  total: number;
}

export default function KanjiExplorer({ items, lessons, total }: KanjiExplorerProps) {
  const [activeLesson, setActiveLesson] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter((item) => {
      const matchLesson = activeLesson === "all" || item.pelajaran === activeLesson;
      if (!matchLesson) return false;
      if (!q) return true;
      return [item.kanji, item.arti, item.onyomi, item.kunyomi, item.kosakata, item.furigana, item.artiKosakata]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [items, activeLesson, searchQuery]);

  const toggleFlip = (index: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const resetFilter = () => {
    setActiveLesson("all");
    setSearchQuery("");
  };

  const hasFilter = activeLesson !== "all" || searchQuery.trim() !== "";

  return (
    <div className="space-y-8">
      {/* Search Input & Lesson Pills */}
      <div className="space-y-4">
        <div className="relative max-w-xl mx-auto">
          <label htmlFor="kanji-search" className="sr-only">
            Cari Kanji
          </label>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            id="kanji-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kanji, arti, bacaan, atau kosakata... (contoh: hari, にほん, 日本)"
            className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-navy-950 transition-colors"
              aria-label="Hapus kata kunci pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          <button
            type="button"
            onClick={() => setActiveLesson("all")}
            aria-pressed={activeLesson === "all"}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeLesson === "all"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Semua
          </button>
          {lessons.map((lesson) => (
            <button
              key={lesson}
              type="button"
              onClick={() => setActiveLesson(lesson)}
              aria-pressed={activeLesson === lesson}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeLesson === lesson
                  ? "bg-navy-950 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Pelajaran {lesson}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <div className="flex items-center justify-center gap-3 text-xs font-semibold text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-vermilion-600" />
          Menampilkan {filteredItems.length} dari {total} kanji
        </span>
        {hasFilter && (
          <button
            type="button"
            onClick={resetFilter}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-vermilion-50 text-vermilion-700 border border-vermilion-200 hover:bg-vermilion-100 transition-colors"
          >
            <X className="w-3 h-3" />
            <span>Reset filter</span>
          </button>
        )}
      </div>

      {/* Kanji flashcard grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {filteredItems.map((item, index) => {
            const isFlipped = flipped.has(index);
            return (
              <div
                key={`${item.kanji}-${item.pelajaran}`}
                className="anim-card"
                style={{ animationDelay: `${(index % 10) * 40}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggleFlip(index)}
                  aria-pressed={isFlipped}
                  aria-label={`Kartu kanji ${item.kanji} (${item.arti}) — klik untuk melihat bacaan dan contoh kosakata`}
                  className="relative w-full h-52 text-left [transform-style:preserve-3d] transition-transform duration-500 rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-vermilion-600 focus-visible:ring-offset-2"
                  style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  {/* Front face: kanji + arti */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Pel. {item.pelajaran}
                      </span>
                      <RotateCw className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-heading text-5xl sm:text-6xl font-black text-navy-950 leading-none">
                        {item.kanji}
                      </span>
                    </div>
                    <div className="px-3.5 pb-3.5">
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 line-clamp-2 leading-snug">
                        {item.arti}
                      </p>
                    </div>
                  </div>

                  {/* Back face: bacaan + contoh kosakata */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-navy-950 border border-navy-800 shadow-md overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3">
                      <span className="font-heading text-lg font-black text-white">
                        {item.kanji}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-vermilion-300">
                        Pel. {item.pelajaran}
                      </span>
                    </div>
                    <div className="flex-1 px-3.5 py-2.5 space-y-1.5 overflow-hidden">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                          On
                        </span>
                        <span className="text-xs font-semibold text-white truncate">
                          {item.onyomi}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                          Kun
                        </span>
                        <span className="text-xs font-semibold text-white truncate">
                          {item.kunyomi}
                        </span>
                      </div>
                      <div className="my-2 h-px bg-navy-800" />
                      <div>
                        <span className="block text-[10px] text-vermilion-300 font-bold leading-tight">
                          {item.furigana}
                        </span>
                        <span className="block text-sm font-heading font-black text-white leading-tight">
                          {item.kosakata}
                        </span>
                        <span className="block text-[11px] text-slate-300 leading-tight line-clamp-2">
                          {item.artiKosakata}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="font-heading font-bold text-base text-navy-950">
            Kanji tidak ditemukan
          </div>
          <p className="text-xs text-slate-500">
            Tidak ada kanji yang sesuai dengan kata kunci &quot;{searchQuery}&quot;
            {activeLesson !== "all" ? ` pada Pelajaran ${activeLesson}` : ""}. Coba kata kunci lain atau reset filter.
          </p>
          <button
            type="button"
            onClick={resetFilter}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold shadow-sm transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Reset Filter</span>
          </button>
        </div>
      )}
    </div>
  );
}
