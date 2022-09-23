const { startExpressApp } = require('./init/expresServer.init');
const { startSocketApp } = require('./init/socketServer.init');

startExpressApp().then(() => {}).catch(() => {});
startSocketApp();