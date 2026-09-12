"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import LanguageSelector from "@/components/public/LanguageSelector";
import {
  ShieldCheck,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  Phone,
  Sparkles
} from "lucide-react";

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
    { label: "Program", href: "/program" },
    { label: "Tokutei Ginou", href: "/tokutei-ginou", highlight: true },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kurikulum", href: "/kurikulum" },
    { label: "Keunggulan", href: "/keunggulan" },
    { label: "Legalitas", href: "/legalitas" },
    { label: "Lokasi", href: "/lokasi" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      {/* Top Credential Bar */}
      <div className="bg-navy-950 text-slate-200 text-[11px] sm:text-xs py-2 border-b border-navy-900 select-none">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-400/30 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Kemnaker RI Resmi
            </span>
            <span className="text-slate-300 hidden sm:inline">
              VIN: <strong className="font-mono text-white font-bold">{siteConfig.vinNumber}</strong>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline truncate">
              Lembaga Pelatihan Kerja & Penyaluran Karir ke Jepang
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-slate-400" />
              <span>{siteConfig.whatsappNumber}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium">Pusat Pelatihan Kerja Resmi Kemnaker RI • Karawang & Lampung</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5"
            : "bg-white border-b border-slate-200/90 py-3 sm:py-3.5"
        }`}
      >
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-950 rounded-xl"
            aria-label="Beranda LPK PMS"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-vermilion-500 transition-colors">
              <Image
                src="/images/logo.png"
                alt="Logo Resmi LPK PMS"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-navy-950 text-sm sm:text-base leading-tight tracking-tight uppercase group-hover:text-vermilion-600 transition-colors">
                LPK PMS
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                Panca Multiguna Sukses • Kemnaker RI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1"
            aria-label="Navigasi Utama"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-bold tracking-tight rounded-lg transition-all ${
                    isActive
                      ? "text-white bg-navy-950 shadow-sm"
                      : item.highlight
                      ? "text-vermilion-700 hover:text-vermilion-800 hover:bg-vermilion-50 font-black"
                      : "text-slate-700 hover:text-navy-950 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Selector (10 Languages: ID Default, JA, EN, etc.) */}
            <LanguageSelector />

            {/* Desktop CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Daftar / Konsultasi</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-xl text-navy-950 hover:bg-slate-100 transition-colors border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-50 animate-fade-up">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Logo LPK PMS"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-heading font-black text-xs text-navy-950 uppercase">
                    LPK PMS
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500">
                    Menu Navigasi
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <LanguageSelector variant="mobile" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200"
                  aria-label="Tutup navigasi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
                Halaman
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
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-navy-950 text-white shadow-sm"
                        : item.highlight
                        ? "text-vermilion-700 bg-vermilion-50/70 hover:bg-vermilion-100 font-extrabold"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-vermilion-500" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    )}
                  </Link>
                );
              })}


            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-slate-500">
                Karawang & Lampung • VIN: {siteConfig.vinNumber}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
