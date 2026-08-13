# 05 — SEO & Performance

> **Projeto:** Website Moduflexa
> **Documento:** SEO, SEO Local e Performance
> **Versão:** 2.0
> **Status:** Diretrizes vigentes
> **Documentos relacionados:** `00-project-blueprint.md`, `01-page-structure.md`, `02-design-system.md`, `03-storytelling.md`, `04-motion-guide.md`

---

# 1. Objetivo deste documento

Este documento define os requisitos de:

* SEO técnico
* SEO on-page
* SEO local
* arquitetura semântica
* metadados
* dados estruturados
* indexação
* performance
* Core Web Vitals
* otimização de imagens
* estratégia de carregamento
* fontes
* JavaScript
* monitoramento

O objetivo é garantir que o website seja:

* rápido
* indexável
* semanticamente claro
* acessível para mecanismos de busca
* preparado para buscas locais
* eficiente em dispositivos móveis

---

# 2. Princípio geral

SEO e performance fazem parte da arquitetura.

Não devem ser adicionados apenas no final do projeto.

Toda decisão deverá considerar:

```text
usuário
+
mecanismo de busca
+
performance
```

Nenhum deles deverá ser sacrificado sem necessidade.

---

# 3. Objetivo de busca

A home deverá ajudar a Moduflexa a ser compreendida como marca associada a:

```text
móveis retráteis
cama retrátil
móveis multifuncionais
móveis inteligentes
móveis para apartamentos pequenos
móveis para studios
móveis para ambientes compactos
aproveitamento inteligente de espaço
```

A comunicação existente da marca já trabalha diretamente com móveis retráteis, cama retrátil em São Paulo, ambientes transformáveis, mesas, armários e complementos.

---

# 4. Estratégia de intenção

A página deverá atender principalmente três tipos de intenção.

## 4.1 Descoberta

Usuário pesquisando:

```text
como aproveitar apartamento pequeno
móveis para apartamento pequeno
ideias para studio
como ter quarto de hóspedes em apartamento pequeno
```

---

# 5. Intenção de solução

Usuário procurando:

```text
cama retrátil
móveis retráteis
mesa retrátil
móveis multifuncionais
cama embutida
```

---

# 6. Intenção local

Usuário procurando:

```text
cama retrátil SP
cama retrátil São Paulo
móveis retráteis São Paulo
loja de cama retrátil
móveis para studio São Paulo
```

A comunicação atual da marca já utiliza a associação “Cama Retrátil SP” e localização na Pompéia como parte da presença digital.

---

# 7. Página única

O MVP será uma única página pública principal.

URL:

```text
/
```

Isso significa que a página deverá concentrar:

* posicionamento
* categorias principais
* contexto semântico
* localização
* marca
* conversão

Não criar páginas artificiais apenas para aumentar quantidade de URLs.

---

# 8. Expansão futura

No futuro, poderão existir páginas específicas caso haja conteúdo suficiente e intenção real.

Exemplos:

```text
/cama-retratil
/moveis-retrateis
/unidades/sao-paulo
/projetos
```

Essas rotas não fazem parte do MVP.

---

# 9. Title

O `<title>` deverá conter:

* marca
* categoria principal
* localização quando relevante

Exemplo inicial:

```text
Moduflexa | Camas e Móveis Retráteis em São Paulo
```

O texto definitivo poderá ser ajustado após pesquisa de palavras-chave.

Evitar titles excessivamente longos.

---

# 10. Meta Description

Direção inicial:

```text
Transforme ambientes compactos com camas e móveis retráteis Moduflexa. Soluções inteligentes para apartamentos e studios em São Paulo.
```

A descrição deverá:

* explicar a proposta
* contextualizar categoria
* incluir localização naturalmente
* incentivar clique sem linguagem promocional exagerada

---

# 11. H1

A página terá apenas um H1 principal.

Duas direções possíveis:

```text
O espaço da sua casa pode fazer muito mais
```

ou:

```text
Móveis inteligentes para espaços que fazem mais
```

Se a opção mais conceitual for utilizada, o conteúdo imediatamente próximo deverá contextualizar claramente:

```text
móveis retráteis
ambientes compactos
cama retrátil
```

---

# 12. Headings

Estrutura recomendada:

```text
H1
Hero

H2
Introdução

H2
Andar 01

H2
Andar 02

H2
Andar 03

H2
Andar 04

H2
Andar 05

H2
Síntese / soluções

H2
Unidades

H2
Contato
```

H3 somente quando existir subdivisão real.

---

# 13. Semântica HTML

Utilizar elementos apropriados:

```html
<header>
<nav>
<main>
<section>
<article>
<address>
<footer>
```

Não utilizar `<div>` para tudo.

---

# 14. Main

A página deverá possuir somente um:

```html
<main>
```

O conteúdo principal inteiro estará dentro dele.

---

# 15. Sections

Cada grande seção deverá possuir:

* `id`
* heading
* contexto claro

Exemplo:

```html
<section id="ambientes" aria-labelledby="ambientes-title">
```

---

# 16. Navegação por âncoras

Links principais poderão utilizar:

```text
#ambientes
#solucoes
#unidades
#contato
```

Isso facilita navegação e estrutura.

---

# 17. Conteúdo indexável

Todo conteúdo importante deverá existir no HTML.

Não colocar textos relevantes apenas:

* dentro de imagem
* dentro de canvas
* em pseudoelementos
* depois de interação obrigatória

Motion poderá alterar apresentação, mas não existência do conteúdo.

---

# 18. JavaScript e indexação

A página deverá renderizar conteúdo principal independentemente do JavaScript de motion.

Server Components devem ser utilizados sempre que adequado.

GSAP será melhoria visual.

Não requisito para compreender a página.

---

# 19. Texto e SEO

Não escrever para “agradar o algoritmo”.

A prioridade é clareza.

Exemplo ruim:

```text
A Moduflexa oferece cama retrátil em São Paulo para quem busca cama retrátil SP e móveis retráteis São Paulo.
```

Exemplo adequado:

```text
A Moduflexa cria camas e móveis retráteis para apartamentos e studios em São Paulo.
```

---

# 20. Keyword Stuffing

Proibido.

Não repetir termos artificialmente em:

* headings
* footer
* alt
* cards
* links
* schema

---

# 21. Contexto semântico

Utilizar variações naturais:

```text
móveis retráteis
móveis flexíveis
móveis multifuncionais
ambientes compactos
studio
apartamento compacto
cama retrátil
mobiliário inteligente
aproveitamento de espaço
```

Isso ajuda mecanismos de busca a compreender a entidade e categoria.

---

# 22. Conteúdo da marca

A comunicação da marca posiciona a Moduflexa como referência em móveis retráteis e flexíveis, unindo inteligência de espaço e design sofisticado.

Essa associação deverá permanecer explícita em algum ponto da página.

---

# 23. Produto principal

A cama retrátil continuará recebendo destaque.

Isso deverá aparecer em:

* conteúdo
* imagens
* texto semântico
* metadata quando apropriado

Mas sem reduzir a Moduflexa apenas a uma única categoria.

---

# 24. Links

Links deverão possuir texto descritivo.

Evitar:

```text
Clique aqui
Saiba mais
Veja aqui
```

quando houver alternativa melhor.

Preferir:

```text
Conheça uma unidade
Fale com a Moduflexa
Veja como chegar
```

---

# 25. Links externos

Links para:

* WhatsApp
* Instagram
* rota
* outros serviços

devem utilizar atributos apropriados quando necessário.

Não adicionar `nofollow` indiscriminadamente.

---

# 26. Canonical

A página principal deverá possuir canonical apontando para sua URL oficial.

Exemplo conceitual:

```html
<link rel="canonical" href="https://dominio.com.br/" />
```

O domínio definitivo deverá ser configurado por ambiente.

---

# 27. Sitemap

Criar:

```text
src/app/sitemap.ts
```

No MVP poderá conter apenas a home.

A estrutura deverá permitir expansão futura.

---

# 28. Robots

Criar:

```text
src/app/robots.ts
```

Produção:

```text
indexável
```

Ambientes de preview/staging deverão impedir indexação quando possível.

---

# 29. Open Graph

Definir:

* title
* description
* image
* url
* siteName
* locale
* type

Imagem OG deverá ser específica para compartilhamento.

Não utilizar automaticamente uma imagem vertical do site.

---

# 30. Twitter / Social Metadata

Configurar metadata compatível com cards sociais.

O mesmo asset OG poderá ser reutilizado quando adequado.

---

# 31. Favicon

Necessário:

* favicon
* Apple touch icon
* ícone adequado para manifest se utilizado

Utilizar símbolo oficial da marca quando disponível.

---

# 32. Alt Text

Toda imagem informativa precisa de `alt`.

O alt deverá descrever função ou conteúdo.

Exemplo:

```text
Sala compacta com cama retrátil Moduflexa fechada
```

Imagem seguinte:

```text
Mesmo ambiente com a cama retrátil aberta
```

---

# 33. Alt e SEO

Não transformar alt em campo de keywords.

Evitar:

```text
cama retrátil SP móveis retráteis São Paulo cama embutida
```

Alt é acessibilidade primeiro.

---

# 34. Imagens decorativas

Quando forem puramente decorativas:

```html
alt=""
```

Não inventar descrição desnecessária.

---

# 35. SEO Local

A seção de unidades deverá ser semanticamente forte.

Cada unidade deverá conter quando disponível:

```text
nome
endereço
bairro
cidade
estado
CEP
telefone
WhatsApp
horário
rota
```

---

# 36. Endereço

Utilizar:

```html
<address>
```

quando apropriado.

Evitar esconder endereço apenas dentro de mapa ou imagem.

---

# 37. NAP

As informações:

```text
Name
Address
Phone
```

deverão permanecer consistentes entre:

* website
* Google Business Profile
* redes sociais
* materiais da marca

---

# 38. Dados das unidades

Fonte sugerida:

```text
src/data/stores.ts
```

Exemplo:

```ts
export const stores = [
  {
    name: 'Moduflexa Pompéia',
    city: 'São Paulo',
    state: 'SP',
    address: '...',
    phone: '...',
    whatsapp: '...',
  },
]
```

---

# 39. Structured Data

O projeto deverá avaliar a utilização de:

```text
Organization
LocalBusiness
FurnitureStore
```

Escolher o schema que melhor represente os dados reais.

Não inserir propriedades que a empresa não possui.

---

# 40. Organization Schema

Pode conter:

```text
name
url
logo
sameAs
contactPoint
```

Somente informações confirmadas.

---

# 41. LocalBusiness / Store

Quando houver dados completos de uma unidade, poderá incluir:

```text
name
address
telephone
openingHours
geo
url
sameAs
```

Não inventar coordenadas ou horários.

---

# 42. Múltiplas unidades

Quando houver várias unidades, cada uma poderá possuir entidade própria no JSON-LD.

Não duplicar a organização inteira desnecessariamente.

---

# 43. FAQ Schema

Não criar FAQ apenas para obter rich result.

Só utilizar caso exista uma seção real de perguntas e respostas na página e o formato esteja adequado às diretrizes vigentes dos mecanismos de busca.

FAQ não é requisito do MVP.

---

# 44. Breadcrumbs

Não são necessários na home one-page.

Não criar breadcrumbs artificiais.

---

# 45. GEO / mecanismos de IA

A página deverá ser semanticamente clara também para mecanismos de resposta e busca assistida por IA.

Priorizar:

* frases completas
* entidades claras
* localização clara
* categorias claras
* benefícios concretos
* relações entre produto e uso
* headings descritivos

---

# 46. Clareza de entidade

A página deve responder claramente:

```text
Quem é a Moduflexa?

O que vende?

Que problema resolve?

Onde atende?

Qual é o principal produto?

Que outras soluções oferece?
```

Sem exigir que o mecanismo deduza tudo pelas imagens.

---

# 47. Performance como requisito

Performance é parte da experiência da marca.

O site deve carregar rápido especialmente em:

```text
smartphone
4G
hardware intermediário
```

Não otimizar apenas para desktop conectado à fibra.

---

# 48. Core Web Vitals

Metas:

```text
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
```

Devem ser tratadas como metas de produção.

---

# 49. Lighthouse

Metas internas:

```text
Performance ≥ 90
Accessibility ≥ 95
Best Practices ≥ 95
SEO ≥ 95
```

Lighthouse não substitui teste real.

---

# 50. Budget inicial

Objetivo para recursos críticos:

```text
HTML + CSS + JS
< 500 KB
```

Não interpretar esse valor como permissão para adicionar dependências até atingir o limite.

Quanto menos, melhor.

---

# 51. JavaScript

Minimizar JavaScript enviado ao cliente.

Prioridades:

```text
Server Components
↓
componentes estáticos
↓
Client Components apenas onde necessário
```

---

# 52. "use client"

Não colocar `"use client"` em:

* página inteira
* layout inteiro
* seções puramente estáticas

Isolar interações.

---

# 53. Dependências

Cada dependência nova deverá responder:

```text
Qual problema real ela resolve?
```

Se a resposta puder ser:

```text
CSS
React
browser API
```

não adicionar biblioteca.

---

# 54. Tree Shaking

Importar apenas o necessário.

Especialmente:

* GSAP
* ícones
* utilitários

Evitar imports globais grandes.

---

# 55. Imagens

As imagens serão provavelmente os maiores assets da página.

Formatos preferidos:

```text
AVIF
WebP
```

Fallback automático quando necessário.

---

# 56. Next Image

Utilizar `next/image` onde apropriado.

Benefícios:

* dimensões reservadas
* formatos modernos
* tamanhos responsivos
* lazy loading
* otimização

---

# 57. Width e Height

Toda imagem deverá possuir dimensões conhecidas ou container com proporção definida.

Objetivo:

```text
evitar CLS
```

---

# 58. Sizes

Configurar `sizes` corretamente.

Exemplo conceitual:

```text
mobile → 100vw
desktop duas colunas → 50vw
```

Não fazer o navegador baixar imagem de 1600px para exibir em 400px sem necessidade.

---

# 59. Hero Image

Imagem principal pode utilizar:

```text
priority
```

somente quando for efetivamente candidata a LCP.

Não marcar várias imagens como priority.

---

# 60. Preload

Preload apenas de recursos críticos.

Possíveis:

```text
fonte principal
imagem LCP
```

Não preload de todos os ambientes.

---

# 61. Lazy Loading

Todos os ambientes abaixo da primeira dobra deverão utilizar lazy loading quando adequado.

Estratégia:

```text
Hero
→ imediato

Andar 01
→ próximo / preparado

Andares posteriores
→ lazy
```

---

# 62. Crossfade e carregamento

Em uma transformação:

```text
closedImage
openImage
```

a segunda imagem deve estar disponível antes de começar o crossfade.

Pré-carregar pouco antes da seção entrar no viewport quando necessário.

---

# 63. Peso de imagens

Metas iniciais por asset:

## Mobile

```text
100–200 KB
```

## Desktop

```text
200–350 KB
```

Esses valores são referência, não regra cega.

Uma imagem importante poderá ultrapassar ligeiramente se a diferença visual justificar.

---

# 64. Resolução

Não exportar assets gigantes apenas por segurança.

Definir variações próximas dos tamanhos reais de exibição.

---

# 65. Crop responsivo

Quando desktop e mobile precisarem de composições diferentes, utilizar assets diferentes.

Exemplo:

```text
floor-01-closed-desktop.avif
floor-01-closed-mobile.avif
```

Não depender de `object-position` para resolver enquadramentos incompatíveis.

---

# 66. Imagens geradas

Assets gerados por IA ou render deverão passar por:

* revisão visual
* compressão
* resize
* remoção de metadata desnecessária
* validação de consistência entre estados

Não enviar arquivos originais pesados diretamente para produção.

---

# 67. Fontes

A identidade utiliza Poppins e Glacial Indifference.

Performance deverá ser considerada antes de carregar todos os pesos.

Usar apenas os necessários.

---

# 68. Font Weights

Objetivo inicial:

Poppins:

```text
400
700
```

Adicionar 800 somente onde realmente utilizado.

Glacial Indifference:

carregar apenas pesos efetivamente usados.

---

# 69. Font Display

Configurar:

```text
font-display: swap;
```

ou estratégia equivalente via Next.js.

---

# 70. Self Hosting

Preferir fontes locais ou `next/font` quando possível.

Evitar dependência de request externo para fontes críticas.

---

# 71. Fallback

Definir fallback adequado para reduzir mudança de layout durante carregamento.

---

# 72. CSS

Evitar CSS global excessivo.

Preferir:

* Tailwind
* tokens
* CSS pontual

Não carregar frameworks paralelos.

---

# 73. Tailwind

Produção deve remover classes não utilizadas automaticamente.

Evitar gerar classes dinamicamente de forma que o build não consiga detectá-las.

---

# 74. Third-party Scripts

Scripts externos possuem alto custo.

Avaliar cuidadosamente:

* analytics
* pixels
* chat
* widgets
* mapas

---

# 75. Analytics

Carregar de forma não bloqueante.

Eventos importantes:

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

# 76. Pixels de mídia

Se Meta Pixel ou outros scripts forem necessários:

* carregar corretamente
* evitar duplicação
* respeitar consentimento quando aplicável
* medir impacto

---

# 77. Google Maps

Não incorporar mapa pesado no MVP por padrão.

Preferir:

```text
endereço
+
botão Como chegar
```

que abre Google Maps externamente.

---

# 78. WhatsApp

Links deverão utilizar URL apropriada.

O clique deverá ser rastreado.

Não carregar widget externo apenas para criar botão de WhatsApp.

---

# 79. Formulário

Caso exista:

* validação leve
* mínimo JavaScript
* feedback claro
* proteção básica contra spam

Evitar bibliotecas enormes apenas para quatro campos.

---

# 80. Caching

Assets estáticos com hash deverão utilizar caching longo.

Vercel/Next.js gerenciará boa parte disso automaticamente.

---

# 81. CDN

Assets públicos deverão ser servidos de forma eficiente.

Evitar hospedar imagens grandes em serviços lentos externos quando puderem ser otimizadas pelo projeto.

---

# 82. CLS

Principais cuidados:

* dimensões de imagem
* espaço reservado
* fontes
* header
* conteúdo assíncrono
* formulários
* motion

Nada deve empurrar o conteúdo inesperadamente.

---

# 83. LCP

Candidato provável:

```text
imagem ou conteúdo do hero
```

Prioridades:

* resposta rápida
* asset otimizado
* não bloquear com JS
* não esconder hero atrás de animação

---

# 84. INP

Evitar:

* handlers pesados
* scroll listeners manuais constantes
* cálculos grandes
* scripts terceiros excessivos

ScrollTrigger deverá ser usado de forma controlada.

---

# 85. Main Thread

A página não deverá realizar grandes tarefas JavaScript durante carregamento.

Motion deve iniciar após estrutura básica estar pronta.

---

# 86. SEO e Motion

Não utilizar:

```text
opacity: 0
```

permanentemente em conteúdo caso JavaScript falhe.

Se GSAP esconder elementos para reveal, garantir fallback seguro.

---

# 87. No-JS

Sem JavaScript, o usuário deverá conseguir:

* ler
* navegar
* visualizar imagens principais
* encontrar unidade
* clicar em contatos

A página perderá apenas efeitos.

---

# 88. Mobile

Performance deve ser validada em viewport mobile real.

Não apenas DevTools desktop em tamanho reduzido.

---

# 89. Teste de rede

Validar pelo menos:

```text
Fast 4G
```

e simulação mais lenta durante desenvolvimento.

---

# 90. Testes

Ferramentas recomendadas:

```text
Lighthouse
PageSpeed Insights
Chrome Performance
Network panel
Web Vitals
```

---

# 91. Ambiente de produção

Métricas reais de usuários deverão ser observadas após lançamento quando houver volume suficiente.

Dados reais prevalecem sobre benchmarks locais.

---

# 92. Erros 404

Como o MVP possui apenas uma página, links internos quebrados não deverão existir.

Configurar comportamento padrão do Next.js para páginas inexistentes.

---

# 93. Redirecionamentos

Se o domínio antigo possuir URLs indexadas, mapear antes do lançamento.

Não remover páginas existentes sem avaliar redirects.

Essa análise depende do domínio atual e não está definida nesta documentação.

---

# 94. www / non-www

Escolher apenas uma versão canônica.

Redirecionar a outra.

---

# 95. HTTPS

Produção obrigatoriamente em HTTPS.

---

# 96. Trailing Slash

Definir padrão consistente.

Não gerar múltiplas URLs equivalentes.

---

# 97. Search Console

Após publicação:

* verificar propriedade
* enviar sitemap
* acompanhar indexação
* acompanhar Core Web Vitals
* analisar consultas

---

# 98. Google Business Profile

A seção de unidades deverá utilizar os mesmos dados do perfil local.

Se houver divergência, corrigir na fonte apropriada.

---

# 99. Conteúdo local futuro

Caso a franquia cresça significativamente, poderá ser criada estratégia específica de páginas por unidade.

Exemplo futuro:

```text
/unidades/pompeia
/unidades/campinas
/unidades/sorocaba
```

Somente quando houver:

* unidade real
* conteúdo próprio
* dados completos
* valor para busca

---

# 100. Evitar doorway pages

Não criar dezenas de páginas por cidade alterando apenas o nome da localização.

Cada página futura precisa ter valor próprio.

---

# 101. Critérios de aceite SEO

O site será aprovado quando:

* possuir title e description
* possuir H1 único
* hierarquia de headings estiver correta
* canonical estiver definido
* sitemap funcionar
* robots funcionar
* Open Graph estiver configurado
* imagens importantes possuírem alt
* conteúdo principal estiver no HTML
* dados locais estiverem claros
* schema utilizado for válido e verdadeiro
* links não estiverem quebrados

---

# 102. Critérios de aceite de performance

O site será aprovado quando:

* não houver CLS perceptível
* hero carregar rapidamente
* imagens posteriores forem lazy
* não houver loaders desnecessários
* não houver dependências grandes injustificadas
* mobile permanecer fluido
* motion não travar scroll
* Core Web Vitals estiverem dentro ou próximos das metas
* Lighthouse não apontar problemas críticos evitáveis

---

# 103. Regras para Claude Code

O Claude Code deverá:

* preservar Server Components por padrão
* minimizar Client Components
* utilizar metadata do Next.js
* criar `sitemap.ts`
* criar `robots.ts`
* configurar canonical
* configurar Open Graph
* utilizar HTML semântico
* manter H1 único
* utilizar headings em ordem lógica
* adicionar alt correto
* utilizar `next/image`
* definir `sizes`
* evitar imagens sem dimensão
* lazy load de conteúdo não crítico
* não adicionar scripts terceiros sem necessidade
* não incorporar Google Maps pesado por padrão
* não adicionar widgets de WhatsApp
* não adicionar bibliotecas grandes de formulário
* não adicionar keywords artificialmente
* não criar páginas adicionais para SEO sem aprovação
* não inventar dados estruturados
* não inventar horários, endereços ou informações da empresa
* executar Lighthouse durante QA

---

# 104. Informações ainda pendentes

Antes do lançamento definitivo, confirmar:

* domínio oficial
* title final
* meta description final
* URL canonical
* URL da imagem OG
* logo final
* dados completos da empresa
* dados completos da unidade
* telefone
* WhatsApp
* horário
* redes sociais
* Google Business Profile
* analytics
* pixels
* política de privacidade
* existência ou não de formulário

---

# 105. Decisão final

SEO não deverá transformar o site em um texto feito para mecanismos de busca.

Performance não deverá transformar o site em uma experiência visual pobre.

O objetivo é equilibrar:

```text
clareza
+
velocidade
+
marca
+
conteúdo
+
experiência
```

A Moduflexa deverá ser facilmente compreendida por uma pessoa e por um mecanismo de busca.

O site deverá parecer visualmente sofisticado sem ser tecnicamente pesado.

Quando houver conflito entre um efeito visual e Core Web Vitals, a performance prevalecerá.

Quando houver conflito entre keyword e naturalidade, a naturalidade prevalecerá.

Quando houver conflito entre quantidade de páginas e qualidade de conteúdo, a qualidade prevalecerá.
