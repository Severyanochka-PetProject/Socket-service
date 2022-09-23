const { startExpressApp, expressApp } = require('./init/expresServer.init');
const { startSocketApp, io } = require('./init/socketServer.init');

startExpressApp().then(() => {}).catch(() => {});
startSocketApp();