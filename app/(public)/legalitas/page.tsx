import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { ShieldCheck, ExternalLink, CheckCircle2, Building2, MapPin, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Legalitas Resmi | LPK Panca Multiguna Sukses Karawang",
  description:
    "Status legalitas resmi LPK Panca Multiguna Sukses Karawang di Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI).",
};

export default function LegalitasPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            TERDAFTAR RESMI
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Legalitas Resmi
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Terdaftar di Kementerian Ketenagakerjaan Republik Indonesia
          </p>
        </div>
      </section>

      {/* Official Details & Verification Link */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Credential Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Status Kelembagaan
                  </span>
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-navy-950 mt-1">
                    Verified LPK
                  </div>
                </div>

                <a
                  href={siteConfig.legalitasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-colors self-start sm:self-auto"
                >
                  <span>Lihat Legalitas Resmi</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  LPK Panca Multiguna Sukses Karawang merupakan lembaga pelatihan kerja yang terdaftar pada platform resmi Kementerian Ketenagakerjaan Republik Indonesia.
                </p>
                <p>
                  Seluruh program pelatihan, tenaga pengajar, dan kurikulum yang diselenggarakan telah memenuhi pedoman standar kelembagaan ketenagakerjaan untuk mempersiapkan tenaga kerja Indonesia menuju pasar kerja di Jepang.
                </p>
              </div>

              {/* Data Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Nama Lembaga:
                  </span>
                  <span className="font-bold text-navy-950 text-sm">
                    {siteConfig.name}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Kategori Pelatihan:
                  </span>
                  <span className="font-bold text-navy-950 text-sm">
                    National Batch & Magang ke Jepang
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 sm:col-span-2">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    Alamat Lembaga:
                  </span>
                  <span className="font-medium text-slate-800 text-xs sm:text-sm">
                    {siteConfig.address}
                  </span>
                </div>
              </div>

              {/* CTA Link Box */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div className="text-xs sm:text-sm font-semibold text-emerald-900">
                    Buka tautan Skillhub Kemnaker RI untuk melihat profil katalog resmi
                  </div>
                </div>
                <a
                  href={siteConfig.legalitasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shrink-0 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Buka Portal Kemnaker</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
