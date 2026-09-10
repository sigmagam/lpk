"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { pmsStructureSlides } from "@/data/site";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StructureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = pmsStructureSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    resetTimer();
  };

  // Fungsi untuk me-reset timer dan memastikan auto-slide selalu berputar per 3 detik
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
  }, [totalSlides]);

  // Efek inisialisasi auto-play terus menerus
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleManualNext = () => {
    nextSlide();
    resetTimer();
  };

  const handleManualPrev = () => {
    prevSlide();
    resetTimer();
  };

  // Dukungan touch swipe pada layar sentuh mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleManualNext();
    } else if (diff < -40) {
      handleManualPrev();
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
            onClick={handleManualPrev}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Tombol Navigasi KANAN (>) di samping foto */}
          <button
            type="button"
            onClick={handleManualNext}
            aria-label="Foto Berikutnya"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/30 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Indikator Titik di Bawah Foto */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            {pmsStructureSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-vermilion-500 shadow-md"
                    : "w-2.5 bg-white/50 hover:bg-white/90"
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
