import type { LucideIcon } from "lucide-react";

export type SkillCategory = "Frontend" | "Backend" | "Tools & Design";
export interface Skill { name: string; category: SkillCategory; icon: LucideIcon; color?: string; }
export interface Project { title: string; type: string; description: string; technologies: string[]; github: string; demo?: string; thumbnail?: string; accentColor?: string; }
export interface Experience { role: string; company: string; period: string; description: string; technologies: string[]; }
/** `image` = berkas PDF yang dibuka saat diklik.
 *  `thumbnail` = gambar pratinjau opsional (PNG/JPG/WebP). Kalau diisi, dipakai
 *  sebagai preview; kalau kosong, kartu jatuh ke pratinjau berdesain. PDF tidak
 *  dirender inline oleh Chrome Android, jadi tidak dipakai sebagai preview. */
export interface Certificate { title: string; issuer: string; date: string; description?: string; skills: string[]; image: string; thumbnail?: string; url?: string; accentColor?: string; }
export interface Education { institution: string; program: string; period: string; }
export interface Pillar { title: string; description: string; color: string; icon: LucideIcon; }
