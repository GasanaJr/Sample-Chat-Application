//const models = require('../database/models');
const models = require('../../e-comm-team-amigos-bn/src/database/models')
const { Socket } = require('socket.io');
const formatMessage = require('../helpers/messageHelper');
// const users = {};
const chat = async(socket) => {
    // socket.on("connection", (username) => {
    //     console.log(`User ${username} has Joined`);
    //     users[socket.id] = username;
    //     socket.emit("User connected", username);
    //     console.log(users)
    // })

    socket.on("message", async(msg) => {
        const { userName, id} = socket.data.user;
        models.Chat.create({content: msg, userId: id}).then(() => {
            console.log(`New message received: ${msg} by username ${userName}`);
            socket.broadcast.emit('message', formatMessage(userName,msg));
        })
    })
}

module.exports = {
    chat
}