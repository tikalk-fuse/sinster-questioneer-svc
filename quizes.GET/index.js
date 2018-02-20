'use strict';

const mock = require('./mocks/client-view.json');
const mockView = JSON.stringify(mock);
exports.quizes = (request, response) => {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('x-foo', 'bar');
  response.send(mockView);
};

exports.event = (event, callback) => {
  callback();
};
