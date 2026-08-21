"use client";
import { Moon, Sun } from "lucide-react";

// Sengaja tanpa state sama sekali. Sumber kebenaran tema adalah class `.dark` di
// <html>, yang sudah dipasang script anti-FOUC di layout sebelum paint pertama.
//
// Ikonnya dipilih murni oleh CSS (`dark:` variant), bukan oleh React. Karena React
// merender markup yang identik di server dan klien, hydration mismatch mustahil
// terjadi — sekaligus tanpa kedip ikon yang biasa muncul kalau state disinkronkan
// lewat useEffect.
export function ThemeToggle() {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage bisa dilarang (mode privat / setelan browser). Tema tetap
      // berubah untuk sesi ini, hanya tidak diingat.
    }
  }

  return (
    <button
      aria-label="Ubah tema"
      onClick={toggle}
      className="border-hard shadow-brutal-sm bg-white p-2 text-black transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:bg-gray-800 dark:text-white"
    >
      <Moon size={18} className="block dark:hidden" aria-hidden="true" />
      <Sun size={18} className="hidden dark:block" aria-hidden="true" />
    </button>
  );
}
