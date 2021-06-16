FROM node:14.15.1-alpine

WORKDIR /usr/local/app

COPY package.json .
COPY yarn.lock .

RUN yarn global add @nestjs/cli

RUN apk add --no-cache git
RUN yarn install

CMD yarn run start:debug