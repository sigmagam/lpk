"use client";

import { useState, useEffect } from "react";
import { Menu, Bell, ShieldCheck, UserCheck, Plus, CheckCircle2 } from "lucide-react";

interface TopbarProps {
  onToggleSidebar: () => void;
  onOpenAddModal?: () => void;
  title?: string;
  subtitle?: string;
}

export default function Topbar({
  onToggleSidebar,
  onOpenAddModal,
  title = "Ringkasan Operasional LPK",
  subtitle = "Panel pengelolaan data pelatihan & pemagangan ke Jepang",
}: TopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
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

  const notifications = [
    {
      id: "n-1",
      title: "Verifikasi Berkas Batch XII",
      time: "10 menit lalu",
      text: "4 peserta siap dijadwalkan wawancara user Kaisha.",
      unread: true,
    },
    {
      id: "n-2",
      title: "Status Skillhub Kemnaker",
      time: "2 jam lalu",
      text: "Sinkronisasi modul Materi Dasar berhasil terverifikasi.",
      unread: false,
    },
    {
      id: "n-3",
      title: "Pembaruan Jadwal MCU",
      time: "Kemarin",
      text: "Pemeriksaan kesehatan peserta tahap CoE selesai dicatat.",
      unread: false,
    },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3.5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Hamburger & Breadcrumb Title */}
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

        {/* Right: Date, Status, Notifications, Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Institutional Status Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kemnaker RI Verified</span>
          </div>

          {/* Current Date WIB */}
          <div className="hidden xl:block text-right">
            <div className="text-xs font-semibold text-slate-700">{currentDate}</div>
            <div className="text-[10px] text-slate-600 font-medium">Zona Waktu: WIB</div>
          </div>

          {/* Quick Action Button */}
          {onOpenAddModal && (
            <button
              type="button"
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary-700 hover:bg-primary-800 text-white text-xs font-bold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Tambah Peserta</span>
            </button>
          )}

          {/* Notification Button & Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-xl text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
              aria-label="Notifikasi sistem"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-vermilion-600 ring-2 ring-white" />
            </button>

            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-2 w-80 sm:w-88 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-fade-up">
                  <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-heading font-bold text-xs text-navy-950 uppercase tracking-wider">
                      Notifikasi Operasional
                    </span>
                    <span className="text-[10px] text-primary-700 font-semibold cursor-pointer hover:underline">
                      Tandai Dibaca
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`p-3.5 hover:bg-slate-50 transition-colors ${
                          n.unread ? "bg-primary-50/40" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-navy-900">
                            {n.title}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {n.time}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {n.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 pt-2 border-t border-slate-100 text-center">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Seluruh sistem sinkron
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              AD
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold text-navy-950 leading-tight">
                Admin LPK
              </div>
              <div className="text-[10px] text-slate-600">Karawang HQ</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
