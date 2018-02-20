'use strict';

const cors = r => {
    r.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, HEAD');
    r.setHeader('Access-Control-Allow-Origin', '*');
    r.setHeader('Access-Control-Max-Age', '3000');
};
const mock = require('./mocks/client-view.json');
const mockView = JSON.stringify(mock);
exports.quizes = (request, response) => {
  response.status(200);
  cors(response);
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('x-foo', 'bar');
  
  response.send(mockView);
};

exports.event = (event, callback) => {
  callback();
};
