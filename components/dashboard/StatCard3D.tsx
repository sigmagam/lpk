"use client";

import { ReactNode, useState, MouseEvent } from "react";

interface StatCard3DProps {
  label: string;
  value: string | number;
  subtext: string;
  badge?: string;
  badgeType?: "success" | "warning" | "info" | "neutral";
  icon: ReactNode;
}

export default function StatCard3D({
  label,
  value,
  subtext,
  badge,
  badgeType = "info",
  icon,
}: StatCard3DProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const badgeClasses = {
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    info: "bg-primary-50 text-primary-700 border-primary-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotation({
      x: ((y - centerY) / centerY) * -6,
      y: ((x - centerX) / centerX) * 8,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group transition-all duration-200"
      style={{
        transform: isHovered
          ? `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-4px)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)",
        boxShadow: isHovered
          ? "0 20px 30px -10px rgba(11, 27, 50, 0.15), 0 8px 12px -4px rgba(11, 27, 50, 0.06), inset 0 1px 1px rgba(255,255,255,0.9)"
          : "0 1px 3px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.8)",
      }}
    >
      {/* Top row: Label & 3D Embossed Icon */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-navy-900 group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors shrink-0 shadow-sm">
          {icon}
        </div>
      </div>

      {/* Main Metric Value */}
      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 tracking-tight mb-2">
        {value}
      </div>

      {/* Footer Info & Badge */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
        <span className="truncate">{subtext}</span>
        {badge && (
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${badgeClasses[badgeType]}`}
          >
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
