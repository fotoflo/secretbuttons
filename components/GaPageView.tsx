"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** gtag's automatic page_view only fires on full loads; this covers client-side navigation. */
export default function GaPageView({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag?.("config", gaId, { page_path: pathname });
  }, [pathname, gaId]);

  return null;
}
