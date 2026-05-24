"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SIGNUP_URL = "https://app.comizy.com.br/signup";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  "Dashboard unificado em tempo real",
  "Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz",
  "Histórico completo de transações",
  "Exportar CSV",
  "Suporte via chat",
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-brand-600 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
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

export default function Precos() {
  const [annual, setAnnual] = useState(true);

  return (
    <section
      id="precos"
      className="bg-[#FAFAFA] py-20 sm:py-28 px-5 md:px-8 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-3">
            Preços
          </p>
          <h2 className="font-extrabold tracking-tight text-text-primary text-3xl sm:text-4xl md:text-5xl leading-tight">
            Um plano. Um preço. Sem surpresa.
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative inline-flex items-center gap-1 p-1 rounded-full bg-surface border border-border shadow-sm">
            <div className="absolute -top-10 right-0 translate-x-2 sm:translate-x-6 pointer-events-none select-none">
              <div className="relative">
                <span className="inline-block bg-brand-300 text-text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  Ganhe 4 meses grátis
                </span>
                <svg
                  className="absolute -bottom-5 left-6 text-brand-400"
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3 2 C 3 10, 8 16, 16 18" />
                  <path d="M12 14 L 16 18 L 14 13" />
                </svg>
              </div>
            </div>
            <button
              onClick={() => setAnnual(false)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                !annual
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {!annual && (
                <motion.span
                  layoutId="price-toggle"
                  className="absolute inset-0 bg-brand-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                annual
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {annual && (
                <motion.span
                  layoutId="price-toggle"
                  className="absolute inset-0 bg-brand-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              Anual
              <span
                className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                  annual
                    ? "bg-white/20 text-white"
                    : "bg-success-bg text-success"
                }`}
              >
                -R$360
              </span>
            </button>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative max-w-md mx-auto"
        >
          <div
            className="absolute -inset-px rounded-[26px] bg-linear-to-br from-brand-300 to-orange-300 opacity-30 blur-lg"
            aria-hidden
          />

          <div className="relative rounded-3xl bg-surface border-2 border-brand-300 p-8 shadow-2xl shadow-brand-500/20">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.18em] font-bold text-brand-600 mb-4">
                Comizy Pro
              </p>

              <div className="min-h-22 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {annual ? (
                    <motion.div
                      key="annual"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-center"
                    >
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-text-muted text-lg font-medium">
                          R$
                        </span>
                        <span className="text-6xl font-extrabold text-text-primary tabular-nums leading-none">
                          66
                        </span>
                        <span className="text-text-muted text-base font-medium">
                          /mês
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-text-secondary">
                        <i> *Cobrado anualmente</i>
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="monthly"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-center"
                    >
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-text-muted text-lg font-medium">
                          R$
                        </span>
                        <span className="text-6xl font-extrabold text-text-primary tabular-nums leading-none">
                          79,90
                        </span>
                        <span className="text-text-muted text-base font-medium">
                          /mês
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-text-secondary">
                        Cobrado mensalmente
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <ul className="mt-8 space-y-3.5">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-text-primary"
                >
                  <CheckIcon />
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={SIGNUP_URL}
              className="mt-8 block w-full text-center px-6 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-base font-semibold shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 transition-all active:scale-[0.98]"
            >
              Criar minha conta
            </a>

            <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-text-muted">
              <LockIcon />
              Pagamento seguro. Cancele quando quiser.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
