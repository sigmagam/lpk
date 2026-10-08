"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";

const MONTHS_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

/* Rolling deadline: tanggal 20 tiap bulan, otomatis lanjut ke bulan
   berikutnya kalau sudah lewat — jadi banner nggak pernah basi. */
function nextBatchClose(): Date {
  const now = new Date();
  const t = new Date(now.getFullYear(), now.getMonth(), 20, 23, 59, 59, 0);
  return t.getTime() <= now.getTime()
    ? new Date(now.getFullYear(), now.getMonth() + 1, 20, 23, 59, 59, 0)
    : t;
}

function timeLeft(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
    s: Math.floor((ms % 60_000) / 1_000),
    open: ms > 0,
  };
}

export default function BatchCountdown() {
  const [target, setTarget] = useState<Date | null>(null);
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, open: false });

  useEffect(() => {
    const tg = nextBatchClose();
    setTarget(tg);
    const tick = () => setT(timeLeft(tg));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  if (!target) return null;

  const units = [
    { v: t.d, l: "hari" },
    { v: t.h, l: "jam" },
    { v: t.m, l: "menit" },
    { v: t.s, l: "detik" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-vermilion-700 via-vermilion-600 to-vermilion-700 text-white">
      <div
        className="pointer-events-none absolute inset-0 text-white pattern-seigaiha opacity-[0.07]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-center">
        <p className="text-xs sm:text-sm font-bold flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 font-jp text-[11px] shrink-0">
            開
          </span>
          <span>
            Pendaftaran Batch{" "}
            <span className="font-black">
              {MONTHS_ID[target.getMonth()]} {target.getFullYear()}
            </span>{" "}
            dibuka!
          </span>
        </p>

        {t.open ? (
          <p className="text-xs sm:text-sm font-semibold flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center">
            <span className="text-white/80">Tutup dalam</span>
            {units.map((u, i) => (
              <span key={i} className="inline-flex items-baseline gap-1">
                <span className="font-mono font-black text-sm sm:text-base tabular-nums bg-white/15 rounded px-1.5 py-0.5 min-w-[2.1ch] text-center">
                  {String(u.v).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-white/70">{u.l}</span>
              </span>
            ))}
          </p>
        ) : (
          <p className="text-xs sm:text-sm font-semibold">
            Batch selanjutnya segera dibuka — amankan slot duluan sekarang
          </p>
        )}

        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-vermilion-700 text-xs font-black hover:bg-gold-100 transition-colors"
        >
          Ambil Slot
        </a>
      </div>
    </div>
  );
}
