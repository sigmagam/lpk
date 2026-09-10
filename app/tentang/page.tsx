import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Tentang Kami | ${siteConfig.name}`,
  description: "Profil dan komitmen LPK Panca Multiguna Sukses Karawang dalam menyiapkan SDM Indonesia yang unggul menuju Jepang.",
};

export default function TentangPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-800 uppercase mb-6 shadow-sm">
            TENTANG KAMI
          </div>
          <h1 className="text-4xl font-heading font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Lembaga Pelatihan Kerja Terdepan
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Berkomitmen menyiapkan, melatih, dan mengirim peserta magang berkualitas dari Indonesia ke Jepang.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
          {/* Main Text */}
          <div className="w-full lg:w-7/12">
            <div className="prose prose-lg text-slate-600 max-w-none text-left bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Profil Kami</h2>
              <p className="mb-6">
                <strong>{siteConfig.name}</strong> adalah Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan, melatih dan mengirim peserta magang yang berkualitas dari Indonesia ke Jepang.
              </p>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10 mb-6">Legalitas & Dukungan</h2>
              <p className="mb-6">
                Sebagai lembaga pelatihan kerja yang terdaftar secara resmi di Kementerian Ketenagakerjaan Republik Indonesia, {siteConfig.name} berfungsi untuk memberikan dukungan kepada para peserta yang mengikuti program pelatihan dan pemagangan.
              </p>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mt-10 mb-6">Komitmen Kami</h2>
              <p>
                Dengan pengalaman dan komitmen dalam pengembangan sumber daya manusia, {siteConfig.name} terus berinovasi dan berkembang untuk menjadi lembaga terdepan yang berfokus pada peningkatan sumber daya manusia Indonesia yang unggul, terampil dan mampu bersaing di pasar global.
              </p>
            </div>
          </div>

          {/* Visual Journey */}
          <div className="w-full lg:w-5/12 sticky top-32">
             <div className="bg-primary-900 border border-primary-800 rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden relative text-white">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent-600 rounded-full blur-3xl opacity-20"></div>
                <h3 className="text-2xl font-heading font-bold mb-10 text-center uppercase tracking-wider relative z-10">Perjalanan Anda</h3>
                <div className="flex flex-col gap-6 relative z-10">
                   <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-primary-800"></div>
                   {[
                      { title: "INDONESIA", highlight: true },
                      { title: "Persiapan", highlight: false },
                      { title: "Pelatihan", highlight: false },
                      { title: "Kompetensi", highlight: false },
                      { title: "Pemagangan", highlight: false },
                      { title: "JEPANG", highlight: true }
                   ].map((step, idx) => (
                      <div key={idx} className="flex items-center gap-6 relative z-10">
                         <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-primary-900 shadow-sm ${step.highlight ? 'bg-accent-600 text-white' : 'bg-primary-800 text-primary-300'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                         </div>
                         <div className={`font-bold text-lg ${step.highlight ? 'text-white' : 'text-primary-200'}`}>
                            {step.title}
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
