import { tokuteiGinouSteps, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Tokutei Ginou (TG) | LPK PMS Karawang",
  description: "Informasi detail dan tahapan proses Program Tokutei Ginou (TG) bersama LPK PMS Karawang.",
};

export default function TokuteiGinouPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16 sm:mb-24">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Program Tokutei Ginou (TG)</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Program persiapan skill dan bahasa untuk peserta yang ingin bekerja di Jepang dengan status Visa Tokutei Ginou (Pekerja Berketerampilan Spesifik).
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop timeline */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {tokuteiGinouSteps.map((step, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <div key={step.number} className="relative flex flex-col lg:flex-row items-center lg:justify-between lg:pb-16 group">
                  
                  {/* Dot on timeline */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-500 z-10 transition-transform group-hover:scale-150"></div>
                  
                  {/* Content Box */}
                  <div className={`w-full lg:w-[45%] relative ${isEven ? 'lg:order-2 lg:ml-auto' : 'lg:order-1 lg:mr-auto'}`}>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-200">
                      <div className="absolute -right-4 -top-6 text-[120px] font-black text-slate-900/[0.03] select-none pointer-events-none group-hover:text-brand-600/[0.05] transition-colors">{step.number}</div>
                      
                      <div className="relative z-10">
                        <span className="inline-block px-3 py-1 rounded bg-brand-100 text-brand-700 text-sm font-bold mb-4">Tahap {step.number}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                        <ul className="space-y-3">
                          {step.items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-600">
                              <span className="text-brand-500 shrink-0 mt-0.5">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 border-t border-slate-200 pt-16 text-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-600 px-10 text-base font-bold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
          >
            Mulai Konsultasi
          </a>
        </div>
      </div>
    </div>
  );
}
