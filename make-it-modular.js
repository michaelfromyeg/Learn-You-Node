const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err)
  return console.log("error: " + err);

  for (var i of data) {
    console.log(i);
  }
});
