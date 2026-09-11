"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { pmsStructureSlides } from "@/data/site";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function StructureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const totalSlides = pmsStructureSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) nextSlide();
    else if (diff < -40) prevSlide();
    touchStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <section
      className="py-14 sm:py-20 bg-slate-100 border-y border-slate-200 select-none"
      aria-labelledby="slider-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200 mb-2">
              <ImageIcon className="w-3.5 h-3.5 text-vermilion-600" />
              <span>Dokumentasi Resmi Kelembagaan</span>
            </div>
            <h2 id="slider-heading" className="font-heading font-black text-2xl sm:text-3xl text-navy-950">
              Profil & Suasana Pelatihan LPK PMS Karawang
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Slide sebelumnya"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-navy-950 border border-slate-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-navy-950 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Slide berikutnya"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-navy-950 border border-slate-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-navy-950 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Frame */}
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-slate-900 border border-slate-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-navy-950"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pmsStructureSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full shrink-0 flex flex-col items-center justify-center bg-slate-950"
              >
                <div className="w-full flex items-center justify-center min-h-[350px] sm:min-h-[480px] lg:min-h-[580px]">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-auto max-h-[640px] object-contain mx-auto"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Title Bar */}
          <div className="p-4 sm:p-5 bg-navy-950/90 backdrop-blur-sm text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-navy-800">
            <div>
              <div className="text-[11px] font-bold text-vermilion-400 uppercase tracking-wider">
                {pmsStructureSlides[currentIndex].tag}
              </div>
              <div className="font-heading font-bold text-sm sm:text-base text-white">
                {pmsStructureSlides[currentIndex].title}
              </div>
            </div>

            {/* Dots Pagination */}
            <div className="flex items-center gap-1.5 shrink-0">
              {pmsStructureSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    currentIndex === idx
                      ? "w-6 bg-vermilion-500"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Buka slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
