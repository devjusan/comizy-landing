"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function DashboardPreview() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="block w-full text-left cursor-zoom-in"
        aria-label="Ampliar preview do dashboard"
      >
        <p className="text-xs text-center text-text-muted py-2 bg-surface-muted">
          Veja como fica o seu dashboard — clique para ampliar
        </p>
        <Image
          src="/dashboard.png"
          alt="Preview do dashboard Comizy"
          width={1280}
          height={800}
          className="w-full object-cover"
          priority
        />
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={close}
          >
            <div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                aria-label="Fechar"
                className="absolute top-2 right-2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
              >
                ✕
              </button>
              <Image
                src="/dashboard.png"
                alt="Preview do dashboard Comizy"
                width={1280}
                height={800}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
