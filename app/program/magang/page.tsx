import { magangSteps, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Magang | LPK PMS Karawang",
  description: "Informasi detail dan tahapan proses Program Magang ke Jepang bersama LPK PMS Karawang.",
};

export default function MagangPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16 sm:mb-20 text-center mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Program Magang</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Program pelatihan terpadu untuk mempersiapkan lulusan SMA/SMK mengikuti program pemagangan kerja di Jepang selama 3-5 tahun.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {magangSteps.map((step, idx) => (
            <div 
              key={step.number} 
              className="group relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-brand-300 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Giant transparent number in corner */}
              <div className="absolute -bottom-8 -right-4 text-[160px] font-black leading-none text-slate-900/[0.02] select-none pointer-events-none transition-transform duration-500 group-hover:-translate-y-4 group-hover:text-brand-600/[0.05]">
                {parseInt(step.number, 10)}
              </div>
              
              <div className="relative z-10 sm:pr-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 font-bold text-lg">
                    {step.number}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{step.title}</h2>
                </div>
                
                <ul className="space-y-4 pl-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-600">
                      <span className="text-brand-500 shrink-0 mt-1">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="leading-relaxed text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-600 mb-8">Punya pertanyaan seputar kualifikasi atau proses pendaftaran?</p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-600 px-10 text-base font-bold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:-translate-y-0.5"
          >
            Mulai Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
