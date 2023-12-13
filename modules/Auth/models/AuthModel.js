// modules/auth/models/userModel.js
const DB = require('../../../config/db');

exports.createUser = (user) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO users SET ?', user, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.updateUserPassword = (userId, newPassword) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE users SET password = ? WHERE id = ?', [newPassword, userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};
