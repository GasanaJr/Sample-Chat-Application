const { Socket } = require('socket.io');
//const models = require('../database/models');
const models = require('../../e-comm-team-amigos-bn/src/database/models')
const verifySocketToken = require('../helpers/verifySocketToken');

module.exports = async function(socket,next ) {
    if (socket.handshake.query && socket.handshake.query.token) {
        const decodedData = await verifySocketToken(
          socket.handshake.query.token,
        );
        console.log(decodedData)
        const user = await models.User.findOne({ where: {id :decodedData.userId} });
       // console.log(user)
        socket.data.user = user?.dataValues;
        next();
      } else {
        next(new Error("Authentication error"));
      }
}

