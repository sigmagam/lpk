import { siteConfig } from "@/data/site";
import { ShieldCheck, ExternalLink, CheckCircle2, FileText, Building2, MapPin } from "lucide-react";

export default function DashboardLegalitasPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      {/* Verification Header */}
      <div className="rounded-3xl bg-navy-950 text-white p-6 sm:p-8 border border-navy-900 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Status: TERDAFTAR RESMI & VERIFIED</span>
            </div>
            <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Legalitas & Akreditasi Kementerian Ketenagakerjaan RI
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              LPK Panca Multiguna Sukses Karawang terdaftar resmi pada basis data mitra pelatihan kerja dan program pemagangan nasional.
            </p>
          </div>

          <a
            href={siteConfig.legalitasUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-md shrink-0 transition-colors"
          >
            <span>Buka Halaman Kemnaker</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Institutional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="font-heading font-bold text-base text-navy-950 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary-700" />
            <span>Identitas Resmi Kelembagaan</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 font-semibold block text-[10px] uppercase">
                Nama Resmi Lembaga:
              </span>
              <span className="font-bold text-navy-950 text-sm">
                LPK Panca Multiguna Sukses Karawang
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 font-semibold block text-[10px] uppercase">
                ID Mitra Skillhub:
              </span>
              <span className="font-mono font-bold text-slate-800 text-xs">
                9300c90b-e49d-477f-b7e3-33828b0f9395
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 font-semibold block text-[10px] uppercase">
                Katalog Program:
              </span>
              <span className="font-mono text-slate-700 text-xs">
                5e4a8242-f308-4cc4-a93d-1ced3ce86ea0
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 font-semibold block text-[10px] uppercase">
                Kategori Pelatihan:
              </span>
              <span className="font-bold text-emerald-700 text-xs">
                National Batch / Pelatihan Kerja & Magang
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="font-heading font-bold text-base text-navy-950 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-vermilion-600" />
            <span>Domisili & Kedudukan Hukum</span>
          </h2>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-3">
            <div>
              <span className="font-bold text-navy-950 block mb-1">
                Alamat Operasional:
              </span>
              <span>{siteConfig.address}</span>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <span className="font-bold text-navy-950 block mb-1">
                Wilayah Kerja:
              </span>
              <span>Kabupaten Karawang, Provinsi Jawa Barat</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-800">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold block">Status Aktif & Sah</span>
              <span>Seluruh dokumen terdaftar dan dapat ditinjau oleh publik secara transparan.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
