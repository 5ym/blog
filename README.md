# blog

```shell
# start dev
docker run --rm -w /usr/src/app -v .:/usr/src/app node:lts-slim yarn
docker run --rm -w /usr/src/app -v .:/usr/src/app -p 3000:3000 -it node:lts-slim yarn dev
```
