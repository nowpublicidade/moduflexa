# 00 — Project Blueprint

> **Projeto:** Website Moduflexa
> **Documento:** Blueprint Mestre do Projeto
> **Versão:** 2.0
> **Status:** Arquitetura vigente
> **Escopo:** Site institucional one-page, estático, mobile-first e orientado por storytelling

---

# 1. Objetivo deste documento

Este documento define a arquitetura conceitual e técnica vigente do website da Moduflexa.

Ele substitui a abordagem anterior baseada em experiência espacial complexa, múltiplas cenas imersivas, navegação por ambientes, CMS extenso e arquitetura de produto digital.

A nova solução será mais simples, previsível, leve e fácil de manter.

O site continuará utilizando a ideia central de transformação dos espaços e a metáfora de andares, mas essa narrativa será apresentada em uma única página vertical.

Este documento deverá ser considerado a principal referência do projeto.

Em caso de conflito entre documentos antigos e os novos arquivos da pasta `/docs`, prevalece a documentação atual.

---

# 2. O que estamos construindo

Estamos construindo um website institucional de página única para a Moduflexa.

O site deverá apresentar:

* marca
* posicionamento
* conceito
* produtos e soluções
* aplicações em ambientes compactos
* transformações antes/depois
* diferenciais
* unidades
* formas de contato

Tudo em uma única experiência contínua.

A navegação será vertical e baseada em scroll.

Não haverá necessidade de navegação espacial, câmera 3D ou simulação literal de deslocamento dentro de um prédio.

---

# 3. Conceito principal

A ideia central permanece:

> **Cada espaço pode fazer muito mais.**

A Moduflexa deverá ser apresentada como uma marca que transforma ambientes compactos em espaços flexíveis.

A narrativa deverá reforçar que:

* um ambiente pode ter mais de uma função
* móveis não precisam ser estáticos
* a rotina muda ao longo do dia
* o espaço pode acompanhar essa mudança
* poucos metros quadrados podem oferecer mais possibilidades

---

# 4. O novo papel da metáfora do prédio

A metáfora do prédio permanece, mas não será representada literalmente como uma navegação 3D.

Cada grande seção do site poderá ser tratada como um andar.

Exemplo:

```text id="v99a91"
Abertura

↓

Andar 01
Sala → Quarto

↓

Andar 02
Home Office

↓

Andar 03
Receber

↓

Andar 04
Ambiente Multifuncional

↓

Andar 05
Projeto Completo

↓

Síntese

↓

Unidades
```

A sensação de progressão poderá ser reforçada por:

* números
* linhas verticais
* divisores arquitetônicos
* pequenas transições
* mudanças de enquadramento
* variação de cor
* elementos gráficos discretos

---

# 5. Objetivo estratégico

O site deverá cumprir cinco objetivos principais.

## 5.1 Posicionamento

Apresentar a Moduflexa como referência em soluções inteligentes para espaços compactos.

---

## 5.2 Compreensão

Fazer o usuário entender rapidamente o valor de móveis retráteis e multifuncionais.

---

## 5.3 Desejo

Permitir que o visitante se imagine utilizando essas soluções em sua própria casa.

---

## 5.4 Conversão

Conduzir o usuário para:

* WhatsApp
* contato
* showroom
* unidade mais próxima
* agendamento futuro, caso exista

---

## 5.5 Escalabilidade

A página deverá suportar a inclusão futura de novas unidades sem necessidade de reconstrução estrutural.

---

# 6. Público principal

O público principal será composto por:

* moradores de apartamentos compactos
* moradores de studios
* casais
* jovens profissionais
* famílias em imóveis menores
* arquitetos
* designers de interiores
* compradores interessados em melhor aproveitamento do espaço

---

# 7. Problemas que o site deverá comunicar

O conteúdo deverá partir de necessidades reais.

Exemplos:

* não tenho quarto de hóspedes
* meu home office ocupa espaço o dia inteiro
* minha sala é pequena
* não tenho espaço para mesa
* meu studio precisa ter várias funções
* tenho poucos metros quadrados
* quero aproveitar melhor meu apartamento
* preciso conciliar organização e conforto

A comunicação não deverá começar pelo produto.

Deverá começar pelo problema ou necessidade.

---

# 8. Jornada emocional

A narrativa deverá seguir:

```text id="hx6b6r"
Curiosidade
    ↓
Identificação
    ↓
Descoberta
    ↓
Surpresa
    ↓
Desejo
    ↓
Confiança
    ↓
Ação
```

O usuário deverá sentir que está descobrindo possibilidades ao longo da página.

---

# 9. Estrutura macro da página

A estrutura preliminar será:

```text id="98hlir"
Header

↓

Hero

↓

Introdução

↓

Andar 01

↓

Andar 02

↓

Andar 03

↓

Andar 04

↓

Andar 05

↓

Síntese da marca

↓

Soluções / diferenciais

↓

Unidades

↓

Contato

↓

Footer
```

A estrutura detalhada será definida em `01-page-structure.md`.

---

# 10. Princípio visual

O site deverá parecer:

* editorial
* arquitetônico
* contemporâneo
* leve
* sofisticado
* organizado
* premium sem excesso

A interface não deverá parecer:

* portal
* catálogo tradicional
* e-commerce
* apresentação corporativa genérica
* site de tecnologia
* experiência experimental difícil de navegar

---

# 11. Princípio de interação

O scroll deverá ser natural.

A interação principal será:

```text id="t4s37s"
scroll
    ↓
revelação
    ↓
descoberta
    ↓
próxima seção
```

O site não deverá tentar assumir controle excessivo do scroll.

---

# 12. Motion Design

O movimento será utilizado de forma editorial.

Permitido:

* fade
* reveal
* mask
* pequeno deslocamento
* entrada de textos
* números de andar
* paralaxe sutil
* sticky pontual
* crossfade de imagens
* transformação visual por troca de estado

Evitar:

* cenas 3D
* câmera artificial
* WebGL
* scroll horizontal obrigatório
* pinning prolongado
* sequências pesadas
* animações de centenas de frames
* efeitos apenas decorativos

---

# 13. Estratégia principal de transformação

Sempre que possível, as transformações dos produtos serão demonstradas por pares de imagens.

Exemplo:

```text id="h8ddp8"
Ambiente fechado
      ↓
crossfade
      ↓
Ambiente transformado
```

As duas imagens deverão possuir:

* mesma câmera
* mesmo enquadramento
* mesma iluminação
* mesma decoração
* mesma composição
* mesma lente
* mesma proporção

Somente o produto ou estado funcional deverá mudar.

---

# 14. Mobile First

O site será projetado primeiro para smartphones.

Isso significa que:

* a hierarquia será pensada primeiro em telas pequenas
* as imagens terão versões mobile específicas quando necessário
* nenhuma interação dependerá de hover
* os textos serão curtos
* os CTAs serão acessíveis ao toque
* as animações serão mais simples
* o scroll nativo será preservado
* o carregamento será progressivo

Desktop será uma expansão da experiência.

---

# 15. Responsividade

O site deverá funcionar corretamente em:

* smartphones compactos
* smartphones grandes
* tablets
* notebooks
* desktops
* telas largas

Não deverão existir duas versões independentes do site.

A mesma estrutura deverá se adaptar ao viewport.

---

# 16. Stack técnica

Stack principal:

```text id="l85rdw"
Next.js
React
TypeScript
Tailwind CSS
GSAP
ScrollTrigger
Vercel
```

---

# 17. Tecnologias que não fazem parte do MVP

Não utilizar inicialmente:

```text id="prg7rd"
Three.js
WebGL
Canvas
Lenis
Framer Motion
CMS
Redux
bibliotecas grandes de UI
bibliotecas complexas de scroll
```

Uma dependência nova só deverá ser adicionada quando existir necessidade real.

---

# 18. Arquitetura de renderização

O projeto deverá utilizar:

* Server Components por padrão
* Client Components somente quando necessário
* geração estática sempre que possível
* JavaScript no cliente apenas para interação e motion

O HTML principal deverá existir independentemente das animações.

---

# 19. Site estático

O conteúdo inicial será mantido diretamente no projeto.

Estrutura sugerida:

```text id="3zefui"
src/data/site.ts
src/data/floors.ts
src/data/stores.ts
```

Exemplo conceitual:

```ts id="zy8qp6"
export const floors = [
  {
    number: '01',
    title: 'Uma sala pode esconder um quarto completo',
    description: '...',
    closedImage: '...',
    openImage: '...',
  },
]
```

Não haverá CMS no MVP.

---

# 20. Unidades

As unidades também poderão ser armazenadas em conteúdo tipado.

Exemplo:

```ts id="3z7kmm"
export const stores = [
  {
    name: 'Moduflexa Perdizes',
    city: 'São Paulo',
    state: 'SP',
    whatsapp: '...',
    address: '...',
  },
]
```

Quando novas unidades forem abertas, a equipe poderá adicionar novos registros.

Um CMS poderá ser incorporado futuramente se o crescimento justificar.

---

# 21. SEO

O projeto deverá preservar boas práticas de SEO desde o início.

A página deverá possuir:

* HTML semântico
* H1 único
* H2 por seção
* title
* description
* canonical
* sitemap
* robots
* Open Graph
* dados estruturados
* textos indexáveis
* imagens com alt
* links reais
* informações das unidades

---

# 22. Estratégia SEO

Por ser uma página única, a home deverá trabalhar principalmente:

* Moduflexa
* móveis retráteis
* móveis inteligentes
* móveis para apartamentos pequenos
* ambientes compactos
* móveis multifuncionais
* cama retrátil
* aproveitamento de espaço

O conteúdo deverá ser natural.

Não haverá repetição artificial de palavras-chave.

---

# 23. SEO local

A seção de unidades deverá preparar o site para buscas locais.

Cada unidade deverá apresentar:

* nome
* cidade
* estado
* endereço
* telefone
* WhatsApp
* horário
* link de rota

Dados estruturados locais poderão ser adicionados quando apropriado.

---

# 24. Performance

A performance é prioridade.

Metas internas:

```text id="mgf3qi"
LCP ≤ 2,5s
INP ≤ 200ms
CLS ≤ 0,1
```

Meta Lighthouse:

```text id="799uql"
Performance ≥ 90
SEO ≥ 95
Accessibility ≥ 95
Best Practices ≥ 95
```

---

# 25. Budget inicial

Meta para carregamento inicial:

```text id="n1fm48"
HTML + CSS + JS < 500 KB
```

Meta antes dos assets não críticos:

```text id="d80jrm"
< 1 MB
```

A carga completa poderá crescer conforme imagens forem carregadas pelo scroll.

---

# 26. Imagens

As imagens deverão utilizar:

* AVIF
* WebP
* tamanhos responsivos
* `sizes`
* lazy loading
* preload apenas quando necessário
* versões mobile quando o enquadramento exigir

Referência inicial:

```text id="8xewhz"
Mobile: 100–200 KB
Desktop: 200–350 KB
```

---

# 27. Carregamento

Estratégia:

```text id="dw5nvo"
Hero
→ imediato

Primeiro ambiente
→ preparado

Demais ambientes
→ lazy loading
```

Não carregar todas as imagens no primeiro acesso.

---

# 28. Fontes

Utilizar:

* uma família principal
* poucos pesos
* fonte variável quando adequado
* auto-hospedagem quando possível

Evitar múltiplas famílias sem necessidade.

---

# 29. Acessibilidade

O projeto deverá buscar WCAG AA.

Requisitos mínimos:

* contraste adequado
* foco visível
* navegação por teclado
* labels
* alt de imagens
* landmarks
* headings corretos
* suporte a `prefers-reduced-motion`
* zoom preservado
* áreas de toque adequadas

---

# 30. Movimento reduzido

Quando `prefers-reduced-motion` estiver ativo:

* remover paralaxe
* remover movimentos grandes
* reduzir fades
* eliminar sticky complexo
* apresentar transformações de forma estática
* preservar todos os conteúdos

---

# 31. Analytics

O projeto deverá estar preparado para Analytics.

Eventos relevantes:

```text id="kejr6m"
page_view

floor_viewed

transformation_viewed

store_viewed

whatsapp_clicked

directions_clicked

contact_clicked
```

Analytics não deverá bloquear a renderização.

---

# 32. Conversão

O site deverá evitar CTAs excessivos.

A prioridade será:

1. demonstrar valor
2. gerar desejo
3. apresentar unidade
4. incentivar contato

CTAs principais:

* Encontre uma unidade
* Fale pelo WhatsApp
* Como chegar
* Conheça de perto

---

# 33. O que faz parte do MVP

O MVP deverá conter:

* one-page completa
* hero
* storytelling
* ambientes
* transformações antes/depois
* unidades
* WhatsApp
* contato
* SEO técnico
* Analytics
* responsividade
* motion leve
* otimização de assets

---

# 34. O que não faz parte do MVP

Fora do escopo:

* CMS
* blog
* e-commerce
* login
* área de cliente
* área de franqueado
* simulador
* configurador
* realidade aumentada
* 3D
* WebGL
* busca
* múltiplas páginas comerciais
* múltiplos idiomas
* IA
* mapas complexos

---

# 35. Estrutura de código recomendada

```text id="9h40fd"
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── floors.ts
│   ├── stores.ts
│   └── site.ts
│
├── lib/
│   ├── analytics.ts
│   └── motion.ts
│
└── styles/
    └── tokens.css
```

A estrutura deverá permanecer simples enquanto o projeto não justificar maior complexidade.

---

# 36. Princípio de simplicidade

A solução mais simples que entregar a experiência desejada deverá ser escolhida.

Não criar abstrações por antecipação.

Não construir infraestrutura para funcionalidades que ainda não existem.

Não desenvolver pensando em problemas hipotéticos de escala.

---

# 37. Escalabilidade pragmática

Escalabilidade neste projeto significa:

* componentes reutilizáveis
* conteúdo tipado
* dados separados da interface
* estrutura preparada para novas unidades
* assets organizados
* SEO consistente

Não significa construir um sistema complexo antes de existir necessidade.

---

# 38. Critérios de sucesso

O projeto será considerado bem-sucedido quando:

* o usuário entender rapidamente o que a Moduflexa oferece
* a narrativa for clara
* as transformações forem visualmente compreensíveis
* o site carregar rápido no celular
* a página funcionar bem em 4G
* os CTAs forem fáceis de encontrar
* o usuário conseguir localizar uma unidade
* o design transmitir sofisticação
* o site não parecer tecnicamente complexo
* a manutenção for simples

---

# 39. Critérios de falha

O projeto deverá ser revisto se:

* o usuário não entender o produto
* as animações parecerem travadas
* a página demorar para carregar
* o site depender de conexão rápida
* o mobile ficar inferior ao desktop
* o storytelling parecer repetitivo
* a página ficar excessivamente longa
* o usuário não encontrar as unidades
* houver excesso de efeitos
* a tecnologia chamar mais atenção que a marca

---

# 40. Ordem de implementação

A implementação deverá seguir:

```text id="zsm8q5"
1. Fundação
2. Design System
3. Estrutura da página
4. Conteúdo estático
5. Responsividade
6. Assets
7. Motion
8. SEO
9. Analytics
10. Performance
11. QA
12. Deploy
```

As animações não deverão ser implementadas antes de a página funcionar completamente sem elas.

---

# 41. Regras para o Claude Code

O Claude Code deverá:

* considerar este documento como fonte de verdade
* ignorar arquiteturas antigas conflitantes
* manter o projeto one-page
* manter o projeto estático no MVP
* não adicionar CMS
* não adicionar Three.js
* não adicionar WebGL
* não adicionar Lenis sem aprovação
* não adicionar Framer Motion
* utilizar GSAP apenas quando necessário
* utilizar Server Components por padrão
* minimizar `"use client"`
* preservar scroll nativo
* priorizar mobile
* respeitar performance
* carregar imagens progressivamente
* reutilizar componentes
* utilizar dados tipados
* não criar funcionalidades não solicitadas
* não criar rotas extras sem necessidade
* não alterar storytelling sem aprovação
* executar lint
* executar typecheck
* executar build
* testar responsividade

---

# 42. Documentação vigente

A nova documentação será composta por:

```text id="u63jrn"
/docs

00-project-blueprint.md
01-page-structure.md
02-design-system.md
03-storytelling.md
04-motion-guide.md
05-seo-performance.md
06-asset-guide.md
07-development-rules.md
```

Qualquer documentação anterior deverá ser considerada obsoleta.

---

# 43. Decisão final

O website da Moduflexa será uma página única, estática e editorial.

A experiência continuará contando uma história de transformação, mas sem depender de uma arquitetura tecnicamente complexa.

O diferencial não estará em simular um prédio em 3D.

Estará na forma como a página utiliza:

* narrativa
* imagens
* espaço
* movimento
* arquitetura
* transformação

para fazer o visitante compreender que um ambiente pequeno pode oferecer muito mais.

Quando houver conflito entre impacto visual e simplicidade, a simplicidade prevalecerá.

Quando houver conflito entre movimento e performance, a performance prevalecerá.

Quando houver conflito entre tecnologia e narrativa, a narrativa prevalecerá.
