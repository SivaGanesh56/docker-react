# Phase 1
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


# it will create build in app directory

# Phase 2

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html