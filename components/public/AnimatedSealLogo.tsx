"use client";

import Image from "next/image";
import { useState, useRef, MouseEvent, useCallback } from "react";

/**
 * Animated 3D seal logo.
 *
 * Sumber gambar: https://i.ibb.co.com/ZtXxYNX/file-000000005b1081fabd1a436314a85246.png
 * Terdeteksi (OCR): stempel merah-emas bertuliskan
 *   - lengkung atas : "PERKUMPULAN LEMBAGA PELATIHAN BAHASA JEPANG"
 *   - lengkung bawah: "ALPA INDONESIA"
 * Alt teks mengikuti hasil deteksi tersebut.
 */
export default function AnimatedSealLogo({
  size = 200,
  spin = true,
  wobble = true,
  glow = true,
  className = "",
}: {
  size?: number;
  spin?: boolean;
  wobble?: boolean;
  glow?: boolean;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      x: ((e.clientY - rect.top - cy) / cy) * -14,
      y: ((e.clientX - rect.left - cx) / cx) * 14,
    });
  }, []);

  const handleMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <div
      ref={wrapRef}
      className={`relative select-none ${className}`}
      style={{ width: size, height: size, perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow */}
      {glow && (
        <div className="absolute inset-0 rounded-full bg-vermilion-500/25 blur-[42px] animate-pulse-glow-ring pointer-events-none" />
      )}

      {/* Rotating decorative ring */}
      <div
        className="absolute inset-[-6%] rounded-full border-2 border-dashed border-vermilion-500/30 animate-seal-spin pointer-events-none"
        aria-hidden="true"
      />

      {/* Coin wobble wrapper (3D) */}
      <div
        className={`absolute inset-0 preserve-3d ${wobble ? "animate-seal-wobble" : ""}`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transitionDuration: tilt.x === 0 && tilt.y === 0 ? "0.6s" : "80ms",
        }}
      >
        {/* The seal itself spins inside the wobble frame */}
        <div className={`absolute inset-0 ${spin ? "animate-seal-spin" : ""}`}>
          <Image
            src="/images/logo-anim.png"
            alt="Logo stempel Perkumpulan Lembaga Pelatihan Bahasa Jepang ALPA Indonesia"
            width={size}
            height={size}
            priority
            className="w-full h-full object-contain drop-shadow-[0_14px_24px_rgba(200,16,46,0.28)]"
          />
        </div>

        {/* Travelling sheen sweep */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden pointer-events-none animate-seal-sheen"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 w-[140%] h-[8%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md" />
        </div>
      </div>
    </div>
  );
}
