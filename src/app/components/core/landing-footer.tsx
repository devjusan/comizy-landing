import Link from "next/link";
import Image from "next/image";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden
    >
      <path d="M18.244 2H21l-6.522 7.448L22 22h-6.846l-4.79-6.262L4.8 22H2l7.046-8.05L2 2h6.96l4.36 5.77L18.245 2zm-1.2 18.4h1.74L7.04 3.512H5.18l11.864 16.888z" />
    </svg>
  );
}

const productLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/termos-de-uso", label: "Termos de Uso" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
];

const socials = [
  {
    href: "https://instagram.com/comizy.com.br",
    label: "Instagram @comizy.com.br",
    icon: <InstagramIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#111] text-white">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-brand-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-1.5 mb-4">
              <Image
                src="/logo.png"
                alt="Comizy"
                width={26}
                height={26}
                className="shrink-0"
              />
              <span className="text-xl font-bold text-white">
                comiz<span className="text-brand-400">y</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Todas as suas comissões em um só lugar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Produto</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Social</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2065 Comizy. Todos os direitos reservados.</span>
          <span>Feito com ♥ no Brasil.</span>
        </div>
      </div>
    </footer>
  );
}
