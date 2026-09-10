"use client";

import { useState } from "react";
import StatCard3D from "@/components/dashboard/StatCard3D";
import PesertaTable from "@/components/dashboard/PesertaTable";
import PesertaModal from "@/components/dashboard/PesertaModal";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import { usePesertaData } from "@/data/pesertaStore";
import { PesertaRecord, dashboardMetrics } from "@/data/dashboard";
import { siteConfig } from "@/data/site";
import {
  Users,
  Award,
  FileCheck,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  MapPin,
  Eye,
  Info
} from "lucide-react";
import Link from "next/link";

export default function DashboardOverviewPage() {
  const { peserta } = usePesertaData();
  const [selectedPeserta, setSelectedPeserta] = useState<PesertaRecord | null>(null);

  const activeTrainees = peserta.filter((p) => p.status === "Aktif Pelatihan").length;
  const readyInterview = peserta.filter((p) => p.status === "Siap Wawancara").length;
  const processingCoE = peserta.filter((p) => p.status === "Proses CoE" || p.status === "Visa Issued").length;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Institutional Banner Header */}
      <div className="rounded-3xl bg-navy-950 text-white p-6 sm:p-8 relative overflow-hidden shadow-subtle-3d border border-navy-900">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Pusat Monitoring Resmi LPK PMS Karawang</span>
            </div>
            <h1 className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-white">
              Dashboard Informasi & Progres Peserta
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Memantau daftar peserta pelatihan kerja, batch aktif, pencapaian sertifikasi JLPT/SSW, dan kesiapan wawancara kerja ke Jepang.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 pt-1 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary-300" />
                Pancawati, Purwasari, Karawang
              </span>
              <span>•</span>
              <span className="text-slate-300">Sinkronisasi: {dashboardMetrics.lastSync}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-bold border border-navy-600 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-primary-300" />
              <span>Lihat Detail Program</span>
            </Link>
            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold border border-navy-700 transition-colors"
            >
              <span>Portal Skillhub Kemnaker</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 4 3D Statistic Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard3D
          label="Total Peserta Terdaftar"
          value={peserta.length}
          subtext="Monitoring aktif di database"
          badge="Live Update"
          badgeType="info"
          icon={<Users className="w-5 h-5" />}
        />

        <StatCard3D
          label="Sedang Pelatihan"
          value={activeTrainees}
          subtext="Bahasa & pembinaan fisik"
          badge="Kelas Intensif"
          badgeType="neutral"
          icon={<BookOpen className="w-5 h-5" />}
        />

        <StatCard3D
          label="Siap Wawancara Kaisha"
          value={readyInterview}
          subtext="Lolos evaluasi tata bahasa N4"
          badge="Tahap Seleksi"
          badgeType="warning"
          icon={<Award className="w-5 h-5" />}
        />

        <StatCard3D
          label="Proses CoE & Visa"
          value={processingCoE}
          subtext="Imigrasi & Dokumen Resmi"
          badge="Kesiapan Berangkat"
          badgeType="success"
          icon={<FileCheck className="w-5 h-5" />}
        />
      </div>

      {/* Main Grid: Data Table (8 cols) & Activity Feed (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <PesertaTable
            data={peserta}
            onSelectPeserta={(p) => setSelectedPeserta(p)}
          />
        </div>

        <div className="lg:col-span-4 space-y-6">
          <ActivityFeed />

          {/* Institutional Contact Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="font-heading font-black text-sm text-navy-950 uppercase tracking-wide pb-2 border-b border-slate-200">
              Pusat Verifikasi Dokumen LPK
            </h3>
            <div className="space-y-2 text-xs text-slate-800 font-medium">
              <div className="flex justify-between">
                <span className="text-slate-700">ID Mitra Kemnaker:</span>
                <span className="font-mono text-navy-950 font-bold">9300c90b</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">WhatsApp Resmi:</span>
                <span className="font-bold text-emerald-800">{siteConfig.whatsappNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-700">Lokasi:</span>
                <span className="font-bold text-navy-950">Karawang, Jawa Barat</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <span>Buka WhatsApp Layanan Siswa</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail Peserta (Read-Only) */}
      <PesertaModal
        peserta={selectedPeserta}
        isOpen={Boolean(selectedPeserta)}
        onClose={() => setSelectedPeserta(null)}
      />
    </div>
  );
}
