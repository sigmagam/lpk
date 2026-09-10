import { keunggulan, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keunggulan Kami | LPK Panca Multiguna Sukses Karawang",
  description:
    "Fasilitas memadai, tenaga pengajar profesional, kurikulum terkini, dan pengalaman praktis intensif di LPK Panca Multiguna Sukses Karawang.",
};

export default function KeunggulanPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-xs font-semibold text-primary-300 uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-emerald-400" />
            Nilai & Standar Mutu
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Keunggulan Pelatihan
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dedikasi kami dalam menghadirkan pembinaan berkualitas, tenaga pengajar kompeten, serta sarana pelatihan yang menunjang keberhasilan peserta.
          </p>
        </div>
      </section>

      {/* Asymmetric Editorial Content */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keunggulan.map((item, idx) => (
              <div
                key={item.number}
                className={`card-3d-interactive bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between ${
                  idx === 0 ? "md:border-primary-200 bg-gradient-to-br from-white to-primary-50/20" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-2xl font-black text-navy-950">
                      {item.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-navy-950 text-white text-[10px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Standar Resmi Kemnaker RI</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-colors"
            >
              <span>Daftar Sekarang Melalui Program Kami</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
