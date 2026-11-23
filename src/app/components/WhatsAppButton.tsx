"use client";

import { trackGAEvent } from "../lib/analytics";

export default function WhatsAppButton() {
  return (
    <a
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 grid size-[50px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_3px_12px_rgb(0_0_0_/_18%)] transition-[transform,box-shadow] duration-[160ms] ease-[ease] hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_5px_16px_rgb(0_0_0_/_22%)] focus-visible:outline-3 focus-visible:outline-[#0C1C29] focus-visible:outline-offset-[3px] sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:size-[56px] motion-reduce:transition-none"
      href="https://wa.me/51993728808"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a OLIVICE por WhatsApp Business"
      onClick={() =>
        trackGAEvent("whatsapp_click", {
          link_url: "https://wa.me/51993728808",
          link_domain: "wa.me",
        })
      }
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-[29px] sm:size-[33px]"
        fill="currentColor"
      >
        <path d="M16 2.4A13.5 13.5 0 0 0 4.4 22.8L2.6 29.4l6.8-1.8A13.5 13.5 0 1 0 16 2.4Zm0 24.4c-2 0-4-.5-5.7-1.6l-.4-.2-4 .1 1.1-3.8-.3-.5A10.8 10.8 0 1 1 16 26.8Z" />
        <path d="M22 18.5c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.8-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.5 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.6-.5Z" />
      </svg>
    </a>
  );
}
