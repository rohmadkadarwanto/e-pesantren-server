// modules/Santri/models/{fileName}Model.js
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

exports.getAllSantri = () => {
  const sql = 'SELECT * FROM santri';
  return executeQuery(sql);
};

exports.getSantriById = (santriId) => {
  const sql = 'SELECT * FROM santri WHERE id = ?';
  return executeQuery(sql, [santriId]);
};

exports.getSantriByNis = (santriNis) => {
  const sql = 'SELECT * FROM santri WHERE nis = ?';
  return executeQuery(sql, [santriNis]);
};

exports.createSantri = (santriData) => {
  const sql = 'INSERT INTO santri SET ?';
  return executeQuery(sql, [santriData])
    .then((results) => {
      const newSantri = { id: results.insertId, ...santriData };
      return newSantri;
    });
};

exports.updateSantri = (santriId, updatedSantriData) => {
  const sql = 'UPDATE santri SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSantriData, santriId])
    .then(() => ({ id: santriId, ...updatedSantriData }));
};

exports.deleteSantri = (santriId) => {
  const sql = 'DELETE FROM santri WHERE id = ?';
  return executeQuery(sql, [santriId]);
};
