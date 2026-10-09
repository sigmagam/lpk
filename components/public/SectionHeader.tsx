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
      className={`mb-14 sm:mb-16 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      }`}
    >
      {eyebrow && (
        <div
          className={`anim-scale-pop inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 ${
            isDark
              ? "bg-white/10 text-emerald-300 border border-white/15"
              : "bg-slate-100 text-vermilion-700 border border-slate-200"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion-600 shrink-0" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`anim-fade-up anim-delay-100 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] ${
          isDark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="relative inline-block">
            <span className="text-vermilion-600">{highlight}</span>
            <span className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-gradient-to-r from-vermilion-600/80 via-gold-400/70 to-transparent rounded-full" />
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`anim-fade-up anim-delay-200 mt-5 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
