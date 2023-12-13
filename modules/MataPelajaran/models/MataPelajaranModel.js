// modules/MataPelajaran/models/{fileName}Model.js
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

exports.getAllMataPelajaran = () => {
  const sql = 'SELECT * FROM mata_pelajaran';
  return executeQuery(sql);
};

exports.getMataPelajaranById = (mataPelajaranId) => {
  const sql = 'SELECT * FROM mata_pelajaran WHERE id = ?';
  return executeQuery(sql, [mataPelajaranId]);
};

exports.createMataPelajaran = (mataPelajaranData) => {
  const sql = 'INSERT INTO mata_pelajaran SET ?';
  return executeQuery(sql, [mataPelajaranData])
    .then((results) => {
      const newMataPelajaran = { id: results.insertId, ...mataPelajaranData };
      return newMataPelajaran;
    });
};

exports.updateMataPelajaran = (mataPelajaranId, updatedMataPelajaranData) => {
  const sql = 'UPDATE mata_pelajaran SET ? WHERE id = ?';
  return executeQuery(sql, [updatedMataPelajaranData, mataPelajaranId])
    .then(() => ({ id: mataPelajaranId, ...updatedMataPelajaranData }));
};

exports.deleteMataPelajaran = (mataPelajaranId) => {
  const sql = 'DELETE FROM mata_pelajaran WHERE id = ?';
  return executeQuery(sql, [mataPelajaranId]);
};
