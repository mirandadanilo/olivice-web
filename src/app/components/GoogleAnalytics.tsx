"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID } from "../lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (
      !GA_MEASUREMENT_ID ||
      !pathname ||
      typeof window.gtag !== "function" ||
      lastTrackedPath.current === pathname
    ) {
      return;
    }

    const pageReferrer = previousPath.current
      ? new URL(previousPath.current, window.location.origin).href
      : document.referrer;

    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      page_referrer: pageReferrer,
    });

    previousPath.current = pathname;
    lastTrackedPath.current = pathname;
  }, [pathname]);

  return null;
}
