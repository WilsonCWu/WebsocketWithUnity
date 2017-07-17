/*
const http = require ('http');

http.createServer((request, response) =>{

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello, Daydream!\n');
    response.end();

}).listen(0917);
*/

const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 5555 });

wss.on("connection", (ws) => {
   console.info("websocket connection open");

   if (ws.readyState === ws.OPEN) {
       ws.send(JSON.stringify({
           msg1: 'msg'
       }))

       setInterval(() => {
            ws.send(JSON.stringify({
                msg2: 'msg 2'
            }))
       }, 1000)
   }
});

