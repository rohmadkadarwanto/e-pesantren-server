// modules/user/models/userModel.js
const db = require('../../../config/db');

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (error, results) => {
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
    db.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users SET ?', [userData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newUser = { id: results.insertId, ...userData };
        resolve(newUser);
      }
    });
  });
};

exports.updateUser = (userId, updatedUserData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE users SET ? WHERE id = ?', [updatedUserData, userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: userId, ...updatedUserData });
      }
    });
  });
};

exports.deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM users WHERE id = ?', [userId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

exports.getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};
