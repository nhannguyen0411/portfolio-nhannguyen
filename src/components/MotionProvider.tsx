"use client";

import { MotionConfig } from "framer-motion";
import { useHydrated } from "@/hooks/useHydrated";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const hydrated = useHydrated();

  return (
    <MotionConfig reducedMotion={hydrated ? "user" : "always"}>
      {children}
    </MotionConfig>
  );
}
