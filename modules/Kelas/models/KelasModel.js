// modules/Kelas/models/{fileName}Model.js
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

exports.getAllKelas = () => {
  const sql = 'SELECT * FROM kelas';
  return executeQuery(sql);
};

exports.getKelasById = (kelasId) => {
  const sql = 'SELECT * FROM kelas WHERE id = ?';
  return executeQuery(sql, [kelasId]);
};

exports.createKelas = (kelasData) => {
  const sql = 'INSERT INTO kelas SET ?';
  return executeQuery(sql, [kelasData])
    .then((results) => {
      const newKelas = { id: results.insertId, ...kelasData };
      return newKelas;
    });
};

exports.updateKelas = (kelasId, updatedKelasData) => {
  const sql = 'UPDATE kelas SET ? WHERE id = ?';
  return executeQuery(sql, [updatedKelasData, kelasId])
    .then(() => ({ id: kelasId, ...updatedKelasData }));
};

exports.deleteKelas = (kelasId) => {
  const sql = 'DELETE FROM kelas WHERE id = ?';
  return executeQuery(sql, [kelasId]);
};
