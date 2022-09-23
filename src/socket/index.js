const initSocket = (io) => {

    io.on('connection', (socket) => {
        console.log('A user connected');
    })
    
    io.on('disconnect', () => {
        console.log('A user disconnected')
    })
}

module.exports.initSocket = (io) => initSocket(io);