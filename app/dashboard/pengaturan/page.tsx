import { siteConfig } from "@/data/site";
import { Building2, MapPin, Phone, ShieldCheck, Check, Globe } from "lucide-react";

export default function DashboardPengaturanPage() {
  return (
    <div className="space-y-6 animate-fade-up max-w-4xl">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
          Pengaturan Profil Lembaga & Sistem
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Konfigurasi identitas resmi, narahubung operasional, dan data lembaga
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-4">
          <h2 className="font-heading font-bold text-sm text-navy-950 uppercase tracking-wider pb-2 border-b border-slate-100">
            Informasi Lembaga Resmi
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 font-bold mb-1 uppercase text-[10px]">
                Nama Resmi Lembaga
              </label>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-navy-950">
                {siteConfig.name}
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-bold mb-1 uppercase text-[10px]">
                Singkatan Nama
              </label>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-navy-950">
                {siteConfig.shortName}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 font-bold mb-1 uppercase text-[10px]">
              Alamat Resmi Lembaga
            </label>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 leading-relaxed text-xs">
              {siteConfig.address}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 font-bold mb-1 uppercase text-[10px]">
                Narahubung WhatsApp
              </label>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-emerald-700">
                {siteConfig.whatsappNumber}
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-bold mb-1 uppercase text-[10px]">
                Status Verifikasi
              </label>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Terdaftar Resmi Kemnaker RI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Pengaturan dikelola oleh Administrator LPK Karawang.</span>
          <span className="font-semibold text-emerald-700">Status Aktif</span>
        </div>
      </div>
    </div>
  );
}
