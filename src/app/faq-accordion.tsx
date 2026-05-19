"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quais plataformas são suportadas?",
    answer:
      "Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz. Novas plataformas serão adicionadas conforme a demanda dos usuários.",
  },
  {
    question: "É difícil configurar?",
    answer:
      "Não. Você configura em menos de 5 minutos seguindo nossa documentação passo a passo. Sem precisar de conhecimento técnico.",
  },
  {
    question: "Como funciona o webhook?",
    answer:
      "Você cadastra uma URL gerada pelo Comizy direto na sua plataforma de afiliado. A partir daí, toda venda, recusa ou reembolso aparece automaticamente no seu dashboard em tempo real.",
  },
  {
    question: "Quando o Comizy lança?",
    answer:
      "Semana que vem. Quem está na lista recebe acesso antes de todo mundo e garante o preço de fundador.",
  },
  {
    question: "Preciso instalar alguma coisa?",
    answer:
      "Não. O Comizy é 100% online, acessa pelo navegador, sem instalar nada.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-border last:border-b-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-surface-muted transition"
          >
            <span className="text-sm font-semibold text-text-primary">
              {faq.question}
            </span>
            <span className="w-6 h-6 rounded-full bg-surface-muted flex items-center justify-center text-text-muted text-base leading-none shrink-0 select-none font-bold">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
