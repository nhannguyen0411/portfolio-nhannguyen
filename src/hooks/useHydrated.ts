"use client";

import { useEffect, useState } from "react";

/** True after client mount — use to avoid SSR/hydration leaving motion at opacity: 0 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
