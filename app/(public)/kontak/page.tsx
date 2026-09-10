import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck, Building2, BellRing, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Resmi & Saluran Info Job | LPK Panca Multiguna Sukses Karawang",
  description:
    "Hubungi LPK Panca Multiguna Sukses Karawang untuk konsultasi pendaftaran program pelatihan kerja dan bergabung ke Channel WhatsApp Info Job PMS Pusat.",
};

export default function KontakPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-xs font-semibold text-primary-300 uppercase tracking-wider mb-4">
            <Phone className="w-4 h-4 text-emerald-400" />
            Layanan Informasi & Pendaftaran
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Hubungi Kami & Saluran Resmi
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Konsultasikan rencana pelatihan kerja dan pemagangan ke Jepang serta dapatkan update lowongan kerja langsung melalui saluran resmi PMS.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Channel Info Job Card */}
            <div className="card-3d-interactive bg-emerald-950 text-white p-8 rounded-3xl border border-emerald-800/80 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800/50 text-emerald-400 flex items-center justify-center border border-emerald-700">
                  <BellRing className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Update Loker & Job Kaisha
                  </span>
                  <h2 className="font-heading font-extrabold text-xl text-white">
                    Channel WhatsApp PMS Pusat
                  </h2>
                </div>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  Gabung saluran WhatsApp resmi untuk menerima info lowongan kerja, jadwal wawancara, dan kuota magang terbaru di Jepang.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-900/80">
                <a
                  href={siteConfig.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Gabung Channel WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Consultation Card */}
            <div className="card-3d-interactive bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center border border-primary-100">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
                    Konsultasi & Pendaftaran
                  </span>
                  <h2 className="font-heading font-extrabold text-xl text-navy-950">
                    Chat Admin WhatsApp
                  </h2>
                  <div className="text-sm font-mono font-bold text-navy-900 mt-1">
                    {siteConfig.whatsappNumber}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Konsultasi persyaratan dokumen, jadwal seleksi awal, dan biaya program langsung dengan tim admin di Karawang.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <span>Mulai Chat WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Address & Legalitas Card */}
            <div className="card-3d-interactive bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-navy-950 flex items-center justify-center border border-slate-200">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
                    Alamat Balai Pelatihan
                  </span>
                  <h2 className="font-heading font-extrabold text-xl text-navy-950">
                    {siteConfig.name}
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-vermilion-500" />
                  <span>Buka Peta Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
