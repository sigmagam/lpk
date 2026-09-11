"use client";

import { useState, useRef, MouseEvent, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

interface AuthorityItem {
  name: string;
  detail: string;
  logo: string;
  badge: string;
}

const authorities: AuthorityItem[] = [
  {
    name: "Kemnaker RI",
    detail: "VIN: 2001321506",
    logo: "/images/legalitas/kemnaker.svg",
    badge: "Terakreditasi",
  },
  {
    name: "Kemenkumham RI",
    detail: "SK Badan Hukum",
    logo: "/images/legalitas/kemenkumham.svg",
    badge: "Badan Hukum",
  },
  {
    name: "DITJEN AHU",
    detail: "AHU Online Resmi",
    logo: "/images/legalitas/ditjen-ahu.svg",
    badge: "Tervalidasi",
  },
  {
    name: "Disnaker Karawang",
    detail: "Izin Wilayah Aktif",
    logo: "/images/legalitas/disnaker-karawang.svg",
    badge: "Izin Daerah",
  },
  {
    name: "Lembaga OSS",
    detail: "NIB Berbasis Risiko",
    logo: "/images/legalitas/lembaga-oss.svg",
    badge: "NIB Terbit",
  },
];

function RibbonCard3D({ item }: { item: AuthorityItem }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 16;
    setRotation({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  }, []);

  return (
    <Link
      href="/legalitas"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative block select-none group"
      style={{ perspective: "800px" }}
    >
      <div
        className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3 transition-all ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(10px) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
          transitionDuration: isHovered ? "90ms" : "400ms",
          boxShadow: isHovered
            ? "0 18px 30px -8px rgba(11, 23, 39, 0.16), 0 8px 12px -4px rgba(11, 23, 39, 0.08)"
            : "0 2px 4px rgba(11, 23, 39, 0.04)",
        }}
      >
        {/* 3D Popped Logo */}
        <div
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 p-1 border border-slate-200/80 flex items-center justify-center shrink-0 transition-transform duration-200"
          style={{
            transform: isHovered ? "translateZ(26px) scale(1.06)" : "translateZ(0px)",
            boxShadow: isHovered ? "0 8px 14px -4px rgba(11, 23, 39, 0.15)" : "none",
          }}
        >
          <Image
            src={item.logo}
            alt={`Logo Resmi ${item.name}`}
            width={56}
            height={56}
            className="w-full h-full object-contain drop-shadow-xs"
          />
        </div>

        <div className="min-w-0 flex-1" style={{ transform: isHovered ? "translateZ(18px)" : "translateZ(0px)" }}>
          <div className="flex items-center justify-between gap-1">
            <span className="font-heading font-black text-xs text-navy-950 truncate group-hover:text-vermilion-600 transition-colors">
              {item.name}
            </span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
              {item.badge}
            </span>
          </div>
          <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
            {item.detail}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function OfficialTrustRibbon() {
  return (
    <section
      className="bg-slate-50 py-12 sm:py-16 border-t border-slate-200 select-none relative overflow-hidden"
      aria-label="Pita 5 Pilar Legalitas Resmi Republik Indonesia"
    >
      <div className="absolute inset-0 bg-japanese-grid opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-slate-700 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Akreditasi & Kepastian Hukum Resmi</span>
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
              5 Pilar Legalitas & Pengesahan Negara RI
            </h3>
            <p className="text-xs text-slate-500">
              Gerakkan kursor untuk melihat sertifikasi 3D resmi kementerian dan instansi ketenagakerjaan pemerintah.
            </p>
          </div>

          <Link
            href="/legalitas"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-navy-950 border border-slate-300 text-xs font-bold transition-all hover:-translate-y-0.5 shadow-xs self-start md:self-auto"
          >
            <span>Buka Lembar Fakta 5 Legalitas</span>
            <ArrowRight className="w-3.5 h-3.5 text-vermilion-600" />
          </Link>
        </div>

        {/* 5 HD Logos 3D Interactive Ribbon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {authorities.map((item) => (
            <RibbonCard3D key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
