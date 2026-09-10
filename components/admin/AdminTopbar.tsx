"use client";

import { useState } from "react";
import { Menu, Bell, ShieldAlert, Plus, Eye, ExternalLink } from "lucide-react";
import Link from "next/link";

interface AdminTopbarProps {
  onToggleSidebar: () => void;
  onOpenAddModal?: () => void;
  title?: string;
  subtitle?: string;
}

export default function AdminTopbar({
  onToggleSidebar,
  onOpenAddModal,
  title = "Panel Manajemen Yusuf",
  subtitle = "Kelola tambah, edit, dan hapus data peserta pelatihan",
}: AdminTopbarProps) {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3.5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="p-2 rounded-lg text-slate-600 hover:text-navy-950 hover:bg-slate-100 lg:hidden"
            aria-label="Buka menu admin"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-heading font-extrabold text-navy-950 text-base sm:text-lg leading-tight tracking-tight">
                {title}
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-vermilion-100 text-vermilion-800 font-mono text-[10px] font-bold">
                /yusuf
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick link to /dashboard (View-only) */}
          <Link
            href="/dashboard"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-primary-600" />
            <span>Lihat Dashboard Informasi</span>
          </Link>

          {/* Add Peserta Button */}
          {onOpenAddModal && (
            <button
              type="button"
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Tambah Peserta</span>
            </button>
          )}

          {/* Profile Badge Yusuf */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-vermilion-700 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              Y
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-navy-950 leading-tight">
                Yusuf (Admin)
              </div>
              <div className="text-[10px] text-emerald-600 font-semibold">Superadmin Aktif</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
