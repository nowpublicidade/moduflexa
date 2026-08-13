# 07 — Development Rules

> **Projeto:** Website Moduflexa
> **Documento:** Regras de Desenvolvimento
> **Versão:** 2.0
> **Status:** Regras operacionais vigentes
> **Documentos relacionados:** `00-project-blueprint.md`, `01-page-structure.md`, `02-design-system.md`, `03-storytelling.md`, `04-motion-guide.md`, `05-seo-performance.md`, `06-asset-guide.md`

---

# 1. Objetivo deste documento

Este documento define as regras obrigatórias de implementação do website da Moduflexa.

Ele existe para:

* manter o escopo controlado
* evitar complexidade desnecessária
* preservar a arquitetura definida
* garantir consistência de código
* proteger performance
* proteger SEO
* proteger responsividade
* evitar decisões técnicas conflitantes
* orientar o Claude Code durante o desenvolvimento

Este documento deverá ser tratado como regra operacional do projeto.

---

# 2. Fonte de verdade

A pasta atual:

```text
/docs
```

é a fonte de verdade do projeto.

Documentação antiga que contradiga estes arquivos deverá ser ignorada.

Ordem de prioridade:

```text
00-project-blueprint.md
↓
01-page-structure.md
↓
02-design-system.md
↓
03-storytelling.md
↓
04-motion-guide.md
↓
05-seo-performance.md
↓
06-asset-guide.md
↓
07-development-rules.md
```

Quando houver conflito técnico, consultar primeiro o blueprint e depois este documento.

---

# 3. Escopo principal

O projeto é:

```text
site institucional
one-page
estático
mobile-first
orientado por storytelling
```

O MVP não deverá ser transformado em:

* aplicação
* plataforma
* catálogo complexo
* e-commerce
* sistema com autenticação
* site multipágina
* experiência 3D
* CMS completo

---

# 4. Stack aprovada

Utilizar:

```text
Next.js
React
TypeScript
Tailwind CSS
GSAP
ScrollTrigger
Vercel
```

Não adicionar novas tecnologias sem necessidade clara.

---

# 5. Tecnologias proibidas no MVP

Não utilizar:

```text
Three.js
WebGL
Canvas
Lenis
Locomotive Scroll
Framer Motion
Redux
Zustand
CMS
biblioteca pesada de UI
biblioteca de carousel
biblioteca de formulário desnecessária
```

Se alguma delas for considerada necessária, parar e solicitar aprovação.

---

# 6. Princípio de simplicidade

Sempre escolher a solução mais simples que cumpra o requisito.

Preferir:

```text
CSS
```

antes de:

```text
JavaScript
```

Preferir:

```text
React nativo
```

antes de:

```text
biblioteca externa
```

Preferir:

```text
componente simples
```

antes de:

```text
abstração genérica complexa
```

---

# 7. Não antecipar problemas

Não criar arquitetura para problemas que ainda não existem.

Exemplos proibidos:

* repository pattern sem necessidade
* service layer para conteúdo estático
* event bus global
* state manager global
* adapter de CMS inexistente
* abstração para múltiplas fontes de dados
* feature flags sem uso real

---

# 8. Estrutura recomendada

```text
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
│   ├── ui/
│   └── motion/
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

Criar novas pastas apenas quando houver necessidade real.

---

# 9. App Router

Utilizar App Router do Next.js.

Não introduzir Pages Router.

Não manter duas arquiteturas paralelas.

---

# 10. Rotas

No MVP, a principal rota pública é:

```text
/
```

Não criar rotas comerciais adicionais sem aprovação.

Rotas técnicas permitidas:

```text
robots
sitemap
not-found
```

quando necessárias.

---

# 11. Server Components

Utilizar Server Components por padrão.

Um componente somente deverá ser Client Component quando precisar de:

* estado
* efeito
* evento de browser
* GSAP
* API exclusiva do navegador

---

# 12. "use client"

Evitar colocar:

```ts
'use client'
```

em componentes grandes.

Especialmente:

* `page.tsx`
* layout
* seção inteira
* footer
* conteúdo estático

Isolar comportamento interativo em componentes menores.

---

# 13. Exemplo de isolamento

Preferir:

```text
FloorSection
├── conteúdo estático
└── FloorTransformation
```

onde apenas:

```text
FloorTransformation
```

é Client Component.

---

# 14. TypeScript

TypeScript obrigatório.

Configuração:

```text
strict
```

Não utilizar `any` por conveniência.

Quando o tipo for desconhecido, tipar corretamente ou utilizar `unknown` e validar.

---

# 15. Tipos de conteúdo

Dados estruturados deverão possuir tipos explícitos.

Exemplo:

```ts
export type Floor = {
  id: string
  number: string
  title: string
  description: string
  closedImage?: ResponsiveImage
  openImage?: ResponsiveImage
}
```

---

# 16. Conteúdo fora da interface

Textos e dados repetitivos não deverão ficar hardcoded em vários componentes.

Preferir:

```text
src/data/site.ts
src/data/floors.ts
src/data/stores.ts
```

---

# 17. Conteúdo estático

No MVP, o conteúdo será versionado junto com o código.

Não criar:

* API
* banco de dados
* CMS
* fetch remoto

sem necessidade real.

---

# 18. Componentes

Criar componentes quando houver:

* reutilização
* responsabilidade clara
* benefício de legibilidade

Não criar componente apenas porque uma tag possui algumas classes.

---

# 19. Componentes básicos

Esperados:

```text
Container
Section
Button
Heading
Text
Header
Footer
FloorSection
ImageCrossfade
StoreCard
```

A lista pode ser ajustada conforme implementação.

---

# 20. Tamanho de componentes

Evitar componentes gigantescos.

Se um componente misturar:

* dados
* layout
* animação
* tracking
* responsividade complexa

considerar separar responsabilidades.

---

# 21. Abstração

Não criar componentes genéricos demais.

Evitar APIs como:

```tsx
<Component
  variant="x"
  mode="y"
  type="z"
  reverse
  animated
  floating
  immersive
  sticky
  premium
/>
```

Se o componente tiver dezenas de variantes, provavelmente está abstrato demais.

---

# 22. Naming

Nomes devem explicar função.

Bom:

```text
HeroSection
FloorSection
StoreCard
ImageCrossfade
```

Ruim:

```text
CoolBlock
FancySection
Thing
Magic
Wrapper2
```

---

# 23. Arquivos

Utilizar nomes:

```text
kebab-case
```

Exemplo:

```text
floor-section.tsx
image-crossfade.tsx
brand-statement.tsx
```

---

# 24. Imports

Preferir imports claros.

Evitar cadeias profundas e confusas.

Aliases podem ser utilizados:

```text
@/components
@/data
@/lib
```

---

# 25. Barrel files

Não criar `index.ts` em toda pasta por padrão.

Utilizar apenas quando trouxer benefício real.

---

# 26. Tailwind

Tailwind será a principal ferramenta de styling.

Não adicionar outro framework CSS.

---

# 27. Tokens

Valores institucionais e repetidos devem vir de tokens.

Fonte:

```text
02-design-system.md
```

Criar:

```text
src/styles/tokens.css
```

---

# 28. Valores arbitrários

Evitar repetição de:

```text
text-[#152a46]
mt-[73px]
rounded-[17px]
```

Se o valor fizer parte do sistema, criar token.

Valores arbitrários pontuais são aceitáveis quando a composição realmente exigir.

---

# 29. CSS global

`globals.css` deve conter apenas:

* reset/base
* variáveis
* estilos globais necessários
* utilidades fundamentais

Não despejar estilos específicos de seções no global.

---

# 30. CSS customizado

Pode ser usado quando Tailwind não for a melhor solução.

Exemplos:

* pseudo-elementos complexos
* masks
* animações
* layout muito específico

Manter escopo claro.

---

# 31. Design System

Não inventar:

* novas cores
* novas fontes
* novos radii
* novos estilos de botão
* novos padrões

sem necessidade.

Consultar `02-design-system.md`.

---

# 32. Responsividade

Mobile-first obrigatório.

Implementar primeiro:

```text
mobile
```

Depois:

```text
tablet
desktop
wide
```

Não desenvolver desktop inteiro para depois tentar adaptar.

---

# 33. Mobile

Todo bloco precisa funcionar em smartphone sem:

* hover
* sticky complexo
* scroll horizontal
* texto minúsculo
* botão pequeno

---

# 34. Touch targets

Elementos interativos devem ter área confortável.

Referência:

```text
44–48px
```

como mínimo prático.

---

# 35. Tablet

Tablet deve ser validado separadamente.

Não assumir que desktop reduzido automaticamente funciona.

---

# 36. Wide screens

Respeitar `container-max`.

Backgrounds podem ser full width.

Texto não deve crescer indefinidamente.

---

# 37. Imagens

Utilizar `next/image` quando apropriado.

Obrigatório:

* dimensões
* `sizes`
* alt
* lazy loading quando aplicável

---

# 38. Assets

Seguir `06-asset-guide.md`.

Não utilizar:

* imagens temporárias externas em produção
* URLs aleatórias
* base64
* watermarks
* imagens desalinhadas em crossfade

---

# 39. Placeholder

Se o asset ainda não existir:

utilizar placeholder claramente identificado.

Exemplo:

```text
/public/placeholders/floor-02-open.jpg
```

Não fingir que o asset é final.

---

# 40. Transformações

Crossfade somente quando os assets estiverem alinhados.

Se não estiverem:

```text
não implementar crossfade
```

Preferir imagens separadas até que o par correto exista.

---

# 41. Motion

Consultar `04-motion-guide.md`.

GSAP apenas para:

* transformação
* reveal
* interação editorial relevante

Não para decoração gratuita.

---

# 42. GSAP

Importar apenas onde necessário.

Garantir cleanup adequado.

Evitar instâncias duplicadas.

---

# 43. ScrollTrigger

Cada ScrollTrigger deve ter motivo claro.

Não criar ScrollTrigger para todos os elementos da página.

---

# 44. Motion sem dependência

O conteúdo deverá existir mesmo sem motion.

Não manter elemento invisível indefinidamente aguardando JS.

---

# 45. Reduced Motion

Obrigatório respeitar:

```css
prefers-reduced-motion
```

A experiência deve continuar compreensível.

---

# 46. Scroll nativo

Não substituir scroll nativo.

Não criar scroll hijacking.

Não bloquear scroll vertical.

---

# 47. Sticky

Sticky apenas quando melhorar a narrativa.

Evitar sticky longo no mobile.

---

# 48. SEO

Seguir `05-seo-performance.md`.

Obrigatório:

* title
* description
* canonical
* H1 único
* headings corretos
* sitemap
* robots
* Open Graph
* alt
* HTML semântico

---

# 49. Metadata

Utilizar Metadata API do Next.js.

Não duplicar metadata manualmente com tags soltas sem necessidade.

---

# 50. HTML semântico

Utilizar:

```text
header
nav
main
section
article
address
footer
```

quando semanticamente correto.

---

# 51. Headings

Não escolher heading pelo tamanho visual.

Visual é responsabilidade do CSS.

Semântica é responsabilidade do HTML.

---

# 52. Links

Utilizar `<a>` / `Link` para navegação.

Não utilizar `<button>` para navegação.

Botão deve representar ação.

---

# 53. Anchor navigation

Links internos:

```text
#ambientes
#solucoes
#unidades
#contato
```

Devem continuar funcionais sem JavaScript.

---

# 54. SEO local

Dados das unidades devem estar no HTML.

Não depender exclusivamente de mapa ou widget.

---

# 55. Structured Data

Somente implementar dados verdadeiros.

Não inventar:

* reviews
* rating
* horário
* coordenadas
* preços
* unidades

---

# 56. Performance

Performance é critério de aceite.

Não deixar otimização apenas para o final.

---

# 57. JavaScript budget

Minimizar bundle cliente.

Toda nova dependência deve ser questionada.

---

# 58. Images budget

Comprimir antes de produção.

Seguir pesos de referência do Asset Guide.

---

# 59. Fonts

Carregar apenas famílias e pesos usados.

Não carregar todos os pesos disponíveis.

---

# 60. Third-party scripts

Não adicionar sem necessidade.

Exemplos:

* chat
* heatmap
* pixel
* analytics
* widget
* mapa

Devem ser avaliados individualmente.

---

# 61. Google Maps

No MVP, preferir:

```text
Como chegar
```

abrindo mapa externo.

Não incorporar mapa pesado por padrão.

---

# 62. WhatsApp

Utilizar link direto.

Não instalar widget de terceiros.

---

# 63. Analytics

Tracking deve ser centralizado.

Criar helper:

```text
src/lib/analytics.ts
```

Evitar chamadas dispersas sem padrão.

---

# 64. Eventos principais

```text
page_view
floor_viewed
transformation_viewed
store_viewed
whatsapp_clicked
directions_clicked
contact_clicked
```

---

# 65. Tracking

Tracking não deverá:

* bloquear UI
* atrasar clique
* causar erro se analytics não carregar

---

# 66. Formulário

Se existir, deve ser simples.

Não adicionar biblioteca de forms se React/browser API resolver.

Campos mínimos:

* nome
* WhatsApp
* cidade
* mensagem

---

# 67. Validação

Validação deve ocorrer:

* cliente quando útil
* servidor quando houver backend

Não confiar exclusivamente em validação do browser quando houver envio real.

---

# 68. Segurança

Não expor:

* secrets
* tokens
* credenciais
* chaves privadas

em código cliente.

---

# 69. Environment Variables

Dados sensíveis:

```text
.env.local
```

Nunca commitar credenciais.

---

# 70. Variáveis públicas

Somente utilizar prefixo:

```text
NEXT_PUBLIC_
```

quando a variável realmente precisar existir no cliente.

---

# 71. Links externos

Utilizar URLs finais e confirmadas.

Não inventar links.

Se dado ainda não existir, deixar configurável.

---

# 72. Dados pendentes

Quando informação não estiver confirmada:

* usar placeholder explícito
* adicionar comentário/TODO controlado
* não inventar conteúdo factual

---

# 73. TODOs

TODO aceitável:

```ts
// TODO: substituir pelo WhatsApp oficial antes do deploy
```

TODO não aceitável:

```ts
// TODO: arrumar isso depois
```

Todo TODO precisa ser específico.

---

# 74. Comentários

Não comentar código óbvio.

Comentários servem para explicar:

* decisão incomum
* workaround
* limitação
* razão arquitetural

---

# 75. Console

Não deixar:

```text
console.log
```

de debug em produção.

Erros relevantes podem ser tratados adequadamente.

---

# 76. Error handling

Não quebrar a página inteira por falha de interação secundária.

Exemplo:

se analytics falhar, botão continua funcionando.

---

# 77. Links opcionais

Se determinado dado não estiver configurado:

```text
hide
```

o botão correspondente.

Não renderizar `href="#"`.

---

# 78. Acessibilidade

WCAG AA como objetivo.

Obrigatório:

* foco visível
* labels
* alt
* contraste
* headings
* teclado
* reduced motion
* touch targets

---

# 79. Focus visible

Nunca remover outline sem substituição adequada.

---

# 80. Menus

Menu mobile deve:

* abrir por botão acessível
* indicar estado
* fechar corretamente
* permitir teclado
* controlar foco quando necessário

---

# 81. ARIA

Não adicionar ARIA indiscriminadamente.

Preferir HTML semântico.

ARIA complementa quando necessário.

---

# 82. Imagens decorativas

Usar:

```html
alt=""
```

quando apropriado.

---

# 83. Contraste

Seguir paleta do design system, mas ajustar uso quando necessário para acessibilidade.

Identidade não justifica texto ilegível.

---

# 84. Performance motion

Animar preferencialmente:

```text
transform
opacity
```

Evitar animações custosas.

---

# 85. CLS

Nada pode causar mudança abrupta de layout.

Reservar espaço para:

* imagens
* fontes
* embeds
* formulário

---

# 86. LCP

Hero deve aparecer rapidamente.

Não esconder hero atrás de:

* loader
* intro
* animação longa
* tela preta

---

# 87. Build

Antes de considerar uma etapa concluída, executar:

```text
lint
typecheck
build
```

Todos devem passar.

---

# 88. Comandos

Usar os scripts existentes do projeto.

Se não existirem, configurar comandos claros no `package.json`.

Exemplo:

```text
npm run lint
npm run typecheck
npm run build
```

---

# 89. Não corrigir com ignore

Não resolver erros adicionando indiscriminadamente:

```text
@ts-ignore
eslint-disable
any
```

Corrigir a causa.

---

# 90. ESLint

Warnings importantes devem ser tratados.

Não desabilitar regras úteis globalmente por conveniência.

---

# 91. Typecheck

TypeScript deve passar sem erros.

---

# 92. Build

Produção precisa buildar antes de merge/deploy.

---

# 93. QA responsivo

Validar no mínimo:

```text
375px
390px
768px
1024px
1440px
```

e larguras intermediárias relevantes.

---

# 94. QA visual

Validar:

* overflow horizontal
* imagens cortadas
* headings órfãos
* botões quebrados
* header
* footer
* espaçamentos
* sticky
* crossfade

---

# 95. QA de navegação

Testar:

* menu
* âncoras
* WhatsApp
* rota
* contato
* footer
* refresh com hash

---

# 96. QA motion

Testar:

```text
scroll normal
scroll rápido
scroll reverso
resize
touch
reduced motion
```

---

# 97. QA sem JavaScript

Quando viável, validar que a página continua:

* legível
* navegável
* compreensível

sem os efeitos de motion.

---

# 98. QA em browsers

Testar pelo menos:

```text
Chrome
Safari
Chrome Android
Safari iOS
```

---

# 99. Performance QA

Executar Lighthouse após:

* estrutura final
* assets finais
* motion final

Não medir apenas uma versão vazia.

---

# 100. Implementação incremental

Ordem obrigatória:

```text
1. limpar arquitetura antiga conflitante
2. configurar fundação
3. implementar tokens
4. implementar layout base
5. implementar header/footer
6. implementar estrutura estática
7. adicionar conteúdo
8. validar mobile
9. validar desktop
10. integrar assets
11. implementar Andar 01
12. validar padrão de transformação
13. implementar demais andares
14. adicionar motion
15. SEO
16. analytics
17. performance
18. QA
19. build final
20. deploy
```

---

# 101. Limpeza da arquitetura antiga

Antes de desenvolver a nova versão, identificar código antigo relacionado a:

* 3D
* WebGL
* scenes
* CMS
* múltiplas rotas
* abstrações não utilizadas
* smooth scroll
* motion antigo

Remover somente depois de verificar dependências reais.

---

# 102. Não manter código morto

Não deixar grandes blocos antigos comentados.

Git já preserva histórico.

Código obsoleto deve ser removido.

---

# 103. Não reescrever tudo sem necessidade

Se algum componente antigo simples ainda fizer sentido:

* avaliar
* adaptar
* reutilizar

Não reescrever apenas por preferência.

---

# 104. Primeira entrega funcional

A primeira versão deve funcionar sem motion.

Deve conter:

* header
* hero
* seções
* imagens ou placeholders
* unidades
* contato
* footer

Somente depois começar refinamento.

---

# 105. Andar 01 como prova técnica

Implementar o primeiro andar completamente antes dos demais.

Validar:

* layout
* asset pair
* mobile
* desktop
* crossfade
* performance
* reduced motion

Depois reutilizar aprendizados.

---

# 106. Não replicar bug

Não implementar cinco transformações antes de validar a primeira.

---

# 107. Pull Requests / commits

Quando o fluxo de trabalho utilizar Git, manter mudanças pequenas e compreensíveis.

Exemplos:

```text
feat: build hero section
feat: add floor transformation
fix: correct mobile floor layout
perf: optimize hero images
```

---

# 108. Não misturar tudo

Evitar commit que simultaneamente:

* muda design
* adiciona motion
* refatora arquitetura
* troca assets
* instala bibliotecas

Pequenas mudanças facilitam revisão.

---

# 109. Não alterar escopo silenciosamente

Claude Code não deverá decidir sozinho:

* adicionar página
* criar CMS
* criar modal
* adicionar menu complexo
* mudar CTA
* trocar storytelling
* adicionar seção
* remover seção
* trocar tecnologia principal

Solicitar aprovação.

---

# 110. Alterações permitidas sem aprovação

Pode:

* corrigir bug
* melhorar tipagem
* ajustar responsividade
* corrigir acessibilidade
* corrigir build
* otimizar código
* reduzir bundle

desde que não altere design ou comportamento aprovado de forma material.

---

# 111. Alterações que exigem aprovação

Exigem aprovação:

* nova dependência relevante
* nova rota
* novo formulário
* alteração de stack
* alteração de conteúdo
* nova seção
* novo padrão visual
* mudança de CTA
* alteração importante de motion
* mudança de estrutura da página
* CMS
* banco
* API

---

# 112. Conteúdo

Não alterar copy final para “caber melhor” sem aprovação.

Se houver problema de layout:

1. ajustar layout
2. ajustar escala
3. sinalizar copy

Não reescrever silenciosamente.

---

# 113. Storytelling

Seguir `03-storytelling.md`.

Não transformar andares em catálogo técnico.

---

# 114. Número de andares

A quantidade final será definida pela documentação vigente.

Não adicionar andares automaticamente com base no número de produtos.

---

# 115. Assets faltantes

Não bloquear toda a implementação.

Utilizar placeholders até que o asset final exista.

Mas marcar claramente o estado.

---

# 116. Não gerar assets automaticamente

Claude Code não deve criar imagens artificiais ou genéricas apenas para preencher layout.

Assets devem vir do fluxo visual aprovado.

---

# 117. Dados das lojas

Não inventar:

* endereço
* telefone
* WhatsApp
* horário
* cidade

Se não houver dado confirmado, manter configuração pendente.

---

# 118. SEO content

Não adicionar parágrafos extras apenas para aumentar quantidade de palavras.

---

# 119. Accessibility first

Se uma decisão visual dificultar acessibilidade, adaptar a implementação.

Exemplo:

texto laranja pequeno sobre branco deve ser revisado.

---

# 120. Performance first

Se uma animação reduzir significativamente performance:

```text
simplificar ou remover
```

Não tentar justificar efeito pesado porque já foi desenvolvido.

---

# 121. Progressive enhancement

A ordem mental deve ser:

```text
HTML
↓
CSS
↓
JavaScript
↓
motion
```

Cada camada melhora a anterior.

---

# 122. Graceful degradation

Se GSAP falhar:

* conteúdo continua
* imagens continuam
* links continuam
* conversão continua

---

# 123. Browser APIs

Antes de adicionar dependência, verificar se navegador já resolve.

Exemplos:

```text
IntersectionObserver
matchMedia
CSS sticky
scroll-behavior
```

---

# 124. React state

Não criar estado global para:

* posição do scroll
* seção atual
* menu simples
* hover
* transformações independentes

Manter estado local.

---

# 125. Re-renders

Evitar estado React atualizado em cada pixel de scroll.

GSAP/ScrollTrigger deve controlar animação sem re-render contínuo quando possível.

---

# 126. Events

Não adicionar listeners globais sem cleanup.

---

# 127. Resize listeners

Evitar listeners manuais quando CSS ou `matchMedia` resolver.

---

# 128. ImageCrossfade

Componente deverá ser simples.

Responsabilidades:

* renderizar estado fechado
* renderizar estado aberto
* preservar aspect ratio
* permitir motion
* respeitar reduced motion

Não deve controlar storytelling inteiro.

---

# 129. FloorSection

Responsabilidade:

* estrutura visual
* conteúdo
* número
* título
* descrição
* transformação

Não deve conhecer detalhes de analytics global além de callbacks/helpers necessários.

---

# 130. Header

Header deve ser independente das seções internas.

Navegação por IDs.

Evitar acoplamento a estado global do storytelling.

---

# 131. Analytics

Tracking não deve estar misturado com lógica de layout.

Utilizar helper central.

---

# 132. Stores

Dados de lojas devem permanecer tipados e centralizados.

Não duplicar endereço em:

* footer
* seção
* schema

quando puder ser derivado da mesma fonte.

---

# 133. Single Source of Truth

Sempre que possível:

```text
stores.ts
→ interface
→ schema
→ footer
```

Isso reduz inconsistência.

---

# 134. SEO metadata data

Informações de marca também podem vir de:

```text
site.ts
```

Exemplo:

```ts
export const siteConfig = {
  name: 'Moduflexa',
  description: '...',
  url: '...',
}
```

---

# 135. Environment awareness

Não hardcode URL de produção em todos os arquivos.

Centralizar configuração.

---

# 136. Deploy

Vercel como destino principal.

Antes do deploy:

* lint
* typecheck
* build
* QA
* metadata
* robots
* sitemap
* assets finais

---

# 137. Preview

Preview deploys não devem ser tratados como produção.

Evitar indexação de previews sempre que possível.

---

# 138. Produção

Depois do deploy:

* testar domínio
* testar HTTPS
* testar canonical
* testar sitemap
* testar robots
* testar links
* testar WhatsApp
* testar OG

---

# 139. Pós-lançamento

Acompanhar:

* erros
* Web Vitals
* cliques
* WhatsApp
* tráfego
* comportamento de scroll

Ajustes devem ser baseados em evidência quando possível.

---

# 140. Não otimizar cedo demais

Não criar otimizações complexas antes de medir necessidade.

Mas boas práticas básicas são obrigatórias desde o início.

---

# 141. Definition of Done — Componente

Um componente está pronto quando:

* tipado
* responsivo
* acessível
* sem erro
* sem overflow
* sem dependência desnecessária
* consistente com design system
* funciona nos estados previstos

---

# 142. Definition of Done — Seção

Uma seção está pronta quando:

* conteúdo correto
* layout aprovado
* mobile aprovado
* desktop aprovado
* assets corretos
* motion opcional funcionando
* reduced motion funcionando
* sem CLS
* sem erro de console

---

# 143. Definition of Done — Página

A página está pronta quando:

* estrutura completa
* storytelling coerente
* navegação funcional
* responsividade validada
* assets finais
* SEO configurado
* performance validada
* analytics configurado quando aplicável
* acessibilidade revisada
* lint passa
* typecheck passa
* build passa

---

# 144. Regra de decisão

Quando houver dúvida, utilizar esta ordem:

```text
1. usuário
2. clareza
3. performance
4. acessibilidade
5. storytelling
6. identidade
7. simplicidade técnica
8. efeito visual
```

Efeito visual nunca deverá vencer os itens anteriores.

---

# 145. Regra para Claude Code

Antes de implementar uma mudança relevante, perguntar internamente:

```text
Isso está no escopo?

Isso existe na documentação?

Existe solução mais simples?

Isso aumenta JavaScript?

Isso adiciona dependência?

Isso funciona no mobile?

Isso prejudica performance?

Isso altera storytelling?

Precisa de aprovação?
```

---

# 146. Proibições finais

Não:

* transformar o projeto em aplicação complexa
* recriar arquitetura antiga
* adicionar 3D
* adicionar CMS
* adicionar smooth scroll
* adicionar biblioteca de motion paralela
* criar páginas não pedidas
* inventar conteúdo
* inventar dados
* inventar assets
* criar abstrações prematuras
* comprometer mobile por desktop
* comprometer performance por efeito
* comprometer acessibilidade por estética

---

# 147. Decisão final

O objetivo técnico deste projeto não é demonstrar complexidade.

É construir uma página:

```text
bonita
rápida
clara
estável
fácil de manter
```

A arquitetura deve desaparecer para que a marca apareça.

O código deve ser simples o suficiente para ser entendido e alterado sem medo.

O motion deve ser leve o suficiente para não dominar a experiência.

Os assets devem ser previsíveis o suficiente para não exigir soluções técnicas frágeis.

Quando houver conflito entre engenhosidade e simplicidade, a simplicidade prevalecerá.

Quando houver conflito entre abstração e legibilidade, a legibilidade prevalecerá.

Quando houver conflito entre velocidade de entrega e qualidade estrutural, a solução deverá ser pequena, correta e sustentável.
