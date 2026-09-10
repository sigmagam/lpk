import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ShieldCheck, MapPin, Phone, ExternalLink, ArrowRight, Eye, BellRing } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-100 border-t border-navy-800">
      {/* Top Credential Reassurance Strip */}
      <div className="border-b border-navy-900 bg-navy-900/60 py-6">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
            </span>
            <div>
              <div className="font-bold text-white text-base">
                Lembaga Pelatihan Kerja Terverifikasi Resmi
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Terdaftar resmi pada platform Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker RI)
              </div>
            </div>
          </div>
          <a
            href={siteConfig.legalitasUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-bold border border-navy-600 transition-colors"
          >
            <span>Verifikasi Legalitas Kemnaker</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Identity & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white rounded-xl p-1.5 shadow-sm border border-slate-300 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo LPK Panca Multiguna Sukses Karawang"
                  width={42}
                  height={42}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-black text-white text-base leading-tight uppercase tracking-tight">
                  LPK Panca Multiguna Sukses
                </div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Karawang, Jawa Barat
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-200">
              Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan sumber daya manusia Indonesia yang unggul, terampil, disiplin, dan mampu bersaing di pasar global.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold border border-navy-700 transition-colors"
              >
                <Eye className="w-4 h-4 text-primary-300" />
                <span>Dashboard Informasi Siswa</span>
              </Link>
              <a
                href={siteConfig.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-emerald-200 text-xs font-bold border border-emerald-700 transition-colors"
              >
                <BellRing className="w-4 h-4 text-emerald-300" />
                <span>Channel Info Job PMS</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.navigasi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-vermilion-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Program Pelatihan (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Program Pelatihan
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.program.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-xs font-semibold text-slate-300 hover:text-white transition-colors block leading-relaxed"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Alamat & Kontak Resmi (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Alamat & Narahubung
            </h3>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-vermilion-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-relaxed font-medium">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-100 hover:text-white font-bold transition-colors"
                >
                  {siteConfig.whatsappNumber} (WhatsApp)
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/lokasi"
                  className="inline-flex items-center gap-1.5 text-xs text-primary-300 hover:text-primary-200 font-bold"
                >
                  <span>Lihat Petunjuk Lokasi & Peta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-medium">
            &copy; 2026 LPK Panca Multiguna Sukses Karawang. Seluruh hak cipta dilindungi. (lpkpms.my.id)
          </p>
          <div className="flex items-center gap-6 font-semibold text-slate-300">
            <Link href="/legalitas" className="hover:text-white transition-colors">
              Status Legalitas
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              Pusat FAQ
            </Link>
            <Link href="/kontak" className="hover:text-white transition-colors">
              Hubungi Lembaga
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
