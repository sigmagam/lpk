"use client";

import { useState } from "react";
import StatCard3D from "@/components/dashboard/StatCard3D";
import PesertaTable from "@/components/dashboard/PesertaTable";
import PesertaModal from "@/components/dashboard/PesertaModal";
import QuickAddModal from "@/components/dashboard/QuickAddModal";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import { initialPeserta, dashboardMetrics, PesertaRecord } from "@/data/dashboard";
import { siteConfig } from "@/data/site";
import {
  Users,
  Award,
  FileCheck,
  ShieldCheck,
  ExternalLink,
  Plus,
  BookOpen,
  Calendar,
  Sparkles,
  MapPin
} from "lucide-react";

export default function DashboardOverviewPage() {
  const [pesertaList, setPesertaList] = useState<PesertaRecord[]>(initialPeserta);
  const [selectedPeserta, setSelectedPeserta] = useState<PesertaRecord | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSelectPeserta = (p: PesertaRecord) => {
    setSelectedPeserta(p);
    setIsModalOpen(true);
  };

  const handleUpdateStatus = (id: string, newStatus: PesertaRecord["status"]) => {
    setPesertaList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedPeserta && selectedPeserta.id === id) {
      setSelectedPeserta({ ...selectedPeserta, status: newStatus });
    }
  };

  const handleAddPeserta = (newP: PesertaRecord) => {
    setPesertaList((prev) => [newP, ...prev]);
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Institutional Banner Header */}
      <div className="rounded-3xl bg-navy-950 text-white p-6 sm:p-8 relative overflow-hidden shadow-subtle-3d border border-navy-900">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Status Sistem: Terverifikasi Kemnaker RI</span>
            </div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
              Sistem Manajemen LPK Panca Multiguna Sukses
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Monitoring progres peserta pelatihan kerja, persiapan ujian JLPT/SSW, seleksi wawancara Kaisha, dan tahapan visa ke Jepang.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary-400" />
                Pancawati, Purwasari, Karawang
              </span>
              <span>•</span>
              <span className="text-slate-400">Sinkronisasi: {dashboardMetrics.lastSync}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-md transition-all hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Peserta Baru</span>
            </button>
            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold border border-navy-700 transition-colors"
            >
              <span>Portal Skillhub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 4 3D Statistic Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard3D
          label="Peserta Pelatihan Aktif"
          value={dashboardMetrics.activeTrainees}
          subtext="Batch X, XI, XII & XIII"
          badge="Kelas Intensif"
          badgeType="info"
          icon={<Users className="w-5 h-5" />}
        />

        <StatCard3D
          label="Siap Wawancara Kaisha"
          value={dashboardMetrics.readyForInterview}
          subtext="Lolos Evaluasi N4 / SSW"
          badge="Tahap Penentu"
          badgeType="warning"
          icon={<Award className="w-5 h-5" />}
        />

        <StatCard3D
          label="Pengurusan CoE & Visa"
          value={dashboardMetrics.processingVisa}
          subtext="Imigrasi Jepang & Kedubes"
          badge="Administrasi"
          badgeType="success"
          icon={<FileCheck className="w-5 h-5" />}
        />

        <StatCard3D
          label="Program Pelatihan"
          value={`${dashboardMetrics.totalPrograms} Program`}
          subtext="Bahasa, Magang, TG, Budaya"
          badge="Terakreditasi"
          badgeType="neutral"
          icon={<BookOpen className="w-5 h-5" />}
        />
      </div>

      {/* Main Grid: Data Table (8 cols) & Activity Logs (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <PesertaTable
            data={pesertaList}
            onSelectPeserta={handleSelectPeserta}
            onUpdateStatus={handleUpdateStatus}
          />
        </div>

        <div className="lg:col-span-4 space-y-6">
          <ActivityFeed />

          {/* Institutional Contact Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-sm text-navy-950 uppercase tracking-wide pb-2 border-b border-slate-100">
              Pusat Verifikasi Dokumen LPK
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-600">ID Mitra Kemnaker:</span>
                <span className="font-mono text-navy-950 font-semibold">9300c90b</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">WhatsApp Resmi:</span>
                <span className="font-semibold text-emerald-700">{siteConfig.whatsappNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Lokasi:</span>
                <span className="font-semibold text-navy-950">Karawang, Jawa Barat</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <span>Buka WhatsApp Layanan Siswa</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail & Status Update */}
      <PesertaModal
        peserta={selectedPeserta}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdateStatus={handleUpdateStatus}
      />

      {/* Modal Tambah Peserta Baru */}
      <QuickAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPeserta={handleAddPeserta}
      />
    </div>
  );
}
