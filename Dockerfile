FROM nginx:latest
COPY ./Clock usr/share/nginx/html
 
CMD ["nginx", "-g", "daemon off;"]
