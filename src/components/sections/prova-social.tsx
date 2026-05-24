"use client";

import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    name: "Rafael Marques",
    role: "Afiliado Hotmart + Kiwify",
    initials: "RM",
    text: "Eu tinha 4 abas abertas só pra fechar o mês. Agora abro o Comizy de manhã, vejo tudo num lugar e acabou. Voltei a focar em vender.",
    color: "bg-brand-100 text-brand-700",
  },
  {
    name: "Bianca Almeida",
    role: "Afiliada Hotmart + Monetizze + Braip",
    initials: "BA",
    text: "Vi um reembolso de R$840 que ia ter passado batido. O Comizy me avisou na hora. Só esse aviso já pagou a assinatura do ano inteiro.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Diego Tavares",
    role: "Afiliado Kiwify + Hotmart",
    initials: "DT",
    text: "Configurei em 3 minutos. Sério. Coloquei a URL nas duas plataformas e na mesma tarde já tava recebendo as vendas no dashboard.",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function ProvaSocial() {
  return (
    <section className="bg-surface py-20 sm:py-28 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="font-extrabold tracking-tight text-text-primary text-3xl sm:text-4xl md:text-5xl leading-tight">
            Afiliados que vendem em mais de uma plataforma já usam o Comizy.
          </h2>
          <p className="mt-5 text-text-secondary text-base sm:text-lg">
            Junte-se a quem parou de perder tempo com planilha.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: i * 0.12 }}
              className="rounded-2xl border border-border bg-surface p-7 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
            >
              <svg
                className="w-7 h-7 text-brand-400 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M9.5 6c-3 0-5.5 2.5-5.5 5.5V18h6v-6.5H6c.1-1.4 1.4-2.5 3.5-2.5V6zm9 0c-3 0-5.5 2.5-5.5 5.5V18h6v-6.5H15c.1-1.4 1.4-2.5 3.5-2.5V6z" />
              </svg>
              <p className="text-text-primary text-base leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-text-primary text-sm truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted truncate">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
