FROM alpine

WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN apk add --no-cache npm && npm i
COPY . .

EXPOSE 3000

CMD npm run serve