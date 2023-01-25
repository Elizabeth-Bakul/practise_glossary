const express = require('express');
const path = require('path');
const logger = require('morgan');
const mindMap = require("./data/mind-map.json");
const glossary = require("./data/glossary.json");

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (request, response, next) => {
  response.render('index', {
    glossary: JSON.stringify(glossary),
    mindMap: JSON.stringify(mindMap)
  });
});

server.get('/glossary', (request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  response.end(JSON.stringify(glossary));
});

server.get('/mind-map', (request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  response.end(JSON.stringify(mindMap));
});

module.exports = server;



