"use client";

import { useState } from "react";
import { PesertaRecord } from "@/data/dashboard";
import { Search, Eye, Filter, CheckCircle2, UserCheck, ExternalLink } from "lucide-react";

interface PesertaTableProps {
  data: PesertaRecord[];
  onSelectPeserta: (peserta: PesertaRecord) => void;
}

export default function PesertaTable({
  data,
  onSelectPeserta,
}: PesertaTableProps) {
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

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-5 sm:p-6 border-b border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-black text-navy-950 text-base sm:text-lg leading-tight">
                Daftar Peserta & Progres Penempatan
              </h2>
              <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 text-[11px] font-bold border border-slate-300">
                Tampilan Publik
              </span>
            </div>
            <p className="text-xs text-slate-700 mt-0.5 font-medium">
              Informasi peserta, batch pelatihan, target sertifikasi JLPT/SSW, dan kesiapan wawancara kerja Jepang.
            </p>
          </div>

          <div className="text-xs font-bold text-slate-900 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-300 self-start sm:self-auto">
            Menampilkan: <span className="text-navy-950 font-black">{filteredData.length}</span> peserta
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama peserta, kode, atau nama program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-600 bg-slate-50"
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

      {/* Responsive Table Body */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100 text-slate-800 font-black uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-5">Nama Peserta</th>
              <th className="py-3.5 px-4">Program Pelatihan</th>
              <th className="py-3.5 px-4">Batch & Target</th>
              <th className="py-3.5 px-4">Kehadiran</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-5 text-right">Informasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 transition-colors group cursor-pointer"
                  onClick={() => onSelectPeserta(item)}
                >
                  {/* Name & Code */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-navy-950 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-black text-navy-950 text-xs sm:text-sm group-hover:text-primary-800 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-700 font-mono font-semibold">
                          {item.code}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Program */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900 line-clamp-1 max-w-[220px]">
                      {item.program}
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">
                      Mulai: {item.joinedDate}
                    </div>
                  </td>

                  {/* Batch & JLPT Target */}
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
                      <div className="w-16 bg-slate-200 rounded-full h-2 overflow-hidden">
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

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black border ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {item.status}
                    </span>
                  </td>

                  {/* Detail Action */}
                  <td className="py-4 px-5 text-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPeserta(item);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-primary-100 hover:text-primary-900 text-slate-900 text-xs font-bold transition-colors border border-slate-300"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detail</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-12 px-4 text-center">
                  <div className="max-w-sm mx-auto space-y-2">
                    <p className="text-sm font-black text-navy-950">
                      Tidak ada data peserta yang cocok
                    </p>
                    <p className="text-xs text-slate-700 font-medium">
                      Coba ganti kata kunci pencarian atau sesuaikan filter status di atas.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedStatus("Semua");
                      }}
                      className="mt-2 px-3.5 py-1.5 rounded-xl bg-navy-950 text-white text-xs font-bold shadow-sm"
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
