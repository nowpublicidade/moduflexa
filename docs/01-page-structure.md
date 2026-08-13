# 01 — Page Structure

> **Projeto:** Website Moduflexa
> **Documento:** Estrutura da Página Única
> **Versão:** 2.0
> **Status:** Arquitetura de conteúdo e layout
> **Documento superior:** `00-project-blueprint.md`

---

# 1. Objetivo deste documento

Este documento define a estrutura completa da página única da Moduflexa.

Ele descreve:

* ordem das seções
* função de cada bloco
* conteúdo esperado
* hierarquia de títulos
* tipo de imagem
* CTA
* comportamento mobile
* comportamento desktop
* relação com motion
* critérios de aceite

O objetivo é permitir que o site seja construído de forma direta, sem interpretações ambíguas sobre a organização da página.

---

# 2. Estrutura geral da one-page

A página deverá seguir esta ordem:

```text
Header
↓
Hero
↓
Introdução / Contexto
↓
Andar 01 — Sala que vira quarto
↓
Andar 02 — Home office retrátil
↓
Andar 03 — Receber sem perder espaço
↓
Andar 04 — Ambiente multifuncional
↓
Andar 05 — Projeto completo
↓
Síntese da marca
↓
Soluções / Diferenciais
↓
Unidades
↓
Contato
↓
Footer
```

Essa ordem poderá sofrer pequenos ajustes editoriais, mas o storytelling principal deverá ser preservado.

---

# 3. Header

## Objetivo

Permitir navegação rápida sem comprometer o visual editorial.

## Conteúdo

* logo Moduflexa
* link para início
* link para ambientes
* link para soluções
* link para unidades
* link para contato
* CTA principal

CTA sugerido:

```text
Encontre uma unidade
```

## Comportamento

O header poderá iniciar transparente sobre o hero.

Após o scroll:

* ganha fundo sólido ou translúcido
* mantém boa leitura
* permanece discreto
* não ocupa espaço excessivo

## Mobile

No mobile:

* logo
* botão de menu
* CTA opcional reduzido

O menu abre em painel vertical simples.

---

# 4. Hero

## Objetivo

Explicar rapidamente o conceito da Moduflexa e criar curiosidade.

## H1

Direção sugerida:

```text
Móveis inteligentes para espaços que fazem mais
```

ou

```text
O espaço da sua casa pode fazer muito mais
```

A redação final será definida em `03-storytelling.md`.

## Texto de apoio

Texto curto, com no máximo duas linhas em desktop e poucas linhas em mobile.

Exemplo conceitual:

```text
Soluções retráteis e multifuncionais para transformar ambientes compactos conforme a sua rotina
```

## Imagem

Imagem editorial de alto impacto mostrando um ambiente Moduflexa.

A primeira imagem não precisa mostrar imediatamente uma transformação.

Ela deve apresentar:

* qualidade
* arquitetura
* espaço
* design

## CTA

CTA principal:

```text
Explore as possibilidades
```

CTA secundário:

```text
Encontre uma unidade
```

## Motion

Permitido:

* entrada suave do texto
* revelação da imagem
* indicador de scroll
* pequeno parallax no desktop

Nada deve atrasar o carregamento inicial.

---

# 5. Introdução / Contexto

## Objetivo

Explicar a ideia principal antes de entrar nos ambientes.

## H2

Direção sugerida:

```text
Seu espaço não precisa ter uma única função
```

## Conteúdo

Bloco curto explicando que a Moduflexa cria soluções para ambientes compactos que mudam conforme o momento do dia.

Exemplo de lógica:

```text
Trabalhar
Receber
Descansar
Organizar

O mesmo espaço pode acompanhar todos esses momentos
```

## Layout

Pode utilizar:

* texto à esquerda
* imagem ou detalhe arquitetônico à direita

ou

* texto central com bastante espaço negativo

## Mobile

Conteúdo em coluna única.

Sem excesso de texto.

---

# 6. Sistema visual dos andares

Cada andar deverá seguir uma estrutura consistente, mas não idêntica.

Elementos recorrentes:

```text
Número do andar
Título
Texto curto
Imagem principal
Estado fechado
Estado aberto
CTA opcional
```

Exemplo:

```text
01

Uma sala pode esconder um quarto completo

[imagem fechada]

↓

[imagem aberta]
```

---

# 7. Andar 01 — Sala que vira quarto

## Objetivo

Gerar a primeira grande descoberta da página.

## Problema

Falta de espaço para quarto de hóspedes.

## H2

Direção sugerida:

```text
Uma sala pode esconder um quarto completo
```

## Texto de apoio

Explicar em poucas palavras que o ambiente permanece sala durante o dia e se transforma quando necessário.

## Assets

Obrigatórios:

```text
floor-01-closed
floor-01-open
```

As duas imagens devem possuir o mesmo enquadramento.

## Interação

Crossfade por scroll entre:

```text
Sala
↓
Quarto
```

## CTA

Opcional:

```text
Conheça esta solução
```

Como o site é one-page, o CTA poderá levar ao WhatsApp ou à seção de contato.

## Mobile

A transformação deve ser facilmente compreendida.

Evitar sticky longo.

Preferir:

* imagem fechada
* pequeno scroll
* imagem aberta

---

# 8. Andar 02 — Home office retrátil

## Objetivo

Mostrar que a transformação também serve para a rotina de trabalho.

## Problema

Home office ocupa espaço mesmo fora do horário de uso.

## H2

```text
Seu escritório não precisa ocupar espaço o dia inteiro
```

## Assets

```text
floor-02-closed
floor-02-open
```

## Interação

Estado inicial:

ambiente organizado.

Estado transformado:

mesa ou estação de trabalho disponível.

Ou o inverso, dependendo da direção narrativa escolhida.

## Mensagem

O foco não deve ser apenas a mesa.

O foco deve ser a possibilidade de devolver o espaço ao ambiente após o uso.

---

# 9. Andar 03 — Receber sem perder espaço

## Objetivo

Conectar o produto a situações reais de convivência.

## Problema

Ter um quarto de hóspedes vazio durante a maior parte do tempo.

## H2

Direção sugerida:

```text
Receber alguém não precisa exigir um quarto vazio o ano inteiro
```

## Visual

Ambiente em estado cotidiano.

Depois:

transformação para receber visitas.

## Diferencial narrativo

Esse bloco deverá focar mais na situação de uso do que no produto.

---

# 10. Andar 04 — Ambiente multifuncional

## Objetivo

Ampliar a percepção do usuário.

Até aqui ele viu produtos específicos.

Agora deve perceber um sistema.

## H2

```text
O mesmo ambiente pode acompanhar diferentes momentos do seu dia
```

## Conteúdo

Pode mostrar mais de uma função:

```text
Trabalho
↓
Convivência
↓
Descanso
```

## Visual

Pode utilizar:

* três estados
* sequência de imagens
* composição editorial
* pequenos cards visuais

Evitar transformar essa seção em galeria excessiva.

---

# 11. Andar 05 — Projeto completo

## Objetivo

Apresentar a visão mais completa da Moduflexa.

## H2

Direção sugerida:

```text
Quando os móveis mudam, a metragem deixa de ser o limite
```

## Conteúdo

Mostrar um ambiente completo utilizando diferentes soluções integradas.

## Visual

Essa seção deverá ter maior impacto.

Pode utilizar:

* imagem em tela cheia
* before/after
* composição ampla
* uma sequência curta de estados

## Função

Essa é a culminação dos andares.

Depois dela, a narrativa muda do produto para a marca.

---

# 12. Síntese da marca

## Objetivo

Transformar as demonstrações anteriores em posicionamento.

## H2

Direção sugerida:

```text
Não é sobre colocar mais coisas em menos espaço
```

Complemento:

```text
É sobre fazer cada metro quadrado trabalhar melhor para você
```

## Layout

Muito espaço negativo.

Poucos elementos.

Pode usar:

* tipografia grande
* detalhe visual da marca
* imagem arquitetônica discreta

## Motion

Mínimo.

Essa seção deve funcionar como pausa.

---

# 13. Soluções / Diferenciais

## Objetivo

Depois de gerar desejo, apresentar argumentos mais racionais.

## H2

```text
Soluções pensadas para transformar a rotina
```

## Conteúdos possíveis

Entre três e cinco diferenciais.

Exemplos:

```text
Melhor aproveitamento do espaço

Soluções integradas ao ambiente

Design contemporâneo

Projetos adaptados à rotina

Atendimento especializado
```

## Layout

Cards simples ou composição em grid.

Evitar muitos ícones genéricos.

## Mobile

Uma coluna ou grid 2x2 quando fizer sentido.

---

# 14. Seção de unidades

## Objetivo

Converter a intenção criada pela página em uma próxima ação concreta.

## H2

```text
Conheça a Moduflexa de perto
```

## Texto

```text
Encontre uma unidade e veja as soluções funcionando pessoalmente
```

## Estrutura da unidade

Cada unidade deverá possuir:

* nome
* bairro ou cidade
* endereço
* WhatsApp
* horário, se disponível
* botão de rota

## Estado inicial

Enquanto houver apenas uma unidade, apresentá-la diretamente.

Mas o layout deverá suportar várias unidades futuramente.

## CTA

```text
Falar no WhatsApp
```

e

```text
Como chegar
```

---

# 15. Estrutura futura para múltiplas unidades

Quando houver mais lojas:

```text
Encontre uma unidade
↓
Lista de unidades
↓
Cidade / bairro
↓
WhatsApp
↓
Rota
```

O sistema poderá funcionar inicialmente com dados tipados em `stores.ts`.

Não criar mapa complexo no MVP.

---

# 16. Contato

## Objetivo

Oferecer um canal alternativo para usuários que não desejam ir diretamente ao WhatsApp.

## H2

```text
Quer entender qual solução combina com o seu espaço?
```

## Opções

Prioridade:

1. WhatsApp
2. telefone
3. formulário curto

## Formulário

Campos sugeridos:

* nome
* WhatsApp
* cidade
* mensagem

Não pedir informações desnecessárias.

---

# 17. Footer

## Conteúdo mínimo

* logo
* frase institucional curta
* navegação
* unidades
* WhatsApp
* telefone
* redes sociais
* política de privacidade
* direitos autorais

## Layout

Simples.

Fundo institucional escuro.

O footer não deve parecer uma seção nova de vendas.

---

# 18. Navegação por âncoras

Como o projeto é one-page, a navegação poderá utilizar âncoras.

Sugestão:

```text
#inicio
#ambientes
#solucoes
#unidades
#contato
```

Os links deverão continuar sendo links reais.

---

# 19. Comportamento do scroll

O scroll deverá ser nativo.

Permitido:

* scroll-behavior suave para âncoras
* GSAP para efeitos pontuais
* ScrollTrigger para crossfades e reveals

Não utilizar controle global complexo do scroll.

---

# 20. Padrão de seção

Componente recomendado:

```tsx
<Section
  id="floor-01"
  theme="light"
  spacing="large"
>
  ...
</Section>
```

Cada seção deverá possuir:

* ID
* theme
* conteúdo
* espaçamento
* comportamento responsivo

---

# 21. Componente de andar

Estrutura conceitual:

```tsx
<FloorSection
  number="01"
  title="Uma sala pode esconder um quarto completo"
  description="..."
  closedImage="..."
  openImage="..."
/>
```

O componente deverá suportar:

* imagem única
* duas imagens
* alinhamento invertido
* tema claro ou escuro
* CTA opcional

---

# 22. Alternância de layout

Para evitar repetição:

```text
Andar 01
Imagem esquerda / texto direita

Andar 02
Texto esquerda / imagem direita

Andar 03
Imagem full-width

Andar 04
Composição editorial

Andar 05
Imagem full-screen
```

A variação deve existir sem perder consistência.

---

# 23. Conteúdo mobile

No mobile, a prioridade será:

```text
Número
Título
Imagem
Transformação
Texto
CTA
```

Não forçar o mesmo layout do desktop.

---

# 24. Conteúdo desktop

No desktop, poderá haver:

* layouts em duas colunas
* texto sticky pontual
* imagens maiores
* maior espaço negativo
* variações editoriais

Evitar excesso de largura de texto.

---

# 25. Hierarquia de headings

## H1

Apenas no hero.

## H2

Utilizar nos principais blocos:

* introdução
* cada andar
* síntese
* soluções
* unidades
* contato

## H3

Utilizar apenas quando houver subdivisões reais.

---

# 26. Quantidade de texto

A página deverá ser visual.

Referência:

## Hero

20 a 40 palavras.

## Introdução

50 a 90 palavras.

## Andares

20 a 60 palavras por bloco.

## Síntese

20 a 50 palavras.

## Diferenciais

10 a 30 palavras por item.

## Unidades

informação objetiva.

Não perseguir quantidade de palavras por SEO.

---

# 27. Estratégia de CTAs

A página não deverá apresentar CTA agressivo em todas as seções.

Distribuição recomendada:

## Hero

CTA suave.

## Andares

CTA opcional e secundário.

## Síntese

sem CTA ou apenas transição.

## Unidades

CTA forte.

## Contato

CTA forte.

---

# 28. CTA principal do site

A ação principal deverá ser:

```text
Encontre uma unidade
```

ou uma variação equivalente.

O site deverá levar o usuário da inspiração para a visita física.

---

# 29. Uso do WhatsApp

Botões de WhatsApp poderão existir:

* no header
* na seção de unidades
* no contato
* no footer

Evitar botão flutuante grande cobrindo conteúdo durante toda a página.

Se houver botão flutuante:

* discreto
* acessível
* sem animação contínua
* sem competir com a narrativa

---

# 30. Imagens

Cada imagem deverá cumprir uma função.

Tipos principais:

```text
Hero
Transformação
Ambiente
Detalhe
Unidade
Marca
```

Não utilizar imagens genéricas apenas para preencher espaço.

---

# 31. Crossfade de transformação

Estrutura visual:

```text
Container estável
├── imagem fechada
└── imagem aberta
```

O container mantém:

* mesma largura
* mesma altura
* mesma proporção

A segunda imagem entra por opacidade.

Isso evita mudança de layout.

---

# 32. Antes e depois alternativo

Caso o crossfade não funcione bem para determinado produto, poderá utilizar:

* slider manual
* duas imagens empilhadas
* sequência vertical
* botão “antes / depois”

O site não deverá depender de um único padrão para todas as soluções.

---

# 33. Reduced Motion

Quando o usuário preferir movimento reduzido:

```text
Imagem fechada
↓
Imagem aberta
```

Sem crossfade controlado por scroll.

Ambas podem ser exibidas diretamente.

---

# 34. Loading

Não utilizar tela de loading da página.

O conteúdo principal deverá aparecer imediatamente.

Se uma imagem posterior ainda não tiver carregado:

* reservar espaço
* utilizar placeholder discreto
* carregar progressivamente

---

# 35. Estados de erro

Caso uma imagem falhe:

* preservar estrutura
* preservar título
* preservar texto
* não quebrar a página

Caso WhatsApp ou rota não estejam configurados:

* esconder apenas aquela ação
* não exibir links quebrados

---

# 36. Estrutura sugerida de componentes

```text
components/
├── layout/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── container.tsx
│   └── section.tsx
│
├── sections/
│   ├── hero.tsx
│   ├── introduction.tsx
│   ├── floor-section.tsx
│   ├── brand-statement.tsx
│   ├── solutions.tsx
│   ├── stores.tsx
│   └── contact.tsx
│
└── ui/
    ├── button.tsx
    ├── heading.tsx
    ├── text.tsx
    ├── image-crossfade.tsx
    └── store-card.tsx
```

---

# 37. Conteúdo em dados

Os conteúdos repetitivos deverão ser separados da interface.

Exemplo:

```ts
export const floors = [
  {
    id: 'living-room',
    number: '01',
    title: 'Uma sala pode esconder um quarto completo',
    description: '...',
    closedImage: '/images/floors/living-closed.avif',
    openImage: '/images/floors/living-open.avif',
  },
]
```

---

# 38. Regras de implementação

O Claude Code deverá:

* manter a ordem da página
* utilizar componentes reutilizáveis
* manter conteúdo fora dos componentes quando apropriado
* preservar o HTML semântico
* não criar rotas extras
* não criar CMS
* não criar navegação 3D
* não criar scroll artificial
* não criar sticky sem necessidade
* não criar animações antes da estrutura estática
* testar mobile antes do desktop
* utilizar imagens responsivas
* preservar performance

---

# 39. Critérios de aceite por seção

Uma seção será considerada pronta quando:

* possui objetivo claro
* possui heading correto
* possui conteúdo final ou placeholder identificado
* funciona no mobile
* funciona no desktop
* não depende de hover
* possui espaçamento consistente
* utiliza tokens
* imagens possuem dimensões
* links funcionam
* não cria CLS
* funciona sem motion

---

# 40. Critérios de aceite da página

A página será aprovada quando:

* a ordem narrativa estiver clara
* o usuário compreender a Moduflexa
* os ambientes tiverem diferenças visuais
* as transformações forem compreensíveis
* o site não parecer repetitivo
* o scroll permanecer natural
* o mobile funcionar bem
* as unidades forem fáceis de encontrar
* a conversão for clara
* a página funcionar completamente sem animações
* não houver erros críticos de console
* SEO básico estiver preservado

---

# 41. Decisões pendentes

Ainda deverão ser confirmados:

* quantidade final de andares
* ambientes finais
* produtos utilizados em cada seção
* textos definitivos
* CTA do hero
* primeira unidade cadastrada
* canais de contato
* existência de formulário
* imagens finais
* crossfade ou outra interação por andar
* composição final de cada seção
* uso ou não de sticky em desktop

---

# 42. Decisão final

A página da Moduflexa deverá funcionar como uma narrativa contínua.

Ela não será uma coleção de blocos independentes.

Cada seção deverá preparar a próxima.

Cada ambiente deverá revelar uma possibilidade.

Cada transformação deverá tornar o benefício mais fácil de compreender.

A interface deverá permanecer simples para que os produtos e ambientes sejam os protagonistas.

Quando houver conflito entre variedade visual e clareza, a clareza prevalecerá.

Quando houver conflito entre animação e leitura, a leitura prevalecerá.

Quando houver conflito entre extensão e ritmo, o ritmo prevalecerá.
