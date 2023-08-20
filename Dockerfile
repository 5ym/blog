FROM node:lts-slim as base
FROM base as builder
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn --immutable
COPY . .
RUN yarn build

FROM base
WORKDIR /usr/src/app
ENV NODE_ENV production
USER node
COPY --from=builder --chown=node:node /usr/src/app/public public
COPY --from=builder --chown=node:node /usr/src/app/.next/standalone .
COPY --from=builder --chown=node:node /usr/src/app/.next/static .next/static
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "server.js" ]
