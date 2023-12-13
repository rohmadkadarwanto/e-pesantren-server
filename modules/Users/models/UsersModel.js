// modules/Users/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getUsersById = (usersId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM users WHERE id = ?', [usersId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
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
exports.createUsers = (usersData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO users SET ?', [usersData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newUsers = { id: results.insertId, ...usersData };
        resolve(newUsers);
      }
    });
  });
};
exports.updateUsers = (usersId, updatedUsersData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE users SET ? WHERE id = ?', [updatedUsersData, usersId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: usersId, ...updatedUsersData });
      }
    });
  });
};
exports.deleteUsers = (usersId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM users WHERE id = ?', [usersId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
