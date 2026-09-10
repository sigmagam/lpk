"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShieldAlert,
  Users,
  BookOpen,
  Settings,
  LayoutDashboard,
  ExternalLink,
  ChevronRight,
  X,
  PlusCircle,
  LucideIcon,
  ShieldCheck,
  Eye
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

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenAddModal?: () => void;
}

export default function AdminSidebar({ isOpen, onClose, onOpenAddModal }: AdminSidebarProps) {
  const pathname = usePathname();

  const menuGroups: MenuGroup[] = [
    {
      group: "Kelola Operasional",
      items: [
        { label: "Overview Panel Yusuf", href: "/yusuf", icon: ShieldAlert },
        { label: "Kelola Peserta (CRUD)", href: "/yusuf/peserta", icon: Users, badge: "Akses Penuh" },
        { label: "Kelola Program LPK", href: "/yusuf/program", icon: BookOpen },
        { label: "Pengaturan Sistem", href: "/yusuf/pengaturan", icon: Settings },
      ],
    },
    {
      group: "Tampilan Luar",
      items: [
        { label: "Dashboard Informasi (View-Only)", href: "/dashboard", icon: Eye },
        { label: "Website Publik LPK", href: "/", icon: ExternalLink },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Admin Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#081220] text-slate-300 border-r border-navy-900 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand & Admin Authority Header */}
        <div className="p-5 border-b border-navy-900 flex items-center justify-between bg-navy-950">
          <Link href="/yusuf" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl p-1 shadow-md flex items-center justify-center shrink-0 border border-vermilion-500/30">
              <Image
                src="/images/logo.png"
                alt="Logo LPK PMS Karawang"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-white text-xs tracking-tight uppercase">
                  Panel Yusuf
                </span>
                <span className="px-1.5 py-0.2 rounded bg-vermilion-600 text-[9px] font-bold text-white uppercase tracking-wider">
                  Admin
                </span>
              </div>
              <div className="text-[10px] text-primary-300 font-semibold tracking-wider uppercase mt-0.5">
                Otoritas Kelola Data LPK
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-900 lg:hidden"
            aria-label="Tutup sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Quick Action Button */}
        {onOpenAddModal && (
          <div className="p-3.5 border-b border-navy-900/80 bg-navy-900/30">
            <button
              type="button"
              onClick={() => {
                onOpenAddModal();
                if (onClose) onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-md transition-all hover:-translate-y-0.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Tambah Peserta Baru</span>
            </button>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6" aria-label="Menu Admin Yusuf">
          {menuGroups.map((group) => (
            <div key={group.group} className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
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
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                      isActive
                        ? "bg-primary-700 text-white shadow-md shadow-primary-950/50"
                        : "text-slate-300 hover:bg-navy-900/90 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 group-hover:text-primary-300"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-navy-900 text-vermilion-400 border border-navy-800">
                          {item.badge}
                        </span>
                      )}
                      {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-80" />}
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer info: Admin status */}
        <div className="p-4 border-t border-navy-900 bg-navy-950 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Admin: Yusuf</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">domain/yusuf</span>
          </div>
          <div className="text-[10px] text-slate-400 leading-tight">
            Mode kelola: Tambah, Ubah, & Hapus data peserta magang aktif.
          </div>
        </div>
      </aside>
    </>
  );
}
