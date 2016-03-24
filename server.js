var db = require('./lib/db'),
	io = require('socket.io-client');

var socket = io('https://websocket.btcc.com/');
socket.emit('subscribe', 'marketdata_cnybtc');
socket.emit('subscribe', 'marketdata_cnyltc');
socket.emit('subscribe', 'marketdata_btcltc');
socket.emit('subscribe', 'grouporder_cnybtc');
socket.emit('subscribe', 'grouporder_cnyltc');
socket.emit('subscribe', 'grouporder_btcltc');
socket.on('connect', function(){
	socket.on('trade', function (data) {
		console.log(data);
	});
	socket.on('ticker', function (data) {
		console.log(data);
	});
	socket.on('grouporder', function (data) {
		console.log(data);
	});
});

