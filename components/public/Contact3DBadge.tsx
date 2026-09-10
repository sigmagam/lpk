"use client";

import { useState, useRef, MouseEvent } from "react";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, Sparkles, Send } from "lucide-react";

export default function Contact3DBadge() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotation({
      x: ((y - centerY) / centerY) * -12,
      y: ((x - centerX) / centerX) * 14,
    });
  };

  return (
    <div
      className="relative w-full select-none"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
    >
      {/* 3D Animated Card Container */}
      <div
        className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 p-8 sm:p-10 text-white border-2 border-slate-300 shadow-2xl transition-transform ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-6px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          transformStyle: "preserve-3d",
          transitionDuration: isHovered ? "80ms" : "500ms",
          boxShadow: isHovered
            ? "0 12px 0 #060F1E, 0 30px 50px -10px rgba(11, 27, 50, 0.4), inset 0 2px 4px rgba(255,255,255,0.2)"
            : "0 8px 0 #060F1E, 0 20px 35px -8px rgba(11, 27, 50, 0.3), inset 0 2px 4px rgba(255,255,255,0.15)",
        }}
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-grid-japanese opacity-15 rounded-3xl pointer-events-none" />

        {/* Top Header Layer (+35px Depth) */}
        <div
          className="flex items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-navy-800"
          style={{ transform: "translateZ(35px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[11px] font-black uppercase text-emerald-300 tracking-wider block">
                Narahubung Resmi Lembaga
              </span>
              <h3 className="font-heading font-black text-lg text-white">
                Kontak & Layanan Informasi
              </h3>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-navy-800 text-slate-300 text-xs font-bold border border-navy-700">
            Respons Cepat
          </span>
        </div>

        {/* Contact Items Grid (+45px Depth) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transform: "translateZ(45px)" }}>
          {/* WhatsApp Card */}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-navy-900/90 hover:bg-emerald-950/80 border-2 border-emerald-500/40 hover:border-emerald-400 transition-all group flex items-start gap-4 shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block mb-0.5">
                Telepon & WhatsApp
              </span>
              <div className="font-mono font-black text-white text-sm sm:text-base group-hover:text-emerald-300 transition-colors truncate">
                {siteConfig.phoneRaw}
              </div>
              <div className="text-[11px] text-slate-300 font-medium mt-1 flex items-center gap-1">
                <span>Kirim Pesan WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="p-5 rounded-2xl bg-navy-900/90 hover:bg-primary-950/80 border-2 border-primary-500/40 hover:border-primary-400 transition-all group flex items-start gap-4 shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-vermilion-600 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-black uppercase tracking-wider text-primary-300 block mb-0.5">
                Surat Elektronik (Email)
              </span>
              <div className="font-mono font-black text-white text-xs sm:text-sm group-hover:text-primary-200 transition-colors truncate">
                {siteConfig.email}
              </div>
              <div className="text-[11px] text-slate-300 font-medium mt-1 flex items-center gap-1">
                <span>Kirim Email Resmi</span>
                <Send className="w-3 h-3 text-primary-400" />
              </div>
            </div>
          </a>
        </div>

        {/* Footer Subtext (+25px Depth) */}
        <div
          className="mt-6 pt-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300 font-medium"
          style={{ transform: "translateZ(25px)" }}
        >
          <span>Pusat Pelatihan: Pancawati, Kec. Purwasari, Karawang</span>
          <span className="font-mono text-emerald-400 font-bold">VIN: {siteConfig.vinNumber}</span>
        </div>
      </div>
    </div>
  );
}
