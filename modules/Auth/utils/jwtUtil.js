// modules/auth/utils/jwtUtil.js
const jwt = require('jsonwebtoken');
const appConfig = require('../../../config/appConfig');

exports.generateToken = (user) => {
  const payload = {
    userId: user.id,
    username: user.username,
    // Add more claims if needed
  };

  const options = {
    //expiresIn: appConfig.app.jwtExpiration,
    // Add more options if needed
  };

  return jwt.sign(payload, appConfig.app.jwtSecret, options);
};
