"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { pmsStructureSlides } from "@/data/site";
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Sparkles, Building2 } from "lucide-react";

export default function StructureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = pmsStructureSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Auto-scroll every 3 seconds to the right
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20 text-white border-b border-navy-900">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-japanese opacity-15 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-vermilion-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-xs font-bold text-primary-300 uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-vermilion-500" />
              <span>Galeri & Struktur Resmi LPK PMS Karawang</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Kenalan Lebih Dekat dengan LPK PMS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Urutan profil lembaga, fasilitas belajar, dan alur persiapan kerja ke Jepang resmi terakreditasi Kemnaker RI (Otomatis bergerak ke kanan setiap 3 detik).
            </p>
          </div>

          {/* Controls: Prev, Next & Pause */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Jeda rotasi otomatis" : "Lanjutkan rotasi otomatis"}
              className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white border border-navy-700 transition-colors text-xs flex items-center gap-1.5"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
              <span className="text-[11px] font-semibold hidden sm:inline">
                {isPlaying ? "3s Auto" : "Jeda"}
              </span>
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 transition-all hover:scale-105"
              aria-label="Slide Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 transition-all hover:scale-105"
              aria-label="Slide Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container: Horizontal Side-by-Side Track */}
        <div
          className="relative rounded-3xl overflow-hidden border border-navy-800 shadow-2xl bg-navy-950 select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pmsStructureSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full shrink-0 relative flex flex-col lg:flex-row items-center justify-between min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 gap-8"
              >
                {/* Text Information Column */}
                <div className="w-full lg:w-1/2 space-y-4 text-left z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-3 py-1 rounded-lg bg-vermilion-600 text-white shadow-sm">
                      Foto 0{slide.id} / 0{totalSlides}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {slide.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    {slide.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                    {slide.subtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={slide.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white text-xs font-semibold border border-navy-700 transition-colors"
                    >
                      <span>Buka Foto Resolusi Asli</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Image Display Frame with 3D Depth */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                  <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-navy-700/80 bg-navy-900 group">
                    <img
                      src={slide.imageUrl}
                      alt={`${slide.title} - LPK Panca Multiguna Sukses Karawang`}
                      className="w-full h-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-300 bg-navy-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-navy-800 flex items-center justify-between">
                      <span className="font-semibold text-white truncate">Slide 0{slide.id} • Urutan Resmi</span>
                      <span className="text-[10px] text-primary-300 font-mono">lpkpms.my.id</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Indicators & Progress Bar */}
          <div className="p-4 bg-navy-950/90 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Pagination Thumbnails / Dots */}
            <div className="flex items-center gap-2">
              {pmsStructureSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-vermilion-500 shadow-md"
                      : "w-2.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Lihat Foto 0${slide.id}`}
                />
              ))}
            </div>

            {/* Slide Navigation Labels */}
            <div className="text-xs text-slate-400 font-medium">
              Foto <span className="font-bold text-white">0{currentIndex + 1}</span> dari <span className="font-bold text-white">0{totalSlides}</span> • Otomatis berganti tiap 3 detik
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
