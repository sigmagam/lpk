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
            className="p-2 rounded-lg text-slate-800 hover:text-navy-950 hover:bg-slate-100 lg:hidden border border-slate-300"
            aria-label="Buka navigasi sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="font-heading font-black text-navy-950 text-base sm:text-lg leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-xs text-slate-700 font-medium hidden sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Verified Status & Date */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kemnaker RI Verified</span>
          </div>

          <div className="hidden xl:block text-right">
            <div className="text-xs font-bold text-slate-900">{currentDate}</div>
            <div className="text-[11px] text-slate-600 font-medium">Karawang, Jawa Barat</div>
          </div>

          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold border border-slate-300">
            Mode Pemantauan
          </span>
        </div>
      </div>
    </header>
  );
}
