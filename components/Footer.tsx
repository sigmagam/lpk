import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
          
          {/* KOLOM 1: Logo, Nama, Deskripsi */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Logo LPK Kagayaki" 
                width={48} 
                height={48} 
                className="h-12 w-12 brightness-0 invert opacity-90 object-contain" 
              />
              <span className="font-bold text-white tracking-tight leading-tight">
                LPK Kagayaki<br/>
                <span className="text-sm font-normal text-slate-400">Training Centre Bandung</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              LPK Kagayaki Training Centre Bandung merupakan lembaga pelatihan kerja yang membantu mempersiapkan peserta Indonesia melalui pelatihan bahasa Jepang, keterampilan kerja, dan pembekalan untuk menghadapi dunia kerja di Jepang.
            </p>
          </div>

          {/* KOLOM 2: Navigasi */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">Navigasi Utama</h3>
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
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">Program & Layanan</h3>
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

          {/* KOLOM 4: Hubungi Kami */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">Hubungi Kami</h3>
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
                 <a href={siteConfig.legalitasUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors uppercase tracking-wider">
                    Lihat Legalitas Resmi &rarr;
                 </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
             </a>
             <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.66-.41 3.3-1.27 4.71-1.31 2.1-3.64 3.49-6.14 3.76-2.6.28-5.26-.26-7.38-1.81-2.12-1.54-3.41-3.9-3.7-6.5-.27-2.44.25-4.96 1.58-7.03 1.34-2.07 3.48-3.48 5.86-3.87 1.05-.18 2.13-.19 3.19-.07v4.11c-1.49-.24-3.05-.09-4.38.68-1.21.71-2.1 1.9-2.41 3.25-.33 1.4.01 2.9 1 4 1.02 1.15 2.65 1.72 4.19 1.49 1.43-.22 2.66-1.12 3.32-2.39.57-1.11.83-2.37.83-3.64V0c-.01.01.01.02 0 .02z"/></svg>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
