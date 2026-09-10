import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Legalitas Resmi | ${siteConfig.name}`,
  description: "LPK Panca Multiguna Sukses Karawang terdaftar resmi di Kementerian Ketenagakerjaan Republik Indonesia.",
};

export default function LegalitasPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-primary-900 text-white p-10 sm:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-600/30 to-transparent pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300 mb-8 border border-green-500/30 uppercase tracking-widest">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
             TERDAFTAR RESMI
          </div>
          
          <h1 className="text-4xl font-heading font-extrabold tracking-tight sm:text-5xl mb-6 leading-tight max-w-2xl">
            Legalitas Resmi
          </h1>
          <h2 className="text-2xl text-primary-200 font-semibold mb-6 max-w-2xl">Terdaftar di Kementerian Ketenagakerjaan Republik Indonesia</h2>
          
          <div className="bg-primary-800/50 border border-primary-700/50 p-6 rounded-2xl mb-12 max-w-2xl">
             <p className="text-lg text-slate-300 leading-relaxed">
               {siteConfig.name} merupakan lembaga pelatihan kerja yang terdaftar pada platform resmi Kementerian Ketenagakerjaan Republik Indonesia, menjamin transparansi dan kualitas program yang diselenggarakan.
             </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center w-full max-w-md relative z-10 mb-10">
             <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <h3 className="font-bold text-slate-900 text-xl mb-2">Status Kelembagaan</h3>
             <p className="text-base font-bold text-green-700 bg-green-50 px-5 py-2 rounded-full border border-green-200 mt-2 tracking-wide uppercase">Verified LPK</p>
          </div>

          <a
            href={siteConfig.legalitasUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-xl bg-accent-600 px-10 text-base font-bold text-white transition-all hover:bg-accent-700 hover:scale-105 shadow-xl relative z-10"
          >
            Lihat Legalitas Resmi di Skillhub
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
