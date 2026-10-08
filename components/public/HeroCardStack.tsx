"use client";

import { useState, useRef, MouseEvent, useCallback } from "react";
import { Users, Globe } from "lucide-react";

/* Deterministic petal config — drifting sakura across the hero visual */
const PETALS = [
  { left: "5%", size: 12, dx: 42, fall: 500, dur: 10.5, delay: 0, op: 0.75, hue: "#F6C6C6" },
  { left: "16%", size: 8, dx: -28, fall: 420, dur: 13, delay: 1.6, op: 0.6, hue: "#FBD9D9" },
  { left: "28%", size: 14, dx: 34, fall: 540, dur: 12, delay: 3.1, op: 0.8, hue: "#F3BABA" },
  { left: "42%", size: 9, dx: -36, fall: 400, dur: 14.5, delay: 4.4, op: 0.55, hue: "#FBD9D9" },
  { left: "56%", size: 12, dx: 30, fall: 520, dur: 11.5, delay: 2.2, op: 0.7, hue: "#F6C6C6" },
  { left: "68%", size: 8, dx: -24, fall: 430, dur: 13.5, delay: 5.2, op: 0.6, hue: "#F8CFCF" },
  { left: "80%", size: 13, dx: 38, fall: 510, dur: 10, delay: 6.3, op: 0.75, hue: "#F3BABA" },
  { left: "91%", size: 9, dx: -32, fall: 410, dur: 14, delay: 1.1, op: 0.6, hue: "#FBD9D9" },
];

/* Vermilion torii gate silhouette */
function ToriiSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 172"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* kasagi — curved top beam */}
      <path
        d="M8 36 C60 10 180 10 232 36"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* nuki — second beam */}
      <rect x="14" y="50" width="212" height="11" rx="5" fill="currentColor" />
      {/* gakuzuka — center tablet */}
      <rect x="104" y="18" width="32" height="26" rx="3" fill="currentColor" />
      {/* pillars */}
      <rect x="34" y="54" width="14" height="114" rx="4" fill="currentColor" />
      <rect x="192" y="54" width="14" height="114" rx="4" fill="currentColor" />
    </svg>
  );
}

export default function HeroCardStack() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 6, y: -8 });
  const [hover, setHover] = useState(false);

  const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setRot({ x: (0.5 - py) * 18, y: (px - 0.5) * 22 });
  }, []);

  const onMouseLeave = useCallback(() => {
    setHover(false);
    setRot({ x: 6, y: -8 });
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[540px] mx-auto h-[430px] sm:h-[480px] select-none"
      style={{ perspective: "2000px" }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onMouseLeave}
    >
      {/* Sakura petals */}
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="animate-sakura absolute top-0 block"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle at 30% 30%, #FFFFFF, ${p.hue})`,
            borderRadius: "100% 0 100% 100%",
            ["--petal-dx" as string]: `${p.dx}px`,
            ["--petal-fall" as string]: `${p.fall}px`,
            ["--petal-dur" as string]: `${p.dur}s`,
            ["--petal-op" as string]: p.op,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Torii gate silhouette (deep parallax layer) */}
      <div
        className="animate-torii-glow absolute top-4 right-0 w-56 sm:w-64 text-vermilion-600 pointer-events-none"
        style={{ transform: "translateZ(-70px) scale(1.08)" }}
      >
        <ToriiSVG />
      </div>

      {/* Warm gold glow disc */}
      <div className="pointer-events-none absolute bottom-16 right-4 w-72 h-72 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-10 left-0 w-64 h-64 rounded-full bg-vermilion-500/10 blur-3xl" />

      {/* Tilt stage — follows the cursor */}
      <div
        className="absolute inset-0 preserve-3d"
        style={{
          transform: hover ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` : undefined,
          transitionProperty: "transform",
          transitionTimingFunction: "ease-out",
          transitionDuration: hover ? "90ms" : "700ms",
        }}
      >
        {/* Gentle breathing float for the whole stack */}
        <div className="absolute inset-0 preserve-3d animate-stack-float">
          {/* ===== CARD 3 (back): Certificate of Eligibility ===== */}
          <div
            className="absolute top-1 right-3 w-[66%] rounded-2xl bg-navy-950 border border-gold-500/40 overflow-hidden"
            style={{
              transform: "translateZ(20px) rotate(3deg)",
              boxShadow: "0 26px 44px -22px rgba(11, 23, 39, 0.65)",
            }}
          >
            <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600" />
            <div className="relative p-4">
              <span className="kanji-watermark absolute -right-2 -bottom-4 text-6xl text-gold-300 font-jp">
                合格証
              </span>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 text-[10px] font-black tracking-widest border border-gold-500/40">
                  合格証
                </span>
                <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                  CoE Approved
                </span>
              </div>
              <h3 className="font-heading font-black text-sm sm:text-base text-white leading-tight">
                Certificate of Eligibility
              </h3>
              <p className="text-[10.5px] text-slate-400 mt-1 font-jp">
                在留資格認定証明書 • Imigrasi Jepang
              </p>
            </div>
          </div>

          {/* ===== CARD 2 (middle): Pemagangan ===== */}
          <div
            className="absolute top-24 left-0 w-[76%] rounded-2xl bg-white border border-slate-200 overflow-hidden"
            style={{
              transform: "translateZ(65px) rotate(-2.5deg)",
              boxShadow: "0 30px 52px -22px rgba(11, 23, 39, 0.42)",
            }}
          >
            <div className="h-1.5 bg-gradient-to-r from-navy-900 via-navy-700 to-navy-900" />
            <div className="relative p-4 sm:p-5">
              <span className="kanji-watermark absolute -right-2 -bottom-4 text-7xl text-navy-950 font-jp">
                実習
              </span>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-navy-950 text-white text-[10px] font-black tracking-wider">
                  実習
                </span>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                  Magang
                </span>
              </div>
              <h3 className="font-heading font-black text-base sm:text-lg text-navy-950 leading-tight">
                Program Pemagangan
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 mb-3">
                Ginou Jisshuusei • 3–5 tahun di kaisha mitra
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                  3–5 Tahun
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                  Bahasa N5+
                </span>
              </div>
            </div>
          </div>

          {/* ===== CARD 1 (front): Tokutei Ginou ===== */}
          <div
            className="absolute bottom-7 right-0 w-[80%] rounded-2xl bg-white border border-slate-200 overflow-hidden"
            style={{
              transform: "translateZ(120px) rotate(1.5deg)",
              boxShadow: "0 34px 58px -22px rgba(11, 23, 39, 0.45)",
            }}
          >
            <div className="h-1.5 bg-gradient-to-r from-vermilion-700 via-vermilion-500 to-vermilion-700" />
            <div className="relative p-4 sm:p-5">
              <span className="kanji-watermark absolute -right-2 -bottom-4 text-7xl text-vermilion-600 font-jp">
                特定技能
              </span>
              {/* Hanko stamp */}
              <div
                className="animate-hanko absolute top-3.5 right-3.5 w-11 h-11 rounded-lg bg-vermilion-600 text-white grid place-items-center font-jp font-black text-sm rotate-[-5deg] shadow-lg"
                style={{ boxShadow: "0 8px 18px -6px rgba(200, 16, 46, 0.6)" }}
              >
                合格
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-vermilion-600 text-white text-[10px] font-black tracking-wider">
                  SSW
                </span>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                  Visa Kerja
                </span>
              </div>
              <h3 className="font-heading font-black text-base sm:text-lg text-navy-950 leading-tight pr-10">
                Tokutei Ginou
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 mb-3">
                Specified Skilled Worker • gaji setara warga Jepang
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-vermilion-50 text-vermilion-700 text-[10px] font-bold border border-vermilion-200">
                  JLPT N4 / JFT
                </span>
                <span className="px-2 py-0.5 rounded bg-vermilion-50 text-vermilion-700 text-[10px] font-bold border border-vermilion-200">
                  18–25 Jt/bln
                </span>
              </div>
            </div>
          </div>

          {/* ===== Floating chip: language badge ===== */}
          <div
            className="absolute top-1 left-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 flex items-center gap-1.5"
            style={{
              transform: "translateZ(150px)",
              boxShadow: "0 16px 30px -14px rgba(11, 23, 39, 0.4)",
            }}
          >
            <Globe className="w-3.5 h-3.5 text-vermilion-600" />
            <span className="text-[11px] font-black text-navy-950 font-jp">
              日本語 <span className="font-sans text-slate-400 font-bold">• JLPT N4</span>
            </span>
          </div>

          {/* ===== Floating chip: alumni count ===== */}
          <div
            className="absolute bottom-0 left-2 px-3.5 py-2 rounded-xl bg-navy-950 border border-gold-500/40 flex items-center gap-2.5"
            style={{
              transform: "translateZ(155px)",
              boxShadow: "0 22px 38px -16px rgba(11, 23, 39, 0.6)",
            }}
          >
            <Users className="w-4 h-4 text-gold-400" />
            <div>
              <div className="text-sm font-black leading-none text-white">200+ Alumni</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Bekerja di Jepang</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
