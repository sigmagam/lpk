"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Menu, X, ArrowUpRight, Eye, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Program", href: "/program" },
    { label: "Kurikulum", href: "/kurikulum" },
    { label: "Keunggulan", href: "/keunggulan" },
    { label: "Legalitas", href: "/legalitas" },
    { label: "Lokasi", href: "/lokasi" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 border-b border-navy-800/80 hidden md:block">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Terdaftar Resmi Kemnaker RI
            </span>
            <span className="text-slate-400">
              Akreditasi Pelatihan Kerja & Pemagangan ke Jepang
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Purwasari, Karawang</span>
            <span className="text-slate-600">|</span>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium group"
            >
              <Eye className="w-3.5 h-3.5 text-primary-400 group-hover:text-primary-300" />
              <span>Dashboard Informasi Siswa</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5"
            : "bg-white border-b border-slate-200 py-3.5"
        }`}
      >
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-800 rounded-lg p-1"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl p-1 shadow-sm border border-slate-200 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Logo LPK Panca Multiguna Sukses Karawang"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-navy-950 text-sm sm:text-base leading-tight tracking-tight uppercase group-hover:text-primary-700 transition-colors">
                LPK Panca Multiguna Sukses
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wider uppercase">
                Karawang • Pelatihan Kerja Jepang
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-xs font-semibold tracking-wide transition-colors rounded-md ${
                    isActive
                      ? "text-navy-900 bg-slate-100 font-bold"
                      : "text-slate-600 hover:text-navy-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-vermilion-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex xl:hidden items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4 text-primary-600" />
              Dashboard
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Daftar / Konsultasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/dashboard"
              className="inline-flex items-center p-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 text-xs font-medium md:hidden"
              aria-label="Dashboard Informasi"
            >
              <Eye className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-navy-950 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-800"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-fade-up">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-lg p-1 border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Logo LPK PMS"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-navy-950 uppercase">
                    LPK Panca Multiguna Sukses
                  </div>
                  <div className="text-[10px] text-slate-500">Menu Navigasi</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                aria-label="Tutup menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-1.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
                Halaman Utama
              </div>
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-navy-900 text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-navy-950"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-vermilion-500" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 mt-4 border-t border-slate-200">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
                  Pusat Monitoring
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-sm font-semibold text-primary-900 bg-primary-50 hover:bg-primary-100 transition-colors"
                >
                  <Eye className="w-4 h-4 text-primary-700" />
                  <span>Dashboard Informasi Siswa</span>
                </Link>
              </div>
            </div>

            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-navy-900 text-white font-semibold text-sm shadow-md hover:bg-navy-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-slate-500">
                Purwasari, Karawang, Jawa Barat
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
