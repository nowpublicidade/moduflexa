import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${siteConfig.name}`,
  description: "Como a Moduflexa coleta, usa e protege seus dados pessoais.",
};

const store = stores[0];

// Rascunho gerado a pedido do cliente (design_handoff_moduflexa_onepage/
// README.md, pendência #2 — "Instagram e política de privacidade... [TBD]").
// Usa só dados de negócio já confirmados (nome, endereço, canais de
// contato) e a descrição real do que o site coleta (formulário de
// contato + script de CRM). Não inclui CNPJ, encarregado de dados (DPO)
// nem outros itens que exigem informação jurídica que não temos —
// recomendo revisão por advogado antes de publicar oficialmente.
export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        <Container>
          <div
            className="mx-auto flex max-w-[70ch] flex-col gap-8"
            style={{ paddingBlock: "calc(var(--section-padding-y) + 84px)" }}
          >
            <div className="flex flex-col gap-3">
              <h1 className="font-heading text-3xl font-medium text-brand-navy md:text-5xl">
                Política de Privacidade
              </h1>
              <p className="text-sm text-text-tertiary">
                Última atualização: agosto de 2026.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-[16px] leading-relaxed font-light text-text-body">
              <p>
                Esta política explica como a {store.name} coleta, usa e
                protege os dados pessoais de quem visita este site ou entra
                em contato pelos canais informados aqui, em conformidade com
                a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>

              <section className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-medium text-brand-navy">
                  Quais dados coletamos
                </h2>
                <p>
                  Ao preencher o formulário de contato deste site, coletamos
                  nome, WhatsApp, cidade e a mensagem enviada. Esses dados são
                  capturados também por uma ferramenta de CRM utilizada pela
                  Moduflexa para organizar o atendimento comercial.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-medium text-brand-navy">
                  Para que usamos esses dados
                </h2>
                <p>
                  Usamos os dados exclusivamente para responder à sua
                  solicitação, apresentar soluções da Moduflexa e manter
                  contato comercial, quando você autorizar. Não vendemos nem
                  compartilhamos seus dados com terceiros para fins de
                  publicidade de outras empresas.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-medium text-brand-navy">
                  Cookies e ferramentas de terceiros
                </h2>
                <p>
                  Este site pode utilizar ferramentas de análise e um script
                  de CRM para registrar os contatos recebidos pelo
                  formulário. Nenhum desses recursos é usado para venda de
                  dados a terceiros.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-medium text-brand-navy">
                  Seus direitos
                </h2>
                <p>
                  Você pode solicitar a qualquer momento a confirmação, o
                  acesso, a correção ou a exclusão dos seus dados pessoais
                  mantidos pela Moduflexa, entrando em contato pelos canais
                  abaixo.
                </p>
              </section>

              <section className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-medium text-brand-navy">
                  Contato
                </h2>
                <p>
                  {store.name} — {store.neighborhood}, {store.city}/
                  {store.state}
                  {store.address ? <><br />{store.address}</> : null}
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
