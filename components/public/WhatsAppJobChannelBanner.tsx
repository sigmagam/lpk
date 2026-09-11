import { siteConfig } from "@/data/site";
import { MessageCircle, BellRing, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function WhatsAppJobChannelBanner() {
  return (
    <aside aria-label="Saluran WhatsApp Info Job PMS Pusat" className="bg-navy-950 text-white py-12 sm:py-14 border-y border-navy-800 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-white/[0.04] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg">
          {/* Left info */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BellRing className="w-3.5 h-3.5 text-emerald-400" />
              <span>Saluran Resmi WhatsApp Info Job</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white leading-tight">
              Channel WhatsApp Info Job PMS Pusat
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dapatkan informasi paling awal seputar lowongan kerja ke Jepang, jadwal seleksi wawancara user Kaisha, program Tokutei Ginou (SSW), dan pembukaan kuota magang baru langsung di ponsel Anda.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1 font-medium">
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
                Dikelola PMS Pusat
              </span>
            </div>
          </div>

          {/* Right action button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={siteConfig.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Gabung Channel Info Job PMS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-[11px] text-slate-400 text-center lg:text-right font-mono">
              Saluran Resmi WhatsApp
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
