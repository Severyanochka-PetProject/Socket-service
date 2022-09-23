const { SocketService } = require('../services/socket.service');
const  { SOCKET_EVENT} = require('../enums/socket.events');

const initSocket = (io) => {

    io.on(SOCKET_EVENT.USER_CONNECT, (socket) => {
        const socketService = new SocketService(socket);

        socketService.USER_CONNECTED();

        socket.on(SOCKET_EVENT.USER_DISCONNECT, () => socketService.USER_DISCONNECTED())

        socket.on(SOCKET_EVENT.USER_SEND_REVIEW, (data) => socketService.USER_SEND_REVIEW(data))
    })
}

module.exports.initSocket = (io) => initSocket(io);