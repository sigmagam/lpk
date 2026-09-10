"use client";

import { useState } from "react";
import StatCard3D from "@/components/dashboard/StatCard3D";
import AdminPesertaTable from "@/components/admin/AdminPesertaTable";
import EditPesertaModal from "@/components/admin/EditPesertaModal";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import QuickAddModal from "@/components/dashboard/QuickAddModal";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import { usePesertaData } from "@/data/pesertaStore";
import { PesertaRecord } from "@/data/dashboard";
import { siteConfig } from "@/data/site";
import {
  ShieldAlert,
  Users,
  Award,
  FileCheck,
  BookOpen,
  Plus,
  Eye,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Trash2
} from "lucide-react";
import Link from "next/link";

export default function YusufAdminPage() {
  const { peserta, addPeserta, updatePeserta, deletePeserta, resetToDefault } = usePesertaData();

  const [selectedPesertaForEdit, setSelectedPesertaForEdit] = useState<PesertaRecord | null>(null);
  const [selectedPesertaForDelete, setSelectedPesertaForDelete] = useState<PesertaRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const activeTrainees = peserta.filter((p) => p.status === "Aktif Pelatihan").length;
  const readyInterview = peserta.filter((p) => p.status === "Siap Wawancara").length;
  const processingCoE = peserta.filter((p) => p.status === "Proses CoE" || p.status === "Visa Issued").length;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Admin Authority Banner */}
      <div className="rounded-3xl bg-navy-950 text-white p-6 sm:p-8 relative overflow-hidden shadow-subtle-3d border border-navy-900">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vermilion-500/20 border border-vermilion-500/40 text-vermilion-300 text-xs font-semibold">
              <ShieldAlert className="w-4 h-4 text-vermilion-400" />
              <span>Portal Otoritas Admin: /yusuf</span>
            </div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
              Panel Pengelolaan Data Pelatihan LPK PMS Karawang
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Area khusus Administrator Yusuf untuk menambah pendaftar baru, mengedit data kelayakan peserta, memperbarui status penempatan, serta menghapus data.
            </p>
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
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold border border-navy-700 transition-colors"
            >
              <Eye className="w-4 h-4 text-primary-400" />
              <span>Lihat Versi Dashboard</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4 3D Statistic Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard3D
          label="Total Database Peserta"
          value={peserta.length}
          subtext="Peserta terdaftar di sistem"
          badge="Live Data"
          badgeType="info"
          icon={<Users className="w-5 h-5" />}
        />

        <StatCard3D
          label="Aktif Pelatihan"
          value={activeTrainees}
          subtext="Kelas intensif bahasa & fisik"
          badge="Tahap Belajar"
          badgeType="neutral"
          icon={<BookOpen className="w-5 h-5" />}
        />

        <StatCard3D
          label="Siap Wawancara Kaisha"
          value={readyInterview}
          subtext="Lulus N4 / JFT / SSW"
          badge="Prioritas Interview"
          badgeType="warning"
          icon={<Award className="w-5 h-5" />}
        />

        <StatCard3D
          label="Tahap CoE & Visa"
          value={processingCoE}
          subtext="Imigrasi & Kedutaan Jepang"
          badge="Menuju Terbang"
          badgeType="success"
          icon={<FileCheck className="w-5 h-5" />}
        />
      </div>

      {/* CRUD Management Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <AdminPesertaTable
            data={peserta}
            onEdit={(p) => setSelectedPesertaForEdit(p)}
            onDelete={(p) => setSelectedPesertaForDelete(p)}
            onQuickStatusChange={(id, newSt) => updatePeserta(id, { status: newSt })}
            onOpenAddModal={() => setIsAddModalOpen(true)}
            onResetDefault={resetToDefault}
          />
        </div>

        <div className="lg:col-span-4 space-y-6">
          <ActivityFeed />

          {/* Quick Notice Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3 text-xs text-slate-600">
            <h3 className="font-heading font-bold text-navy-950 text-sm uppercase tracking-wider pb-2 border-b border-slate-100">
              Instruksi Administrator
            </h3>
            <p className="leading-relaxed">
              Semua perubahan data (tambah, edit nama/program, ubah status, dan hapus) yang Anda lakukan di halaman <strong>/yusuf</strong> akan otomatis tercermin secara real-time pada <strong>/dashboard</strong>.
            </p>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] space-y-1">
              <div className="flex justify-between">
                <span>Domain Publik:</span>
                <span className="font-semibold text-navy-950">/</span>
              </div>
              <div className="flex justify-between">
                <span>Dashboard Informasi:</span>
                <span className="font-semibold text-primary-700">/dashboard</span>
              </div>
              <div className="flex justify-between">
                <span>Panel CRUD Admin:</span>
                <span className="font-semibold text-vermilion-700">/yusuf</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <EditPesertaModal
        peserta={selectedPesertaForEdit}
        isOpen={Boolean(selectedPesertaForEdit)}
        onClose={() => setSelectedPesertaForEdit(null)}
        onSave={(id, fields) => updatePeserta(id, fields)}
      />

      <DeleteConfirmModal
        peserta={selectedPesertaForDelete}
        isOpen={Boolean(selectedPesertaForDelete)}
        onClose={() => setSelectedPesertaForDelete(null)}
        onConfirmDelete={(id) => deletePeserta(id)}
      />

      <QuickAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPeserta={(newRecord) => addPeserta(newRecord)}
      />
    </div>
  );
}
