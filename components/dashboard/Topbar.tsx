"use client";

import { useState, useEffect } from "react";
import { Menu, ShieldCheck, Eye, Search } from "lucide-react";
import Link from "next/link";

interface TopbarProps {
  onToggleSidebar: () => void;
  title?: string;
  subtitle?: string;
}

export default function Topbar({
  onToggleSidebar,
  title = "Dashboard Informasi & Monitoring Siswa",
  subtitle = "Papan pemantauan resmi nama peserta, program, dan progres pelatihan kerja Jepang",
}: TopbarProps) {
  const [currentDate, setCurrentDate] = useState<string>("10 September 2026");

  useEffect(() => {
    try {
      const now = new Date();
      setCurrentDate(
        now.toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
    } catch {
      // fallback
    }
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3.5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Hamburger & Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="p-2 rounded-lg text-slate-600 hover:text-navy-950 hover:bg-slate-100 lg:hidden"
            aria-label="Buka navigasi sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="font-heading font-extrabold text-navy-950 text-base sm:text-lg leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Verified Status & Date */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kemnaker RI Verified</span>
          </div>

          <div className="hidden xl:block text-right">
            <div className="text-xs font-semibold text-slate-700">{currentDate}</div>
            <div className="text-[10px] text-slate-400 font-medium">Karawang, Jawa Barat</div>
          </div>

          <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
            Mode Pemantauan
          </span>
        </div>
      </div>
    </header>
  );
}
