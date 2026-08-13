import Image from "next/image";
import { Container } from "@/components/layout/container";
import { stores } from "@/data/stores";

const navItems = [
  { href: "#ambientes", label: "Ambientes" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#unidades", label: "Unidades" },
  { href: "#contato", label: "Contato" },
];

// Social links and a privacy-policy page are omitted, not stubbed: neither
// is confirmed, and a one-page MVP shouldn't link to a page that doesn't
// exist (07-development-rules.md §92).
export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <Container>
        <div className="flex flex-col gap-10 py-12 md:flex-row md:justify-between md:py-16">
          <div className="flex flex-col gap-4">
            <Image
              src="/brand/logo-light.png"
              alt="Moduflexa"
              width={2000}
              height={798}
              className="h-8 w-auto"
            />
            <p className="max-w-[32ch] text-sm">
              Móveis flexíveis para espaços que mudam com você.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-bold text-white">Unidades</span>
            {stores.map((store) => (
              <a key={store.id} href="#unidades" className="hover:text-white">
                {store.name} — {store.city}/{store.state}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs">
          © {new Date().getFullYear()} Moduflexa. Todos os direitos
          reservados.
        </div>
      </Container>
    </footer>
  );
}
