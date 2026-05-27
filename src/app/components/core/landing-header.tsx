"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/logo";

interface Tool {
  href: string;
  label: string;
  description: string;
  external?: boolean;
}

const TOOLS: Tool[] = [
  {
    href: "/comparar",
    label: "Comparar plataformas",
    description:
      "Hotmart, Kiwify, Monetizze ou Braip: descubra qual encaixa melhor no seu perfil em 2 minutos.",
  },
];

const NAV_LINKS = [
  { href: "/#funcionalidades", label: "Funcionalidades" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#precos", label: "Preços" },
  { href: "/#faq", label: "FAQ" },
];

const SIGNUP_URL = "https://app.comizy.com.br/signup";
const LOGIN_URL = "https://app.comizy.com.br/login";

const MenuIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/**
 * Dropdown de Ferramentas no desktop.
 * Abre por hover OU por foco no botão. Fecha com delay quando o cursor sai,
 * o que evita fechamento acidental ao atravessar o gap entre botão e painel.
 * Escape fecha e devolve o foco ao botão.
 */
function ToolsDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={(e) => {
        // Fecha apenas quando o foco sai por completo do container
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors duration-150 cursor-pointer"
      >
        Ferramentas
        <ChevronDown open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            role="menu"
            aria-label="Ferramentas Comizy"
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
          >
            {/* Ponte invisível pra evitar gap-hover que fecha o menu */}
            <div className="absolute -top-1 left-0 right-0 h-3" aria-hidden />

            <div className="w-90 rounded-2xl bg-surface border border-border shadow-xl shadow-black/8 p-2.5">
              <p className="px-3 pt-2 pb-2.5 text-[11px] uppercase tracking-[0.14em] font-bold text-text-muted">
                Explore Ferramentas
              </p>
              <ul className="flex flex-col gap-1">
                {TOOLS.map((tool) => (
                  <li key={tool.href}>
                    <Link
                      href={tool.href}
                      role="menuitem"
                      target={tool.external ? "_blank" : undefined}
                      rel={tool.external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-surface-amber transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-text-primary group-hover:text-brand-700 transition-colors">
                            {tool.label}
                          </span>
                          <span className="text-text-muted group-hover:text-brand-600 transition-colors">
                            <ArrowUpRight />
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-text-secondary leading-snug">
                          {tool.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-md border-b border-border/60 shadow-sm shadow-black/3"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Comizy — página inicial"
          >
            <Logo />
          </Link>

          <nav
            className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Navegação principal"
          >
            <ToolsDropdown />
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3.5 py-1.5 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={LOGIN_URL}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
            >
              Entrar
            </a>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-sm shadow-brand-500/20 hover:shadow-md hover:shadow-brand-500/30 active:scale-[0.98]"
            >
              Criar conta grátis
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-text-primary hover:bg-surface-muted transition-colors"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-text-primary/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Menu mobile"
              className="absolute top-16 left-0 right-0 bg-surface border-b border-border shadow-xl"
            >
              <ul className="flex flex-col px-4 py-3 gap-0.5">
                {/* Ferramentas como accordion no mobile */}
                <li>
                  <button
                    type="button"
                    onClick={() => setMobileToolsOpen((v) => !v)}
                    aria-expanded={mobileToolsOpen}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors cursor-pointer"
                  >
                    Ferramentas
                    <ChevronDown open={mobileToolsOpen} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileToolsOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden pl-3"
                      >
                        {TOOLS.map((tool) => (
                          <li key={tool.href} className="pt-1">
                            <Link
                              href={tool.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileToolsOpen(false);
                              }}
                              className="block px-3 py-3 rounded-lg hover:bg-surface-amber transition-colors"
                            >
                              <span className="text-sm font-bold text-text-primary">
                                {tool.label}
                              </span>
                              <span className="block mt-0.5 text-xs text-text-secondary leading-snug">
                                {tool.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 pb-5 pt-3 border-t border-border space-y-2">
                <a
                  href={LOGIN_URL}
                  className="block text-center w-full py-3 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface-muted transition-colors"
                >
                  Entrar
                </a>
                <a
                  href={SIGNUP_URL}
                  className="block text-center w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
                >
                  Criar conta grátis
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16" aria-hidden />
    </>
  );
}
