FROM node:lts-slim as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i -g npm && npm ci
COPY . .
RUN npm run build

FROM node:lts-slim
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN apt-get update && apt-get -y install curl && rm -rf /var/lib/apt/lists/* && apt-get clean
USER node
COPY --from=builder --chown=node:node /usr/src/app/.next .next
COPY --from=builder --chown=node:node /usr/src/app/public public
COPY --from=builder /usr/src/app/node_modules node_modules
COPY --from=builder /usr/src/app/package.json .
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD [ "run", "serve" ]

HEALTHCHECK \
CMD curl localhost:3000
