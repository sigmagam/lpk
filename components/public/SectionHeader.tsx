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
      className={`mb-12 sm:mb-14 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      }`}
    >
      {eyebrow && (
        <div
          className={`anim-scale-pop inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
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
        className={`anim-fade-up anim-delay-100 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] ${
          isDark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-vermilion-600">{highlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={`anim-fade-up anim-delay-200 mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
