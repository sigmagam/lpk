import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Building2,
  Train,
  Car,
  Bus,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lokasi & Peta Balai Pelatihan | LPK Panca Multiguna Sukses",
  description:
    "Petunjuk lokasi, rute transportasi, dan peta Google Maps balai pelatihan LPK PMS di Pancawati, Purwasari, Karawang, Jawa Barat.",
  keywords: [
    "lokasi LPK PMS",
    "peta LPK jepang karawang",
    "alamat LPK PMS purwasari",
    "rute ke LPK PMS karawang",
    "pesona cengkong asri pancawati"
  ]
};

export default function LokasiPage() {
  const routes = [
    {
      title: "Dari Stasiun Klari / Karawang",
      icon: <Train className="w-5 h-5 text-primary-700" />,
      desc: "Naik angkutan umum atau transportasi daring ke arah Purwasari / Pancawati (sekitar 15-20 menit). Menuju Perumahan Pesona Cengkong Asri 1.",
    },
    {
      title: "Dari Gerbang Tol Karawang Timur",
      icon: <Car className="w-5 h-5 text-vermilion-600" />,
      desc: "Keluar Tol Karawang Timur > Ambil arah Klari / Cikampek > Masuk ke Jl. Raya Pancawati / Cengkong (sekitar 10-15 menit).",
    },
    {
      title: "Dari Terminal Bus Klari",
      icon: <Bus className="w-5 h-5 text-emerald-700" />,
      desc: "Menuju arah Purwasari, belok ke kawasan Pancawati. Lokasi berada di Blok C7 No. 2-3 Pesona Cengkong Asri 1.",
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />
        <span
          aria-hidden="true"
          className="absolute -right-6 -bottom-8 font-heading font-black text-8xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
        >
          所在地
        </span>

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Pusat Pelatihan di Karawang, Jawa Barat</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Lokasi Balai Pelatihan
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Kunjungi langsung balai pelatihan kerja kami untuk berkonsultasi secara tatap muka, melihat sarana kelas, dan mendaftarkan diri.
          </p>
        </div>
      </section>

      {/* 2. Main Address & Map Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Left Column: Address Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-vermilion-50 text-vermilion-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Gedung Pusat
                    </span>
                    <h2 className="font-heading font-black text-lg sm:text-xl text-navy-950">
                      LPK PMS (Pusat Karawang)
                    </h2>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-vermilion-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{siteConfig.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Senin – Sabtu, 08:00 – 17:00 WIB</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-mono font-bold text-navy-950">
                      {siteConfig.whatsappNumber}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2.5">
                  <a
                    href={siteConfig.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-sm transition-all hover:-translate-y-0.5"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Buka Rute di Google Maps</span>
                  </a>

                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs transition-colors"
                  >
                    <span>Konfirmasi Kedatangan via WA</span>
                  </a>
                </div>
              </div>

              {/* Transportation Guides */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="font-heading font-black text-base text-navy-950">
                  Panduan Akses Menuju Balai
                </h3>
                <div className="space-y-4">
                  {routes.map((r, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 shrink-0 mt-0.5">
                        {r.icon}
                      </div>
                      <div>
                        <div className="font-heading font-bold text-xs sm:text-sm text-navy-950">
                          {r.title}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                          {r.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Interactive Frame */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Peta Lokasi Interaktif</span>
                  <a
                    href={siteConfig.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-700 hover:text-primary-800"
                  >
                    <span>Buka Layar Penuh</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="w-full h-[450px] sm:h-[550px]">
                  <iframe
                    src={siteConfig.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Lokasi LPK PMS (Pusat Karawang)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
