// modules/Users/models/{fileName}Model.js
const { pool } = require('../../../config/db');

const executeQuery = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};

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
    });
};

exports.updateUsers = (usersId, updatedUsersData) => {
  const sql = 'UPDATE users SET ? WHERE id = ?';
  return executeQuery(sql, [updatedUsersData, usersId])
    .then(() => ({ id: usersId, ...updatedUsersData }));
};

exports.deleteUsers = (usersId) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  return executeQuery(sql, [usersId]);
};
