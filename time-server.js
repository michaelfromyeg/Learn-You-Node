const net = require('net');
var strftime = require('strftime') // not required in browsers

var server = net.createServer(function (socket) {
  socket.end(printDate() + "\n");
});

function printDate() {
  return strftime('%Y-%m-%d %H:%M');
}

server.listen(Number(process.argv[2]));
