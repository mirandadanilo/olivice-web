export const GA_MEASUREMENT_ID = "G-YS2FGXB7LD";

type GtagCommand = [command: string, ...parameters: unknown[]];

declare global {
  interface Window {
    dataLayer: IArguments[];
    gtag: (...command: GtagCommand) => void;
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
