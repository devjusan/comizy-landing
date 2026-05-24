"use client";

import { motion } from "framer-motion";

const SIGNUP_URL = "https://app.comizy.com.br/signup";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden px-5 md:px-8 py-20 sm:py-28">
      <div
        className="absolute inset-0 bg-linear-to-br from-brand-400 to-brand-500 -z-10"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-extrabold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
        >
          Chega de planilha. Seus dados estão esperando por você.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="mt-5 text-white/85 text-base sm:text-lg max-w-xl mx-auto"
        >
          Configure em 2 minutos e veja todas as suas comissões em um só lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          className="mt-9"
        >
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-surface hover:bg-brand-50 text-brand-700 text-base font-bold shadow-xl shadow-black/15 transition-all active:scale-[0.98]"
          >
            Criar conta agora
            <svg
              width="16"
              height="16"
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
          </a>
          <p className="mt-4 text-sm text-white/80">
            Sem cartão de crédito para começar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
