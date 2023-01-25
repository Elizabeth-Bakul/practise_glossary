FROM node:slim

WORKDIR /bakulina-itmo-server

COPY bin ./bin
COPY data ./data
COPY public ./public
COPY routes ./routes
COPY views ./views
COPY package.json .
COPY app.js .

RUN npm install
CMD npm start

EXPOSE 3000


