const { api } = require('../api/axios');

const authProtectExpress = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            error: "Token empty"
        });
    }

    try {
        const response = await api.get('api/v1/auth/validate', {
            headers: {
                'Authorization': token
            }
        });
        if (!response.data.status) {
            return res.status(401).json({
                error: "Invalid token"
            });
        }

        req.payload = response.data.payload;
    } catch (error) {
        return res.status(401).json(error.response.data);
    }

    // eslint-disable-next-line no-undef
    return next();
};

const parseTokenData = async (socket, next) => {
    const token = socket.handshake.auth.token;

    if (!token) {
        return next();
    }

    try {
        const response = await api.get('api/v1/auth/validate', {
            headers: {
                'Authorization': token
            }
        });
        if (!response.data.status) {
            return next();
        }

        socket.handshake.payload = response.data.payload;
    } catch (error) {
        return next();
    }

    // eslint-disable-next-line no-undef
    return next();
};

module.exports = {
    authProtectExpress,
    parseTokenData
};