// modules/auth/models/AuthModel.js
const { executeQuery } = require('../../../config/db');

exports.createUser = (user) => {
  const sql = 'INSERT INTO users SET ?';
  return executeQuery(sql, [user]);
};

exports.getUserByUsername = (username) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  return executeQuery(sql, [username])
    .then((results) => results[0]);
};

exports.updateUserPassword = (userId, newPassword) => {
  const sql = 'UPDATE users SET password = ? WHERE id = ?';
  return executeQuery(sql, [newPassword, userId]);
};

exports.getUserById = (userId) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  return executeQuery(sql, [userId])
    .then((results) => results[0]);
};
