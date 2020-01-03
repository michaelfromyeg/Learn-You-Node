let dir = process.argv[2]; // "path/to/dir"
let ext = process.argv[3]; // "txt"
let str = "";

const fs = require('fs');
const path = require('path');

fs.readdir(dir, function(err, list) {
  if (err) return console.error(err)
  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == str.concat(".", ext)) {
      console.log(list[i]);
    }
  }
});
