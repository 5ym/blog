FROM node:16-alpine

WORKDIR /usr/src/app
RUN npm i -g npm && chown -R node:node .
USER node
COPY . .
RUN npm ci && npm run build

EXPOSE 3000

CMD npm run serve