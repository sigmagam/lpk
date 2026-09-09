"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-4 sm:px-6" aria-label="Navigasi utama">
        <a href="#home" className="text-sm font-bold tracking-tight text-brand-900 sm:text-base">
          {siteConfig.shortName}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-brand-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-[44px] items-center rounded-md bg-brand-700 px-5 text-sm font-semibold text-white hover:bg-brand-600 lg:inline-flex"
        >
          Hubungi Kami
        </a>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-slate-700 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-center rounded-md bg-brand-700 px-4 text-base font-semibold text-white hover:bg-brand-600"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
