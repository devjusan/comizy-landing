import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/core/landing-footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — Comizy",
  description:
    "Saiba como o Comizy coleta, usa e protege seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).",
  alternates: {
    canonical: "https://comizy.com.br/politica-de-privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Política de Privacidade — Comizy",
    description:
      "Saiba como o Comizy coleta, usa e protege seus dados pessoais conforme a LGPD.",
    url: "https://comizy.com.br/politica-de-privacidade",
    siteName: "Comizy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade — Comizy",
    description:
      "Saiba como o Comizy coleta, usa e protege seus dados pessoais conforme a LGPD.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Política de Privacidade — Comizy",
  url: "https://comizy.com.br/politica-de-privacidade",
  description:
    "Política de privacidade do Comizy, descrevendo como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD.",
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

function RightItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
      <span className="shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
        <span className="text-success font-bold text-xs">✓</span>
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

export default function PoliticaDePrivacidade() {
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
              Política de Privacidade
            </h1>
            <p className="text-sm text-text-muted">
              Última atualização: 19 de maio de 2026
            </p>
          </div>

          <div className="rounded-2xl bg-surface border border-border p-6 shadow-sm shadow-brand-500/5">
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              A Comizy (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;) respeita a
              privacidade dos seus usuários e está comprometida em proteger seus
              dados pessoais. Esta Política de Privacidade descreve como
              coletamos, usamos e protegemos suas informações ao utilizar nossa
              plataforma em{" "}
              <a
                href="https://comizy.com.br"
                className="text-brand-600 hover:text-brand-700 underline underline-offset-2 transition"
              >
                comizy.com.br
              </a>
              .
            </p>
          </div>

          <Section number="01" title="Quais dados coletamos">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Coletamos os seguintes dados pessoais:
            </p>
            <ul className="space-y-3">
              <BulletItem>
                Nome e endereço de email no momento do cadastro
              </BulletItem>
              <BulletItem>
                Número de WhatsApp fornecido na lista de espera
              </BulletItem>
              <BulletItem>
                Dados de acesso como endereço IP, navegador e dispositivo
              </BulletItem>
              <BulletItem>
                Dados de transações recebidos via webhook das plataformas
                conectadas (Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz)
              </BulletItem>
              <BulletItem>
                Chaves de autenticação das plataformas integradas, armazenadas
                de forma criptografada
              </BulletItem>
            </ul>
          </Section>

          <Section number="02" title="Como usamos seus dados">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Utilizamos seus dados para:
            </p>
            <ul className="space-y-3">
              <BulletItem>Criar e gerenciar sua conta na plataforma</BulletItem>
              <BulletItem>
                Processar e exibir suas transações e comissões no dashboard
              </BulletItem>
              <BulletItem>
                Enviar comunicações sobre o produto, atualizações e novidades
              </BulletItem>
              <BulletItem>Melhorar a experiência da plataforma</BulletItem>
              <BulletItem>Cumprir obrigações legais</BulletItem>
            </ul>
          </Section>

          <Section number="03" title="Compartilhamento de dados">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Não vendemos seus dados pessoais a terceiros. Podemos compartilhar
              informações apenas com:
            </p>
            <ul className="space-y-3">
              <BulletItem>
                Prestadores de serviço essenciais para o funcionamento da
                plataforma (serviços de hospedagem, processamento de pagamentos)
              </BulletItem>
              <BulletItem>
                Autoridades competentes quando exigido por lei
              </BulletItem>
            </ul>
          </Section>

          <Section number="04" title="Armazenamento e segurança">
            <p className="text-sm text-text-secondary leading-relaxed">
              Seus dados são armazenados em servidores seguros. As chaves de
              autenticação das plataformas são criptografadas com AES-256.
              Adotamos medidas técnicas e organizacionais para proteger suas
              informações contra acesso não autorizado, perda ou alteração.
            </p>
          </Section>

          <Section number="05" title="Retenção de dados">
            <p className="text-sm text-text-secondary leading-relaxed">
              Mantemos seus dados enquanto sua conta estiver ativa. Após o
              encerramento da conta, seus dados serão excluídos em até 30 dias,
              exceto quando a retenção for exigida por lei.
            </p>
          </Section>

          <Section number="06" title="Seus direitos (LGPD)">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018),
              você tem direito a:
            </p>
            <ul className="space-y-3 mb-5">
              <RightItem>
                Confirmar a existência de tratamento dos seus dados
              </RightItem>
              <RightItem>Acessar seus dados pessoais</RightItem>
              <RightItem>
                Corrigir dados incompletos ou desatualizados
              </RightItem>
              <RightItem>Solicitar a exclusão dos seus dados</RightItem>
              <RightItem>Revogar o consentimento a qualquer momento</RightItem>
            </ul>
            <div className="rounded-xl bg-brand-50 border border-brand-100 px-5 py-4">
              <p className="text-sm text-text-secondary">
                Para exercer seus direitos, entre em contato pelo email:{" "}
                <a
                  href="mailto:contato@comizy.com.br"
                  className="font-semibold text-brand-700 hover:text-brand-800 underline underline-offset-2 transition"
                >
                  contato@comizy.com.br
                </a>
              </p>
            </div>
          </Section>

          <Section number="07" title="Cookies">
            <p className="text-sm text-text-secondary leading-relaxed">
              Utilizamos cookies para melhorar a experiência de navegação e para
              fins analíticos. Você pode desativar os cookies nas configurações
              do seu navegador.
            </p>
          </Section>

          <Section number="08" title="Alterações nesta política">
            <p className="text-sm text-text-secondary leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente.
              Notificaremos você sobre mudanças relevantes por email ou por
              aviso na plataforma.
            </p>
          </Section>

          <Section number="09" title="Contato">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Em caso de dúvidas sobre esta política, entre em contato pelo
              email:
            </p>
            <a
              href="mailto:contato@comizy.com.br"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-sm font-semibold text-text-primary hover:border-brand-300 hover:text-brand-700 transition"
            >
              contato@comizy.com.br
            </a>
          </Section>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition"
            >
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
