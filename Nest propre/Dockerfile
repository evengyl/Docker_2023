FROM ubuntu:20.04


RUN apt-get update -y
RUN apt-get install curl -y
# RUN apt-get install gcc g++ make -y
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash
RUN apt-get install -y nodejs
# RUN apt-get install -y build-essential
RUN apt-get install git -y
RUN npm install -g @nestjs/cli@9.0.0
RUN npm install sqlite3 --save
RUN apt-get install nano -y

WORKDIR /usr/share/
RUN nest new backend -p npm

RUN chmod -R 777 /usr/share/backend
RUN cd /usr/share/backend/
WORKDIR /usr/share/backend/

EXPOSE 3000

RUN npm run build
CMD ["node", "dist/main.js"]

# docker build --tag nest .

# docker run -dti -p 3000:3000 --name essai -v /src:/src test-nest
# docker run -dti -p 3000:3000 --name essai test-nest