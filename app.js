const PORT = 3000;

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const fs = require('fs');
const app = express();
let server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');       

    //emit message from server to user first time
    socket.emit('newMessage', modifyLogs(fs.readFileSync('./logfile/sample.log',{ encoding: 'utf8', flag: 'r' })));

    // continously watch for the file changes
    fs.watchFile("./logfile/sample.log", (curr, prev) => {
        if(curr.mtime != prev.mtime){
            socket.emit('newMessage', getLastLine(fs.readFileSync("./logfile/sample.log", "utf8")));
        }
    }); 

    // // listen for message from user
    // socket.on('createMessage', (newMessage) => {
    //     console.log('newMessage', newMessage);
    // });

    // when server disconnects from user
    socket.on('disconnect', () => {
        console.log('disconnected from user');
    });
});

app.get("/logs", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.listen(PORT);

function modifyLogs(logData){
    let finalData = logData.split('\n');
    return finalData.slice(-10);
}

function getLastLine(logData){
    let x = logData.split('\n');
    return [x[x.length-1]];
}