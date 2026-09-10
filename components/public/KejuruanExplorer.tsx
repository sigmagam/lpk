"use client";

import { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getCategoryIcon = (iconType: string) => {
    switch (iconType) {
      case "hard-hat":
        return <HardHat className="w-5 h-5 text-amber-700" />;
      case "factory":
        return <Factory className="w-5 h-5 text-primary-700" />;
      case "hammer":
        return <Hammer className="w-5 h-5 text-vermilion-700" />;
      case "wrench":
        return <Wrench className="w-5 h-5 text-slate-800" />;
      case "scissors":
        return <Scissors className="w-5 h-5 text-purple-700" />;
      case "flask":
        return <FlaskConical className="w-5 h-5 text-emerald-700" />;
      case "printer":
        return <Printer className="w-5 h-5 text-blue-700" />;
      case "utensils":
        return <Utensils className="w-5 h-5 text-orange-700" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-rose-700" />;
    }
  };

  const filteredCategories = daftarBidangKejuruan
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

  const totalSkillCount = daftarBidangKejuruan.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <div className="space-y-8">
      {/* Header Info & Search Toolbar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-md space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 border-2 border-navy-900 text-xs font-black text-navy-950 uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4 text-primary-800" />
              <span>Daftar Kejuruan Resmi Program Magang & Kerja Jepang</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-navy-950">
              Bidang & Kejuruan Kerja Resmi LPK PMS
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
              Meliputi <span className="font-black text-navy-950">{totalSkillCount} kejuruan spesifik</span> di berbagai sektor industri utama Jepang.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kejuruan / bidang kerja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border-2 border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-950 bg-slate-50"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 border-t-2 border-slate-100">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap border-2 ${
              activeTab === "all"
                ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                : "bg-white text-slate-800 hover:bg-slate-100 border-slate-300"
            }`}
          >
            Semua Bidang ({totalSkillCount})
          </button>

          {daftarBidangKejuruan.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border-2 ${
                activeTab === cat.id
                  ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border-slate-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories & Kotak-Kotak 3D Tebal */}
      <div className="space-y-8">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-md space-y-5"
            >
              {/* Category Title Header */}
              <div className="flex items-center gap-3 pb-4 border-b-2 border-slate-200">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center shrink-0 shadow-sm">
                  {getCategoryIcon(category.iconType)}
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-navy-950 leading-tight">
                    {category.name}
                  </h3>
                  <span className="text-xs font-bold text-slate-600">
                    {category.skills.length} Jenis Kejuruan Praktis
                  </span>
                </div>
              </div>

              {/* Kotak-Kotak 3D Tebal untuk Tiap Kejuruan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="box-3d-bold p-3.5 rounded-2xl bg-slate-50 flex items-start gap-3 group"
                  >
                    <span className="w-6 h-6 rounded-lg bg-navy-950 text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-vermilion-600 transition-colors">
                      {sIdx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-navy-950 leading-snug">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-slate-300 shadow-sm">
            <p className="text-base font-black text-navy-950">
              Tidak ada kejuruan yang cocok dengan kata kunci &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Coba cari dengan nama kejuruan lain atau bersihkan kotak pencarian.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-navy-950 text-white text-xs font-bold shadow-sm"
            >
              Tampilkan Semua Kejuruan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
