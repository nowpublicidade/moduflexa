# Handoff: Redesign da one-page Moduflexa

## Overview

Redesign completo da landing page da Moduflexa (móveis retráteis / camas de parede, São Paulo). É uma one-page em português do Brasil que leva o visitante de uma promessa ("o espaço da sua casa pode fazer muito mais") por cinco demonstrações de ambientes que se transformam, até o catálogo de produtos, a unidade física em Perdizes e o contato por WhatsApp/formulário.

O repositório de origem é `nowpublicidade/moduflexa` (Next.js + TypeScript, branch `main`) — ver `github.md` na raiz do projeto de design. O redesign reaproveita a copy e as fotos que já existem no repo (`src/data/floors.ts`, `public/floors/*`) e acrescenta seções novas (Produtos), dados reais da unidade e uma camada de movimento.

## About the Design Files

Os arquivos deste pacote são **referências de design feitas em HTML** — protótipos que mostram aparência e comportamento pretendidos, **não código de produção para copiar**. A tarefa é **recriar estes designs no ambiente do codebase de destino** (no caso, o Next.js + React + TypeScript de `nowpublicidade/moduflexa`), usando os padrões e bibliotecas já estabelecidos lá: componentes em `src/components/sections/*`, tokens em `src/styles/tokens.css`, dados em `src/data/*`.

Os arquivos `.dc.html` rodam num runtime próprio de prototipagem (`support.js`, atributos `ref="{{ }}"`, `style-hover`, classe `Component extends DCLogic`). Nada disso deve ir para produção — traduza:

- `style-hover="..."` → estados `:hover` no CSS/Tailwind do projeto.
- `ref="{{ nome }}"` + `renderVals()` → `useRef` / `useState` / `useEffect` em componentes React.
- `onClick="{{ handler }}"` → props normais de evento em JSX.
- Estilos inline extensos → o sistema de estilo do repo (o repo atual usa CSS com custom properties em `tokens.css`).

## Fidelity

**High-fidelity.** Cores, tipografia, espaçamentos, animações e copy são finais. Recrie fielmente. Todas as medidas abaixo são os valores reais usados no protótipo.

## Design Tokens

### Cores

| Token | Hex | Uso |
| --- | --- | --- |
| Navy (marca) | `#152a46` | Títulos, seções escuras, footer, bordas de botão secundário |
| Navy escuro | `#0f1f34` | Fundo atrás de imagens |
| Laranja (acento) | `#fa6b09` | CTA primário, numerais, eyebrows, linha divisória do before/after |
| Laranja hover | `#d74e01` | Hover do CTA primário e de links |
| Off-white (fundo A) | `#f7f5f2` | Fundo padrão do body e de seções alternadas |
| Branco (fundo B) | `#ffffff` | Seções alternadas |
| Creme (produtos) | `#faf5ee` | Fundo dos quadros de foto de produto (combina com o fundo das fotos) |
| Cinza claro | `#e8e5e0` | Placeholder de imagem carregando |
| Texto corpo | `#3f4a55` / `#4a5560` | Parágrafos |
| Texto terciário | `#66707a` / `#7b8590` | Legendas, rótulos secundários |
| Texto base | `#18212a` | `color` do body |
| WhatsApp | `#25d366` | Botão flutuante |
| Hairlines | `rgba(21,42,70,0.08)` / `0.10` / `0.12` / `0.14` | Bordas e divisores de 1px |
| Véu sobre foto | `linear-gradient(180deg, rgba(21,42,70,0.58) 0%, rgba(21,42,70,0.44) 32%, rgba(21,42,70,0.42) 55%, rgba(21,42,70,0.9) 100%)` | Hero |

### Tipografia

Duas famílias do Google Fonts:

- **Poppins** (400/500/600/700) — títulos, rótulos, botões, numerais.
- **Jost** (300/400/500) — corpo de texto, campos de formulário. É a `font-family` do container raiz.

Escala (todos com `clamp()` para fluidez):

| Elemento | font-size | weight | line-height | letter-spacing |
| --- | --- | --- | --- | --- |
| H1 hero | `clamp(40px,5.6vw,92px)` | 600 | 1.02 | -0.035em |
| H2 seção | `clamp(30px,3.8vw,56px)` | 500 | 1.05–1.06 | -0.025em |
| H2 andar | `clamp(30px,3.4vw,50px)` | 500 | 1.06 | -0.025em |
| H2 síntese | `clamp(34px,4.6vw,72px)` | 500 | 1.06 | -0.03em |
| H2 andar 05 | `clamp(32px,4.2vw,64px)` | 600 | 1.02 | -0.03em |
| H3 card | `clamp(20px,1.8vw,26px)` | 500 | 1.2 | -0.02em |
| Lead / intro | `clamp(17px,1.35vw,21px)` | 300 | 1.75 | — |
| Corpo | `clamp(16px,1.25vw,19px)` | 300 | 1.7 | — |
| Corpo card | 15–16px | 300 | 1.6–1.65 | — |
| Eyebrow / rótulo | 10–12px | 600 | — | 0.14em–0.24em, `uppercase` |
| Numeral gigante (01–05) | `clamp(110px,14vw,210px)` | 700 | 0.8 | -0.045em |
| Numeral menor (03, 05) | `clamp(64px,8vw,132px)` | 700 | 0.78 | -0.05em |
| Numeral card solução | 44px | 700 | 1 | -0.04em |
| Nav / botão | 13–14px | 500/600 | — | 0.04em (nav) |

Os numerais de andar usam **contorno**, não preenchimento: `color: transparent; -webkit-text-stroke: 1px rgba(250,107,9,0.55)`. No andar 05 (sobre foto escura) são preenchidos em `#fa6b09`.

### Espaçamento e layout

- Container: `max-width: 1440px; margin-inline: auto`.
- Padding lateral: `clamp(20px,4vw,48px)`.
- Padding vertical de seção: `clamp(72px,9vw,140px)`; seções de respiro (síntese) `clamp(96px,14vw,200px)`.
- Grids: sempre `repeat(auto-fit, minmax(Xpx,1fr))` com `gap: clamp(...)` — **não há media queries**; o layout colapsa sozinho. `minmax` usado: 320px (duas colunas de conteúdo), 300px (cards de solução), 260px (cards de produto e imagens do andar 04), 220px (colunas do footer), 180px (endereço/horário).
- Raio de borda: **zero em tudo**, exceto botões/pílulas (`border-radius: 999px`) — decisão editorial deliberada; não introduza cantos arredondados em cards ou imagens.
- Altura mínima de alvo de toque: 44px (nav) / 48–54px (botões).
- Bordas: sempre 1px, na cor de hairline correspondente.
- Sem `box-shadow` no layout; apenas no botão flutuante do WhatsApp e no glow da linha divisória.

## Screens / Views

A página é uma coluna única de seções, nesta ordem. Cada `<section>` do protótipo tem `data-screen-label` para referência.

### 1. Header fixo (fora das seções)

`position: fixed; top:0; z-index:60`, altura `clamp(68px,8vw,84px)`, container padrão, `display:flex; justify-content:space-between`.

- **Logo**: dois PNGs empilhados no mesmo espaço (`public/brand/logo-light.png` e `logo-primary.png`), altura `clamp(24px,2.6vw,30px)`, cross-fade de `opacity` em 0.45s.
- **Nav**: Ambientes · Soluções · Produtos · Unidades · Contato + botão-pílula "Encontre uma unidade" (borda 1px, `min-height:44px`, `padding: 0 20px`). Hover: cor → `#fa6b09`; no botão, preenche de laranja com texto branco.
- **Dois estados**, alternados por scroll (limiar: `scrollY > alturaDoHero - 120`):
  - *Sobre o hero*: fundo transparente, borda transparente, texto `rgba(255,255,255,0.9)`, logo claro.
  - *Depois do hero*: fundo `rgba(247,245,242,0.94)`, borda inferior `rgba(21,42,70,0.1)`, texto `#152a46`, logo original. Transição 0.55s ease.
- **Véu superior** (`div` separado, `position:fixed`, altura 160px, `z-index:55`, `pointer-events:none`): gradiente navy 0.62→0 que garante legibilidade do header sobre a foto; sua opacidade vai a 0 quando o header fica sólido.

### 2. Rail de andares (fora das seções)

`position:fixed; right:clamp(16px,2vw,32px); top:50%; translateY(-50%); z-index:58`. Coluna com `gap:18px` de cinco links (`#floor-01`…`#floor-05`). Cada item: rótulo textual (9px, uppercase, `#152a46`, oculto por padrão), o número (10px, 600, `letter-spacing:0.18em`) e um traço horizontal de 1px.

- Ativo: cor `#fa6b09`, traço 34px, rótulo com `opacity:1`. Inativo: `rgba(21,42,70,0.32)`, traço 14px, rótulo invisível.
- Rótulos: 01 "Sala e quarto", 02 "Home office", 03 "Receber", 04 "Momentos do dia", 05 "Projeto completo".
- Só existe em `innerWidth >= 1024`, e só aparece (`opacity`) entre 70% do hero e o fim do andar 05.

### 3. Hero — `#inicio`

`min-height: min(94vh, 960px)`, `overflow:hidden`, coluna flex; um spacer com a altura do header no topo.

- **Foto de fundo**: `public/floors/floor-05/hero-desktop.webp`, `position:absolute; inset:-6% 0; height:112%; object-fit:cover` (a sobra vertical existe para o parallax não revelar borda).
- **Véu**: gradiente navy descrito nos tokens.
- **Conteúdo**, alinhado à base, grid `auto-fit minmax(320px,1fr)` com `align-items:end`:
  - Eyebrow laranja: "Ambientes que se transformam".
  - H1 branco, `max-width:19ch`, `text-wrap:balance`: "O espaço da sua casa pode fazer muito mais". Envolvido por um `div` com `overflow:hidden` (máscara do reveal); o próprio H1 leva `padding-bottom:0.2em; margin-bottom:-0.2em` para a máscara não cortar o ink das descidas — **detalhe crítico**: compensar no elemento com o tamanho de fonte grande, não no wrapper.
  - CTAs: "Explore as possibilidades" (pílula laranja sólida, `min-height:54px`, `padding:0 32px`) e "Encontre uma unidade" (pílula com borda `rgba(255,255,255,0.45)`).
  - Parágrafo lateral: "Soluções retráteis e multifuncionais para transformar ambientes compactos conforme a sua rotina." — `border-left: 1px solid rgba(255,255,255,0.3); padding-left:24px`, `max-width:44ch`.
- **Indicador de scroll**: traço de 1px, 56px de altura, gradiente branco→transparente, centrado na base, com `animation: mf-cue 2.8s ease-in-out infinite` (`scaleY` 0.25→1 e opacidade 0.35→1, origem no topo).

### 4. Introdução — `#ambientes`

Fundo `#fff`, borda inferior hairline. Grid de duas colunas (`auto-fit minmax(320px,1fr)`, `align-items:start`): H2 "Seu espaço não precisa ter uma única função" à esquerda; parágrafo "A casa muda ao longo do dia. Ela pode ser trabalho pela manhã, convivência à tarde e descanso à noite. Os móveis também podem acompanhar essa mudança." à direita (`max-width:52ch`).

Abaixo, um divisor: hairline flexível — texto laranja centralizado ("Uma mesma metragem. Novas possibilidades.", 12px, uppercase, `letter-spacing:0.18em`) — hairline flexível.

### 5–9. Andares 01 a 05

Copy vinda de `src/data/floors.ts` no repo. Alternam fundo `#f7f5f2` / `#fff`. Cada um tem um numeral gigante em contorno, H2, parágrafo e imagens.

- **`#floor-01`** — texto à esquerda (numeral, H2 "Uma sala pode esconder um quarto completo", "Durante o dia, sala. Quando você precisa, quarto. A função muda. O espaço continua o mesmo."), par de imagens à direita sangrando até a borda direita da viewport (a seção usa `padding-right:0`). Par: `floor-01/closed-desktop.webp` (base) + `open-desktop.webp` (sobreposta). Legenda em três partes: "Fechada — sala" · hairline · "Aberta — quarto" (esta em laranja).
- **`#floor-02`** — espelhado: imagens à esquerda sangrando pela borda esquerda, texto à direita. Par `floor-02/closed-desktop.webp` + `open-desktop.webp`, `aspect-ratio:4/3`. Legenda: "Fim do expediente" · "Home office aberto".
- **`#floor-03`** — cabeçalho em linha (numeral menor + texto), depois imagem **full-bleed** `aspect-ratio:21/9` com o par `floor-03/everyday.webp` + `hosting.webp`. Legenda: "Uso cotidiano" · "Pronto para receber".
- **`#floor-04`** — cabeçalho em grid de duas colunas; abaixo, três figuras `auto-fit minmax(260px,1fr)` com `aspect-ratio:3/4`, escalonadas verticalmente por margem superior progressiva (0, `clamp(24px,4vw,56px)`, `clamp(48px,8vw,112px)`) — o degrau é intencional. Imagens: `floor-04/morning.webp`, `afternoon.webp`, `night.webp`. Cada figura é um `<button>` que abre lightbox; hover mostra "Clique para ver" sobre gradiente navy no rodapé da imagem e aplica `scale(1.025)`. Legendas: "Manhã — trabalho", "Tarde — convivência", "Noite — descanso", cada uma prefixada por um traço laranja de 20px.
- **`#floor-05`** — seção full-bleed escura, `min-height:min(94vh,960px)`, `overflow:hidden`, foto `floor-05/hero-desktop.webp` com véu navy 0.15→0.88; numeral laranja sólido + H2 "Quando os móveis mudam, a metragem deixa de ser o limite" + parágrafo "Não é sobre encaixar mais móveis. É sobre pensar o ambiente inteiro para que cada elemento tenha uma função quando você precisa e libere espaço quando não precisa."

### 10. Síntese (sem id)

Fundo `#f7f5f2`, respiro grande. Grid de duas colunas com `align-items:end`: à esquerda o H2 "Não é sobre colocar mais coisas em menos espaço" — cada palavra é um `<span>` separado, para a animação; à direita, hairline laranja de largura total sobre o parágrafo "É sobre fazer cada metro quadrado trabalhar melhor para você." (`clamp(19px,1.8vw,30px)`, weight 300).

Rodapé da seção: hairline superior e duas frases em 12px uppercase — "Funcional quando precisa. Bonito o tempo inteiro." (`#4d7392`) à esquerda e "Inteligência de espaço sem abrir mão do design" (`#7b8590`) à direita, com `justify-content:space-between`.

### 11. Soluções — `#solucoes`

Fundo `#fff`. H2 "Soluções pensadas para transformar a rotina" (`max-width:20ch`). Grid `auto-fit minmax(300px,1fr)`, gap `clamp(32px,4vw,64px) clamp(32px,5vw,96px)`. Quatro cards, cada um com hairline superior, `padding-top:24px`, numeral 44px em contorno, H3 22px e parágrafo 16px (`max-width:34ch`):

1. "Melhor aproveitamento do espaço" — "A solução é pensada para liberar ou transformar áreas do ambiente."
2. "Função sem abrir mão do design" — "A identidade da marca já estabelece esse equilíbrio entre funcionalidade e estética."
3. "Soluções para diferentes rotinas" — "Não existe apenas uma forma de utilizar um apartamento compacto."
4. "Mais do que camas retráteis" — "A comunicação atual da marca já contempla também mesas, armários e complementos."

### 12. Produtos — `#produtos`

Seção **nova** (não existe no repo). Fundo `#f7f5f2`, hairline superior. Cabeçalho em duas colunas: H2 "Nossos produtos" + parágrafo "Quatro configurações de cama retrátil, em versões casal e solteiro, para diferentes larguras de ambiente."

Grid `auto-fit minmax(260px,1fr)`, gap `clamp(20px,2.5vw,36px)`. Quatro `<article>`, cada um: quadro de foto `aspect-ratio:1/1` com fundo `#faf5ee` e `object-fit:cover` (hover `scale(1.03)`, 1.2s), depois um bloco com hairline superior contendo eyebrow da linha, H3, descrição, medida em rótulo uppercase e o botão "Solicitar orçamento" (pílula com borda navy; hover preenche laranja, texto branco) apontando para `#contato`.

| Produto | Linha | Descrição | Medida | Imagem |
| --- | --- | --- | --- | --- |
| Prime Casal | Linha Prime | "O topo da linha Moduflexa. Acabamento em madeira nobre, mecanismo silencioso de alta precisão e design que eleva qualquer ambiente." | Casal — 1,38m | `public/produtos/prime-casal.png` |
| Prime Solteiro | Linha Prime | "A mesma sofisticação em tamanho compacto." | Solteiro — 0,88m | `public/produtos/prime-solteiro.png` |
| Economic Plus Casal | Linha Economic Plus | "Toda a praticidade com o melhor preço." | Casal — 1,38m | `public/produtos/economic-plus-casal.png` |
| Economic Plus Solteiro | Linha Economic Plus | "Solução acessível para qualquer espaço." | Solteiro — 0,88m | `public/produtos/economic-plus-solteiro.png` |

### 13. Unidades — `#unidades`

Fundo `#f7f5f2`. H2 "Agora imagine isso na sua casa" + "Conheça uma unidade Moduflexa e veja as soluções funcionando de perto."

Card de duas colunas (`auto-fit minmax(300px,1fr)`) com fundo `#fff` e borda hairline:

- **Esquerda**: foto `public/unidades/perdizes.jpg` (fachada noturna), `min-height:320px`, `object-fit:cover`, hover `scale(1.04)` em 1.4s.
- **Direita** (`padding: clamp(28px,4vw,56px)`): eyebrow "Unidade 01"; H3 "Moduflexa Pompéia"; "Perdizes, São Paulo – SP"; bloco com hairline superior e grid `auto-fit minmax(180px,1fr)` com **Endereço** "Rua Desembargador do Vale, 1014, São Paulo, Brazil 0501040" e **Horário** "Segunda a Sábado, 09h00 às 18h00"; dois botões: "Falar no WhatsApp" (pílula laranja → link WhatsApp, ver abaixo) e "Como chegar" (pílula com borda navy → Google Maps com o endereço).

**Pendência conhecida**: o nome exibido é "Moduflexa Pompéia" (herdado de `src/data/stores.ts`) enquanto o bairro é Perdizes. Confirmar com o cliente qual é o correto antes de subir.

### 14. Contato — `#contato`

Fundo `#fff`, hairline superior. Duas colunas: à esquerda H2 "Qual espaço da sua casa poderia fazer mais?" + "Fale com a Moduflexa e descubra o que cabe na sua rotina."; à direita o formulário (`max-width:520px`, `gap:22px`).

Campos, todos com rótulo em 10px uppercase `#7b8590` acima e input **sem caixa** — apenas `border-bottom: 1px solid rgba(21,42,70,0.2)`, fundo transparente, `font-size:17px`, weight 300, `min-height:48px`:

| Campo | name | tipo |
| --- | --- | --- |
| Nome | `nome` | text |
| WhatsApp | `whatsapp` | tel |
| Cidade | `cidade` | text |
| Mensagem | `mensagem` | textarea, 3 linhas, `resize:vertical` |

Botão submit: pílula laranja "Fale com a Moduflexa", `min-height:54px`.

**Pendência**: o protótipo só faz `preventDefault` e marca estado de enviado. O destino real (e-mail, CRM, API route) precisa ser definido na implementação, com validação e estados de erro/sucesso.

### 15. Footer

Fundo `#152a46`, texto `rgba(255,255,255,0.75)`. Grid `auto-fit minmax(220px,1fr)`, gap `clamp(32px,4vw,64px)`:

1. Logo claro (30px) + "Móveis flexíveis para espaços que mudam com você."
2. **Navegação**: Ambientes, Soluções, Produtos, Unidades, Contato.
3. **Unidade**: "Moduflexa Pompéia — São Paulo/SP" + link "WhatsApp (11) 93623-3568".
4. **Redes**: `[TBD] Instagram`, `[TBD] Política de privacidade` — ainda não confirmados.

Barra inferior com hairline `rgba(255,255,255,0.12)`: "© 2026 Moduflexa. Todos os direitos reservados." e, à direita, "A cama levanta com você." em 12px uppercase `rgba(255,255,255,0.4)`.

### 16. Botão flutuante do WhatsApp

`position:fixed; right:clamp(16px,2.5vw,32px); bottom:clamp(16px,2.5vw,32px); z-index:80`. Pílula `#25d366`, altura 60px, `padding: 0 18px`, `box-shadow: 0 10px 30px rgba(21,42,70,0.28)`, ícone SVG do WhatsApp 26px em `currentColor`. No hover expande: `gap` 0→10px, rótulo "Fale com a gente" com `max-width` 0→190px e `opacity` 0→1 (0.45s `cubic-bezier(0.22,1,0.36,1)`), sombra mais forte.

### 17. Lightbox (andar 04)

`position:fixed; inset:0; z-index:90`, fundo `rgba(21,42,70,0.92)`, `display:none` por padrão, `cursor:zoom-out`, `padding: clamp(20px,5vw,64px)`. Dentro: imagem `max-height:78vh`, `object-fit:contain`, legenda em 11px uppercase e um botão circular de fechar (48px, borda `rgba(255,255,255,0.35)`, glifo ×; hover preenche laranja) no topo direito.

Abertura: `display:flex`, depois `opacity` 0→1 (0.45s) e a figura de `scale(0.96)` → `scale(1)` (0.55s `cubic-bezier(0.22,1,0.36,1)`); `document.body.style.overflow = "hidden"`. Fecha por clique no fundo, botão × ou tecla Escape, revertendo a trava de scroll.

## Interactions & Behavior

### Ciclo automático antes/depois (andares 01, 02, 03)

O efeito assinatura. Cada par de fotos tem a imagem "aberta" sobreposta à "fechada", recortada por `clip-path: inset(0 X% 0 0)`. Enquanto o par está visível, um ciclo de **6200ms** roda continuamente (relógio próprio por par, avançando só quando visível):

| Tempo | Estado |
| --- | --- |
| 0–300ms | fechada (p = 0) |
| 300–1700ms | varredura abrindo, easing `easeInOutQuad` |
| 1700–4600ms | aberta (p = 1) |
| 4600–6200ms | varredura fechando |

`IntersectionObserver` com `threshold: 0.01` e `rootMargin: "0px 0px -8% 0px"`, observando **o contêiner**, não a imagem — a imagem recortada tem retângulo de interseção nulo e nunca dispararia. As transições CSS da imagem são desligadas (`transition:none`); o `clip-path` é escrito a cada frame.

No andar 01, uma linha vertical laranja de 2px (`box-shadow: 0 0 18px rgba(250,107,9,0.5)`) acompanha a fronteira, com `left: p%`, visível só quando `0.01 < p < 0.99`.

### Efeitos ligados ao scroll

Todos calculados num único `requestAnimationFrame` contínuo, com suavização `lerp` (fator 0.10–0.16) para dar inércia sem sequestrar o scroll nativo:

- **Parallax do hero**: foto `translate3d(0, scrollSuavizado * 0.14px, 0)`.
- **Dissolução do conteúdo do hero**: `opacity = 1 - y / (alturaHero * 0.75)`; `translateY = -y * 0.05`.
- **Numerais em parallax reverso**: cada numeral 01–05 se desloca até ±70px conforme a distância do seu centro ao centro da viewport (fator 0.12) — move mais devagar que o conteúdo, criando profundidade.
- **Manifesto cinético**: progresso `p = (0.85*vh - top) / (0.5*vh)`; as `n = round(p * totalDePalavras)` primeiras palavras passam de `rgba(21,42,70,0.16)` para `#152a46` (transição de cor 0.45s cada).
- **Zoom-out do andar 05**: `scale` de 1.15 → 1.0 conforme `p = (vh - top) / (vh + altura)`.
- **Troca de estado do header** e visibilidade do rail, conforme descrito nas seções 1 e 2.

### Entrada do hero (ao carregar)

Sequência única, orquestrada com delays: eyebrow 80ms (`translateY(22px)` → 0), H1 200ms (`translateY(105%)` → 0, revelado pela máscara), CTAs 560ms, parágrafo lateral 720ms. Duração 1s/1.15s com `cubic-bezier(0.22,1,0.36,1)`.

### Reveals por scroll (demais seções)

Títulos, parágrafos, figuras, formulário e rótulos recebem `opacity:0; translateY(26px)` e revelam ao entrar (`IntersectionObserver`, `threshold:0.15`, `rootMargin:"0px 0px -8% 0px"`, `unobserve` após revelar). Escalonamento por seção: 85ms por elemento, limitado a 5 passos. Excluídos: header, nav, hero (tem sequência própria) e os numerais (têm parallax).

### Reduced motion

`@media (prefers-reduced-motion: reduce)` desliga `scroll-behavior:smooth` e todas as `animation`. No JS, a flag `reduce` (via `matchMedia`) faz: pares antes/depois ficarem permanentemente abertos, sem parallax, sem dissolução, sem reveals, manifesto totalmente pintado, andar 05 em `scale(1)`. **Reproduza esse comportamento** — é acessibilidade, não enfeite.

### Responsivo

Nenhuma media query de layout. Tudo com `clamp()` e `auto-fit minmax()`. Comportamentos que mudam por largura, via JS: o rail só existe em ≥1024px. O repo tem variantes mobile das fotos dos andares 01 e 02 (`closed-mobile.webp`, `open-mobile.webp`) e do hero (`hero-mobile.webp`) — na implementação, sirva-as com `<picture>`/`next/image` conforme `src/components/ui/floor-image.tsx` já faz.

## State Management

O protótipo mantém pouquíssimo estado em React; quase tudo é imperativo sobre refs, por performance. Na implementação em React, sugestão de divisão:

- `headerSolid: boolean` — derivado do scroll.
- `activeFloor: 1..5` — para o rail.
- `lightbox: { src, caption } | null` — modal do andar 04.
- `formState: 'idle' | 'sending' | 'sent' | 'error'` — formulário de contato.
- Progresso das animações (parallax, ciclo antes/depois, manifesto, zoom) **não deve virar state React** — escreva direto no DOM via refs dentro de um `requestAnimationFrame`, como no protótipo, senão a re-renderização por frame derruba a performance. Um hook por efeito (`useParallax`, `useBeforeAfterCycle`, `useKineticText`) é o encaixe natural.

Um único listener de `scroll`/`resize` (passivo) coordenado com um loop `rAF`, e limpeza de todos os observers e do loop no unmount.

## Assets

Todos já no projeto, na pasta `public/`:

| Caminho | Origem |
| --- | --- |
| `public/brand/logo-primary.png`, `logo-light.png` | repo `nowpublicidade/moduflexa` |
| `public/floors/floor-01/{closed,open}-{desktop,mobile}.webp` | repo |
| `public/floors/floor-02/{closed,open}-{desktop,mobile}.webp` | repo |
| `public/floors/floor-03/{everyday,hosting}.webp` | repo |
| `public/floors/floor-04/{morning,afternoon,night}.webp` | repo |
| `public/floors/floor-05/hero-{desktop,mobile}.webp` | repo |
| `public/produtos/{prime-casal,prime-solteiro,economic-plus-casal,economic-plus-solteiro}.png` | enviadas pelo cliente nesta sessão |
| `public/unidades/perdizes.jpg` | foto da fachada enviada pelo cliente |

Fontes: Google Fonts (Poppins, Jost). Ícone do WhatsApp: SVG inline no protótipo (path incluído no arquivo).

## Pendências para a implementação

1. Destino real do formulário de contato (endpoint, validação, estados de erro/sucesso).
2. Instagram e política de privacidade do footer (hoje `[TBD]`).
3. Nome da unidade: "Pompéia" (do repo) versus bairro Perdizes (endereço confirmado).
4. Telefone fixo, se houver, além do WhatsApp.
5. Link do WhatsApp em uso: `https://wa.me/5511936233568?text=Vi%20o%20site%20da%20moduflexa%20e%20gostaria%20de%20mais%20informacoes.` — usado no botão da unidade, no footer e no botão flutuante.

## Files

Neste pacote:

- `Moduflexa One-Page.dc.html` — **o design final**. É esta a referência a recriar.
- `Site Atual (recriacao).dc.html` — recriação fiel do estado atual do repo, para comparação antes/depois.
- `Direcao A - Planta Editorial.dc.html`, `Direcao B - Ambiente Imersivo.dc.html` — as duas direções exploradas (o final é A com o hero da B). Contexto histórico apenas.
- `github.md` — repo de origem, último sync e mapa de telas → arquivos do repo.
- `public/` — todos os assets acima.
- `support.js` — runtime do protótipo. Necessário só para abrir os `.dc.html` no navegador; **não** para a implementação.
