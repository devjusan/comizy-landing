"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const screens = [
  {
    id: "plataformas",
    label: "Plataformas",
    src: "/dashboard.png",
    alt: "Painel com cada plataforma de afiliado consolidada — Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz.",
  },
  {
    id: "transacoes",
    label: "Transações",
    src: "/dashboard-2.png",
    alt: "Lista de transações com aprovações, recusas e reembolsos detalhados por venda.",
  },
] as const;

type ScreenId = (typeof screens)[number]["id"];

function LockSmall() {
  return (
    <svg
      className="w-3 h-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export default function PorDentro() {
  const [active, setActive] = useState<ScreenId>("plataformas");
  const current = screens.find((s) => s.id === active) ?? screens[0];

  return (
    <section
      id="por-dentro"
      className="relative bg-[#FAFAFA] py-20 sm:py-28 px-5 md:px-8 scroll-mt-20 overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-100 rounded-full bg-brand-100/60 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-3">
            FEITO PARA AFILIADO
          </p>
          <h2 className="font-extrabold tracking-tight text-text-primary text-3xl sm:text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Tudo que você vendia espalhado. Agora em um só lugar.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Conecte as principais plataformas do mercado via webhook. Cada venda
            aprovada, recusada ou reembolsada aparece aqui em segundos.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative inline-flex items-center gap-1 p-1 rounded-full bg-surface border border-border shadow-sm">
            {screens.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                  active === s.id
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="screen-tab"
                    className="absolute inset-0 bg-brand-500 rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Screenshot showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl shadow-brand-500/15">
            {/* Browser chrome */}
            <div className="flex items-center h-9 px-3.5 bg-[#F4F2EE] border-b border-border">
              <div className="flex items-center gap-1.5 shrink-0">
                <span
                  className="w-3 h-3 rounded-full bg-[#FF5F57]"
                  aria-hidden
                />
                <span
                  className="w-3 h-3 rounded-full bg-[#FEBC2E]"
                  aria-hidden
                />
                <span
                  className="w-3 h-3 rounded-full bg-[#28C840]"
                  aria-hidden
                />
              </div>
              <div className="flex-1 flex justify-center px-3 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-border text-[11px] text-text-muted max-w-xs">
                  <LockSmall />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={current.id}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2 }}
                      className="truncate"
                    >
                      app.comizy.com.br/{current.id}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <div className="w-12 shrink-0" aria-hidden />
            </div>

            {/* Screen */}
            <div className="relative aspect-[4/3] bg-surface">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Glow */}
          <div
            className="absolute -bottom-8 left-[10%] right-[10%] h-12 rounded-full bg-brand-500/20 blur-3xl -z-10"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
