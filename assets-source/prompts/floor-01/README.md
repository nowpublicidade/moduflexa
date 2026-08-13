# Andar 01 — Sala que vira quarto

Prova técnica do sistema de crossfade (docs/04-motion-guide.md §76, docs/07-development-rules.md §105).
Este par precisa ser aprovado antes de produzirmos os outros 4 andares.

## Por que dois arquivos separados

`closed.md` e `open.md` compartilham um bloco idêntico ("SCENE DNA") que descreve
câmera, lente, arquitetura, decoração, luz e cor. Só o parágrafo final muda
(estado da cama). Isso é proposital: mesmo com prompts de texto idênticos, duas
gerações independentes raramente saem consistentes o suficiente para crossfade
(docs/06-asset-guide.md §5-9, §21 do motion guide).

## Como gerar (ordem importa)

1. Gere **closed.md** primeiro.
2. Para **open.md**, se a ferramenta permitir editar/usar uma imagem de
   referência (image-to-image, "edit this image", inpainting), **use a imagem
   fechada gerada no passo 1 como referência** e peça apenas a mudança descrita
   — não gere do zero. Isso é o que realmente garante câmera/luz/decoração
   idênticas. Ferramentas que aceitam isso: Nano Banana / Gemini (image
   editing), GPT Image (edit), Midjourney (`--cref` + remix), Flux Kontext.
3. Se sua ferramenta só faz texto→imagem sem edição, gere `open.md` do zero e
   aceite que pode levar mais tentativas até bater com a imagem fechada.

## Antes de me devolver as imagens

Sobreponha as duas em 50% de opacidade (Photoshop, Figma, ou qualquer editor).
Se algo fixo (janela, tapete, luminária, quadro, planta) aparecer duplicado ou
deslocado, o par **não está pronto** — gere de novo (docs/06 §66, regra
obrigatória, não é sugestão).

## Formato de entrega

- Landscape, próximo de 3:2 (referência: `docs/06-asset-guide.md` §25, hero/ambientes desktop)
- Qualquer formato de arquivo (PNG/JPG) — eu converto para AVIF/WebP e crio os
  crops mobile depois de aprovado
- Nomeie como `closed.png` / `open.png` e devolva os dois juntos nesta pasta
  ou me envie diretamente

## O que NÃO fazer

- Não peça para a ferramenta "melhorar" ou "estilizar" a segunda imagem — o
  objetivo é a MESMA foto com um elemento diferente, não uma reinterpretação
- Não inclua pessoas (docs/06 §23 — dificulta a consistência da pose entre os
  dois estados)
- Não deixe a ferramenta inventar um mecanismo de cama diferente do descrito —
  a geometria vem de fotos reais de referência do produto (ver prompt)
