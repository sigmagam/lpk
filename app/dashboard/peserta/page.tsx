"use client";

import { useState } from "react";
import PesertaTable from "@/components/dashboard/PesertaTable";
import PesertaModal from "@/components/dashboard/PesertaModal";
import { usePesertaData } from "@/data/pesertaStore";
import { PesertaRecord } from "@/data/dashboard";
import { Users, Download, Info } from "lucide-react";

export default function DashboardPesertaPage() {
  const { peserta } = usePesertaData();
  const [selectedPeserta, setSelectedPeserta] = useState<PesertaRecord | null>(null);

  const handleExportCSV = () => {
    const headers = ["ID", "Kode", "Nama", "Program", "Batch", "Target JLPT", "Status", "Kehadiran"];
    const rows = peserta.map((p) => [
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
    link.setAttribute("download", `Daftar_Peserta_LPK_PMS_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
              Monitoring Siswa
            </span>
            <span className="text-xs text-slate-400">• Tampilan Publik</span>
          </div>
          <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
            Daftar Nama Peserta Pelatihan Kerja
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Memantau nama-nama siswa, program pelatihan, target tingkat bahasa, serta perkembangan tahapan menuju Kaisha di Jepang.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Unduh Rekap Peserta (CSV)</span>
          </button>
        </div>
      </div>

      {/* View-Only Table */}
      <PesertaTable
        data={peserta}
        onSelectPeserta={(p) => setSelectedPeserta(p)}
      />

      {/* Read-Only Modal */}
      <PesertaModal
        peserta={selectedPeserta}
        isOpen={Boolean(selectedPeserta)}
        onClose={() => setSelectedPeserta(null)}
      />
    </div>
  );
}
