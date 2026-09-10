import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokasi | LPK Panca Multiguna Sukses Karawang",
  description: "Alamat dan lokasi Google Maps LPK Panca Multiguna Sukses Karawang.",
};

export default function LokasiPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Lokasi Kami</h1>
          <p className="text-lg text-slate-600 leading-relaxed">Kunjungi pusat pelatihan kami untuk konsultasi dan pendaftaran langsung program pelatihan yang tersedia.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{siteConfig.name}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex h-14 items-center justify-center rounded-xl bg-primary-600 px-6 text-base font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-md"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Buka di Google Maps
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex h-14 items-center justify-center rounded-xl bg-slate-100 px-6 text-base font-semibold text-slate-900 transition-all hover:bg-slate-200"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
