"use client";

import { useState } from "react";
import { PesertaRecord } from "@/data/dashboard";
import { X, UserPlus, Check } from "lucide-react";

interface QuickAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPeserta: (newRecord: PesertaRecord) => void;
}

export default function QuickAddModal({
  isOpen,
  onClose,
  onAddPeserta,
}: QuickAddModalProps) {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("Pembelajaran Bahasa Jepang");
  const [batch, setBatch] = useState("Batch XIII - Karawang");
  const [jlptTarget, setJlptTarget] = useState("JLPT N4");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newRecord: PesertaRecord = {
      id: `pst-${Date.now()}`,
      code: `PMS-2026-${Math.floor(100 + Math.random() * 900)}`,
      name: name.trim(),
      program,
      batch,
      jlptTarget,
      status: "Aktif Pelatihan",
      attendance: 100,
      joinedDate: "Baru terdaftar",
      notes: notes.trim() || "Pendaftaran baru melalui panel administrasi LPK.",
    };

    onAddPeserta(newRecord);
    setName("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-fade-up">
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-navy-950 text-base leading-tight">
                Pendaftaran Peserta Baru
              </h3>
              <p className="text-xs text-slate-500">
                Input data calon peserta magang / Tokutei Ginou
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-navy-950 hover:bg-slate-200"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Nama Lengkap Peserta *
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Pilihan Program
              </label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
              >
                <option value="Pembelajaran Bahasa Jepang">Pembelajaran Bahasa Jepang</option>
                <option value="Persiapan Kerja ke Jepang">Persiapan Kerja ke Jepang</option>
                <option value="Program Pemagangan">Program Pemagangan</option>
                <option value="Pembekalan Budaya & Kehidupan Jepang">Pembekalan Budaya Jepang</option>
                <option value="Pengembangan Kompetensi">Pengembangan Kompetensi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Batch Pelatihan
              </label>
              <input
                type="text"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Target Level Kelulusan
            </label>
            <select
              value={jlptTarget}
              onChange={(e) => setJlptTarget(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white"
            >
              <option value="JLPT N4">JLPT N4</option>
              <option value="JFT-Basic A2">JFT-Basic A2</option>
              <option value="SSW + N4">SSW + N4</option>
              <option value="JLPT N3">JLPT N3</option>
              <option value="JLPT N5 Dasar">JLPT N5 Dasar</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Catatan Awal
            </label>
            <textarea
              rows={2}
              placeholder="Kesiapan berkas, nomor WhatsApp, atau informasi awal..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Simpan Data Peserta</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
