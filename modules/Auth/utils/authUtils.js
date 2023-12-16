// modules/auth/utils/authUtils.js
const DB = require('../../../config/db');
const jwt = require('jsonwebtoken');
const appConfig = require('../../../config/appConfig');
const userModel = require('../../Users/models/UsersModel');

exports.verifyTokenMiddleware = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token, appConfig.app.jwtSecret);
    const user = await userModel.getUsersById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
