import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  kanji?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeader({
  eyebrow,
  kanji,
  title,
  highlight,
  description,
  align = "center",
  theme = "light",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`relative mb-12 sm:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      }`}
    >
      {/* Subtle Japanese Kanji Watermark */}
      {kanji && (
        <span
          aria-hidden="true"
          className={`absolute select-none pointer-events-none font-heading font-black text-6xl sm:text-7xl lg:text-8xl opacity-[0.06] ${
            isDark ? "text-white" : "text-navy-950"
          } ${isCenter ? "left-1/2 -top-8 sm:-top-10 -translate-x-1/2" : "-left-4 -top-8 sm:-top-10"}`}
        >
          {kanji}
        </span>
      )}

      {/* Eyebrow badge */}
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 ${
            isDark
              ? "bg-white/10 text-emerald-300 border border-white/15"
              : "bg-slate-100 text-vermilion-700 border border-slate-200"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion-600 shrink-0" />
          <span>{eyebrow}</span>
        </div>
      )}

      {/* Title */}
      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] ${
          isDark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-vermilion-600 relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
