FROM node:16-alpine

WORKDIR /usr/src/app
RUN npm i -g npm && chown -R node:node .
USER node
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build && apk add --no-cache curl

EXPOSE 3000

CMD npm run serve

HEALTHCHECK \
CMD curl localhost:3000
