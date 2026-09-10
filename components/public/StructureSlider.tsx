"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { pmsStructureSlides } from "@/data/site";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StructureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Gerak otomatis ke kanan setiap 3 detik
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Dukungan touch swipe pada layar sentuh mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-10 sm:py-16 border-b border-navy-900">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-japanese opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        {/* Full Image Carousel Frame */}
        <div
          className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-navy-800 bg-black select-none group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Horizontal Slide Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pmsStructureSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full shrink-0 flex items-center justify-center bg-black min-h-[380px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[660px]"
              >
                <img
                  src={slide.imageUrl}
                  alt={`Struktur LPK PMS Karawang ${idx + 1}`}
                  className="w-full h-auto max-h-[720px] object-contain mx-auto"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          {/* Tombol Navigasi KIRI (<) di samping foto */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Tombol Navigasi KANAN (>) di samping foto */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Foto Berikutnya"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Indikator Titik di Bawah Foto */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            {pmsStructureSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-vermilion-500 shadow-md"
                    : "w-2.5 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
