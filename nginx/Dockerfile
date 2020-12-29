# Stage 1 - build frontend app
FROM node:10-alpine as build-deps

WORKDIR /app

COPY . /app
RUN npm install -s
RUN npm run build

# Stage 2 - nginx & frontend dist
FROM nginx:alpine

COPY nginx/prod.conf /etc/nginx/nginx.conf
COPY --from=build-deps /app/build/ /dist/

RUN mkdir -p /dist/landing-page-2021 && \
  mv /dist/static /dist/landing-page-2021/static

CMD ["nginx", "-g", "daemon off;"]
