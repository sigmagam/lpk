"use client";

import { PesertaRecord } from "@/data/dashboard";
import { X, CheckCircle, Clock, ShieldCheck, UserCheck, BookOpen, Calendar, Award } from "lucide-react";

interface PesertaModalProps {
  peserta: PesertaRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PesertaModal({
  peserta,
  isOpen,
  onClose,
}: PesertaModalProps) {
  if (!isOpen || !peserta) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-fade-up">
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-navy-950 text-white flex items-center justify-center font-black text-base shadow-sm">
              {peserta.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="font-heading font-black text-navy-950 text-lg leading-tight">
                {peserta.name}
              </h3>
              <div className="text-xs font-bold text-slate-700">
                Kode Peserta: {peserta.code} • {peserta.batch}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-700 hover:text-navy-950 hover:bg-slate-200 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-black uppercase text-slate-700 block mb-1">
                Target Bahasa
              </span>
              <span className="text-xs font-black text-navy-950">
                {peserta.jlptTarget}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-black uppercase text-slate-700 block mb-1">
                Tingkat Kehadiran
              </span>
              <span className="text-xs font-black text-emerald-800">
                {peserta.attendance}% Hadir
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-black uppercase text-slate-700 block mb-1">
                Mulai Pelatihan
              </span>
              <span className="text-xs font-black text-navy-950">
                {peserta.joinedDate}
              </span>
            </div>
          </div>

          {/* Program Enrolled */}
          <div className="p-4 rounded-xl bg-primary-50 border border-primary-200 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-primary-800 shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-black uppercase tracking-wider text-primary-900">
                Program Pelatihan
              </div>
              <div className="text-sm font-black text-navy-950">
                {peserta.program}
              </div>
            </div>
          </div>

          {/* Status Badge View */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">
              Status Penempatan Kerja:
            </span>
            <span className="px-3.5 py-1 rounded-full bg-navy-950 text-white text-xs font-black">
              {peserta.status}
            </span>
          </div>

          {/* Notes */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1.5">
              Catatan Progres
            </span>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
              {peserta.notes}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-700 font-medium">
            Papan Informasi Siswa LPK PMS Karawang
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
