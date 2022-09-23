class SocketService {
    #socket;

    constructor(socket) {
        this.#socket = socket;
    }

    USER_CONNECTED() {
        console.log('A user connected');
    }

    USER_DISCONNECTED() {
        console.log('A user disconnected')
    }

    USER_SEND_REVIEW(data) {
        console.log(data);
    }
}

module.exports.SocketService = SocketService;