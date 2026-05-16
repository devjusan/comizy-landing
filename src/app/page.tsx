import type { Metadata } from "next";
import Image from "next/image";
import Logo from "./logo";
import LeadForm from "./lead-form";

export const metadata: Metadata = {
  title: "Comizy — Dashboard de comissões para afiliados | Em breve",
  description:
    "Acompanhe todas as suas comissões de Hotmart, Kiwify, Monetizze e mais em um único dashboard. Cadastre-se para acesso antecipado.",
  openGraph: {
    title: "Comizy — Dashboard de comissões para afiliados | Em breve",
    description:
      "Acompanhe todas as suas comissões de Hotmart, Kiwify, Monetizze e mais em um único dashboard. Cadastre-se para acesso antecipado.",
    url: "https://comizy.com.br",
    type: "website",
  },
};

const platforms = [
  { name: "Hotmart", src: "/hotmart.png" },
  { name: "Kiwify", src: "/kiwify.png" },
  { name: "Monetizze", src: "/monetizze.png" },
  { name: "Braip", src: "/braip.png" },
  { name: "Caktous", src: "/cakto.png" },
  { name: "Eduzz", src: "/eduzz.png" },
];

const socialProof = [
  "Hotmart, Kiwify, Monetizze e mais",
  "Dashboard em tempo real",
  "Sem planilha, sem trabalho manual",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-subtle">
      <header className="px-6 py-5">
        <Logo />
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pb-12 pt-6 animate-fade-in-up">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
              🚀 Lançamento em breve
            </span>
          </div>

          <h1 className="text-[1.75rem] sm:text-4xl font-semibold text-text-primary text-center leading-tight mb-3">
            Todas as suas comissões de afiliado em um só lugar
          </h1>

          <p className="text-sm sm:text-base text-text-secondary text-center mb-6 leading-relaxed">
            Conecte Hotmart, Kiwify, Monetizze, Braip e mais — e acompanhe tudo
            em tempo real, sem planilha, sem abrir mil abas.
          </p>

          <div className="flex items-center justify-center gap-3 mb-7 flex-wrap">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-border"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-surface border border-border p-5 sm:p-6">
            <LeadForm />
          </div>

          <ul className="mt-5 space-y-2">
            {socialProof.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-text-secondary"
              >
                <span className="text-success font-semibold text-base leading-none">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
