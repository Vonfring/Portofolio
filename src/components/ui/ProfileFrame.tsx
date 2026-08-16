"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ProfileFrame() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const animateFrame = !shouldReduceMotion;
  const animationTransition = animateFrame
    ? { duration: 4, ease: "easeInOut" as const, repeat: Infinity }
    : { duration: 0 };
  const sparkleTransition = animateFrame
    ? { duration: 3.2, ease: "easeInOut" as const, repeat: Infinity, delay: 0.6 }
    : { duration: 0 };

  return (
    <motion.div
      className="mx-auto w-full max-w-sm"
      initial={animateFrame ? { opacity: 0, scale: 0.92 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: animateFrame ? 0.55 : 0, ease: "easeOut" }}
    >
      <motion.div
        className="profile-frame relative border-hard bg-sky-200 p-3 shadow-brutal"
        animate={animateFrame ? { y: [0, -10, 0], rotate: [0, 1, 0] } : undefined}
        transition={animationTransition}
      >
        <div className="profile-frame__glow" aria-hidden="true" />
        <div className="profile-frame__orbit profile-frame__orbit--one" aria-hidden="true" />
        <div className="profile-frame__orbit profile-frame__orbit--two" aria-hidden="true" />
        <div className="relative z-10 flex aspect-square items-center justify-center overflow-hidden border-2 border-black bg-gradient-to-br from-sky-300 via-fuchsia-200 to-green-300">
          <Image
            src="/Indra_Wahyu_Santoso.png"
            alt="Foto Indra Wahyu Santoso"
            fill
            sizes="(max-width: 1024px) 90vw, 380px"
            className="object-cover object-top"
            priority
          />
          <div className="profile-frame__shine" aria-hidden="true" />
        </div>
        <motion.div
          className="profile-frame__sparkle absolute -bottom-5 -left-5 z-20 border-hard bg-fuchsia-400 p-3 shadow-brutal-sm"
          animate={animateFrame ? { scale: [1, 1.12, 1], rotate: [0, 5, -3, 0] } : undefined}
          transition={sparkleTransition}
        >
          <Sparkles size={24} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
