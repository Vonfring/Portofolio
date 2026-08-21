"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
// scroll-mt-20 memberi ruang untuk navbar fixed (~63px di mobile) saat anchor diklik,
// supaya judul section tidak tertutup navbar.
export function AnimatedSection({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) { return <motion.section id={id} className={`scroll-mt-20 ${className}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>{children}</motion.section>; }
