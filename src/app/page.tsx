import type { Metadata } from "next";
import Image from "next/image";
import Logo from "./logo";
import LeadForm from "./lead-form";
import DashboardPreview from "./dashboard-preview";
import FaqAccordion from "./faq-accordion";
import CtaScrollButton from "./cta-scroll-button";
import Footer from "./components/core/landing-footer";

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

const waitlistCount = 50;

const socialProof = [
  "Vendas, recusas e reembolsos de todas as plataformas num só lugar",
  "Notificação em tempo real a cada nova venda",
  "Sem planilha, sem abrir mil abas todo dia",
];

const steps = [
  {
    title: "Conecte sua plataforma",
    description:
      "Cadastre a URL do webhook na sua plataforma de afiliado. Leva menos de 5 minutos com nossa documentação.",
  },
  {
    title: "Receba cada venda em tempo real",
    description:
      "Toda venda, recusa ou reembolso aparece no seu dashboard na hora que acontece.",
  },
  {
    title: "Veja tudo num só lugar",
    description:
      "Hotmart, Kiwify, Monetizze, Braip e mais, tudo consolidado. Sem planilha, sem abrir mil abas.",
  },
];

const pricingFeatures = [
  "Todas as plataformas conectadas",
  "Dashboard em tempo real",
  "Sem limite de transações",
  "Acesso vitalício ao preço de fundador",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <header className="px-6 py-5 bg-surface-subtle border-b border-border">
        <Logo />
      </header>

      {/* Hero */}
      <main className="relative flex flex-col items-center px-4 pb-16 pt-10 animate-fade-in-up bg-surface-subtle overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-200">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-sm font-semibold text-brand-700">
                Lançamento em breve
              </span>
            </div>
          </div>

          <p className="text-center text-sm text-text-secondary mb-5">
            <span className="font-bold text-text-primary">
              +{waitlistCount} afiliados e infoprodutores
            </span>{" "}
            já estão na lista
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-text-primary text-center leading-tight mb-4">
            Todas as suas comissões de afiliado em um só lugar
          </h1>

          <p className="text-sm sm:text-base text-text-secondary text-center mb-8 leading-relaxed">
            Conecte Hotmart, Kiwify, Monetizze, Braip e mais. Acompanhe todas as
            suas vendas, recusas e reembolsos em tempo real, num lugar só.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-border shadow-sm"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-surface border border-border p-6 shadow-xl shadow-brand-500/5">
            <p className="text-xs text-center text-brand-700 font-semibold bg-brand-50 border border-brand-100 rounded-lg py-2 mb-4">
              🔥 Acesso antecipado grátis. Preço sobe no lançamento.
            </p>
            <LeadForm />
          </div>
        </div>

        <div className="w-full max-w-2xl mt-8 rounded-2xl border border-border overflow-hidden shadow-2xl shadow-brand-500/5 relative z-10">
          <DashboardPreview />
        </div>

        <div className="w-full max-w-md relative z-10">
          <ul className="mt-6 space-y-3">
            {socialProof.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-success font-bold text-xs">✓</span>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Dor */}
      <section className="w-full bg-surface-muted py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
            Você abre quantas abas por dia só pra saber quanto ganhou?
          </p>
          <p className="mt-6 text-text-secondary text-base sm:text-lg leading-relaxed">
            Hotmart numa aba. Kiwify em outra. Monetizze em outra. Soma na
            cabeça ou joga numa planilha. Todo. Dia. O Comizy resolve isso de
            vez.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="w-full bg-surface py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Como funciona
            </h2>
            <p className="mt-3 text-text-secondary text-sm sm:text-base">
              Configure em menos de 5 minutos. Nunca mais abra mil abas.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl bg-surface-muted border border-border p-6 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition group"
              >
                <div className="text-5xl font-extrabold text-brand-500/20 mb-1 leading-none">
                  0{i + 1}
                </div>
                <p className="font-bold text-text-primary text-sm mb-2">
                  {step.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-8 -right-3 text-text-muted text-base z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preço */}
      <section className="w-full bg-surface-muted py-20 px-4">
        <div className="max-w-sm mx-auto">
          <div className="rounded-2xl bg-surface border-2 border-brand-200 p-8 shadow-2xl shadow-brand-500/10 text-center">
            <p className="text-sm font-semibold text-brand-700 bg-brand-100 rounded-full px-4 py-1 inline-block mb-5">
              Preço de fundador
            </p>
            <p className="text-5xl font-extrabold text-text-primary leading-none">
              R$49
              <span className="text-2xl font-semibold">,90</span>
              <span className="text-base font-normal text-text-muted">
                /mês
              </span>
            </p>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">
              Quem entrar na lista garante esse valor para sempre, mesmo quando
              o preço subir.
            </p>
            <div className="mt-6 space-y-3 text-left">
              {pricingFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                    <span className="text-success font-bold text-xs">✓</span>
                  </span>
                  {feature}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-text-muted">
              Também disponível plano anual com desconto. Detalhes no
              lançamento.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-surface py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-text-secondary text-sm sm:text-base">
              Tudo que você precisa saber antes de entrar na lista.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA final */}
      <section className="w-full bg-brand-500 py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Chega de abrir mil abas.
          </p>
          <p className="text-white/80 text-sm sm:text-base mb-8">
            Entre na lista e garanta seu acesso antecipado com preço de
            fundador.
          </p>
          <CtaScrollButton />
        </div>
      </section>

      <Footer />
    </div>
  );
}
