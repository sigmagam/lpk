"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import QuickAddModal from "@/components/dashboard/QuickAddModal";
import { PesertaRecord, initialPeserta } from "@/data/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [pesertaList, setPesertaList] = useState<PesertaRecord[]>(initialPeserta);

  const handleAddPeserta = (newP: PesertaRecord) => {
    setPesertaList((prev) => [newP, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area (offset by sidebar width on lg) */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        <Topbar
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-dashboard w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Global Quick Add Peserta Modal */}
      <QuickAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPeserta={handleAddPeserta}
      />
    </div>
  );
}
