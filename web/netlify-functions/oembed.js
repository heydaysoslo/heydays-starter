"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

const {
  extract
} = require('oembed-parser');

const handler = (event, context, callback) => {
  const {
    url
  } = JSON.parse(event.body);
  extract(url).then(data => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        result: data,
        status: 'success'
      })
    });
  }).catch(err => {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: err,
        status: 'error'
      })
    });
  });
};

exports.handler = handler;