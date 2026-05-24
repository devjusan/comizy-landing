"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SIGNUP_URL = "https://app.comizy.com.br/signup";

const steps = [
  {
    title: "Crie sua conta e gere sua URL de webhook",
    subtitle:
      "Cada plataforma recebe uma URL única vinculada à sua conta.",
  },
  {
    title: "Cole a URL nas configurações de cada plataforma",
    subtitle:
      "Processo idêntico em Hotmart, Kiwify, Monetizze e Braip.",
  },
  {
    title: "Pronto. Cada venda aparece em segundos.",
    subtitle:
      "Aprovação, recusa, reembolso — tudo categorizado automaticamente.",
  },
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ComoFunciona() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="como-funciona"
      className="bg-surface py-20 sm:py-28 px-5 md:px-8 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-3">
            Como funciona
          </p>
          <h2 className="font-extrabold tracking-tight text-text-primary text-3xl sm:text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Configure em 2 minutos. Veja tudo em tempo real.
          </h2>
        </motion.div>

        <div ref={ref} className="relative pl-16 sm:pl-24">
          {/* Vertical dashed amber line */}
          <div
            className="absolute left-[22px] sm:left-[30px] top-2 bottom-2 w-px overflow-hidden"
            aria-hidden
          >
            <motion.div
              className="w-full h-full"
              style={{
                scaleY,
                transformOrigin: "top",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, var(--color-brand-300) 0 6px, transparent 6px 12px)",
                backgroundSize: "1px 12px",
              }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-16 sm:-left-24 top-0 w-12 sm:w-16 flex items-start justify-center">
                  <div className="relative">
                    <span className="block font-extrabold text-4xl sm:text-5xl text-brand-500 leading-none tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-text-primary text-xl sm:text-2xl leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-text-secondary text-base leading-relaxed max-w-xl">
                  {s.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold text-base transition-colors group"
          >
            Configurar agora
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
