const { Review } = require('../db/models/review.model');
const { SOCKET_EVENT } = require('../enums/socket.events');

class SocketService {
    #socket;
    #io;
    constructor(socket, io) {
        this.#socket = socket;
        this.#io = io;
    }

    USER_CONNECTED() {
        console.log('A user connected');
    }

    USER_DISCONNECTED() {
        console.log('A user disconnected');
    }
    // TODO: проверять что юзер существует по token 
    async USER_SEND_REVIEW(data) {
        if (!Object.keys(data).length || data === null || data.id_user <= 0) {
            this.#socket.emit(SOCKET_EVENT.REVIEW_ERROR_SEND);
            return;
        }

        try {
            await Review.create({
                text: data.text,
                stars: data.stars,
                id_user: data.id_user,
                id_food: data.id_food
            });

            this.#socket.emit(SOCKET_EVENT.REVIEW_SUCCESSFULLY_SEND);
            this.#io.sockets.emit(SOCKET_EVENT.REVIEW_NEW_REVIEW, data);
        } catch (err) {
            this.#socket.emit(SOCKET_EVENT.REVIEW_ERROR_SEND);
            console.log(err);
        }
    }
}

module.exports.SocketService = SocketService;