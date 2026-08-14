import { Header } from "@/components/layout/header";
import { FloorRail } from "@/components/layout/floor-rail";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { Floor01 } from "@/components/sections/floor-01";
import { Floor02 } from "@/components/sections/floor-02";
import { Floor03 } from "@/components/sections/floor-03";
import { Floor04 } from "@/components/sections/floor-04";
import { Floor05 } from "@/components/sections/floor-05";
import { BrandStatement } from "@/components/sections/brand-statement";
import { Solutions } from "@/components/sections/solutions";
import { Products } from "@/components/sections/products";
import { Stores } from "@/components/sections/stores";
import { Contact } from "@/components/sections/contact";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { stores } from "@/data/stores";

export default function Home() {
  const store = stores[0];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-pill focus:bg-brand-navy focus:px-6 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <FloorRail />
      <main id="main-content">
        <Hero />
        <Introduction />
        <Floor01 />
        <Floor02 />
        <Floor03 />
        <Floor04 />
        <Floor05 />
        <BrandStatement />
        <Solutions />
        <Products />
        <Stores />
        <Contact />
      </main>
      <Footer />
      {store.whatsapp ? <WhatsappButton whatsapp={store.whatsapp} /> : null}
    </>
  );
}
