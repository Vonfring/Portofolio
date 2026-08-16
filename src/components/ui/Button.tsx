import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "outline" | "green"; download?: boolean; external?: boolean };

export function Button({ href, children, variant = "primary", download, external = false }: ButtonProps) {
  const className = `mono inline-flex items-center justify-center gap-2 border-hard px-5 py-3 text-sm font-bold transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${variant === "primary" ? "bg-black text-white shadow-brutal" : variant === "green" ? "bg-green-500 text-black shadow-brutal" : "bg-white text-black shadow-brutal-sm"}`;
  if (external) return <a href={href} download={download} className={className}>{children}</a>;
  return <Link href={href} className={className}>{children}</Link>;
}

