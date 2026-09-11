import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function OfficialTrustRibbon() {
  const authorities = [
    {
      name: "Kemnaker RI",
      detail: "Nomor VIN: 2001321506",
      logo: "/images/legalitas/kemnaker.svg",
    },
    {
      name: "Kemenkumham RI",
      detail: "Pengesahan Badan Hukum",
      logo: "/images/legalitas/kemenkumham.svg",
    },
    {
      name: "DITJEN AHU",
      detail: "AHU Online Kemenkumham",
      logo: "/images/legalitas/ditjen-ahu.svg",
    },
    {
      name: "Disnaker Karawang",
      detail: "Izin Operasional Wilayah",
      logo: "/images/legalitas/disnaker-karawang.svg",
    },
    {
      name: "Lembaga OSS",
      detail: "NIB Berbasis Risiko",
      logo: "/images/legalitas/lembaga-oss.svg",
    },
  ];

  return (
    <section className="bg-slate-50 py-10 sm:py-12 border-b border-slate-200 select-none">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-700">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-black text-navy-950 uppercase tracking-wider block">
                Akreditasi & Legalitas Resmi Republik Indonesia
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Beroperasi dengan izin resmi kementerian dan instansi ketenagakerjaan pemerintah
              </span>
            </div>
          </div>

          <Link
            href="/legalitas"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-vermilion-700 hover:text-vermilion-800 transition-colors self-start md:self-auto"
          >
            <span>Buka Detail 5 Legalitas Resmi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 Logos Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {authorities.map((item) => (
            <Link
              key={item.name}
              href="/legalitas"
              className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 p-1 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src={item.logo}
                  alt={`Logo Resmi ${item.name}`}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <div className="font-heading font-black text-xs text-navy-950 truncate group-hover:text-vermilion-600 transition-colors">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                  {item.detail}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
