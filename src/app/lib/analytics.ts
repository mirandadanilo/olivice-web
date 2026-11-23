export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GtagCommand = [command: string, ...parameters: unknown[]];

declare global {
  interface Window {
    dataLayer: IArguments[];
    gtag: (...command: GtagCommand) => void;
    __oliviceGaInitialized?: boolean;
  }
}

export function trackGAEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, parameters);
}
