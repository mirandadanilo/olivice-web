"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID } from "../lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || window.__oliviceGaInitialized) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...command) {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    window.__oliviceGaInitialized = true;

    const script = document.createElement("script");
    script.id = "olivice-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
  }, []);

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
