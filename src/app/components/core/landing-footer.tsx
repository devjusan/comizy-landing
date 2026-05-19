import Link from "next/link";
import Logo from "@/app/logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Logo />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Centralize todas as suas comissões de afiliado em um único
              dashboard.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-text-primary mb-4">
              Produto
            </h4>
            <div className="space-y-2.5 text-sm text-text-secondary">
              <Link
                href="/#como-funciona"
                className="block hover:text-text-primary transition"
              >
                Como funciona
              </Link>
              <Link
                href="/#precos"
                className="block hover:text-text-primary transition"
              >
                Preços
              </Link>
              <Link
                href="/#faq"
                className="block hover:text-text-primary transition"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-text-primary mb-4">Legal</h4>
            <div className="space-y-2.5 text-sm text-text-secondary">
              <Link
                href="/politica-de-privacidade"
                className="block hover:text-text-primary transition"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="block hover:text-text-primary transition"
              >
                Termos de Uso
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-text-primary mb-4">
              Contato
            </h4>
            <div className="space-y-2.5 text-sm text-text-secondary">
              <a
                href="mailto:contato@comizy.com.br"
                className="block hover:text-text-primary transition"
              >
                contato@comizy.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
          <span>
            © {new Date().getFullYear()} Comizy. Todos os direitos reservados.
          </span>
          <span>Feito com ♥ no Brasil</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
