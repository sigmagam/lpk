"use client";

import { useState, useEffect } from "react";
import { PesertaRecord } from "@/data/dashboard";
import { X, Check, Edit3, ShieldAlert } from "lucide-react";

interface EditPesertaModalProps {
  peserta: PesertaRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, data: Partial<PesertaRecord>) => void;
}

export default function EditPesertaModal({
  peserta,
  isOpen,
  onClose,
  onSave,
}: EditPesertaModalProps) {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [batch, setBatch] = useState("");
  const [jlptTarget, setJlptTarget] = useState("");
  const [status, setStatus] = useState<PesertaRecord["status"]>("Aktif Pelatihan");
  const [attendance, setAttendance] = useState(95);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (peserta) {
      setName(peserta.name);
      setProgram(peserta.program);
      setBatch(peserta.batch);
      setJlptTarget(peserta.jlptTarget);
      setStatus(peserta.status);
      setAttendance(peserta.attendance);
      setNotes(peserta.notes);
    }
  }, [peserta]);

  if (!isOpen || !peserta) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSave(peserta.id, {
      name: name.trim(),
      program,
      batch,
      jlptTarget,
      status,
      attendance: Number(attendance),
      notes: notes.trim(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-fade-up">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-navy-950 text-base leading-tight">
                Edit Data Peserta
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {peserta.code}
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Nama Lengkap Peserta *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Program Pelatihan
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Target Ujian
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
                <option value="JLPT N5 -&gt; N4">JLPT N5 -&gt; N4</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Kehadiran (%)
              </label>
              <input
                type="number"
                min={0}
                max={100}
                value={attendance}
                onChange={(e) => setAttendance(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Status Penempatan Kerja
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as PesertaRecord["status"])}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white font-bold text-navy-950"
            >
              <option value="Aktif Pelatihan">Aktif Pelatihan</option>
              <option value="Siap Wawancara">Siap Wawancara</option>
              <option value="Proses CoE">Proses CoE</option>
              <option value="Visa Issued">Visa Issued</option>
              <option value="Alumni">Alumni</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Catatan Perkembangan Peserta
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
