# 04 — Motion Guide

> **Projeto:** Website Moduflexa
> **Documento:** Guia de Motion e Interações
> **Versão:** 2.0
> **Status:** Direção vigente de animação
> **Documentos relacionados:** `00-project-blueprint.md`, `01-page-structure.md`, `02-design-system.md`, `03-storytelling.md`

---

# 1. Objetivo deste documento

Este documento define como animações e interações deverão ser utilizadas no website da Moduflexa.

O motion deverá:

* reforçar o storytelling
* ajudar a revelar transformações
* criar ritmo
* aumentar a percepção de qualidade
* orientar o olhar
* manter a experiência fluida

O motion não deverá:

* controlar a experiência inteira
* dificultar a leitura
* atrasar carregamento
* substituir conteúdo
* transformar o site em uma demonstração técnica

---

# 2. Princípio central

A regra principal é:

> **o movimento existe para explicar transformação, não para chamar atenção para si mesmo**

O usuário deve perceber o produto mudando.

Não deve pensar sobre a animação que fez isso acontecer.

---

# 3. Filosofia de implementação

A página deverá funcionar integralmente sem animações.

Ordem obrigatória:

```text
1. estrutura
2. conteúdo
3. responsividade
4. assets
5. motion
```

Nenhum bloco poderá depender do GSAP para existir visualmente.

---

# 4. Tecnologia principal

Utilizar:

```text
GSAP
ScrollTrigger
```

Apenas nos componentes que realmente precisam de motion.

Não adicionar outra biblioteca de animação no MVP.

---

# 5. Tecnologias fora do escopo

Não utilizar:

```text
Three.js
WebGL
Canvas
Framer Motion
Lenis
Locomotive Scroll
bibliotecas de smooth scroll
sequências de vídeo por frames
```

Se alguma dessas tecnologias for considerada futuramente, deverá existir aprovação explícita antes da implementação.

---

# 6. Scroll

O scroll principal deverá permanecer nativo.

Não interceptar continuamente a rolagem.

Não criar aceleração artificial.

Não alterar a velocidade global do scroll.

Não bloquear a posição do usuário sem motivo claro.

---

# 7. Tipos de animação permitidos

O projeto poderá utilizar:

* fade
* reveal
* mask reveal
* translate curto
* scale muito sutil
* parallax discreto
* crossfade de imagens
* sticky pontual
* animação de números
* linhas editoriais
* microinterações
* mudança suave de background

---

# 8. Tipos de animação a evitar

Evitar:

* bounce
* elastic
* rotações exageradas
* zoom agressivo
* objetos voando pela tela
* efeitos 3D decorativos
* textos entrando de vários lados
* animação contínua sem interação
* efeitos de partículas
* cursores customizados
* distorções
* glitch
* elementos flutuando constantemente

A linguagem da Moduflexa deverá permanecer arquitetônica e sofisticada.

---

# 9. Duração

Referências:

## Microinterações

```text
150–250ms
```

## Reveals

```text
400–700ms
```

## Mudança de estado

```text
500–900ms
```

## Transições editoriais maiores

```text
700–1200ms
```

Evitar durações longas que façam o usuário esperar.

---

# 10. Easing

Preferir movimentos suaves.

Exemplos conceituais:

```text
power2.out
power3.out
power2.inOut
```

Evitar easings com comportamento elástico ou exagerado.

---

# 11. Entrada de conteúdo

Textos poderão entrar com:

```text
opacity: 0 → 1
y: 20px → 0
```

ou variação equivalente.

Movimentos devem ser pequenos.

Não deslocar títulos por centenas de pixels.

---

# 12. Reveal de título

Referência:

```text
Headline
↓
pequeno fade + translate
```

O título deve ficar legível rapidamente.

Não animar palavra por palavra por padrão.

---

# 13. Animação por caracteres

Evitar split text excessivo.

Pode ser utilizado apenas em uma ou duas frases de manifesto, se realmente agregar valor.

Não aplicar a todos os headings.

---

# 14. Hero

Motion permitido:

* entrada suave da headline
* entrada do subtítulo
* entrada do CTA
* reveal da imagem
* indicador de scroll
* parallax sutil em desktop

O hero deve aparecer imediatamente.

Nenhuma animação poderá atrasar a leitura inicial.

---

# 15. Ordem sugerida no Hero

```text
Imagem disponível
↓
Headline
↓
Subheadline
↓
CTAs
```

A sequência inteira deve ser curta.

---

# 16. Indicador de scroll

Pode utilizar:

* linha
* seta
* pequeno texto

Exemplo:

```text
Explore
↓
```

Animação discreta.

Sem loop chamativo.

---

# 17. Introdução

Utilizar motion mínimo.

Possibilidades:

* fade da headline
* reveal do texto
* entrada de pequena linha editorial

Essa seção funciona como preparação.

---

# 18. Motion dos andares

Os andares serão o principal ponto de interação.

Estrutura base:

```text
Título
↓
Ambiente
↓
Transformação
↓
Próximo andar
```

O motion deve ajudar o usuário a perceber a mudança funcional.

---

# 19. Crossfade como padrão principal

Transformações deverão priorizar crossfade entre duas imagens no mesmo enquadramento.

Estrutura:

```text
image-closed
image-open
```

Ambas ocupam exatamente o mesmo container.

---

# 20. Implementação conceitual

```text
Imagem fechada
opacity 1

↓

scroll

↓

Imagem fechada
opacity 0

Imagem aberta
opacity 1
```

A geometria do container não muda.

Isso evita layout shift.

---

# 21. Requisito do crossfade

O efeito somente deverá ser utilizado quando as imagens possuírem:

* mesma câmera
* mesmo enquadramento
* mesma dimensão
* mesmo ponto de vista
* mesma iluminação
* mesma composição

Caso contrário, a mudança parecerá erro visual.

---

# 22. Crossfade e scroll

O crossfade poderá ser:

```text
A. disparado ao entrar no viewport
```

ou

```text
B. progressivo conforme o scroll
```

A opção B deverá ser usada apenas quando melhorar claramente a compreensão.

Não transformar toda a página em scrub.

---

# 23. Scrub

Usar `scrub` com moderação.

Bom uso:

```text
transformação visual direta entre móvel fechado e aberto
```

Mau uso:

```text
todo texto da página dependente da posição exata do scroll
```

---

# 24. Sticky

Sticky poderá existir em alguns andares no desktop.

Exemplo:

```text
texto permanece
imagem transforma
```

Mas o usuário deve continuar sentindo progresso.

---

# 25. Limite de sticky

Evitar seções que exijam várias alturas de viewport para concluir uma única mensagem simples.

Referência:

```text
1 a 1.5 viewport adicional
```

Quando possível.

Não utilizar sticky apenas porque tecnicamente é possível.

---

# 26. Sticky no mobile

No mobile, evitar sticky complexo.

Preferir sequência natural:

```text
imagem fechada
↓
imagem aberta
```

ou crossfade curto.

---

# 27. Parallax

Parallax poderá existir em:

* hero
* imagens full-width
* detalhes arquitetônicos

Amplitude pequena.

Referência:

```text
10–40px
```

Não utilizar parallax em todos os assets.

---

# 28. Números dos andares

Os números:

```text
01
02
03
04
05
```

podem receber pequenas animações.

Exemplos:

* fade
* entrada vertical
* linha se expandindo
* mudança de cor

Devem reforçar progressão.

---

# 29. Linhas editoriais

Linhas poderão aparecer com:

```text
scaleX: 0 → 1
```

ou:

```text
scaleY: 0 → 1
```

Duração curta.

Não desenhar linhas complexas ao redor de toda a interface.

---

# 30. Seção multifuncional

Se o Andar 04 mostrar três estados:

```text
Trabalho
Convivência
Descanso
```

a transição poderá utilizar:

```text
crossfade
+
mudança de label
```

Evitar carrossel automático.

O usuário deverá permanecer no controle.

---

# 31. Projeto completo

O Andar 05 poderá possuir uma experiência visual ligeiramente mais impactante.

Permitido:

* imagem ocupando maior parte do viewport
* reveal amplo
* crossfade
* background mudando
* texto sobreposto

Ainda assim, a interação precisa continuar simples.

---

# 32. Síntese da marca

A seção de manifesto deverá ter pouco motion.

Exemplo:

```text
headline aparece
↓
segunda frase aparece
```

Nada além disso é necessário.

O objetivo é criar pausa.

---

# 33. Seção de diferenciais

Cards ou itens poderão entrar de forma escalonada.

Exemplo:

```text
item 1
100ms
item 2
100ms
item 3
```

Não exagerar no stagger.

---

# 34. Unidades

Evitar motion complexo.

Permitido:

* reveal do título
* entrada dos cards
* hover discreto em desktop

A prioridade é conversão.

---

# 35. Botões

Hover desktop:

```text
background
border
color
```

ou pequeno movimento do ícone.

Exemplo:

```text
→ translateX(3px)
```

Nada mais.

---

# 36. Imagens interativas

Quando houver hover em imagem:

* scale máximo muito pequeno
* evitar crop excessivo
* duração suave

Referência:

```text
scale 1 → 1.02
```

---

# 37. Header

Ao sair do hero, o header poderá:

* receber background
* reduzir levemente altura
* ganhar border inferior
* ganhar blur sutil

Transição curta.

---

# 38. Menu mobile

Abrir com:

```text
opacity
+
translateY pequeno
```

ou drawer lateral simples.

Não criar animação teatral.

---

# 39. Links de âncora

A navegação poderá usar scroll suave nativo.

Não é necessário usar GSAP para isso.

---

# 40. Carregamento

Não utilizar splash screen.

Não utilizar porcentagem de loading.

Não esconder o site enquanto assets não críticos carregam.

---

# 41. Motion e imagens lazy-loaded

Não iniciar transformação antes das imagens necessárias estarem disponíveis.

Quando duas imagens participarem de crossfade:

* a primeira deverá estar visível
* a segunda poderá ser pré-carregada pouco antes da seção

---

# 42. Performance

Motion não pode provocar:

* layout thrashing
* reflow constante
* leitura repetida de layout
* animação de width/height quando transform resolve
* grandes filtros em tempo real

Preferir:

```text
transform
opacity
```

---

# 43. Propriedades prioritárias

Animar principalmente:

```css
transform
opacity
```

Evitar animar continuamente:

```css
width
height
top
left
box-shadow
filter
```

quando houver alternativa mais performática.

---

# 44. Will Change

Não aplicar `will-change` globalmente.

Usar apenas em elementos específicos quando necessário.

Remover quando não fizer sentido.

---

# 45. ScrollTrigger

Cada ScrollTrigger deverá existir por uma razão clara.

Obrigatório:

* cleanup
* contexto do componente
* evitar duplicação em re-render
* recalcular quando necessário

---

# 46. React

Componentes com GSAP poderão utilizar `"use client"`.

Mas não transformar componentes estáticos em Client Components apenas porque um filho possui animação.

Isolar o comportamento.

---

# 47. Exemplo de separação

Preferir:

```text
FloorSection
├── conteúdo server
└── TransformationMotion client
```

em vez de transformar toda a seção em Client Component.

---

# 48. Resize

Animações deverão continuar funcionando após resize.

Quando a lógica mobile e desktop for diferente, utilizar mecanismos adequados como `matchMedia`.

---

# 49. Orientação do dispositivo

Testar mudanças:

```text
portrait
↔
landscape
```

especialmente em tablets.

---

# 50. Reduced Motion

Suporte obrigatório:

```css
@media (prefers-reduced-motion: reduce)
```

Com movimento reduzido:

* remover parallax
* remover scrub
* remover grandes translates
* evitar sticky animado
* mostrar estados diretamente
* manter fades apenas quando discretos

---

# 51. Crossfade com Reduced Motion

Alternativa:

```text
Imagem fechada

Imagem aberta
```

ambas em sequência vertical.

Ou mostrar apenas o estado final quando o contexto já estiver claro.

A informação não pode desaparecer.

---

# 52. Mobile de baixa potência

O motion deve continuar leve em aparelhos intermediários.

Evitar:

* filtros blur animados grandes
* várias imagens 4K simultâneas
* dezenas de ScrollTriggers ativos
* parallax em todos os blocos

---

# 53. Estratégia de simplificação mobile

Desktop:

```text
sticky + crossfade + reveal
```

Mobile:

```text
reveal + crossfade curto
```

ou:

```text
duas imagens em sequência
```

A experiência mobile não precisa reproduzir literalmente a desktop.

---

# 54. Imagens antes de efeitos

Se um efeito prejudicar a qualidade visual do produto, remover o efeito.

A transformação deve ser fácil de entender.

---

# 55. Motion editorial

A sensação desejada é semelhante a:

```text
revista de arquitetura digital
```

Não:

```text
landing page de startup cheia de efeitos
```

---

# 56. Ritmo

Alternar momentos de movimento e pausa.

Exemplo:

```text
Hero
movimento leve

↓

Introdução
pausa

↓

Andar 01
transformação

↓

Andar 02
transformação

↓

Andar 03
mais simples

↓

Andar 04
ritmo

↓

Andar 05
impacto

↓

Manifesto
pausa
```

Isso evita fadiga.

---

# 57. Não animar tudo

Se todos os elementos entram com animação, nenhum parece especial.

Alguns conteúdos deverão simplesmente estar presentes.

---

# 58. Hover

Hover é aprimoramento.

Nenhuma funcionalidade poderá depender dele.

Mobile deve possuir acesso equivalente à informação.

---

# 59. Auto-play

Não utilizar:

* carrossel automático
* transformação automática repetitiva
* elementos mudando sem ação do usuário

A página deve permanecer previsível.

---

# 60. Vídeos

Vídeo não é necessário no MVP.

Caso seja utilizado futuramente:

* muted
* playsinline
* poster
* lazy loading
* controle de peso
* sem áudio automático

---

# 61. Motion e storytelling

Cada efeito deverá responder:

```text
O que o usuário deve perceber com este movimento?
```

Respostas aceitáveis:

```text
que a cama estava escondida

que o ambiente mudou de função

que estamos entrando em um novo andar

que esse conteúdo pertence à próxima etapa
```

Resposta não aceitável:

```text
porque fica bonito
```

---

# 62. Hierarquia de motion

Prioridade:

```text
1. transformação do produto
2. progressão narrativa
3. orientação
4. microinteração
5. decoração
```

Decoração é sempre a menor prioridade.

---

# 63. Motion budget

Meta conceitual:

```text
poucos efeitos
bem executados
```

Preferir quatro bons momentos de motion a vinte animações pequenas espalhadas pela página.

---

# 64. Critérios de aceite de animação

Uma animação será aprovada quando:

* melhora compreensão
* mantém leitura
* não causa layout shift
* funciona em mobile
* possui reduced-motion
* não prejudica performance
* não exige ação confusa
* não prende o usuário
* não chama mais atenção que o produto

---

# 65. Critérios de remoção

Remover uma animação quando:

* o conteúdo funciona melhor sem ela
* causa atraso
* dificulta mobile
* depende demais do scroll
* parece artificial
* exige assets adicionais sem benefício proporcional
* provoca bugs frequentes
* aumenta demais a complexidade

---

# 66. QA mínimo

Testar motion em:

```text
Chrome desktop
Safari desktop
Chrome Android
Safari iOS
```

Também testar:

```text
prefers-reduced-motion
resize
touch
scroll rápido
scroll reverso
refresh no meio da página
```

---

# 67. Scroll rápido

O usuário pode passar rapidamente por uma seção.

A página não poderá ficar presa em estado intermediário ou quebrado.

---

# 68. Scroll reverso

Crossfades e scrub devem funcionar ao subir a página.

Não assumir movimento apenas para baixo.

---

# 69. Refresh em âncora

Se a página abrir no meio:

```text
#unidades
```

ou for atualizada no meio do scroll, a interface deve permanecer funcional.

---

# 70. Conteúdo sem JavaScript

Quando possível, sem JavaScript:

* headings permanecem
* imagens permanecem
* textos permanecem
* CTAs permanecem

A experiência pode perder animação, mas não conteúdo.

---

# 71. Nomeação

Componentes de motion devem ter nomes objetivos.

Exemplos:

```text
ImageCrossfade
Reveal
FloorTransformation
ScrollProgress
```

Evitar nomes vagos como:

```text
CoolAnimation
MagicSection
FancyEffect
```

---

# 72. Organização sugerida

```text
src/
├── components/
│   └── motion/
│       ├── reveal.tsx
│       ├── image-crossfade.tsx
│       └── floor-transformation.tsx
│
└── lib/
    └── motion.ts
```

Criar apenas os arquivos realmente necessários.

---

# 73. Utilitários

`motion.ts` poderá armazenar:

* easings compartilhados
* durações
* helpers
* prefers reduced motion
* configurações recorrentes

Evitar abstração excessiva.

---

# 74. Tokens de motion

Podem ser definidos:

```ts
export const motion = {
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
  },
  ease: {
    out: 'power2.out',
    inOut: 'power2.inOut',
  },
}
```

Não criar um sistema gigantesco.

---

# 75. Desenvolvimento incremental

Implementar motion nesta ordem:

```text
1. Hero
2. Reveal simples
3. Andar 01
4. Validar performance
5. Demais transformações
6. Microinterações
7. Refinamento
```

Não animar a página inteira de uma só vez.

---

# 76. Primeira transformação como referência

O Andar 01 deverá ser implementado e aprovado antes de replicar o padrão.

Ele servirá como prova técnica para:

* crossfade
* sticky
* mobile
* performance
* reduced motion

Depois de validado, o padrão poderá ser reutilizado.

---

# 77. Não repetir por obrigação

Mesmo que o Andar 01 use crossfade, os outros não precisam obrigatoriamente usar exatamente a mesma interação.

Escolher a melhor forma de contar cada história.

---

# 78. Motion e identidade

A identidade da Moduflexa combina funcionalidade e estética.

O motion deverá seguir a mesma lógica:

```text
bonito
+
funcional
```

Se o efeito for bonito, mas não ajudar a experiência, ele não deverá existir.

---

# 79. Regras para Claude Code

O Claude Code deverá:

* utilizar GSAP somente quando necessário
* utilizar ScrollTrigger apenas em interações justificadas
* preservar scroll nativo
* não adicionar Lenis
* não adicionar Framer Motion
* não adicionar Three.js
* não adicionar WebGL
* não criar loaders
* não criar scroll hijacking
* implementar reduced motion
* limpar instâncias GSAP
* evitar excesso de `"use client"`
* animar transform e opacity sempre que possível
* validar mobile
* não implementar motion antes da estrutura estática
* não adicionar efeitos não descritos na documentação
* não aumentar a complexidade sem benefício claro

---

# 80. Decisão final

O motion do website da Moduflexa deverá transmitir transformação com naturalidade.

O usuário deverá sentir que:

```text
o ambiente mudou
```

e não que:

```text
o site executou um efeito
```

A principal animação do projeto será a própria mudança de função do espaço.

Todo o restante deverá servir essa ideia.

Quando houver conflito entre efeito e clareza, a clareza prevalece.

Quando houver conflito entre animação e performance, a performance prevalece.

Quando houver conflito entre movimento e produto, o produto prevalece.
