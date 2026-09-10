"use client";

import { useState } from "react";
import AdminPesertaTable from "@/components/admin/AdminPesertaTable";
import EditPesertaModal from "@/components/admin/EditPesertaModal";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import QuickAddModal from "@/components/dashboard/QuickAddModal";
import { usePesertaData } from "@/data/pesertaStore";
import { PesertaRecord } from "@/data/dashboard";
import { Users, Plus, Download } from "lucide-react";

export default function YusufPesertaPage() {
  const { peserta, addPeserta, updatePeserta, deletePeserta, resetToDefault } = usePesertaData();

  const [selectedPesertaForEdit, setSelectedPesertaForEdit] = useState<PesertaRecord | null>(null);
  const [selectedPesertaForDelete, setSelectedPesertaForDelete] = useState<PesertaRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-vermilion-100 text-vermilion-800 text-[10px] font-bold">
              Admin Yusuf
            </span>
            <span className="text-xs text-slate-400">• CRUD Peserta</span>
          </div>
          <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
            Kelola Penuh Database Peserta Magang
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Halaman khusus administrator untuk menambah siswa baru, merubah data profil/program, serta menghapus peserta.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Peserta</span>
          </button>
        </div>
      </div>

      {/* Main Table with CRUD */}
      <AdminPesertaTable
        data={peserta}
        onEdit={(p) => setSelectedPesertaForEdit(p)}
        onDelete={(p) => setSelectedPesertaForDelete(p)}
        onQuickStatusChange={(id, newSt) => updatePeserta(id, { status: newSt })}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onResetDefault={resetToDefault}
      />

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
