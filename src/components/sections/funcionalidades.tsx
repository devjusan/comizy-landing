"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const platforms = [
  { name: "Hotmart", src: "/hotmart.png" },
  { name: "Kiwify", src: "/kiwify.png" },
  { name: "Monetizze", src: "/monetizze.png" },
  { name: "Braip", src: "/braip.png" },
  { name: "Cakto", src: "/cakto.png" },
  { name: "Eduzz", src: "/eduzz.png" },
];

function MiniChart() {
  const bars = [38, 56, 44, 72, 60, 90, 78];
  return (
    <motion.svg
      viewBox="0 0 220 80"
      className="w-full h-16"
      role="img"
      aria-label="Mini gráfico de barras"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.09, delayChildren: 0.15 },
        },
      }}
    >
      <defs>
        <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={i * 32 + 4}
          width="22"
          rx="3"
          fill="url(#bar-gradient)"
          opacity={0.55 + (i / bars.length) * 0.45}
          variants={{
            hidden: { height: 0, y: 80 },
            visible: { height: h, y: 80 - h },
          }}
          transition={{ duration: 0.7, ease: easeOut }}
        />
      ))}
    </motion.svg>
  );
}

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="w-5 h-5"
      aria-hidden
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden
    >
      <polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3" />
    </svg>
  );
}

function FeatureCard({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: easeOut, delay }}
      className={cn(
        "group rounded-2xl border border-brand-100 bg-surface p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

function FeatureBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 text-brand-600 mb-4">
      {children}
    </div>
  );
}

export default function Funcionalidades() {
  return (
    <section
      id="funcionalidades"
      className="bg-[#FFF8E7] py-20 sm:py-28 px-5 md:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-brand-600 font-semibold mb-3">
            Funcionalidades
          </p>
          <h2 className="font-extrabold tracking-tight text-text-primary text-3xl sm:text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Tudo que você precisa. Nada que você não precisa.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto] md:grid-rows-2 gap-5">
          {/* Big card — Dashboard unificado */}
          <FeatureCard className="md:col-span-2 md:row-span-1" delay={0}>
            <FeatureBadge>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden
              >
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
            </FeatureBadge>
            <h3 className="font-bold text-text-primary text-xl mb-1.5">
              Dashboard unificado
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              Hoje, mês, aprovadas, recusadas, reembolsos — todas as métricas no
              mesmo lugar, atualizadas em tempo real.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="rounded-xl bg-surface-amber border border-brand-100 p-3">
                <p className="text-[10px] uppercase tracking-wide text-text-muted font-semibold">
                  Hoje
                </p>
                <p className="mt-1 text-lg font-extrabold text-text-primary tabular-nums">
                  R$ 1.284
                </p>
              </div>
              <div className="rounded-xl bg-surface-amber border border-brand-100 p-3">
                <p className="text-[10px] uppercase tracking-wide text-text-muted font-semibold">
                  Mês
                </p>
                <p className="mt-1 text-lg font-extrabold text-text-primary tabular-nums">
                  R$ 38.910
                </p>
              </div>
              <div className="rounded-xl bg-surface-amber border border-brand-100 p-3">
                <p className="text-[10px] uppercase tracking-wide text-text-muted font-semibold">
                  Aprovadas
                </p>
                <p className="mt-1 text-lg font-extrabold text-text-primary tabular-nums">
                  127
                </p>
              </div>
            </div>
            <MiniChart />
          </FeatureCard>

          {/* Medium card — Filtros por plataforma */}
          <FeatureCard delay={0.1}>
            <FeatureBadge>
              <FilterIcon />
            </FeatureBadge>
            <h3 className="font-bold text-text-primary text-lg mb-1.5">
              Filtros por plataforma e período
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              Recorte os dados como quiser. Por plataforma, dia, semana, mês.
            </p>
            <motion.div
              className="grid grid-cols-3 gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
              }}
            >
              {platforms.map((p) => (
                <motion.div
                  key={p.name}
                  className="aspect-square rounded-lg bg-surface-amber border border-brand-100 flex items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 12 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: easeOut }}
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </FeatureCard>

          {/* Medium card — Exportar CSV */}
          <FeatureCard delay={0.15}>
            <FeatureBadge>
              <DownloadIcon />
            </FeatureBadge>
            <h3 className="font-bold text-text-primary text-lg mb-1.5">
              Exportar CSV com um clique
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Mande os dados pro seu contador, pra sua planilha ou pra onde
              quiser.
            </p>
            <div className="rounded-xl bg-surface-amber border border-brand-100 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-text-secondary text-sm font-medium">
                <span className="w-7 h-7 rounded bg-success/10 text-success flex items-center justify-center text-xs font-bold">
                  CSV
                </span>
                vendas-2026.csv
              </div>
              <span className="text-text-muted text-xs">2.4 MB</span>
            </div>
          </FeatureCard>

          {/* Small card — Webhook em tempo real */}
          <FeatureCard delay={0.2}>
            <FeatureBadge>
              <BoltIcon />
            </FeatureBadge>
            <h3 className="font-bold text-text-primary text-lg mb-1.5">
              Webhook em tempo real
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Cada venda chega em segundos no seu dashboard. Sem refresh, sem
              espera.
            </p>
          </FeatureCard>

          {/* Small card — Histórico completo */}
          <FeatureCard delay={0.25}>
            <FeatureBadge>
              <ListIcon />
            </FeatureBadge>
            <h3 className="font-bold text-text-primary text-lg mb-1.5">
              Histórico completo de transações
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Vendas, recusas, reembolsos e estornos — tudo registrado para
              consulta a qualquer momento.
            </p>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
