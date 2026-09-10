"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-slate-200" : "bg-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded">
          <Image src="/images/logo.png" alt="Logo LPK PMS Karawang" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="hidden sm:inline-block font-bold text-slate-900 tracking-tight text-lg">{siteConfig.shortName}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
          <Link href="/" className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-brand-600" : "text-slate-600 hover:text-slate-900"}`}>Beranda</Link>
          
          <div className="group relative">
            <Link href="/program" className={`flex items-center gap-1 text-sm font-medium transition-colors ${pathname.startsWith("/program") ? "text-brand-600" : "text-slate-600 hover:text-slate-900"}`}>
              Program
              <svg className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute left-0 top-full hidden pt-4 group-hover:block w-48">
              <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-lg">
                {siteConfig.programs.map((p) => (
                  <Link key={p.href} href={p.href} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-600">{p.label}</Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/kurikulum" className={`text-sm font-medium transition-colors ${pathname === "/kurikulum" ? "text-brand-600" : "text-slate-600 hover:text-slate-900"}`}>Kurikulum</Link>
          <Link href="/faq" className={`text-sm font-medium transition-colors ${pathname === "/faq" ? "text-brand-600" : "text-slate-600 hover:text-slate-900"}`}>FAQ</Link>
          <Link href="/lokasi" className={`text-sm font-medium transition-colors ${pathname === "/lokasi" ? "text-brand-600" : "text-slate-600 hover:text-slate-900"}`}>Lokasi</Link>
          <Link href="/kontak" className={`text-sm font-medium transition-colors ${pathname === "/kontak" ? "text-brand-600" : "text-slate-600 hover:text-slate-900"}`}>Kontak</Link>
        </nav>

        {/* CTA Desktop */}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center h-10 px-5 rounded-full bg-brand-600 text-sm font-semibold text-white transition-colors hover:bg-brand-700 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
        >
          Hubungi Kami
        </a>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden px-4 py-6 shadow-xl absolute top-full left-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            <Link href="/" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50">Beranda</Link>
            
            <div className="px-4 py-3">
              <div className="text-base font-medium text-slate-800 mb-2">Program</div>
              <div className="pl-4 flex flex-col space-y-1 border-l-2 border-slate-100">
                {siteConfig.programs.map((p) => (
                  <Link key={p.href} href={p.href} className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-lg hover:bg-slate-50">{p.label}</Link>
                ))}
              </div>
            </div>

            <Link href="/kurikulum" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50">Kurikulum</Link>
            <Link href="/faq" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50">FAQ</Link>
            <Link href="/lokasi" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50">Lokasi</Link>
            <Link href="/kontak" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50">Kontak</Link>
            
            <div className="pt-4 pb-2 px-4">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-12 w-full rounded-full bg-brand-600 text-base font-semibold text-white">
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
