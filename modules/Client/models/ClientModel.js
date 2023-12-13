// modules/Client/models/{fileName}Model.js
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

exports.getAllClient = () => {
  const sql = 'SELECT * FROM client';
  return executeQuery(sql);
};

exports.getClientById = (clientId) => {
  const sql = 'SELECT * FROM client WHERE id = ?';
  return executeQuery(sql, [clientId]);
};

exports.getClientByApp = (clientApp) => {
  const sql = 'SELECT * FROM client WHERE app = ?';
  return executeQuery(sql, [clientApp]);
};

exports.createClient = (clientData) => {
  const sql = 'INSERT INTO client SET ?';
  return executeQuery(sql, [clientData])
    .then((results) => {
      const newClient = { id: results.insertId, ...clientData };
      return newClient;
    });
};

exports.updateClient = (clientId, updatedClientData) => {
  const sql = 'UPDATE client SET ? WHERE id = ?';
  return executeQuery(sql, [updatedClientData, clientId])
    .then(() => ({ id: clientId, ...updatedClientData }));
};

exports.deleteClient = (clientId) => {
  const sql = 'DELETE FROM client WHERE id = ?';
  return executeQuery(sql, [clientId]);
};
