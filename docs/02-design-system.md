# 02 — Design System

> **Projeto:** Website Moduflexa
> **Documento:** Design System
> **Versão:** 2.0
> **Status:** Direção visual vigente
> **Documento superior:** `00-project-blueprint.md`
> **Documento relacionado:** `01-page-structure.md`

---

# 1. Objetivo deste documento

Este documento define as regras visuais e os componentes fundamentais do website da Moduflexa.

O Design System deverá garantir:

* consistência entre todas as seções
* fidelidade à identidade visual da marca
* leitura confortável
* aparência contemporânea
* integração entre arquitetura, produto e interface
* facilidade de manutenção
* responsividade
* acessibilidade
* performance

A interface deverá complementar os ambientes e produtos, nunca competir com eles.

---

# 2. Base da identidade visual

A identidade da Moduflexa parte de quatro cores institucionais principais:

```css
--brand-orange-dark: #d74e01;
--brand-orange: #fa6b09;
--brand-blue: #4d7392;
--brand-navy: #152a46;
```

Essas cores fazem parte da identidade visual oficial da marca.

As famílias tipográficas definidas na identidade são:

```text
Poppins

Glacial Indifference
```

Com referências de pesos:

```text
400
700
800
```

---

# 3. Direção visual do website

O website deverá traduzir a identidade existente para uma experiência mais arquitetônica e editorial.

Palavras-chave:

```text
Arquitetônico
Contemporâneo
Editorial
Funcional
Sofisticado
Leve
Humano
Inteligente
```

A interface não deverá parecer excessivamente corporativa.

Também não deverá utilizar a identidade de forma literal ou saturada.

As cores da marca funcionarão principalmente como:

* assinatura
* contraste
* navegação
* CTA
* indicadores
* números
* pequenos elementos editoriais

Os ambientes e os produtos deverão continuar sendo os protagonistas.

---

# 4. Princípio de uso de cor

A interface deverá trabalhar majoritariamente com:

* off-white
* tons neutros
* madeira presente nas fotografias
* azul-marinho institucional
* laranja como destaque

Regra geral:

```text
Neutros → estrutura

Navy → profundidade

Azul → apoio

Laranja → ação

Fotografia → personalidade
```

Evitar utilizar todas as cores institucionais simultaneamente em um mesmo bloco.

---

# 5. Paleta principal

## 5.1 Brand Orange

```css
--color-brand-orange: #fa6b09;
```

Uso principal:

* CTA
* links ativos
* pequenos destaques
* números
* elementos de navegação
* microinterações

Não utilizar em grandes áreas de texto.

---

# 6. Brand Orange Dark

```css
--color-brand-orange-dark: #d74e01;
```

Uso:

* hover
* estados pressionados
* detalhes gráficos
* contraste sobre fundos claros

Pode funcionar como variação mais madura do laranja principal.

---

# 7. Brand Blue

```css
--color-brand-blue: #4d7392;
```

Uso:

* elementos secundários
* detalhes editoriais
* indicadores
* superfícies pontuais
* informações complementares

Não deverá competir com o navy.

---

# 8. Brand Navy

```css
--color-brand-navy: #152a46;
```

Será uma das principais cores estruturais do website.

Uso recomendado:

* footer
* seções escuras
* textos importantes
* header após scroll
* backgrounds especiais
* elementos institucionais

Também poderá substituir preto puro em boa parte da interface.

---

# 9. Cores neutras

Para o website serão adicionados neutros funcionais.

Esses tons pertencem ao sistema digital e não substituem as cores institucionais.

```css
--color-white: #ffffff;

--color-off-white: #f7f5f2;

--color-surface: #f0ede8;

--color-border: #ddd8d1;

--color-text: #18212a;

--color-text-muted: #66707a;

--color-black: #111111;
```

Os valores poderão sofrer pequenos ajustes durante a implementação para assegurar contraste e consistência visual.

---

# 10. Backgrounds

Background padrão:

```css
background: var(--color-off-white);
```

Alternativas:

```text
Branco
Off-white
Navy
Fotografia
```

Evitar excesso de blocos coloridos.

A mudança de background deverá ajudar a criar ritmo na página.

---

# 11. Temas de seção

Componentes deverão aceitar temas simples.

```ts
type SectionTheme =
  | 'light'
  | 'white'
  | 'navy';
```

## Light

```text
Background: off-white
Texto: navy / text
```

## White

```text
Background: branco
Texto: navy / text
```

## Navy

```text
Background: navy
Texto: branco
Destaque: orange
```

---

# 12. Tipografia

A identidade visual define Poppins e Glacial Indifference como famílias principais.

No website elas terão funções diferentes.

---

# 13. Poppins

A Poppins será a principal família da interface.

Uso:

* headings
* navegação
* botões
* números
* labels
* pequenas chamadas

Pesos recomendados:

```text
Regular — 400
Bold — 700
ExtraBold — 800
```

Evitar excesso de ExtraBold.

---

# 14. Glacial Indifference

A Glacial Indifference poderá ser utilizada em:

* textos editoriais
* parágrafos selecionados
* frases de manifesto
* elementos de contraste tipográfico

Seu uso deve ser mais controlado.

Não é necessário alternar as duas famílias em todas as seções.

---

# 15. Estratégia tipográfica recomendada

Estrutura preferencial:

```text
Headings
→ Poppins

Interface
→ Poppins

Body
→ Glacial Indifference ou Poppins

Manifestos
→ combinação editorial controlada
```

A escolha final de body deverá ser validada no navegador em relação a legibilidade e performance.

---

# 16. Escala tipográfica

Utilizar `clamp()` para evitar grande quantidade de breakpoints.

## Display

```css
font-size: clamp(3rem, 7vw, 7.5rem);
line-height: 0.95;
```

Uso:

* frases de impacto
* manifesto
* números editoriais

---

# 17. H1

```css
font-size: clamp(2.7rem, 5.5vw, 6rem);
line-height: 1;
font-weight: 700;
```

Utilizar apenas uma vez na página.

---

# 18. H2

```css
font-size: clamp(2rem, 4vw, 4.5rem);
line-height: 1.05;
font-weight: 700;
```

Será a principal escala dos andares.

---

# 19. H3

```css
font-size: clamp(1.4rem, 2vw, 2rem);
line-height: 1.15;
font-weight: 700;
```

---

# 20. Body Large

```css
font-size: clamp(1.125rem, 1.5vw, 1.35rem);
line-height: 1.6;
```

---

# 21. Body

```css
font-size: 1rem;
line-height: 1.65;
```

---

# 22. Small

```css
font-size: 0.875rem;
line-height: 1.5;
```

---

# 23. Labels

```css
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
```

Usar com moderação.

---

# 24. Comprimento de linha

Textos corridos deverão respeitar:

```css
max-width: 65ch;
```

Textos de destaque:

```css
max-width: 18ch;
```

Isso deverá preservar o caráter editorial.

---

# 25. Grid principal

O layout utilizará um container central.

```css
--container-max: 1440px;
```

Estrutura desktop:

```text
12 colunas
```

Tablet:

```text
8 colunas
```

Mobile:

```text
4 colunas
```

Não será necessário utilizar uma biblioteca específica de grid.

CSS Grid será suficiente.

---

# 26. Container

Componente:

```tsx
<Container>
  ...
</Container>
```

Referência:

```css
width: min(
  calc(100% - (var(--page-padding) * 2)),
  var(--container-max)
);

margin-inline: auto;
```

---

# 27. Page Padding

Mobile:

```css
--page-padding: 20px;
```

Tablet:

```css
--page-padding: 32px;
```

Desktop:

```css
--page-padding: 48px;
```

Wide:

```css
--page-padding: 64px;
```

---

# 28. Sistema de espaçamento

Base:

```text
4px
```

Tokens:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
--space-11: 160px;
```

---

# 29. Espaçamento entre seções

Mobile:

```text
64–96px
```

Desktop:

```text
96–160px
```

Seções de transformação em tela cheia poderão ultrapassar esses valores.

---

# 30. Ritmo vertical

Nem todas as seções deverão ter o mesmo espaçamento.

A página deve alternar:

```text
impacto
↓
respiro
↓
descoberta
↓
respiro
↓
impacto
```

Isso evita sensação de template.

---

# 31. Border Radius

O design da Moduflexa deverá utilizar bordas moderadas.

Tokens:

```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
```

Imagens arquitetônicas poderão permanecer sem radius dependendo da composição.

Evitar aparência excessivamente arredondada de aplicativo SaaS.

---

# 32. Bordas

Padrão:

```css
border: 1px solid var(--color-border);
```

Bordas deverão ser discretas.

Evitar contornos excessivos.

---

# 33. Sombras

Sombras deverão ser utilizadas com moderação.

```css
--shadow-soft:
  0 16px 50px rgba(21, 42, 70, 0.08);
```

Uso:

* menus
* cards sobrepostos
* imagens flutuantes pontuais

Não aplicar sombra em todos os componentes.

---

# 34. Botão principal

Visual:

```text
Background: Orange
Texto: White
```

Características:

* altura confortável
* boa área de toque
* texto curto
* peso 700
* sem efeitos exagerados

Exemplo:

```tsx
<Button variant="primary">
  Encontre uma unidade
</Button>
```

---

# 35. Primary Button

```css
min-height: 48px;
padding-inline: 24px;

background: var(--color-brand-orange);
color: white;

border-radius: var(--radius-pill);
```

Hover:

```css
background: var(--color-brand-orange-dark);
```

---

# 36. Secondary Button

```text
Background: transparente
Border: Navy
Texto: Navy
```

Em fundo escuro:

```text
Border: White
Texto: White
```

---

# 37. Text Link

Links editoriais poderão utilizar:

```text
Texto
→
```

ou underline discreto.

Evitar aparência de botão quando a ação não exigir um botão.

---

# 38. Estados de interação

Todos os elementos interativos deverão possuir:

```text
default
hover
focus
active
disabled
```

O estado `focus-visible` é obrigatório.

---

# 39. Focus

Referência:

```css
outline: 2px solid var(--color-brand-orange);
outline-offset: 3px;
```

Não remover outline sem substituição acessível.

---

# 40. Header

O header deverá ser visualmente leve.

Altura aproximada:

```text
Mobile: 64–72px

Desktop: 72–88px
```

Elementos:

* logo
* navegação
* CTA

---

# 41. Header transparente

No hero poderá utilizar:

```text
background: transparent
```

Desde que exista contraste suficiente.

---

# 42. Header após scroll

Poderá utilizar:

```text
off-white
```

ou

```text
rgba(...)
backdrop-filter
```

O blur deverá ser moderado.

---

# 43. Navegação desktop

Itens curtos.

Exemplo:

```text
Ambientes
Soluções
Unidades
Contato
```

Evitar menu com muitas opções.

---

# 44. Navegação mobile

Menu simples em overlay ou drawer.

Não utilizar animação complexa.

Itens grandes e fáceis de tocar.

---

# 45. Logo

O logo oficial deverá ser utilizado sem alterações estruturais.

Não:

* redesenhar
* deformar
* alterar proporções
* aplicar efeitos
* criar versões não aprovadas

Versões necessárias para o site:

```text
Logo principal
Logo para fundo claro
Logo para fundo escuro
Favicon / símbolo
```

Caso alguma dessas versões não exista nos arquivos oficiais, deverá ser solicitada antes de criar uma adaptação definitiva.

---

# 46. Uso de imagens

A fotografia terá papel central no design.

As imagens deverão representar:

* produto instalado
* ambientes reais ou extremamente realistas
* transformação
* arquitetura
* utilização do espaço

A própria comunicação atual da marca prioriza linha de camas retráteis, transformações antes/depois, ambientes e catálogo de soluções.

---

# 47. Estilo fotográfico

Preferir:

* iluminação natural
* tons quentes
* madeira
* arquitetura contemporânea
* ambientes organizados
* composição realista
* sensação residencial
* escala humana

Evitar:

* renders artificiais
* saturação exagerada
* HDR excessivo
* ambientes irreais
* aparência de banco de imagens

---

# 48. Imagens de transformação

Para before/after:

```text
Mesma câmera
Mesma lente
Mesmo enquadramento
Mesma luz
Mesma decoração
```

Somente o estado do produto deverá mudar.

Essa regra é obrigatória para crossfade.

---

# 49. Aspect Ratios

Sugestões:

Hero desktop:

```text
16:9
```

Ambientes editoriais:

```text
4:3
3:2
```

Mobile:

```text
4:5
3:4
```

Imagens imersivas:

```text
viewport dependent
```

Não forçar a mesma proporção em todos os contextos.

---

# 50. Object Fit

Padrão:

```css
object-fit: cover;
```

Quando o produto precisar permanecer integral:

```css
object-fit: contain;
```

A decisão deverá ser feita por asset.

---

# 51. Cards

Cards serão utilizados apenas quando ajudarem na organização.

Possíveis usos:

* diferenciais
* unidades
* informações rápidas

Não transformar toda a página em cards.

---

# 52. Store Card

Conteúdo:

```text
Nome
Local
Endereço
Horário
WhatsApp
Rota
```

Design:

* simples
* espaçoso
* sem excesso de sombras
* CTA claro

---

# 53. Diferenciais

Os diferenciais deverão priorizar tipografia e composição.

Exemplo:

```text
01
Melhor aproveitamento do espaço
```

em vez de:

```text
[ícone genérico]
Melhor aproveitamento do espaço
```

Ícones só deverão ser utilizados quando adicionarem significado.

---

# 54. Formulários

Campos:

* nome
* WhatsApp
* cidade
* mensagem

Altura mínima:

```text
48px
```

Textarea:

```text
120px+
```

---

# 55. Inputs

Visual:

```text
Background claro
Border discreta
Texto escuro
Label permanente
```

Evitar depender apenas de placeholder.

---

# 56. Estado de foco do formulário

```css
border-color: var(--color-brand-orange);
```

Com outline acessível.

---

# 57. Estados de feedback

Necessários:

```text
erro
sucesso
enviando
desabilitado
```

Mensagens devem aparecer próximas ao campo relevante.

---

# 58. Números dos andares

Os números:

```text
01
02
03
04
05
```

serão elementos importantes da linguagem visual.

Podem utilizar:

```text
Poppins
ExtraBold
Orange
```

ou

```text
Poppins
ExtraBold
Navy
```

dependendo da seção.

---

# 59. Indicadores editoriais

Podemos utilizar:

* linhas finas
* números
* pequenos textos
* setas
* barras
* marcas verticais

Inspirados em linguagem arquitetônica.

Evitar elementos decorativos sem função.

---

# 60. Linha vertical do storytelling

Opcionalmente, a página poderá utilizar uma linha vertical discreta que conecte alguns andares.

Ela não precisa permanecer visível durante toda a página.

O elemento deve ser editorial, não parecer timeline corporativa.

---

# 61. Ícones

Preferir:

* SVG
* traço simples
* mesma espessura
* poucos detalhes

Evitar bibliotecas inteiras quando apenas alguns ícones forem necessários.

---

# 62. Breakpoints

Sugestão Tailwind:

```text
sm  → 640px
md  → 768px
lg  → 1024px
xl  → 1280px
2xl → 1536px
```

A interface deverá ser fluida entre eles.

---

# 63. Mobile

No mobile:

* uma coluna como padrão
* imagens grandes
* menos motion
* tipografia fluida
* CTAs com boa área de toque
* navegação simples

Não reduzir o desktop proporcionalmente.

O mobile deverá possuir composição própria.

---

# 64. Tablet

Tablet deverá ser tratado como breakpoint real.

Evitar que seja apenas uma versão ampliada do mobile.

Layouts de duas colunas poderão começar quando houver espaço adequado.

---

# 65. Desktop

Desktop deverá explorar:

* espaço negativo
* imagens amplas
* contraste entre texto e fotografia
* composição assimétrica
* sticky pontual
* tipografia grande

Sem comprometer leitura.

---

# 66. Wide Screens

Acima do container máximo:

* manter conteúdo centralizado
* permitir backgrounds full-width
* impedir textos excessivamente largos
* impedir imagens de perderem enquadramento

---

# 67. Acessibilidade de cor

Todos os textos deverão manter contraste WCAG AA.

Laranja não deverá ser utilizado indiscriminadamente como cor de textos pequenos sobre branco.

Quando necessário:

```text
Orange → background / detalhe
Navy → texto
```

---

# 68. Reduced Motion

O Design System deverá considerar:

```css
@media (prefers-reduced-motion: reduce)
```

Nenhum elemento visual poderá depender exclusivamente de animação para transmitir informação.

---

# 69. Tokens CSS

Criar arquivo:

```text
src/styles/tokens.css
```

Estrutura inicial:

```css
:root {
  /* Brand */
  --color-brand-orange-dark: #d74e01;
  --color-brand-orange: #fa6b09;
  --color-brand-blue: #4d7392;
  --color-brand-navy: #152a46;

  /* Neutrals */
  --color-white: #ffffff;
  --color-off-white: #f7f5f2;
  --color-surface: #f0ede8;
  --color-border: #ddd8d1;
  --color-text: #18212a;
  --color-text-muted: #66707a;

  /* Layout */
  --container-max: 1440px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --space-11: 160px;
}
```

---

# 70. Tailwind

Sempre que possível, os tokens deverão ser refletidos na configuração do Tailwind.

Evitar valores arbitrários repetidos como:

```text
mt-[83px]
text-[#152a46]
px-[37px]
```

Quando o valor se repetir ou fizer parte do sistema, criar token.

---

# 71. Componentes fundamentais

O Design System deverá possuir no mínimo:

```text
Container
Section
Heading
Text
Button
Link
Image
StoreCard
Input
Textarea
```

Elementos mais específicos devem ser criados apenas quando necessários.

---

# 72. Variants

Evitar dezenas de variantes.

Exemplo de botão:

```ts
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'text';
```

Exemplo de tema:

```ts
type Theme =
  | 'light'
  | 'white'
  | 'navy';
```

---

# 73. Conteúdo editorial

A identidade da marca afirma a combinação entre:

```text
Funcionalidade
+
Estética
```

e posiciona a cama retrátil como produto principal dentro de uma ideia maior de ambientes transformáveis.

O Design System deverá traduzir isso.

Por isso:

```text
Forma segue função.
```

Nenhum recurso visual deverá existir apenas para demonstrar criatividade.

---

# 74. Marca e produto

O produto deverá sempre receber mais destaque que os elementos gráficos.

Hierarquia ideal:

```text
1. Ambiente
2. Produto
3. Mensagem
4. Marca
5. Interface
```

A interface deverá desaparecer quando o usuário estiver observando uma transformação.

---

# 75. Uso do laranja

O laranja possui forte presença na identidade visual existente.

No website ele deverá funcionar como sinal de ação.

Utilizar principalmente em:

```text
CTA
números
hover
links
microdetalhes
```

Evitar grandes fundos laranja repetidamente.

Isso preservará sofisticação.

---

# 76. Uso do navy

O navy será a principal cor institucional para dar profundidade ao website.

Pode ser usado em:

* footer
* manifesto
* header
* textos
* seções especiais

Ele deverá equilibrar o laranja.

---

# 77. Uso do azul

O azul intermediário deverá ter papel secundário.

Exemplos:

* pequenos detalhes
* números alternativos
* backgrounds discretos
* linhas
* componentes informativos

---

# 78. Dark Mode

Não haverá dark mode como funcionalidade.

Seções escuras fazem parte da composição editorial, não de uma preferência de tema do usuário.

---

# 79. Consistência

Não adicionar novas:

* cores
* fontes
* sombras
* radii
* escalas
* estilos de botão

sem necessidade clara.

Antes de criar um novo padrão, verificar se já existe solução no Design System.

---

# 80. Exceções

Composições editoriais poderão excepcionalmente quebrar grid ou container.

Exemplos:

```text
Imagem full bleed
Número gigante
Texto parcialmente sobreposto
```

Essas exceções deverão ser intencionais.

Não deverão comprometer mobile ou acessibilidade.

---

# 81. Critérios de aceite visual

Uma seção será considerada consistente quando:

* respeitar a paleta
* respeitar a hierarquia tipográfica
* utilizar espaçamentos do sistema
* possuir contraste adequado
* funcionar em mobile
* não introduzir padrões visuais isolados
* destacar produto e conteúdo antes da interface

---

# 82. Regras para Claude Code

O Claude Code deverá:

* utilizar as cores institucionais oficiais
* utilizar os tokens definidos neste documento
* não inventar novas cores sem necessidade
* utilizar Poppins e Glacial Indifference conforme definido
* manter Poppins como principal fonte de interface
* utilizar CSS responsivo e fluido
* evitar valores arbitrários repetitivos
* criar componentes simples
* evitar UI libraries pesadas
* manter acessibilidade
* implementar `focus-visible`
* implementar `prefers-reduced-motion`
* preservar a proporção do logo
* não aplicar efeitos visuais ao logo
* não transformar a página em um sistema excessivo de cards
* não utilizar gradientes sem aprovação
* não utilizar glassmorphism como linguagem principal
* não utilizar sombras exageradas
* não adicionar dark mode
* não adicionar novas fontes
* não adicionar novas cores institucionais
* não alterar a identidade visual da Moduflexa

---

# 83. Fonte de verdade da identidade

A identidade visual fornecida pela Moduflexa deverá prevalecer sobre decisões genéricas de design.

O material oficial define:

```text
#D74E01
#FA6B09
#4D7392
#152A46

Poppins
Glacial Indifference
```

Além do posicionamento baseado em:

```text
funcionalidade
estética
transformação
flexibilidade
aproveitamento inteligente do espaço
```

A identidade foi apresentada como representação de uma marca de móveis retráteis e flexíveis que combina inteligência do espaço com design sofisticado.

---

# 84. Elementos ainda não definidos pelo material recebido

O material de identidade fornecido não estabelece de forma suficientemente detalhada:

* zona de proteção oficial do logo
* tamanho mínimo digital do logo
* versões cromáticas técnicas completas
* grid construtivo da marca
* regras detalhadas para iconografia
* especificação formal de fotografia para web

Esses itens não deverão ser inventados como regras oficiais da marca.

As decisões descritas neste documento para esses pontos são regras específicas do website e poderão ser ajustadas quando forem fornecidos materiais oficiais complementares.

---

# 85. Decisão final

O Design System da Moduflexa deverá utilizar a identidade existente como fundação, mas adaptar sua aplicação para uma experiência digital mais arquitetônica, premium e editorial.

A página não deverá tentar demonstrar a identidade utilizando muitas cores e elementos simultaneamente.

A força visual deverá vir de:

```text
produto
+
ambiente
+
tipografia
+
espaço
+
transformação
```

As cores institucionais entram como assinatura.

Quando houver conflito entre decoração e produto, o produto prevalece.

Quando houver conflito entre variedade e consistência, a consistência prevalece.

Quando houver conflito entre tendência visual e identidade da Moduflexa, a identidade prevalece.
