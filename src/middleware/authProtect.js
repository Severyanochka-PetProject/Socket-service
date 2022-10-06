const { api } = require('../api/axios');

const authProtect = async (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);

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

module.exports.authProtect = authProtect;