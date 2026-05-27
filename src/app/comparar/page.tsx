/**
 * Página /comparar — comparador interativo de plataformas de afiliado.
 *
 * Arquitetura:
 *  - Este arquivo é Server Component. Toda a metadata e o JSON-LD vivem aqui
 *    para serem incluídos no HTML inicial, o que é essencial pro Google.
 *  - Interatividade fica em _components/*.tsx marcados como "use client".
 *
 * Substituição de imagem do dashboard:
 *  - Procure por /dashboard.png mais abaixo. O arquivo já existe em /public.
 *    Pra trocar, basta substituir o arquivo ou ajustar a string aqui.
 *
 * Textos editáveis: estão centralizados em ./data.ts.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/core/landing-footer";
import { Quiz } from "./_components/quiz";
import { ComparisonTable } from "./_components/comparison-table";
import { CompararFaq } from "./_components/faq";
import { HeroCta } from "./_components/hero-cta";
import {
  FAQS,
  INTRO_PARAGRAPHS,
  LONG_CONTENT,
  PLATFORM_ORDER,
  PLATFORMS,
} from "./data";

const PAGE_URL = "https://comizy.com.br/comparar";
const PUBLISHED_AT = "2026-01-15";
const UPDATED_AT = "2026-05-26";

export const metadata: Metadata = {
  title:
    "Hotmart, Kiwify, Monetizze ou Braip: qual plataforma de afiliado é melhor para você em 2026 | Comizy",
  description:
    "Compare as principais plataformas de afiliado do Brasil em 2 minutos. Ferramenta interativa que recomenda a melhor opção pro seu perfil. Hotmart, Kiwify, Monetizze e Braip lado a lado.",
  keywords: [
    "hotmart ou kiwify",
    "comparar hotmart kiwify",
    "qual a melhor plataforma de afiliados",
    "melhor plataforma de afiliados brasil",
    "hotmart kiwify monetizze braip",
    "comparar plataformas afiliado",
    "hotmart vs kiwify",
    "monetizze ou hotmart",
    "qual plataforma afiliado começar",
    "plataforma afiliado 2026",
    "comparativo afiliado brasil",
    "qual plataforma paga mais rápido afiliado",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Hotmart, Kiwify, Monetizze ou Braip: qual plataforma de afiliado é melhor pra você em 2026",
    description:
      "Ferramenta interativa que recomenda a melhor plataforma pro seu perfil em 2 minutos. Comparativo lado a lado das 4 maiores do Brasil.",
    url: PAGE_URL,
    siteName: "Comizy",
    locale: "pt_BR",
    type: "article",
    publishedTime: PUBLISHED_AT,
    modifiedTime: UPDATED_AT,
    authors: ["Comizy"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotmart, Kiwify, Monetizze ou Braip: qual é melhor pro seu perfil",
    description:
      "Compare as principais plataformas de afiliado do Brasil em 2 minutos.",
  },
  robots: { index: true, follow: true },
};

// ------------------------------------------------------------------
// Schema.org JSON-LD
// ------------------------------------------------------------------

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hotmart, Kiwify, Monetizze ou Braip: qual plataforma de afiliado é melhor para você em 2026",
  description:
    "Comparativo interativo das principais plataformas de afiliado do Brasil em 2026. Ferramenta de recomendação personalizada por perfil.",
  image: "https://comizy.com.br/dashboard-2.png",
  author: {
    "@type": "Organization",
    name: "Comizy",
    url: "https://comizy.com.br",
  },
  publisher: {
    "@type": "Organization",
    name: "Comizy",
    logo: {
      "@type": "ImageObject",
      url: "https://comizy.com.br/logo.png",
    },
  },
  datePublished: PUBLISHED_AT,
  dateModified: UPDATED_AT,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  inLanguage: "pt-BR",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Comizy",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Dashboard que unifica comissões de Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz em tempo real via webhook.",
  url: "https://comizy.com.br",
  offers: [
    {
      "@type": "Offer",
      price: "79.90",
      priceCurrency: "BRL",
      description: "Mensal",
    },
    {
      "@type": "Offer",
      price: "599.00",
      priceCurrency: "BRL",
      description: "Anual",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Comizy",
      item: "https://comizy.com.br",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Comparar plataformas de afiliado",
      item: PAGE_URL,
    },
  ],
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, softwareSchema, breadcrumbSchema],
};

// ------------------------------------------------------------------
// Página
// ------------------------------------------------------------------

export default function CompararPage() {
  return (
    <>
      <script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        {/* 1. HERO ----------------------------------------------------- */}
        <section className="relative isolate overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-16 px-5 md:px-8">
          <div
            className="absolute inset-x-0 top-0 h-100 pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, #FEF3C7 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-4">
              Comparador 2026
            </p>
            <h1 className="font-extrabold tracking-tight text-text-primary text-[36px] leading-[1.08] sm:text-5xl md:text-6xl">
              Qual plataforma de afiliados é a melhor pra você?
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Compare Hotmart, Kiwify, Monetizze e Braip em 2 minutos e receba
              uma recomendação personalizada baseada no seu perfil.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3">
              <HeroCta />
              <p className="text-xs text-text-muted">
                3 perguntas. Sem cadastro.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INTRODUÇÃO (prosa SEO) ---------------------------------- */}
        <section className="py-14 sm:py-20 px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-extrabold tracking-tight text-text-primary text-2xl sm:text-3xl md:text-4xl leading-tight mb-8">
              Por que escolher a plataforma certa importa
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-text-secondary leading-relaxed">
              {INTRO_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUIZ ---------------------------------------------------- */}
        <section
          id="quiz"
          className="py-14 sm:py-20 px-5 md:px-8 bg-surface-subtle scroll-mt-20"
        >
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-3">
              Ferramenta interativa
            </p>
            <h2 className="font-extrabold tracking-tight text-text-primary text-2xl sm:text-3xl md:text-4xl leading-tight">
              Receba sua recomendação personalizada
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Responda 3 perguntas rápidas e veja qual plataforma faz mais
              sentido pro seu perfil de afiliado.
            </p>
          </div>
          <Quiz />
        </section>

        {/* 4. TABELA COMPARATIVA -------------------------------------- */}
        <section className="py-14 sm:py-20 px-5 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <h2 className="font-extrabold tracking-tight text-text-primary text-2xl sm:text-3xl md:text-4xl leading-tight">
                Comparativo completo: Hotmart vs Kiwify vs Monetizze vs Braip em
                2026
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Dados públicos das próprias plataformas. Os prazos e percentuais
                podem variar por produto e método de pagamento.
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>

        {/* 5. CONTEÚDO LONGO (SEO) ------------------------------------ */}
        <section className="py-14 sm:py-20 px-5 md:px-8 bg-surface-subtle">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-extrabold tracking-tight text-text-primary text-2xl sm:text-3xl md:text-4xl leading-tight mb-6">
              Como escolher a melhor plataforma de afiliados em 2026
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-10">
              {LONG_CONTENT.intro}
            </p>

            <div className="space-y-12">
              {LONG_CONTENT.sections.map((section, i) => (
                <div key={i}>
                  <h3 className="font-bold tracking-tight text-text-primary text-xl sm:text-2xl mb-5 leading-snug">
                    {section.h3}
                  </h3>
                  <div className="space-y-4 text-base text-text-secondary leading-relaxed">
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        // dangerouslySetInnerHTML é seguro aqui porque o conteúdo
                        // é definido por nós em data.ts e só contém <a> internos.
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SEÇÃO COMIZY (mais de uma plataforma) ------------------ */}
        <section className="py-16 sm:py-24 px-5 md:px-8 bg-amber-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-200 text-xs font-bold text-brand-700 mb-5 hover:bg-brand-50 transition-colors"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brand-500"
                    aria-hidden
                  />
                  20 vagas Fundador, R$79/mês vitalício
                </Link>
                <h2 className="font-extrabold tracking-tight text-text-primary text-2xl sm:text-3xl md:text-4xl leading-tight mb-6">
                  Operando em mais de uma plataforma? É aí que o Comizy entra
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Quem opera em duas ou mais plataformas vive abrindo abas,
                  esquecendo de checar reembolso, perdendo prazo de saque e
                  conferindo planilha que nunca bate com o real. O custo dessa
                  fricção é silencioso, mas ele aparece no fim do mês.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  O Comizy recebe webhook de Hotmart, Kiwify, Monetizze, Braip,
                  Cakto e Eduzz, e mostra cada venda, reembolso e saldo no mesmo
                  painel, em tempo real. Sem planilha, sem aba dupla, sem
                  conferência manual.
                </p>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-base font-semibold shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 transition-all active:scale-[0.98]"
                >
                  Conhecer o Comizy
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
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* ATENÇÃO: imagem do dashboard. Para trocar, substitua /public/dashboard.png
                  ou edite a string `src` abaixo. Mantém width/height pra evitar CLS. */}
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl bg-linear-to-br from-brand-300/40 to-orange-300/30 blur-2xl"
                  aria-hidden
                />
                <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-xl shadow-brand-500/15">
                  <Image
                    src="/dashboard.png"
                    alt="Print do dashboard Comizy com comissões unificadas das principais plataformas de afiliado"
                    width={1600}
                    height={1000}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ ----------------------------------------------------- */}
        <section className="py-14 sm:py-20 px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-3">
                FAQ
              </p>
              <h2 className="font-extrabold tracking-tight text-text-primary text-2xl sm:text-3xl md:text-4xl leading-tight">
                Perguntas frequentes
              </h2>
            </div>
            <CompararFaq />
          </div>
        </section>

        {/* 8. CTA FINAL ----------------------------------------------- */}
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
            <h2 className="font-extrabold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Você não precisa escolher só uma
            </h2>
            <p className="mt-5 text-white/90 text-base sm:text-lg max-w-xl mx-auto">
              Comizy une suas comissões de Hotmart, Kiwify, Monetizze e Braip
              num dashboard só.
            </p>
            <div className="mt-9">
              <Link
                href="/#precos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-surface hover:bg-brand-50 text-brand-700 text-base font-bold shadow-xl shadow-black/15 transition-all active:scale-[0.98]"
              >
                Começar grátis por 7 dias
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
              </Link>
              <p className="mt-4 text-sm text-white/80">
                Sem cartão de crédito.
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo invisível para o crawler: cobertura de keywords de comparação direta */}
        <p className="sr-only">
          Comparativo entre{" "}
          {PLATFORM_ORDER.map((id) => PLATFORMS[id].name).join(", ")}. Sinais de
          comparação: Hotmart ou Kiwify, Hotmart vs Monetizze, Kiwify ou Braip,
          melhor plataforma de afiliados Brasil 2026, qual plataforma paga mais
          rápido para afiliado, taxas de comissão Hotmart Kiwify Monetizze
          Braip, plataforma com saque mais rápido para afiliado.
        </p>
      </main>

      {/* 9. FOOTER ----------------------------------------------------- */}
      <Footer />

      {/* Comizy callout via link href="/" e href="/#precos" são as âncoras de linkagem interna
          requeridas pra SEO. Estão dentro do LONG_CONTENT (3 ocorrências), no callout do
          quiz, na seção 6, no CTA final e no header (LandingHeader). */}
    </>
  );
}
