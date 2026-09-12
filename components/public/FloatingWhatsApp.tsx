"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { MessageCircle, BellRing, X, ArrowUpRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <aside aria-label="Narahubung Cepat WhatsApp & Saluran Info Job">
      {/* Pop-up Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-up">
          <div className="p-4 bg-navy-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-bold text-xs">Konsultasi LPK PMS</div>
                <div className="text-[10px] text-slate-400">Pilih saluran informasi resmi</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-navy-900 transition-colors"
              aria-label="Tutup panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-2.5 bg-slate-50">
            {/* Channel Info Job */}
            <a
              href={siteConfig.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200 text-left transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <BellRing className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-950">
                  <span>Channel Info Job PMS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 opacity-70 group-hover:opacity-100" />
                </div>
                <p className="text-[10px] text-emerald-800 leading-tight mt-0.5">
                  Update info loker & lowongan kerja Jepang harian
                </p>
              </div>
            </a>

            {/* Direct WhatsApp Consultation */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-left transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs font-bold text-navy-950">
                  <span>Chat Admin WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-navy-950" />
                </div>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                  {siteConfig.whatsappNumber}
                </p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Buka kontak WhatsApp & Info Job"
        style={{ animation: "slideUpCard 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1s both" }}
        className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block pr-1">
          WhatsApp Resmi
        </span>
      </button>
    </aside>
  );
}
