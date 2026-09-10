"use client";

import { useEffect, useState } from "react";
import { PesertaRecord, initialPeserta } from "@/data/dashboard";

const STORAGE_KEY = "lpk_pms_peserta_data_v1";

export function getStoredPeserta(): PesertaRecord[] {
  if (typeof window === "undefined") return initialPeserta;
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPeserta));
      return initialPeserta;
    }
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialPeserta;
  } catch {
    return initialPeserta;
  }
}

export function saveStoredPeserta(list: PesertaRecord[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    // Dispatch custom event for cross-component sync
    window.dispatchEvent(new CustomEvent("peserta-updated", { detail: list }));
  } catch {
    // ignore
  }
}

export function usePesertaData() {
  const [peserta, setPeserta] = useState<PesertaRecord[]>(initialPeserta);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setPeserta(getStoredPeserta());
    setIsLoaded(true);

    const handleUpdate = (e: Event) => {
      const custom = e as CustomEvent<PesertaRecord[]>;
      if (custom.detail) {
        setPeserta(custom.detail);
      } else {
        setPeserta(getStoredPeserta());
      }
    };

    window.addEventListener("peserta-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("peserta-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const addPeserta = (record: PesertaRecord) => {
    const updated = [record, ...peserta];
    setPeserta(updated);
    saveStoredPeserta(updated);
  };

  const updatePeserta = (id: string, updatedFields: Partial<PesertaRecord>) => {
    const updated = peserta.map((p) =>
      p.id === id ? { ...p, ...updatedFields } : p
    );
    setPeserta(updated);
    saveStoredPeserta(updated);
  };

  const deletePeserta = (id: string) => {
    const updated = peserta.filter((p) => p.id !== id);
    setPeserta(updated);
    saveStoredPeserta(updated);
  };

  const resetToDefault = () => {
    setPeserta(initialPeserta);
    saveStoredPeserta(initialPeserta);
  };

  return {
    peserta,
    isLoaded,
    addPeserta,
    updatePeserta,
    deletePeserta,
    resetToDefault,
  };
}
