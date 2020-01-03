const bl = require('bl');
const http = require('http');

http.get(process.argv[2], function callback (res) {
  res.pipe(bl (function(err,data) {
    if (err) {
      return callback (error);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
});
