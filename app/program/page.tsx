import Link from "next/link";
import { programs } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Pelatihan | LPK PMS Karawang",
  description: "Daftar program pelatihan dan persiapan kerja di Jepang dari LPK PMS Karawang.",
};

export default function ProgramPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Program Pelatihan</h1>
          <p className="mt-4 text-lg text-slate-600">Pilih program yang sesuai dengan kualifikasi dan tujuan karir Anda di Jepang.</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl">
          {programs.map((program) => (
            <Link key={program.href} href={program.href} className="group flex flex-col rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-slate-200 transition-all hover:border-brand-300 hover:shadow-xl hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{program.title}</h2>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{program.description}</p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{program.stages}</span>
                <span className="inline-flex items-center text-sm font-bold text-brand-600">
                  Lihat Detail <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
