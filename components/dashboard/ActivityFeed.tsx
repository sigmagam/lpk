import { recentActivityLogs } from "@/data/dashboard";
import { CheckCircle2, RefreshCw, Users, ShieldAlert } from "lucide-react";

export default function ActivityFeed() {
  const getIcon = (type: string) => {
    switch (type) {
      case "verification":
        return <CheckCircle2 className="w-4 h-4 text-emerald-700" />;
      case "system":
        return <RefreshCw className="w-4 h-4 text-primary-700" />;
      case "training":
        return <Users className="w-4 h-4 text-purple-700" />;
      default:
        return <ShieldAlert className="w-4 h-4 text-amber-700" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200">
        <div>
          <h3 className="font-heading font-black text-sm text-navy-950 uppercase tracking-wide">
            Log Aktivitas Operasional
          </h3>
          <p className="text-xs text-slate-700 font-medium">
            Riwayat sinkronisasi dokumen, pelatihan, dan verifikasi
          </p>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      <div className="space-y-4">
        {recentActivityLogs.map((log) => (
          <div key={log.id} className="flex items-start gap-3.5 group">
            <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary-100 transition-colors">
              {getIcon(log.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black text-navy-950 group-hover:text-primary-800 transition-colors">
                  {log.title}
                </span>
                <span className="text-[11px] text-slate-600 shrink-0 font-bold">
                  {log.time}
                </span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed mt-0.5 font-normal">
                {log.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
