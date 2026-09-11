import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ShieldCheck, ExternalLink, CheckCircle2, Award } from "lucide-react";

export interface LegalEntity {
  id: string;
  name: string;
  shortName: string;
  authority: string;
  role: string;
  status: string;
  identifier: string;
  description: string;
  logoSrc: string;
  badgeColor: string;
  verifyUrl?: string;
}

export const officialLegalEntities: LegalEntity[] = [
  {
    id: "kemnaker",
    name: "Kementerian Ketenagakerjaan Republik Indonesia",
    shortName: "Kemnaker RI",
    authority: "Pemerintah Pusat Republik Indonesia",
    role: "Lembaga Pelatihan Kerja (LPK) Terdaftar & Terakreditasi Nasional",
    status: "Terverifikasi Resmi",
    identifier: `VIN: ${siteConfig.vinNumber}`,
    description:
      "Terdaftar resmi di Pangkalan Data Kelembagaan Kemnaker RI dengan Nomor Tanda Daftar VIN 2001321506. Memenuhi standar kelayakan pelatihan kejuruan kerja dan pemagangan ke Jepang.",
    logoSrc: "/images/legalitas/kemnaker.svg",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
    verifyUrl: siteConfig.legalitasUrl,
  },
  {
    id: "kemenkumham",
    name: "Kementerian Hukum dan Hak Asasi Manusia RI",
    shortName: "Kemenkumham RI",
    authority: "Kementerian Negara Bidang Hukum",
    role: "Pengesahan Badan Hukum Lembaga",
    status: "Badan Hukum Sah",
    identifier: "SK Menkumham RI Terbit",
    description:
      "Memiliki dasar hukum pendirian yang sah dan disahkan secara yuridis melalui Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia sebagai badan penyelenggara pelatihan kerja resmi.",
    logoSrc: "/images/legalitas/kemenkumham.svg",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-300",
  },
  {
    id: "ditjen-ahu",
    name: "Direktorat Jenderal Administrasi Hukum Umum",
    shortName: "DITJEN AHU",
    authority: "Ditjen AHU - Kemenkumham RI",
    role: "Pengesahan Akta Notaris & Legalitas Kelembagaan",
    status: "Tercatat di Database AHU",
    identifier: "Sistem AHU Online Resmi",
    description:
      "Tercatat dan tervalidasi dalam pangkalan data resmi AHU Online Kementerian Hukum dan HAM Republik Indonesia untuk keabsahan akta pendirian, kepengurusan, dan legalitas anggaran dasar lembaga.",
    logoSrc: "/images/legalitas/ditjen-ahu.svg",
    badgeColor: "bg-blue-50 text-blue-900 border-blue-300",
  },
  {
    id: "disnaker",
    name: "Dinas Tenaga Kerja Kabupaten Karawang",
    shortName: "Disnaker Kab. Karawang",
    authority: "Pemerintah Daerah Kabupaten Karawang",
    role: "Izin Operasional Balai Pelatihan Kerja Wilayah",
    status: "Izin Operasional Aktif",
    identifier: "Wilayah Kab. Karawang",
    description:
      "Memperoleh Tanda Daftar Lembaga Pelatihan Kerja (TDLPK) dan rekomendasi operasional resmi dari Dinas Tenaga Kerja dan Transmigrasi Kabupaten Karawang untuk menyelenggarakan pelatihan kerja.",
    logoSrc: "/images/legalitas/disnaker-karawang.svg",
    badgeColor: "bg-green-50 text-green-900 border-green-300",
  },
  {
    id: "oss",
    name: "Lembaga Online Single Submission (OSS)",
    shortName: "Lembaga OSS - BKPM",
    authority: "Kementerian Investasi / BKPM RI",
    role: "Perizinan Berusaha Berbasis Risiko (RBA)",
    status: "NIB Terbit Efektif",
    identifier: "NIB Resmi Republik Indonesia",
    description:
      "Memiliki Nomor Induk Berusaha (NIB) yang diterbitkan secara resmi oleh Lembaga Pengelola dan Penyelenggara OSS berbasis risiko untuk kegiatan operasional jasa pelatihan dan pendidikan kerja swasta.",
    logoSrc: "/images/legalitas/lembaga-oss.svg",
    badgeColor: "bg-teal-50 text-teal-900 border-teal-300",
  },
];

export default function OfficialLegalBadges() {
  return (
    <div className="space-y-10">
      {/* 5 HD Logos Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {officialLegalEntities.map((entity, idx) => {
          const isFeatured = entity.id === "kemnaker";
          return (
            <div
              key={entity.id}
              className={`bg-white rounded-3xl border transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md ${
                isFeatured
                  ? "border-navy-950/80 ring-1 ring-navy-950/10 md:col-span-2 lg:col-span-1"
                  : "border-slate-200/90 hover:border-slate-300"
              }`}
            >
              {/* Top Row: Crisp HD Logo and Status Pill */}
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  {/* High-Definition Scalable Vector SVG Logo Container */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Image
                      src={entity.logoSrc}
                      alt={`Logo Resmi ${entity.name}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                      priority={idx < 3}
                    />
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${entity.badgeColor}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>{entity.status}</span>
                    </span>
                    <span className="font-mono text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                      {entity.identifier}
                    </span>
                  </div>
                </div>

                {/* Identity & Details */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {entity.authority}
                  </div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-navy-950 leading-tight group-hover:text-vermilion-600 transition-colors">
                    {entity.name}
                  </h3>
                  <div className="text-xs font-bold text-primary-700 bg-primary-50/70 border border-primary-200/70 px-3 py-1 rounded-lg inline-block">
                    {entity.role}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {entity.description}
                  </p>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">
                  Legalitas Resmi Terdaftar
                </span>

                {entity.verifyUrl ? (
                  <a
                    href={entity.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Cek di Kemnaker</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Terverifikasi Sah</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
