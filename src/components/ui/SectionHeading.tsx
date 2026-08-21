import type { ReactNode } from "react";

// Baris eyebrow dihapus; nomor sectionnya pindah ke dalam <h2> sebagai prefiks kecil.
// Tetap `mono` dan hijau — mengikuti sistem "judul sans, elemen UI mono".
// `title` dipecah di karakter "|" untuk mewarnai bagian kedua (mis. "About | Me").
export function SectionHeading({ number, title, children, align = "center" }: { number: string; title: string; children?: ReactNode; align?: "center" | "left" }) {
  const parts = title.split("|");
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl dark:text-white">
        <span className="mono mr-3 align-middle text-base font-bold text-green-700 dark:text-green-400 sm:text-2xl">{number}</span>
        {parts.map((part, i) => <span key={part} className={i % 2 ? "text-sky-500" : ""}>{part}</span>)}
      </h2>
      <div className={`section-underline mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {children && <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">{children}</p>}
    </div>
  );
}
