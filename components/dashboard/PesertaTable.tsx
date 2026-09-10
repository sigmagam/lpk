"use client";

import { useState } from "react";
import { PesertaRecord } from "@/data/dashboard";
import { Search, Filter, Eye, UserCheck, MessageSquare, ArrowUpDown, ChevronRight } from "lucide-react";

interface PesertaTableProps {
  data: PesertaRecord[];
  onSelectPeserta: (peserta: PesertaRecord) => void;
  onUpdateStatus: (id: string, newStatus: PesertaRecord["status"]) => void;
}

export default function PesertaTable({
  data,
  onSelectPeserta,
  onUpdateStatus,
}: PesertaTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("Semua");

  const statusList = [
    "Semua",
    "Aktif Pelatihan",
    "Siap Wawancara",
    "Proses CoE",
    "Visa Issued",
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
        return "bg-primary-50 text-primary-700 border-primary-200";
      case "Siap Wawancara":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Proses CoE":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Visa Issued":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Alumni":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-5 sm:p-6 border-b border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-navy-950 text-base sm:text-lg leading-tight">
              Daftar Peserta & Tahap Penempatan
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Kelola status pelatihan, kesiapan wawancara, dan berkas keimigrasian Jepang
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
            Total: <span className="text-navy-950 font-bold">{filteredData.length}</span> peserta
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama, kode peserta, atau program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-slate-50/50"
            />
          </div>

          {/* Status Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {statusList.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedStatus === st
                    ? "bg-navy-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/75 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <th className="py-3.5 px-5">Peserta</th>
              <th className="py-3.5 px-4">Program & Batch</th>
              <th className="py-3.5 px-4">Target JLPT</th>
              <th className="py-3.5 px-4">Kehadiran</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  onClick={() => onSelectPeserta(item)}
                >
                  {/* Name & Code */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-navy-950 text-xs sm:text-sm group-hover:text-primary-700 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-600 font-medium">
                          {item.code}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Program & Batch */}
                  <td className="py-4 px-4">
                    <div className="font-semibold text-slate-800 line-clamp-1 max-w-[220px]">
                      {item.program}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {item.batch}
                    </div>
                  </td>

                  {/* JLPT Target */}
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-bold text-[11px] border border-slate-200">
                      {item.jlptTarget}
                    </span>
                  </td>

                  {/* Attendance */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${item.attendance}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-700 text-[11px]">
                        {item.attendance}%
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectPeserta(item)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-primary-50 hover:text-primary-700 text-slate-700 text-xs font-semibold transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Detail</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-12 px-4 text-center">
                  <div className="max-w-sm mx-auto space-y-2">
                    <p className="text-sm font-bold text-navy-950">
                      Tidak ada data peserta yang cocok
                    </p>
                    <p className="text-xs text-slate-500">
                      Coba ganti kata kunci pencarian atau sesuaikan filter status di atas.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedStatus("Semua");
                      }}
                      className="mt-2 px-3 py-1.5 rounded-lg bg-navy-900 text-white text-xs font-semibold"
                    >
                      Reset Filter
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
