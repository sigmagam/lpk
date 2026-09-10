import Link from "next/link";
import { programs } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Pelatihan | LPK Panca Multiguna Sukses Karawang",
  description: "Daftar program pelatihan dan persiapan kerja di Jepang dari LPK Panca Multiguna Sukses Karawang.",
};

export default function ProgramPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Program Pelatihan</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Pilih program yang sesuai dengan kualifikasi dan tujuan karir Anda. LPK Panca Multiguna Sukses Karawang menawarkan berbagai program untuk mempersiapkan Anda bekerja dan hidup di Jepang.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-5xl">
          {programs.map((program, idx) => (
            <Link key={idx} href={program.href} className="group flex flex-col rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-slate-200 transition-all hover:border-primary-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-slate-600 rounded-md mb-4 shadow-sm group-hover:text-primary-600 group-hover:border-primary-200">
                  {program.stages}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{program.title}</h2>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{program.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="inline-flex items-center text-sm font-bold text-primary-600">
                    Lihat Program <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
