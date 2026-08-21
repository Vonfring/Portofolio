import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "outline" | "green"; download?: boolean; external?: boolean };

export function Button({ href, children, variant = "primary", download, external = false }: ButtonProps) {
  // Travel hover = offset shadow-nya, biar tombol "mendarat" pas di bayangannya.
  const travel = variant === "outline" ? "hover:translate-x-1 hover:translate-y-1" : "hover:translate-x-2 hover:translate-y-2";
  const className = `mono inline-flex items-center justify-center gap-2 border-hard px-5 py-3 text-sm font-bold transition ${travel} hover:shadow-none ${variant === "primary" ? "bg-black text-white shadow-brutal dark:bg-gray-100 dark:text-black" : variant === "green" ? "on-accent bg-green-500 text-black shadow-brutal" : "bg-white text-black shadow-brutal-sm dark:bg-gray-800 dark:text-white"}`;
  if (external) return <a href={href} download={download} className={className}>{children}</a>;
  return <Link href={href} className={className}>{children}</Link>;
}

