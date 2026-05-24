"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "Funciona para afiliados ou só para produtores?",
    a: "Hotmart, Kiwify, Monetizze e Braip funcionam para afiliados. Cakto e Eduzz só para produtor por limitação das próprias plataformas — isso está sinalizado no dashboard.",
  },
  {
    q: "Como o Comizy recebe os dados das plataformas?",
    a: "Via webhook: você cola a URL gerada no Comizy nas configurações de notificação de cada plataforma. Cada venda chega em segundos.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Toda comunicação usa criptografia AES-256. Nenhuma credencial das plataformas é armazenada no Comizy.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Sem multa, sem fidelidade. Cancele direto pelo chat nas configurações da conta.",
  },
  {
    q: "Quanto tempo leva para configurar?",
    a: "Em média 2 minutos por plataforma. É só copiar a URL e colar nas configurações de webhook de cada plataforma.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="bg-surface py-20 sm:py-28 px-5 md:px-8 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-3">
            FAQ
          </p>
          <h2 className="font-extrabold tracking-tight text-text-primary text-3xl sm:text-4xl md:text-5xl leading-tight">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface px-6 sm:px-8"
        >
          <Accordion type="single" collapsible>
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
