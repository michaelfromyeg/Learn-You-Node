const http = require('http');
const bl = require('bl');

var responses = [];
var count = 0;

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(responses[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function callback (res) {
  res.pipe(bl (function(err,data) {
    if (err) {
      return callback (error);
    }
    data = data.toString();
    responses[index] = data;
    count++;


    if (count == 3) {
      printResults();
    }
  }))
})
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
