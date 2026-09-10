"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import QuickAddModal from "@/components/dashboard/QuickAddModal";
import { usePesertaData } from "@/data/pesertaStore";

export default function YusufAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { addPeserta } = usePesertaData();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Admin Sidebar */}
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      {/* Main Admin Content Area */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        <AdminTopbar
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-dashboard w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Global Add Peserta Modal for Yusuf */}
      <QuickAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPeserta={(record) => addPeserta(record)}
      />
    </div>
  );
}
