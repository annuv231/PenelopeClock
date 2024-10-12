FROM nginx:latest
COPY ./Clock usr/share/nginx/html
EXPOSE 80
CMD ["nginx" "-g" "daemon off;"]
