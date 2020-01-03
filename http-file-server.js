const http = require('http');
const fs = require('fs');

const server = http.createServer(function callback (request, response) {
  let filePath = process.argv[3];
  let fileStream = fs.createReadStream(filePath);
  fileStream.pipe(response); // src.pipe(dst)
})

server.listen(Number(process.argv[2]));
