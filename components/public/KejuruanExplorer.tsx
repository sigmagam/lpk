"use client";

import { useState, useMemo } from "react";
import { daftarBidangKejuruan } from "@/data/site";
import {
  Search,
  HardHat,
  Factory,
  Hammer,
  Wrench,
  Scissors,
  FlaskConical,
  Printer,
  Utensils,
  HeartHandshake,
  Briefcase,
  CheckCircle2
} from "lucide-react";

export default function KejuruanExplorer() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("" );

  const getCategoryIcon = (iconType: string) => {
    switch (iconType) {
      case "hard-hat":
        return <HardHat className="w-5 h-5 text-amber-600" />;
      case "factory":
        return <Factory className="w-5 h-5 text-primary-700" />;
      case "hammer":
        return <Hammer className="w-5 h-5 text-vermilion-600" />;
      case "wrench":
        return <Wrench className="w-5 h-5 text-slate-700" />;
      case "scissors":
        return <Scissors className="w-5 h-5 text-purple-600" />;
      case "flask":
        return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case "printer":
        return <Printer className="w-5 h-5 text-blue-600" />;
      case "utensils":
        return <Utensils className="w-5 h-5 text-orange-600" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return daftarBidangKejuruan
      .filter((cat) => activeTab === "all" || cat.id === activeTab)
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeTab, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return daftarBidangKejuruan.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header Info & Search Toolbar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5 text-primary-700" />
              <span>Direktori Kejuruan Resmi Program Magang & SSW Jepang</span>
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
              Cari & Eksplorasi Bidang Keahlian
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Menampilkan total <strong className="text-navy-950">{totalSkillCount} kejuruan spesifik</strong> dalam 9 kelompok sektor industri resmi.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <label htmlFor="kejuruan-search" className="sr-only">
              Cari nama kejuruan atau keahlian
            </label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              id="kejuruan-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kejuruan... (contoh: CNC, bento, las, cat)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "all"
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            Semua Sektor ({daftarBidangKejuruan.length})
          </button>
          {daftarBidangKejuruan.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === cat.id
                  ? "bg-navy-950 text-white shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat.name.replace("Bidang ", "")}
            </button>
          ))}
        </div>
      </div>

      {/* Categories & Skills Grid */}
      <div className="space-y-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    {getCategoryIcon(category.iconType)}
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-base sm:text-lg text-navy-950">
                      {category.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {category.skills.length} pilihan kejuruan aktif
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                  Jalur Magang & SSW
                </span>
              </div>

              {/* Skills Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/90 border border-slate-200/80 text-xs text-slate-800 font-medium flex items-start gap-2 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <div className="font-heading font-bold text-base text-navy-950">
              Tidak ada kejuruan yang cocok
            </div>
            <p className="text-xs text-slate-500">
              Tidak ditemukan kejuruan dengan kata kunci &quot;{searchQuery}&quot;. Silakan coba kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
