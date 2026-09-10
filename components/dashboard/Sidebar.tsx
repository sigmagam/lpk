"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  HelpCircle,
  MapPin,
  ExternalLink,
  ChevronRight,
  X,
  LucideIcon
} from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

interface MenuGroup {
  group: string;
  items: MenuItem[];
}

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const menuGroups: MenuGroup[] = [
    {
      group: "Informasi & Pemantauan",
      items: [
        { label: "Ringkasan Informasi", href: "/dashboard", icon: LayoutDashboard },
        { label: "Daftar Peserta & Tahap", href: "/dashboard/peserta", icon: Users, badge: "Monitoring" },
        { label: "Daftar Program", href: "/dashboard/program", icon: BookOpen },
        { label: "Modul & Kurikulum", href: "/dashboard/kurikulum", icon: GraduationCap },
      ],
    },
    {
      group: "Legalitas & Kontak",
      items: [
        { label: "Legalitas Kemnaker RI", href: "/dashboard/legalitas", icon: ShieldCheck },
        { label: "Pusat Bantuan FAQ", href: "/dashboard/faq", icon: HelpCircle },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-navy-950 text-slate-100 border-r border-navy-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-navy-800 flex items-center justify-between bg-navy-900/60">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl p-1 shadow-md flex items-center justify-center shrink-0 border border-slate-300">
              <Image
                src="/images/logo.png"
                alt="Logo LPK PMS Karawang"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-heading font-black text-white text-xs tracking-tight uppercase leading-snug">
                LPK PMS Karawang
              </div>
              <div className="text-[10px] text-primary-200 font-bold tracking-wider uppercase">
                Dashboard Informasi
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 lg:hidden"
            aria-label="Tutup sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Accreditation Pill */}
        <div className="px-5 py-3 bg-navy-900/40 border-b border-navy-800">
          <div className="flex items-center gap-2 text-xs text-emerald-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Papan Informasi Terbuka</span>
          </div>
          <div className="text-[11px] text-slate-300 truncate mt-0.5 font-medium">
            Data Resmi Siswa & Program Pelatihan
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6" aria-label="Menu Dashboard Informasi">
          {menuGroups.map((group) => (
            <div key={group.group} className="space-y-1">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-3 pb-1">
                {group.group}
              </div>
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all group ${
                      isActive
                        ? "bg-primary-700 text-white shadow-md shadow-primary-950/50"
                        : "text-slate-200 hover:bg-navy-900 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-slate-300 group-hover:text-primary-300"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-navy-900 text-primary-200 border border-navy-700">
                          {item.badge}
                        </span>
                      )}
                      {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-90" />}
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-navy-800 bg-navy-900/60 space-y-3">
          <Link
            href="/"
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold border border-navy-700 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" />
              <span>Buka Beranda Utama</span>
            </div>
            <span className="text-[11px] text-slate-300 font-medium">lpk-pms</span>
          </Link>

          <div className="flex items-center justify-between text-xs text-slate-300 px-1 font-medium">
            <span>Mode: Informasi Siswa</span>
            <span className="text-emerald-300 font-bold">Live</span>
          </div>
        </div>
      </aside>
    </>
  );
}
