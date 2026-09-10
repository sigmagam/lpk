import { faqs } from "@/data/site";
import { HelpCircle, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardFAQPage() {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
            Pusat Informasi & FAQ Peserta
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Daftar pertanyaan umum yang sering diajukan seputar pendaftaran, kurikulum, dan pemagangan
          </p>
        </div>
        <Link
          href="/faq"
          target="_blank"
          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700"
        >
          Lihat Halaman FAQ Publik
        </Link>
      </div>

      <div className="space-y-4">
        {faqs.map((f, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-primary-50 text-primary-700">
                {f.category}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                FAQ-0{idx + 1}
              </span>
            </div>
            <h2 className="font-heading font-bold text-navy-950 text-sm">
              {f.question}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              {f.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
