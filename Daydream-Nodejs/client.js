
const WebSocket = require('ws');

let ws = new WebSocket('ws://localhost:5555');

ws.onopen = function() {
    console.log('open')
}

ws.onmessage = function(ev) {
    let _data = JSON.parse(ev.data);

    console.log(_data);
}