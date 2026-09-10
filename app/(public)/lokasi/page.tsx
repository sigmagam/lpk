import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { MapPin, ExternalLink, Navigation, Building2, Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Lokasi & Peta | LPK Panca Multiguna Sukses Karawang",
  description:
    "Alamat lengkap dan petunjuk peta lokasi pelatihan LPK Panca Multiguna Sukses Karawang di Purwasari, Karawang, Jawa Barat.",
};

export default function LokasiPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-xs font-semibold text-primary-300 uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-vermilion-500" />
            Alamat & Akses Lokasi
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Lokasi Kami
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pusat pelatihan LPK Panca Multiguna Sukses Karawang berada di lokasi strategis wilayah Purwasari, Karawang, Jawa Barat.
          </p>
        </div>
      </section>

      {/* Main Map & Location Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Col: Address Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Lembaga Pelatihan Kerja
                  </span>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
                    {siteConfig.name}
                  </h2>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <span className="font-bold text-navy-950 block">
                    Alamat Lengkap:
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Ruang kelas teori dan praktikum memadai</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Area pembinaan fisik dan kedisiplinan</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Akses transportasi mudah di Purwasari Karawang</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Buka Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Tanya Petunjuk Arah via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Col: Embedded Google Maps (7 cols) */}
            <div className="lg:col-span-7 min-h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-200 relative">
              <iframe
                src={siteConfig.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Interaktif Lokasi LPK Panca Multiguna Sukses Karawang"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
