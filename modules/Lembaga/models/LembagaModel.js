// modules/Lembaga/models/{fileName}Model.js
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

exports.getAllLembaga = () => {
  const sql = 'SELECT * FROM lembaga';
  return executeQuery(sql);
};

exports.getLembagaById = (lembagaId) => {
  const sql = 'SELECT * FROM lembaga WHERE id = ?';
  return executeQuery(sql, [lembagaId]);
};

exports.createLembaga = (lembagaData) => {
  const sql = 'INSERT INTO lembaga SET ?';
  return executeQuery(sql, [lembagaData])
    .then((results) => {
      const newLembaga = { id: results.insertId, ...lembagaData };
      return newLembaga;
    });
};

exports.updateLembaga = (lembagaId, updatedLembagaData) => {
  const sql = 'UPDATE lembaga SET ? WHERE id = ?';
  return executeQuery(sql, [updatedLembagaData, lembagaId])
    .then(() => ({ id: lembagaId, ...updatedLembagaData }));
};

exports.deleteLembaga = (lembagaId) => {
  const sql = 'DELETE FROM lembaga WHERE id = ?';
  return executeQuery(sql, [lembagaId]);
};
