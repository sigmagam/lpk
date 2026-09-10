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

    // Hitung kemiringan 3D realistis (maksimal 16 derajat)
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 16;

    // Hitung posisi pantulan cahaya spekular (persentase)
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
      className="relative w-full max-w-[560px] mx-auto aspect-square sm:aspect-[1.15/1] flex items-center justify-center select-none"
      style={{ perspective: "1400px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Realistic Ambient Shadow beneath the 3D Stage */}
      <div
        className="absolute -bottom-8 w-4/5 h-14 bg-navy-950/25 blur-2xl rounded-full transition-transform duration-500 pointer-events-none"
        style={{
          transform: `scale(${isHovered ? 1.06 : 0.95}) translateY(${isHovered ? 6 : 0}px)`,
        }}
      />

      {/* 2. Ambient Color Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-primary-200/50 blur-[90px] -z-10 pointer-events-none" />

      {/* 3. Main 3D Institutional Plinth (Base Plate) */}
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-white via-slate-50 to-slate-100/95 border border-white/80 transition-transform ease-out cursor-pointer"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transitionDuration: isHovered ? "80ms" : "600ms",
          boxShadow: isHovered
            ? "0 35px 60px -15px rgba(11, 27, 50, 0.22), 0 15px 25px -5px rgba(11, 27, 50, 0.12), inset 0 1px 2px rgba(255,255,255,0.9), inset 0 -2px 6px rgba(11, 27, 50, 0.05)"
            : "0 25px 45px -12px rgba(11, 27, 50, 0.15), 0 8px 16px -4px rgba(11, 27, 50, 0.08), inset 0 1px 2px rgba(255,255,255,0.9), inset 0 -2px 6px rgba(11, 27, 50, 0.05)",
        }}
      >
        {/* Dynamic Holographic Specular Glare (Moves with cursor) */}
        <div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 320px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.1) 45%, transparent 70%)`,
            opacity: isHovered ? 0.9 : 0.45,
          }}
        />

        {/* Japanese Geometric Grid Matrix (Engraved on surface) */}
        <div className="absolute inset-0 bg-grid-japanese opacity-35 rounded-[2.5rem] pointer-events-none" />

        {/* Top Metallic Bevel Edge Highlight */}
        <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* LAYER 1: Top Floating Verification Seal (+45px Depth) */}
        <div
          className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-navy-950 text-white text-[11px] font-bold tracking-wide flex items-center gap-2 border border-navy-700/80 shadow-lg"
          style={{
            transform: "translateZ(45px)",
            boxShadow: "0 10px 20px -5px rgba(11, 27, 50, 0.35)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Kemnaker RI Verified</span>
        </div>

        {/* LAYER 2: Central Embossed Emblem (+35px Depth) */}
        <div
          className="flex flex-col items-center justify-center h-full pt-4 pb-14 text-center"
          style={{ transform: "translateZ(35px)" }}
        >
          {/* Logo Plinth with Multi-Tier Shadow */}
          <div
            className="relative w-32 h-32 sm:w-40 sm:h-40 mb-5 rounded-3xl bg-white p-3.5 border border-slate-200/90 flex items-center justify-center group"
            style={{
              transform: "translateZ(30px)",
              boxShadow: "0 20px 35px -8px rgba(11, 27, 50, 0.18), 0 6px 12px -3px rgba(11, 27, 50, 0.08), inset 0 1px 1px #fff",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Logo Resmi LPK Panca Multiguna Sukses Karawang"
              width={140}
              height={140}
              priority
              className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <h2
            className="font-heading font-black text-navy-950 text-base sm:text-xl tracking-tight uppercase max-w-xs leading-snug"
            style={{ transform: "translateZ(20px)" }}
          >
            LPK Panca Multiguna Sukses
          </h2>
          <p
            className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-1.5"
            style={{ transform: "translateZ(15px)" }}
          >
            Pusat Pelatihan Kerja Karawang
          </p>
        </div>

        {/* LAYER 3: Floating 3D Token KIRI (Bahasa & Budaya) (+65px Depth) */}
        <div
          className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-5 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 flex items-center gap-3.5 text-left transition-transform duration-300 hover:scale-105"
          style={{
            transform: "translateZ(65px)",
            boxShadow: "0 22px 35px -10px rgba(11, 27, 50, 0.2), 0 8px 15px -4px rgba(11, 27, 50, 0.08)",
          }}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 flex items-center justify-center shrink-0 border border-primary-200/80 shadow-sm">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-navy-950 flex items-center gap-1.5">
              <span>Bahasa & Budaya</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-[10px] text-slate-500 font-semibold mt-0.5">
              Standar JLPT N4 / JFT-Basic
            </div>
          </div>
        </div>

        {/* LAYER 4: Floating 3D Token KANAN (Pemagangan & TG) (+75px Depth) */}
        <div
          className="absolute -bottom-6 -right-3 sm:-bottom-7 sm:-right-5 px-4 py-3 rounded-2xl bg-navy-900 text-white border border-navy-700 flex items-center gap-3.5 text-left transition-transform duration-300 hover:scale-105"
          style={{
            transform: "translateZ(75px)",
            boxShadow: "0 25px 40px -12px rgba(6, 17, 34, 0.45), 0 10px 18px -4px rgba(6, 17, 34, 0.25)",
          }}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-vermilion-500 to-vermilion-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
              <span>Magang & Tokutei Ginou</span>
            </div>
            <div className="text-[10px] text-primary-200 font-semibold mt-0.5">
              Kesiapan Kerja Kaisha Jepang
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
