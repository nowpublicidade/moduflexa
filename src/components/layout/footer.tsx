import Image from "next/image";
import { Container } from "@/components/layout/container";
import { buildWhatsappHref, stores } from "@/data/stores";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "#ambientes", label: "Ambientes" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#produtos", label: "Produtos" },
  { href: "#unidades", label: "Unidades" },
  { href: "#contato", label: "Contato" },
];

const store = stores[0];

// README §15. Instagram e política de privacidade — antes [TBD], agora
// resolvidos: @moduflexa confirmado pelo cliente; a política é um rascunho
// nosso (ver /politica-de-privacidade), recomendo revisão jurídica antes
// do lançamento oficial.
export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/75">
      <Container>
        <div
          className="grid py-16 md:py-20"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(32px,4vw,64px)",
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="relative h-[30px] w-[180px]">
              <Image
                src="/brand/logo-light.png"
                alt="Moduflexa"
                fill
                sizes="180px"
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-[32ch] text-sm">
              Móveis flexíveis para espaços que mudam com você.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
              Navegação
            </span>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
              Unidade
            </span>
            <span className="text-sm">
              {store.name} — {store.city}/{store.state}
            </span>
            {store.whatsapp ? (
              <a
                href={buildWhatsappHref(store.whatsapp)}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-white"
              >
                WhatsApp (11) 93623-3568
              </a>
            ) : null}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
              Redes
            </span>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:text-white"
            >
              Instagram
            </a>
            <a href="/politica-de-privacidade" className="text-sm hover:text-white">
              Política de privacidade
            </a>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 border-t py-6 text-[12px]"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <span>© 2026 Moduflexa. Todos os direitos reservados.</span>
          <span className="tracking-[0.1em] text-white/40 uppercase">
            A cama levanta com você.
          </span>
        </div>
      </Container>
    </footer>
  );
}
