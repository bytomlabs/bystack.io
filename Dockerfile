FROM nginx:1.15-alpine

COPY public/ /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT nginx -g "daemon off;"