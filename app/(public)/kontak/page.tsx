import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import Contact3DBadge from "@/components/public/Contact3DBadge";
import ConsultationForm from "@/components/public/ConsultationForm";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import {
  MapPin,
  Phone,
  MessageCircle,
  Building2,
  BellRing,
  ArrowUpRight,
  Mail,
  Instagram,
  Video,
  Clock,
  Navigation
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak & Alamat Lembaga | LPK Panca Multiguna Sukses",
  description:
    "Hubungi LPK Panca Multiguna Sukses. Layanan konsultasi WhatsApp resmi, Channel Info Job PMS, Instagram, TikTok, serta lokasi kantor di Purwasari Karawang.",
  keywords: [
    "kontak LPK PMS",
    "nomor whatsapp LPK PMS",
    "alamat LPK jepang karawang",
    "channel info job jepang pms",
    "konsultasi magang jepang karawang"
  ]
};

export default function KontakPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900">

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="anim-scale-pop inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Layanan Narahubung Resmi</span>
          </div>

          <h1 className="anim-fade-up anim-delay-100 font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Hubungi Kami & Saluran Resmi
          </h1>

          <p className="anim-fade-up anim-delay-200 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Konsultasikan rencana pelatihan kerja dan pemagangan ke Jepang serta dapatkan update lowongan kerja langsung melalui saluran resmi LPK PMS.
          </p>
        </div>
      </section>

      {/* 2. Top Contact Channels Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Card 1: Channel WhatsApp PMS Pusat */}
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <BellRing className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Update Loker Kaisha Harian
                  </span>
                  <h2 className="font-heading font-black text-xl text-white">
                    Channel WhatsApp PMS Pusat
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Saluran WhatsApp resmi untuk menerima informasi lowongan kerja, jadwal seleksi wawancara kaisha, dan kuota magang terbaru di Jepang.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-navy-800">
                <a
                  href={siteConfig.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Gabung Channel WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Direct WhatsApp Admin */}
            <div className="anim-card anim-delay-100 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                  <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                    Konsultasi & Pendaftaran
                  </span>
                  <h2 className="font-heading font-black text-xl text-navy-950">
                    Chat WhatsApp Admin
                  </h2>
                  <div className="text-sm sm:text-base font-mono font-bold text-navy-950 mt-0.5">
                    {siteConfig.whatsappNumber}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Konsultasikan persyaratan dokumen, jadwal kelas bahasa baru, dan estimasi biaya program langsung dengan tim admin di Karawang.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <span>Mulai Chat Admin</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Social Media Resmi */}
            <div className="anim-card anim-delay-200 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-200">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                    Media Sosial Resmi
                  </span>
                  <h2 className="font-heading font-black text-xl text-navy-950">
                    Instagram & TikTok
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ikuti dokumentasi kegiatan kelas, suasana pembinaan fisik, testimoni alumni, serta video persiapan kerja Jepang setiap hari.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram: @lpkpmskarawang</span>
                </a>
                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  <Video className="w-4 h-4 text-cyan-600" />
                  <span>TikTok: @lpk.pms.karawang19</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Badge Plinth */}
          <div className="max-w-5xl mx-auto">
            <Contact3DBadge />
          </div>

          {/* Consultation Form & Google Maps Section */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
            {/* Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

            {/* Balai Pelatihan & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="anim-card anim-delay-300 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-vermilion-50 text-vermilion-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-base text-navy-950">
                      Alamat Balai Pelatihan
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      LPK Panca Multiguna Sukses
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {siteConfig.address}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Buka: Senin – Sabtu, 08:00 – 17:00 WIB</span>
                </div>

                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs transition-colors border border-slate-300"
                >
                  <Navigation className="w-4 h-4 text-vermilion-600" />
                  <span>Buka Petunjuk di Google Maps</span>
                </a>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm">
                <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Peta Lokasi Interaktif</span>
                  <span className="text-[11px] text-slate-500 font-normal">Pancawati, Purwasari</span>
                </div>
                <div className="w-full h-64 sm:h-72">
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
