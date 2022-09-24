const { Server } = require("socket.io");
const http = require('http');

const { expressApp } = require("./expresServer.init");
const { initSocket } = require('../socket/index');

const PORT = 5605;

const server = http.createServer(expressApp);
const io = new Server(server, {
    cors: {
        origin: 'https://tankistpro-food.ru/',
        credentials: true
    }
});

const startSocketApp = () => {
    initSocket(io);
    
    server.listen(PORT, () => {
        console.log(`SocketApp listening on PORT: ${ PORT }`);
    });
};

module.exports = {
    io,
    startSocketApp
};