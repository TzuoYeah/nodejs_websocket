const WebSocket = require('ws');
 
const ws = new WebSocket.Server({
  port: 8080
});

ws.on('connection', function connection(ws) {
  console.log('server connection')
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  ws.send('WebSocket connection.');
});