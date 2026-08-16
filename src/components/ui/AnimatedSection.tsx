"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
export function AnimatedSection({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) { return <motion.section id={id} className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>{children}</motion.section>; }
