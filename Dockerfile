# Etapa de build: next build com output:'export' produz a pasta out/.
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# NEXT_PUBLIC_BASE_PATH fica ausente de propósito: aqui o site é servido na
# raiz do domínio. O GitHub Pages passa "/moduflexa" pelo próprio workflow.
RUN npm run build

# Etapa de runtime: só arquivos estáticos.
# Não troque por "next start": com output:'export' o Next aborta por design.
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
