const jwt = require('jsonwebtoken');
SECRET_KEY = process.env.SECRET_KEY;
module.exports = function verifySocketToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
          reject(new Error(err.message));
        } else {
          if (!decoded) {
            reject(new Error("No decoded token"));
          }
          return resolve(decoded);
        }
      });
    });
  }