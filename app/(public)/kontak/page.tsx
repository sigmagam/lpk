import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck, Building2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Resmi | LPK Panca Multiguna Sukses Karawang",
  description:
    "Hubungi LPK Panca Multiguna Sukses Karawang untuk konsultasi pendaftaran program pelatihan kerja dan pemagangan ke Jepang via WhatsApp.",
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
            Hubungi Kami
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Konsultasikan rencana pelatihan kerja dan pemagangan ke Jepang bersama instruktur dan staf profesional kami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Direct WhatsApp CTA Card */}
            <div className="card-3d-interactive bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <MessageCircle className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-emerald-700 tracking-wider block mb-1">
                  Narahubung Utama
                </span>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
                  Konsultasi WhatsApp
                </h2>
                <div className="text-lg font-mono font-bold text-navy-950 mt-1">
                  {siteConfig.whatsappNumber}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kirim pesan langsung ke admin untuk menanyakan jadwal seleksi, persyaratan dokumen, dan alur pelatihan di Karawang.
              </p>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Mulai Obrolan WhatsApp</span>
              </a>
            </div>

            {/* Address & Institutional Credential Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-navy-50 text-navy-900 flex items-center justify-center border border-navy-100">
                <Building2 className="w-7 h-7 text-primary-700" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
                  Kantor & Balai Pelatihan
                </span>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
                  {siteConfig.name}
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {siteConfig.address}
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 text-vermilion-500" />
                  <span>Lihat Petunjuk Peta di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={siteConfig.legalitasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verifikasi Legalitas Kemnaker</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
