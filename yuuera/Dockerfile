FROM node:18.15.0-alpine

RUN mkdir -p /var/www/dockerize-nuxt/yuuera
WORKDIR /var/www/dockerize-nuxt/yuuera

COPY package*.json ./
COPY yarn.lock ./
COPY nuxt.config.ts ./
RUN yarn set version 1.22.18
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "node", " .output/server/index.mjs" ]