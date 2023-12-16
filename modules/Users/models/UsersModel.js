const { executeQuery } = require('../../../config/db');

exports.getAllUsers = () => {
  const sql = 'SELECT * FROM users';
  return executeQuery(sql);
};

exports.getUsersById = (usersId) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  return executeQuery(sql, [usersId]);
};

exports.getUserByUsername = (username) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  return executeQuery(sql, [username]);
};

exports.updateUserPassword = (userId, newPassword) => {
  const sql = 'UPDATE users SET password = ? WHERE id = ?';
  return executeQuery(sql, [newPassword, userId]);
};

exports.createUsers = (usersData) => {
  const sql = 'INSERT INTO users SET ?';
  return executeQuery(sql, [usersData])
    .then((results) => {
      const newUsers = { id: results.insertId, ...usersData };
      return newUsers;
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      throw error;
    });
};

exports.updateUsers = (usersId, updatedUsersData) => {
  const sql = 'UPDATE users SET ? WHERE id = ?';
  return executeQuery(sql, [updatedUsersData, usersId])
    .then(() => ({ id: usersId, ...updatedUsersData }))
    .catch((error) => {
      console.error("Error updating user:", error);
      throw error;
    });
};

exports.deleteUsers = (usersId) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  return executeQuery(sql, [usersId])
    .then((results) => {
      if (results.affectedRows > 0) {
        return { message: 'User deleted successfully' };
      } else {
        throw new Error('User not found');
      }
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      throw error;
    });
};
