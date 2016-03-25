var io = require('socket.io-client');

var socket = io.connect('https://websocket.btcc.com/', {
    'force new connection': true,  // 是否允许建立新的连接
    reconnect: true,           // 是否允许重连
    'reconnection delay': 200, // 重连时间间隔 毫秒
    'max reconnection attempts': 10 // 重连次数上限
});

socket.on('connect', function(){
	console.log("连接BTC服务器成功!")
	socket.emit('subscribe', 'marketdata_cnybtc');
	// socket.emit('subscribe', 'marketdata_cnyltc');
	// socket.emit('subscribe', 'marketdata_btcltc');
	// socket.emit('subscribe', 'grouporder_cnybtc');
	// socket.emit('subscribe', 'grouporder_cnyltc');
	// socket.emit('subscribe', 'grouporder_btcltc');

	socket.on('trade', function (data) {
		console.log(data);
	});
	socket.on('ticker', function (data) {
		// console.log(data);
	});
	socket.on('grouporder', function (data) {
		// console.log(data);
	});
});

socket.on('disconnect', function(){
    console.log('连接丢失!');
    socket.reconnect();
});
socket.on('reconnect', function(transport_type,reconnectionAttempts){
    console.log('重新连接中...',transport_type,reconnectionAttempts);
});
