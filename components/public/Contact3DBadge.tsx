import { siteConfig } from "@/data/site";
import { Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, MapPin } from "lucide-react";

export default function Contact3DBadge() {
  return (
    <div className="rounded-3xl bg-navy-950 p-6 sm:p-8 text-white border border-navy-800 shadow-xl select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-navy-800">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-5 h-5" />
          </span>
          <div>
            <span className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider block">
              Narahubung Resmi Lembaga
            </span>
            <h3 className="font-heading font-black text-lg sm:text-xl text-white">
              Layanan Konsultasi & Pendaftaran
            </h3>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-navy-900 text-slate-300 text-xs font-semibold border border-navy-800 self-start sm:self-auto">
          Senin – Sabtu (08.00 – 17.00 WIB)
        </span>
      </div>

      {/* Contact Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {/* WhatsApp Card */}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-navy-900/90 hover:bg-emerald-950/80 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 group flex items-start gap-4 shadow-sm"
        >
          <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <MessageCircle className="w-5 h-5 fill-white" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
              WhatsApp & Telepon
            </span>
            <div className="font-mono font-bold text-white text-sm sm:text-base group-hover:text-emerald-300 transition-colors truncate">
              {siteConfig.whatsappNumber}
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center gap-1">
              <span>Chat WhatsApp Langsung</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </div>
          </div>
        </a>

        {/* Email Card */}
        <a
          href={`mailto:${siteConfig.email}`}
          className="p-5 rounded-2xl bg-navy-900/90 hover:bg-slate-900 border border-slate-700 hover:border-slate-500 transition-all duration-200 group flex items-start gap-4 shadow-sm"
        >
          <div className="w-11 h-11 rounded-xl bg-vermilion-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-0.5">
              Surat Elektronik (Email)
            </span>
            <div className="font-mono font-bold text-white text-xs sm:text-sm group-hover:text-vermilion-300 transition-colors truncate">
              {siteConfig.email}
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center gap-1">
              <span>Kirim Email Resmi</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </div>
          </div>
        </a>
      </div>

      {/* Footer Details */}
      <div className="mt-6 pt-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-vermilion-500" />
          Purwasari, Karawang, Jawa Barat
        </span>
        <span>
          Terdaftar Kemnaker RI: <strong className="text-white font-mono">{siteConfig.vinNumber}</strong>
        </span>
      </div>
    </div>
  );
}
