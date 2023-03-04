FROM node:lts-alpine

WORKDIR /usr/src/app
RUN npm i -g npm && chown -R node:node . && apk add --no-cache curl
USER node
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000

CMD npm run serve

HEALTHCHECK \
CMD curl localhost:3000
