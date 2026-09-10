"use client";

import { useState, useRef, MouseEvent, useCallback } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Globe, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero3DVisual() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 6, y: -8 });
  const [lightPos, setLightPos] = useState({ x: 35, y: 25 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -18;
    const rotateY = ((x - centerX) / centerX) * 20;

    const lightX = (x / rect.width) * 100;
    const lightY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setLightPos({ x: lightX, y: lightY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotation({ x: 6, y: -8 });
    setLightPos({ x: 35, y: 25 });
  }, []);

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto aspect-square sm:aspect-[1.12/1] flex items-center justify-center select-none"
      style={{ perspective: "1500px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Realistic Deep Ambient Shadow under the 3D Stage */}
      <div
        className="absolute -bottom-10 w-4/5 h-16 bg-navy-950/35 blur-2xl rounded-full transition-transform duration-500 pointer-events-none"
        style={{
          transform: `scale(${isHovered ? 1.08 : 0.95}) translateY(${isHovered ? 8 : 0}px)`,
        }}
      />

      {/* 2. Ambient Color Glow */}
      <div className="absolute w-88 h-88 rounded-full bg-primary-300/40 blur-[90px] -z-10 pointer-events-none animate-pulse-glow-3d" />

      {/* 3. Main 3D Plinth Slab (Tebal, Tegas, & Jelas) */}
      <div
        ref={cardRef}
        className={`relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-slate-100 border-2 border-slate-300 transition-transform ease-out cursor-pointer ${
          !isHovered ? "animate-float-3d-full" : ""
        }`}
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)`
            : undefined,
          transformStyle: "preserve-3d",
          transitionDuration: isHovered ? "75ms" : "700ms",
          boxShadow: isHovered
            ? "0 16px 0 #94A3B8, 0 40px 65px -12px rgba(11, 27, 50, 0.28), 0 16px 28px -6px rgba(11, 27, 50, 0.16), inset 0 2px 4px #fff"
            : "0 10px 0 #94A3B8, 0 28px 50px -10px rgba(11, 27, 50, 0.2), 0 10px 20px -4px rgba(11, 27, 50, 0.1), inset 0 2px 4px #fff",
        }}
      >
        {/* Dynamic Holographic Specular Reflection */}
        <div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 350px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.15) 50%, transparent 75%)`,
            opacity: isHovered ? 0.95 : 0.5,
          }}
        />

        {/* Clear Japanese Architectural Grid Matrix */}
        <div className="absolute inset-0 bg-grid-japanese opacity-45 rounded-[2.5rem] pointer-events-none" />

        {/* Top Bevel Highlight Edge */}
        <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* LAYER 1: Floating Accreditation Badge (+55px Depth) */}
        <div
          className="absolute top-6 right-6 px-4 py-2 rounded-full bg-navy-950 text-white text-xs font-black tracking-wide flex items-center gap-2 border-2 border-emerald-400 shadow-xl"
          style={{
            transform: "translateZ(55px)",
            boxShadow: "0 12px 24px -4px rgba(11, 27, 50, 0.4)",
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Kemnaker RI Verified</span>
        </div>

        {/* LAYER 2: Central Embossed Emblem (+45px Depth) */}
        <div
          className="flex flex-col items-center justify-center h-full pt-4 pb-14 text-center"
          style={{ transform: "translateZ(45px)" }}
        >
          {/* Logo Plinth with Thick 3D Border & Extrusion */}
          <div
            className="relative w-36 h-36 sm:w-44 sm:h-44 mb-5 rounded-3xl bg-white p-4 border-2 border-slate-300 flex items-center justify-center group"
            style={{
              transform: "translateZ(35px)",
              boxShadow: "0 8px 0 #CBD5E1, 0 22px 35px -6px rgba(11, 27, 50, 0.22), inset 0 2px 2px #fff",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Logo Resmi LPK Panca Multiguna Sukses Karawang"
              width={150}
              height={150}
              priority
              className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <h2
            className="font-heading font-black text-navy-950 text-lg sm:text-2xl tracking-tight uppercase max-w-xs leading-snug"
            style={{ transform: "translateZ(25px)" }}
          >
            LPK Panca Multiguna Sukses
          </h2>
          <p
            className="text-xs font-black text-slate-700 tracking-widest uppercase mt-1.5"
            style={{ transform: "translateZ(18px)" }}
          >
            Pusat Pelatihan Kerja Karawang
          </p>
        </div>

        {/* LAYER 3: Floating 3D Token KIRI (Bahasa & Budaya) (+75px Depth) */}
        <div
          className={`absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-5 px-4 py-3 rounded-2xl bg-white border-2 border-slate-300 flex items-center gap-3.5 text-left transition-transform duration-300 hover:scale-105 ${
            !isHovered ? "animate-float-badge-left" : ""
          }`}
          style={{
            transform: "translateZ(75px)",
            boxShadow: "0 6px 0 #CBD5E1, 0 20px 30px -8px rgba(11, 27, 50, 0.22)",
          }}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 text-primary-900 flex items-center justify-center shrink-0 border-2 border-primary-300 shadow-sm">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-black text-navy-950 flex items-center gap-1.5">
              <span>Bahasa & Budaya</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-[11px] text-slate-700 font-bold mt-0.5">
              Standar JLPT N4 / JFT-Basic
            </div>
          </div>
        </div>

        {/* LAYER 4: Floating 3D Token KANAN (Pemagangan & TG) (+85px Depth) */}
        <div
          className={`absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-5 px-4 py-3 rounded-2xl bg-navy-950 text-white border-2 border-navy-700 flex items-center gap-3.5 text-left transition-transform duration-300 hover:scale-105 ${
            !isHovered ? "animate-float-badge-right" : ""
          }`}
          style={{
            transform: "translateZ(85px)",
            boxShadow: "0 6px 0 #060F1E, 0 24px 35px -8px rgba(6, 17, 34, 0.5)",
          }}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-vermilion-500 to-vermilion-600 text-white flex items-center justify-center shrink-0 shadow-sm border border-vermilion-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-black text-white flex items-center gap-1.5">
              <span>Magang & Tokutei Ginou</span>
            </div>
            <div className="text-[11px] text-primary-200 font-bold mt-0.5">
              Kesiapan Kerja Kaisha Jepang
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
