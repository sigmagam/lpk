import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Logo LPK PMS Karawang" width={40} height={40} className="h-10 w-10 brightness-0 invert opacity-90" />
              <span className="font-bold text-white tracking-tight">{siteConfig.shortName}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              LPK Panca Multi Guna Sukses Karawang
              <br/><br/>
              Lembaga pelatihan kerja resmi yang fokus pada persiapan dan pembekalan kemampuan bahasa Jepang serta kesiapan kerja.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Navigasi</h3>
            <ul className="mt-6 space-y-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Program</h3>
            <ul className="mt-6 space-y-4">
              {siteConfig.programs.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Kontak</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">WhatsApp</a>
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">Instagram</a>
              </li>
              <li>
                <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition-colors hover:text-white">TikTok</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-500">© 2026 LPK PMS Karawang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
