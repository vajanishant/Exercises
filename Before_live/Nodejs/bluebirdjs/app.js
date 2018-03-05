const promise = require('bluebird');
const request = require('request');
let url = 'https:/google.com'
const get = async (url) =>  promise.fromNode(cb => {
  request.get(url, { json: 'force' }, (err, resp, payload) => {
    cb(err, payload); // resp is an Http#IncomingMessage, payload is the parsed version
  });
})

get(url);