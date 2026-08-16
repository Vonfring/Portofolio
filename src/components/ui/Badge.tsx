import type { ReactNode } from "react";
export function Badge({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "green" }) { return <span className={`mono inline-block border-2 border-black px-2.5 py-1 text-xs font-bold ${variant === "green" ? "bg-green-300" : "bg-white"}`}>{children}</span>; }
