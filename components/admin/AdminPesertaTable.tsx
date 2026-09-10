"use client";

import { useState } from "react";
import { PesertaRecord } from "@/data/dashboard";
import {
  Search,
  Edit2,
  Trash2,
  Plus,
  Download,
  RotateCcw,
  CheckCircle2,
  MoreVertical,
  Eye
} from "lucide-react";

interface AdminPesertaTableProps {
  data: PesertaRecord[];
  onEdit: (peserta: PesertaRecord) => void;
  onDelete: (peserta: PesertaRecord) => void;
  onQuickStatusChange: (id: string, newStatus: PesertaRecord["status"]) => void;
  onOpenAddModal: () => void;
  onResetDefault?: () => void;
}

export default function AdminPesertaTable({
  data,
  onEdit,
  onDelete,
  onQuickStatusChange,
  onOpenAddModal,
  onResetDefault,
}: AdminPesertaTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("Semua");

  const statusList = [
    "Semua",
    "Aktif Pelatihan",
    "Siap Wawancara",
    "Proses CoE",
    "Visa Issued",
    "Alumni",
  ];

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.program.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "Semua" || item.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: PesertaRecord["status"]) => {
    switch (status) {
      case "Aktif Pelatihan":
        return "bg-primary-50 text-primary-900 border-primary-300";
      case "Siap Wawancara":
        return "bg-amber-50 text-amber-900 border-amber-300";
      case "Proses CoE":
        return "bg-purple-50 text-purple-900 border-purple-300";
      case "Visa Issued":
        return "bg-emerald-50 text-emerald-900 border-emerald-300";
      case "Alumni":
        return "bg-slate-100 text-slate-900 border-slate-300";
      default:
        return "bg-slate-50 text-slate-900 border-slate-300";
    }
  };

  const handleExportCSV = () => {
    const headers = ["ID", "Kode", "Nama", "Program", "Batch", "Target JLPT", "Status", "Kehadiran", "Catatan"];
    const rows = filteredData.map((p) => [
      p.id,
      p.code,
      `"${p.name}"`,
      `"${p.program}"`,
      `"${p.batch}"`,
      p.jlptTarget,
      p.status,
      `${p.attendance}%`,
      `"${p.notes.replace(/"/g, '""')}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Data_Admin_Peserta_LPK_PMS_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Table Header Toolbar */}
      <div className="p-5 sm:p-6 border-b border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-black text-navy-950 text-base sm:text-lg leading-tight">
                Tabel Kelola Peserta & Operasional (CRUD)
              </h2>
              <span className="px-2.5 py-0.5 rounded bg-vermilion-100 text-vermilion-900 text-[11px] font-black border border-vermilion-300">
                Admin Mode
              </span>
            </div>
            <p className="text-xs text-slate-700 mt-0.5 font-medium">
              Tambah peserta baru, perbarui status/program, atau hapus data peserta dari database.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Ekspor CSV</span>
            </button>

            {onResetDefault && (
              <button
                type="button"
                onClick={onResetDefault}
                title="Reset data ke bawaan"
                className="p-2 rounded-xl border border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-100 text-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Peserta</span>
            </button>
          </div>
        </div>

        {/* Search & Status Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama, kode, atau program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-vermilion-600 bg-slate-50"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {statusList.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedStatus === st
                    ? "bg-navy-950 text-white shadow-sm"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100 text-slate-800 font-black uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-5">Nama & Kode</th>
              <th className="py-3.5 px-4">Program Pelatihan</th>
              <th className="py-3.5 px-4">Batch & Target</th>
              <th className="py-3.5 px-4">Kehadiran</th>
              <th className="py-3.5 px-4">Status Penempatan</th>
              <th className="py-3.5 px-5 text-right">Aksi Admin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  {/* Name & Code */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-navy-950 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-black text-navy-950 text-xs sm:text-sm">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-700 font-mono font-bold">
                          {item.code}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Program */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900 line-clamp-1 max-w-[200px]">
                      {item.program}
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">
                      Mulai: {item.joinedDate}
                    </div>
                  </td>

                  {/* Batch & Target */}
                  <td className="py-4 px-4">
                    <div className="text-slate-900 font-bold">
                      {item.batch}
                    </div>
                    <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-slate-100 text-slate-900 font-black text-[10px] border border-slate-300">
                      {item.jlptTarget}
                    </span>
                  </td>

                  {/* Attendance */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-14 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{ width: `${item.attendance}%` }}
                        />
                      </div>
                      <span className="font-black text-slate-900 text-[11px]">
                        {item.attendance}%
                      </span>
                    </div>
                  </td>

                  {/* Quick Status Select */}
                  <td className="py-4 px-4">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        onQuickStatusChange(
                          item.id,
                          e.target.value as PesertaRecord["status"]
                        )
                      }
                      className={`px-2.5 py-1 rounded-full text-[11px] font-black border cursor-pointer focus:outline-none focus:ring-1 focus:ring-navy-950 ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      <option value="Aktif Pelatihan">Aktif Pelatihan</option>
                      <option value="Siap Wawancara">Siap Wawancara</option>
                      <option value="Proses CoE">Proses CoE</option>
                      <option value="Visa Issued">Visa Issued</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </td>

                  {/* Action Buttons: Edit & Delete */}
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => onEdit(item)}
                        title="Edit Data Peserta"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-primary-100 text-slate-800 hover:text-primary-900 transition-colors border border-slate-300"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(item)}
                        title="Hapus Data Peserta"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-800 hover:text-red-700 transition-colors border border-slate-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-12 px-4 text-center">
                  <div className="max-w-sm mx-auto space-y-2">
                    <p className="text-sm font-black text-navy-950">
                      Data peserta tidak ditemukan
                    </p>
                    <p className="text-xs text-slate-700 font-medium">
                      Coba ganti kata kunci pencarian atau tambah peserta baru melalui tombol di atas.
                    </p>
                    <button
                      type="button"
                      onClick={onOpenAddModal}
                      className="mt-2 px-4 py-2 rounded-xl bg-vermilion-600 text-white text-xs font-bold shadow-sm"
                    >
                      + Tambah Peserta Baru
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
