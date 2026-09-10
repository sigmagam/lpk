import { siteConfig } from "@/data/site";
import { Building2, ShieldCheck, UserCheck, ShieldAlert, Key, Lock } from "lucide-react";
import Link from "next/link";

export default function YusufPengaturanPage() {
  return (
    <div className="space-y-6 animate-fade-up max-w-4xl">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 rounded bg-vermilion-100 text-vermilion-800 text-[10px] font-bold">
            Admin Yusuf
          </span>
          <span className="text-xs text-slate-400">• Pengaturan Sistem</span>
        </div>
        <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
          Konfigurasi Administrator Yusuf
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Hak akses superadmin, informasi operasional lembaga, dan sinkronisasi rute.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-4">
          <h2 className="font-heading font-bold text-sm text-navy-950 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>Otoritas Akun Admin</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 font-bold block text-[10px] uppercase mb-1">
                Nama Pengelola
              </span>
              <span className="font-bold text-navy-950 text-sm">Yusuf (Administrator)</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 font-bold block text-[10px] uppercase mb-1">
                Alamat URL Khusus Admin
              </span>
              <span className="font-mono font-bold text-vermilion-700 text-xs">domain/yusuf</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <span className="text-slate-400 font-bold block text-[10px] uppercase">
              Peran & Pembagian Akses Sistem
            </span>
            <ul className="space-y-1.5 text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion-600" />
                <span><strong>/yusuf</strong> : Tempat pengelolaan penuh (Tambah peserta, Edit profil/status, Hapus data).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                <span><strong>/dashboard</strong> : Tempat penampilan informasi dan monitoring peserta secara view-only.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link
            href="/dashboard"
            className="text-primary-700 hover:text-primary-800 font-bold underline underline-offset-4"
          >
            Tinjau Tampilan di /dashboard →
          </Link>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[11px] border border-emerald-200">
            Sistem Aktif & Siap Digunakan
          </span>
        </div>
      </div>
    </div>
  );
}
