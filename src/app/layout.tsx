import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Poppins, Jost } from "next/font/google";
import { crmScript, siteConfig } from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${jost.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        {children}

        {/* Sem JavaScript, os estados "esperando animar" (hero, reveals,
            estado aberto do antes/depois, palavras do manifesto) nunca
            seriam atualizados pelos hooks de motion — forçamos aqui o
            estado final visível para que nenhum conteúdo dependa de JS
            para existir (05-seo-performance.md §86, 07-development-rules.md
            §44 e §122). Com JS ativo, o navegador ignora este bloco. */}
        <noscript>
          <style>{`
            [data-hero-anim],
            [data-reveal] {
              opacity: 1 !important;
              transform: none !important;
            }
            [data-before-after-open] {
              clip-path: none !important;
            }
            [data-kinetic-word] {
              color: var(--color-brand-navy) !important;
            }
          `}</style>
        </noscript>

        {/* Captura do formulário de contato para o CRM do cliente —
            design_handoff_moduflexa_onepage/README.md, pendência #1. */}
        <Script
          src={crmScript.src}
          data-client-id={crmScript.clientId}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
