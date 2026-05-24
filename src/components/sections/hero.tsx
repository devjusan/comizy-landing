"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const SIGNUP_URL = "https://app.comizy.com.br/signup";
const LOGIN_URL = "https://app.comizy.com.br/login";

const platforms = [
  { name: "Hotmart", src: "/hotmart.png" },
  { name: "Kiwify", src: "/kiwify.png" },
  { name: "Monetizze", src: "/monetizze.png" },
  { name: "Braip", src: "/braip.png" },
  { name: "Cakto", src: "/cakto.png" },
  { name: "Eduzz", src: "/eduzz.png" },
];

const sales = [
  { platform: "Hotmart", amount: "297,00", src: "/hotmart.png" },
  { platform: "Kiwify", amount: "197,00", src: "/kiwify.png" },
  { platform: "Cakto", amount: "497,00", src: "/cakto.png" },
  { platform: "Eduzz", amount: "147,00", src: "/eduzz.png" },
  { platform: "Monetizze", amount: "89,90", src: "/monetizze.png" },
];

function LockSmall() {
  return (
    <svg
      className="w-3 h-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function ArrowRight() {
  return (
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
  );
}

function PlatformLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 shrink-0">
      <div className="w-9 h-9 rounded-xl bg-surface border border-border shadow-sm flex items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>
      <span className="text-sm font-semibold text-text-secondary tracking-tight">
        {name}
      </span>
    </div>
  );
}

export default function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  const [saleIdx, setSaleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSaleIdx((i) => (i + 1) % sales.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const rotateX = useTransform(srx, (v) => `${v}deg`);
  const rotateY = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (r.width / 2);
    const dy = (e.clientY - cy) / (r.height / 2);
    ry.set(Math.max(-8, Math.min(8, dx * 8)));
    rx.set(Math.max(-8, Math.min(8, -dy * 8)));
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section className="relative isolate overflow-hidden pt-20 sm:pt-28 pb-20 sm:pb-28">
      {/* Radial top gradient */}
      <div
        className="absolute inset-x-0 top-0 h-150 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #FEF3C7 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Floating orbs */}
      <div
        className="absolute top-32 left-[15%] w-80 h-80 rounded-full bg-brand-400/15 blur-3xl pointer-events-none -z-10 animate-orb"
        aria-hidden
      />
      <div
        className="absolute top-40 right-[10%] w-90 h-90 rounded-full bg-orange-400/15 blur-3xl pointer-events-none -z-10 animate-orb-2"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-7"
        >
          <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-surface border border-brand-200 animate-pulse-ring">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-xs">
              🚀
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-700">
              Comece agora!
            </span>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-center font-extrabold tracking-tight text-text-primary text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05] max-w-4xl mx-auto"
        >
          Todas as suas{" "}
          <span className="bg-linear-to-r from-brand-500 to-orange-400 bg-clip-text text-transparent">
            comissões de afiliado
          </span>{" "}
          em um só lugar.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-center text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Pare de abrir Hotmart, Kiwify, Monetizze e mais 3 abas. O Comizy
          conecta tudo via webhook e mostra cada venda em tempo real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
        >
          <a
            href={SIGNUP_URL}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-base font-semibold shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 transition-all active:scale-[0.98]"
          >
            Criar conta — é grátis para começar
            <span className="transition-transform group-hover:translate-x-0.5">
              <ArrowRight />
            </span>
          </a>
          <a
            href={LOGIN_URL}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Já tenho conta →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-center text-xs sm:text-sm text-text-muted"
        >
          Sem cartão de crédito. Configure em 2 minutos.
        </motion.p>

        {/* Platforms marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16"
        >
          <p className="text-center text-xs uppercase tracking-[0.18em] text-text-muted mb-5 font-semibold">
            Integra com
          </p>
          <div className="marquee-fade overflow-hidden">
            <div className="flex animate-marquee">
              {[...platforms, ...platforms, ...platforms].map((p, i) => (
                <PlatformLogo key={`${p.name}-${i}`} {...p} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-14 sm:mt-20 relative"
          style={{ perspective: 1800 }}
          ref={tiltRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl shadow-brand-500/15 animate-float will-change-transform"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center h-9 px-3.5 bg-[#F4F2EE] border-b border-border">
              <div className="flex items-center gap-1.5 shrink-0">
                <span
                  className="w-3 h-3 rounded-full bg-[#FF5F57]"
                  aria-hidden
                />
                <span
                  className="w-3 h-3 rounded-full bg-[#FEBC2E]"
                  aria-hidden
                />
                <span
                  className="w-3 h-3 rounded-full bg-[#28C840]"
                  aria-hidden
                />
              </div>
              <div className="flex-1 flex justify-center px-3 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-border text-[11px] text-text-muted max-w-xs">
                  <LockSmall />
                  <span className="truncate">
                    app.comizy.com.br/dashboard
                  </span>
                </div>
              </div>
              <div className="w-12 shrink-0" aria-hidden />
            </div>

            <Image
              src="/dashboard.png"
              alt="Dashboard Comizy — comissões unificadas de todas as plataformas"
              width={2400}
              height={1500}
              className="w-full h-auto"
              priority
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, transparent 40%, rgba(245,158,11,0.06) 100%)",
              }}
              aria-hidden
            />
          </motion.div>

          {/* Floating "Nova venda" notification */}
          <div className="absolute right-2 sm:-right-6 top-16 sm:top-24 z-10 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={saleIdx}
                initial={{ opacity: 0, x: 28, y: -8, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 28, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 bg-white/95 backdrop-blur rounded-xl border border-border shadow-xl shadow-brand-500/15 px-3.5 py-2.5 min-w-52.5"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-amber border border-brand-100 flex items-center justify-center shrink-0">
                  <Image
                    src={sales[saleIdx].src}
                    alt={sales[saleIdx].platform}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-wide font-bold text-success flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Nova venda
                  </p>
                  <p className="text-[11px] text-text-secondary font-medium truncate">
                    {sales[saleIdx].platform}
                  </p>
                  <p className="text-sm font-extrabold text-text-primary tabular-nums">
                    + R$ {sales[saleIdx].amount}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="absolute -bottom-8 left-[10%] right-[10%] h-12 rounded-full bg-brand-500/20 blur-3xl -z-10"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
