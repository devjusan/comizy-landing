import type { Metadata } from "next";
import Image from "next/image";
import Logo from "./logo";
import LeadForm from "./lead-form";

export const metadata: Metadata = {
  title: "Comizy — Dashboard de comissões para afiliados",
  description:
    "Acompanhe todas as suas comissões de Hotmart, Kiwify, Monetizze e mais em um único dashboard. Cadastre-se para acesso antecipado.",
  keywords: [
    "dashboard afiliados",
    "comissões afiliado",
    "hotmart dashboard",
    "kiwify dashboard",
    "monetizze comissões",
    "braip afiliados",
    "gerenciar comissões",
    "afiliados digitais",
    "plataformas de afiliados",
  ],
  alternates: {
    canonical: "https://comizy.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Comizy — Dashboard de comissões para afiliados",
    description:
      "Acompanhe todas as suas comissões de Hotmart, Kiwify, Monetizze e mais em um único dashboard. Cadastre-se para acesso antecipado.",
    url: "https://comizy.com.br",
    siteName: "Comizy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comizy — Dashboard de comissões para afiliados",
    description:
      "Acompanhe todas as suas comissões de Hotmart, Kiwify, Monetizze e mais em um único dashboard. Cadastre-se para acesso antecipado.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Comizy",
  url: "https://comizy.com.br",
  description:
    "Dashboard para afiliados acompanharem comissões de Hotmart, Kiwify, Monetizze, Braip e mais em um único lugar.",
  potentialAction: {
    "@type": "Action",
    name: "Cadastre-se para acesso antecipado",
    target: "https://comizy.com.br",
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

const waitlistCount = 97;

const socialProof = [
  "Vendas, recusas e reembolsos de todas as plataformas num só lugar",
  "Notificação em tempo real a cada nova venda",
  "Sem planilha, sem abrir mil abas todo dia",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-subtle">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="px-6 py-5">
        <Logo />
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pb-12 pt-6 animate-fade-in-up">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
              🚀 Lançamento em breve
            </span>
          </div>

          <p className="text-center text-sm text-text-secondary mb-5">
            <span className="font-semibold text-text-primary">
              +{waitlistCount} pessoas
            </span>{" "}
            já estão na lista
          </p>

          <h1 className="text-[1.75rem] sm:text-4xl font-semibold text-text-primary text-center leading-tight mb-3">
            Todas as suas comissões de afiliado em um só lugar
          </h1>

          <p className="text-sm sm:text-base text-text-secondary text-center mb-6 leading-relaxed">
            Conecte Hotmart, Kiwify, Monetizze, Braip e mais. Acompanhe todas as
            suas vendas, recusas e reembolsos em tempo real, num lugar só.
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
            <p className="text-xs text-center text-brand-700 font-medium bg-brand-50 rounded-lg py-2 mb-3">
              🔥 Acesso antecipado grátis. Preço sobe no lançamento.
            </p>
            <LeadForm />
          </div>

          <div className="mt-6 rounded-xl border border-border overflow-hidden shadow-sm">
            <p className="text-xs text-center text-text-muted py-2 bg-surface-muted">
              Veja como fica o seu dashboard
            </p>
            <Image
              src="/dashboard.png"
              alt="Preview do dashboard Comizy"
              width={896}
              height={560}
              className="w-full object-cover"
              priority
            />
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
