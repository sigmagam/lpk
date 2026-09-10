"use client";

import { useState } from "react";
import PesertaTable from "@/components/dashboard/PesertaTable";
import PesertaModal from "@/components/dashboard/PesertaModal";
import QuickAddModal from "@/components/dashboard/QuickAddModal";
import { initialPeserta, PesertaRecord } from "@/data/dashboard";
import { Users, UserPlus, Download, CheckCircle, Clock } from "lucide-react";

export default function DashboardPesertaPage() {
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

  const handleExportCSV = () => {
    const headers = ["ID", "Kode", "Nama", "Program", "Batch", "Target JLPT", "Status", "Kehadiran"];
    const rows = pesertaList.map((p) => [
      p.id,
      p.code,
      `"${p.name}"`,
      `"${p.program}"`,
      `"${p.batch}"`,
      p.jlptTarget,
      p.status,
      `${p.attendance}%`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Data_Peserta_LPK_PMS_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
            Manajemen Peserta Pelatihan Kerja
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Data administrasi siswa, riwayat kehadiran, target bahasa, dan progres keberangkatan ke Jepang
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Ekspor Rekap CSV</span>
          </button>
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-md transition-all"
          >
            <UserPlus className="w-4 h-4 text-primary-400" />
            <span>Tambah Peserta</span>
          </button>
        </div>
      </div>

      {/* Main Table */}
      <PesertaTable
        data={pesertaList}
        onSelectPeserta={handleSelectPeserta}
        onUpdateStatus={handleUpdateStatus}
      />

      {/* Modals */}
      <PesertaModal
        peserta={selectedPeserta}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdateStatus={handleUpdateStatus}
      />

      <QuickAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPeserta={handleAddPeserta}
      />
    </div>
  );
}
