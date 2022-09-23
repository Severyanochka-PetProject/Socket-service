const { Review } = require('../db/models/review.model');
const { SOCKET_EVENT } = require('../enums/socket.events');

class SocketService {
    #socket;

    constructor(socket) {
        this.#socket = socket;
    }

    USER_CONNECTED() {
        console.log('A user connected');
    }

    USER_DISCONNECTED() {
        console.log('A user disconnected');
    }

    async USER_SEND_REVIEW(data) {
        if (!Object.keys(data).length || data === null) {
            this.#socket.emit(SOCKET_EVENT.REVIEW_ERROR_SEND);
            return;
        }
        console.log(data);
        try {
            await Review.create({
                text: data.reviewText,
                stars: null,
                id_user: data.user.id_user,
                id_food: data.product.id_food
            });

            this.#socket.emit(SOCKET_EVENT.REVIEW_SUCCESSFULLY_SEND);
        } catch (err) {
            this.#socket.emit(SOCKET_EVENT.REVIEW_ERROR_SEND);
            console.log(err);
        }
    }
}

module.exports.SocketService = SocketService;