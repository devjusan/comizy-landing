"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PLATFORMS, type QuizResult } from "../data";

const SIGNUP_URL = "https://app.comizy.com.br/signup";

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const primary = PLATFORMS[result.primary];
  const alternatives = result.alternatives.map((id) => PLATFORMS[id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOut }}
      className="rounded-3xl border border-border bg-surface shadow-xl shadow-brand-500/10 p-6 sm:p-10"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-4">
        Sua recomendação
      </p>

      {/* Plataforma principal */}
      <div className="flex items-start gap-5 sm:gap-7 mb-8">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: easeOut }}
          className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-surface-amber border-2 border-brand-300 flex items-center justify-center shadow-md shadow-brand-500/15"
        >
          <Image
            src={primary.logo}
            alt={`Logo ${primary.name}`}
            width={48}
            height={48}
            className="object-contain"
          />
        </motion.div>
        <div className="flex-1 min-w-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-bg text-success text-[10px] uppercase tracking-wide font-bold mb-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-success"
              aria-hidden
            />
            Melhor para você
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary leading-tight">
            {primary.name}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-text-secondary leading-relaxed">
            {result.justification}
          </p>
        </div>
      </div>

      {/* Alternativas */}
      <div className="border-t border-border pt-6 mb-8">
        <p className="text-xs uppercase tracking-[0.14em] text-text-muted font-semibold mb-4">
          Também vale considerar
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {alternatives.map((alt) => (
            <div
              key={alt.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-subtle"
            >
              <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0">
                <Image
                  src={alt.logo}
                  alt={`Logo ${alt.name}`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-text-primary truncate">
                  {alt.name}
                </p>
                <p className="text-xs text-text-secondary truncate">
                  {alt.edge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout Comizy para volumes altos */}
      {result.showComizyCallout && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="rounded-2xl bg-linear-to-br from-brand-50 to-amber-100/60 border border-brand-200 p-5 sm:p-6 mb-6"
        >
          <p className="text-sm font-bold text-brand-800 mb-2">
            Quem opera nesse volume geralmente usa mais de uma plataforma.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            Já pensou em unificar tudo num dashboard só? O Comizy recebe webhook
            de Hotmart, Kiwify, Monetizze e Braip em tempo real, e mostra cada
            venda, reembolso e saldo no mesmo painel.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 transition-all active:scale-[0.98]"
          >
            Conhecer o Comizy
            <ArrowRight />
          </a>
        </motion.div>
      )}

      <button
        type="button"
        onClick={onRestart}
        className="text-sm font-medium text-text-secondary hover:text-text-primary inline-flex items-center gap-1.5 transition-colors cursor-pointer"
      >
        <RestartIcon />
        Refazer comparação
      </button>
    </motion.div>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function RestartIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  );
}
