import { tokuteiGinouSteps, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program Tokutei Ginou (TG) | LPK Kagayaki",
  description: "Persiapan bahasa, keterampilan, dan proses menuju kesempatan bekerja di Jepang.",
};

export default function TokuteiGinouPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16 sm:mb-24 text-center mx-auto">
          <Link href="/program" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-brand-600 mb-8 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Program
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Program Tokutei Ginou (TG)</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Persiapan bahasa, keterampilan, dan proses menuju kesempatan bekerja di Jepang melalui jalur pekerja berketerampilan spesifik.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-slate-200 md:left-1/2 md:-ml-[1px]"></div>
          
          <div className="space-y-12">
            {tokuteiGinouSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  <div className="absolute left-0 md:left-1/2 md:-ml-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-600 text-xl font-bold text-white shadow-md z-10 transition-transform group-hover:scale-110 group-hover:bg-brand-700">
                    {step.number}
                  </div>
                  
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand-300 relative overflow-hidden">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <ul className={`space-y-3 text-slate-600 ${isEven ? '' : 'md:inline-block md:text-right'}`}>
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start md:items-center gap-3">
                            <span className={`mt-1.5 md:mt-0 h-2 w-2 rounded-full bg-brand-500 shrink-0 ${!isEven ? 'md:hidden' : ''}`}></span>
                            <span className="leading-relaxed text-left text-sm sm:text-base">{item}</span>
                            <span className={`hidden md:block h-2 w-2 rounded-full bg-brand-500 shrink-0 ${isEven ? 'md:hidden' : ''}`}></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 border-t border-slate-200 pt-16 text-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-600 px-10 text-base font-bold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:-translate-y-1"
          >
            Konsultasi Program Ini
          </a>
        </div>
      </div>
    </div>
  );
}
