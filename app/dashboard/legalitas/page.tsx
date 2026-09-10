import { siteConfig } from "@/data/site";
import { ShieldCheck, ExternalLink, CheckCircle2, FileText, Building2, MapPin, UserCheck, Calendar, Maximize2, Users, Mail, Phone } from "lucide-react";

export default function DashboardLegalitasPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      {/* Verification Header */}
      <div className="rounded-3xl bg-navy-950 text-white p-6 sm:p-8 border border-navy-900 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Status: TERDAFTAR RESMI & VERIFIED</span>
            </div>
            <h1 className="font-heading font-black text-xl sm:text-2xl text-white">
              Legalitas & Akreditasi Kementerian Ketenagakerjaan RI
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal">
              LPK Panca Multiguna Sukses Karawang terdaftar resmi dengan Nomor VIN: <span className="font-mono font-black text-emerald-300">{siteConfig.vinNumber}</span>
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
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-sm space-y-4">
          <h2 className="font-heading font-black text-base text-navy-950 flex items-center gap-2 pb-2 border-b-2 border-slate-100">
            <Building2 className="w-5 h-5 text-primary-800" />
            <span>Identitas Resmi Kelembagaan Kemnaker</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200">
              <span className="text-slate-700 font-bold block text-[11px] uppercase">
                Nomor VIN (Verifikasi Kemnaker):
              </span>
              <span className="font-mono font-black text-emerald-800 text-base">
                {siteConfig.vinNumber}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200">
              <span className="text-slate-700 font-bold block text-[11px] uppercase">
                Pimpinan Lembaga:
              </span>
              <span className="font-black text-navy-950 text-sm">
                {siteConfig.pimpinan}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200">
              <span className="text-slate-700 font-bold block text-[11px] uppercase">
                Tahun Berdiri & Luas Area:
              </span>
              <span className="font-black text-navy-950 text-xs">
                Tahun {siteConfig.tahunBerdiri} • Luas {siteConfig.luasArea}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200">
              <span className="text-slate-700 font-bold block text-[11px] uppercase">
                Jumlah Pegawai:
              </span>
              <span className="font-bold text-navy-950 text-xs">
                {siteConfig.jumlahPegawai}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-sm space-y-4">
          <h2 className="font-heading font-black text-base text-navy-950 flex items-center gap-2 pb-2 border-b-2 border-slate-100">
            <MapPin className="w-5 h-5 text-vermilion-600" />
            <span>Domisili & Kontak Resmi</span>
          </h2>

          <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 text-xs text-slate-800 leading-relaxed space-y-3 font-medium">
            <div>
              <span className="font-black text-navy-950 block mb-1">
                Alamat Operasional:
              </span>
              <span>{siteConfig.address}</span>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-1">
              <div className="flex justify-between">
                <span className="font-bold text-slate-700">Telepon / WA:</span>
                <span className="font-mono font-bold text-navy-950">{siteConfig.phoneRaw}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-700">Email:</span>
                <span className="font-mono font-bold text-navy-950">{siteConfig.email}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex items-center gap-3 text-xs text-emerald-950 font-medium">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <span className="font-black block">Terakreditasi & Aktif</span>
              <span>Telah meluluskan sekitar 200 orang yang bekerja di berbagai perusahaan Jepang.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
