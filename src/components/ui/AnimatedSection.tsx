"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
// scroll-mt-24 (96px) memberi ruang untuk navbar fixed (~76px di mobile setelah
// padding navbar dinaikkan) saat anchor diklik, supaya judul tidak tertutup navbar.
export function AnimatedSection({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) { return <motion.section id={id} className={`scroll-mt-24 ${className}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>{children}</motion.section>; }
