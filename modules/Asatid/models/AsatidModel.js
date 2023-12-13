// modules/Asatid/models/{fileName}Model.js
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

exports.getAllAsatid = () => {
  const sql = 'SELECT * FROM asatid';
  return executeQuery(sql);
};

exports.getAsatidById = (asatidId) => {
  const sql = 'SELECT * FROM asatid WHERE id = ?';
  return executeQuery(sql, [asatidId]);
};

exports.createAsatid = (asatidData) => {
  const sql = 'INSERT INTO asatid SET ?';
  return executeQuery(sql, [asatidData])
    .then((results) => {
      const newAsatid = { id: results.insertId, ...asatidData };
      return newAsatid;
    });
};

exports.updateAsatid = (asatidId, updatedAsatidData) => {
  const sql = 'UPDATE asatid SET ? WHERE id = ?';
  return executeQuery(sql, [updatedAsatidData, asatidId])
    .then(() => ({ id: asatidId, ...updatedAsatidData }));
};

exports.deleteAsatid = (asatidId) => {
  const sql = 'DELETE FROM asatid WHERE id = ?';
  return executeQuery(sql, [asatidId]);
};
