"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageCircle,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Pause,
  Play
} from "lucide-react";
import { siteConfig } from "@/data/site";

interface BannerSlide {
  id: string;
  name: string;
  branch: string;
  location: string;
  tag: string;
  imageUrl: string;
  alt: string;
  description: string;
  whatsappText: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: "karawang",
    name: "LPK PMS KARAWANG",
    branch: "Cabang Karawang (Pusat)",
    location: "Purwasari, Karawang, Jawa Barat",
    tag: "Kampus Utama & Pelatihan",
    imageUrl: "https://i.ibb.co.com/Ldp2cFhg/file-00000000187081fab476059634b0df3f.png",
    alt: "Banner Resmi LPK PMS Karawang",
    description: "Pusat Pelatihan Kerja & Bahasa Jepang Resmi Terdaftar Kemnaker RI (VIN: 2001321506).",
    whatsappText: "Halo Admin LPK PMS, saya ingin konsultasi pendaftaran untuk cabang Karawang."
  },
  {
    id: "lampung",
    name: "LPK PMS LAMPUNG",
    branch: "Cabang Lampung",
    location: "Lampung, Sumatera",
    tag: "Kampus Cabang Resmi",
    imageUrl: "https://i.ibb.co.com/W4YLhDW4/file-00000000044081f5a0a624c9ba2b232d.png",
    alt: "Banner Resmi LPK PMS Lampung",
    description: "Lembaga Pelatihan Kerja Resmi Menyiapkan Calon Tenaga Kerja Profesional ke Jepang.",
    whatsappText: "Halo Admin LPK PMS, saya ingin konsultasi pendaftaran untuk cabang Lampung."
  }
];

// Display duration per slide and total auto-close duration (5 seconds)
const SLIDE_INTERVAL_MS = 2500; // Auto slide every 2.5 seconds to the left
const AUTO_CLOSE_TOTAL_MS = 5000; // 5 seconds display timer as requested

export default function WelcomeBannerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const elapsedMsRef = useRef<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  // Mount effect: show banner whenever user visits or refreshes
  useEffect(() => {
    // Show banner on every mount/refresh as requested
    setIsOpen(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  }, []);

  // Slide cycling interval (auto slide to the left)
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isOpen, isPaused, nextSlide]);

  // Overall 5-second countdown progress & auto close
  useEffect(() => {
    if (!isOpen) {
      elapsedMsRef.current = 0;
      setProgress(0);
      return;
    }

    const stepMs = 50;
    progressIntervalRef.current = setInterval(() => {
      if (isPaused) return;

      elapsedMsRef.current += stepMs;
      const currentPct = Math.min(100, (elapsedMsRef.current / AUTO_CLOSE_TOTAL_MS) * 100);
      setProgress(currentPct);

      if (elapsedMsRef.current >= AUTO_CLOSE_TOTAL_MS) {
        setIsOpen(false);
      }
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isOpen, isPaused]);

  // Handle keyboard Escape to close, arrows to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    // Swipe left = next slide (sliding left)
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const currentSlide = bannerSlides[currentIndex];
  const secondsLeft = Math.max(0, Math.ceil((AUTO_CLOSE_TOTAL_MS - elapsedMsRef.current) / 1000));

  if (!isOpen) return null;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-banner-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto select-none"
    >
      {/* 1. Backdrop Overlay (Clicking closes the banner immediately) */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity animate-fade-up cursor-pointer"
        aria-hidden="true"
      />

      {/* 2. Modal Card Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-lg sm:max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-fade-up my-auto"
        style={{
          boxShadow: "0 25px 60px -15px rgba(11, 23, 39, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15)"
        }}
      >
        {/* Top Countdown Bar (5-second display progress) */}
        <div className="h-1.5 w-full bg-slate-100 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-vermilion-500 via-vermilion-600 to-primary-600 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Modal Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-navy-950 text-white flex items-center justify-between gap-3 border-b border-navy-900">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-xl bg-vermilion-600/30 text-vermilion-400 border border-vermilion-500/30 shrink-0">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Pengumuman Resmi LPK PMS</span>
              </div>
              <h2
                id="welcome-banner-title"
                className="font-heading font-black text-xs sm:text-sm text-white truncate"
              >
                Pusat Informasi Cabang Pelatihan Kerja ke Jepang
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Countdown / Pause Indicator Badge */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Lanjutkan timer otomatis" : "Jeda timer otomatis"}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-navy-900 hover:bg-navy-800 text-[10px] font-semibold text-slate-300 border border-navy-800 transition-colors cursor-pointer"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span className="hidden sm:inline">Dijeda</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-amber-400" />
                  <span>{secondsLeft}s</span>
                </>
              )}
            </button>

            {/* Prominent Close "X" Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup banner"
              className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-vermilion-600 text-white border border-white/15 hover:border-vermilion-500 transition-all duration-150 cursor-pointer group"
              title="Tutup banner (Esc)"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Branch Quick Switch Tabs */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 text-xs font-bold">
          {bannerSlides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`flex-1 py-2.5 px-3 text-center transition-all flex items-center justify-center gap-2 cursor-pointer border-b-2 ${
                currentIndex === idx
                  ? "border-vermilion-600 bg-white text-vermilion-700 shadow-sm"
                  : "border-transparent text-slate-600 hover:text-navy-950 hover:bg-slate-100"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  currentIndex === idx ? "bg-vermilion-600" : "bg-slate-300"
                }`}
              />
              <span className="truncate">{slide.name}</span>
            </button>
          ))}
        </div>

        {/* Slide Viewport / Carousel (Smooth Slide to Left Animation) */}
        <div className="relative overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[16/9] max-h-[380px] flex items-center justify-center">
          <div
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {bannerSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full h-full shrink-0 relative flex items-center justify-center bg-slate-950"
              >
                {!imageErrors[slide.id] ? (
                  <img
                    src={slide.imageUrl}
                    alt={slide.alt}
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [slide.id]: true }))
                    }
                    className="w-full h-full object-contain mx-auto"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  /* Fallback display if network blocks external host */
                  <div className="p-8 text-center text-white flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-vermilion-400 font-black text-xl">
                      PMS
                    </div>
                    <div className="font-heading font-black text-xl text-white">
                      {slide.name}
                    </div>
                    <p className="text-xs text-slate-300 max-w-sm">
                      {slide.description}
                    </p>
                  </div>
                )}

                {/* Overlaid Branch Badge on Top-Left of the Image */}
                <div className="absolute top-3 left-3 flex flex-col items-start gap-1">
                  <span className="px-3 py-1 rounded-full bg-navy-950/90 backdrop-blur-md text-white border border-white/20 text-[11px] font-black tracking-wide shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{slide.name}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-vermilion-600/90 backdrop-blur-sm text-white text-[10px] font-bold shadow-sm">
                    {slide.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Left / Right Carousel Controls */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white backdrop-blur-sm border border-white/20 shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white backdrop-blur-sm border border-white/20 shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10">
            {bannerSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Buka slide ${slide.name}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-7 bg-vermilion-500 shadow-md"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal Footer / Description & Call to Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="space-y-0.5 min-w-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-vermilion-600 shrink-0" />
              <span className="truncate">{currentSlide.location}</span>
            </div>
            <p className="text-xs text-slate-700 font-medium line-clamp-1">
              {currentSlide.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* WhatsApp Consultation for current branch */}
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent(currentSlide.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Konsultasi</span>
            </a>

            {/* Direct Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
            >
              <span>Tutup Banner</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
