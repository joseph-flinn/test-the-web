ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as build
WORKDIR /usr/app
COPY . .
RUN npm ci
RUN npm run build

FROM node:${NODE_VERSION}-alpine
LABEL org.opencontainers.image.source="https://github.com/bitwarden/test-the-web"
WORKDIR /usr/app
COPY --from=build /usr/app/client/build ./client/build
COPY --from=build /usr/app/api/build ./api/build
COPY --from=build /usr/app/api/node_modules ./api/node_modules
COPY --from=build /usr/app/api/.en[v] ./
CMD ["node", "api/build/app.js"]
