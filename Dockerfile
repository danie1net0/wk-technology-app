FROM node:lts-alpine AS node
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/wk-technology-web /usr/share/nginx/html
