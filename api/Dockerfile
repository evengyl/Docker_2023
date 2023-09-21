FROM node:18-alpine

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./
#COPY package*.json ./

RUN npm install

COPY index.js ./

EXPOSE 3000

CMD ["npm", "start"]