// modules/IbuSantri/models/{fileName}Model.js
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

exports.getAllIbuSantri = () => {
  const sql = 'SELECT * FROM ibu_santri';
  return executeQuery(sql);
};

exports.getIbuSantriById = (ibuSantriId) => {
  const sql = 'SELECT * FROM ibu_santri WHERE id = ?';
  return executeQuery(sql, [ibuSantriId]);
};

exports.createIbuSantri = (ibuSantriData) => {
  const sql = 'INSERT INTO ibu_santri SET ?';
  return executeQuery(sql, [ibuSantriData])
    .then((results) => {
      const newIbuSantri = { id: results.insertId, ...ibuSantriData };
      return newIbuSantri;
    });
};

exports.updateIbuSantri = (ibuSantriId, updatedIbuSantriData) => {
  const sql = 'UPDATE ibu_santri SET ? WHERE id = ?';
  return executeQuery(sql, [updatedIbuSantriData, ibuSantriId])
    .then(() => ({ id: ibuSantriId, ...updatedIbuSantriData }));
};

exports.deleteIbuSantri = (ibuSantriId) => {
  const sql = 'DELETE FROM ibu_santri WHERE id = ?';
  return executeQuery(sql, [ibuSantriId]);
};
