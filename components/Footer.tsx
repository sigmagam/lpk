import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-8 border-t border-slate-900">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
          
          {/* KOLOM 1: Logo, Nama, Deskripsi */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Logo LPK Panca Multiguna Sukses Karawang" 
                width={48} 
                height={48} 
                className="h-12 w-12 brightness-0 invert opacity-90 object-contain" 
              />
              <span className="font-bold text-white tracking-tight leading-tight text-lg">
                LPK Panca Multiguna<br/>
                <span className="text-sm font-normal text-slate-400">Sukses Karawang</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan sumber daya manusia Indonesia yang unggul, terampil, disiplin, dan mampu bersaing di pasar global.
            </p>
          </div>

          {/* KOLOM 2: Navigasi */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">Navigasi</h3>
            <ul className="space-y-4">
              {siteConfig.footerLinks.navigasi.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: Program */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">Program</h3>
            <ul className="space-y-4">
              {siteConfig.footerLinks.program.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 4: Lokasi & Kontak */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">Lokasi & Kontak</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-slate-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm text-slate-400 leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-slate-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {siteConfig.whatsappNumber}
                </a>
              </li>
              <li className="pt-2">
                 <a href={siteConfig.legalitasUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-accent-400 hover:text-accent-300 transition-colors uppercase tracking-wider">
                    Lihat Legalitas Resmi
                    <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                 </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; 2026 LPK Panca Multiguna Sukses Karawang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
