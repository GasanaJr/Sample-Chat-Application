const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

module.exports = (payload = {}) => {
    let isValidPayload = true;
    if (typeof payload === 'number') {
      isValidPayload = false;
    } else if (typeof payload === 'null') {
      isValidPayload = false;
    } else if (typeof payload === 'object' && !Object.keys(payload).length) {
      isValidPayload = false;
    }
    return isValidPayload
      ? jwt.sign(payload, process.env.SECRET_KEY, expiresIn)
      : null;
}