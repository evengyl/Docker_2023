FROM node:18-alpine

WORKDIR /app_angu

RUN npm install -g @angular/cli@latest

COPY package*.json ./

RUN npm i

COPY . .

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]