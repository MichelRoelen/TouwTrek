'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var board = new five.Board();
let led = null;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

board.on('ready', function() {
  console.log('Arduino is ready.');

    //sensor arduino shizzle 
  
    
  var button10 = new five.Button(10);
  var button9 = new five.Button(9);
  var button8 = new five.Button(8); 
  var button7 = new five.Button(7);
  var button6 = new five.Button(6);
  var button5 = new five.Button(5);
  var button4 = new five.Button(4);
  //io shizzle
  io.on('connection', function(socket){
    console.log('got socket connection');
    
    //arduino doorstuur data
    var Btn10info = 0;
    var Btn9info = 1;
    var Btn8info = 2;
    var Btn7info = 3;
    var Btn6info = 4;
    var Btn5info = 5;
    var Btn4info = 6;
    var info = 10;
    button10.on("press", function() {
      console.log( "Button pressed" );
      info = Btn10info;
      console.log(info);
      socket.send(info);
    });

    button9.on("press", function() {
      console.log( "Button pressed" );
      info = Btn9info;
      console.log(info);
      socket.send(info);
    });
    button8.on("press", function() {
      console.log( "Button pressed" );
      info = Btn8info;
      console.log(info);
      socket.send(info);
    });
    button7.on("press", function() {
      console.log( "Button pressed" );
      info = Btn7info;
      console.log(info);
      socket.send(info);
    });
    button6.on("press", function() {
      console.log( "Button pressed" );
      info = Btn6info;
      console.log(info);
      socket.send(info);
    });
    button5.on("press", function() {
      console.log( "Button pressed" );
      info = Btn5info;
      console.log(info);
      socket.send(info);
    });
    button4.on("press", function() {
      console.log( "Button pressed" );
      info = Btn4info;
      console.log(info);
      socket.send(info);
    });
  });
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);