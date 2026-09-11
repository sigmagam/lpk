"use client";

import { useState, useRef, MouseEvent, useCallback } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ShieldCheck, ExternalLink, CheckCircle2, Award, Sparkles } from "lucide-react";

export interface LegalEntity {
  id: string;
  name: string;
  shortName: string;
  authority: string;
  role: string;
  status: string;
  identifier: string;
  description: string;
  logoSrc: string;
  badgeColor: string;
  verifyUrl?: string;
}

export const officialLegalEntities: LegalEntity[] = [
  {
    id: "kemnaker",
    name: "Kementerian Ketenagakerjaan Republik Indonesia",
    shortName: "Kemnaker RI",
    authority: "Pemerintah Pusat Republik Indonesia",
    role: "Lembaga Pelatihan Kerja (LPK) Terdaftar & Terakreditasi Nasional",
    status: "Terverifikasi Resmi",
    identifier: `VIN: ${siteConfig.vinNumber}`,
    description:
      "Terdaftar resmi di Pangkalan Data Kelembagaan Kemnaker RI dengan Nomor Tanda Daftar VIN 2001321506. Memenuhi standar kelayakan pelatihan kejuruan kerja dan pemagangan ke Jepang.",
    logoSrc: "/images/legalitas/kemnaker.svg",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
    verifyUrl: siteConfig.legalitasUrl,
  },
  {
    id: "kemenkumham",
    name: "Kementerian Hukum dan Hak Asasi Manusia RI",
    shortName: "Kemenkumham RI",
    authority: "Kementerian Negara Bidang Hukum",
    role: "Pengesahan Badan Hukum Lembaga",
    status: "Badan Hukum Sah",
    identifier: "SK Menkumham RI Terbit",
    description:
      "Memiliki dasar hukum pendirian yang sah dan disahkan secara yuridis melalui Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia sebagai badan penyelenggara pelatihan kerja resmi.",
    logoSrc: "/images/legalitas/kemenkumham.svg",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-300",
  },
  {
    id: "ditjen-ahu",
    name: "Direktorat Jenderal Administrasi Hukum Umum",
    shortName: "DITJEN AHU",
    authority: "Ditjen AHU - Kemenkumham RI",
    role: "Pengesahan Akta Notaris & Legalitas Kelembagaan",
    status: "Tercatat di Database AHU",
    identifier: "Sistem AHU Online Resmi",
    description:
      "Tercatat dan tervalidasi dalam pangkalan data resmi AHU Online Kementerian Hukum dan HAM Republik Indonesia untuk keabsahan akta pendirian, kepengurusan, dan legalitas anggaran dasar lembaga.",
    logoSrc: "/images/legalitas/ditjen-ahu.svg",
    badgeColor: "bg-blue-50 text-blue-900 border-blue-300",
  },
  {
    id: "disnaker",
    name: "Dinas Tenaga Kerja Kabupaten Karawang",
    shortName: "Disnaker Kab. Karawang",
    authority: "Pemerintah Daerah Kabupaten Karawang",
    role: "Izin Operasional Balai Pelatihan Kerja Wilayah",
    status: "Izin Operasional Aktif",
    identifier: "Wilayah Kab. Karawang",
    description:
      "Memperoleh Tanda Daftar Lembaga Pelatihan Kerja (TDLPK) dan rekomendasi operasional resmi dari Dinas Tenaga Kerja dan Transmigrasi Kabupaten Karawang untuk menyelenggarakan pelatihan kerja.",
    logoSrc: "/images/legalitas/disnaker-karawang.svg",
    badgeColor: "bg-green-50 text-green-900 border-green-300",
  },
  {
    id: "oss",
    name: "Lembaga Online Single Submission (OSS)",
    shortName: "Lembaga OSS - BKPM",
    authority: "Kementerian Investasi / BKPM RI",
    role: "Perizinan Berusaha Berbasis Risiko (RBA)",
    status: "NIB Terbit Efektif",
    identifier: "NIB Resmi Republik Indonesia",
    description:
      "Memiliki Nomor Induk Berusaha (NIB) yang diterbitkan secara resmi oleh Lembaga Pengelola dan Penyelenggara OSS berbasis risiko untuk kegiatan operasional jasa pelatihan dan pendidikan kerja swasta.",
    logoSrc: "/images/legalitas/lembaga-oss.svg",
    badgeColor: "bg-teal-50 text-teal-900 border-teal-300",
  },
];

function LegalCard3D({ entity, isFeatured }: { entity: LegalEntity; isFeatured: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${
        isFeatured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{ perspective: "1100px" }}
    >
      <div
        className={`relative h-full rounded-3xl bg-white border p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all ease-out ${
          isFeatured
            ? "border-navy-950/80 ring-1 ring-navy-950/10"
            : "border-slate-200/90 hover:border-slate-300"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(12px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
          transitionDuration: isHovered ? "100ms" : "450ms",
          boxShadow: isHovered
            ? "0 24px 40px -10px rgba(11, 23, 39, 0.18), 0 10px 18px -6px rgba(11, 23, 39, 0.08)"
            : "0 2px 6px rgba(11, 23, 39, 0.05)",
        }}
      >
        {/* Dynamic Sheen / Glare Overlay (3D Light Reflection) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-30"
          style={{
            opacity: glare.opacity ? 0.45 : 0,
            background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.9), transparent 75%)`,
          }}
        />

        {/* Ambient Top Glow */}
        <div
          className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-primary-100/40 via-vermilion-100/20 to-transparent rounded-full blur-2xl pointer-events-none"
          style={{ transform: "translateZ(10px)" }}
        />

        {/* Card Content with True 3D Depth Layering */}
        <div className="space-y-5 relative z-10" style={{ transformStyle: "preserve-3d" }}>
          {/* Top Row: 3D Popped Logo & Status Badge */}
          <div className="flex items-start justify-between gap-4" style={{ transform: "translateZ(36px)" }}>
            {/* 3D High-Definition Scalable Vector SVG Logo */}
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-1.5 shadow-md border-2 border-slate-200/90 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                boxShadow: isHovered
                  ? "0 14px 20px -6px rgba(11, 23, 39, 0.2)"
                  : "0 4px 8px -2px rgba(11, 23, 39, 0.08)",
              }}
            >
              <Image
                src={entity.logoSrc}
                alt={`Logo Resmi ${entity.name}`}
                width={96}
                height={96}
                className="w-full h-full object-contain drop-shadow-sm"
                priority={isFeatured}
              />
            </div>

            {/* Status Badge Tag */}
            <div className="flex flex-col items-end gap-1.5" style={{ transform: "translateZ(30px)" }}>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border shadow-xs ${entity.badgeColor}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>{entity.status}</span>
              </span>
              <span className="font-mono text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
                {entity.identifier}
              </span>
            </div>
          </div>

          {/* Identity & Details (Layered Depth) */}
          <div className="space-y-2" style={{ transform: "translateZ(24px)" }}>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {entity.authority}
            </div>
            <h3 className="font-heading font-black text-lg sm:text-xl text-navy-950 leading-tight">
              {entity.name}
            </h3>
            <div className="text-xs font-bold text-primary-700 bg-primary-50/80 border border-primary-200/80 px-3 py-1 rounded-lg inline-block">
              {entity.role}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              {entity.description}
            </p>
          </div>
        </div>

        {/* Card Footer: Verifikasi Action (+18px Depth) */}
        <div
          className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10"
          style={{ transform: "translateZ(18px)" }}
        >
          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Legalitas Terjamin
          </span>

          {entity.verifyUrl ? (
            <a
              href={entity.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition-all hover:-translate-y-0.5"
            >
              <span>Verifikasi Kemnaker</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Dokumen Sah</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OfficialLegalBadges() {
  return (
    <div className="space-y-10">
      {/* 5 HD Logos Interactive 3D Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {officialLegalEntities.map((entity) => (
          <LegalCard3D
            key={entity.id}
            entity={entity}
            isFeatured={entity.id === "kemnaker"}
          />
        ))}
      </div>
    </div>
  );
}
