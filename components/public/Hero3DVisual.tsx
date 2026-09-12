"use client";

import { useState, useRef, MouseEvent, useCallback } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Globe, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero3DVisual() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 7, y: -9 });
  const [lightPos, setLightPos] = useState({ x: 30, y: 20 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -22;
    const rotateY = ((x - centerX) / centerX) * 24;

    const lightX = (x / rect.width) * 100;
    const lightY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setLightPos({ x: lightX, y: lightY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotation({ x: 7, y: -9 });
    setLightPos({ x: 30, y: 20 });
  }, []);

  return (
    <div
      className="relative w-full max-w-[570px] mx-auto aspect-square sm:aspect-[1.1/1] flex items-center justify-center select-none"
      style={{ perspective: "1600px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Deep 3D Ambient Drop Shadow Beneath the Plinth */}
      <div
        className="absolute -bottom-12 w-4/5 h-20 bg-navy-950/40 blur-2xl rounded-full transition-transform duration-500 pointer-events-none"
        style={{
          transform: `scale(${isHovered ? 1.12 : 0.96}) translateY(${isHovered ? 10 : 0}px)`,
        }}
      />

      {/* 2. Pulsing Glow Ring */}
      <div className="absolute w-96 h-96 rounded-full bg-primary-400/35 blur-[100px] -z-10 pointer-events-none animate-pulse-glow-ring" />

      {/* 3. Main 3D Plinth Slab (Tebal, Tegas, Solid 3px Border + Block Shadow) */}
      <div
        ref={cardRef}
        className={`relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-slate-100 border-[3px] border-[#0B1B32] transition-transform ease-out cursor-pointer ${
          !isHovered ? "animate-float-3d-full" : ""
        }`}
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)`
            : undefined,
          transformStyle: "preserve-3d",
          transitionDuration: isHovered ? "70ms" : "700ms",
          boxShadow: isHovered
            ? "12px 16px 0px #0B1B32, 0 45px 70px -10px rgba(11, 27, 50, 0.35), inset 0 2px 4px #fff"
            : "8px 10px 0px #0B1B32, 0 30px 50px -10px rgba(11, 27, 50, 0.25), inset 0 2px 4px #fff",
        }}
      >
        {/* Dynamic Specular Sheen (Moves with cursor) */}
        <div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 380px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.2) 50%, transparent 80%)`,
            opacity: isHovered ? 1 : 0.55,
          }}
        />

        {/* Clear Japanese Architectural Matrix */}
        <div className="absolute inset-0 bg-grid-japanese opacity-50 rounded-[2.5rem] pointer-events-none" />

        {/* Top Metallic Bevel Highlight Edge */}
        <div className="absolute top-0 inset-x-8 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* LAYER 1: Top-Right Floating Accreditation Badge (+65px Depth) */}
        <div
          className="absolute top-6 right-6 px-4 py-2 rounded-full bg-navy-950 text-white text-xs font-black tracking-wide flex items-center gap-2 border-[2.5px] border-emerald-400 shadow-2xl"
          style={{
            transform: "translateZ(65px)",
            boxShadow: "0 14px 28px -4px rgba(11, 27, 50, 0.45)",
          }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
          </span>
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Kemnaker RI Verified</span>
        </div>

        {/* LAYER 2: Top-Left 3D Geometric Cube (+50px Depth) */}
        <div
          className="absolute top-4 left-4 z-20"
          style={{ transform: "translateZ(50px)" }}
        >
        </div>

        {/* LAYER 3: Central Embossed Emblem (+55px Depth) */}
        <div
          className="flex flex-col items-center justify-center h-full pt-4 pb-14 text-center"
          style={{ transform: "translateZ(55px)" }}
        >
          {/* Logo Plinth with Thick 3D Border & Extrusion */}
          <div
            className="relative w-36 h-36 sm:w-44 sm:h-44 mb-5 rounded-3xl bg-white p-4 border-[3px] border-[#0B1B32] flex items-center justify-center group shadow-xl"
            style={{
              transform: "translateZ(45px)",
              boxShadow: "6px 6px 0px #0B1B32, 0 25px 40px -6px rgba(11, 27, 50, 0.25), inset 0 2px 2px #fff",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Logo Resmi LPK Panca Multiguna Sukses"
              width={150}
              height={150}
              priority
              className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <h2
            className="font-heading font-black text-navy-950 text-lg sm:text-2xl tracking-tight uppercase max-w-xs leading-snug"
            style={{ transform: "translateZ(30px)" }}
          >
            LPK Panca Multiguna Sukses
          </h2>
          <p
            className="text-xs font-black text-slate-800 tracking-widest uppercase mt-1.5"
            style={{ transform: "translateZ(20px)" }}
          >
            Pusat Pelatihan Kerja ke Jepang
          </p>
        </div>

        {/* LAYER 4: Floating 3D Token KIRI (Bahasa & Budaya) (+85px Depth) */}
        <div
          className={`absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-5 px-4 py-3 rounded-2xl bg-white border-[3px] border-[#0B1B32] flex items-center gap-3.5 text-left transition-transform duration-300 hover:scale-105 ${
            !isHovered ? "animate-float-badge-1" : ""
          }`}
          style={{
            transform: "translateZ(85px)",
            boxShadow: "5px 6px 0px #0B1B32, 0 24px 35px -8px rgba(11, 27, 50, 0.25)",
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 text-primary-950 flex items-center justify-center shrink-0 border-2 border-primary-400 shadow-sm">
            <Globe className="w-6 h-6 text-primary-800" />
          </div>
          <div>
            <div className="text-xs font-black text-navy-950 flex items-center gap-1.5">
              <span>Bahasa & Budaya</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-[11px] text-slate-800 font-bold mt-0.5">
              Standar JLPT N4 / JFT-Basic
            </div>
          </div>
        </div>

        {/* LAYER 5: Floating 3D Token KANAN (Pemagangan & TG) (+95px Depth) */}
        <div
          className={`absolute -bottom-7 -right-3 sm:-bottom-9 sm:-right-5 px-4 py-3 rounded-2xl bg-navy-950 text-white border-[3px] border-[#C8102E] flex items-center gap-3.5 text-left transition-transform duration-300 hover:scale-105 ${
            !isHovered ? "animate-float-badge-2" : ""
          }`}
          style={{
            transform: "translateZ(95px)",
            boxShadow: "5px 6px 0px #C8102E, 0 28px 40px -8px rgba(200, 16, 46, 0.45)",
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vermilion-500 to-vermilion-600 text-white flex items-center justify-center shrink-0 shadow-sm border border-white/40">
            <Award className="w-6 h-6" />
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
