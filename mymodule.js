module.exports = function(ruta, ext, callback) {
  var fs = require('fs');
  var path = require('path');
  list = [];

  fs.readdir(ruta, doneReading);

  function doneReading(error, data) {
    if (error) {
      return callback (error);
    }
    for (i of data) {
      if (path.extname(i) == "."+ext) {
        list.push(i);
      }
    }
      return callback(null, list);
  }



}
