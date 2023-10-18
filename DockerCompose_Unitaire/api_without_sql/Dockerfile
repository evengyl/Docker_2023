FROM node:18-alpine

WORKDIR /app

COPY ./index.js .
COPY ./package.json .
COPY ./package-lock.json .
    
RUN npm install

CMD ["npm", "start"]