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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-slate-200" : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex h-[72px] lg:h-20 max-w-site items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded">
          <Image src="/images/logo.png" alt="Logo LPK Kagayaki" width={44} height={44} className="h-10 w-10 lg:h-11 lg:w-11 object-contain" />
          <span className="hidden sm:inline-block font-bold text-slate-900 tracking-tight text-base lg:text-lg">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href) && !link.href.includes('#'));
            return (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${isActive ? "text-brand-600" : "text-slate-600 hover:text-slate-900"}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-brand-600 text-sm font-semibold text-white transition-colors hover:bg-brand-700 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden px-4 py-4 shadow-xl absolute top-full left-0 w-full max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 mt-2 border-t border-slate-100">
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
