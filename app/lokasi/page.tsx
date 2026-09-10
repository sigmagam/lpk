import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokasi | LPK PMS Karawang",
  description: "Alamat dan lokasi Google Maps LPK PMS Karawang.",
};

export default function LokasiPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Lokasi Kami</h1>
          <p className="text-lg text-slate-600">Kunjungi pusat pelatihan LPK PMS Karawang untuk konsultasi dan pendaftaran langsung.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">LPK PMS Karawang</h2>
                <p className="text-slate-600">Untuk memandu perjalanan Anda, silakan gunakan panduan navigasi melalui Google Maps di bawah ini.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex h-14 items-center justify-center rounded-xl bg-slate-900 px-6 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                Buka di Google Maps
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex h-14 items-center justify-center rounded-xl bg-brand-50 border border-brand-200 px-6 text-base font-semibold text-brand-700 transition-all hover:bg-brand-100"
              >
                Hubungi Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
