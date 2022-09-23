require('dotenv').config();

const { startExpressApp } = require('./init/expresServer.init');
const { startSocketApp } = require('./init/socketServer.init');
const { connectToDataBase } = require('./db/index');

connectToDataBase().then(() => {
    startExpressApp().then(() => {}).catch(() => {});
    startSocketApp();
});