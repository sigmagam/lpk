"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { MessageCircle, BellRing, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Narahubung Cepat WhatsApp & Saluran Info Job">
      {/* Pop-up Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-72 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-up">
          <div className="p-4 bg-navy-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-bold text-xs">WhatsApp Resmi LPK PMS</div>
                <div className="text-[10px] text-slate-400">Pilih kontak atau saluran</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-navy-900"
              aria-label="Tutup menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-2.5 bg-slate-50">
            {/* Link 1: Channel Info Job */}
            <a
              href={siteConfig.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-left transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <BellRing className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-950">
                  <span>Channel Info Job PMS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 opacity-70 group-hover:opacity-100" />
                </div>
                <p className="text-[10px] text-emerald-800 leading-tight mt-0.5">
                  Update info loker & magang Jepang PMS Pusat
                </p>
              </div>
            </a>

            {/* Link 2: Chat Admin */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-left transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs font-bold text-navy-950">
                  <span>Konsultasi Admin LPK</span>
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

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka opsi WhatsApp & Saluran Info Job"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300 group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block pr-1">
          WhatsApp & Info Job
        </span>
      </button>
    </aside>
  );
}
