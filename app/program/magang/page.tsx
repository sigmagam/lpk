import { magangSteps, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program Magang | LPK PMS Karawang",
  description: "Program pelatihan bahasa dan budaya kerja bagi lulusan SMA/SMK untuk mengikuti program magang di Jepang.",
};

export default function MagangPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16 sm:mb-24 text-center mx-auto">
          <Link href="/program" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 mb-6 transition-colors">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Program
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Program Magang</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Program pelatihan bahasa dan budaya kerja bagi lulusan SMA/SMK untuk mengikuti program magang di Jepang.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 md:left-1/2 md:-ml-[1px]"></div>
          
          <div className="space-y-12">
            {magangSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Number Badge */}
                  <div className="absolute left-0 md:left-1/2 md:-ml-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 bg-slate-900 text-xl font-bold text-white shadow-sm z-10 transition-transform group-hover:scale-110">
                    {step.number}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-400 relative overflow-hidden">
                      <div className={`absolute top-0 w-2 h-full bg-slate-800 ${isEven ? 'left-0' : 'right-0'}`}></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <ul className={`space-y-3 text-slate-600 ${isEven ? '' : 'md:inline-block md:text-right'}`}>
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start md:items-center gap-3">
                            <span className={`mt-1.5 md:mt-0 h-2 w-2 rounded-full bg-slate-400 shrink-0 ${!isEven ? 'md:hidden' : ''}`}></span>
                            <span className="leading-relaxed text-left text-sm sm:text-base">{item}</span>
                            <span className={`hidden md:block h-2 w-2 rounded-full bg-slate-400 shrink-0 ${isEven ? 'md:hidden' : ''}`}></span>
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

        <div className="mt-20 border-t border-slate-200 pt-16 text-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-slate-900 px-10 text-base font-bold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md"
          >
            Mulai Konsultasi
          </a>
        </div>
      </div>
    </div>
  );
}
