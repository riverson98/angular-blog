FROM nginx:1.17.1-alpine

COPY /dist/angular-blog /usr/share/nginx/html
