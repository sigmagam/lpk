"use client";

import { PesertaRecord } from "@/data/dashboard";
import { AlertTriangle, Trash2, X } from "lucide-react";

interface DeleteConfirmModalProps {
  peserta: PesertaRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: (id: string) => void;
}

export default function DeleteConfirmModal({
  peserta,
  isOpen,
  onClose,
  onConfirmDelete,
}: DeleteConfirmModalProps) {
  if (!isOpen || !peserta) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-fade-up p-6">
        <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <h3 className="font-heading font-black text-navy-950 text-lg mb-2">
          Hapus Data Peserta?
        </h3>

        <p className="text-xs text-slate-700 leading-relaxed mb-4 font-medium">
          Apakah Anda yakin ingin menghapus data peserta{" "}
          <span className="font-black text-navy-950">{peserta.name}</span> (
          <span className="font-mono font-bold">{peserta.code}</span>)? Tindakan ini akan menghapus peserta dari sistem admin dan monitoring dashboard.
        </p>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 mb-6">
          <div className="flex justify-between text-slate-700">
            <span className="font-medium">Program:</span>
            <span className="font-bold text-slate-900">{peserta.program}</span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span className="font-medium">Status:</span>
            <span className="font-bold text-slate-900">{peserta.status}</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirmDelete(peserta.id);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <Trash2 className="w-4 h-4" />
            <span>Ya, Hapus Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
