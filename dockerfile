# Corpo do dashboard
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --include=dev  # Ou apenas npm install se não houver ENV NODE_ENV=production
COPY . .
RUN npm run build

# Produção (Servindo os arquivos)
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Se você tiver um arquivo nginx.conf personalizado:
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
