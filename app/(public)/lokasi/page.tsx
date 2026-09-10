import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { MapPin, ExternalLink, Navigation, Building2, Phone, CheckCircle2, ShieldCheck, Compass } from "lucide-react";

export default function LokasiPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b-2 border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border-2 border-navy-700 text-xs font-black text-emerald-300 uppercase tracking-wider mb-4 shadow-sm">
            <MapPin className="w-4 h-4 text-vermilion-500" />
            Alamat & Akses Lokasi Kampus Pelatihan
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Lokasi Kampus Pelatihan LPK PMS
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Pusat pelatihan LPK Panca Multiguna Sukses Karawang berada di lokasi strategis wilayah Purwasari, Karawang, Jawa Barat.
          </p>
        </div>
      </section>

      {/* Main Map & Location Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Col: Address Details (Special UI) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-8 sm:p-10 rounded-3xl border-2 border-slate-300 shadow-md">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-black text-navy-950 uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5 text-vermilion-600" />
                    <span>Kampus Pelatihan Karawang</span>
                  </div>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-navy-950">
                    {siteConfig.name}
                  </h2>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-2 text-xs sm:text-sm">
                  <span className="font-black text-navy-950 block">
                    Alamat Lengkap Resmi:
                  </span>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {siteConfig.address}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-800 font-bold">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>Ruang kelas teori dan praktikum memadai (300 M²)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>Area pembinaan fisik dan kedisiplinan berstandar Kaisha</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>Akses transportasi mudah di Purwasari Karawang</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-slate-200 space-y-3">
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-navy-950 hover:bg-navy-900 text-white font-black text-xs shadow-md transition-all hover:-translate-y-1 border-2 border-navy-950"
                >
                  <Navigation className="w-4 h-4 text-emerald-300" />
                  <span>Buka Petunjuk di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-black text-xs transition-colors border-2 border-slate-300"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Tanya Rute Lokasi via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Col: Embedded Google Maps Console */}
            <div className="lg:col-span-7 min-h-[440px] rounded-3xl overflow-hidden border-2 border-slate-300 shadow-md bg-slate-200 relative">
              <iframe
                src={siteConfig.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "440px" }}
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
