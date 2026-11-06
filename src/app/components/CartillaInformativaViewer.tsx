"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CartillaViewerProps = {
  src?: string;
  alt?: string;
  label?: string;
  width?: number;
  height?: number;
  previewClassName?: string;
  fullWidth?: boolean;
};

export default function CartillaInformativaViewer({
  src = "/images/cartilla-sticker.png",
  alt = "Cartilla de stickers OLIVICE con los 24 departamentos del Perú",
  label = "Cartilla de stickers",
  width = 1133,
  height = 1587,
  previewClassName = "block h-auto w-[245px] max-w-full object-contain object-center transition-transform duration-200 group-hover:scale-[1.02]",
  fullWidth = false,
}: CartillaViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsZoomed(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Ampliar ${label.toLowerCase()}`}
        className={`group block ${fullWidth ? "w-full" : "w-auto"} cursor-zoom-in rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 245px, 70vw"
          className={previewClassName}
        />
        <span className="sr-only">Toca para ver la cartilla en detalle</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C1C29]/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} ampliada`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
              setIsZoomed(false);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setIsZoomed((zoomed) => !zoomed)}
            aria-label={isZoomed ? `Ajustar ${label.toLowerCase()} a la pantalla` : `Ver ${label.toLowerCase()} al tamaño original`}
            className="absolute left-3 top-3 z-10 rounded-full bg-white px-4 py-3 text-sm font-medium text-[#0C1C29] shadow-lg transition hover:bg-[#EDE7E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6 sm:top-6"
          >
            {isZoomed ? "Ajustar" : "Ver al 100%"}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setIsZoomed(false);
            }}
            aria-label={`Cerrar ${label.toLowerCase()} ampliada`}
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl leading-none text-[#0C1C29] shadow-lg transition hover:bg-[#EDE7E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:top-6"
          >
            ×
          </button>

          <div className="max-h-[calc(100dvh-1.5rem)] max-w-full overflow-auto rounded-xl bg-[#EDE7E0] p-2 shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:p-4">
            <Image
              src={src}
              alt={`${alt} ampliada`}
              width={width}
              height={height}
              unoptimized
              className={
                isZoomed
                  ? "mx-auto block h-auto max-h-none max-w-none object-contain"
                  : "mx-auto block h-auto max-h-[calc(100dvh-4rem)] w-auto max-w-[calc(100vw-2.5rem)] object-contain sm:max-h-[calc(100dvh-6rem)] sm:max-w-[80vw]"
              }
              style={isZoomed ? { width: `${width}px` } : undefined}
            />
          </div>
        </div>
      )}
    </>
  );
}
