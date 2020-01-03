let file = process.argv[2];

const fs = require('fs');

fs.readFile(file, function(err, data) {
    console.log(data.toString().split('\n').length - 1);
  });
