FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Vite lee estas variables al compilar. Railway pasa como ARG las variables del servicio que se llamen igual.
#   VITE_API_URL  -> servidor de partidas (ranking, cuentas, perfiles)
#   VITE_GAME_URL -> el juego en el navegador (servicio `web`); si queda vacía se usa la de config.ts
#   VITE_GOOGLE_CLIENT_ID -> Client ID de Google (el mismo que GOOGLE_CLIENT_ID del servidor); vacío = sin botón de Google
ARG VITE_API_URL=https://server-production-f7f1.up.railway.app
ARG VITE_GAME_URL=
ARG VITE_GOOGLE_CLIENT_ID=
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_GAME_URL=$VITE_GAME_URL
ENV VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID
RUN npm run build

# Sitio estático: nginx lo sirve. La plantilla usa $PORT (Railway lo define solo).
FROM nginx:1.27-alpine
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
# Cabeceras de seguridad (se incluyen desde cada location; ver nginx.conf.template).
COPY security-headers.conf /etc/nginx/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html
ENV PORT=8080
EXPOSE 8080
