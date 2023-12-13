// modules/WaliSantri/models/{fileName}Model.js
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

exports.getAllWaliSantri = () => {
  const sql = 'SELECT * FROM wali_santri';
  return executeQuery(sql);
};

exports.getWaliSantriById = (waliSantriId) => {
  const sql = 'SELECT * FROM wali_santri WHERE id = ?';
  return executeQuery(sql, [waliSantriId]);
};

exports.createWaliSantri = (waliSantriData) => {
  const sql = 'INSERT INTO wali_santri SET ?';
  return executeQuery(sql, [waliSantriData])
    .then((results) => {
      const newWaliSantri = { id: results.insertId, ...waliSantriData };
      return newWaliSantri;
    });
};

exports.updateWaliSantri = (waliSantriId, updatedWaliSantriData) => {
  const sql = 'UPDATE wali_santri SET ? WHERE id = ?';
  return executeQuery(sql, [updatedWaliSantriData, waliSantriId])
    .then(() => ({ id: waliSantriId, ...updatedWaliSantriData }));
};

exports.deleteWaliSantri = (waliSantriId) => {
  const sql = 'DELETE FROM wali_santri WHERE id = ?';
  return executeQuery(sql, [waliSantriId]);
};
