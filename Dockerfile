FROM node:20-alpine as build

ARG PORT=3000

WORKDIR /app

RUN npm install -g pnpm

COPY --chown=node:node package.json package-lock.json ./

RUN CI=TRUE npm install --frozen-lockfile

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV=production

RUN CI=TRUE npm install --frozen-lockfile --prod

USER node

FROM node:20-alpine as production

WORKDIR /app

# RUN apk add bash

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=build /app/package.json ./package.json

EXPOSE ${PORT}

CMD ["node", "."]