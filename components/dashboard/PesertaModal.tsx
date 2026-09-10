"use client";

import { PesertaRecord } from "@/data/dashboard";
import { X, CheckCircle, Clock, ShieldCheck, UserCheck, Phone, BookOpen, Calendar } from "lucide-react";

interface PesertaModalProps {
  peserta: PesertaRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateStatus: (id: string, newStatus: PesertaRecord["status"]) => void;
}

export default function PesertaModal({
  peserta,
  isOpen,
  onClose,
  onUpdateStatus,
}: PesertaModalProps) {
  if (!isOpen || !peserta) return null;

  const statuses: PesertaRecord["status"][] = [
    "Aktif Pelatihan",
    "Siap Wawancara",
    "Proses CoE",
    "Visa Issued",
    "Alumni",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-fade-up">
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-navy-900 text-white flex items-center justify-center font-bold text-base shadow-sm">
              {peserta.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-navy-950 text-lg leading-tight">
                {peserta.name}
              </h3>
              <div className="text-xs font-semibold text-slate-500">
                Kode Peserta: {peserta.code} • {peserta.batch}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-navy-950 hover:bg-slate-200 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                Target Bahasa
              </span>
              <span className="text-xs font-bold text-navy-900">
                {peserta.jlptTarget}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                Tingkat Kehadiran
              </span>
              <span className="text-xs font-bold text-emerald-700">
                {peserta.attendance}% Hadir
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                Tanggal Mulai
              </span>
              <span className="text-xs font-bold text-navy-900">
                {peserta.joinedDate}
              </span>
            </div>
          </div>

          {/* Program Enrolled */}
          <div className="p-4 rounded-xl bg-primary-50/60 border border-primary-100 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-primary-800">
                Program Pelatihan
              </div>
              <div className="text-sm font-bold text-navy-950">
                {peserta.program}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
              Catatan Evaluasi Instruktur
            </span>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              {peserta.notes}
            </div>
          </div>

          {/* Status Changer Section */}
          <div className="pt-3 border-t border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Perbarui Status Peserta
            </span>
            <div className="flex flex-wrap gap-2">
              {statuses.map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => onUpdateStatus(peserta.id, st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    peserta.status === st
                      ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Status: <span className="font-bold text-navy-900">{peserta.status}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-navy-950 font-bold text-xs transition-colors"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
}
