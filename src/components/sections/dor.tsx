"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 7h20" />
        <path d="M2 12h20" />
        <path d="M2 17h20" />
        <circle cx="6" cy="7" r="1.2" fill="currentColor" />
        <circle cx="11" cy="12" r="1.2" fill="currentColor" />
        <circle cx="16" cy="17" r="1.2" fill="currentColor" />
      </svg>
    ),
    text: "Hotmart diz uma coisa, Kiwify diz outra — qual o total real?",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <polyline points="3 4 3 9 8 9" />
      </svg>
    ),
    text: "Reembolso caiu? Você só descobre quando confere manualmente.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="9" y1="4" x2="9" y2="20" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="14" x2="21" y2="14" />
      </svg>
    ),
    text: "Fim do mês vira uma maratona de planilha e calculadora.",
  },
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Dor() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center font-extrabold tracking-tight text-text-primary text-3xl sm:text-4xl md:text-5xl max-w-3xl mx-auto leading-tight"
        >
          Você abre quantas abas por dia para ver quanto ganhou?
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: i * 0.1 }}
              className="group rounded-2xl bg-surface border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                <span className="w-6 h-6 inline-block">{c.icon}</span>
              </div>
              <p className="text-base font-semibold text-text-primary leading-snug">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center italic text-text-muted text-lg"
        >
          Isso acabou.
        </motion.p>
      </div>
    </section>
  );
}
