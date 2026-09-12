"use client";

import { useState, useEffect } from "react";
import {
  X,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  BellRing,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

interface Branch {
  id: string;
  name: string;
  location: string;
  whatsappText: string;
}

const branches: Branch[] = [
  {
    id: "karawang",
    name: "Karawang (Pusat)",
    location: "Purwasari, Karawang, Jawa Barat",
    whatsappText:
      "Halo Admin LPK PMS, saya ingin konsultasi pendaftaran untuk cabang Karawang.",
  },
  {
    id: "lampung",
    name: "Lampung (Cabang)",
    location: "Lampung, Sumatera",
    whatsappText:
      "Halo Admin LPK PMS, saya ingin konsultasi pendaftaran untuk cabang Lampung.",
  },
];

export default function WelcomeBannerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  if (!isOpen) return null;

  const branch = branches[selected];

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-sm cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-fade-up">

        {/* Header strip — vermilion solid */}
        <div className="bg-vermilion-600 px-5 py-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo LPK PMS"
                width={30}
                height={30}
                className="w-full h-full object-contain p-0.5"
                priority
              />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                Selamat Datang
              </div>
              <div
                id="welcome-title"
                className="font-heading font-black text-white text-sm sm:text-base leading-tight truncate"
              >
                LPK Panca Multiguna Sukses
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup banner"
            className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Tagline */}
          <div>
            <p className="text-sm font-bold text-navy-950 leading-snug">
              Lembaga Pelatihan Kerja ke Jepang
            </p>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Terdaftar resmi Kemnaker RI — membekali calon tenaga kerja Indonesia menuju karier profesional di Jepang.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Kemnaker RI Resmi
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200">
              VIN: {siteConfig.vinNumber}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200">
              Est. {siteConfig.tahunBerdiri}
            </span>
          </div>

          {/* Pilih cabang */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Pilih Cabang Tujuan
            </div>
            <div className="grid grid-cols-2 gap-2">
              {branches.map((b, idx) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelected(idx)}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    selected === idx
                      ? "bg-navy-950 border-navy-950 text-white shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-xs font-black leading-tight">{b.name}</div>
                  <div
                    className={`flex items-center gap-1 mt-1 text-[11px] font-medium ${
                      selected === idx ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{b.location}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick checklist */}
          <div className="grid grid-cols-2 gap-1.5">
            {[
              "Bahasa Jepang N5–N3",
              "Pelatihan Fisik & Disiplin",
              "Pengurusan Visa & CoE",
              "200+ Alumni di Jepang",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-5 pb-5 flex flex-col sm:flex-row gap-2">
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent(branch.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Konsultasi WhatsApp</span>
          </a>
          <Link
            href="/program"
            onClick={() => setIsOpen(false)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Lihat Program</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* WhatsApp channel promo */}
        <div className="mx-5 mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <BellRing className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-[11px] font-bold text-emerald-900 leading-tight">
              Follow Channel Info Job PMS
            </span>
          </div>
          <a
            href={siteConfig.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[11px] font-black text-emerald-700 hover:text-emerald-900 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Gabung →
          </a>
        </div>
      </div>
    </aside>
  );
}
