const moment = require('moment');

function formatMessage(userName, msg) {

    return {
        userName,
        msg,
        time: moment().format('h:mm a')
    }

}

module.exports = formatMessage;