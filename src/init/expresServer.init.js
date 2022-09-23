const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5600 || process.env.PORT;

app.use(cors({
    origin: ['http://localhost:3000/','https://tankistpro-food.ru/'],
    credentials: true,
}));

module.exports.expressApp = app;

module.exports.startExpressApp = () => {
    return new Promise((resolve, reject) => {

        app.listen(PORT, (err) => {
            if (err) {
                reject(false)
            }
            console.log(`ExpressApp listening on PORT: ${ PORT }`);
            resolve(true)
        })
    });

};