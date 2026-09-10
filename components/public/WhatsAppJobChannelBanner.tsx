import { siteConfig } from "@/data/site";
import { MessageCircle, BellRing, ArrowUpRight, CheckCircle2, ShieldCheck, Briefcase } from "lucide-react";

export default function WhatsAppJobChannelBanner() {
  return (
    <aside aria-label="Saluran WhatsApp Info Job PMS Pusat" className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-navy-950 text-white py-12 sm:py-14 border-y border-emerald-800/60 relative overflow-hidden">
      {/* Subtle Japanese Grid Pattern */}
      <div className="absolute inset-0 bg-grid-japanese opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-emerald-950/60 p-6 sm:p-8 rounded-3xl border border-emerald-700/40 shadow-xl backdrop-blur-sm">
          {/* Left info */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BellRing className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              <span>Saluran Resmi WhatsApp Info Job</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Channel WhatsApp Info Job PMS Pusat
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Dapatkan informasi paling awal seputar lowongan kerja ke Jepang, jadwal seleksi wawancara user Kaisha, program Tokutei Ginou (TG), dan pembukaan batch pelatihan baru langsung di WhatsApp Anda.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200/80 pt-1 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Update Job Kaisha Jepang Resmi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Gratis Bergabung & Terpercaya
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Dikelola Langsung oleh PMS Pusat
              </span>
            </div>
          </div>

          {/* Right action button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={siteConfig.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-lift-3d transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Gabung Channel Info Job PMS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-[11px] text-emerald-300/80 text-center lg:text-right font-mono">
              whatsapp.com/channel • PMS Pusat
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
