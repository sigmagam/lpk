"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Globe, Sparkles } from "lucide-react";

export default function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 4, y: -6 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 4, y: -6 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] mx-auto aspect-square sm:aspect-[5/4] flex items-center justify-center perspective-1500 cursor-pointer select-none"
      style={{ minHeight: "380px" }}
    >
      {/* Subtle Background Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-primary-100/70 blur-3xl -z-10 pointer-events-none" />

      {/* Main 3D Spatial Frame */}
      <div
        className="relative w-full h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100/80 border border-slate-200/90 shadow-subtle-3d preserve-3d transition-all ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transitionDuration: isHovered ? "100ms" : "700ms",
        }}
      >
        {/* Subtle Architectural Japanese Geometric Accents */}
        <div className="absolute inset-0 bg-grid-japanese opacity-40 rounded-3xl pointer-events-none" />

        {/* Top-Right Badge: Kemnaker Status (Floating 3D Layer) */}
        <div
          className="absolute top-5 right-5 sm:top-6 sm:right-6 px-3.5 py-1.5 rounded-full bg-navy-950 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-md border border-navy-800"
          style={{ transform: "translateZ(40px)" }}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Kemnaker RI Verified</span>
        </div>

        {/* Center Official Logo Composition (Deep 3D Anchor) */}
        <div
          className="flex flex-col items-center justify-center h-full pt-4 pb-14 text-center preserve-3d"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-5 bg-white p-3 rounded-2xl shadow-lift-3d border border-slate-200 flex items-center justify-center group">
            <Image
              src="/images/logo.png"
              alt="Logo Resmi LPK Panca Multiguna Sukses Karawang"
              width={130}
              height={130}
              priority
              className="w-full h-full object-contain filter drop-shadow-md transition-transform group-hover:scale-105"
            />
          </div>

          <h2 className="font-heading font-extrabold text-navy-950 text-base sm:text-lg tracking-tight uppercase max-w-xs leading-snug">
            LPK Panca Multiguna Sukses
          </h2>
          <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase mt-1">
            Pusat Pelatihan Kerja Karawang
          </p>
        </div>

        {/* Bottom Floating 3D Metric Card 1: Bahasa & Budaya */}
        <div
          className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lift-3d flex items-center gap-3 text-left"
          style={{ transform: "translateZ(55px)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0 border border-primary-100">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-navy-950">
              Bahasa & Budaya Jepang
            </div>
            <div className="text-[10px] text-slate-500 font-medium">
              Standar JLPT & JFT-Basic
            </div>
          </div>
        </div>

        {/* Bottom Floating 3D Metric Card 2: Pemagangan Resmi */}
        <div
          className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 px-4 py-3 rounded-2xl bg-navy-900 text-white shadow-lift-3d flex items-center gap-3 text-left border border-navy-800"
          style={{ transform: "translateZ(65px)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-vermilion-600 text-white flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">
              Pemagangan & TG
            </div>
            <div className="text-[10px] text-slate-300 font-medium">
              Kesiapan Etos Kerja Kaisha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
