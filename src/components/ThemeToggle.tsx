"use client";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() { const [dark, setDark] = useState(() => typeof document !== "undefined" && document.documentElement.classList.contains("dark")); function toggle() { const next = !dark; document.documentElement.classList.toggle("dark", next); localStorage.setItem("theme", next ? "dark" : "light"); setDark(next); } return <button aria-label="Ubah tema" onClick={toggle} className="border-hard shadow-brutal-sm bg-white p-2 text-black transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:bg-gray-800 dark:text-white">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>; }
