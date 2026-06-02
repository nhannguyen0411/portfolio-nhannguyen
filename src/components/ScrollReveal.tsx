"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const hidden = { opacity: 0, y: 32, filter: "blur(8px)" };
const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef(null);
  const hydrated = useHydrated();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const show = !hydrated || isInView;

  return (
    <motion.div
      ref={ref}
      className={`overflow-visible ${className}`}
      initial={hydrated ? hidden : false}
      animate={show ? visible : hidden}
      transition={{ duration: 0.65, delay: hydrated ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
