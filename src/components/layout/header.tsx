import Image from "next/image";
import { Container } from "@/components/layout/container";
import { MobileMenu } from "@/components/layout/mobile-menu";

const navItems = [
  { href: "#ambientes", label: "Ambientes" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#unidades", label: "Unidades" },
  { href: "#contato", label: "Contato" },
];

const ctaHref = "#unidades";
const ctaLabel = "Encontre uma unidade";

// Header starts solid (not transparent-over-hero) since the scroll-reactive
// background swap described in 04-motion-guide.md §37 belongs to the motion
// phase — this static pass must read correctly with zero JavaScript.
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="relative flex h-16 items-center justify-between md:h-20">
          <a href="#inicio" className="shrink-0">
            <Image
              src="/brand/logo-primary.png"
              alt="Moduflexa"
              width={2000}
              height={798}
              priority
              className="h-8 w-auto md:h-10"
            />
          </a>

          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-text hover:text-brand-orange"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={ctaHref}
            className="hidden min-h-12 items-center justify-center rounded-pill bg-brand-orange px-6 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark md:inline-flex"
          >
            {ctaLabel}
          </a>

          <MobileMenu items={navItems} ctaHref={ctaHref} ctaLabel={ctaLabel} />
        </div>
      </Container>
    </header>
  );
}
