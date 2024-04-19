FROM node:20-slim as base
WORKDIR /usr/src/app

FROM base as deps
ENV NODE_ENV production
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn --immutable --silent

FROM base as builder
COPY --from=deps /usr/src/app/node_modules node_modules
COPY . .
RUN yarn build

FROM base
USER node
COPY --from=builder --chown=node:node /usr/src/app/public public
COPY --from=builder --chown=node:node /usr/src/app/.next/standalone .
COPY --from=builder --chown=node:node /usr/src/app/.next/static .next/static
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "server.js" ]

HEALTHCHECK CMD [ "node", "-e", "'fetch(\"http://localhost:3000\").catch(process.exit(1))'" ]