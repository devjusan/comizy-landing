import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/core/landing-footer";

export const metadata: Metadata = {
  title: "Termos de Uso — Comizy",
  description:
    "Leia os Termos de Uso do Comizy: regras de uso, planos, responsabilidades e direitos ao utilizar nossa plataforma de dashboard para afiliados.",
  alternates: {
    canonical: "https://comizy.com.br/termos-de-uso",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Termos de Uso — Comizy",
    description:
      "Leia os Termos de Uso do Comizy: regras de uso, planos, responsabilidades e direitos ao utilizar nossa plataforma.",
    url: "https://comizy.com.br/termos-de-uso",
    siteName: "Comizy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Termos de Uso — Comizy",
    description:
      "Leia os Termos de Uso do Comizy: regras de uso, planos, responsabilidades e direitos ao utilizar nossa plataforma.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Termos de Uso — Comizy",
  url: "https://comizy.com.br/termos-de-uso",
  description:
    "Termos de uso do Comizy, plataforma de dashboard de comissões para afiliados digitais.",
  isPartOf: {
    "@type": "WebSite",
    name: "Comizy",
    url: "https://comizy.com.br",
  },
};

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500" />
      <span>{children}</span>
    </li>
  );
}

function ProhibitedItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
      <span className="shrink-0 w-5 h-5 rounded-full bg-danger/10 flex items-center justify-center mt-0.5">
        <span className="text-danger font-bold text-xs">×</span>
      </span>
      <span>{children}</span>
    </li>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border pt-8 mt-8">
      <p className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-1">
        {number}
      </p>
      <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function TermosDeUso() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="flex-1 py-14 px-4 bg-surface-subtle">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 border border-brand-200 mb-4">
              <span className="text-xs font-semibold text-brand-700">
                Documento legal
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-2">
              Termos de Uso
            </h1>
            <p className="text-sm text-text-muted">
              Última atualização: 19 de maio de 2026
            </p>
          </div>

          <div className="rounded-2xl bg-surface border border-border p-6 shadow-sm shadow-brand-500/5">
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Bem-vindo ao Comizy. Ao criar uma conta e utilizar nossa
              plataforma, você concorda com os seguintes Termos de Uso. Leia com
              atenção antes de prosseguir.
            </p>
          </div>

          <Section number="01" title="Sobre o serviço">
            <p className="text-sm text-text-secondary leading-relaxed">
              O Comizy é uma plataforma web que centraliza comissões de afiliado
              de múltiplas plataformas (Hotmart, Kiwify, Monetizze, Braip, Cakto
              e Eduzz) em um único dashboard. O serviço é oferecido mediante
              assinatura mensal ou anual.
            </p>
          </Section>

          <Section number="02" title="Cadastro e conta">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Para utilizar o Comizy você deve:
            </p>
            <ul className="space-y-3">
              <BulletItem>Ter pelo menos 18 anos de idade</BulletItem>
              <BulletItem>
                Fornecer informações verdadeiras no cadastro
              </BulletItem>
              <BulletItem>
                Manter sua senha em sigilo e ser responsável por todas as
                atividades realizadas em sua conta
              </BulletItem>
              <BulletItem>
                Notificar imediatamente em caso de uso não autorizado da sua
                conta
              </BulletItem>
            </ul>
          </Section>

          <Section number="03" title="Uso aceitável">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Você concorda em utilizar o Comizy apenas para fins legítimos. É
              proibido:
            </p>
            <ul className="space-y-3">
              <ProhibitedItem>
                Usar a plataforma para atividades ilegais ou fraudulentas
              </ProhibitedItem>
              <ProhibitedItem>
                Tentar acessar contas de outros usuários
              </ProhibitedItem>
              <ProhibitedItem>
                Realizar engenharia reversa ou copiar o código da plataforma
              </ProhibitedItem>
              <ProhibitedItem>
                Sobrecarregar intencionalmente os servidores da plataforma
              </ProhibitedItem>
            </ul>
          </Section>

          <Section number="04" title="Integrações com plataformas externas">
            <p className="text-sm text-text-secondary leading-relaxed">
              O Comizy se integra a plataformas de afiliados via webhook. Você é
              responsável por configurar corretamente as integrações e por
              garantir que possui autorização para receber os dados
              transmitidos. O Comizy não se responsabiliza por falhas nas
              plataformas externas ou por dados incorretos enviados por elas.
            </p>
          </Section>

          <Section number="05" title="Planos e pagamentos">
            <p className="text-sm text-text-secondary leading-relaxed">
              O acesso ao Comizy é condicionado ao pagamento da assinatura
              escolhida. Os valores vigentes estão disponíveis na página de
              planos. O não pagamento dentro do prazo pode resultar na suspensão
              do acesso. Não realizamos reembolsos proporcionais por
              cancelamento antecipado, exceto nos casos previstos pelo Código de
              Defesa do Consumidor.
            </p>
          </Section>

          <Section number="06" title="Disponibilidade do serviço">
            <p className="text-sm text-text-secondary leading-relaxed">
              Nos esforçamos para manter o Comizy disponível 24 horas por dia, 7
              dias por semana. No entanto, não garantimos disponibilidade
              ininterrupta. Podemos realizar manutenções programadas com aviso
              prévio sempre que possível.
            </p>
          </Section>

          <Section number="07" title="Limitação de responsabilidade">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              O Comizy não se responsabiliza por:
            </p>
            <ul className="space-y-3">
              <BulletItem>
                Perdas financeiras decorrentes de dados incorretos recebidos das
                plataformas integradas
              </BulletItem>
              <BulletItem>Indisponibilidade temporária do serviço</BulletItem>
              <BulletItem>
                Ações ou omissões de plataformas de afiliados terceiras
              </BulletItem>
            </ul>
          </Section>

          <Section number="08" title="Propriedade intelectual">
            <p className="text-sm text-text-secondary leading-relaxed">
              Todo o conteúdo da plataforma, incluindo código, design, marca e
              textos, é de propriedade exclusiva do Comizy. É proibida a
              reprodução sem autorização expressa.
            </p>
          </Section>

          <Section number="09" title="Encerramento da conta">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Você pode encerrar sua conta a qualquer momento entrando em
              contato pelo email:
            </p>
            <a
              href="mailto:contato@comizy.com.br"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-sm font-semibold text-text-primary hover:border-brand-300 hover:text-brand-700 transition"
            >
              contato@comizy.com.br
            </a>
            <p className="text-sm text-text-secondary leading-relaxed mt-4">
              Reservamos o direito de suspender ou encerrar contas que violem
              estes Termos de Uso.
            </p>
          </Section>

          <Section number="10" title="Alterações nos termos">
            <p className="text-sm text-text-secondary leading-relaxed">
              Podemos atualizar estes Termos de Uso a qualquer momento. Você
              será notificado por email sobre mudanças relevantes. O uso
              continuado da plataforma após as alterações implica na aceitação
              dos novos termos.
            </p>
          </Section>

          <Section number="11" title="Lei aplicável">
            <p className="text-sm text-text-secondary leading-relaxed">
              Estes Termos de Uso são regidos pelas leis brasileiras. Fica
              eleito o foro da comarca de Praia Grande, Estado de São Paulo,
              para dirimir quaisquer controvérsias.
            </p>
          </Section>

          <Section number="12" title="Contato">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Para dúvidas sobre estes termos, entre em contato pelo email:
            </p>
            <a
              href="mailto:contato@comizy.com.br"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-sm font-semibold text-text-primary hover:border-brand-300 hover:text-brand-700 transition"
            >
              contato@comizy.com.br
            </a>
          </Section>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition"
            >
              ← Voltar para o início
            </Link>
            <span className="hidden sm:block text-text-muted text-xs">·</span>
            <Link
              href="/politica-de-privacidade"
              className="text-sm text-text-muted hover:text-text-secondary transition"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
