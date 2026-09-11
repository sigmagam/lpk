import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  Eye,
  BellRing,
  Instagram,
  Video
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-200 border-t border-navy-900 select-none">
      {/* Credential Ribbon */}
      <div className="border-b border-navy-900 bg-navy-900/60 py-5">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <span className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </span>
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                Lembaga Pelatihan Kerja Resmi Terdaftar Kemnaker RI
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Nomor VIN: <span className="font-mono text-white font-bold">{siteConfig.vinNumber}</span> • Pimpinan: {siteConfig.pimpinan}
              </div>
            </div>
          </div>

          <a
            href={siteConfig.legalitasUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-bold border border-navy-700 transition-colors"
          >
            <span>Verifikasi Kemnaker Skillhub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Identity & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-xl p-1.5 shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo LPK PMS Karawang"
                  width={42}
                  height={42}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-black text-white text-base leading-tight uppercase tracking-tight">
                  LPK PMS KARAWANG
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Panca Multiguna Sukses
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {siteConfig.description}
            </p>

            {/* Social & Channel Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white text-xs font-bold border border-navy-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white text-xs font-bold border border-navy-800 transition-colors"
              >
                <Video className="w-3.5 h-3.5 text-cyan-400" />
                <span>TikTok</span>
              </a>

              <a
                href={siteConfig.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 text-xs font-bold border border-emerald-800/60 transition-colors"
              >
                <BellRing className="w-3.5 h-3.5 text-emerald-400" />
                <span>Channel Info Job</span>
              </a>
            </div>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.navigasi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tokutei-ginou"
                  className="text-xs text-vermilion-400 hover:text-vermilion-300 font-bold block"
                >
                  Panduan Tokutei Ginou
                </Link>
              </li>
            </ul>
          </div>

          {/* Program Pelatihan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Program & Pembekalan
            </h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.program.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors block leading-relaxed"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/program"
                  className="text-xs text-primary-400 hover:text-primary-300 font-bold inline-flex items-center gap-1 mt-1"
                >
                  <span>Seluruh Katalog Program</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Alamat & Kontak (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Pusat Pelatihan & Kontak
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-vermilion-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-semibold transition-colors"
                >
                  {siteConfig.whatsappNumber} (WA)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/lokasi"
                  className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-white font-bold"
                >
                  <span>Buka Petunjuk Rute & Peta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 LPK Panca Multiguna Sukses Karawang. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/legalitas" className="hover:text-white transition-colors">
              Status Legalitas Kemnaker
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              Pusat FAQ
            </Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard Siswa
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
